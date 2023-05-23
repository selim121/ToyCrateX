/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";


const MyToyTable = ({ toy, handleDelete }) => {

    const { _id, name, email, productName, details, price, quantity, rating, subCategory, toyPhoto } = toy;
    

    return (
        <>
            <tr>
                <th>
                    <label>
                        <Link onClick={() => handleDelete(_id)} className="btn btn-circle hover:bg-[#612500f1] hover:border-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></Link>
                    </label>
                </th>
                <td className="md:w-2/5">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={toyPhoto ? toyPhoto : ''} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{productName ? productName : ''}</div>
                            <div className="text-sm opacity-50">$ {price ? price : ''}.00</div>
                        </div>
                    </div>
                </td>
                <td className="md:w-2/5">
                    <div className="w-40 overflow-y-scroll">
                        {details ? details : ''}
                    </div>
                </td>
                <td className="md:w-2/5">{subCategory ? subCategory : ''}</td>
                <td className="md:w-2/5">{rating ? rating : ''}</td>
                <td className="md:w-2/5">{quantity ? quantity : ''}</td>
                <td className="md:w-2/5">
                    {name ? name : ''}
                    <br />
                    <span className="badge badge-ghost badge-sm">{email ? email : ''}</span>
                </td>
                <td className="w-1/5 md:w-auto">
                    
                    <Link to={`/toy/update/${_id}`} className="btn btn-ghost btn-xs text-[#612500f1]">Edit</Link>
                    
                </td>

            </tr>

        </>
    );
};

export default MyToyTable;

