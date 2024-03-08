import React from "react";

export default function Navigation() {
    return (
        <nav>
            <div>
                <li>Logo goes here</li>
            </div>
            <div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li>
                        <button className="text-black bg-white py-[10px] px-5 rounded-full uppercase text-xs hover:text-white hover:bg-opacity-50 transition">
                        Contact
                    </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

