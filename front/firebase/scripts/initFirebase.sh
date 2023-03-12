#!/bin/bash

source ./.env

FIREBASE_CONFIG=$(cat << EOS
{
  "projects": {
    "default": "${NEXT_PUBLIC_FIREBASE_PROJECT_ID}"
  }
}
EOS
)

echo ${FIREBASE_CONFIG} > /home/app/firebase/.firebaserc
touch /home/app/firebase/firestore.indexes.json
touch /home/app/firebase/firestore.rules
touch /home/app/firebase/storage.rules 