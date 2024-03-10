const Numbers = () => {
  // eslint-disable-next-line react/prop-types
  const Datas = ({ number, text }) => {
    return (
      <div className='flex flex-col items-center justify-center border border-gray-600 px-32 py-20 rounded-xl'>
        <p className='text-7xl font-bold leading-10'>{number}</p>
        <p className='uppercase mt-4 font-semibold'>{text}</p>
      </div>
    )
  }

  return (
    <div className='container mx-auto py-20 text-white'>
      <div className='flex md:flex-row flex-col justify-between'>
        <Datas number='30k' text='Happy custoemrs' />
        <Datas number='10+' text='YEARS EXPERIENCE' />
        <Datas number='28' text='CAB DRIVERS' />
      </div>
    </div>
  )
}

export default Numbers
