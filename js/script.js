{
    const welcome = () => {
        console.log("Hello world!");
    };
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js-nextColorName");
        body.classList.toggle("body--darkGreen");
        nextColorName.innerText = body.classList.contains("body--darkGreen") ? "jasny" : "ciemny";
    }
    
    const init = () => {
        const button = document.querySelector(".js-changeBackgroundButton");
        button.addEventListener("click", toggleBackground);
        welcome();
    };

    init();
}