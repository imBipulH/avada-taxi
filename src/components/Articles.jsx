const Articles = () => {
  return (
    <div className='container mx-auto py-28'>
      <h3 className='text-5xl font-semibold text-center'>Recent Articles</h3>
      <div className='flex md:flex-row flex-col w-full justify-between gap-24 my-20'>
        <div className='flex flex-col text-center gap-4 shadow-xl rounded-lg'>
          <img
            className='max-h-[450px] rounded-t-lg'
            src='../../src/assets/avada-taxi-blog-03.jpg'
          />
          <div className='p-8'>
            <p className='text-3xl font-bold'>Welcome to Avada Taxi</p>
            <p className='my-2 text-sm'>
              January 16th, 2020 Announcements, General
            </p>
            <p className='my-4 text-md'>
              Ride-Sharing Tips For the Savy Traveler Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Pellentesque sed justo
              ultrices, dignissim dui at, laoreet dui. Quisque ut felis et neque
              dignissim ultricies vitae quis tellus. Nullam mattis cursus
              ornare. Nulla nec
            </p>
          </div>
        </div>
        <div className='flex flex-col text-center gap-4 shadow-xl rounded-lg'>
          <img
            className='max-h-[450px] rounded-t-lg'
            src='../../src/assets/avada-taxi-blog-04.jpg'
          />
          <div className='p-8'>
            <p className='text-3xl font-bold'>Welcome to Avada Taxi</p>
            <p className='my-2 text-sm'>
              January 16th, 2020 Announcements, General
            </p>
            <p className='my-4 text-md'>
              Ride-Sharing Tips For the Savy Traveler Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Pellentesque sed justo
              ultrices, dignissim dui at, laoreet dui. Quisque ut felis et neque
              dignissim ultricies vitae quis tellus. Nullam mattis cursus
              ornare. Nulla nec
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">

      <button className="px-5 py-3 text-black bg-primary rounded-md font-semibold uppercase">Read More on our blogs</button>
      </div>
    </div>
  )
}

export default Articles
