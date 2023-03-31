
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import boxIcon from '../images/box.svg'

export default function CardContainer({ title, description, icon, path }) {

  return (

    <div className='  border-gray-300 border-2 flex flex-col rounded text-lg  mx-2 p-2 md:justify-evenly min-h-full h-90    lg:w-full  sm:w-2/3 shadow-lg px-10  justify-center'>
      <Image src={icon} width={40} height={40} alt='box' className='py-2 ' />
      <h1 className='font-bold  lg:py-5'>{title}</h1>
      <p className='text-gray-500 font-medium pb-2'>{description}</p>
      <Link href={path} className='bg-slate-900  mx-8 lg:py-2 text-center mb-2 justify-center block drop-shadow-lg	mt-10 text-stone-100 rounded'> Saiba Mais</Link>
    </div>
  )
}
