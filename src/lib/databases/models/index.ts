// Import All Models
import { default as baseModel } from './base.model';
import { default as masterAccount } from './master-account.model';
import { default as masterCurrency } from './master-currency.model';
import { default as menu } from './menu.model';
import { default as trxJurnalDet } from './trx-jurnal-detail.model';
import { default as trxJurnalHead } from './trx-jurnal-header.model';
import { default as user } from './user.model';

// Assign All Models
const models = {
    baseModel,
    masterAccount,
    masterCurrency,
    menu,
    trxJurnalDet,
    trxJurnalHead,
    user,
};

// Export Models
export { models };
