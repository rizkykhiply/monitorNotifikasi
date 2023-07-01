// Import Modules
import { GetServerSideProps } from 'next';
import Head from 'next/head';

// Import Component
import Navbar from '@components/Navbar/Navbar';

// Import Assets
import DefaultImage from '../../../public/default-image.png';

// Import Styles
import styles from './styles.module.css';
import Image from 'next/image';

// Define Monitoring Page
const MonitoringPage = () => {
    return (
        <>
            <Head>
                <title>Monitoring - SCG Monitoring</title>
            </Head>
            <Navbar />
            <div className={styles.monitoring_container}>
                <span className={styles.monitoring_title}>Monitoring Visitor</span>

                <div className={styles.monitoring_system}>
                    <div>
                        <div className={styles.monitoring_data}>
                            <span className={styles.monitoring_data_title}>Nama</span>
                            <span className={styles.monitoring_data_text}>Rendy Ferdiansyah</span>
                        </div>
                        <div className={styles.monitoring_data}>
                            <span className={styles.monitoring_data_title}>Divisi</span>
                            <span className={styles.monitoring_data_text}>IT</span>
                        </div>
                        <div className={styles.monitoring_data}>
                            <span className={styles.monitoring_data_title}>No Polisi</span>
                            <span className={styles.monitoring_data_text}>B1234UKM</span>
                        </div>
                        <div className={styles.monitoring_data}>
                            <span className={styles.monitoring_data_title}>Time</span>
                            <span className={styles.monitoring_data_text}>2023-07-01 00:00:00</span>
                        </div>
                    </div>
                    <div className={styles.monitoring_image}>
                        <Image src={DefaultImage} alt="Image" width={400} height={400} />
                    </div>
                </div>
            </div>
        </>
    );
};

// Define SSR Monitoring Page
export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {},
    };
};

// Export Monitoring Page
export default MonitoringPage;
