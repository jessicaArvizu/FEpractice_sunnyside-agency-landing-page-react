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
                        <button>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

