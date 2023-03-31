import Image from 'next/image'
import React from 'react'
import logoimg from '../images/logoname.png'

export default function Logo() {
  return (
    <div>
      <Image src={logoimg}  height={100} alt="Logo" />
    </div>
  )
}
