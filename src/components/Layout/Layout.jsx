import css from "./Layout.module.css";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<Loader isAbsolute={true} />}>{children}</Suspense>
      <Toaster toastOptions={{
        style: {
          fontFamily: 'var(--font-family)'
        }
      }} position="top-right" />
    </div>
  );
}