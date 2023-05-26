// Define Journal Initial Values Interface
export interface JournalInitialValues {
    accountId: string;
    date: string;
    totalAmount: string;
    trxType: number;

    amountDet: string;
    trxTypeDet: number;
}

interface MasterData {
    value: string | number;
    name: string;
}

interface JournalMasterData {
    masterAccount: MasterData;
    masterType: MasterData;
}

export interface PropsJournalPage {
    master: JournalMasterData;
}
