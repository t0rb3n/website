import LinkButton from "./LinkButton";
import {MarkGithubIcon} from "@primer/octicons-react";
// <LinkButton Icon={KeyIcon} link={"https://herborn.me"}/>

export default function  Links() {
    return (
        <div className=" mt-2 flex justify-center">
            <LinkButton Icon={MarkGithubIcon} link={"https://github.com/t0rb3n"}/>
        </div>)
}
