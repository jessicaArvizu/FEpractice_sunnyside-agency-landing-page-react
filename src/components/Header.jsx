import React from "react";
import image from "../assets/images/desktop/image-header.jpg"
import Navigation from "./Navigation";

export default function Header() {
    return (
        <section id="hero" style={{backgroundImage:`url(${image})`}}>
            <Navigation/>
            <h1> We are creatives </h1>
        </section>
    )
}

