// Import Modules
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Import Assets
import SCGLogo from '../../../public/scg-logo.png';

// Import Styles
import styles from './styles.module.css';

// Define Navbar Component
const Navbar = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div className={styles.navbar_container}>
            <Image src={SCGLogo} alt="Logo" width={150} />
            <div className={styles.navbar_date}>
                <span>{date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>{date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</span>
            </div>
        </div>
    );
};

export default Navbar;
