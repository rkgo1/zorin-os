import Head from 'next/head'
import Image from 'next/image'
import Body from '../comps/body'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >

      <Navbar />
      <Body />
    </div>
  )
}
