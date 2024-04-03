import Cookies from "js-cookie";

const switchThemeHandler = (
  theme: string | undefined,
  setTheme: (theme: string) => void
) => {
  switch (theme) {
    case "light": {
      Cookies.set("theme", "dark");
      setTheme("dark");
      break;
    }
    case "dark": {
      Cookies.set("theme", "light");
      setTheme("light");
      break;
    }
    default: {
      return false;
    }
  }
};

export default switchThemeHandler;
