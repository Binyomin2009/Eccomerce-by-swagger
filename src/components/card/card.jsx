import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect } from "react";
import { useLogiks } from "../../store/logiks";
import { useInfoProducts } from "../../store/infoProduct";


const Card = () => {
    const navigate = useNavigate();

    const { getProducts, data, AddToCard } = useLogiks()


    const { getProdByid } = useInfoProducts()

    useEffect(() => {
        getProducts(),
            getProdByid()
    }, [])


    return (
        <div className="flex justify-around mt-[30px] sm:flex-col sm:gap-[40px] flex-wrap gap-[20px]">
            {data?.map((el) => {

                return (
                    <div
                        className="bg-gray-100 p-5 w-full max-w-[250px] rounded-lg relative group sm:m-auto"
                        key={el.id}
                    >
                        <Image src={el.image} alt="Product" className="w-full h-[200px]" />

                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <FavoriteBorderIcon className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
                            <VisibilityIcon
                                className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300"
                                onClick={() => { getProdByid(el.id), navigate(`/product/${el.id}`) }}
                            />
                        </div>

                        <button className="bg-black text-white w-full p-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300" onClick={() => AddToCard(el.id)}>
                            Add To Cart
                        </button>

                        <p>{el.productName}</p>
                        <p className="text-[red]">${el.price}</p>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default Card;
