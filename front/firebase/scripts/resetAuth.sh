#!/bin/bash

source ./.env

curl -v -X DELETE "http://localhost:9099/emulator/v1/projects/${FIREBASE_ADMIN_PROJECT_ID}/accounts"

