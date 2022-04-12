import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SpotifyPlaying from "../components/SpotifyPlaying";
import NameCard from "../components/NameCard";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hello?</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col  items-center">

                <NameCard/>

                <SpotifyPlaying/>

            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home
