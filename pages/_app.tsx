import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return (
    <main className="p-4 flex items-center flex-col flex-1">
        <Component {...pageProps} />
    </main>
    )
}

export default MyApp
