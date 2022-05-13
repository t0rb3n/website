import {IconProps, LogoGithubIcon, MarkGithubIcon} from "@primer/octicons-react";
import Link from "next/link";
import {ComponentType, ReactElement, ReactNode} from "react";

type ButtonProps = {
    Icon: ComponentType<IconProps>
    link: string;
}

export default function ( {Icon, link} : ButtonProps) {
    return (
        <Link href={link}>
            <button type="button"
                    className="inline-block
                    px-3 py-2
                    border-2 border-gray-600
                    text-gray-400
                    leading-tight
                    rounded-xl
                    hover:bg-gray-200 hover:bg-opacity-5
                    focus:outline-none focus:ring-0
                    transition duration-150 ease-in-out">

                <Icon />
            </button>

        </Link>

    )
}
