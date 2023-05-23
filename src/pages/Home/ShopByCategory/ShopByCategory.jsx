
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import CategoryToyCard from './CategoryToyCard';
import Typewriter from 'typewriter-effect';

const ShopByCategory = () => {

    const category = ['Regular', 'Police', 'Jeep', 'Sports'];
    const [tabIndex, setTabIndex] = useState(0);
    const [subCategory, setSubCategory] = useState(category[0]);
    const [subCategoryToys, setSubCategoryToys] = useState([]);
    // console.log(subCategory);

    useEffect(() => {
        fetch(`https://toy-crate-x-server.vercel.app/toy/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSubCategoryToys(data);
            })
    }, [subCategory])


    return (
        <div data-aos="slide-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className='py-12 bg-[#e2d5d566]'>
            <div>
                <h1 className="pb-4 text-center text-5xl font-bold text-[#612500f1]">
                <Typewriter
                    options={{
                        strings: ['Shop By Category'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 'natural',
                    }}
                />
                </h1>
            </div>

            <div className="py-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => {
                    setTabIndex(index);
                    setSubCategory(category[index]);
                }}>
                    <TabList>
                        <Tab><span className='font-bold text-[#612500f1]'>Regular Car</span></Tab>
                        <Tab><span className='font-bold text-[#612500f1]'>Police Car</span></Tab>
                        <Tab><span className='font-bold text-[#612500f1]'>Jeep</span></Tab>
                        <Tab><span className='font-bold text-[#612500f1]'>Sports Car</span></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;