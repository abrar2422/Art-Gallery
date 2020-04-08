var categories = ['Forest', 'Mountain', 'Wildlife'];
var pictures = [
  {
    Title: 'The Rockies',
    Category: categories[1],
    Description:
      ' simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ',
    price: 18.99,
    image: 'pic1.jpg'
  },
  {
    Title: 'Denali',
    Category: categories[1],
    Description: ' as opposed to using Content here, content here, making it look l',
    price: 12.99,
    image: 'pic2.jpg'
  },
  {
    Title: 'The Saint',
    Category: categories[1],
    Description:
      'r, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem',
    price: 13.99,
    image: 'pic3.jpg'
  },
  {
    Title: 'The Rainer',
    Category: categories[1],
    Description:
      'redefined chunks as necessary, making this the first true generator on the Internet. I',
    price: 100.0,
    image: 'pic4.jpg'
  },
  {
    Title: 'The rainforest',
    Category: categories[0],
    Description:
      'd alteration in some form, by injected humour, or randomised words which dont look even slight',
    price: 21.99,
    image: 'forest1.jpg'
  },
  {
    Title: 'The Morondava',
    Category: categories[0],
    Description:
      'nd going through the cites of the word in classical literature, discovered the undoubtable source. Lor',
    price: 31.99,
    image: 'forest2.jpg'
  },
  {
    Title: 'The mangoness',
    Category: categories[0],
    Description:
      'e Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the',
    price: 89.0,
    image: 'forest3.jpg'
  },
  {
    Title: 'The puzzlewood',
    Category: categories[0],
    Description:
      'nd going through the cites of the word in classical literature, discovered the undoubtable source. Lor',
    price: 41.0,
    image: 'forest4.jpg'
  },
  {
    Title: 'The rage',
    Category: categories[2],
    Description:
      'ing through the cites of the word in classical literature, discovered the undoubtable source.',
    price: 200.99,
    image: 'life1.jpg'
  },
  {
    Title: 'The Ajax',
    Category: categories[2],
    Description:
      'English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for',
    price: 13.99,
    image: 'life2.jpg'
  },
  {
    Title: 'The Alexus',
    Category: categories[2],
    Description:
      'sum is not simply random text. It has roots in a piece of classical Latin literature from',
    price: 31.99,
    image: 'life3.jpg'
  },
  {
    Title: 'The Alfie',
    Category: categories[2],
    Description:
      ' from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    price: 35.99,
    image: 'life4.jpg'
  }
];

function askOrderNum() {
  document.getElementById('question').classList.add('visible');
  document.getElementById('textarea').classList.add('visible');
}

var mainStore = document.getElementById('store');

function createCard(ctitle, imgs, price, desc, category) {
  var box = document.createElement('div');
  box.classList.add('box');
  var img = document.createElement('img');
  img.setAttribute('src', imgs);
  box.appendChild(img);
  var htitle = document.createElement('h5');
  var title = document.createTextNode(ctitle);
  htitle.appendChild(title);
  box.appendChild(htitle);
  var cat = document.createElement('caption');
  var text_cat = document.createTextNode(category);
  cat.appendChild(text_cat);
  box.appendChild(cat);
  var description = document.createElement('p');
  var text_desc = document.createTextNode(desc);
  description.appendChild(text_desc);
  box.appendChild(description);
  var cost = document.createElement('h6');
  var text_h = document.createTextNode(price);
  cost.appendChild(text_h);
  box.appendChild(cost);

  var addCart = document.createElement('button');
  var text_cart = document.createTextNode('Add To Cart');
  addCart.appendChild(text_cart);
  addCart.classList.add('btn-sm');
  addCart.classList.add('btn-secondary');
  addCart.setAttribute('onclick', 'createCart()');
  box.appendChild(addCart);

  var ReadMore = document.createElement('button');
  var text_read = document.createTextNode('Read More');
  ReadMore.appendChild(text_read);
  ReadMore.classList.add('btn-sm');
  ReadMore.classList.add('btn-success');

  box.appendChild(ReadMore);

  mainStore.appendChild(box);
}

function createMainPage() {
  clear();
  for (var i = 0; i < pictures.length; i++) {
    createCard(
      pictures[i].Title,
      './images/' + pictures[i].image,
      'CDN$ ' + pictures[i].price,
      pictures[i].Description,
      pictures[i].Category
    );
  }
}

function clear() {
  var child = document.querySelector('.box');
  while (document.getElementById('store').lastElementChild) {
    document.getElementById('store').removeChild(child);
    child = document.getElementById('store').lastElementChild;
  }
}

function showForests() {
  clear();
  for (var i = 4; i <= 7; i++) {
    createCard(
      pictures[i].Title,
      './images/' + pictures[i].image,
      'CDN$ ' + pictures[i].price,
      pictures[i].Description,
      pictures[i].Category
    );
  }
}
function showMountains() {
  clear();
  for (var i = 0; i <= 3; i++) {
    createCard(
      pictures[i].Title,
      './images/' + pictures[i].image,
      'CDN$ ' + pictures[i].price,
      pictures[i].Description,
      pictures[i].Category
    );
  }
}
function showWildLife() {
  clear();
  for (var i = 8; i <= 12; i++) {
    createCard(
      pictures[i].Title,
      './images/' + pictures[i].image,
      'CDN$ ' + pictures[i].price,
      pictures[i].Description,
      pictures[i].Category
    );
  }
}

function createCart() {
  alert('Item added to cart');
}
