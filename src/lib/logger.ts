import "server-only";
import pino from "pino";

// import { env } from "@/config/env/server";
import { isDevelopment } from "@/utils/environment";

function getTransport() {
  if (isDevelopment()) {
    return {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    };
  }

  return undefined;
}

export const logger = pino({
  level: "info",
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
  transport: getTransport(),
});
