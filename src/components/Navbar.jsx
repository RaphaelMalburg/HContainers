import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export default function Navbar() {
  return (
    <nav className='flex justify-between lg:mx-12 mx-3 my-5'>
        <Logo />
        <HiOutlineMenuAlt3 className='fill-slate-900 stroke-2 w-10 h-12 lg:hidden '/>
        <ul className='lg:flex gap-12  lg:text-2xl xl:text-3xl font-semibold	tracking-wide hidden pt-8	'>
          <Link href="/">Home</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="#contato" className='text-orange-400'>Contato</Link>
        </ul>
    </nav>
  )
}
