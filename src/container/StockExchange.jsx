import React, {useEffect, useState} from 'react'
import HomePage from '../components/HomePage/HomePage'
import Marquee from '../components/HomePage/Marquee/Marquee'
import classes from './StockExchange.module.scss'
import axios from 'axios'




const StockExchange = props => {
  
  

 const [stocksFromServer, setStocksFromServer] = useState([])
 const [inputValue, setInputValue] = useState('')
 const [errorCatch, setErrorCatch] = useState(false)
 const [spiner, setSpiner] = useState(false)


 useEffect(()=>{
  const symbolFromUrl = props.match.params.symbol
  if(!symbolFromUrl) return 
  
  handlerInput({target:{value: symbolFromUrl  } })
 
 }, [])

  async function  handlerInput  ({ target })  {
  setSpiner(true)
  setInputValue(target.value)
  
  await axios.get(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${target.value}&limit=10&exchange=NASDAQ`)
  .then(response=> response.data)
    .then(data=>{
    props.history.push('/' + target.value)
    setStocksFromServer(data)
  })

  .catch(err=> {if (err.response) {
    // setErrorCatch(true)
    console.log('ResultsItem: err.response');
    // console.log( 'StockExchange: err.response',err.response)
    // client received an error response (5xx, 4xx)
  } else if (err.request) {
    // client never received a response, or request never left
    console.log('ResultsItem: err.request');
    // console.log('StockExchange: err.request',err.request)
  } else {
    // anything else
    console.log('StockExchange: else')
  }})
  .finally(()=>{
    setSpiner(false)
  })
}



  return (
    <div className={classes.StockExchange}>
      <Marquee stocksFromServer={stocksFromServer}/>

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
    </div>
  )
}


export default StockExchange