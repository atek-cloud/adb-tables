import { defineTable } from '@atek-cloud/adb-api'

export interface Database {
  dbId: string
  owningUserKey?: string
  cachedMeta?: {
    displayName?: string
    writable?: boolean
  }
  network?: {
    access?: DatabaseNetworkAccess
  }
  services?: DatabaseServiceConfig[]
  createdBy?: {
    serviceKey?: string
  }
  createdAt: string
}

export interface DatabaseServiceConfig {
  serviceKey: string
  alias?: string
  persist?: boolean
  presync?: boolean
}

export enum DatabaseNetworkAccess {
  private = 'private',
  public = 'public'
}

export const DATABASE = {
  ID: 'atek.cloud/database',
  REVISION: 1,
  TEMPLATES: {
    table: {
      title: 'Databases',
      description: 'Settings and cached state for databases.'
    },
    record: {
      key: '{{/dbId}}',
      title: 'Database ID: {{/dbId}}'
    }
  },
  DEFINITION: {
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'type': 'object',
    'properties': {
      'dbId': {
        'type': 'string'
      },
      'owningUserKey': {
        "type": "string"
      },
      'cachedMeta': {
        'type': 'object',
        'properties': {
          'displayName': {
            'type': 'string'
          },
          'writable': {
            'type': 'boolean'
          }
        }
      },
      'network': {
        'type': 'object',
        'properties': {
          'access': {'type': 'string'}
        }
      },
      'services': {
        'type': 'array',
        'items': {
          'type': 'object',
          'properties': {
            'serviceKey': {
              'type': 'string'
            },
            'alias': {
              'type': 'string'
            },
            'persist': {
              'type': 'boolean'
            },
            'presync': {
              'type': 'boolean'
            }
          },
          'required': [
            'serviceKey'
          ]
        }
      },
      'createdBy': {
        'type': 'object',
        'properties': {
          'serviceKey': {
            'type': 'string'
          }
        }
      },
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

export const databases = defineTable<Database>(DATABASE.ID, {
  revision: DATABASE.REVISION,
  templates: DATABASE.TEMPLATES,
  definition: DATABASE.DEFINITION
})