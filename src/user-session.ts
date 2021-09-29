import { defineSchema } from '@atek-cloud/adb-api'

export const USER_SESSION = {
  ID: 'atek.cloud/user-session',
  PKEY: '/sessionId',
  DEFINITION: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "sessionId": {
        "type": "string"
      },
      "userKey": {
        "type": "string"
      },
      "username": {
        "type": "string"
      },
      "createdAt": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "sessionId",
      "userKey",
      "username",
      "createdAt"
    ]
  }
}

export interface UserSession {
  sessionId: string;
  userKey: string;
  username: string;
  createdAt: string;
}

export const userSessions = defineSchema<UserSession>(USER_SESSION.ID, {
  pkey: USER_SESSION.PKEY,
  jsonSchema: USER_SESSION.DEFINITION
})