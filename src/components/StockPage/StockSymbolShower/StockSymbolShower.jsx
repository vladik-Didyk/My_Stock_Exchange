import React from 'react'
import classes from './StockSymbolShower.module.scss'

const StockSymbolShower = props => {


  return(<div className={classes.stockSymbolShower}>
      <img   
            src={props.image} alt="Logo"
      />
      <p>{props.stockName}</p>
      <p>({props.sector})</p>
  
  </div>)

}

export default StockSymbolShower