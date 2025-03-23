#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { AwsCdkContextDemoStack } from "../lib/aws-cdk-context-demo-stack";

const app = new App();

// Consume a context parameter and print it
const env = app.node.tryGetContext("env");
console.log(`env: ${env}`);

new AwsCdkContextDemoStack(app, `${env}-AwsCdkContextDemoStack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

