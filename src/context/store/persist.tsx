// Import Modules
import { PropsWithChildren, useEffect, useContext } from 'react';

// Import Context
import { INITIAL_STATE, StoreContext } from './context';

const PersistGate = ({ children }: PropsWithChildren<unknown>) => {
    const { actions } = useContext(StoreContext);

    useEffect(() => {
        let storage = localStorage.getItem('template-dashboard');
        if (!storage) {
            localStorage.setItem('template-dashboard', JSON.stringify(INITIAL_STATE));
        }
        // actions.UPDATE_PERSIST(storage ? JSON.parse(storage) : INITIAL_STATE);
    }, []);

    return <>{children}</>;
};

export default PersistGate;
