#!/usr/bin/env node
import { App, Tags } from "aws-cdk-lib";
import { AwsCdkContextDemoStack } from "../lib/aws-cdk-context-demo-stack";
import { loadConfig } from "./utils";

const app = new App();

// Load context dynamically based on environment
const env = app.node.tryGetContext("env") as string;
const context = loadConfig(env);

// Pass context to the construct
new AwsCdkContextDemoStack(app, `${env}-AwsCdkContextDemoStack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  ...context, // Expand the context
});

