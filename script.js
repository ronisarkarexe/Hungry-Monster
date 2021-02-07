document.getElementById("Search").addEventListener("click",function(){
    const foodSearch = document.getElementById("Search-food").value;
    document.getElementById("foodDetailsMore").innerHTML = "";
    if(foodSearch != ""){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`)
        .then(response => response.json())
        .then(data => hungryMonsterFood(data));

    }

const hungryMonsterFood = food => {
    let foodItems = food.meals;
    if(foodItems === null){
        document.getElementById("foodNotify").style.display = "block";
    }
    else{
        document.getElementById("foodNotify").style.display = "none";
    }
    let foodMonster = document.getElementById('foodItemsHungryMonster');
    foodMonster.innerHTML = "";
   
    foodItems.forEach(food => {
        const div = document.createElement('div');
        div.className = 'food-item';
            const foodInfo = `
                <img id="image-size" src="${food.strMealThumb}">
                <h5 id="food-list">${food.strMeal}</h5>
                <button onclick="countryDetails('${food.idMeal}')">Details</button>
            `;
        div.innerHTML = foodInfo;
        foodMonster.appendChild(div);
    })
}
})

const countryDetails = foodId => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        fetch(url)
        .then(response => response.json())
        .then(data => hungryMonsterFoodDetails(data.meals[0]))
    }

    const hungryMonsterFoodDetails = food => {

        const foodDetailsMore = document.getElementById("foodDetailsMore")
        
        foodDetailsMore.innerHTML =`
            <img src="${food.strMealThumb}">
            <h5>${food.strMeal}</h5>
            <ul>
                <li>
                    <i class="bi bi-check"></i>
                    ${food.strIngredient1}
                </li>
                <li>
                    <i class="bi bi-check"></i>
                    ${food.strIngredient2}
                </li>
                <li>
                    <i class="fas fa-check-square"></i>
                    ${food.strIngredient3}
                </li>
                <li>
                    <i class="fas fa-check-square"></i>
                    ${food.strIngredient4}
                </li>
                <li>
                    <i class="fas fa-check-square"></i>
                    ${food.strIngredient5}
                </li>
                <li>
                    <i class="fas fa-check-square"></i>
                    ${food.strIngredient6}
                </li>
                <li>
                    <i class="fas fa-check-square"></i>
                    ${food.strIngredient7}
                </li>
                <li>
                    <i class="fas fa-check-square"></i>
                    ${food.strIngredient8}
                </li>
            </ul>
        `
    }