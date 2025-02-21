import { useState } from "react";
import { Button, TextField, MenuItem, Select, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: "LCD Monitor", price: 650, quantity: 1, img: "../../../src/assets/Frame 874.png" },
    ]);

    const [coupon, setCoupon] = useState("");

    const handleQuantityChange = (id, quantity) => {
        setCart(cart.map(item => (item.id === id ? { ...item, quantity: quantity } : item)));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">Product</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Subtotal</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-2 flex items-center gap-2">
                                <img src={item.img} alt={item.name} className="w-10 h-10" />
                                {item.name}
                            </td>
                            <td className="p-2">${item.price}</td>
                            <td className="p-2">
                                <Input type="number" style={{ width: "30px" }}></Input>
                            </td>
                            <td className="p-2 font-bold">${item.price * item.quantity}</td>
                            <td className="p-2">
                                <Button color="error" onClick={() => removeItem(item.id)}>
                                    <DeleteIcon />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <dixv className="flex justify-around">

                <div className="flex items-center gap-4 mt-6">
                    <TextField
                        label="Coupon Code"
                        variant="outlined"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                    />
                    <Button variant="outlined" color="error">
                        Apply
                    </Button>
                </div>

                <div className="mt-6 p-8 border rounded-lg w-[330px] flex flex-col gap-[10px]">
                    <p className="text-lg">Subtotal: <span className="font-bold">${total}</span></p>
                    <p>Shipping: <span className="text-green-500">Free</span></p>
                    <p className="text-xl font-bold mt-2">Total: ${total}</p>
                    <Button variant="contained" color="error" fullWidth className="mt-4">
                        Proceed to Checkout
                    </Button>
                </div>
            </dixv>

            <div className="flex justify-between mt-6">
                <Link to="/">
                <Button variant="outlined">Return To Shop</Button>
                </Link>
                <Button variant="outlined" color="error" onClick={clearCart}>
                    Remove all
                </Button>
            </div>
        </div>
    );
};

export default Cart;
