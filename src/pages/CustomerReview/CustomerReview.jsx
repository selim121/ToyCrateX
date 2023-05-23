import Typewriter from 'typewriter-effect';


const CustomerReview = () => {


    return (
        <div data-aos="slide-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="bg-[#e2d5d566] pt-4">
            <h1 className="mb-12 py-4 text-center text-5xl font-bold text-[#612500f1]">
                <Typewriter
                    options={{
                        strings: ['Toy Reviews and Recommendations'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 'natural',
                    }}
                />
            </h1>
            <section className="pb-32 text-gray-800 text-center">
                <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
                    <div className="mb-6 lg:mb-0">
                        <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="relative block bg-white rounded-lg shadow-lg h-[580px]">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/271029766_3162714400628332_2355286211638326288_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG4QT-agt-ffLgRcgOibXpAkLNJnH-qCZuQs0mcf6oJmzQtCh7n2SdvCRvtUCTz243uUZ5J7TEFDdSPxl8x-GBC&_nc_ohc=eXAkOS8PtwQAX9nM7sz&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCW-Q1dmy7M91-UVJsqiE2s2NkukLKU2SqSdyqqEUQS8Q&oe=646D5741" className="w-full h-[300px]" />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg font-bold mb-2">Sayeed Salman Sakib</h5>
                                <h6 className="font-medium text-blue-600 mb-4 text-xs">A Wonderful Toy Marketplace for All Ages</h6>
                                <ul className="flex justify-center mb-6">
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512">
                                            <path fill="currentColor"
                                                d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                                <p className='text-sm text-justify'>I recently had the pleasure of exploring ToyCrateX, and I must say, it exceeded all my expectations. This toy marketplace offers an incredible range of toys that cater to various age groups, ensuring there something for everyone.</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="mb-6 lg:mb-0">
                        <div className="relative block bg-white rounded-lg shadow-lg h-[580px]">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.18169-9/23231371_2013454662268766_5759147928083649862_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHdP9PGqepq452isanpNg167HF94T4CeCTscX3hPgJ4JO4L2Xv1RzT1CP_ZEUlQkEhjdZ84uIQiE47DBIdycSO0&_nc_ohc=45V-BRS4nrgAX8ezBhb&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBMlwJLctEi26QdOCZ5q7VfMKBujyA1vPkKxCvhPqFXRQ&oe=6490C03B" className="w-full h-[300px]" />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg font-bold mb-2">Ismail Saruar</h5>
                                <h6 className="font-medium text-blue-600 mb-4 text-xs">A Treasure Trove of Delightful Toys</h6>
                                <ul className="flex justify-center mb-6">
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                                <p className='text-sm text-justify'>I recently stumbled upon ToyCrateX while searching for unique toys for my children, and I was immediately captivated by the wide array of options available. This toy marketplace truly is a treasure trove of delightful toys that cater to children of all ages.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-0">
                        <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="relative block bg-white rounded-lg shadow-lg h-[580px]">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.18169-9/13100831_1731105660463735_1726685607833788123_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEbcCdFnSTCaUbKdFt47fJ86NUrXPRozkPo1Stc9GjOQ71Lg-pcSt78OkkAHU1Gmy3LyYBfRCwlNmnE3Bh7_SCd&_nc_ohc=1p-x20ZFxL4AX8a67TT&_nc_ht=scontent.fdac14-1.fna&oh=00_AfA34-EDjxiWk8xvWYwswDkGXe4QQLYDFXBzooYjBWaBaw&oe=6490C131" className="w-full h-[300px]" />
                                    <a href="#!">
                                        <div
                                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                            ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg font-bold mb-2">Anichuzzaman Rony</h5>
                                <h6 className="font-medium text-blue-600 mb-4 text-xs">A Dreamland for Toy Collectors</h6>
                                <ul className="flex justify-center mb-6">
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                            </path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                                            className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path fill="currentColor"
                                                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                                <p className='text-sm text-justify'>As an avid toy collector, I have explored numerous toy marketplaces over the years, but ToyCrateX stands out as a true gem in the industry. It offers a remarkable selection of toys that cater to both seasoned collectors and enthusiasts who are just beginning their journey.

</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default CustomerReview;