import { defineTable } from '@atek-cloud/adb-api'

export const ACCOUNT_SESSION = {
  ID: 'atek.cloud/account-session',
  REVISION: 1,
  DEFINITION: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "sessionId": {
        "type": "string"
      },
      "accountId": {
        "type": "string"
      },
      "createdAt": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "sessionId",
      "accountId",
      "createdAt"
    ]
  },
  TEMPLATES: {
    "table": {
      "title": "Accounts Sessions",
      "description": "Internal records of sessions with user accounts."
    },
    "record": {
      "key": "{{/sessionId}}",
      "title": "Session for {{/username}} created at {{/createdAt}}"
    }
  }
}

export interface AccountSession {
  sessionId: string;
  accountId: string;
  createdAt: string;
}

export const accountSessions = defineTable<AccountSession>(ACCOUNT_SESSION.ID, {
  revision: ACCOUNT_SESSION.REVISION,
  templates: ACCOUNT_SESSION.TEMPLATES,
  definition: ACCOUNT_SESSION.DEFINITION
})