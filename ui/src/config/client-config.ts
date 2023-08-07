import { SharedConfig } from "@myapp1/core/shared";

class ClientConfig extends SharedConfig {
  appTitle = "My App 2";
}

export const clientConfig = new ClientConfig(
  process.env["NEXT_PUBLIC_STAGE_NAME"],
);
