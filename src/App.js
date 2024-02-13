import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑"
];

export default function App() {

  const [step, setStep] = useState(1);
  const [test, setTest] = useState({name: "Leandro"});

  function handlePrevious (){
    if(step > 1) setStep(step - 1);
    setTest({name: "Leandro"});
  }

  function handleNext (){
    
    if(step < 3) setStep(step + 1); 
    // BAD PRACTICE to override a var because States always must to be trated as immutable
    // test.name = "Junior"

    // GOOD PRACTICE
    setTest({name: "Junior"}); 
  }

  return <div className="steps">
    <div className="numbers">
      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
    </div>
    <p className="message">Step {step}: {messages[step -1]} 
      {test.name}
    </p>
    <div className="buttons">
      <button style={{backgroundColor: '#7950f2', color: '#fff'}} 
        onClick={handlePrevious}>
        Previous
      </button>
      <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
    </div>

  </div>
}