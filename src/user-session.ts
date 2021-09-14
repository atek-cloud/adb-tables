import { defineTable } from '@atek-cloud/adb-api'

export const USER_SESSION = {
  ID: 'atek.cloud/user-session',
  REVISION: 1,
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
  },
  TEMPLATES: {
    "table": {
      "title": "Atek User Sessions",
      "description": "Login sessions for users on this Atek server."
    },
    "record": {
      "key": "{{/sessionId}}",
      "title": "Session for {{/username}} (key={{/userKey}}) created at {{/createdAt}}"
    }
  }
}

export interface UserSession {
  sessionId: string;
  userKey: string;
  username: string;
  createdAt: string;
}

export const userSessions = defineTable<UserSession>(USER_SESSION.ID, {
  revision: USER_SESSION.REVISION,
  templates: USER_SESSION.TEMPLATES,
  definition: USER_SESSION.DEFINITION
})