/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import google from '../../assets/images/icon/google.svg';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";


const SignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    useTitle('ToyCrateX - SignIn')

    const { signIn, signInWithGoogle} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
        signIn(data.email, data.password)
        .then(result => {
            navigate(from, {replace: true});
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Log In',
                icon: 'Success',
                confirmButtonText: 'Cool'
              })
              e.target.reset();
        })
        .catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Your email or password is not correct.',
                icon: 'error',
                confirmButtonText: 'Try again'
              })
              
        })
    };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            navigate(from, {replace: true});
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Log In',
                icon: 'Success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Something is wrong.',
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })
    }

    

    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95fGVufDB8fDB8fA%3D%3D&w=1000&q=80')" }}>
            <div className="flex items-center sm:ps-12 py-20 ">
                <div className="rounded-xl w-full max-w-md shadow-2xl bg-[#ce8c8c66]">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your password" className="input input-bordered" {...register("password", { required: true })} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#612500f1]">Forgot password?</a>
                                </label>
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-[#612500f1]" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to ToyCrateX ? <Link to={'/sign-up'} className='text-[#612500f1] font-bold'>Sign Up</Link></p>
                        <div className="divider">OR</div>
                        <div className="my-5 bg-white py-4 rounded-xl shadow-2xl">
                            <Link onClick={handleGoogleSignIn} className="text-[#612500f1] ">
                                <div className="flex justify-center">
                                    <img src={google} className="h-6 me-2" /> Sign in with Google
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;