# aws-cdk-context-demo

![AWS CDK v2: Enhanced Context Management](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QoGxt4bj7zdvOqnrBqDU_Q.png)

# Intro

This repository is part of my article on [AWS CDK v2: Enhanced Context Management](https://medium.com/@lior.dux/aws-cdk-v2-enhanced-context-management-a8e1a5dc7b6f). It demonstrates how to use AWS CDK Context in your CDK project. And offers a simple approach to manage your CDK project configuration at scale.

# Each Branch Represents a Different Stage in the Article

Each branch represents a different stage in the article. The branch name is the stage name. The branch `main` is the inital stage.
branches:

- 1—Plain-and-simple
- 2—Easier-to-maintain
- 3-De-coupled
- 4-Use-YAML

## Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
