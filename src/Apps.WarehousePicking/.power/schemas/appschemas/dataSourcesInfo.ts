/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * This file is auto-generated. Do not modify it manually.
 * Changes to this file may be overwritten.
 */

export const dataSourcesInfo = {
  "lab_warehouseitems": {
    "tableId": "",
    "version": "",
    "primaryKey": "lab_warehouseitemid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "lab_warehousetransactions": {
    "tableId": "",
    "version": "",
    "primaryKey": "lab_warehousetransactionid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "lab_warehouselocations": {
    "tableId": "",
    "version": "",
    "primaryKey": "lab_warehouselocationid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "lab_products": {
    "tableId": "",
    "version": "",
    "primaryKey": "lab_productid",
    "dataSourceType": "Dataverse",
    "apis": {}
  },
  "OpenFoodFacts": {
    "tableId": "",
    "version": "",
    "dataSourceType": "Connector",
    "apis": {
      "GetProductByBarcode": {
        "path": "/product/{barcode}.json",
        "method": "GET",
        "parameters": [
          { "name": "barcode", "in": "path", "required": true, "type": "string" }
        ]
      },
      "GetProductImage": {
        "path": "/product-image",
        "method": "GET",
        "parameters": [
          { "name": "imageUrl", "in": "query", "required": true, "type": "string" }
        ],
        "responseInfo": {
          "200": { "type": "file" }
        }
      }
    }
  }
};
