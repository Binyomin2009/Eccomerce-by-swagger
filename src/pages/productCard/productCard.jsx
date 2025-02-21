import { useState } from "react";
import { Button, IconButton, Rating, Select, MenuItem } from "@mui/material";
import { ShoppingCart, Add, Remove, LocalShipping, Replay } from "@mui/icons-material";


const ProductCard = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("white");
    const [selectedImage, setSelectedImage] = useState("../../../src/assets/Frame 894.png");

    const sizes = ["XS", "S", "M", "L", "XL"];

    const colors = [
        { name: "white", hex: "#ffffff", image: "../../../src/assets/Frame 894.png" },
        { name: "black", hex: "#000000", image: "../../../src/assets/Frame 896.png" },
        { name: "red", hex: "#ff0000", image: "../../../src/assets/Frame 897.png" }
    ];

    const images = [
        "../../../src/assets/Frame 894.png",
        "../../../src/assets/Frame 896.png",
        "../../../src/assets/Frame 897.png"
    ];

    return (
        <div className="max-w-[1200px] mx-auto bg-white p-6 rounded-lg shadow-lg flex gap-6">
            <div className="w-[40%] h-[600px]">
                <img src={selectedImage} alt="Gamepad" className="w-full rounded-lg" />
                <div className="flex gap-2 mt-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Thumbnail"
                            className={`w-16 h-16 border rounded-lg cursor-pointer ${selectedImage === img ? "border-blue-500" : ""
                                }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>
            </div>

            <div className="w-2/3">
                <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>
                <Rating value={4} readOnly className="my-2" />
                <p className="text-xl font-bold text-gray-800">$192.00</p>

                <div className="mt-4">
                    <p className="text-gray-600">Размер:</p>
                    <Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="w-24">
                        {sizes.map((size) => (
                            <MenuItem key={size} value={size}>
                                {size}
                            </MenuItem>
                        ))}
                    </Select>
                </div>

                <div className="mt-4">
                    <p className="text-gray-600">Цвет:</p>
                    <div className="flex gap-2">
                        {colors.map((color) => (
                            <div
                                key={color.name}
                                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color.name ? "border-blue-500" : "border-gray-300"
                                    }`}
                                style={{ backgroundColor: color.hex }}
                                onClick={() => {
                                    setSelectedColor(color.name);
                                    setSelectedImage(color.image);
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <p className="text-gray-600">Количество:</p>
                    <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                        <Remove />
                    </IconButton>
                    <span className="text-lg">{quantity}</span>
                    <IconButton onClick={() => setQuantity(quantity + 1)}>
                        <Add />
                    </IconButton>
                </div>

                <Button variant="contained" color="primary" className="mt-4 w-full" startIcon={<ShoppingCart />}>
                    Купить
                </Button>

                <div className="mt-6 space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                        <LocalShipping className="text-blue-500" /> Бесплатная доставка
                    </p>
                    <p className="flex items-center gap-2">
                        <Replay className="text-green-500" /> 30 дней на возврат
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
