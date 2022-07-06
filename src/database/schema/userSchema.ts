import { tableSchema } from "@nozbe/watermelondb/Schema";

export const userSchema = tableSchema({
    name: 'users',
    columns: [
        {
            name: 'user_id',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        }
    ]
})