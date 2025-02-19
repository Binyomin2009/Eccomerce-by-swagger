import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#000000] text-[white] p-[100px] flex justify-around sm:flex-col sm:gap-[30px]'>
                <div className="flex flex-col gap-[10px] w-[fit-content]">
                    <p className='text-[30px]'>Exclusive</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <input type="text" placeholder='Enter your email' className='bg-[#000000] border border-white p-[5px] rounded' />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p className='text-[30px]'>Support</p>
                    <p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>


                <div className="flex flex-col gap-[10px]">
                    <p className='text-[30px]'>Account</p>
                    <p>My Account</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>


                <div className="flex flex-col gap-[10px]">
                    <p className='text-[30px]'>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="">
                    <p className='text-[30px]'>Social</p>
                    <div className="flex gap-[10px]">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <TelegramIcon/>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
