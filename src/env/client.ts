// for code thanks to create-t3-app: https://github.com/t3-oss/create-t3-app
//
import { ZodFormattedError } from "zod";

import { clientEnv, clientSchema } from "./schema";

const _clientEnv = clientSchema.safeParse(clientEnv);

export const formatErrors = (
  errors: ZodFormattedError<Map<string, string>, string>
) => {
  return Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `NEXT_PUBLIC_${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);
};

if (!_clientEnv.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_clientEnv.error.format())
  );
  throw new Error("Invalid environment variables");
}

export const env = _clientEnv.data;
