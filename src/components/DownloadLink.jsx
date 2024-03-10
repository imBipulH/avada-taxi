const DownloadLink = () => {
  return (
    <div className="pt-20 bg-[url('../../src/assets/avada-taxi-app-background.jpg')]">
      <div className='container items-center mx-auto flex md:flex-row flex-col gap-20'>
        <div className='w-1/2'>
          <h3 className='text-5xl text-[rgb(51,51,51)] font-semibold'>
            Get the app
          </h3>
          <p className='text-lg leading-7 my-8 max-w-[540px] '>
            You can now download our app on Android and iOS. Never be stranded
            with Avada Taxi, book your cab from wherever you are, for as many of
            you as there are.
          </p>
          <div className='flex gap-6 max-w-56'>
            <img src='../../src/assets/avada-taxi-app-store.png' />
            <img src='../../src/assets/avada-taxi-google-play.png' />
          </div>
        </div>
        <img className="max-w-[380px]" src="../../src/assets/avada-taxi-phone-app.png" alt="Phone_app" />
      </div>
    </div>
  )
}

export default DownloadLink
