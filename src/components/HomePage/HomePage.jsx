import React from 'react'
import SearchInput from '../HomePage/SearchInput/SearchInput'
import ResultsList from '../HomePage/Results/ResultsList/ResultsList'
import classes from './HomePage.module.scss'


const HomePage = props => {
  

  return (
  
    <div className='container'>  
        <h5 className={classes.warrenBuffettSection}>
          Price is what you pay. Value is what you get. &nbsp;
        <em>Warren Buffett</em>
        </h5>
     
      <SearchInput 
          setInputValue={props.setInputValue}
          inputValue={props.inputValue}
          handlerInput={props.handlerInput}
          spiner={props.spiner}
          setSpiner={props.setSpiner}
      
      />
         
        {props.errorCatch && <div className={classes.error}><p>Error...</p></div>}
         
      
         {props.spiner
         ?<ResultsList stocksFromServer={props.stocksFromServer}/>
         : <div className="spinner-grow text-primary" role="status"> <span className="visually-hidden"></span> </div>}
      
       
    

    </div>

  )

}


export default HomePage