import React from 'react'
import ResultsItem from '../Results/ResultsItem/ResultsItem'
import classes from './Marquee.mdoule.scss'

const Marquee = props => {

  // console.log(props.stocksFromServer);

  // console.log(ResultsItem);

 
  return(
    <div className={classes.Marquee}>
        <ResultsItem/>    
    </div>
  )
}

export default Marquee