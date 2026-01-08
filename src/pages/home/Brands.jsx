import React from "react";

// استيراد الصور
import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import brand5 from "../../assets/images/brands/brand5.png";
import brand6 from "../../assets/images/brands/brand6.png";
import brand7 from "../../assets/images/brands/brand7.png";
import brand8 from "../../assets/images/brands/brand8.png";
import brand9 from "../../assets/images/brands/brand9.png";
import brand10 from "../../assets/images/brands/brand10.png";
import "./home.css";   

export default function Brands() {
    const brandsRow1 = [brand1, brand2, brand3, brand4, brand5];
    const brandsRow2 = [brand6, brand7, brand8, brand9, brand10];

    return (
        <section className="brands-section py-5">
            <div className="container text-center">

                
                <div className="row justify-content-center mb-4">
                    {brandsRow1.map((img, index) => (
                        <div key={index} className="col-6 col-md-2 mb-3">
                            <img src={img} alt={`Brand ${index + 1}`} className="img-fluid brand-logo" />
                        </div>
                    ))}
                </div>

                
                <div className="row justify-content-center">
                    {brandsRow2.map((img, index) => (
                        <div key={index} className="col-6 col-md-2 mb-3">
                            <img src={img} alt={`Brand ${index + 6}`} className="img-fluid brand-logo" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
