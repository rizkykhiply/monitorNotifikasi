// Define Create Trx Jurnal Head Interface
export interface CreateTrxHead {
    date: string;
    trxNo: string;
    currencyId: number;
    accountId: number;
    trxType: number;
    description: string;
    kurs: number;
    amount: number;
    totalAmount: number;
    notes: string;
    createdBy: number;
}
