import React from 'react'
import './styl.css'

export default function Head({CityIN,cityAct}) {
  return (
    <>
     <div className="input-group" >
      <form onSubmit={cityAct} id='srcM'>
          <input
            type="search"
            className="form-control rounded srcc"
            placeholder="Search the city"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={CityIN}
            
          />
          </form>
          {/* <button type="button" className="btn btn-outline-primary" onClick={cityAct}>
            search
          </button> */}
        </div>
    </>
  )
}
