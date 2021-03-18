var form = document.querySelector("form")
var inp = document.querySelector("input")
var btn = document.querySelector(".sub")
var show = document.querySelector(".show")
var show1 = document.querySelector(".show1")


btn.addEventListener("click", (e) => {
    e.preventDefault()

    var value = inp.value

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
        .then(res => res.json())
        .then((data) => search(data.meals))
})

function search(data) {
    console.log(data);
    var list = ""
    data.forEach((ele) => {
        console.log(ele);

        list +=
            `<div class="main">
        <img src="${ele.strMealThumb}" class="img1">
        <div class="datadiv">
        <h3 class="title">${ele.strMeal}<h3>
        <h3>Meal Id = <span>${ele.idMeal}</span></h3>
        <a href="${ele.strYoutube}"target="_blank" class="link">Check Link</a>
        <Button class="more">More</Button>
        </div>
        </div>
        `
    })
    show1.innerHTML = list
    var btns = document.querySelectorAll(".more")
    console.log(btns);


    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            var p = e.target.parentElement
            console.log(p);
            var keyword = p.querySelector(".title").innerText
            console.log(data,'ddddddddddd');
            let dd = data.filter((e)=>{
                return e.strMeal == keyword
            })

            var page=""
           dd.forEach((e)=>{
            page=`
            <div class="main main1">
            <div class="ingri">
        <h1 class="ing"><u>Ingredients</u></h1>
        <p  class="a">${e.strIngredient1}</p>
        <p  class="a">${e.strIngredient2}</p>
        <p  class="a">${e.strIngredient3}</p>
        <p  class="a">${e.strIngredient4}</p>
        <p  class="a">${e.strIngredient5}</p>
        <p  class="a">${e.strIngredient6}</p>
        <p  class="a">${e.strIngredient7}</p>
        <p  class="a">${e.strIngredient8}</p>
        <p  class="a">${e.strIngredient9}</p>
        <p  class="a">${e.strIngredient10}</p>
        <p  class="a">${e.strIngredient11}</p>
        <p  class="a">${e.strIngredient12}</p>
        <p  class="a">${e.strIngredient13}</p>
        <p  class="a">${e.strIngredient14}</p>
        <p  class="a">${e.strIngredient15}</p>
        <p  class="a">${e.strIngredient16}</p>
        <p  class="a">${e.strIngredient17}</p>
        <p  class="a">${e.strIngredient18}</p>
        <p  class="a">${e.strIngredient19}</p>
        <p  class="a">${e.strIngredient20}</p>

            
           </div> 
            <div  class="total">
        <img src="${e.strMealThumb}" class="img1">
        <div class="try">
        <h1><u>METHED</u></h1>
        <p class="para">${e.strInstructions}</p>
        </div>
        </div>
        <Button class="icon" onclick="del()"><i class="fas fa-times"></i></Button>

        `
            show.innerHTML=page
           })

        })
    })

    inp.value = ""

}
function del(){
//    var mai= show.querySelector(".main1")
    show.remove()
}
