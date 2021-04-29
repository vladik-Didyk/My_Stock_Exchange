import React, {useState} from 'react'
import axios from 'axios'
import HomePage from '../components/HomePage/HomePage'
import classes from './StockExchange.module.scss'


const StockExchange = props => {

 const [stocksFromServer, setStocksFromServer] = useState([])
 const [inputValue, setInputValue] = useState('')
 const [errorCatch, setErrorCatch] = useState(false)
 const [spiner, setSpiner] = useState(false)



 const handlerInput = ({ target }) => {
  setInputValue(target.value)
  setSpiner(true)
  axios.get(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${inputValue.toUpperCase()}&limit=10&exchange=NASDAQ`)
  .then(response=>response.data)
  .then(data=>setStocksFromServer(data))
  .catch(()=>setErrorCatch(true))
  .finally(()=>{
    setSpiner(false)
  })
  
}

 
  return (
    <div className={classes.mainContainer}>
      <h1>Stock Exchange</h1>
      <HomePage 
      setStocksFromServer={setStocksFromServer}
      stocksFromServer={stocksFromServer}
      inputValue={inputValue}
      setInputValue={setInputValue}
      handlerInput={handlerInput}
      errorCatch={errorCatch}
      spiner={spiner}
      setSpiner={setSpiner}
      />
    </div>
  )
}


export default StockExchange