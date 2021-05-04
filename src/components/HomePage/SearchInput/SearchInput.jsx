import React, { useState } from 'react'
import classes from './SearchInput.module.scss'

const SearchInput = props => {




  return (
    <div className={classes.SearchInput}>
      <div className='input-group'>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.handlerInput}
          className="form-control"
          placeholder="Price is what you pay. Value is what you get."
        />
        <button
          type="button"
          className="btn btn-primary"
          // onClick={handlerClick}
          >Button
          </button>
      </div>
    </div>
  )
}

export default SearchInput