import { Theme } from "../components/Theme/ChangeTheme";
export function changeCssRootVariable(theme: Theme) {
  const root = document.querySelector(":root") as HTMLElement;

  const components = ["body-background", "components-background", "text-color"];

  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
}
