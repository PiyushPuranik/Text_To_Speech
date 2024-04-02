import React from "react";
import "./Text.css";
import play from '../assets/play.png'
// import { click } from "@testing-library/user-event/dist/click";

const Text = () => {


let voices =[];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    window = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

voiceSelect.addEventListener("change" , () => {
    speech.voice = voices[voiceSelect.value];
});


let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
  return (
    <div>
      <div className="hero">
        <h1>Text to Speech <span>Converter</span></h1>
        <textarea placeholder="Write anything here..."></textarea>
        <div className="row">
            <select></select>
            <button><img src={play} alt=""/>Listen</button>
        </div>
      </div>
    </div>
   
  );
};



export default Text;
