import React, {useEffect} from 'react'
import StockPage from '../../components/StockPage/StockPage'
import axios from 'axios'


const StockPageContainer = props =>{
console.log(props);


useEffect(()=>{
  axios.get( `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${props.stockSymbol}`)
  .then()
 // //  .then(data=>console.log(data))
 //  )
  })

  
  return(
    
    <div>
      
      <StockPage/>
    </div>
  )
}


export default StockPageContainer