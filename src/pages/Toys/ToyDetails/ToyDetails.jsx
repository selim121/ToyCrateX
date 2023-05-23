import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {

    useTitle('ToyCrateX - Toy Details')

    const toy = useLoaderData();
    const { name, email, productName, details, price, rating, quantity, subCategory, toyPhoto } = toy;

    return (
        <div className="mt-3">
            <div className="card lg:card-side bg-[#e2d5d566] shadow-xl px-12 py-24">
                <div className="text-center me-5">
                    <img className="w-80 h-72 rounded-2xl" src={toyPhoto} alt="Album" />
                    <h3 className="font-semibold">Posted by: <span className="text-[#612500f1]">{name}</span></h3>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>
                <div className="flex flex-col my-auto space-y-2 w-2/3">
                    <h2 className="text-3xl font-bold text-[#612500f1]">{productName}</h2>
                    <p className="font-semibold">Description: <span className="font-light">{details}</span></p>
                    <p className="font-semibold">Category: <span className="font-light">{subCategory}</span></p>
                    <p className="font-semibold">Price: <span className="font-light">$ {price}.00</span></p>
                    <p className="font-semibold">Available quantity: <span className="font-light">{quantity}</span></p>
                    <p className="font-semibold">Rating: <span className="font-light">{rating}</span></p>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;