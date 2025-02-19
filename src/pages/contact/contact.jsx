import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <div className='m-auto max-w-[1200px] p-[20px]'>

      <p>Home / Contact</p>
      <div className="flex justify-between">

        <div className="shadow-[0px_0px_10px_1px_gray] w-[fit-content] flex flex-col gap-[20px] p-[10px]">
          <div className="flex flex-col gap-[20px] p-[30px] border-b w-[fit-content]">
            <div className="flex gap-[20px] items-center mb-[20px]">
              <img src="../../../src/assets/icons-phone (1).png" alt="" />
              <h1 className="text-[20px]">Call To Us</h1>
            </div>
            <p>We are available 24/7, 7 days a week. <br />
              Phone: +8801611112222</p>
          </div>
          <div className="flex flex-col gap-[20px] p-[30px] border-b w-[fit-content]">
            <div className="flex gap-[20px] items-center mb-[20px]">
              <img src="../../../src/assets/icons-mail.png" alt="" />
              <h1 className="text-[20px]">Write To Us</h1>
            </div>
            <p>We are available 24/7, 7 days a week. <br />
              Phone: +8801611112222</p>
          </div>
        </div>


        <div className="shadow-[0px_0px_10px_1px_gray] w-[fit-content] p-[30px] flex flex-col gap-[20px]">
          <div className="flex gap-[50px]">
            <input type="text" placeholder="Name" className="border p-[10px_15px] rounded" />
            <input type="text" placeholder="Email" className="border p-[10px_15px] rounded" />
            <input type="text" placeholder="Phone" className="border p-[10px_15px] rounded" />
          </div>
          <textarea cols="98" rows={8} placeholder="Your Message" className="border"></textarea> <br />
        <Button variant="contained" className='bg-[#DB4444]'>Send Massage</Button>
        </div >
      </div>
    </div>
  )
}

export default Contact
