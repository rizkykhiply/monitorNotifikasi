// Import Interface Entities
import { BaseEntity } from './base.entity';

// Define Trx Jurnal Header Interface
export interface TrxJurnalHeader extends BaseEntity {
    // Custom Alias
    count: string;
    // Default Column
    account_id: number;
    currency_id: number;
    date: string;
    trx_no: string;
    trx_type: number;
    description: string;
    kurs: string;
    amount: string;
    total_amount: string;
    notes: string;
}
