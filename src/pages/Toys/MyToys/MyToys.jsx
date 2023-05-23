import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {


    useTitle('ToyCrateX - My Toys')

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-crate-x-server.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user?.email])

    const handleSorting = (index) => {
        if (index === 0) {
            fetch(`https://toy-crate-x-server.vercel.app/my-toys/${user?.email}/ascending`)
                .then(res => res.json())
                .then(data => {
                    setToys(data);
                });
        } else if (index === 1) {
            fetch(`https://toy-crate-x-server.vercel.app/my-toys/${user?.email}/descending`)
                .then(res => res.json())
                .then(data => {
                    setToys(data);
                });
        }

    }

    const handleDelete = id => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-crate-x-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }




    return (
        <div data-aos="zoom-in-right" data-aos-duration="2000" className="mt-3 overflow-x-auto w-full bg-[#e2d5d566]">
            <div className="flex justify-center py-8">
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn bg-[#612500f1] hover:bg-[#944e22f1] text-white border-0">Sort</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                        <li><Link onClick={() => handleSorting(0)} className="p-0 px-2">Low to high</Link></li>
                        <li><Link onClick={() => handleSorting(1)} className="p-0 px-2">High to low</Link></li>
                    </ul>
                </div>
            </div>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-[#612500f1]">Products</th>
                        <th className="text-[#612500f1]">Description</th>
                        <th className="text-[#612500f1]">Category</th>
                        <th className="text-[#612500f1]">Rating</th>
                        <th className="text-[#612500f1]">Quantity</th>
                        <th className="text-[#612500f1]">Seller</th>
                        <th className="text-[#612500f1]">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <MyToyTable
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToyTable>)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default MyToys;