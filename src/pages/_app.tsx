import "./style.css";
import type { AppProps } from "next/app";
import { Rubik as nextFont } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = nextFont({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div className={font.className}>
        <Component {...pageProps}/>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default MyApp;
