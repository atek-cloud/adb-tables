import { defineSchema } from '@atek-cloud/adb-api'

export const SERVICE = {
  ID: "atek.cloud/service",
  DEFINITION: {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "owningUserKey": {
        "type": "string"
      },
      "sourceUrl": {
        "type": "string",
        "format": "uri"
      },
      "desiredVersion": {
        "type": "string"
      },
      "package": {
        "type": "object",
        "properties": {
          "sourceType": {
            "type": "string"
          },
          "installedVersion": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "sourceType"
        ]
      },
      "manifest": {
        "$ref": "#/definitions/ServiceManifest"
      },
      "config": {
        "$ref": "#/definitions/ServiceConfig"
      }
    },
    "required": [
      "id",
      "owningUserKey",
      "sourceUrl",
      "package"
    ],
    "definitions": {
      "ServiceManifest": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "author": {
            "type": "string"
          },
          "license": {
            "type": "string"
          },
          "frame": {
            "type": "boolean"
          },
          "exports": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "api": {
                  "type": "string"
                },
                "path": {
                  "type": "string"
                },
                "transport": {
                  "type": "string"
                }
              },
              "required": [
                "api"
              ]
            }
          }
        }
      },
      "ServiceConfig": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      }
    }
  }
}

export interface Service {
  id: string;
  owningUserKey: string;
  sourceUrl: string;
  desiredVersion?: string;
  package: {
      sourceType: SourceTypeEnum
      installedVersion?: string
      title?: string
    };
  manifest?: ServiceManifest;
  config?: ServiceConfig;
}

export interface ServiceManifest {
  name?: string;
  description?: string;
  author?: string;
  license?: string;
  frame?: boolean;
  exports?: ApiExportDesc[];
}

export interface ApiExportDesc {
  api: string;
  path?: string;
  transport?: ApiTransportEnum;
}

export interface ServiceConfig {
  [key: string]: string;
}

export enum SourceTypeEnum {
  file = 'file',
  git = 'git'
}

export enum ApiTransportEnum {
  rpc = 'rpc',
  proxy = 'proxy'
}

export const services = defineSchema<Service>(SERVICE.ID, {
  jsonSchema: SERVICE.DEFINITION
})
