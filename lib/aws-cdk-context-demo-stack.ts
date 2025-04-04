import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsCdkContextDemoStackProps extends cdk.StackProps {
  // Define construct properties here
  readonly objective: string;
  readonly hello: string;
}

export class AwsCdkContextDemoStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: AwsCdkContextDemoStackProps,
  ) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkContextDemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
