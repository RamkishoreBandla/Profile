import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
   <div className='bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-scroll z-0   text-white h-screen'>
   <Head>
    <title>Ram Bandla</title>
   </Head>
   <Header/>

    <section id="hero" className='snap-center'>
    <Hero />
    </section>

    <section>
      
    </section>

   </div>
  )
}
