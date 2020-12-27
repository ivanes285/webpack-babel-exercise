//Aqui colocariamos todo el codigo de JavaScrip moderno

import Photos from "./photos";
import "../styles/main.css";

const photos = new Photos();



async function main() {
  console.log(await photos.getPhotos());
}


function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

main();

console.log(isValidJSON("test"));
