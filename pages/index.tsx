import WelcomeCard from 'components/WelcomeCard';
import type {NextPage} from 'next'
import Link from 'next/link';
import Container from "../components/Container";
import SpotifyPlaying from "../components/SpotifyPlaying";
import Links from "../components/Links";

const Home: NextPage = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center flex-1">
                <WelcomeCard/>
                <hr className="w-full border-1 border-gray-600 mt-2"/>
                <Links/>
            </div>
            <SpotifyPlaying/>
        </Container>

    )
}
// className="rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
export default Home
