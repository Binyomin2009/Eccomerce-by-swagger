import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <>

                <div className="flex sm:flex-col justify-between items-start gap-10 flex-wrap bg-[black] text-[white] p-10">
                    <div className="flex flex-col gap-3 max-w-[250px]">
                        <p className="text-2xl font-bold">Exclusive</p>
                        <p>Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="bg-black border border-white px-3 py-2 rounded"
                        />
                    </div>

                    <div className="flex flex-col gap-2 max-w-[250px]">
                        <p className="text-2xl font-bold">Support</p>
                        <p>111 Bijoy Sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-2xl font-bold">Account</p>
                        <p>My Account</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-2xl font-bold">Quick Link</p>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-2xl font-bold">Social</p>
                        <div className="flex gap-3">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                </div>
        </>

    );
};

export default Footer;
