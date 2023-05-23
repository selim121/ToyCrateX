import useTitle from "../../hooks/useTitle";
import ToyCard from "./ToyCard";
import { useEffect, useState } from "react";

const AllToys = () => {

    useTitle('ToyCrateX - All Toys')

    const [searchText, setSearchText] = useState('');
    let [toys, setToys] = useState([]);

    const limit = 20;

    useEffect(() => {
        fetch('https://toy-crate-x-server.vercel.app/allToys')
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }, [])


    const handleSearch = () => {
        fetch(`https://toy-crate-x-server.vercel.app/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }


    return (
        <div data-aos="zoom-in-left" data-aos-duration="2000" className="py-8 overflow-x-auto w-full bg-[#e2d5d566]">
            <div className="py-5 text-center">
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search Toy by name" className="input input-bordered" />
                <button onClick={handleSearch} className="bg-[#612500f1] hover:bg-[#944e22f1] text-white py-2 px-4 rounded-md ms-3">Search</button>
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="text-[#612500f1]">Product Name</th>
                        <th className="text-[#612500f1]">Price</th>
                        <th className="text-[#612500f1]">Category</th>
                        <th className="text-[#612500f1]">Quantity</th>
                        <th className="text-[#612500f1]">Seller</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.slice(0, limit).map(toy => <ToyCard
                            key={toy._id}
                            toy={toy}
                        ></ToyCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;