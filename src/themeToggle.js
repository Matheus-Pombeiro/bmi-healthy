// Dark and Light Theme Toggle
const themeToggle = (theme) => {

    theme.addEventListener("click", (e) => {

        e.preventDefault();

        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.contains('dark') ? theme.src = "./assets/dark.png" : theme.src = "./assets/light.png";

        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem("darkTheme", true);
        } else {
            localStorage.setItem("darkTheme", false);
        }

    });

    window.addEventListener("load", (e) => {

        e.preventDefault();

        const dark = localStorage.getItem("darkTheme");

        if (dark == "true") {
            document.documentElement.classList.add('dark');
            theme.src = "./assets/dark.png";
        }

    });

};

export default themeToggle;