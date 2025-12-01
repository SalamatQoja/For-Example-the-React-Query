// import { Navigation, Pagination, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../assets/img1jpg.jpg"
// import img2 from "../assets/img2jpg.jpg"
// import img3 from /"../assets/img3jpg.jpg"
// import img4 from "../assets/img4jpg.jpg"
import Slider from "react-slick";
import slickSlider from "./SliderIMg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

export function SliderRow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <div style={{width: 1215, display: "flex", margin: "auto", marginLeft: 313 }} className="header-slider">
            <Slider {...settings}>
                {slickSlider.map((d) => (
                    <div className="slick-slider">
                        <div className="product-slider1">
                            <img src={d.image} alt="" className="img-size" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}