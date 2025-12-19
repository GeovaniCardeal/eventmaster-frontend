import { Header } from '../components/Header';

import styles from './styles.module.css';

type DefaultLayoutProps = {
    children?: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Header />
            <main className={styles.mainContent}>{children}</main>
        </>
    );
}
