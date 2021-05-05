import ResultsItem from '../ResultsItem/ResultsItem'
import classes from './ResultsList.module.scss'
import shortid from 'shortid'


const ResultsList = props => {
  
  // console.log(props.stocksFromServer);
  return(
  props.inputValue&&(
    props.stocksFromServer.length

  ?(<ul className={classes.ResultsList}>
    {props.stocksFromServer.map(stock => {
      return (
        <ResultsItem
          key={stock.symbol}
          stockSymbol={stock.symbol}
          stockName={stock.name}
          inputValue={props.inputValue}
        />
      )
    })}
  </ul>)
  :<div className={classes.noCompanyMessage}><h5>I am sorry but there is no such company...</h5></div>
  )

)}

export default ResultsList