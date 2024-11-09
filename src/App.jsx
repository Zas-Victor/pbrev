import './App.css'
import HeadPrimary from './components/home/header/HeD';
import PrimaryPageMain from './components/home/main/PgPm';
import FooterPrimary from './components/home/footer/FtPm';

function App() {

  return (
    <div className='w-screen sm:w-screen md:w-screen lg:w-screen xl:w-screen 2xl:w-screen flex flex-col justify-between'>
      <HeadPrimary/>
      <PrimaryPageMain/>
      <FooterPrimary/>
    </div>
  )
}

export default App
