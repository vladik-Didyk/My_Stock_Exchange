import React, {useState} from 'react'
import axios from 'axios'
import HomePage from '../components/HomePage/HomePage'
import classes from './StockExchange.module.scss'




const StockExchange = props => {
  
  

 const [stocksFromServer, setStocksFromServer] = useState([])
 const [inputValue, setInputValue] = useState('')
 const [errorCatch, setErrorCatch] = useState(false)
 const [spiner, setSpiner] = useState(false)


  const handlerInput =  ({ target }) => {
  setSpiner(true)
  setInputValue(target.value)
   axios.get(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${target.value}&limit=10&exchange=NASDAQ`)
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
      setInputValue={setInputValue}
      inputValue={inputValue}
      handlerInput={handlerInput}
      errorCatch={errorCatch}
      setSpiner={setSpiner}
      spiner={spiner}
      />
    </div>
  )
}


export default StockExchange