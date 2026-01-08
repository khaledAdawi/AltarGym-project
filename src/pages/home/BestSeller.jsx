import best1 from "../../assets/images/bestSeller/bestSeller1.jpg";
import best11 from "../../assets/images/bestSeller/bestSeller11.jpg";
import best2 from "../../assets/images/bestSeller/bestSeller2.jpg";
import best22 from "../../assets/images/bestSeller/bestSeller22.jpg";
import best3 from "../../assets/images/bestSeller/bestSaller3.jpg";
import best33 from "../../assets/images/bestSeller/bestSeller33.jpg";
import best4 from "../../assets/images/bestSeller/bestSeller4.jpg";
import best44 from "../../assets/images/bestSeller/bestSeller44.jpg";

export default function BestSeller() {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <h2 className="text-center fw-bold mb-5">BEST SELLER</h2>

                <div className="row g-4 justify-content-center">

                    
                    <ProductCard
                        mainImg={best1}
                        hoverImg={best11}
                        brand="BodyTech"
                        title="Cameron Brink Bundle"
                        price="$40.00 - $60.00"
                        rating="★★★★☆"
                    />

                    
                    <ProductCard
                        mainImg={best2}
                        hoverImg={best22}
                        brand="BodyTech"
                        title="PumpMode Nitric Oxide"
                        price="$250.00"
                        rating="★★★★★"
                    />

                    
                    <ProductCard
                        mainImg={best3}
                        hoverImg={best33}
                        brand="Carb Blockers"
                        title="Essential Amino 9"
                        price="$100.00"
                        oldPrice="$150.00"
                        rating="★★★★☆"
                    />

                    <ProductCard
                        mainImg={best4}
                        hoverImg={best44}
                        brand="Multivitamins"
                        title="Bucked Up Racked"
                        price="$116.00"
                        oldPrice="$200.00"
                        rating="★★★★★"
                    />

                </div>
            </div>
        </section>
    );
}


function ProductCard({ mainImg, hoverImg, brand, title, price, oldPrice, rating }) {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="border p-3 text-center position-relative product-card">

                <div className="position-relative overflow-hidden">
                    <img src={mainImg} alt={title} className="img-fluid mb-3 w-100 main-img" />
                    <img
                        src={hoverImg}
                        alt="hover"
                        className="img-fluid position-absolute top-0 start-0 w-100 hover-img"
                    />
                </div>

                <div className="position-absolute top-50 start-50 translate-middle icon-box">
                    <i className="bi bi-heart me-2"></i>
                    <i className="bi bi-arrow-left-right"></i>
                </div>

                <p className="text-muted mt-3 mb-1">{brand}</p>
                <h6 className="fw-bold mb-1">{title}</h6>

                <div className="text-warning mb-1">
                    {rating} <span className="text-muted fs-6">(1)</span>
                </div>

                <p className="fw-bold text-dark">
                    {price}{" "}
                    {oldPrice && <del className="text-muted ms-2">{oldPrice}</del>}
                </p>
            </div>
        </div>
    );
}
