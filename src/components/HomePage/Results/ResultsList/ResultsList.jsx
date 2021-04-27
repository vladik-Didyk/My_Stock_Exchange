import ResultsItem from '../ResultsItem/ResultsItem'
import classes from './ResultsList.module.scss'
import shortid from 'shortid'


const ResultsList = props => (


  <ul className={classes.ResultsList}>
    {props.stocksFromServer.map(stock => {
      return (

        <ResultsItem
          key={shortid.generate()}
          stockSymbol={stock.symbol}
          stockName={stock.name}
        />
      )
    })}
  </ul>

)

export default ResultsList