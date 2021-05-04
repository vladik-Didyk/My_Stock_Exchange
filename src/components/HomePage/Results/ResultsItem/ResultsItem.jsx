import React, { useEffect, useState } from 'react'
import classes from './ResultsItem.module.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios'




const ResultsItem = props => {

  const [dataFromAxios, setDataFromAxios] = useState('')

  // console.log(props);
  console.log(typeof props.inputValue);
  console.log(typeof props.stockName);
  

  useEffect(() => {
    axios.get(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${props.stockSymbol}`)
      .then(response => response)
      .then(data => { setDataFromAxios(data.data.profile) })
      .catch(err => {console.log(err)})
      .finally(() => {
        // props.stockName.includes?(props.inputValue)
      })
  }, [])

  return (
    <nav className={classes.ResultsItem}>
      <NavLink exact to={`/StockPage/${props.stockSymbol}`}>
        <li>
          <img 
          src={dataFromAxios?.image} 
          onError={enent => enent.target.src = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'} alt="Logo"/>
          <h4>{props.stockName}&nbsp;</h4>
          <h4 className={classes.stockSymbol}>({props.stockSymbol})</h4>
          {
            dataFromAxios?.changes >= 0
              ? <h4 style={{ color: 'limegreen' }}> ({dataFromAxios?.changes}%) </h4>
              : <h4 style={{ color: 'red' }}> ({dataFromAxios?.changes}%)</h4>
          }
        </li>
      </NavLink>
    </nav>

  )
}


export default ResultsItem