const searchFood = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    // console.log(searchText);

    if (searchText == '') {
        alert('Please enter a name')

    } else {

        searchField.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            // console.log(url)
    }



}

const displaySearchResult = meals => {
    // console.log(meals);
    const searchReasult = document.getElementById('search-result');
    searchReasult.textContent = '';
    if (meals.length == 0) {
        alert("No result found"); //Home work
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="MealDetailes(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
    </div>
        `
        searchReasult.appendChild(div);

    });

}

const MealDetailes = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDeatails(data.meals[0]))
}

const displayMealDeatails = meal => {
    console.log(meal)
    const detailsField = document.getElementById('details');
    detailsField.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
      <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailsField.appendChild(div);
}