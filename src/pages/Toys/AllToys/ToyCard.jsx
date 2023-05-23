import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {

    const { _id, name, productName, price, quantity, subCategory } = toy;

    const { user } = useContext(AuthContext);


    return (
        <>
            <tr>
                <td className="md:w-1/5 font-bold">
                    {productName ? productName : ''}
                </td>
                <td className="md:w-1/5">
                    {price ? price : ''}
                </td>
                <td className="md:w-1/5">{subCategory ? subCategory : ''}</td>
                <td className="md:w-1/5">{quantity ? quantity : ''}</td>
                <td className="md:w-1/5">
                    {name ? name : ''}
                </td>
                <th className="w-1/5 md:w-auto">
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
                </th>
            </tr>
        </>
    );
};

export default ToyCard;