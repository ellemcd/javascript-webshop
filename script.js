const products = [
  {
    itemName: `Timberland`,
    filterItem: `Men`,
    price: 179,
    itemDesc: `Colour Shown - Brown`,
    itemDetails: `Comfy and hard-wearing, these sturdy kids' boots feature OrthoLite® footbeds for comfort and eco-conscious materials, including recycled PET laces, ReBOTL™ fabric made from recycled plastic bottles and Better Leather rated for its sustainable use of water, energy, and textile waste.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/8/6/864187.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Alpha Industries`,
    filterItem: `Men`,
    price: 349,
    itemDesc: `Jacket - PPS N3B`,
    itemDetails: `Parkas from Alpha Industries made for and used by the US Air Force as early as 1950. The jacket was produced for pilots and soldiers who served in polar-like conditions and became known as Snorkel Parka thanks to its tight-fitting hood.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/8/4/841231.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Sweet SKTBS`,
    filterItem: `Men`,
    price: 149,
    itemDesc: `Colour Shown - White`,
    itemDetails: `Take an early morning walk and feel like you own the city. With frost in the grass and ice on the car windows, it is important to dress properly for the streets. Put on this padded puffy jacket from sweet SKTBS to keep warm in the cold. Adjustable functions mean that the cold does not have a chance to get in through any cracks.
    `,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/3/938834.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Santa Cruz`,
    filterItem: `Woman`,
    price: 75,
    itemDesc: `Color Shown - Crystal Grape`,
    itemDetails: `The Santa Cruz Japanese Street Strip Longsleeve is a regular fit longsleeve t-shirt made out of 100% cotton 160gsm jersey, with left chest print and back print on white pink tie dye patern`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/6/967313.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Moon Boot`,
    filterItem: `Woman`,
    price: 135,
    itemDesc: `Color Shown - Red`,
    itemDetails: `The original design from Moon Boot, these vibrant red nylon boots are sure to get you in the mood for après-ski season. The futuristic silhouette is inspired by the boots of the astronauts who first stepped foot on the moon. Wear yours as a comfy option after a long day skiing or while trekking through the wintry city streets.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/8/9/892132.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Adidas Snowboarding`,
    filterItem: `Men`,
    price: 109,
    itemDesc: `Color Shown - Leg Ink/Traoli/Ice`,
    itemDetails: `The Mobility pants have been designed in collaboration with the Terrex division at Adidas, and come with a solid 10k/10k waterproofing and breathability rating. They’re made using a nylon laminated fabric, which makes them super tough, and ideal for cruising the resort or for racking up park laps. Though without any insulation, they may get a little chilly, and as such might be best suited to bluebirds and spring riding.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/946920.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Adidas Snowboardin`,
    filterItem: `Men`,
    price: 169,
    itemDesc: `Color Shown - Feat Grey/White/Oran`,
    itemDetails: `The Mobility pants have been designed in collaboration with the Terrex division at Adidas, and come with a solid 10k/10k waterproofing and breathability rating. They’re made using a nylon laminated fabric, which makes them super tough, and ideal for cruising the resort or for racking up park laps. Though without any insulation, they may get a little chilly, and as such might be best suited to bluebirds and spring riding.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/946859.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Burton - Shenandoah`,
    filterItem: `Acc`,
    price: 29,
    itemDesc: `Color Shown - Dahlia/Creme Brulee`,
    itemDetails: `Burton Snowboards warrants all clothing, outerwear, bags, and luggage to be free of defects in materials or workmanship for the practical lifetime of the product. Damage due to misuse, abuse, accidents, neglect, and wear and tear that can be reasonably expected as a result of extended use over time, are not covered by this Limited Lifetime Warranty but may be repaired at a reasonable cost.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/947907.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Burton - Gore-Tex Balsam`,
    filterItem: `Woman`,
    price: 319,
    itemDesc: `Colour Shown - True Penny`,
    itemDetails: `Staying warm and dry on the mountain does not have to mean a technical look. This Burton GORE-TEX Conditioner Jacket for women has a fresh style with low-profile technology. The asymmetrical zipper, zipper on the back of the collar and clean lines make it a good protection against weather and wind. Breathable materials and lightweight insulation keep you comfortable during the coldest days on the mountain.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/946588.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Burton - Larosa`,
    filterItem: `Woman`,
    price: 279,
    itemDesc: `Colour Shown - True Penny/Stout White`,
    itemDetails: `Burton's Larosa Anorak for women is equipped and designed with as much coziness factor as functionality. A waterproof shell is combined with a warm Thermolite® lining and a soft and cozy sherpa fleece in the hood. The anorak is waterproof up to 10,000 mm water column and comes with a bunch of smart features that make your skiing or snowboarding easier!`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/946602.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Burton - Larosa Puffy`,
    filterItem: `Woman`,
    price: 309,
    itemDesc: `Colour Shown - Stout White`,
    itemDetails: `It's true. You have found the best warmth in the Burton Larosa Puffy jacket for women. The two-way zipper on the front allows you to easily adjust and access bearings, while the mesh-lined ventilation openings with zipper will keep you cool during all the cozy. The thermal insulation with synthetic down is just proof of how warm this jacket is. Not to mention that it will keep you dry on the mountain with. The snow lock with a zipper at the waist and a fastener from the jacket to the trousers helps to seal everything, literally.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/946635.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Roxy - Nadia`,
    filterItem: `Woman`,
    price: 209,
    itemDesc: `Colour Shown - Bronze Green`,
    itemDetails: `The Roxy Backyard Pants are here to keep you warm and dry wherever the winter takes you. From backyard sledding to backcountry shredding, the Backyard pants have the durability and technology to keep the moisture out, vent excess heat, and provide a comfy fit. The slightly tailored cut makes for a clean, ergonomic look that's stylish without detracting from functionality. With a wide arrangement of colors, there's a Backyard Pant to fit your look.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/5/958198.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Eivy Peg Cropped Fleece`,
    filterItem: `Woman`,
    price: 59,
    itemDesc: `Colour Shown - Grey Melange`,
    itemDetails: `Skiwear brand Eivy brings you powder-fresh gear straight from its fashion house in Sweden. Using stretchy, fast-drying materials in a range of bold prints, the brand’s top base layers, tights and accessories are designed to be worn on or off the slopes. After mountain-peak snugness? Its cosy, cropped fleeces are designed to keep you both warm and dry.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/5/955368.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Burton - Larosa Bib`,
    filterItem: `Woman`,
    price: 259,
    itemDesc: `Colour Shown - Stout White/True Black`,
    itemDetails: `The Burton Larosa Bib Pants are hardworking technical pants with a fun stylish vibe that will have you dry and smiling while you shred the mountain all day long. Built around essentials like a DRYRIDE breathable-waterproof membrane, and fun extras like off-colored accents and a removable belt, the Larosa Bibs are the fresh new pants to set your season off right.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/4/946695.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Burton Larosa Sherpa`,
    filterItem: `Woman`,
    price: 129,
    itemDesc: `Colour Shown - Stout White/Orchid`,
    itemDetails: `Fleece on the outside. Fleece on the inside. Cozy all around. Pop on this women's Burton Larosa Quarter-Zip Sherpa Fleece and walk in warm confidence. Make it all personal with the adjustment at the hem.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/6/962773.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Vans - Standard Mid MTE`,
    filterItem: `Men`,
    price: 159,
    itemDesc: `Colour Shown - Arthur Longo/Blue/Black`,
    itemDetails: `Practical, packable and can definitely be worn in the bar, the new Arthur Longo Standard Mid MTE is a smaller version of Van's best-selling Standard MTE winter boot. With a waterproof vulcanized bottom, waterproof seam-sealed construction, a Standard MTE outsole and a 100-gram weight insulation package, the classic Vans style and everyday shoes for winter weather have finally been combined.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/5/954033.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Northwave - Sorle`,
    filterItem: `Men`,
    price: 169,
    itemDesc: `Colour Shown - Black`,
    itemDetails: `OG snowboarding brand Northwave is, arguably, best known outside of gearhead circles for its Espresso shoe — a chunky fat boy silhouette from the 1990s that draws influence from snowboarding boots. Last year, Slam Jam revived the style and it’s back for winter in a variety of new colors, makeups and styles.`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/6/966957.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
  },
  {
    itemName: `Airblaster - Go Medium`,
    filterItem: `Acc`,
    price: 29,
    itemDesc: `Colour Shown - Banana`,
    itemDetails: `here's an old snowboard saying - 'Go Big, or Go Home'. We're not so strict on that, in fact why no just Go Medium.

    100% Finest Acrylic
    One Size Fits All`,
    itemThumb: `https://junkyardmedia.imgix.net/media/catalog/product/9/5/958929.jpg?auto=format&w=930&h=930&fit=crop&crop=faces`
    
  },
];

// -- VARIABLES
const cart = [];
let myDropdown = document.querySelector("#myDropdown");
let modalBox = document.querySelector("#modal");
let changeTheme = document.querySelector("html");

// LIGHT AND DARK THEME functions: changes the theme of the page
function darkMode() {
  changeTheme.classList.add("dark");
}

function lightMode() {
  changeTheme.classList.remove("dark");
}

// --SHOW CART function: click the cart to show and hide the cart--
function showCart() {
  myDropdown.classList.toggle("show");
}

// --DISPLAY CART function: adds the .show class (display: block - refer to CSS) to the div that holds the cart--  
function displayCart() {
  myDropdown.classList.add("show");
}

// --HIDE CART function: adds the .hide class (display: none - refer to CSS) to the div that holds the cart--  
function hideCart(){
  myDropdown.classList.add("hide");
}

// --HIDE EMPTY CART function: hides the "Your Cart is Empty" message inside the cart when products are added--
function hideEmptyCart() {
  document.querySelector('.emptycart').classList.add("hide");
};

// --RESET CART function: removes the .hide class (display: none - refer to CSS) from the div that holds the cart.--
function resetCart() {
  myDropdown.classList.remove("hide");
};

// -- TOGGLE MODAL function: adds the .show class (display:block - refer to CSS) to the modal container --
function toggleModal(productName) {
  modalBox.classList.toggle("show");
  updateProductModalView(productName);
}

// -- Toggle Modal Function for the Alert after buying ---
function toggleAlertModal() {
  modalBox.classList.toggle("show");
  modalAlertPopUp();
}

function modalAlertPopUp() {

  const modalBody = modalBox.querySelector('.modal-content');
  
  modalBody.innerHTML = /* html */ `
  <button class="close-modal" onclick="removeModal()">x</button>
      
  <div class="confirm">
    <br>
    <br>
    <h2 class="accent-header">Thank you for your order!</h2>
    <p class="main-txt">We will send you your Order ASAP!</p>

    <div class="img-about">
      <img src="img/winter-jacket.png" alt="winter jacket logo">
    </div>
    <br>
    <h4 class="main-txt">no refunds!</h4>
  </div> 

  `;
}

function updateCart(){
  updateCartView();
  updateTotal();
  updateCheckoutView();
}

// -- REMOVE MODAL function: takes away the .show class from the modal container --
function removeModal() {
  modalBox.classList.remove("show");
}

// START modal

function updateProductModalView(productName) {
  const modalBody = modalBox.querySelector('.modal-content');

  const product = products.find(product => product.itemName === productName);
  modalBody.innerHTML = /* html */ `
  <div></div>
  <div class="spacer">
  <button class="close-modal main-txt" onclick="removeModal()">x</button>
      
    <h2 class="product-name accent-header">${product.itemName}</h2>

      <div class="product-modal">

        <div class="item-thumb">
          <img src="${product.itemThumb}" class="product-img" />
        </div>
    
        <div class="product-info main-txt">
          <p class="main-txt sm-accent-txt">${product.itemDesc}</p>
          
          <p class="main-txt">${product.itemDetails}</p>

          <p class="main-txt bold-price center-container">$ ${product.price}</p>
        </div>

      </div>
      
        <button class="product-button main-txt" onclick="addToCart(\'${product.itemName}\')">Add to Cart</button>
      
  `;
}

window.onclick = function(event) {
  if (event.target == modalBox) {
    removeModal();
  }
}
// END modal

// --START ADD TO CART function--
function addToCart(productName) {

  let product = products.find(product => product.itemName === productName);
  cart.push(product);

  updateCartView();
  hideEmptyCart(); 
  displayCart();
  updateTotal();
  removeModal();
  
}
// --END ADD TO CART function--


// --START UPDATE CART VIEW function--
function updateCartView() {

  let shoppingCartBody = document.querySelector('.shopping-cart-body');
  let emptycart = document.querySelector('.emptycart');

  if (cart.length > 0){
    emptycart.classList.add("hide");
  } else {
    emptycart.classList.remove("hide");
  }

  shoppingCartBody.innerHTML = cart.map(product => {
    return /* html */ `
    <div class="in-cart-item">
                  
      <div class="item-thumb">
        <img src="${product.itemThumb}" class="img-cart" />
      </div>
      
      <div class="in-cart-item-desc">
        <div class="item-name accent-header">${product.itemName}</div>
        <div class="item-price main-txt">${product.price}</div>
      </div>
      
      <div class="spacer"></div>
      <button class="remove main-txt" onclick="removeProduct(\'${product.itemName}\')">x</button>
    </div>
    `;
 
  }).join('');

}
// --END UPDATE CART VIEW function--


// --START UPDATE TOTAL function--
function updateTotal(){
  let total = 0;

  for (let product of cart) {
    let price = product.price;
    total += Number(price);
    //total += parseInt(price);
  }

  let totalElement = document.querySelector('.total span');
  totalElement.textContent = total;
}
// --END UPDATE TOTAL function--


// --START REMOVE PRODUCT function--
function removeProduct(productName) {
  let productIndex = cart.findIndex(product => product.itemName === productName);
  cart.splice(productIndex, 1);
  
  updateCart();
}
// --END REMOVE PRODUCT function--


// --START GO TO function: makes the page dynamic/still on the same file--
function goto(id){
  let cartdrop = document.querySelector('.cart-dropdown');
  
  for (let article of document.querySelectorAll('article')){
    article.style.display = 'none';
  }
  
  document.querySelector(id).style.display = 'block';

  if (id === '#checkout') {
    updateCheckoutView();
    cartdrop.classList.add("hide");
  }

  if(id !== '#checkout'){
    cartdrop.classList.remove("hide");
  }

}
  // ATTN: look at why the "hide" class is not removed upon visiting other IDs
// --END GO TO function--


// --START UPDATE CHECKOUT VIEW: gives us an order summary in the main content.--
function updateCheckoutView() {
  let checkout_element = document.querySelector('.checkout-container .checkout');
  const total = cart.reduce((total, product) => total += product.price, 0);

  checkout_element.innerHTML = /*html*/ `
    <div class="main-container">
      <div class="filled-cart">
        <h2>This is your cart:
        <ul class="cart-items">

        ${cart.map(product => (/*html*/ `
          <li class="in-cart-item">
                  
            <div class="item-thumb">
              <img src="${product.itemThumb}" class="img-cart" />
            </div>
      
            <div class="in-cart-item-desc">
              <div class="item-name">${product.itemName}</div>
              <div class="item-price">${product.price}</div>
            </div>

            <div class="spacer"></div>
            <button class="remove" onclick="removeProduct(\'${product.itemName}\')">X</button>
      
          </li>`)).join("\n")}
        </ul> 
        <span class="total">
          Total:<span>${total}</span>
        </div>
        ${(cart.length > 0) ? /* html */`<button class="buy-button"onclick="buyAndResetCart()">Buy</button>` : ''}
    </div>


    
`;
} 
// -- END UPDATE CHECKOUT VIEW function--


// -- CLICK ON BUY AND CART RESETS ---

function buyAndResetCart(){
  cart.splice(0, cart.length);
  updateCart();
  toggleAlertModal();
  goto('#page1');
}

// -- START ABOUT PAGE--
let about_element = document.querySelector('.about-container .about');

about_element.innerHTML += /*html*/ `
<div class="about-container">
    <br>
    <br>
    <div class="card">
      <div class="innercard">
        <div class="card-text">  
          <br>
          <br>
          <h2 class="accent-header">Our Company</h2>
            <p>Hydra is a world-leading company in international fashion. The company is part of Inditex, one of the world's largest clothing trading groups. The customer is the core of our special business model that integrates design, manufacturing, distribution and sales via a large network of own stores. Our goal is to exceed our customers' expectations. We always strive for perfect quality and innovation.</p>
            
            <p>We have more than 450 stores in over 80 countries around the world. The company is listed on the stock exchange and has grown steadily every year. Our business consists of an environmentally friendly attitude and we do our utmost not to affect the environment more than necessary. Our head office is located in London.
            </p>
          <br>
            <div class="img-about">
              <img src="https://haxanhulda.se/wp-content/uploads/2015/09/gots.png">
            </div>
          <br>
          <br>
        </div>
      </div>
    </div>
</div>
`;
// -- END ABOUT PAGE--

// --START CARD LOOP variables and function--
let cards_element = document.querySelector('.card-container .cards');

  // Loop array and create product cards
  // For each object in the products array, we store it in a temporary variable we named product
// products.forEach(product => {

//   // Each time we itirate through the array, we wanna add some new HTML (+=) with the product into

// --END CARD LOOP variables and function--



// -- Filter Function --

let currentFilter = 0;

function showProducts(filter){

  clearCard();

  currentFilter = filter;

  if (currentFilter == 0){
    
    products.forEach(product => {
    if (product.filterItem=="Men"){

      cards_element.innerHTML += /*html*/ `<div class="card">
        <div class="innercard">
    
        <div class="card-img" onclick="toggleModal(\'${product.itemName}\')" style="background-image: url('${product.itemThumb}')">
        </div>
    
          <div class="card-text">
            <h2 class="item-name accent-header">${product.itemName}</h2>
            <p class="item-price main-txt bold-price">$${product.price}</p>
            <p class="item-desc main-txt sm-accent-txt">${product.itemDesc}.</p>
            
          </div>
    
          <button onclick="addToCart(\'${product.itemName}\')">Add to Cart</button>
    
        </div>
      </div>
      `; 
    }
    
    });

    }
    else if (currentFilter === 1){
      products.forEach(product => {
        if (product.filterItem=="Woman"){
    
          cards_element.innerHTML += /*html*/ `<div class="card">
            <div class="innercard">
        
            <div class="card-img" onclick="toggleModal(\'${product.itemName}\')" style="background-image: url('${product.itemThumb}')">
            </div>
        
              <div class="card-text">
                <h2 class="item-name accent-header">${product.itemName}</h2>
                <p class="item-price main-txt bold-price">$${product.price}</p>
                <p class="item-desc main-txt sm-accent-txt">${product.itemDesc}.</p>
              </div>
        
              <button onclick="addToCart(\'${product.itemName}\')">Add to Cart</button>
        
            </div>
          </div>
          `; 
        }
        
        
          
        });
    }

    else if (currentFilter === 2){
      products.forEach(product => {
        if (product.filterItem=="Acc"){
    
          cards_element.innerHTML += /*html*/ `<div class="card">
            <div class="innercard">
        
            <div class="card-img" onclick="toggleModal(\'${product.itemName}\')" style="background-image: url('${product.itemThumb}')">
            </div>
        
              <div class="card-text">
                <h2 class="item-name accent-header">${product.itemName}</h2>
                <p class="item-price main-txt bold-price">$${product.price}</p>
                <p class="item-desc main-txt sm-accent-txt">${product.itemDesc}.</p>
              </div>
        
              <button onclick="addToCart(\'${product.itemName}\')">Add to Cart</button>
        
            </div>
          </div>
          `; 
        }

        });
    }

    else if (currentFilter === 3){
      products.forEach(product => {
        
    
          cards_element.innerHTML += /*html*/ `<div class="card">
            <div class="innercard">
        
              <div class="card-img" onclick="toggleModal(\'${product.itemName}\')" style="background-image: url('${product.itemThumb}')">
              </div>
        
              <div class="card-text">
                <h2 class="item-name accent-header">${product.itemName}</h2>
                <p class="item-price main-txt bold-price">$${product.price}</p>
                <p class="item-desc main-txt sm-accent-txt">${product.itemDesc}.</p>
              </div>
    
              <button onclick="addToCart(\'${product.itemName}\')">Add to Cart</button>
        
            </div>
          </div>
          `; 
        });
    }
}

showProducts(3);

// --- Filter 
function currentFilter0() {
  currentFilter = 0;
  showProducts(currentFilter);
};

function currentFilter1(){
  currentFilter = 1;
   showProducts(currentFilter);
};

function currentFilter2(){
  currentFilter = 2;
   showProducts(currentFilter);
};

function currentFilter3(){
  currentFilter = 3;
   showProducts(currentFilter);
};

function clearCard(){
  document.getElementById("card").innerHTML="";
}