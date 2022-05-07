import { useState, useRef } from 'react'

const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, onChangeAge] = useState(20)

  const increase = () => {
    setCount(count + 1)
  }
  const increaseAge = () => {
    onChangeAge(age + 1)
    // // useref sayesinde state nesnesinin tutulduğu yer değişmez ve render alınmaz ama sayı değişir
    // value.current = value.current +1
    // console.log(value)
  }

  const value = useRef(0)
  const [text, setText] = useState('')
  const inputRef = useRef(null)

  const handleText = (e) => {
    setText(e.target.value)
  }
  const changeBGColor = () => {
    // //  console.log(inputRef.current) // elemente ulaşır
    // //  console.log(inputRef.current.value)   // değere ulaşır
    // inputRef.current.parentElement.style.backgroundColor = text;
    // // aşağıdaki gibi de yapılabilir
    const newInput = document.getElementById('new')
    console.log(newInput)
    newInput.parentElement.style.backgroundColor = text
  }

  const divRef = useRef(null)

  const changeBorder = () => {
    divRef.current.style.border = '10px solid black'
  }

  return (
    <div className="function" ref={divRef}>
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <hr></hr>
      {/* // className ile çekemediğimizde useRef */}
      <input id="new" ref={inputRef} type="text" value={text} onChange={handleText}></input>
      <button onClick={() => changeBGColor()}>BG Color</button>
      <br></br>
      <button onClick={() => changeBorder()}>Border</button>
    </div>
  )
}

export default FunctionalComponent
