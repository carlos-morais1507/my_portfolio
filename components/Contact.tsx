import { Roboto_Slab } from "next/font/google"
import Link from "next/link"

const title = Roboto_Slab({ subsets: ['latin'] })


const Contact = () => {
  return (
    <div id="Contact" className='w-full flex flex-col'>
      <div className="w-full border-b-2 border-violet12 slide-w">
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>CONTACT • CONTACT • CONTACT • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>CONTACT • CONTACT • CONTACT • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>CONTACT • CONTACT • CONTACT • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>CONTACT • CONTACT • CONTACT • </h1>
      </div>

      <div className='w-full h-full md:h-[620px] border-b-2 border-violet12 flex flex-col md:flex-row overflow-hidden'>
        <div className='w-full min-w-[50%] min-h-[325px] h-full md:border-r-2 border-b-2 md:border-b-0 border-violet12 flex flex-col'>
          <Link
          href={"https://www.linkedin.com/in/cmorais1507/"}
          target="blank"
          className="
          h-full w-full border-b-2 border-l-violet12 text-h1 font-medium flex items-center pl-5
          hover:bg-violet9 hover:text-violet1
          ">
            LinkedIn
          </Link>
          <Link
          href={"https://github.com/carlos-morais1507"}
          target="blank"
          className="
          h-full w-full border-b-2 border-l-violet12 text-h1 font-medium flex items-center pl-5
          hover:bg-violet9 hover:text-violet1
          ">
            Github
          </Link>
          <Link
          href={"https://wa.me/5521978928869"}
          target="blank"
          className="
          h-full w-full border-b-2 border-l-violet12 text-h1 font-medium flex items-center pl-5
          hover:bg-violet9 hover:text-violet1
          ">
            WhatsApp
          </Link>
          <Link
          href={"https://t.me/Carlos2812"}
          target="blank"
          className="
          h-full w-full border-b-2 border-l-violet12 text-h1 font-medium flex items-center pl-5
          hover:bg-violet9 hover:text-violet1
          ">
            Telegram
          </Link>
          <Link
          href={"mailto:c.morais1507@gmail.com"}
          target="blank"
          className="
          h-full w-full text-h1 font-medium flex items-center pl-5
          hover:bg-violet9 hover:text-violet1
          ">
            E-mail
          </Link>
        </div>
        <div className='w-full h-full flex flex-col justify-between p-10'>
          <h2 className={`${title.className} text-h1 font-medium text-violet11`}>CONTACT</h2>
          <p className=' text-justify'>
            Thank you very much for seeing my hole portfolio! If you want to reach me, my social media links will be available right here. I hope you liked what you saw here and I am waiting your message!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact