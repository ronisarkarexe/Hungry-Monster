// after click even handler
document.getElementById("Search").addEventListener("click",function(){
    //declare variable for search Button
    const foodSearch = document.getElementById("Search-food").value;
    //clear input after search
    document.getElementById("foodDetailsMore").innerHTML = "";
    //verify input for alart
    if(foodSearch != ""){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`)
        .then(response => response.json())
        .then(data => hungryMonsterFoodItems(data));

    }

const hungryMonsterFoodItems = food => {
    let foodItems = food.meals;
    // food alart for no items
    if(foodItems === null){
        document.getElementById("foodNotify").style.display = "block";
    }
    else{
        // display previous massage not for found
        document.getElementById("foodNotify").style.display = "none";
    }
    let foodItemsHungry = document.getElementById('foodItemsHungryMonster');
    foodItemsHungry.innerHTML = "";
   

    foodItems.forEach(food => {
        // 
        const div = document.createElement('div');
        div.className = 'food-item'; //className for div
        // img title to div sent id for function
        const foodInfo = `
        <a href="#" onclick="foodIdDetails('${food.idMeal}')"><img id="image-size" src="${food.strMealThumb}"></a>
        <h5 onclick="foodIdDetails('${food.idMeal}')"><a href="#" id="food-list">${food.strMeal}</a></h5>
        `;
        div.innerHTML = foodInfo;
        foodItemsHungry.appendChild(div);
    })
}
})

const foodIdDetails = foodId => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        // fetch item using id
        fetch(url)
        .then(response => response.json())
        .then(data => hungryMonsterFoodDetails(data.meals[0]))
    }

    const hungryMonsterFoodDetails = food => {
        // img tittles and Ingredients data catch
        const foodDetailsMore = document.getElementById("foodDetailsMore")
        // food details
        foodDetailsMore.innerHTML =`
            <img src="${food.strMealThumb}">
            <h4>${food.strMeal}</h4>
            <h5>Ingredients:</h5>

            <ul>
                <li>
                    ${food.strIngredient1}
                </li>
                <li>
                    ${food.strIngredient2}
                </li>
                <li>
                    ${food.strIngredient3}
                </li>
                <li>
                    ${food.strIngredient4}
                </li>
                <li>
                    ${food.strIngredient5}
                </li>
                <li>
                    ${food.strIngredient6}
                </li>
                <li>
                    ${food.strIngredient7}
                </li>
                <li>
                    ${food.strIngredient8}
                </li>
            </ul>
        `
    }