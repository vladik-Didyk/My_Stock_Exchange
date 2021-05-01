import React, {useEffect, useState} from 'react'
import { Bar } from 'react-chartjs-2';
import classes from './StockChart.module.scss'
import axios from 'axios'




const StockChart = props => {
  
  const [priceDataFromAxios, setPriceDataFromAxios] = useState([])
  // const [chart, setChart] = useState(chartData)

  console.log(priceDataFromAxios)
  console.log(priceDataFromAxios[1])
  console.log(  )

  useEffect(()=>{
    axios.get( `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${props.symbol}?serietype=line`)
    .then(response=>response)
    .then(data=>setPriceDataFromAxios(data.data.historical))
    // .catch(error=>console.log(error))
    .finally(()=>{
     
    })
  },[])

  console.log(priceDataFromAxios)

  const chartData ={
    
    labels: priceDataFromAxios.slice(0).reverse().map(date=>date.date),
    datasets: [{
        labels: priceDataFromAxios.map(date=>date.date),
        data: priceDataFromAxios.map(price=>price.close),
        backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]  

      
    }
    console.log((chartData.labels))
    console.log((chartData.labels.sort((a,b)=> a-b)))

  return(<div className={classes.StockChart}>
            <Bar
              data={chartData}
              options={{
                title:{
                      display:true,
                      text:"Date",
                      fontSizq: 25
                }, 
                legend:{
                  display:true,
                  position:'right',
                  labels:{
                    fontColor: '#000',
                    legendPosition='bottom'
                  }
                }
              }}
              options={{}}
            />
  </div>)

}

export default StockChart