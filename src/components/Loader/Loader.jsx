import {GridLoader} from "react-spinners";
import css from "./Loader.module.css";

export default function Loader({isAbsolute = false}) {
  return (
    <div className={isAbsolute ? css.container_absolute : css.container_block}>
      <GridLoader color="#e44848" />
    </div>
  );
}