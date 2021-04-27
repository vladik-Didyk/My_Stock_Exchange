import React from 'react'
import classes from './SearchInput.module.scss'


const SearchInput = props => {


  const handlerClick = ({target}) =>{
    props.setSpiner(true)
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
          placeholder="Get value today"
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