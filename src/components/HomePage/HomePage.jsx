import React from 'react'
import SearchInput from '../HomePage/SearchInput/SearchInput'
import ResultsList from '../HomePage/Results/ResultsList/ResultsList'
import classes from './HomePage.module.scss'
import Loader from '../Loader/Loader'


const HomePage = props => {


  return (

    <div className='container'>
      <div className='wraperContainer'>
        <h5 className={classes.warrenBuffettSection}>
          Price is what you pay. Value is what you get.</h5>

        <SearchInput
          setStocksFromServer={props.setStocksFromServer}
          setInputValue={props.setInputValue}
          inputValue={props.inputValue}
          handlerInput={props.handlerInput}
          spiner={props.spiner}
          setSpiner={props.setSpiner}
        />

        {props.errorCatch && <div className={classes.error}><p>Error...</p></div>}

        {props.spiner
          ? <ResultsList 
              stocksFromServer={props.stocksFromServer} 
              inputValue={props.inputValue}
              spiner={props.spiner}
            />
          : <Loader />}
      </div>
    </div>

  )

}


export default HomePage