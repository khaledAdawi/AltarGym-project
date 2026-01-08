import slider11 from "../../assets/images/slider/slider11.jpg";
import slider2 from "../../assets/images/slider/slider2.png";


export default function HeroSlider() {
    return (
        <div
            id="heroSlider"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">

                
                <div className="carousel-item active">
                    <div
                        className="d-flex align-items-center"
                        style={{
                            backgroundImage: `url(${slider11})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "80vh",
                        }}
                    >
                        <div className="container text-white">
                            <div className="row align-items-center">

                                {/* Text */}
                                <div className="col-md-6">
                                    <p className="text-warning fw-bold">
                                        GET AN EXTRA 10% OFF
                                    </p>
                                    <h1 className="display-4 fw-bold">
                                        DIET PROTEIN SHAKES
                                    </h1>
                                    <button className="btn btn-warning mt-3">
                                        Shop Now →
                                    </button>
                                </div>

                                
                                <div className="col-md-6 text-center">
                                    <img
                                        src={slider2}
                                        alt="Protein"
                                        className="img-fluid animate-fade-in"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
