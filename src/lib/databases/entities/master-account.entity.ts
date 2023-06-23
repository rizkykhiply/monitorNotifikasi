// Import Interface Entities
import { BaseEntity } from './base.entity';

// Define Master Account Interface
export interface MasterAccount extends BaseEntity {
    group_id: number;
    account: string;
    description: string;
}
