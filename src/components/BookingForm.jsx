const BookingForm = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex md:flex-row flex-col rounded-md bg-white mt-28 shadow-lg'>
        <div className='flex items-center flex-col text-white bg-primary rounded-t-lg md:rounded-l-lg p-8 text-center md:w-1/3'>
          <div className='my-auto'>
            <p className='text-xl leading-10'>Book online now &</p>
            <p className='text-5xl uppercase font-bold'>Save</p>
            <p className='text-[100px] font-semibold text-black leading-[110px]'>
              10%
            </p>
            <p className='text-xl'>On Your Ride</p>
          </div>
        </div>
        <div className='p-10 md:w-2/3'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <label className='flex flex-col gap-2 text-gray-700'>
              Pick Up Location
              <input
                name='pick_up'
                className='border  border-gray-300 px-3 py-4 text-lg outline-none rounded-md'
              />
            </label>
            <label className='flex flex-col gap-2 text-gray-700'>
              Drop Off Location
              <input
                name='drop_off'
                className='border  border-gray-300 px-3 py-4 text-lg outline-none rounded-md'
              />
            </label>
            <label className='flex flex-col gap-2 text-gray-700'>
              Date Required
              <input
                type='date'
                name='drop_off'
                className='border  border-gray-300 px-3 py-4 text-lg outline-none rounded-md'
              />
            </label>
            <label className='flex flex-col gap-2 text-gray-700'>
              Number of Passengers
              <input
                type='number'
                name='drop_off'
                className='border  border-gray-300 px-3 py-4 text-lg outline-none rounded-md'
              />
            </label>
            <label className='flex flex-col gap-2 text-gray-700'>
              Your Name
              <input
                name='drop_off'
                className='border  border-gray-300 px-3 py-4 text-lg outline-none rounded-md'
              />
            </label>
            <label className='flex flex-col gap-2 text-gray-700'>
              Your Email Address
              <input
                name='drop_off'
                className='border  border-gray-300 px-3 py-4 text-lg outline-none rounded-md'
              />
            </label>
          </div>
          <div className='flex mt-8 gap-4'>
            <p className='w-1/2'>
              Payment for bookings is taken in advance as per our terms and
              conditions
            </p>
            <button className='bg-primary hover:bg-secondary uppercase text-sm font-bold text-black px-4 py-2 rounded-md tracking-wider'>
              Get A QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingForm
