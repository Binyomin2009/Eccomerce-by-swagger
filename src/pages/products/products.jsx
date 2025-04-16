import React from 'react'
import Card from '../../components/card/card'
import Filter from '../../components/filter/filter'

const Products = () => {
    return (
        <div className='mx-auto max-w-[1200px] flex justify-between sm:flex-col'>
            <Filter/>
            <div className="w-[70%] sm:w-[100%]">
                <Card />
            </div>
        </div>       
    )
}

export default Products
