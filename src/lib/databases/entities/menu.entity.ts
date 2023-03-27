// Import Interface Entities
import { BaseEntity } from './base.entity';

// Define Menu Interface
export interface Menu extends BaseEntity {
    name: string;
    level: number;
    path: number;
    header: number;
    icon: string;
    sort: number;
}
