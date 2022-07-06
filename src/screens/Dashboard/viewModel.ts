import { listRecord } from "../../database";
import { Shopping } from "../../database/models/Shopping";

export class ViewModel {

    async shoppingList(): Promise<Shopping[]> {
        return await listRecord('shoppings') as Shopping[]
    }
}