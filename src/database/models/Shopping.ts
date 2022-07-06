import Model from "@nozbe/watermelondb/Model";
import { field } from '@nozbe/watermelondb/decorators'

export class Shopping extends Model {

    static table: string = 'shoppings'

    @field('shopping_id')
    shopping_id: string
}