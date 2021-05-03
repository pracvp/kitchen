import React, {useState, useEffect, Component} from 'react';
import $ from 'jquery';
import Axios from 'axios';

/*
function MyComponent(props) {
const [comments,setComments]=useState([])
useEffect(() => {
fetchComments();
}, [])
useEffect(() => {
console.log(comments)
}, [comments])
const fetchComments=async()=>{
const response=await Axios();
setComments(response.data.results);
console.log(ont);
// console.log(response.data.results);
}
return(
<div className="MyComponent">
        {
        comments && comments.map(comment=>{
        return(<div>
            <p>gu</p>
            <h4>{comment.title}</h4>
            </div>
        )

        })
    }
</div>
);
}

export default MyComponent;
*/


const MyComponent = (props) => {
const [recipes, setRecipes] = useState([]);






console.log("my component transfered "+ props.ingredients)

useEffect(() => {
    let ont=props.ingredients;
   // console.log(ont+" usee "+props.ingredients)
    console.log(props.containss+"hey ")
    let cnt=props.containss;
    
    (async () => {
    const response = await Axios({
        "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/" + "http://www.recipepuppy.com/api/",
    params: { i: ont,q:cnt},

    "method": "GET",
    "headers": {
        "x-rapidapi-key": "dadf192566msh75f471517bff13bp1ec328jsnbefea920a77f",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"}})

const data = await response.data.results;

    console.log(data)
    console.log(cnt)
    setRecipes(data)
    ont="";
    })()
}, [props.ingredients,props.containss])




return (
    <div>
    {recipes.map(recipe => {
        
        return (
        <div >

        <div class='dish-image-div'> <a href={recipe.href}> <img class='dish' width='80' src={recipe.thumbnail}   alt='recipe , link to recipe page' ></img></a></div>
    <div class='dish-title-div'><a href={recipe.href}> {recipe.title}</a></div>
    <div class='dish-ingredients-div'>Main ingredients: {recipe.ingredients}  </div>

        </div>
        )
    })}
    </div>
)
}

export default MyComponent;
