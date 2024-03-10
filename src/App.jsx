import Articles from './components/Articles'
import BookingForm from './components/BookingForm'
import DownloadLink from './components/DownloadLink'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Numbers from './components/Numbers'
import Rides from './components/Rides'

function App () {
  return (
    <>
      <div className="bg-[url('../../src/assets/homepage-hero.jpg')] w-screen h-[950px] bg-no-repeat bg-cover bg-center relative">
        <div className='absolute top-0 left-0 w-full h-full bg-black/60'>
          <Navbar />
          <BookingForm />
        </div>
      </div>
      <Rides />
      <div className="bg-[url('../src/assets/avada-taxi-stats-background1.png')] bg-cover bg-center bg-no-repeat">
        <Numbers />
      </div>
      <DownloadLink/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default App
