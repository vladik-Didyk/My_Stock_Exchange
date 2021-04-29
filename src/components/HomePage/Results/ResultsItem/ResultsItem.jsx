import React from 'react'
import classes from './ResultsItem.module.scss'
import {NavLink} from 'react-router-dom'



const ResultsItem = props => {





 
  
  return (
    <nav  className={classes.ResultsItem}
          >
      <NavLink to={{
      pathname:`/StockPage/${props.stockSymbol}`,
    

    }}   >
      <li>   
          <h4 >{props.stockName}&nbsp;({props.stockSymbol}) </h4> 
      </li>
      </NavLink>
    </nav>
    
  )
}


export default ResultsItem