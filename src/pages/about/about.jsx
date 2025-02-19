import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Varanty from '../../components/varanty/varanty';


const About = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-[auto]">

                <p className="text-[20px] font-[700]">Home / About</p>

                <div className="flex justify-around sm:flex-col">
                    <div className="w-[40%] sm:w-[100%]">
                        <p className="text-[50px] font-[600]">Our Story</p>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br /><br />
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <img src="../../../src/assets/2 african.png" alt="" />
                </div>


                <div className="flex justify-around p-[20px] sm:flex-col sm:gap-[30px]">
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <img src="../../../src/assets/Services.png" alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>

                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto bg-[#DB4444] text-[white] rounded">
                        <img src="../../../src/assets/Services (1).png" alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <img src="../../../src/assets/Services (2).png" alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <img src="../../../src/assets/Services (3).png" alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                </div>

                <div className="rounded flex justify-around sm:flex-col sm:gap-[20px]">
                    <div className="rounded">
                        <img src="../../../src/assets/Frame 874.png" alt="" />
                        <p><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                    <div className="rounded">
                        <img src="../../../src/assets/Frame 875.png" alt="" />
                        <p><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                    <div className="rounded">
                        <img src="../../../src/assets/Frame 876.png" alt="" />
                        <p><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                </div>

                <Varanty />

            </div>

        </>
    )
}

export default About
