// Import Modules
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// Import Interfaces
import { PropsMonitoring } from '@interfaces/pages';

// Import Hooks
import { useHooksTransaction } from '@hooks/transaction';

// Import Component
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

// Import Assets
import DefaultImage from '../../../public/default-image.png';

// Import Styles
import styles from './styles.module.css';

// Define Monitoring Page
const MonitoringPage = (props: PropsMonitoring) => {
    // Define Hooks Transaction
    const { data } = useHooksTransaction(props.pos);

    return (
        <>
            <Head>
                <title>Monitoring - SCG Indonesia</title>
            </Head>
            <section className={styles.monitoring_section}>
                <Navbar />
                <div className={styles.monitoring_container}>
                    {data?.map((value, index) => (
                        <div key={index}>
                            <div className={styles.monitoring_header}>
                                <span className={styles.monitoring_title}>
                                    Monitoring System ({value.gate.toUpperCase()} - {value.kodePos})
                                </span>
                                <span
                                    className={
                                        value.gate === 'in' && value.dateIn
                                            ? styles.monitoring_indicator_in
                                            : value.gate === 'out' && value.dateOut
                                            ? styles.monitoring_indicator_out
                                            : ''
                                    }
                                />
                            </div>
                            <div className={styles.monitoring_detail}>
                                <div>
                                    <div className={styles.monitoring_data}>
                                        <span className={styles.monitoring_data_title}>Nama</span>
                                        <span className={styles.monitoring_data_text}>
                                            {value?.nama_visitor ? value.nama_visitor : value?.nama_karyawan ? value.nama_karyawan : '-'}
                                        </span>
                                    </div>
                                    <div className={styles.monitoring_data}>
                                        <span className={styles.monitoring_data_title}>Divisi</span>
                                        <span className={styles.monitoring_data_text}>{value?.divisi ? value.divisi : '-'}</span>
                                    </div>
                                    <div className={styles.monitoring_data}>
                                        <span className={styles.monitoring_data_title}>No Polisi</span>
                                        <span className={styles.monitoring_data_text}>
                                            {value?.no_polisi_visitor
                                                ? value.no_polisi_visitor
                                                : value?.no_polisi_karyawan
                                                ? value.no_polisi_karyawan
                                                : '-'}
                                        </span>
                                    </div>
                                    <div className={styles.monitoring_data}>
                                        <span className={styles.monitoring_data_title}>Time</span>
                                        <span className={styles.monitoring_data_text}>
                                            {value?.dateIn ? value.dateIn : value?.dateOut ? value.dateOut : '-'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={
                                            value?.image_visitor
                                                ? value.image_visitor
                                                : value?.image_karyawan
                                                ? value.image_karyawan
                                                : DefaultImage
                                        }
                                        alt="Image"
                                        width={400}
                                        height={250}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </section>
        </>
    );
};

// Define SSR Monitoring Page
export const getServerSideProps: GetServerSideProps = async (context) => {
    const getPos = [
        {
            kodePos: 'PM02',
            gate: 'in',
        },
        {
            kodePos: 'PK02',
            gate: 'out',
        },
        {
            kodePos: 'PM03',
            gate: 'in',
        },
        {
            kodePos: 'PK03',
            gate: 'out',
        },
    ];

    return {
        props: {
            pos: getPos,
        },
    };
};

// Export Monitoring Page
export default MonitoringPage;
