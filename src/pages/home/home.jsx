
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../../components/card/card';
import Categories from '../../components/categories/categories';
import Enhance from '../../components/enhance/enhance';
import Varanty from '../../components/varanty/varanty';
import ProductCard from '../productCard/productcard';


const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="flex items-center gap-4 p-4 sm:flex-col">
                <div className="w-[250px] bg-white shadow-md p-4 rounded-lg">
                    {[
                        "Woman’s Fashion",
                        "Men’s Fashion",
                        "Electronics",
                        "Home & Lifestyle",
                        "Medicine",
                        "Sports & Outdoor",
                        "Baby’s & Toys",
                        "Groceries & Pets",
                        "Health & Beauty",
                    ].map((category) => (
                        <p key={"."} className="text-gray-700 hover:text-black cursor-pointer py-1">
                            {category}
                        </p>
                    ))}
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className='w-[65%] sm:w-[100%]'
                >
                    <SwiperSlide><img src="../../../src/assets/Frame 560.png" alt="" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><img src="../../../src/assets/Frame 560.png" alt="" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><img src="../../../src/assets/Frame 560.png" alt="" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><img src="../../../src/assets/Frame 560.png" alt="" className='m-auto' /></SwiperSlide>
                </Swiper>
            </div>

            Today's

            <div className="flex gap-[100px] sm:flex-col sm:text-center">
                <h1 className='text-[30px] font-[700]'>Flash Sales</h1>
                <div className="">
                    <div className='flex gap-[20px]'>
                        <p>Days</p>
                        <p>Hours</p>
                        <p>Minutes</p>
                        <p>Seconds</p>
                    </div>
                    <div className='flex gap-[47px]'>
                        <p className='font-[700]'>03 :</p>
                        <p className='font-[700]'>23 :</p>
                        <p className='font-[700]'>19 :</p>
                        <p className='font-[700]'>56</p>
                    </div>
                </div>
            </div>


            <Card />

            <Categories />



            <Enhance />

            <Card />
            <Card />
            <Varanty />
        </div>
    )
}

export default Home
