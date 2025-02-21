import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import image from "../../../src/assets/Frame 611.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLogiks } from "../../store/logiks";

const url = "https://store-api.softclub.tj/Product/get-products"

const Card = () => {
    const navigate = useNavigate();

    const { getProducts, data, AddToCard } = useLogiks()
    // const data = [
    //     { id: 1, name: "HAVIT HV-G92 Gamepad", price: "$120", img: image },
    //     { id: 2, name: "HAVIT HV-G92 Gamepad", price: "$120", img: image },
    //     { id: 3, name: "HAVIT HV-G92 Gamepad", price: "$120", img: image },
    // ];

    // const [data, setData] = useState([])

    // async function get() {
    //     try {
    //         const { data } = await axios.get(url)
    //         setData(data.data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    useEffect(() => {
        getProducts()
    }, [])

    console.log(data);

    return (
        <div className="flex justify-around mt-[30px] sm:flex-col sm:gap-[40px]">
            {data?.map((el) => {

                return (
                    <div
                        className="bg-gray-100 p-5 w-full max-w-[250px] rounded-lg relative group sm:m-auto"
                        key={el.id}
                    >
                        <img src={el.image} alt="Product" className="w-full" />

                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <FavoriteBorderIcon className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
                            <VisibilityIcon
                                className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300"
                                onClick={() => navigate(`/product/${el.id}`)}
                            />
                        </div>

                        <button className="bg-black text-white w-full p-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300" onClick={() => AddToCard(el.id)}>
                            Add To Cart
                        </button>

                        <p>{el.productName}</p>
                        <p className="text-[red]">{el.price}</p>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default Card;
