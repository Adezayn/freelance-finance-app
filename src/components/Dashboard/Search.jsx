import React from 'react'
import '../../compiled/dashboard_navbar.css'
import { CiSearch } from "react-icons/ci";


const Search = () => {
  return (
   <div className='search_container'>
       <input type='type' placeholder='Search'/>
       <CiSearch />
   </div>
  )
}

export default Search;