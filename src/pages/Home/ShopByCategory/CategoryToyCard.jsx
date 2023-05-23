import { useContext, useState } from "react";
import {Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const CategoryToyCard = ({ subCategoryToy }) => {

    const { _id, productName, price, rating, toyPhoto } = subCategoryToy;

    const [isHovered, setIsHovered] = useState(false);

    const {user} = useContext(AuthContext);


   


    return (
        <>
            <div
                className="bg-white rounded-lg overflow-hidden shadow-md relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
            >
                <img
                    className="w-full h-48 object-cover"
                    src={toyPhoto}
                    alt="Toy Image"
                />
                <div className="p-4">
                    <h3 className="font-bold text-black-800 mb-2">{productName}</h3>
                    <p className="text-gray-600 text-sm mb-2">Price: $ <span className="text-[#612500f1]">{price}</span></p>
                    <p className="text-gray-600 text-sm mb-2">Rating: <span className="text-[#612500f1]">{rating}</span></p>
                    {isHovered && (
                        <div className="absolute bottom-0  w-full bg-white bg-opacity-90 p-4 flex justify-center items-center">
                            
                            <Link to={`/details/${_id}`}
                        onClick={() => {
                            if (!user?.email) {
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Something is wrong.',
                                    icon: 'error',
                                    confirmButtonText: 'Try again',
                                });
                            }
                        }} className="bg-[#612500f1] hover:bg-[#944e22f1] text-white py-2 px-4 rounded-md" >View Details</Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CategoryToyCard;