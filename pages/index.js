import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import FindUs from '../components/FindUs'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>InfinityClub</title>
        <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
        <meta name="description" content="Infinity club website"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />   
      <About />   
      <Menu/>
      <FindUs />
      <Footer/>
    </div>
  )
}
