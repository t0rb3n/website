import {IconProps} from "@primer/octicons-react";
import Link from "next/link";
import {ComponentType} from "react";

type ButtonProps = {
    Icon: ComponentType<IconProps>
    link: string;
}

export default function LinkButton({Icon, link}: ButtonProps) {
    return (
        <Link href={link} passHref>
            <button type="button"
                    className="inline-block
                    mx-0.5
                    px-3 py-2
                    border-2 border-gray-600
                    text-gray-400
                    leading-tight
                    rounded-xl
                    hover:bg-thirdColor hover:bg-opacity-90
                    hover:text-gray-900
                    focus:outline-none focus:ring-0
                    transition duration-150 ease-in-out">
                <Icon/>
            </button>

        </Link>

    )
}
