import "../App.css";
import React from "react";
import useLocalStorage from "use-local-storage";

const Toggle = ({ handleChange, isChecked }) => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        name="toggle"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        {isDark ? (
          <>
            <i
              class="bi bi-brightness-high-fill fs-5 btn text-warning rounded-pill btn-sm"
              title="Light mode"
            ></i>
          </>
        ) : (
          <>
            <i
              class="bi bi-moon-stars-fill fs-5 btn text-dark rounded-pill btn-sm"
              title="Dark mode"
            ></i>
          </>
        )}
      </label>
    </div>
  );
};

export default Toggle;
