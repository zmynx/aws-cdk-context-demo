#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { AwsCdkContextDemoStack } from "../lib/aws-cdk-context-demo-stack";

const app = new App();

// Consume a context parameter and print it
const env = app.node.tryGetContext("env");
console.log(`env: ${env}`);

// Consume environment context parameters and pass them to the stack
const envContext = app.node.tryGetContext(env);
console.log(`envContext: ${JSON.stringify(envContext)}`);

const hello = envContext.hello;
console.log(`hello: ${hello}`);

new AwsCdkContextDemoStack(app, `${env}-AwsCdkContextDemoStack`, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  // Pass the context here
  // envContext: envContext,
});

