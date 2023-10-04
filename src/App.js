import logo from './img/logo.png'
import './App.css';
import pepe from './img/pepe.gif'
import anime from './img/anime1.png'


function App() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='justify-center flex flex-col items-center text-black bg-white w-[100%]'>
        <p className='font-bold text-[300%] bg-white'>CNTNT</p>
        <p className='bg-white pb-4'>Контентмейкинг для ваших проектов</p>
      </div>

      <div className='flex justify-center'>
        <div className=''>
          <img src={anime}/>
        </div>
      </div>

      <div className='flex flex-col  text-center text-white'>
        <div className='pl-9 pr-9 pt-3'>
        Все просто. Вы подключаете ваши каналы к боту, в котором настраиваете "пул", откуда бот будет брать контент для каждого вашего канала, далее вы можете подключить GPT и бот начнет переписывать эти посты в оригинальные, в фишки также входит: добавление вотерки, расписание постинга, вотерка на видео/фото и регулярная техподдержка
        </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='justify-center flex flex-col items-center '>
          <img src={logo} className='w-[65%]'/>
        </div>
        <div className='justify-center flex flex-col items-center gap-3 pb-9'>
          <a href='https://t.me/contentbotoff' className='border-2 border-white rounded pl-9 pr-9 pt-2 pb-2 text-white font-bold hover:border-purple-400 hover:text-purple-400'>Telegram канал</a>
        </div>
      </div>
    </div>
  );
}

export default App;
