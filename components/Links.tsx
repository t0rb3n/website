import LinkButton from "./LinkButton";
import {KeyIcon, MarkGithubIcon} from "@primer/octicons-react";

export default function (){
    return(
        <div className="flex">
            <LinkButton Icon={MarkGithubIcon} link={"https://github.com/t0rb3n"}/>
            <LinkButton Icon={KeyIcon} link={"https://herborn.me"}/>
        </div>)
}
