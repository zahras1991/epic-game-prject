
function toggle(){

let btntogle=document.querySelector(".navbar-toggler");
let store=document.querySelector(".store");
let btnMain=document.querySelector(".btn-main")
btntogle.addEventListener("click",()=>{
    store.classList.toggle("store-active")
    btnMain.classList.toggle("btn-main-active")

})

}
export default toggle;



