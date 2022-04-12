import Link from "next/link";
import Container from "../components/Container";

export default function NotFound() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center h-screen max-w-2xl mx-auto">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white lost-gradient dark:bright-lost-gradient">
                    404 - I think you are lost
                </h1>
                <p className="mb-8">
                    Seems like the page you are looking for doesn't exists.
                </p>
                <Link href="/">
                    <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
                        Go back home
                    </a>
                </Link>
            </div>
        </Container>
    )
}
