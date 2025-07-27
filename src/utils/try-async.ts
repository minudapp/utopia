import { unstable_rethrow } from "next/navigation";

import { BaseError, isBaseError, isError } from "./errors";
import { isUndefined } from "./guards";

type Result<TData> =
  | { success: true; data: TData }
  | { success: false; error: BaseError };

function success<TData>(data: TData): Result<TData> {
  return { success: true, data };
}

function failure<TData>(error: BaseError): Result<TData> {
  return { success: false, error };
}

type Options = {
  onError?: (error: BaseError) => void;
  onSuccess?: <TData>(data: TData) => void;
  logError?: boolean;
};

export async function tryAsync<TData>(
  promise: Promise<TData>,
  options: Options = {},
): Promise<Result<TData>> {
  try {
    const data = await promise;
    if (!isUndefined(options.onSuccess)) {
      options.onSuccess(data);
    }

    return success(data);
  } catch (error) {
    unstable_rethrow(error);

    if (options.logError) {
      console.error(error);
    }

    if (isBaseError(error)) {
      return failure(error);
    }

    if (isError(error)) {
      return failure(new BaseError(error.message, error));
    }

    return failure(new BaseError("An unknown error occurred", error));
  }
}
