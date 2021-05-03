import React from 'react'
import { Link } from 'react-router-dom';
import {Header} from './Header'
export const main_page = () => {
    return (
        <div>
            <Header/>
         <h2>search recipe</h2>
            <h1>hello</h1>
            <Link to="/search">
              search recipe
            </Link>
        </div>
    )
}
