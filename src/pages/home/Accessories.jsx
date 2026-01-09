import React from 'react'
import acc1 from "../../assets/images/product/cableMachine.webp";
import acc2 from "../../assets/images/product/gloves.webp";
import acc3 from "../../assets/images/product/GymreapersLifting.webp";
import acc4 from "../../assets/images/product/Strengthener.webp";

export default function Accessories() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold mb-5">VITAMINS</h2>

                <div className="row g-4 justify-content-center">
                    <ProductCard
                        mainImg={acc1}
                        brand="Altra"
                        title="Cable Machine Attachment Set LAT Pulldown"
                        price="$39.00"
                        rating="★★★★☆"
                    />

                    <ProductCard
                        mainImg={acc2}
                        brand="Altra"
                        title="ATERCEL Workout Gloves for Men and Women, Exercise Gloves for Weight Lifting"
                        price="$13.00"
                        rating="★★★★★"
                    />

                    <ProductCard
                        mainImg={acc3}
                        brand="Altra"
                        title="Gymreapers Lifting Wrist Straps for Weightlifting, Bodybuilding, Powerlifting"
                        price="$14.00"
                        rating="★★★★★"
                    />

                    <ProductCard
                        mainImg={acc4}
                        brand="Altra"
                        title="FitBeast Grip Strengthener Forearm Strengthener Hand Grips Strengthener Kit"
                        price="$9.00"
                        rating="★★★★★"
                    />
                </div>
            </div>
        </section>
    );
}

function ProductCard({ mainImg, brand, title, price, rating }) {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="border p-3 text-center position-relative product-card">

                <div className="position-relative overflow-hidden">
                    <img src={mainImg} className="img-fluid mb-3 w-100 main-img" />
                </div>

                <p className="text-muted mt-3 mb-1">{brand}</p>
                <h6 className="fw-bold mb-1">{title}</h6>

                <div className="text-warning mb-1">{rating}</div>

                <p className="fw-bold">{price}</p>
            </div>
        </div>
    );
}