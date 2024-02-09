
import styles from './styles.module.scss';
import logo from '../../../public/images/logo.svg';
import Image from 'next/image';
import { ActiveLink } from '../ActiveLink';

export const Header = () => {
    return(
        <header className={styles.headerContainer}>
            <section className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                <a>
                    <Image src={logo} alt="logo" />
                </a>
                </ActiveLink>
            <nav>
           {/*} <Link href="/">
                Home
    </Link>*/}
             <ActiveLink href="/" activeClassName={styles.active}>
                <a>Home</a>
             </ActiveLink>
             <ActiveLink href="/posts" activeClassName={styles.active}>
             <a>Conteúdos</a>
             </ActiveLink>
             <ActiveLink href="/sobre" activeClassName={styles.active}>
                <a>Quem Somos?</a>
             </ActiveLink>
            </nav>
                <a className={styles.readyButton} type="button" href="https://sujeitoprogramador.com">Começar</a>
            </section>
        </header>
    );
}

