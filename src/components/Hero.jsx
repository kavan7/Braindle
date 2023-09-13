import { logo, popover } from '../assets';
import { github } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3  ">
          <img src = {logo} alt="brains" className='w-80 pt-2 items-start object-contain' />
          
        <button type='button'
        onClick={() => window.open('https://github.com/kavan7')}>
          <img src={ github} alt='github' className='w-14' />  
             </button>
        </nav>

      <h1 className="head_text">
        Better reading with <br/><span className="text-with-effects">
          Braindle 
        </span>
      </h1>
      <h2 className="desc">
        Did you know that your brain reads faster than your eye?
        
        <br className="summary_box"/>Type a lengthy article down below for a quicker, and more efficient read. <a href="https://www.newsweek.com/what-bionic-reading-why-feels-like-unlocking-your-brain-1708614" target="_bla"><span >ⓘ</span></a>
      
      </h2>
     


     
    </header>
  )

}

export default Hero