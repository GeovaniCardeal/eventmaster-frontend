import { Header } from '../components/Header';

type DefaultLayoutProps = {
    children?: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
