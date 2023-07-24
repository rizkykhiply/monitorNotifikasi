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
    const { data } = useHooksTransaction(props.kodePos, props.gate);

    return (
        <>
            <Head>
                <title>Monitoring - SCG Indonesia</title>
            </Head>
            <section className={styles.monitoring_section}>
                <Navbar />
                <div className={styles.monitoring_container}>
                    <span className={styles.monitoring_title}>Monitoring System</span>
                    <span className={styles.monitoring_sub_title}>(Gate OUT)</span>
                    <div className={styles.monitoring_system}>
                        <div>
                            <div className={styles.monitoring_data}>
                                <span className={styles.monitoring_data_title}>Nama</span>
                                <span className={styles.monitoring_data_text}>
                                    {data?.nama_visitor ? data.nama_visitor : data?.nama_karyawan ? data.nama_karyawan : '-'}
                                </span>
                            </div>
                            <div className={styles.monitoring_data}>
                                <span className={styles.monitoring_data_title}>Divisi</span>
                                <span className={styles.monitoring_data_text}>{data?.divisi ? data.divisi : '-'}</span>
                            </div>
                            <div className={styles.monitoring_data}>
                                <span className={styles.monitoring_data_title}>No Polisi</span>
                                <span className={styles.monitoring_data_text}>
                                    {data?.no_polisi_visitor
                                        ? data.no_polisi_visitor
                                        : data?.no_polisi_karyawan
                                        ? data.no_polisi_karyawan
                                        : '-'}
                                </span>
                            </div>
                            <div className={styles.monitoring_data}>
                                <span className={styles.monitoring_data_title}>Time</span>
                                <span className={styles.monitoring_data_text}>{data?.dateOut ? data.dateOut : '-'}</span>
                            </div>
                        </div>
                        <div className={styles.monitoring_image}>
                            <Image src={DefaultImage} alt="Image" width={500} height={350} />
                        </div>
                        {/* <div className={styles.monitoring_image}>
                        <Image src={data?.imageOut} alt="Image" width={500} height={350} />
                    </div> */}
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

// Define SSR Monitoring Page
export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            kodePos: 'PK2',
            gate: 'out',
        },
    };
};

// Export Monitoring Page
export default MonitoringPage;
