// Define Create Trx Jurnal Head Interface
export interface CreateTrxHead {
    accountId: number;
    date: string;
    trxNo: string;
    totalAmount: number;
    trxType: number;
    createdBy: number;
}
