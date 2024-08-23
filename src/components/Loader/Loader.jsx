import ClipLoader from "react-spinners/ClipLoader";
import css from './Loader.module.css';

export const Loader = () => {
  return <div className={css.backdrop}><ClipLoader
        color="blue"
        
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
  />
  </div>
};
