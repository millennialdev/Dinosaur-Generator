// console.log('js script loaded');

document.querySelector('#btnLoad').addEventListener('click', () => {
  getDinoName();
  getDinoImage();
});

async function getDinoName() {
  const response = await fetch('/dinoname');
  const data = await response.json();
  let dinoName = `${data.results[0].name.first} ${data.results[0].name.last}`;
  // console.log(data.results[0].name);
  document.querySelector('#dinoName').textContent = dinoName;
}

async function getDinoImage() {
  const response = await fetch('/dinoimage');
  const data = await response.json();
  let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
  let dinoImageUrl = dinoImage.thumbnailUrl;
  let dinoAlt = dinoImage.name;
  // console.log(dinoImage);

  if (document.querySelector('#dinoImage') !== null) {
    document.querySelector('#dinoImage').remove();
  }

  let img = document.createElement('img');
  img.id = 'dinoImage';
  img.src = dinoImageUrl;
  img.alt = dinoAlt;
  document.querySelector('.generator').appendChild(img);
}
