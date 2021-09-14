import { defineTable } from '@atek-cloud/adb-api'

export const USER = {
  ID: "atek.cloud/user",
  REVISION: 1,
  DEFINITION: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "username": {
        "type": "string",
        "minLength": 3
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
      "hashedPassword"
    ]
  },
  TEMPLATES: {
    "table": {
      "title": "Atek Users",
      "description": "Users registered on this Atek server."
    },
    "record": {
      "title": "{{/username}}"
    }
  }
}

export interface User {
  username: string;
  hashedPassword: string;
  role: Role;
}

export enum Role {
  none = '',
  admin = 'admin'
}

export const users = defineTable<User>(USER.ID, {
  revision: USER.REVISION,
  templates: USER.TEMPLATES,
  definition: USER.DEFINITION
})