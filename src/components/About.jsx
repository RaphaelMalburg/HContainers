/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import containerCutImage from '../images/containercut.png'
import logo from '../images/hclogo.png'

export default function About() {
  return (
    <div className='w-full mt-3 lg:px-12 pt-10  '>
        <div className=' flex flex-col relative  lg:flex-row  '>
        <div className='lg:w-2/3 shadow-md  bg-slate-200 align-middle relative ' >
          <Image src={containerCutImage} alt="container image" className='md:w-3/5 w-2/3 md:pt-10 mx-auto md:h-full h-2/3'/>
        </div>
        <div className='lg:w-1/3 lg:-translate-x-10 bg-blue-900 relative container  mx-auto  items-stretch opacity-95 shadow-inner text-slate-300 px-3 object-contain md:my-auto w-full '>

          <Image
            src={logo}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className=' container mx-auto  h-full opacity-40 shadow-inner text-slate-300 px-3 object-contain -z-10 absolute md:my-auto '
          />

          <div className='z-10 w-full xl:px-20 '>
            <h1 className='font-bold lg:text-2xl text-xl py-2 z-40 text-center mx-auto'>Sobre nós</h1>
            <p className='text-md font-semibold leading-7 z-10  '>
              Empresa especializada na venda de containers novos e usados, com profissionais comprometidos em garantir a satisfação dos clientes em todas as etapas do processo.
            </p>

            <p className='text-md font-semibold pt-4 leading-7 z-10 pb-10 '>
            Projetos personalizados são feitos, tais como banheiros, escritórios, casas e entre outros.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
