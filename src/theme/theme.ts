import { createContext } from "react";

export const theme = {
    light: { background: "#e7eadc", color: "#0a0607" },
    dark: {
        background: "#0a0607",
        color: "#e7eadc",
    },
};

export const SiteTheme = createContext(theme.light);
