const nav1 = document.querySelector(`nav`);
const nav_b = document.getElementById(`nav-btn`);
nav_b.onclick = () => {
    if (nav1.style.display == "flex"){
        nav1.style.display = "none";
        return;
    }  
    console.log(nav1);
    nav1.style.display = "flex";
}


const na_l = document.getElementById(`nav-list`);
const na_i = document.querySelector(`nav-item`);
console.log(nav1);

