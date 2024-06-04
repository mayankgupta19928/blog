'use client'

 import Link from 'next/link'
import React, { useState } from 'react'
import styles from './style.module.css'
import { usePathname } from 'next/navigation'

 
     const Head = () => {
       const pathname = usePathname()

     let [active, setActive] = useState<string>(pathname);
  return (
<>
 
<div className={styles.topnav}> 
<Link onClick={()=>{setActive('/home')}} className={active=='/home' ? styles.active :''} href='/home'>Home</Link>
<Link onClick={()=>{setActive('/about')}} className={active=='/about' ? styles.active :''} href='/about'>Create Blog</Link>


<Link onClick={()=>{setActive('/blog')}} className={active=='/blog' ? styles.active :''} href='/blog'>Blog</Link>
</div>

</>
  )
}
export default Head
