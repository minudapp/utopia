import { StatusCode, StatusText, type HttpStatusCode } from "./status-codes";

export class BaseError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = this.constructor.name;
    this.cause = cause;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class HttpError extends BaseError {
  readonly #statusCode: HttpStatusCode;

  constructor(message: string, statusCode: HttpStatusCode, cause?: unknown) {
    super(message, cause);
    this.#statusCode = statusCode;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export class BadRequestError extends HttpError {
  constructor(message = StatusText.BAD_REQUEST, cause?: unknown) {
    super(message, StatusCode.BAD_REQUEST, cause);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = StatusText.UNAUTHORIZED, cause?: unknown) {
    super(message, StatusCode.UNAUTHORIZED, cause);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message = StatusText.FORBIDDEN, cause?: unknown) {
    super(message, StatusCode.FORBIDDEN, cause);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = StatusText.NOT_FOUND, cause?: unknown) {
    super(message, StatusCode.NOT_FOUND, cause);
  }
}

export class ConflictError extends HttpError {
  constructor(message = StatusText.CONFLICT, cause?: unknown) {
    super(message, StatusCode.CONFLICT, cause);
  }
}

export class UnprocessableEntityError extends HttpError {
  constructor(message = StatusText.UNPROCESSABLE_ENTITY, cause?: unknown) {
    super(message, StatusCode.UNPROCESSABLE_ENTITY, cause);
  }
}

export class TooManyRequestsError extends HttpError {
  constructor(message = StatusText.TOO_MANY_REQUESTS, cause?: unknown) {
    super(message, StatusCode.TOO_MANY_REQUESTS, cause);
  }
}

export class InternalServerError extends HttpError {
  constructor(message = StatusText.INTERNAL_SERVER_ERROR, cause?: unknown) {
    super(message, StatusCode.INTERNAL_SERVER_ERROR, cause);
  }
}

export class NotImplementedError extends HttpError {
  constructor(message = StatusText.NOT_IMPLEMENTED, cause?: unknown) {
    super(message, StatusCode.NOT_IMPLEMENTED, cause);
  }
}

export class BadGatewayError extends HttpError {
  constructor(message = StatusText.BAD_GATEWAY, cause?: unknown) {
    super(message, StatusCode.BAD_GATEWAY, cause);
  }
}

export class ServiceUnavailableError extends HttpError {
  constructor(message = StatusText.SERVICE_UNAVAILABLE, cause?: unknown) {
    super(message, StatusCode.SERVICE_UNAVAILABLE, cause);
  }
}

export class GatewayTimeoutError extends HttpError {
  constructor(message = StatusText.GATEWAY_TIMEOUT, cause?: unknown) {
    super(message, StatusCode.GATEWAY_TIMEOUT, cause);
  }
}

export class ServerActionError extends HttpError {
  constructor(
    message: string,
    statusCode: HttpStatusCode = StatusCode.INTERNAL_SERVER_ERROR,
    cause?: unknown,
  ) {
    super(message, statusCode, cause);
  }
}

export function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export function isBaseError(error: unknown): error is BaseError {
  return error instanceof BaseError;
}

export function isHttpError(error: unknown): error is HttpError {
  return error instanceof HttpError;
}

export function isServerActionError(
  error: unknown,
): error is ServerActionError {
  return error instanceof ServerActionError;
}
