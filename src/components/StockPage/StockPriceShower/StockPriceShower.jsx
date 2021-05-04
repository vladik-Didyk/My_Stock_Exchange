import React from 'react'
import classes from './StockPriceShower.module.scss'

const StockPriceShower = props => {


  let isStockPriceIncrease = props.changes >= 0 
  ? <span style={{color: 'limegreen'}}> ({props.changes}%) </span>
  : <span style={{color: 'red'}}> ({props.changes}%) </span>
  
  return(<div className={classes.StockPriceShower}>
  
  
      <p className={classes.StockPrice}> Stock price: ${props.price} {isStockPriceIncrease}</p>
      <p>{props.description}</p>
  
  
  </div>)



}

export default StockPriceShower