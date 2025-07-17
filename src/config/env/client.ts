import z from "zod";

const EnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url(),
});

function validateEnv() {
  const result = EnvSchema.safeParse({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  });
  if (!result.success) {
    console.error(z.prettifyError(result.error));
    process.exit(1);
  }

  return result.data;
}

export const env = validateEnv();
