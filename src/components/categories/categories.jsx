import React, { useState } from 'react'
import Card from '../card/card'
import image1 from "../../../src/assets/Category-Camera.png"
import image2 from "../../../src/assets/Category-CellPhone.png"

const Categories = () => {
    const arr = [
        {
            id: 1,
            name: "Camera",
            img: image1,
        },
        {
            id: 2,
            name: "Phone",
            img: image2,
        },
        {
            id: 3,
            name: "Camera",
            img: image1,
        },
        {
            id: 4,
            name: "Phone",
            img: image2,
        }
    ]
    const [data, setData] = useState(arr)
    return (
        <div>
            <p className='text-[30px] font-[700] p-[30px]'>Browse By Category</p>
            <div className="flex justify-around sm:flex-col sm:gap-[40px]">
                {
                    data?.map((el) => {
                        return (
                            <div className="border bg-gray-100 p-[30px_60px] text-[20px] hover:bg-[#DB4444] hover:text-[white] w-[fit-content] rounded sm:flex sm:items-center sm:m-auto sm:gap-[20px]" key={el.id}>
                                <img src={el.img} alt="" className='m-auto' />
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Card />
        </div>
    )
}

export default Categories
