import './App.css'
import HeadPrimary from './components/home/header/HeD';
import PrimaryPageMain from './components/home/main/PgPm';

function App() {

  return (
    <div className='w-screen h-screen sm:w-screen sm:h-screen md:w-screen md:h-screen lg:w-screen lg:h-screen xl:w-screen xl:h-screen 2xl:w-screen 2xl:h-screen flex flex-col'>
      <HeadPrimary/>
      <PrimaryPageMain className=""/>
    </div>
  )
}

export default App
