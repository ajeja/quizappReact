import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

const Quiz = () => {

  let [count,setCount] =useState(0.00)
  let [index,setIndex] = useState(0)
  let [question,setQuestion] = useState(data[index])
  let [selectedOption, setSelectedOption] = useState(null);
  let [ans,setAns] = useState(null)
  let [result,setResult] = useState(null)
 
  const next = () => {
    if (index+1 < data.length ) {
      setIndex (index+1) 
      setQuestion (data[index+1])
      setSelectedOption (null)
      setAns (null)
      setResult (false)
    }
    else {
      setResult (true)
    }
  }

  const handleAnsOption = (e) => {
      setSelectedOption(e)
      if (e === question.ans) {
        setAns (true)
        setCount(count+1) 
      }  
      else {
        setAns (false)
        setCount(count-0.25)
      }
  }
  
  const optionSelected = (e) => {
    if (selectedOption === null) return '';
    return selectedOption === e ? (ans ? 'correct' : 'wrong') : '';
  }

  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        {result ? <h2>You scored {count} out of {data.length}</h2> : <>
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li onClick ={ (e) => {handleAnsOption(1)} } className= {optionSelected(1)}>
              {question.option1}</li>
            <li onClick ={ (e) => {handleAnsOption(2)} } className= {optionSelected(2)}>
              {question.option2}</li>
            <li onClick ={ (e) => {handleAnsOption(3)} } className= {optionSelected(3)}>
              {question.option3}</li>
            <li onClick ={ (e) => {handleAnsOption(4)} } className= {optionSelected(4)}>
              {question.option4}</li>
        </ul>
        <button className="buton" onClick={next}>Next </button>
        <div className="index">{index+1} of 5 questions </div>
        </> }
    </div>
  )
}

export default Quiz