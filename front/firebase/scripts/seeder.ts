import admin from 'firebase-admin'
import faker from '@faker-js/faker'
import { readJson } from '@/utils/readJson'

const serviceAccountKey = readJson('cert/serviceAccountKey.json')

