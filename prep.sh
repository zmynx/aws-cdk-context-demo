#!/bin/bash
set -ex

echo "Creating a directory for CDK Application..."
mkdir aws-cdk-context-demo && pushd aws-cdk-context-demo

echo "Initializing the aws-cdk-contenxt-demo CDK Application..."
cdk init --app aws-cdk-contenxt-demo --language=typescript

echo "Setting up AWS Account & Region..."
set CDK_DEFAULT_ACCOUNT='1234567890'
set CDK_DEFAULT_REGION='us-east-1'

echo "Bootstraping environment..."
cdk bootsrap
