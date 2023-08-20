#!/bin/bash

TARTGET_DIR=/var/app/current/public
BUCKET=eb-test-public

aws s3 sync s3://$BUCKET $TARTGET_DIR --delete --no-progress
