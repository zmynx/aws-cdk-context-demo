#!/bin/bash
set -ex

echo "Running CDK synth..."
cdk synth --context env=dev --context objective=demo
