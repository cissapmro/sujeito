
import styles from './styles.module.scss';
import logo from '../../../public/images/logo.svg';
import Image from 'next/image';
import Link from "next/link";

export const Header = () => {
    return(
        <header className={styles.headerContainer}>
            <section className={styles.headerContent}>
                <a>
                    <Image src={logo} alt="logo" />
                </a>
            <nav>
            <Link href="/">
                Home
            </Link>
            <Link href="/posts">
                Conteúdos
            </Link>
            <Link href="/sobre">
                Quem Somos?
            </Link>
            </nav>
                <a className={styles.readyButton} type="button" href="https://sujeitoprogramador.com">Começar</a>
            </section>
        </header>
    );
}