const Navbar = () => {
  const Navlist = ['Home', 'Pricing', 'APP', 'News', 'Contact us']
  return (
    <div className='container mx-auto text-white pt-8 '>
      <div className='flex items-center justify-between'>
        <img src='../../src/assets/avada-taxi-logo.png' alt='Logo' />
        <div className="md:flex hidden  items-center gap-12">
          <div className='flex gap-8 uppercase'>
            {Navlist.map((item, index) => (
              <p
                key={index}
                className='font-bold hover:text-primary cursor-pointer'
              >
                {item}
              </p>
            ))}
          </div>
          <button className='bg-primary hover:bg-secondary uppercase text-sm font-bold text-black px-4 py-2 rounded-md tracking-wider'>
            Book Online
          </button>
        </div>
      </div>

      <p className='text-7xl text-center mt-48 font-bold tracking-wide'>
        <span className='text-primary'>Premium </span>Transport
      </p>
      <p className="text-white text-center mt-12 text-3xl font-bold">for your Business & Personal Needs</p>
    </div>
  )
}

export default Navbar
