import React from 'react'
import SearchInput from '../HomePage/SearchInput/SearchInput'
import ResultsList from '../HomePage/Results/ResultsList/ResultsList'
// import classes from './HomePage.module.scss'
import Loader from '../Loader/Loader'


const HomePage = props => {


  return (

    <div className='container'>
        <SearchInput
          setStocksFromServer={props.setStocksFromServer}
          setInputValue={props.setInputValue}
          inputValue={props.inputValue}
          handlerInput={props.handlerInput}
          spiner={props.spiner}
          setSpiner={props.setSpiner}
        />

        {props.spiner
        ? <Loader/> 
         : (<ResultsList 
          stocksFromServer={props.stocksFromServer} 
          inputValue={props.inputValue}
          spiner={props.spiner}
        />)
        }
      </div>
  )

}


export default HomePage