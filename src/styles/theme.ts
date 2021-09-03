import { createTheme } from "@material-ui/core";

import { ThemeSetup } from "types";

export const themeCreator = (theme: ThemeSetup) => {
  return createTheme({
    palette: {
      primary: {
        main: theme.palete.primary.main,
      },
      secondary: {
        main: theme.palete.secondary.main,
      },
    },
  });
};
