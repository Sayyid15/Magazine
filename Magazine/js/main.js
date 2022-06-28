window.addEventListener('load', init);

//Globals
// let imageList = ['img', 'training goggles', 'racing cap', 'training cap', 'men jammer', 'men trunks', 'fina approved jammer',
//     'women one piece', 'fina approved kneeskin', 'tech paddles', 'kickboard', 'flippers', 'pullbouy', 'snorkel', 'mesh bag', 'backpack'];
let swimmingUrl = 'http://localhost/Magazine/webservice/';
let detailModal;
let detailModalContent;
let detailModalCloseButton;
let pictures;
let productInfo = {};
let productLocal =[];


/**
 * Initialize after the DOM is ready
 */
function init() {
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    } else if (localStorage.getItem('id') !== null){
    productLocal = JSON.parse(localStorage.getItem('id'));
}

    pictures =document.querySelector('#swimming-gallery')
    pictures.addEventListener('click', picturesClickHandler);

    detailModal = document.getElementById('swimming-detail');

    detailModalContent = detailModal.querySelector('.modal-content');

    detailModalCloseButton = detailModal.querySelector('.modal-close');
    detailModalCloseButton.addEventListener('click', detailCloseClickHandler);

    getProducts()
}

function detailCloseClickHandler(e){

    detailModal.classList.remove('card')

}



function getProducts() {

    fetch(swimmingUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createSwimmingProducts)
        .catch(ajaxErrorHandler);
}
/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */

 function createSwimmingProducts(data){

     for (let product of data) {

         //Create div for card
         let productCard = document.createElement('div');
         productCard.classList.add('product-card');
         if(productLocal.includes(`${product.name}`)){
             productCard.classList.add('favorite')
         }
         productCard.dataset.id = product.id;
         productCard.innerHTML =product.name;


         let title = document.createElement('h2')
         title.innerHTML = product.id;
         productCard.appendChild(title);

         pictures.appendChild(productCard);


         let productUrl = `${swimmingUrl}?id=${product.id}`;

         fetch(productUrl)
             .then((response) => {
                 if (!response.ok) {
                     throw new Error(response.statusText);
                 }
                 return response.json();
             })
             .then(fillSwimmingProducts)
             .catch(ajaxErrorHandler);
     }
 }
/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param product
 */
function fillSwimmingProducts(product) {

    let productCard = document.querySelector(`.product-card[data-id='${product.id}']`);

    let image = document.createElement('img');
    image.src = `img/${product.name}.png`;
    image.dataset.id = product.id;
    productCard.appendChild(image);

    let button = document.createElement('button');
    button.classList.add('product-card', 'button');
    button.innerHTML = `Details`;
    button.dataset.id = product.id;
    button.dataset.details = 'details';
    productCard.appendChild(button);

    let favoriteButton = document.createElement('button');
    favoriteButton.innerHTML = 'Add to favorite';
    favoriteButton.classList.add('test');
    if (productLocal.includes(`${product.id}`)){
        favoriteButton.innerHTML = "Add";
    }
    favoriteButton.dataset.id = product.id;
    favoriteButton.dataset.favorite = 'favorite';
    favoriteButton.appendChild(favoriteButton);

    productInfo[product.id] = product;

}
/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data){
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is iets verkeerd gegaan';
    pictures.before(error);
}

function picturesClickHandler(e){

    let target = e.target;
    let datasetFavorite = target.dataset.favorite;
    let datasetButton   = target.dataset.details ;

    if (target.nodeName === "BUTTON" && datasetFavorite === 'favorite'){
        addFavorite(e);
    } else  if (target.nodeName === "BUTTON" && datasetButton === 'details'){
        showDetails(e)
    }

}

function addFavorite(e) {

    let target = e.target;
    let id = target.dataset.id;

    if (target.parentElement.classList.contains('favorite')) {
        target.parentElement.classList.remove('favorite');
        let itemPosition = productLocal.indexOf(`${id}`);
        productLocal.splice(itemPosition, 1);
        localStorage.setItem('id', JSON.stringify(productLocal));
        target.innerHTML = "Set to Favorite";
    } else {
        target.parentElement.classList.add('favorite');
       productLocal.push(id);
        localStorage.setItem('id', JSON.stringify(productLocal));
        target.innerHTML = "Add";
    }

}


function showDetails(e) {


    let clickedItem = e.target;

    detailModal.classList.remove('picture')

    detailModalContent.innerHTML = '';

    let product = productInfo[clickedItem.dataset.id];

    let title = document.createElement('h2');
    title.innerHTML = `${product.name} (#${product.id})`;
    detailModalContent.appendChild(title);

    let image = document.createElement('img');
    image.src = `img/ ${product.name}.png`;
    image.dataset.id = product.id;
    detailModalContent.appendChild(image);

    let details = document.createElement('h3');
    details.innerHTML = product.details;
    detailModalContent.appendChild(details);

    let brand = document.createElement('h4');
    brand.innerHTML = product.brand;
    detailModalContent.appendChild(brand);

    let price = document.createElement('h5');
    price.innerHTML = product.price;
    detailModalContent.appendChild(price);

}









