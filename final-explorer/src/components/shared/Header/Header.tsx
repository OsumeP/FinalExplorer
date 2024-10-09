import Link from "next/link";
import style from "./Header.module.css";
export function Header(){
    return(
        <header>
            <ul>
          <Link href={"/"}> 
            <li> Home </li> 
          </Link>
          <Link href={"/characters"}> 
            <li> Characters </li> 
          </Link>
        </ul>
        </header>
    )
}