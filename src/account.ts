import { defineTable } from '@atek-cloud/adb-api'

export const ACCOUNT = {
  ID: "atek.cloud/account",
  REVISION: 1,
  DEFINITION: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "username": {
        "type": "string"
      },
      "hashedPassword": {
        "type": "string"
      },
      "role": {
        "type": "string"
      }
    },
    "required": [
      "username",
      "hashedPassword",
      "role"
    ]
  },
  TEMPLATES: {
    "table": {
      "title": "Accounts",
      "description": "Internal records of user account registrations."
    },
    "record": {
      "key": "{{/username}}",
      "title": "System account: {{/username}}"
    }
  }
}

export interface Account {
  username: string;
  hashedPassword: string;
  role: Role;
}

export enum Role {
  none = '',
  admin = 'admin'
}

export const accounts = defineTable<Account>(ACCOUNT.ID, {
  revision: ACCOUNT.REVISION,
  templates: ACCOUNT.TEMPLATES,
  definition: ACCOUNT.DEFINITION
})