import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement,
    activeClassName: string
}

//...rest - são outras propriedades

export const ActiveLink = ({ children, activeClassName, ...rest}: ActiveLinkProps) => {

    // ex.: /posts ou /sobre
    const { asPath } = useRouter();

    //renderização condicional
    //se a rota/página que estamos acessando for igual ao href então ativamos a className
    const className = asPath === rest.href ? activeClassName : '';
  
    //clonar os elementos e aplicar a classe
    return(
        <Link legacyBehavior {...rest}>
           {cloneElement(children, {
            className
           })}
        </Link>
    )
}
