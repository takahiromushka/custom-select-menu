const menu = document.querySelector(".menu"),
selectBtn = menu.querySelector(".select-btn"),
searchInp = menu.querySelector("input"),
options = menu.querySelector(".options");

let countries = ["Saudi Arabia","Qatar", "Yemen","Kuwait", "Emarat","Oman", "Bahrain","Afghanistan", 
                    "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                    "Maldives", "Mexico", "Morocco", "Netherlands", "Nigeria", "Norway", "Pakistan",
                    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    menu.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});
selectBtn.addEventListener("click", () => menu.classList.toggle("active"));