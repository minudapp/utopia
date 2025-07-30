import { unstable_rethrow } from "next/navigation";

import { BaseError, isBaseError, isError } from "./errors";
import { isUndefined } from "./guards";

type Result<Output> =
  | { success: true; data: Output }
  | { success: false; error: BaseError };

function success<Output>(data: Output): Result<Output> {
  return { success: true, data };
}

function failure<Output>(error: BaseError): Result<Output> {
  return { success: false, error };
}

type Options<Output> = {
  onError?: (error: BaseError) => void;
  onSuccess?: (data: Output) => void;
};

export async function tryAsync<Output>(
  promise: Promise<Output>,
  options: Options<Output> = {},
): Promise<Result<Output>> {
  try {
    const data = await promise;
    if (!isUndefined(options.onSuccess)) {
      options.onSuccess(data);
    }

    return success(data);
  } catch (error) {
    unstable_rethrow(error);

    const err = isBaseError(error)
      ? error
      : new BaseError(
          isError(error) ? error.message : "An unknown error occurred",
          error,
        );

    if (!isUndefined(options.onError)) {
      options.onError(err);
    }

    return failure(err);
  }
}
