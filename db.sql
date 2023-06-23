-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               PostgreSQL 15.0, compiled by Visual C++ build 1914, 64-bit
-- Server OS:                    
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table public.access
CREATE TABLE IF NOT EXISTS "access" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''access_id_seq''::regclass)',
	"role" VARCHAR(25) NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NULL DEFAULT '0',
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id")
);

-- Dumping data for table public.access: -1 rows
/*!40000 ALTER TABLE "access" DISABLE KEYS */;
INSERT INTO "access" ("id", "role", "status", "is_deleted", "created_at", "updated_at", "deleted_at") VALUES
	(1, 'Administrator', 1, 0, '2023-05-23 14:56:46.155787', '2023-05-23 14:56:46.155787', NULL);
/*!40000 ALTER TABLE "access" ENABLE KEYS */;

-- Dumping structure for table public.access_detail
CREATE TABLE IF NOT EXISTS "access_detail" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''access_detail_id_seq''::regclass)',
	"access_id" INTEGER NULL DEFAULT NULL,
	"menu_id" INTEGER NULL DEFAULT NULL,
	"m_view" SMALLINT NOT NULL DEFAULT '1',
	"m_insert" SMALLINT NOT NULL DEFAULT '1',
	"m_update" SMALLINT NOT NULL DEFAULT '1',
	"m_delete" SMALLINT NOT NULL DEFAULT '1',
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "access_access_detail" ("access_id"),
	INDEX "menu_access_detail" ("menu_id"),
	CONSTRAINT "access_detail_access_id_fkey" FOREIGN KEY ("access_id") REFERENCES "access" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "access_detail_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "access_detail_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "access_detail_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menu" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "access_detail_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.access_detail: -1 rows
/*!40000 ALTER TABLE "access_detail" DISABLE KEYS */;
INSERT INTO "access_detail" ("id", "access_id", "menu_id", "m_view", "m_insert", "m_update", "m_delete", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(1, 1, 1, 1, 1, 1, 1, 1, 0, NULL, NULL, NULL, '2023-05-23 19:21:24.192092', '2023-05-23 19:21:24.192092', NULL),
	(2, 1, 2, 1, 1, 1, 1, 1, 0, NULL, NULL, NULL, '2023-05-23 19:21:50.854233', '2023-05-23 19:21:50.854233', NULL),
	(3, 1, 3, 1, 1, 1, 1, 1, 0, NULL, NULL, NULL, '2023-05-23 19:22:08.179728', '2023-05-23 19:22:08.179728', NULL),
	(4, 1, 4, 1, 1, 1, 1, 1, 0, NULL, NULL, NULL, '2023-05-23 19:22:52.76024', '2023-05-23 19:22:52.76024', NULL);
/*!40000 ALTER TABLE "access_detail" ENABLE KEYS */;

-- Dumping structure for table public.general_ledger
CREATE TABLE IF NOT EXISTS "general_ledger" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''general_ledger_id_seq''::regclass)',
	"group_id" INTEGER NULL DEFAULT NULL,
	"account_no" VARCHAR(25) NOT NULL,
	"amount" NUMERIC(12,2) NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "idx_group_general_ledger" ("group_id"),
	CONSTRAINT "general_ledger_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "general_ledger_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "general_ledger_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "master_group" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "general_ledger_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.general_ledger: -1 rows
/*!40000 ALTER TABLE "general_ledger" DISABLE KEYS */;
/*!40000 ALTER TABLE "general_ledger" ENABLE KEYS */;

-- Dumping structure for table public.hist_jurnal_detail
CREATE TABLE IF NOT EXISTS "hist_jurnal_detail" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''hist_jurnal_detail_id_seq''::regclass)',
	"hist_jurnal_header_id" INTEGER NULL DEFAULT NULL,
	"account_no" VARCHAR(25) NOT NULL,
	"amount" NUMERIC(12,2) NOT NULL,
	"trx_type" SMALLINT NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "idx_hist_jurnal_header_hist_jurnal_detail" ("hist_jurnal_header_id"),
	CONSTRAINT "hist_jurnal_detail_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "hist_jurnal_detail_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "hist_jurnal_detail_hist_jurnal_header_id_fkey" FOREIGN KEY ("hist_jurnal_header_id") REFERENCES "hist_jurnal_header" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "hist_jurnal_detail_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.hist_jurnal_detail: -1 rows
/*!40000 ALTER TABLE "hist_jurnal_detail" DISABLE KEYS */;
/*!40000 ALTER TABLE "hist_jurnal_detail" ENABLE KEYS */;

-- Dumping structure for table public.hist_jurnal_header
CREATE TABLE IF NOT EXISTS "hist_jurnal_header" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''hist_jurnal_header_id_seq''::regclass)',
	"trx_jurnal_header_id" INTEGER NULL DEFAULT NULL,
	"date" TIMESTAMP NOT NULL,
	"account_no" VARCHAR(25) NOT NULL,
	"total_amount" NUMERIC(12,2) NOT NULL,
	"trx_type" SMALLINT NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "idx_trx_jurnal_header_hist_jurnal_header" ("trx_jurnal_header_id"),
	CONSTRAINT "hist_jurnal_header_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "hist_jurnal_header_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "hist_jurnal_header_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.hist_jurnal_header: -1 rows
/*!40000 ALTER TABLE "hist_jurnal_header" DISABLE KEYS */;
/*!40000 ALTER TABLE "hist_jurnal_header" ENABLE KEYS */;

-- Dumping structure for table public.master_account
CREATE TABLE IF NOT EXISTS "master_account" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''master_account_id_seq''::regclass)',
	"group_id" INTEGER NULL DEFAULT NULL,
	"account" VARCHAR(25) NOT NULL,
	"description" TEXT NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "idx_master_group_master_account" ("group_id"),
	CONSTRAINT "master_account_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_account_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_account_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "master_group" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_account_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.master_account: -1 rows
/*!40000 ALTER TABLE "master_account" DISABLE KEYS */;
INSERT INTO "master_account" ("id", "group_id", "account", "description", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(1, 1, '101', 'Kas', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(6, 2, '203', 'Beban yang harus dibayar', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(5, 2, '205', 'Utang sewa gedung', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(4, 2, '201', 'Utang usaha', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(3, 1, '103', 'Piutang usaha', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(2, 1, '102', 'Persediaan barang', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(7, 3, '301', 'Modal', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(8, 4, '401', 'Pendapatan usaha', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(9, 4, '410', 'Pendapatan diluar usaha', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(10, 5, '502', 'Beban gaji karyawan', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(11, 5, '503', 'Beban sewa gedung', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(12, 5, '504', 'Beban penyesuaian piutang', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL),
	(13, 5, '505', 'Beban perlengkapan kantor', 1, 0, NULL, NULL, NULL, '2023-05-30 11:49:44.862868', '2023-05-30 11:49:44.862868', NULL);
/*!40000 ALTER TABLE "master_account" ENABLE KEYS */;

-- Dumping structure for table public.master_currency
CREATE TABLE IF NOT EXISTS "master_currency" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''master_currency_id_seq''::regclass)',
	"country" VARCHAR(50) NOT NULL,
	"currency_format" VARCHAR(25) NOT NULL,
	"currency_name" VARCHAR(50) NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "master_currency_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_currency_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_currency_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.master_currency: -1 rows
/*!40000 ALTER TABLE "master_currency" DISABLE KEYS */;
INSERT INTO "master_currency" ("id", "country", "currency_format", "currency_name", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(1, 'Indonesia', 'Rp', 'Indonesia Rupiah', 1, 0, NULL, NULL, NULL, '2023-05-30 11:25:11.865775', '2023-05-30 11:25:11.865775', NULL),
	(2, 'Amerika', '$', 'US Dollar', 1, 0, NULL, NULL, NULL, '2023-05-30 11:25:11.865775', '2023-05-30 11:25:11.865775', NULL);
/*!40000 ALTER TABLE "master_currency" ENABLE KEYS */;

-- Dumping structure for table public.master_group
CREATE TABLE IF NOT EXISTS "master_group" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''master_group_id_seq''::regclass)',
	"description" TEXT NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "master_group_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_group_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "master_group_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.master_group: -1 rows
/*!40000 ALTER TABLE "master_group" DISABLE KEYS */;
INSERT INTO "master_group" ("id", "description", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(1, 'Asset', 1, 0, NULL, NULL, NULL, '2023-05-25 15:22:32.306234', '2023-05-25 15:22:32.306234', NULL),
	(2, 'Kewajiban', 1, 0, NULL, NULL, NULL, '2023-05-25 15:22:32.306234', '2023-05-25 15:22:32.306234', NULL),
	(3, 'Modal', 1, 0, NULL, NULL, NULL, '2023-05-25 15:22:32.306234', '2023-05-25 15:22:32.306234', NULL),
	(4, 'Pendapatan', 1, 0, NULL, NULL, NULL, '2023-05-25 15:22:32.306234', '2023-05-25 15:22:32.306234', NULL),
	(5, 'Beban', 1, 0, NULL, NULL, NULL, '2023-05-25 15:22:32.306234', '2023-05-25 15:22:32.306234', NULL);
/*!40000 ALTER TABLE "master_group" ENABLE KEYS */;

-- Dumping structure for table public.menu
CREATE TABLE IF NOT EXISTS "menu" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''menu_id_seq''::regclass)',
	"name" VARCHAR(25) NOT NULL,
	"level" SMALLINT NOT NULL DEFAULT '0',
	"header" SMALLINT NOT NULL DEFAULT '0',
	"path" VARCHAR(50) NOT NULL DEFAULT '',
	"icon" VARCHAR(50) NOT NULL DEFAULT '',
	"sort" INTEGER NOT NULL DEFAULT '0',
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	CONSTRAINT "menu_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "menu_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "menu_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.menu: -1 rows
/*!40000 ALTER TABLE "menu" DISABLE KEYS */;
INSERT INTO "menu" ("id", "name", "level", "header", "path", "icon", "sort", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(1, 'Dashboard', 1, 0, '/dashboard', 'DashboardOutlined', 1, 1, 0, NULL, NULL, NULL, '2023-05-23 14:57:51.533465', '2023-05-23 14:57:51.533465', NULL),
	(3, 'Journal', 2, 2, '/transaction/journal', '', 3, 1, 0, NULL, NULL, NULL, '2023-05-23 14:59:26.246732', '2023-05-23 14:59:26.246732', NULL),
	(2, 'Transaction', 1, 0, '', 'AccountBalanceWalletOutlined', 2, 1, 0, NULL, NULL, NULL, '2023-05-23 14:57:51.533465', '2023-05-23 14:57:51.533465', NULL),
	(5, 'Neraca', 2, 4, '/report/neraca', '', 5, 1, 0, NULL, NULL, NULL, '2023-05-23 15:00:32.552782', '2023-05-23 15:00:32.552782', NULL),
	(6, 'Setting', 1, 0, '/setting', 'SettingsOutlined', 6, 1, 0, NULL, NULL, NULL, '2023-05-23 15:00:32.552782', '2023-05-23 15:00:32.552782', NULL),
	(4, 'Report', 1, 0, '', 'SummarizeOutlined', 4, 1, 0, NULL, NULL, NULL, '2023-05-23 15:00:32.552782', '2023-05-23 15:00:32.552782', NULL);
/*!40000 ALTER TABLE "menu" ENABLE KEYS */;

-- Dumping structure for table public.trx_jurnal_detail
CREATE TABLE IF NOT EXISTS "trx_jurnal_detail" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''trx_jurnal_detail_id_seq''::regclass)',
	"trx_jurnal_header_id" INTEGER NULL DEFAULT NULL,
	"account_id" INTEGER NULL DEFAULT NULL,
	"trx_type" SMALLINT NOT NULL,
	"description" TEXT NOT NULL,
	"kurs" NUMERIC(12,2) NOT NULL,
	"amount" NUMERIC(12,2) NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "idx_trx_jurnal_header_trx_jurnal_detail" ("trx_jurnal_header_id"),
	INDEX "idx_master_account_trx_jurnal_detail" ("account_id"),
	CONSTRAINT "trx_jurnal_detail_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "master_account" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_detail_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_detail_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_detail_trx_jurnal_header_id_fkey" FOREIGN KEY ("trx_jurnal_header_id") REFERENCES "trx_jurnal_header" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_detail_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.trx_jurnal_detail: -1 rows
/*!40000 ALTER TABLE "trx_jurnal_detail" DISABLE KEYS */;
INSERT INTO "trx_jurnal_detail" ("id", "trx_jurnal_header_id", "account_id", "trx_type", "description", "kurs", "amount", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(27, 29, 4, 2, '', 1.00, 200000.00, 1, 0, 2, NULL, NULL, '2023-06-22 16:16:13.044483', '2023-06-22 16:16:13.044483', NULL),
	(28, 30, 1, 1, '', 1.00, 30000000.00, 1, 0, 2, NULL, NULL, '2023-06-22 16:18:52.385953', '2023-06-22 16:18:52.385953', NULL),
	(29, 31, 4, 2, '', 1.00, 200000.00, 1, 0, 2, NULL, NULL, '2023-06-22 17:18:54.822876', '2023-06-22 17:18:54.822876', NULL),
	(30, 32, 6, 2, 'Pembayaran gaji bulan 6', 1.00, 200000.00, 1, 0, 2, NULL, NULL, '2023-06-22 17:24:07.336399', '2023-06-22 17:24:07.336399', NULL);
/*!40000 ALTER TABLE "trx_jurnal_detail" ENABLE KEYS */;

-- Dumping structure for table public.trx_jurnal_header
CREATE TABLE IF NOT EXISTS "trx_jurnal_header" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''trx_jurnal_header_id_seq''::regclass)',
	"account_id" INTEGER NULL DEFAULT NULL,
	"currency_id" INTEGER NULL DEFAULT NULL,
	"date" DATE NOT NULL,
	"trx_no" VARCHAR(50) NOT NULL,
	"trx_type" SMALLINT NOT NULL,
	"description" TEXT NOT NULL,
	"kurs" NUMERIC(12,2) NOT NULL,
	"amount" NUMERIC(12,2) NOT NULL,
	"total_amount" NUMERIC(12,2) NOT NULL,
	"notes" TEXT NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"created_by" INTEGER NULL DEFAULT NULL,
	"updated_by" INTEGER NULL DEFAULT NULL,
	"deleted_by" INTEGER NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	INDEX "idx_master_account_trx_jurnal_header" ("account_id"),
	INDEX "idx_master_currency_trx_jurnal_header" ("currency_id"),
	CONSTRAINT "trx_jurnal_header_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "master_account" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_header_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_header_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "master_currency" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_header_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT "trx_jurnal_header_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.trx_jurnal_header: -1 rows
/*!40000 ALTER TABLE "trx_jurnal_header" DISABLE KEYS */;
INSERT INTO "trx_jurnal_header" ("id", "account_id", "currency_id", "date", "trx_no", "trx_type", "description", "kurs", "amount", "total_amount", "notes", "status", "is_deleted", "created_by", "updated_by", "deleted_by", "created_at", "updated_at", "deleted_at") VALUES
	(29, 1, 1, '2023-06-22', 'TRX-MKKEXZI7', 1, '', 1.00, 200000.00, 200000.00, '', 1, 0, 2, NULL, NULL, '2023-06-22 16:16:13.044483', '2023-06-22 16:16:13.044483', NULL),
	(30, 5, 1, '2023-06-22', 'TRX-ZMUBVG6L', 2, '', 1.00, 30000000.00, 30000000.00, '', 1, 0, 2, NULL, NULL, '2023-06-22 16:18:52.385953', '2023-06-22 16:18:52.385953', NULL),
	(31, 2, 1, '2023-06-22', 'TRX-P93IHTHW', 1, 'Pembelian meja', 1.00, 200000.00, 200000.00, '', 1, 0, 2, NULL, NULL, '2023-06-22 17:18:54.822876', '2023-06-22 17:18:54.822876', NULL),
	(32, 10, 1, '2023-06-22', 'TRX-P93IHTHW', 1, 'Pembayaran gaji bulan 6', 1.00, 200000.00, 200000.00, '', 1, 0, 2, NULL, NULL, '2023-06-22 17:24:07.336399', '2023-06-22 17:24:07.336399', NULL);
/*!40000 ALTER TABLE "trx_jurnal_header" ENABLE KEYS */;

-- Dumping structure for table public.users
CREATE TABLE IF NOT EXISTS "users" (
	"id" INTEGER NOT NULL DEFAULT 'nextval(''users_id_seq''::regclass)',
	"access_id" INTEGER NULL DEFAULT NULL,
	"username" VARCHAR(25) NOT NULL,
	"email" VARCHAR(25) NOT NULL,
	"name" VARCHAR(50) NOT NULL,
	"password" VARCHAR(100) NOT NULL,
	"status" SMALLINT NOT NULL DEFAULT '1',
	"is_deleted" SMALLINT NOT NULL DEFAULT '0',
	"login_at" TIMESTAMP NULL DEFAULT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"updated_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"deleted_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id"),
	UNIQUE INDEX "users_username_key" ("username"),
	INDEX "idx_access_users" ("access_id"),
	CONSTRAINT "users_access_id_fkey" FOREIGN KEY ("access_id") REFERENCES "access" ("id") ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Dumping data for table public.users: 2 rows
/*!40000 ALTER TABLE "users" DISABLE KEYS */;
INSERT INTO "users" ("id", "access_id", "username", "email", "name", "password", "status", "is_deleted", "login_at", "created_at", "updated_at", "deleted_at") VALUES
	(5, 1, 'wkwkwkwk', 'asdasd@gmail.com', 'Adasd', '$2a$10$tUveQGJRU7yaH80eJUlj7.sNYfxlVu9vYH.A1qYcz4gEjQfwPqcyC', 1, 0, NULL, '2023-06-22 14:13:41.553988', '2023-06-22 14:13:41.553988', NULL),
	(2, 1, 'rendsyah', 'rendy_milan@hotmail.com', 'Rendy', '$2a$10$5gYH8VH6wQXvbariiM8LB.j4Bg6BSI7me79eAgEebUwakVo5/SCp6', 1, 0, '2023-06-23 13:40:53.450587', '2023-05-23 16:17:51.635072', '2023-05-23 16:17:51.635072', NULL),
	(3, 1, 'asdasd', 'asdasd@gmail.com', 'Asdasd', '$2a$10$yEC74uwBjcVMVInsf8j16OjzWxclcc4gZrIf0I08WvPHSfirKWfZ2', 1, 0, NULL, '2023-05-29 03:33:51.323129', '2023-05-29 03:33:51.323129', NULL),
	(4, 1, 'asdasdasd', 'asdasd@gmail.com', 'Asdad', '$2a$10$YMbsL7nY2itztbd/zTasgOhXdH/7UtYU48/wyBeSMjFB/HaqNsC.O', 1, 0, NULL, '2023-06-17 05:30:26.294673', '2023-06-17 05:30:26.294673', NULL);
/*!40000 ALTER TABLE "users" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
