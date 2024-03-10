import Cab from '../../src/assets/cab.png'

const Rides = () => {
  // eslint-disable-next-line react/prop-types
  const Cabs = ({ image, name, numberOfPassenger, details, cost }) => {
    return (
      <div>
        <div className='flex flex-col text-center border p-14 shadow-md rounded-md'>
          <img className='w-40 mx-auto my-8' src={image} alt={name} />
          <h1 className='text-3xl font-semibold leading-10'>{name}</h1>
          <p className='uppercase font-semibold text-gray-400'>{numberOfPassenger} Passengers</p>
          <p className='my-10'>{details}</p>
          <p className='uppercase text-base tracking-widest font-semibold'>Rides cost</p>
          <p className='text-primary text-6xl font-bold my-8'>${cost}<span className='text-xl'>/km</span></p>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto text-black'>
      <div>
        <div className='flex flex-col md:flex-row gap-8 my-40 '>
          <Cabs
            image={Cab}
            name='Standard Cab'
            numberOfPassenger='1-3'
            details='Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.'
            cost='1'
          />
          <Cabs
            image={Cab}
            name='Minibus'
            numberOfPassenger='1-8'
            details='Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.'
            cost='2'
          />
          <Cabs
            image={Cab}
            name='Executive'
            numberOfPassenger='1-2'
            details='Our standard cab service will pick you up from your desired location with up to 2 additional riders, and deliver you safely to your target destination.'
            cost='5'
          />
        </div>
      </div>
    </div>
  )
}

export default Rides
