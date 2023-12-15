import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon style={{position: 'absolute',right: '2px', }} icon={faMagnifyingGlass} /> */}

const searchInputStyle= {
  display: 'flex',
  flexDirection: 'column' as 'column',
  margin: 'auto'
}

function Search({searchInput, searchChangeHandler,sendRequestToBackend} : {searchInput:string, searchChangeHandler: Function,sendRequestToBackend:Function}) {

function handleKeyDown(event:any){
  if(event.keyCode === 13)
  sendRequestToBackend()

}

  return (
    <div style={searchInputStyle}>
    <label htmlFor="search">Search Location: </label>
    {/* @ts-ignore */}
    <input onChange={searchChangeHandler} type="text" id='search' value={searchInput} onKeyDown={handleKeyDown}/>
    </div>
    )
}

export default Search