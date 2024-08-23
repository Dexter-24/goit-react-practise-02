import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (!query) {
      return;
    }
    
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        const { photos, per_page, total_results} = await getPhotos(query, page);
        if (!photos.length) {
          return setIsEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...photos])
        setIsVisible(page < Math.ceil(total_results / per_page))
      
      } catch (error) {
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
}

    fetchData();

  }, [page, query])

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  }

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <Form onSubmit={onHandleSubmit} />
      {images.length > 0 && <PhotosGallery images={images} />}
      {isVisible && <Button onClick={onLoadMore} disabled={isLoading}>{ isLoading ? "loading" : "LoadMore"}</Button>}
      {!images.length && !isEmpty && <Text textAlign="center">Let`s begin search 🔎</Text>}
      {isLoading && <Loader />}
      {error && <Text textAlign="center">❌ Something went wrong - {error}</Text>}
      {isEmpty && <Text textAlign="center">Sorry. There are no images ... 😭</Text>}

    </>
  );
};
