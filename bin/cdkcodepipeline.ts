#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkcodepipelineStack } from '../lib/cdkcodepipeline-stack';

const app = new cdk.App();
new CdkcodepipelineStack(app, 'CdkcodepipelineStack');
