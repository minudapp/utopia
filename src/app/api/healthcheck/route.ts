import { logger } from "@/lib/logger";

export function GET() {
  logger.info("Health check endpoint hit");

  return Response.json(
    { status: "ok", timestamp: Date.now() },
    { status: 200 },
  );
}
