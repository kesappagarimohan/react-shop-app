import React, { useEffect, useState } from "react";

type Props = {
  themeChange: (theme: "light" | "dark") => void;
};
// pure component by default
const ThemeSwitch: React.FC<Props> = (props) => {
  // state, setState : useState
  // let [state_variable,setState]=useState(initial_value); // single state
  let [theme, setTheme] = useState("light");
  // mounting, updating, unmounting
  // useEffect(effect_function, dependencies that will trigger the effect_function)
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    document.body.className = "bg-" + theme; // side effect
  }, [theme]);

  const updateTheme = () => {
    let thm: "light" | "dark" = theme === "dark" ? "light" : "dark";
    setTheme(thm);
    props.themeChange(thm);
  };

  return (
    <button onClick={updateTheme} className="btn theme-buttons">
      {theme === "dark" ? (
        <i className="text-warning fas fa-sun"></i>
      ) : (
        <i className="text-secondary fas fa-moon"></i>
      )}
    </button>
  );
};
export default ThemeSwitch;
