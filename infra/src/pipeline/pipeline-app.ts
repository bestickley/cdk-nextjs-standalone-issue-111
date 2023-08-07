import { App } from "aws-cdk-lib";
import { StageName } from "@myapp1/core/shared";
import { PipelineStack } from "./pipeline-stack";
import { Config } from "../config/config";

const app = new App();
const devConfig = new Config(StageName.Dev);
new PipelineStack(app, "myapp1-pipeline", { env: devConfig.env });
