// Import Interface Entities
import { Access } from './access.entity';
import { BaseEntity } from './base.entity';

// Export Interface User
export interface User extends BaseEntity, Access {
    access_id: number;
    username: string;
    password: string;
    name: string;
}
