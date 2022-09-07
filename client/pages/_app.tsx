import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContext } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext.Provider
      value={{
        dark: { background: "black" },
        light: { background: "white" },
      }}
    >
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
