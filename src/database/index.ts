import Database from "@nozbe/watermelondb/Database";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { schemas } from "./schema";
import Model from "@nozbe/watermelondb/Model";
import { Shopping } from "./models/Shopping";

const adapter = new SQLiteAdapter({
    schema: schemas
})

export const database = new Database({
    adapter,
    modelClasses: [Shopping]
})

export async function createNewRecord(tableName: string, success: (record: Model) => void) {
    await database.write(async () => {
        await database.get(tableName).create(success)
    })
}

export async function listRecord(tableName: string): Promise<Model[]> {
    return await database.get(tableName).query().fetch()
}

export async function findById(tableName: string, id: string): Promise<Model> {
    return await database.get(tableName).find(id)
}