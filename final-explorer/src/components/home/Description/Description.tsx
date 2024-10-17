"use client"
import style from './Description.module.scss'
import Image from 'next/image'
import { Title } from '../Title'
import { ParticlesComponent } from '../ParticlesComponent'
export function Description(){
    let sense : number = 1;
    const changeDirection = () => {
        const img : HTMLElement = document.getElementById('chocoboWalk')!;
        sense *= -1;
        img.style.transform = `scaleX(${sense})`;
    }
    return(
        <div className={style.description}>
            <div className={style.imgContainer}>
                <Image src="/images/Description.png" alt="Description" width = {500} height={100} priority={true}/>
            </div>
            <div className={style.textContainer}>
                <Title/>
                <p>Get all the information of your favourite heroes and villains from the epic saga Final Fantasy</p>
                <Image src="/images/chocobo_walk.gif" alt='' width={20} height={20} className={style.chocobo} id='chocoboWalk' onAnimationIteration={changeDirection}/>
                <Image src="/images/moogle.png" alt='' width={100} height={100} className={style.moogle}/>
                <Image src="/images/cactuar.png" alt='' width={100} height={100} className={style.cactilio}/>
            </div>
            <ParticlesComponent/>
        </div>
    )
} 