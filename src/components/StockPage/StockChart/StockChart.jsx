import React, { useEffect, useState } from 'react'
import { Bar, Line, } from 'react-chartjs-2';
import classes from './StockChart.module.scss'
import axios from 'axios'




const data_arr = (fromDate, untilDate) => {

  const fullYear = fromDate.split("-")
  const year = +fullYear[0];
  const month = +fullYear[1];
  const day = +fullYear[2];


}

data_arr('2005-11-18', '2005-11-18')

const inputDate = {
  fromDate: '',
  untilDate: ''
}

//!
const Component = [Line, Bar]

const StockChart = props => {

  const [dataFromAxios, setDataFromAxios] = useState([])
  const [hideChart, setHideChart] = useState(true)
  const [chartType, setChartType] = useState(0)
  const [dateChosed, setDateChosed] = useState(inputDate)
  

  const chartData = () => ({
    labels: dataFromAxios.map(element => element.date),
    datasets: [{
      labels: 'Stock Price History',
      data: dataFromAxios.map(element => element.close),
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
      borderWidth: 2
    }]
  })


  useEffect(() => {
    axios.get(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${props.symbol}?serietype=line`)
      .then(response => response)
      .then(data => data.data.historical.reverse())
      .then(data => {
        setDataFromAxios(data)
        //* setDateChosed({ ...dateChosed, [target.name]: target.value})

      })
      .catch(error => console.log(error))
      .finally(() => {
        console.log('useEffect')
      })

  }, [])



  const handlerDateChose = ({ target }) => {

    setDateChosed({ ...dateChosed, [target.name]: target.value })

  }
  
  //!
  const obj = {
    data: chartData,
    options: {
      title: {
        display: true,
        text: "Date",
        fontSizq: 25
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontColor: '#000',
        }

      }
    },
    options: {}
  }


  //! 
  const Com = Component[chartType]

  return (<div className={classes.StockChart}>
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => setHideChart(!hideChart)}
    >Toggel Chart
        </button>



    <select onChange={event => setChartType(+event.target.value)}
      className="form-select"
      aria-label="Default select example">
      <option value="0">Line</option>
      <option value="1">Bar</option>
      <option value="2">Mixed data</option>
      <option value="3">Horizontal Bar</option>
      <option value="4">Radar</option>
      <option value="5">Polar</option>
      <option value="6">Horizontal Bar</option>
      <option value="7">Bubble</option>
    </select>


    <input type="date"
      name={'fromDate'}
      value={dateChosed.fromDate}
      onChange={handlerDateChose} />
    <input type="date"
      name='untilDate'
      value={dateChosed.untilDate}
      onChange={handlerDateChose} />

    {hideChart &&
      //<Line
      <Com
        {...obj}
      />
    }

  </div>)

}

export default StockChart