import { Grid, PhotosGalleryItem } from "..";

export const PhotosGallery = ({images}) => {
  return <Grid>{images.map(({ id, avg_color, src, alt }) => 
    <PhotosGalleryItem key={id} avg_color={ avg_color} src = {src} alt= {alt} />)}</Grid>;
};
