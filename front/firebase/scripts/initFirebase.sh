#!/bin/bash

FIREBASE_CONFIG=$(cat << EOS
{
  "projects": {
    "default": ${NEXT_PUBLIC_FIREBASE_PROJECT_ID}
  }
}
EOS
)

echo ${FIREBASE_CONFIG} > /home/app/firebase/.firebaserc
