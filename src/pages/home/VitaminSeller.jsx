import React from 'react'
import vitamin1 from "../../assets/images/product/BCAAVitamin.webp";
import vitamin2 from "../../assets/images/product/EAA.webp";
import vitamin3 from "../../assets/images/product/omega3.webp";
import vitamin4 from "../../assets/images/product/zinc.webp";

export default function VitaminSeller() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold mb-5">Minerals</h2>

                <div className="row g-4 justify-content-center">
                    <ProductCard
                        mainImg={vitamin1}
                        brand="Altra"
                        title="Optimum Nutrition Instantized BCAA Capsules, Keto Friendly Branched Chain Essential Amino Acids, 1000mg, 60 Count"
                        price="$55.00"
                        rating="★★★★☆"
                    />

                    <ProductCard
                        mainImg={vitamin2}
                        brand="Altra"
                        title="Nutrex Research EAA Hydration | EAAs + BCAA Powder | Muscle Recovery"
                        price="$35.00"
                        rating="★★★★★"
                    />

                    <ProductCard
                        mainImg={vitamin3}
                        brand="Altra"
                        title="Pure Triglyceride Omega 3, Wild Caught Deep Sea Fish Oil 1000mg"
                        price="$44.00"
                        rating="★★★★★"
                    />

                    <ProductCard
                        mainImg={vitamin4}
                        brand="Altra"
                        title="Zinc 220mg [High Potency] Supplement – Zinc Sulfate for Immune Support System 100 Tablets"
                        price="$70.00"
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