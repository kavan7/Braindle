import {useEffect, useState} from 'react'
import {copy, linkIcon, loader, text, tick} from '../assets';
import { useRef } from 'react';

export const Braindle = ({ children }) => {
    const braindle = text =>
      text
        .split(" ")
        .map(
          word =>
            `<b>${word
              .split("")
              .slice(0, Math.ceil(word.length / 2))
              .join("")}</b>${word
              .split("")
              .slice(Math.ceil(word.length / 2), word.length)
              .join("")} `
        )
  
        .join(" ")
        .toString()
  
    return <span className="desc" dangerouslySetInnerHTML={{ __html: braindle(children) }}></span>
  }

  const Demo = () => {
    const [inputText, setInputText] = useState('');
    const [submittedInputs, setSubmittedInputs] = useState([]);
    const textAreaRef = useRef(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputText.trim() !== '') {
        setSubmittedInputs([...submittedInputs, inputText]);
        setInputText('');
      }
    };
  

  
    return (
      <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
          <form className="relative flex justify-center items-right" onSubmit={handleSubmit}>
            <img src={text} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
            <input
              type="text"
              placeholder="Enter your text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              required
              className="url_input peer"
            />
            <button type="submit" className="submit_btn peer-focus:border-secondary peer-focus:text-secondary">
              <img src={tick} alt="tick_icon" />
            </button>
          </form>
        </div>
  
        <div className="text_output peer mt-4 w-full">
        
          
         
  
          {submittedInputs.map((text, index) => (
            <div key={index}>
              <Braindle>{text}</Braindle>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Demo;
  