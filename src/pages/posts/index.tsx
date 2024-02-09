
import Image from "next/image";
import styles from "../posts/styles.module.scss";
import Link from "next/link"

import thumbnail from "../../../public/images/thumb.png";
import Head from "next/head";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";


export const Posts = () => {

    return(
        <>
        <Head>
            <title>Blog | Sujeito Programador</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>
            <Link href="/">
                <Image src={thumbnail} 
                alt="Post título 1" 
                width={720}
                height={410}
                quality={100}
                />
                <strong>Criando meu primeiro aplicativo</strong>
            <time>14 de julho</time>
            <p>Hoje vamos criar o controle de mostrar a senha no input</p>
            </Link>

            <div className={styles.buttonNavigate}>
                <div>
                    <button>
                        <FiChevronsLeft size={25} color="#FFF"/>
                    </button>
                    <button>
                        <FiChevronLeft size={25} color="#FFF" />
                    </button>
                </div>

                <div>
                    <button>
                        <FiChevronsRight size={25} color="#FFF" />
                    </button>
                    <button>
                        <FiChevronRight size={25} color="#FFF" />
                    </button>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}
export default Posts;
