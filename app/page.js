import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/src/components/Hero'
import CardContainer from '@/src/components/CardContainer'
import About from '@/src/components/About'
import XpSection from '@/src/components/XpSection'
import Form from '@/src/components/Form'
import containers from '../src/const/containerTypes'
import ContainersSection from '@/src/components/ContainersSection'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <main>
    <Hero />
    {/** make a map in containers like below but improve the responsiveness and overall styling with tailwinds */}
    <section className='md:mx-8' >
      <h1  className='text-3xl my-8 text-stone-900 font-bold text-center'>Tipos de Containers</h1>
      <ContainersSection />
    </section>
        <About />
        <XpSection />
        <Form />

  </main>
  )
}
