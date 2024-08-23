import { GridItem } from "..";
import css from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({avg_color, src, alt}) => {
  return <GridItem>
    <div className={css.thumb} style = {{backgroundColor: avg_color, borderColor: avg_color}}>
      <img alt={alt} src={src.large}/>
    </div>
  </GridItem>;
};
