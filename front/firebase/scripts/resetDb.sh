#!/bin/bash

source ./.env

curl -v -X DELETE "http://localhost:8080/emulator/v1/projects/${FIREBASE_ADMIN_PROJECT_ID}/databases/(default)/documents"