import React from 'react'
import classes from './SearchInput.module.scss'


const SearchInput = props => {



  const handlerClick = ({target}) =>{
    // props.setSpiner(true)
    
    // props.setStocksFromServer(props.inputValue)

  }

  return (
    <div className={classes.SearchInput}>
      <div className='input-group'>
        <input
          type="text"
          name={''}
          value={props.inputValue}
          onChange={props.handlerInput}
          className="form-control"
          placeholder="Price is what you pay. Value is what you get."
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlerClick}
          >Button
          </button>
      </div>
    </div>
  )
}

export default SearchInput