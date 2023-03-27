// Import Interface Entities
import { Access } from './access.entity';
import { BaseEntity } from './base.entity';

// Define User Interface
export interface User extends BaseEntity, Access {
    access_id: number;
    username: string;
    password: string;
    name: string;
}
