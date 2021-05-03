import React, { useState,useEffect} from "react";
import {Header} from './Header'
import MyComponent from './MyComponent'
const initialValues = {
ingredients: "",
containss: "",
santized_ingredients:"",
santized_contain:""
};


const Search = (props) => {
const [values, setValues] = useState(initialValues);
//console.log(props.containss)
console.log(props.containss)

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

useEffect(() => {
    setValues(props);
  }, [props]);


return (
    <div>
<Header/>
<p class="section-subheading">
<form id="query-form">
    <div>
    <label for="ingredients">Ingredients (commas separated):</label> <input  id="ingredients" type="text" name="ingredients" value={values.ingredients} placeholder="e.g. honey, potato (optional)"  onChange={handleInputChange} />
    </div>
    <div>
    <label for="containss">Dish Name Contains (no commas):</label> <input  id="contains" type="text" name="containss" value={values.containss} placeholder="e.g. noodles (optional)"  onChange={handleInputChange} /></div>
    <div class="button">
    <br />
    <input class="button" type="button" value="Reset" id="resetButton" onClick={resetResults}/>
    <input class="button" type="submit" value="Search ..." id="searchButton" onClick={handleInputChange}/>
    <MyComponent ingredients={values.ingredients} containss={values.containss}/>
    </div>
</form>

</p>

</div>

);
}

export default Search;