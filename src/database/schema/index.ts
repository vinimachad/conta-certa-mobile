import { appSchema } from "@nozbe/watermelondb/Schema";
import { shoppingSchema } from "./shoppingSchema";

export const schemas = appSchema({
    version: 2,
    tables: [
        shoppingSchema
    ]
})