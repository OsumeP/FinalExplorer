import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.scss"
export function Header(){
    return(
        <header className={style.header}>
            <ul>
          <Link href={"/"} className={style.imgContainer}>  
            <Image src="/images/moogle_header.png" width={100} height={100} alt='' />
            <p>FINAL EXPLORER</p>
          </Link>
          <Link href={"/characters"}> 
            <li> Characters </li> 
          </Link>
          <Link href={"/characters"}> 
            <li> Monsters </li> 
          </Link>
          <Link href={"/characters"}> 
            <li> Games </li> 
          </Link>
        </ul>
        </header>
    )
}