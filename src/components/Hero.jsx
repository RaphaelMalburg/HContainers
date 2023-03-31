/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
export default function Hero() {

  return (

      <div className={styles.bgimage}  >
        <Link href='#contato'  className='absolute bottom-12 left-12 opacity-90 object-fit bg-blue-900 w-auto h-auto rounded md:ml-40
        '>
          <h1 className='lg:text-5xl lg:text-text-3xl text-2xl text-slate-100 font-bold text-center tracking-wide py-6'>Containers <br/>do seu jeito</h1>
          <p   className='w-full mt-3 font-medium  lg:text-2xl text-xl p-3 bg-stone-900 text-slate-100 tracking-widest lg:px-36 rounded '>Faça um orçamento</p>
        </Link> {/**
        <div className='bg-slate-400 opacity-60 self-center    w-1/3 '>
         <h2>Containers a venda para seu projeto.</h2>
          <form action="">



          </form>
        </div> */}
      </div>

  )
}
