import { unstable_rethrow } from "next/navigation";

import { BaseError, isBaseError, isError } from "./errors";

function success<TData>(data: TData): ResultTuple<TData> {
  return [data, null];
}

function failure<TData>(error: BaseError): ResultTuple<TData> {
  return [null, error];
}

type ResultTuple<TData> = [TData, null] | [null, BaseError];

type Options = {
  onError?: (error: BaseError) => void;
  onSuccess?: <TData>(data: TData) => void;
  logError?: boolean;
};

export async function tryAsync<TData>(
  promise: Promise<TData>,
  options: Options = {},
): Promise<ResultTuple<TData>> {
  try {
    const data = await promise;
    if (options.onSuccess) {
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
