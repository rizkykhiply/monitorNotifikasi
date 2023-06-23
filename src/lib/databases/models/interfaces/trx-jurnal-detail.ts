// Define Create Trx Jurnal Det Interface
export interface CreateTrxDet {
    trxJurnalHeadId: number;
    accountId: number;
    trxType: number;
    description: string;
    kurs: number;
    amount: number;
    createdBy: number;
}
