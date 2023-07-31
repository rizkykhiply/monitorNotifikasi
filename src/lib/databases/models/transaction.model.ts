// Import Base Query
import { baseQuery } from '@lib/databases';

// Define Query Find One Transaction In
const findOneTransactionIn = async (kodePos: string) => {
    const getQuery = `
        SELECT b.namaLengkap as nama_visitor, c.nama as nama_karyawan, 
        d.nama as divisi, b.noPolisi as no_polisi_visitor, c.noPolisi as no_polisi_karyawan, b.imageCam as image_visitor, c.image as image_karyawan, 
        DATE_FORMAT(a.dateIn, "%Y-%m-%d %H:%i:%s") as dateIn
        FROM tblTransaksi as a
        LEFT JOIN tblRegistrasi as b ON a.idVisitor = b.id
        LEFT JOIN tblKaryawan as c ON a.idKaryawan = c.id
        LEFT JOIN tblDivisi as d ON c.idDivisi = d.id
        WHERE 
            a.isIn = 1 AND a.isOut = 0 AND
            DATE_ADD(a.dateIn, INTERVAL 15 SECOND) > NOW() AND
            a.kodePos = ?
        ORDER BY a.dateIn DESC
        LIMIT 1
    `;

    const [result] = await baseQuery(getQuery, [kodePos]);
    return result;
};

// Define Query Find One Transaction Out
const findOneTransactionOut = async (kodePos: string) => {
    const getQuery = `
        SELECT b.namaLengkap as nama_visitor, c.nama as nama_karyawan, 
        d.nama as divisi, b.noPolisi as no_polisi_visitor, c.noPolisi as no_polisi_karyawan, b.imageCam as image_visitor, c.image as image_karyawan, 
        DATE_FORMAT(a.dateOut, "%Y-%m-%d %H:%i:%s") as dateOut
        FROM tblTransaksi as a
        LEFT JOIN tblRegistrasi as b ON a.idVisitor = b.id
        LEFT JOIN tblKaryawan as c ON a.idKaryawan = c.id
        LEFT JOIN tblDivisi as d ON c.idDivisi = d.id
        WHERE 
            a.isIn = 1 AND a.isOut = 1 AND
            DATE_ADD(a.dateOut, INTERVAL 15 SECOND) > NOW() AND
            a.kodePos = ?
        ORDER BY a.dateOut DESC
        LIMIT 1
    `;

    const [result] = await baseQuery(getQuery, [kodePos]);
    return result;
};

// Assign All Query Transaction
const exported = {
    findOneTransactionIn,
    findOneTransactionOut,
};

// Export Query Transaction
export default exported;
