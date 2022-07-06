import { tableSchema } from "@nozbe/watermelondb/Schema";

export const shoppingSchema = tableSchema({
    name: 'shoppings',
    columns: [
        { name: 'shopping_id', type: 'string' }
    ],
})