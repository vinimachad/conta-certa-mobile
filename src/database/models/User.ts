import Model from "@nozbe/watermelondb/Model";
import { field } from '@nozbe/watermelondb/decorators'

export class User extends Model {
    static table = 'users'

    @field('user_id')
    user_id: string
}