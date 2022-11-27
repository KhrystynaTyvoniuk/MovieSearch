import React from 'react';
import './style.css'
const Main=()=>{
    return (
        <>
               <div className='header'> 

          
                <ul>
                    <li>
                        <a href='/' className='logo'>
                            MovieTime
                        </a>
                    </li>
                    <li>
                        <a href='/' className='menu-links'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='/' className='menu-links'>
                            TV show
                        </a>
                    </li>
                    <li>
                        <a href='/' className='menu-links'>
                            Movies
                        </a>
                    </li>
                    <li>
                        <a href='/' className='menu-links'>
                            New
                        </a>
                    </li>
                </ul>
          
               <form >
                    
    <div className='col search-btn'>
    <input type="search"
    placeholder='Enter a movie name...'
    className='searchInput'
    autoFocus="on"
    
    />
    </div>
    <div className='col'>
    <input type="submit"
    value= 'search'
    className='button'
    />
    
                    </div>
                </form>
                <a href='/' className='menu-links'>Sign Up</a>
                </div>
        </>
 
    )
}
export default Main;