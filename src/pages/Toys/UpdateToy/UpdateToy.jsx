/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {

    const toy = useLoaderData();
    const { _id, name, email, productName, details, price, quantity, rating, subCategory, toyPhoto } = toy;
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({values: {
        name: toy.name,
        email: toy.email,
        productName: toy.productName,
        details: toy.details,
        price: toy.price,
        quantity: toy.quantity,
        rating: toy.rating,
        subCategory: toy.subCategory,
        toyPhoto: toy.toyPhoto
    }});

    const handleUpdate = (data,e) => {
        fetch(`https://toy-crate-x-server.vercel.app/toy/update/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Toy Update Successfully',
                                icon: 'Success',
                                confirmButtonText: 'Ok'
                              })
                              navigate('/my-toys');
                            e.target.reset();
                        }
                    })
                    .catch (error => {
                        console.log(error());
                        
                    })
    }

    return (
        <>
            <div className="mt-3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4779576.jpg')" }}>

                <div className="rounded-xl shadow-2xl hero">
                    <div className="card-body mt-12">
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input disabled  type="text" className="input input-bordered" {...register("name", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input disabled  type="email" className="input input-bordered" {...register("email", { required: true })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input disabled  type="text" placeholder="Product name" className="input input-bordered" {...register("productName", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <input disabled  type="text" placeholder="Sub-category" className="input input-bordered" {...register("subCategory", { required: true })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input  type="text" placeholder="Enter price" className="input input-bordered" {...register("price", { required: true })} />
                                </div>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input  type="text" placeholder="Available quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input disabled  type="text" placeholder="Rating" className="input input-bordered" {...register("rating", { required: true })} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input disabled  type="url" placeholder="Photo URL of the toy" className="input input-bordered" {...register("toyPhoto", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <textarea  className="input input-bordered" {...register("details")} />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="form-control">
                                <input className="btn border-0 mt-2 bg-[#612500f1]" type="submit" value="Update Toy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateToy;