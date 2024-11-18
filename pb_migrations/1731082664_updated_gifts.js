/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bk5xt95ear6ybli")

  // remove
  collection.schema.removeField("53pb4cki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cybwmegq",
    "name": "day",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bk5xt95ear6ybli")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "53pb4cki",
    "name": "day",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("cybwmegq")

  return dao.saveCollection(collection)
})
