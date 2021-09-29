import { defineSchema } from '@atek-cloud/adb-api'

export const USER = {
  ID: "atek.cloud/user",
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
      },
      "settings": {
        "type": "object",
        "properties": {
          "mainServiceId": {"type": "string"}
        }
      }
    },
    "required": [
      "username",
      "hashedPassword"
    ]
  }
}

export interface User {
  username: string;
  hashedPassword: string;
  role: Role;
  settings: UserSettings;
}

export enum Role {
  none = '',
  admin = 'admin'
}

export interface UserSettings {
  mainServiceId: string
}

export const users = defineSchema<User>(USER.ID, {
  jsonSchema: USER.DEFINITION
})