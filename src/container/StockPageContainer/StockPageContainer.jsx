import React, {useEffect, useState} from 'react'
// import StockPage from '../../components/StockPage/StockPage'
import StockSymbolShower from '../../components/StockPage/StockSymbolShower/StockSymbolShower'
import StockPriceShower from '../../components/StockPage/StockPriceShower/StockPriceShower'
import StockChart from '../../components/StockPage/StockChart/StockChart'
import axios from 'axios'
import classes from './StockPageContainer.module.scss'


const StockPageContainer = props =>{

  const [responseFromAxios, setResponseFromAxios] = useState('')

  useEffect(()=>{
    axios.get( `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${props.match.params.id}`)
    .then(response=> response)
    .then(data=>{setResponseFromAxios(data.data.profile)})
    .catch(error=>console.log(error))
    .finally(()=>{

    })
  }, [])

  
  
  return(
    
      <div className={classes.StockPageContainer}>
      <StockSymbolShower 
      stockName={props.match.params.stockName}
      image={responseFromAxios.image}
      sector={responseFromAxios.sector}
      />
      <StockPriceShower 
      price={responseFromAxios.price}
      changes={responseFromAxios.changes}
      description={responseFromAxios.description}
      />
      <StockChart
      symbol={props.match.params.id}
      />
      </div>
    
  )
}


export default StockPageContainer