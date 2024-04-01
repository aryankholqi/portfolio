const switchThemeHandler = (
  theme: string | undefined,
  setTheme: (theme: string) => void
) => {
  switch (theme) {
    case "light": {
      setTheme("dark");
      break;
    }
    case "dark": {
      setTheme("light");
      break;
    }
    default: {
      return false;
    }
  }
};

export default switchThemeHandler;
