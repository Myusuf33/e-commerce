'use client'
import Link from "next/link"
import Style from './navbar.module.css';
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { LuShoppingCart } from 'react-icons/lu'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoCloseOutline} from 'react-icons/io5'
export default function Navbar()
{
  const [now,update]=useState('now');
  const before=(
    <header className={Style.header}>
        <nav>
       <Link href={'/'}><img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=256&q=75" alt="logo"></img></Link>
          <ul>
           <Link href={'/female'}><li>Female</li></Link>
           <Link href={'/male'}><li>Male</li></Link>
           <Link href={'/kids'}><li>Kids</li></Link>
           <Link href={'/all_products'}><li>All Products</li></Link>
          </ul>
          <div className={Style.input}>
<AiOutlineSearch className={Style.searchIcon}/>
<input placeholder="What are you looking for" maxLength={25} />
          </div>
         <Link href={'/shopping-cart'}><button className={Style.cart}><LuShoppingCart size={25}/></button></Link>
         <button className={Style.p} type="button" onClick={()=>update(now === 'now' ? 'mobile' : 'now')}>
          <RxHamburgerMenu size={21}/>
        </button>
        </nav>
      </header>
  );
  const after=(
    <div className={Style.mobileview}>
      <div className={Style.main}>
        <div className={Style.subMain}>
        <button type="button" onClick={()=>update(now === 'now' ? 'mobile' : 'now')}>
          <IoCloseOutline size={27}/>
          </button>
        </div>
      </div>
      <div className={Style.navBtns}>
        <div className={Style.icon}>
      <Link href={'/shopping-cart'}><button className={Style.cart}><LuShoppingCart size={25}/></button></Link>
      </div>
      <ul>
      <Link href={'/female'}><li onClick={()=>update('now')}>Female</li></Link>
      <Link href={'/male'}><li onClick={()=>update('now')}>Male</li></Link>
      <Link href={'/kids'}><li onClick={()=>update('now')}>Kids</li></Link>
      <Link href={'/all_products'}><li onClick={()=>update('now')}>All Products</li></Link>
      </ul>
      </div>
 

      
      </div>
  )
 
    return (
      <div>
      {now==='now' ?before:after}
      </div>
    )
}