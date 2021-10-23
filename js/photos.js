const photos = document.getElementById('photos');
const listOfPhotos = document.getElementsByClassName('listOfPhotos');
const photosList = [
    ['playing.jpg', '#'],
    ['console.jpg', '#'],
    ['setup.jpg', '#'],
];

listPhotos();

function listPhotos() {
    let photoColumns = screen.width > 430 ? 3 : 1;
    let k = 0;
    while (k < photosList.length) {
        let photo = document.createElement('div');
        photo.className = 'listOfPhotos';

        for (let j = 0; j < photoColumns; j++) {
            let photoImage = document.createElement('img');
            photoImage.src = `images/media/${photosList[k][0]}`;
            photoImage.alt = photosList[k][0];

            let photoLink = document.createElement('a');
            photoLink.href = photosList[k][1];
            photoLink.appendChild(photoImage);

            photo.appendChild(photoLink);

            photos.appendChild(photo);

            k++;
        }
    }
}

window.addEventListener('resize', listPhotos);