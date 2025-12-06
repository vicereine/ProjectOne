
const apiKey = "5a94e532";

const movieInput = document.getElementById("movie-input");
const searchBtn = document.getElementById("search-btn");
const movieOutput = document.getElementById("movie-output");
const recipeOutput = document.getElementById("recipe-output");
//const container = document.getElementById("arrayContainer");



function getCurrentMovie(movieName) {
    let url=`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("API Response:", data);

              // Extract data
      const name = data.Title;
      const year = data.Year;
      const plot = data.Plot;
      const rating = data.Rated;
      const actors = data.Actors;
      const genre = data.Genre;
      const poster = data.Poster;
      const tomato = data.Ratings[1].Source;
      const tomato2 = data.Ratings[1].Value;

     // let output = "";
//tomato.forEach(item => {
 // output += `${item.Source}: ${item.Value} <br> `;
//});

    // let output1 = "";
  //   for (let i = 0, i < tomato.length; i++) {
   //   console.log(tomato[1]);
   //   break;
  //   }


//tomato.forEach(item => {
 // output += `${item.Source}: ${item.Value} <br> `;
//});
movieOutput.classList.add("bg-light");

      // Display results
      movieOutput.innerHTML =
    //  "<i class='bi bi-film'></i><br> <br>" +
   
        "<h3>" + name + "</h3>" +
        "<p>Year: " + year + "</p>" +
        "<p>Plot: " + plot + "</p>" +
        "<p>Starring: " + actors + "</p>" +
        "<p>Genre: " + genre + "</p>" +
        "<p>Rated: " + rating + "</p>"+
       // "<p>Ratings: " + output1 + "</p>"+
       // "<p>" +tomato + "</p>"+
       "<p><img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg' style='width:25px;'>"  +  tomato2 + "</p>"+
        "<img src=" + poster + ">";
   });

}

function getRandomRecipe(recipeName) {
  let url=`https://api.spoonacular.com/recipes/random?number1&exclude-tags=drinks,marinade,beverage,breakfast&apiKey=8d0bb48d9f3242eea7a1c13b6404dc7a`

  fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("API Response:", data);

              // Extract data
      const name = data.recipes[0].title;
      const summary = data.recipes[0].instructions;
      const image = data.recipes[0].image;
      const ingredients = data.recipes[0].extendedIngredients;
      const url = data.recipes[0].sourceUrl;
      

//console.log(JSON.stringify(ingredients));

let output = "";
ingredients.forEach(item => {
  output += `${item.originalName} <br> `;
});


//let htmlContent = "";
//for (let i=0; i < ingredients.length; i++) {
   //htmlContent += `<p>${ingredients[i]}</p>`;
 //console.log(ingredients[i].name);
//}
//container.innerHTML = output;
recipeOutput.classList.add("bg-light");

      // Display results
     recipeOutput.innerHTML =
//"<i class='bi bi-fork-knife'></i><br> <br>" + 
      "<h4>" + name + "</h4>" +
      "<p>Ingredients: <br><br> " + output + "</p>" +
        "<p>Instructions: <br><br> " + summary + "</p>" +
       
      //  "<p>Starring: " + actors + "</p>" +
      //  "<p>Genre: " + genre + "</p>" +
      //  "<p>Rated: " + rating + "</p>"+

      "<img src='" + image + "' style='width:350px; height: auto;'>" +
      "<a href='" + url + " 'target='_blank'>Click here for Original Recipe</a>";

   });

}


  
searchBtn.addEventListener("click", function () {
  const movieName = movieInput.value.trim();
  
searchBtn.addEventListener("click", getRandomRecipe); 



//console.log(movieName);
//console.log(getRandomRecipe);

  if (movieName === "") {
    movieOutput.innerHTML =
      "<p class='text-danger'>Please enter a movie name.</p>";
    return;
  }



getCurrentMovie(movieName);
getRandomRecipe();
});

