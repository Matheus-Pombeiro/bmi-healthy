// Dark and Light Theme Toggle
const themeToggle = (theme) => {

    theme.addEventListener("click", (e) => {

        e.preventDefault();

        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.contains('dark') ? theme.src = "./assets/dark.png" : theme.src = "./assets/light.png";

    });

};

export default themeToggle;