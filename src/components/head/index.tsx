'use client'

 import Link from 'next/link'
import React, { useState } from 'react'
import styles from './style.module.css'

 
     const Head = () => {
    let [active, setActive] = useState<string>('about');
  return (
<>
{/* <div className={styles.topnav}>
  <a  href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div> */}
<div className={styles.topnav}> 
<Link onClick={()=>{setActive('about')}} className={active=='about' ? styles.active :''} href='/about'>About</Link>
<Link onClick={()=>{setActive('home')}} className={active=='home' ? styles.active :''} href='/home'>Home</Link>

<Link onClick={()=>{setActive('blog')}} className={active=='blog' ? styles.active :''} href='/blog'>Blog</Link>
</div>

</>
  )
}
export default Head
