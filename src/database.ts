import { defineSchema } from '@atek-cloud/adb-api'

export interface Database {
  dbId: string
  owner?: {
    userKey?: string
    serviceKey?: string
  }
  cachedMeta?: {
    writable?: boolean
  }
  access?: DatabaseAccess
  alias?: string
  createdAt: string
}

export enum DatabaseAccess {
  private = 'private',
  public = 'public'
}

export const DATABASE = {
  ID: 'atek.cloud/database',
  PKEY: '/dbId',
  DEFINITION: {
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'type': 'object',
    'properties': {
      'dbId': {
        'type': 'string'
      },
      'owner': {
        'type': 'object',
        'properties': {
          'userKey': {
            "type": "string"
          },
          'serviceKey': {
            "type": "string"
          }
        }
      },
      'cachedMeta': {
        'type': 'object',
        'properties': {
          'writable': {
            'type': 'boolean'
          }
        }
      },
      'access': {
        'type': 'string'
      },
      'alias': {'type': 'string'},
      'createdAt': {
        'type': 'string',
        'format': 'date-time'
      }
    },
    'required': [
      'dbId',
      'createdAt'
    ]
  }
}

export const databases = defineSchema<Database>(DATABASE.ID, {
  pkey: DATABASE.PKEY,
  jsonSchema: DATABASE.DEFINITION
})