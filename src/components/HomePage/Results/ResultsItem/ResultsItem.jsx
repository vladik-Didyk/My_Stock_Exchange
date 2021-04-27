import classes from './ResultsItem.module.scss'



const ResultsItem = props => {

  
  return (
    
      <li className={classes.ResultsItem}
          onClick={()=>props.stockOnClick(props.key)}
          >
        <h4> Symbol: &nbsp;({props.stockSymbol}) &nbsp; Company name: &nbsp;{props.stockName}</h4>
      </li>
   
  )
}


export default ResultsItem