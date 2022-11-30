import { useEffect, useState } from "react";
import { themeColourMode } from "../utils/themeColourMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const isDark = () => {
    return (
        (localStorage && localStorage.theme === themeColourMode.dark) ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
};

const getTheme = (isDark) => {
    return isDark ? themeColourMode.dark : themeColourMode.light;
};

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(false);

    const themeToggleHandler = () => {
        localStorage.theme = getTheme(!theme);
        if (localStorage.theme === themeColourMode.dark) {
            document.documentElement.classList.add(themeColourMode.dark);
        } else {
            document.documentElement.classList.remove(themeColourMode.dark);
        }
        setTheme(!theme);
    };

    useEffect(() => {
        setTheme(isDark());
    }, []);

    const hasDarkClass =
        typeof window !== "undefined" &&
        document.documentElement.classList.contains(themeColourMode.dark);
    return (
        <>
            <button
                className="border-slate-400 border-solid border-2 rounded"
                onClick={themeToggleHandler}
            >
                {hasDarkClass ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </button>
        </>
    );
};

export default ThemeSwitch;
