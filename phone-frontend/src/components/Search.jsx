import React, { useState } from "react";
import {Header} from './Header'
import MyComponent from './MyComponent'
import {Button} from 'semantic-ui-react'
const initialValues = {
ingredients: "",
containss: "",
santized_ingredients:"",
santized_contain:""
};


export default function Search() {
const [values, setValues] = useState(initialValues);

const handleInputChange = (e) => {
let { name, value } = e.target;
console.log(name+" cheeck  "+value)
if(name==='ingredients')
{let str = value.toLowerCase();
str = str.replace(/[0-9,]/gim, "");
str = str.trim();

value=str

}

if(name==='containss')
{let st = value.toLowerCase();
st = st.replace(/[0-9,]/gim, "");
st = st.trim();

value=st

}

setValues({
...values,
[name]: value,
});
console.log(name+" POST "+value);

};


function resetResults() {

    setValues({
        ingredients: "",
        containss: "",
        santized_ingredients:"",
        santized_contain:""
    })
}

return (
    <div>
<Header/>
<p class="section-subheading">
<form id="query-form">
    <div>
    <label for="ingredients">Ingredients (commas separated):</label> <input  id="ingredients" type="text" name="ingredients" value={values.ingredients} placeholder="e.g. honey, potato (optional)" onChange={handleInputChange} />
    </div>
    <div>
    <label for="containss">Dish Name Contains (no commas):</label> <input  id="contains" type="text" name="containss" value={values.containss} placeholder="e.g. noodles (optional)"  onChange={handleInputChange} /></div>
    <div class="button">
    <br />
    <Button basic color='red' type="button" value="Reset" id="resetButton" onClick={resetResults}>
            Reset
        </Button>
        <hr></hr>
        <Button basic color='red' type="submit" value="Search ..." id="searchButton" onClick={handleInputChange}>
            Search
        </Button>
        <br>
        </br>
        <br>
        </br>
        
    <MyComponent ingredients={values.ingredients} containss={values.containss}/>
    </div>
</form>

</p>

</div>

);
}
