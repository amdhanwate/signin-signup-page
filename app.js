const signInBtn  = document.querySelector("#signin-mode-btn")
const signUpBtn  = document.querySelector("#signup-mode-btn")
const container = document.querySelector(".container")

console.log(signInBtn)
console.log(signUpBtn)
console.log(container)

signInBtn.addEventListener("click", ()=> {
    container.classList.remove("signup-mode")
})

signUpBtn.addEventListener("click", ()=> {
    container.classList.add("signup-mode")
})