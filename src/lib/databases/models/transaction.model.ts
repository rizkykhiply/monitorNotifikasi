// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Constant
import { SERVICE_KODEPOS } from '@lib/constants';

// Define Query Find All Transaction In
const findAllTransactionIn = async (kodePos: string) => {
    const getQuery = `
        SELECT b.namaLengkap as nama_visitor, c.nama as nama_karyawan, 
        CASE
            WHEN d.nama IS NULL THEN "-"
            ELSE d.nama
        END AS divisi, b.noPolisi as no_polisi_visitor, c.noPolisi as no_polisi_karyawan, a.imgIn as imageIn, 
        DATE_FORMAT(a.dateIn, "%Y-%m-%d %H:%i:%s") as dateIn
        FROM tblTransaksi as a
        LEFT JOIN tblRegistrasi as b ON a.idVisitor = b.id
        LEFT JOIN tblKaryawan as c ON a.idKaryawan = c.id
        LEFT JOIN tblDivisi as d ON c.idDivisi = d.id
        WHERE 
            a.isIn = 1 AND a.isOut = 0 AND
            a.kodePos = ?
        ORDER BY a.dateIn DESC
        LIMIT 1
    `;

    const [result] = await baseQuery(getQuery, [kodePos]);
    return result;
};

// Define Query Find All Transaction Out
const findAllTransactionOut = async (kodePos: string) => {
    const getQuery = `
        SELECT b.namaLengkap as nama_visitor, c.nama as nama_karyawan, 
        CASE
            WHEN d.nama IS NULL THEN "-"
            ELSE d.nama
        END AS divisi, b.noPolisi as no_polisi_visitor, c.noPolisi as no_polisi_karyawan, a.imgOut as imageOut, 
        DATE_FORMAT(a.dateOut, "%Y-%m-%d %H:%i:%s") as dateOut
        FROM tblTransaksi as a
        LEFT JOIN tblRegistrasi as b ON a.idVisitor = b.id
        LEFT JOIN tblKaryawan as c ON a.idKaryawan = c.id
        LEFT JOIN tblDivisi as d ON c.idDivisi = d.id
        WHERE 
            a.isIn = 1 AND a.isOut = 1 AND
            a.kodePos = ?
        ORDER BY a.dateOut DESC
        LIMIT 1
    `;

    const [result] = await baseQuery(getQuery, [kodePos]);
    return result;
};

// Assign All Query Transaction
const exported = {
    findAllTransactionIn,
    findAllTransactionOut,
};

// Export Query Transaction
export default exported;
