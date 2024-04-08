import Image from "next/image";
import "./header.scss";

export function Header(){
    return(
        <div className="header">
            <div>
            <h1>Hi, i'm William!</h1>
            <h2>Software Developer</h2>
            </div>
            <Image
            src="/zoeira-inosuke.jpg"
            alt="Vercel Logo"
            width={250}
            height={310}
            priority
            />
        </div>
    )
}