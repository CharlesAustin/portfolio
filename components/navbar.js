import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function MobileNav() {
    return (
        <div className="">
            <span className="h-1 w-full bg-black rounded-lg"></span>
        </div>
    );
}

export default function Navbar() {
    const navItems = ["work", "skills", "about", "contact"];
    return (
        <nav className="flex padding">
            <ul className="flex">
                {navItems.map((name) => (
                    <li key={name}>
                        <Link href={`/${name}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <a href="https://github.com/CharlesAustin">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </nav>
    );
}
