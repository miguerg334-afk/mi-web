const menuBtn = document.getElementById("menu")
const navLinks = document.getElementById("navli")
const links = navLinks.querySelectorAll("a")

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "x";
        menuBtn.setAttribute("aria-expanded", "true")
    }else {
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false")
    }
});

links.forEach(link => {
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded","false");
    })
})