import { Link } from 'react-router-dom';
import img0 from '../../../assets/images/banner/slide0.png';
import img1 from '../../../assets/images/banner/slide1.png';
import img2 from '../../../assets/images/banner/slide2.jpeg';
import img3 from '../../../assets/images/banner/slide3.jpeg';
import img4 from '../../../assets/images/banner/slide4.jpeg';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const autoSLider = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <>
            <Slider {...autoSLider} className='mt-4'>
                <div className="relative w-full">
                    <img src={img0} className="w-full rounded-xl h-96" />
                    <div className="absolute h-1/2 w-full rounded-xl flex items-center justify-center  bottom-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    </div>
                </div>
                <div className="relative w-full">
                    <img src={img1} className="w-full rounded-xl h-96" />
                    <div className="absolute h-1/2 w-full rounded-xl flex items-center justify-center  bottom-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <Link to={'/all-toys'} className='font-bold text-2xl text-white rod2bfbf66] px-8 py-3 bg-[#612500f1]'>View Products</Link>
                    </div>
                </div>
                <div className="relative w-full">
                    <img src={img2} className="w-full rounded-xl h-96" />
                    <div className="absolute h-full rounded-xl flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12'>
                            <h2 className='text-4xl font-bold'>
                                Affordable price and best service <br />
                                <span>with</span> <br />
                                ToyCrateX
                            </h2>
                            <div>
                                <Link to={'/all-toys'} className='font-bold text-2xl text-white rounded-lg  px-8 py-3 bg-[#612500f1]'>View Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full">
                    <img src={img3} className="w-full rounded-xl h-96" />
                    <div className="absolute h-full w-full rounded-xl flex items-start justify-center  top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 text-center'>
                            <h2 className='text-4xl font-bold'>
                                Affordable price and best service <br />
                                <span>with</span> <br />
                                ToyCrateX
                            </h2>
                            <div>
                                <Link to={'/all-toys'} className='font-bold text-2xl text-white rounded-lg  px-8 py-3 bg-[#612500f1]'>View Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full">
                    <img src={img4} className="w-full rounded-xl h-96" />
                    <div className="absolute h-full w-full rounded-xl flex items-start justify-center  top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 text-center pe-5'>
                            <h2 className='text-4xl font-bold'>
                                Affordable price and best service <br />
                                <span>with</span> <br />
                                ToyCrateX
                            </h2>
                            <div>
                                <Link to={'/all-toys'} className='font-bold text-2xl text-white rounded-lg  px-8 py-3 bg-[#612500f1]'>View Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default Banner;