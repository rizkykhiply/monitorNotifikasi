// Import Interface Entities
import { BaseEntity } from './base.entity';

// Define Menu Interface
export interface MasterAccount extends BaseEntity {
    group_id: number;
    account: string;
    description: string;
}
