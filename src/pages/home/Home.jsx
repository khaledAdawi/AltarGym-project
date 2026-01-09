import React from "react";
import HeroSlider from "./HeroSlider";
import BestSeller from "./BestSeller";
import Brands from "./Brands";
import "./home.css";
import VitaminSeller from "./VitaminSeller";
import Accessories from "./Accessories";


export default function Home() {
    return (
        <>
            <HeroSlider />
            <BestSeller />
            <VitaminSeller/>
            <Accessories/>
            <Brands />
        </>
    );
}
