const iconHeart = document.querySelector(".heartspan");
const iconHeart2 = document.querySelector(".heart2");

iconHeart.addEventListener('mouseover',()=>{
    iconHeart2.classList.remove("inactive");
    iconHeart.classList.add("inactive");    
})