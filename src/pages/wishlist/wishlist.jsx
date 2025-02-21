
import image from "../../../src/assets/Frame 611.png";
import DeleteIcon from '@mui/icons-material/Delete';

const Card = () => {

    const arr = [
        { id: 1, name: "HAVIT HV-G92 Gamepad", price: "$120", img: image },
        { id: 2, name: "HAVIT HV-G92 Gamepad", price: "$120", img: image },
        { id: 3, name: "HAVIT HV-G92 Gamepad", price: "$120", img: image },
    ];

    return (
        <div className="flex justify-around mt-[30px] sm:flex-col sm:gap-[40px]">
            {arr.map((el) => (
                <div
                    className="bg-gray-100 p-5 w-full max-w-[250px] rounded-lg relative group sm:m-auto"
                    key={el.id}
                >
                    <img src={el.img} alt="Product" className="w-full" />

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <DeleteIcon className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
                    </div>

                    <button className="bg-black text-white w-full p-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                        Add To Cart
                    </button>

                    <p>{el.name}</p>
                    <p className="text-[red]">{el.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
