// Import Interface Entities
import { BaseEntity } from './base.entity';

// Define Master Currency Interface
export interface MasterCurrency extends BaseEntity {
    // Custom Alias
    name: string;
    // Default Column
    country: string;
    currency_format: string;
    currency_name: string;
}
