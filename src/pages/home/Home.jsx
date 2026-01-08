import React from "react";
import HeroSlider from "./HeroSlider";
import BestSeller from "./BestSeller";
import Brands from "./Brands";
import "./home.css";


export default function Home() {
    return (
        <>
            <HeroSlider />
            <BestSeller />
            <Brands />
        </>
    );
}
