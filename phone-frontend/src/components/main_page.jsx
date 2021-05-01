import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Segment, Form } from 'semantic-ui-react'

export const Main_page = () => {
return (
    <div>
   
<div classname="centerbuttons"> 
<h1>Kitchen Leftover</h1>
<Link to='/'>
        <Button basic color='teal'>
        Login
        </Button>
        </Link>
        <Link to="/search">
        <Button basic color='blue'>
            Search Recipes
        </Button>
        </Link>
        <Link to="/add-number">
        <Button basic color='red'>
            Add Leftover
        </Button>
        </Link>
        <Link to="/List">
        <Button basic color='yellow'>
            View Leftovers
        </Button>
        </Link>
        <Button basic color='pink'>
            Sign Out
        </Button>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

        <img class="hero" src="images/banner.jpg" alt="banner"></img>

</div>

    </div>
)
}
