import { useEffect, useState } from "react";
import { Moon, Sparkle, Sun } from "@phosphor-icons/react";

export function DisplayControls() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const [motionReduced, setMotionReduced] = useState(
    () => document.documentElement.dataset.motion === "reduced",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const preference = motionReduced ? "reduced" : "full";
    document.documentElement.dataset.motion = preference;
    localStorage.setItem("portfolio-motion", preference);
    window.dispatchEvent(new Event("portfolio-motion-change"));
  }, [motionReduced]);

  const isLight = theme === "light";
  return (
    <div className="display-controls" aria-label="Display preferences">
      <button className="display-control" type="button" onClick={() => setTheme(isLight ? "dark" : "light")} aria-label={`Use ${isLight ? "dark" : "light"} mode`} title={`Use ${isLight ? "dark" : "light"} mode`}>
        {isLight ? <Moon size={15} weight="bold" /> : <Sun size={15} weight="bold" />}
        <span>{isLight ? "Dark" : "Light"}</span>
      </button>
      <button className={`display-control ${motionReduced ? "is-active" : ""}`} type="button" onClick={() => setMotionReduced((value) => !value)} aria-pressed={motionReduced} aria-label={`${motionReduced ? "Enable" : "Reduce"} animation`} title={`${motionReduced ? "Enable" : "Reduce"} animation`}>
        <Sparkle size={15} weight="bold" />
        <span>{motionReduced ? "Motion off" : "Motion"}</span>
      </button>
    </div>
  );
}
