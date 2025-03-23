#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import { App, Tags } from "aws-cdk-lib";
import {
  AwsCdkContextDemoStack,
  AwsCdkContextDemoStackProps,
} from "../lib/aws-cdk-context-demo-stack";

const app = new App();

// Load context dynamically based on environment
const env = app.node.tryGetContext("env") || "dev";

// Parse reference to context file
let contextFilePath = app.node.tryGetContext(env);
if (contextFilePath.startsWith("@")) {
  contextFilePath = path.join(process.cwd(), contextFilePath.substring(1));
  console.log(`contextFilePath: ${contextFilePath}`);
} else {
  throw new Error(
    "Context file path must be relative to the current working directory, and be referenced with @",
  );
}

// Check if the context file exists
if (!fs.existsSync(contextFilePath)) {
  throw new Error(`Context file for environment '${env}' not found`);
}

// Extract context from the file, and pass it to the construct
const context = JSON.parse(
  fs.readFileSync(contextFilePath, "utf8"),
) as AwsCdkContextDemoStackProps;
console.log(`EnvProps: ${JSON.stringify(context, null, 2)}`);

// Pass context to the construct
new AwsCdkContextDemoStack(app, `${env}-AwsCdkContextDemoStack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  ...context, // Expand the context
});

