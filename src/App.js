import logo from './logo.svg';
import './App.css';
import pepe from './img/pepe.gif'

function App() {
  return (
    <div className='justify-center flex flex-col items-center gap-3 bg-black'>
      <div className='mt-12 justify-center flex flex-col items-center text-white'>
        <p className='font-bold text-[300%]'>CNTNT</p>
        <p className=''>AI контентмейкинг для ваших проектов</p>
      </div>
      <div className='justify-center flex flex-col items-center mt-3'>
        <img src={pepe} className='w-[50%]'/>
      </div>
      <div className='justify-center flex flex-col items-center gap-3 sm:mt-3 mt-10'>
        <a href='https://t.me/contentbotoff' className='border-2 border-sky-300 rounded pl-11 pr-11 pt-2 pb-2 text-sky-300 font-bold'>Telegram бот</a>
        <a href='https://t.me/contentbotoff' className='border-2 border-sky-300 rounded pl-9 pr-9 pt-2 pb-2 text-sky-300 font-bold'>Telegram канал</a>

        {/* class="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" */}

      </div>
      <div className='justify-center flex flex-col items-center text-gray-300 sm:mt-3 mt-20'>
        <p>Разработка началась с 25.09.2023</p>
      </div>
    </div>
  );
}

export default App;
