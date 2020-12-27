class Photo {
  async getPhotos() {
    //https://jsonplaceholder.typicode.com/
    //Una api gratis que nos permite interactuar con ella
    const photos = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const result = await photos.json();
    return result;
  }
}
export default Photo;
