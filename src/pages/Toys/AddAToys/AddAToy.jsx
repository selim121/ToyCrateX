import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



const AddAToy = () => {

    useTitle('ToyCrateX - Add Toy')

    const {user} = useContext(AuthContext);
    const [profile, setProfile] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        if (user?.email) { 
            fetch('https://toy-crate-x-server.vercel.app/allUsers')
            .then(res => res.json())
            .then(data => {
                const result = data.find(u => u.email === user.email);
                setProfile(result);
            })
            .catch(error => console.log(error));
        }
    }, [user?.email])
    
    // console.log(profile);

    const { register, handleSubmit, formState: { errors } } = useForm({values: {
        name: profile.name,
        email: profile.email
    }});
    const onSubmit = (data,e) => {
        fetch('https://toy-crate-x-server.vercel.app/toys', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(toy => {
                        if (toy.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Toy Added Successfully',
                                icon: 'Success',
                                confirmButtonText: 'Ok'
                              })
                              navigate('/my-toys');
                            e.target.reset();
                        }
                    })
                    .catch (() => {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something is wrong.',
                            icon: 'error',
                            confirmButtonText: 'Try again'
                          })
                        
                    })
        
    };

    return (
        <>
            <div className="mt-3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4779576.jpg')"}}>

            <div className="rounded-xl shadow-2xl hero">
                <div className="card-body mt-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text"  className="input input-bordered" {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email"  className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product name" className="input input-bordered" {...register("productName", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" placeholder="Sub-category" className="input input-bordered" {...register("subCategory", { required: true })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Enter price" className="input input-bordered" {...register("price", { required: true })} />
                            </div>
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Available quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" className="input input-bordered" {...register("rating", { required: true })} />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL of the toy" className="input input-bordered" {...register("toyPhoto", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>   
                            <textarea className="input input-bordered" {...register("details")} />
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control">
                            <input className="btn border-0 mt-2 bg-[#612500f1]" type="submit" value="Add Toy" />
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default AddAToy;