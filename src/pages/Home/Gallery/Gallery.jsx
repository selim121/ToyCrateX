import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typewriter from 'typewriter-effect';

const Gallery = () => {

    const autoSLider1 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true
    };
    const autoSLider2 = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div data-aos="slide-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="bg-[#e2d5d566] pt-12" >
            <h1 className="pb-4 text-center text-5xl font-bold text-[#612500f1]">
                <Typewriter
                    options={{
                        strings: ['Gallery'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 'natural',
                    }}
                />
            </h1>
            <Slider {...autoSLider1} className='py-12'>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/9yyFJHx/2.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/PFy3YWy/4.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/wK1Jt4f/7.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/yks0PHW/6.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/k8h5QHn/3.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/1Z9tDrC/1.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/zxDw9D5/1.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/RTgpk0Z/3.jpg" alt="" />
                </div>
            </Slider>
            <Slider {...autoSLider2} className='py-12'>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/9yyFJHx/2.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/PFy3YWy/4.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/wK1Jt4f/7.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/yks0PHW/6.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/k8h5QHn/3.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/1Z9tDrC/1.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/zxDw9D5/1.jpg" alt="" />
                </div>
                <div>
                    <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/RTgpk0Z/3.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Gallery;