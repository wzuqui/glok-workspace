import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  themes: {
    default: "safe-claro",
    list: [
      { name: "safe-claro", class: "safe-claro", color: "#f5f5f5" },
      { name: "safe-escuro", class: "safe-escuro", color: "#000" },
    ],
    onChange(tema) {
      console.log(tema);
      localStorage.setItem("data-theme", tema.name);
    },
  }
}