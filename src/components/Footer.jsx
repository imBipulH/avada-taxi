import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer () {
  // eslint-disable-next-line react/prop-types
  const Cab = ({ image, vehicles, passenger, details, cost }) => {
    return (
      <div className='text-white text-center flex items-center flex-col justify-center px-10'>
        <img className='mx-auto mb-8' src={image} alt={vehicles} />
        <p className='text-white font-semibold text-3xl'>{vehicles}</p>
        <p>{passenger} Passengers</p>
        <p className='my-6 text-gray-400 text-xs'>{details}</p>
        <p className='uppercase mb-4 text-md font-semibold text-gray-400 tracking-widest'>
          Rides Cost
        </p>
        <p className='text-6xl text-primary font-bold'>
          ${cost}
          <span className='text-sm '>/km</span>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[url('../../src/assets/avada-taxi-testimonials-background.jpg')] py-14 ">
      <div className='container mx-auto flex md:flex-row flex-col gap-8 md:gap-0 justify-between '>
        <div className="bg-[url('../../src/assets/avada-taxi-book-now-background.jpg')] px-10 py-20 text-center inline-block text-white rounded-md">
          <p className='text-xl font-medium'>Book online now &</p>
          <p className='text-5xl font-semibold my-2'>SAVE</p>
          <p className='text-8xl font-semibold text-black'>10%</p>
          <p>On Your Ride</p>
          <button className='bg-primary hover:bg-secondary transition-all duration-100 px-4 py-2 my-4 rounded-md uppercase text-black text-xs font-semibold'>
            BOOK Now
          </button>
        </div>
        <Cab
          image='../../src/assets/minibux.png'
          vehicles='Minibux'
          passenger='1-8'
          details='Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.'
          cost='1'
        />
        <Cab
          image='../../src/assets/minibux.png'
          vehicles='Minibux'
          passenger='1-8'
          details='Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.'
          cost='2'
        />
        <Cab
          image='../../src/assets/minibux.png'
          vehicles='Minibux'
          passenger='1-8'
          details='Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.'
          cost='3'
        />
      </div>
      <div className='container mx-auto'>
        <div className='h-0.5 my-20 bg-primary relative'>
          <div className='absolute flex items-center justify-center h-14 w-14 -translate-y-1/2 left-1/2 bg-black rounded-full border -translate-x-1/2 border-primary bg-center bg-cover bg-no-repeat'>
            <img
              className='w-8'
              src='../../src/assets/cab.png'
              alt='Footer Car'
            />
          </div>
        </div>

        <img className='mx-auto' src='../../src/assets/avada-taxi-logo@2x.png' />
        <div className='flex items-center justify-center text-2xl text-white my-8 gap-8'>
          <FaFacebookF  />
          <FaXTwitter />
          <FaInstagram />
        </div>

        <p className='text-gray-400 mt-20 text-center'>© Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion | All Rights Reserved | Developed by Bipul Hajong</p>
      </div>
    </div>
  )
}

export default Footer
