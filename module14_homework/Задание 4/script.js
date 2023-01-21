const form = document.querySelector('form');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const imageContainer = document.querySelector('#image-container');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const width = Number(widthInput.value);
  const height = Number(heightInput.value);

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    console.log('One of the numbers is out of range (100 to 300)');
    return;
  }

  const url = `https://picsum.photos/${width}/${height}`;
  const response = await fetch(url);
  const imageBlob = await response.blob();
  const imageUrl = URL.createObjectURL(imageBlob);

  const image = document.createElement('img');
  image.src = imageUrl;
  imageContainer.appendChild(image);
});

