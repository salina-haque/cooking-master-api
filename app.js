//fetching meals
const getMeals = name => {
    if (name == '') {
        document.getElementById('meal-not-given').style.display = 'block';
        return;
    }
    else {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name)
            .then(res => res.json())
            .then(data => {
                //console.log(data.meals);
                if (data.meals == null) {
                    document.getElementById('meal-not-found').style.display = 'block';
                    return;
                }
                else {
                    displayMeals(data.meals);
                }
            })
    }

}

//displaying meals information on the homepage
const displayMeals = meals => {
    document.getElementById('meal-not-given').style.display = 'none';
    meals.forEach(element => {

        const mealId = element.idMeal;
        let mealSection = document.getElementById('meal-section');
        let mealInfoDiv = document.createElement('div');
        mealInfoDiv.id = "meal-info";
        mealInfoDiv.innerHTML = `
           <img src="${element.strMealThumb + '/preview'}" alt="not">    
           <h6>${element.strMeal}</h6>
       `
        mealSection.appendChild(mealInfoDiv);
        clickAnyMeal(mealInfoDiv, mealId);
    })

}
//display ingredients
const displayIngredients = meals =>{
    console.log(meals);
    meals.forEach(element => {

        let mealContent = document.getElementById('meal-content');
        mealContent.style.display = "block";

        mealContent.innerHTML = `
           <img src="${element.strMealThumb + '/preview'}" alt="not">    
           <h4>${element.strMeal}</h4>
           <h5>Ingredients</h5>
           <ul>
           <li>${element.strMeasure1} ${element.strIngredient1}</li>
           <li>${element.strMeasure2} ${element.strIngredient2}</li>
           <li>${element.strMeasure3} ${element.strIngredient3}</li>
           <li>${element.strMeasure4} ${element.strIngredient4}</li>
           <li>${element.strMeasure5} ${element.strIngredient5}</li>
           <li>${element.strMeasure6} ${element.strIngredient6}</li>
           <li>${element.strMeasure7} ${element.strIngredient7}</li>
           <li>${element.strMeasure8} ${element.strIngredient8}</li>
           <li>${element.strMeasure9} ${element.strIngredient9}</li>
           <li>${element.strMeasure10} ${element.strIngredient10}</li>
           <li>${element.strMeasure11} ${element.strIngredient11}</li>
           <li>${element.strMeasure12} ${element.strIngredient12}</li>
           <li>${element.strMeasure13} ${element.strIngredient13}</li>
           <li>${element.strMeasure14} ${element.strIngredient14}</li>
           <li>${element.strMeasure15} ${element.strIngredient15}</li>
           <li>${element.strMeasure16} ${element.strIngredient16}</li>
           <li>${element.strMeasure17} ${element.strIngredient17}</li>
           <li>${element.strMeasure18} ${element.strIngredient18}</li>
           <li>${element.strMeasure19} ${element.strIngredient19}</li>
           <li>${element.strMeasure20} ${element.strIngredient20}</li>
           </ul>
       `
        
    })
}
//click search button
document.getElementById('search-btn').addEventListener('click', function () {
    const inputInfo = document.getElementById('search-input').value;
    getMeals(inputInfo);
    document.getElementById('meal-not-found').style.display = 'none';
})

const clickAnyMeal = (mealInfoDiv,id) => {
    mealInfoDiv.addEventListener('click', function() {
        // console.log(id);
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
            .then(res => res.json())
            .then(data => displayIngredients(data.meals));
    })
}


