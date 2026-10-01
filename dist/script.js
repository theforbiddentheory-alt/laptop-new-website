const laptopProducts = [
  {
    brand:"Dell",
    name:"Latitude 7490",
    price:74999,
    category:"Business",
    budget:"50to80",
    specs:["Core i5","8th Gen","8GB","256GB SSD"],
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85"
  },
  {
    brand:"HP",
    name:"EliteBook 840 G6",
    price:82999,
    category:"Business",
    budget:"80to120",
    specs:["Core i5","8th Gen","16GB","256GB SSD"],
    image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
  },
  {
    brand:"Lenovo",
    name:"ThinkPad T480",
    price:69999,
    category:"Student",
    budget:"50to80",
    specs:["Core i5","8th Gen","8GB","256GB SSD"],
    image:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=85"
  },
  {
    brand:"Apple",
    name:"MacBook Air",
    price:159999,
    category:"Premium",
    budget:"120plus",
    specs:["M1","8GB","256GB","Retina"],
    image:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85"
  },
  {
    brand:"ASUS",
    name:"VivoBook 15",
    price:119999,
    category:"Student",
    budget:"80to120",
    specs:["Core i5","11th Gen","8GB","512GB SSD"],
    image:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=85"
  },
  {
    brand:"Acer",
    name:"Aspire 5",
    price:64999,
    category:"Student",
    budget:"50to80",
    specs:["Core i5","10th Gen","8GB","256GB SSD"],
    image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=85"
  }
];

const accessories = [
  {
    name:"Wireless Mouse",
    price:3499,
    type:"mouse",
    image:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80"
  },
  {
    name:"Mechanical Keyboard",
    price:8999,
    type:"keyboard",
    image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
  },
  {
    name:"Laptop Bag",
    price:4999,
    type:"bag",
    image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
  },
  {
    name:"Laptop Stand",
    price:5499,
    type:"stand",
    image:"https://images.unsplash.com/photo-1616627986079-cc70ae6d0bb0?auto=format&fit=crop&w=700&q=80"
  }
];

function money(value){
  return "Rs. " + value.toLocaleString("en-PK");
}

/* =========================
   HERO SLIDER
========================= */

const heroSlides = [
  {
    title:'Laptops you can <em>actually trust.</em>',
    text:'Tested devices, clear specifications and a better way to shop for your next laptop in Multan.',
    image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85',
    kicker:'FEATURED PICK',
    cardTitle:'Business-ready. Everyday-fast.',
    meta:'Premium productivity laptops from trusted brands.'
  },
  {
    title:'Find your next <em>work machine.</em>',
    text:'Explore practical laptops for work, study, business and everyday use.',
    image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85',
    kicker:'WORK & STUDY',
    cardTitle:'Built for the everyday.',
    meta:'Smart options for students and professionals.'
  },
  {
    title:'More choice. <em>Less confusion.</em>',
    text:'Compare brands, specifications and budgets in one clean shopping experience.',
    image:'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=85',
    kicker:'SHOP SMARTER',
    cardTitle:'Compare with confidence.',
    meta:'Clear specs and practical product discovery.'
  }
];

let heroIndex = 0;

const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const heroImage = document.getElementById("heroImage");
const heroKicker = document.getElementById("heroKicker");
const heroCardTitle = document.getElementById("heroCardTitle");
const heroCardMeta = document.getElementById("heroCardMeta");
const heroDots = document.getElementById("heroDots");

heroSlides.forEach((_,i)=>{
  const dot = document.createElement("button");
  dot.className = i === 0 ? "active" : "";
  dot.onclick = () => showHero(i);
  heroDots.appendChild(dot);
});

function showHero(index){
  heroIndex = index;
  const slide = heroSlides[index];

  heroImage.style.opacity = "0";

  setTimeout(()=>{
    heroTitle.innerHTML = slide.title;
    heroText.textContent = slide.text;
    heroImage.src = slide.image;
    heroKicker.textContent = slide.kicker;
    heroCardTitle.textContent = slide.cardTitle;
    heroCardMeta.textContent = slide.meta;
    heroImage.style.opacity = "1";
  },180);

  [...heroDots.children].forEach((dot,i)=>{
    dot.classList.toggle("active",i === index);
  });
}

document.getElementById("heroPrev").onclick = ()=>{
  showHero((heroIndex - 1 + heroSlides.length) % heroSlides.length);
};

document.getElementById("heroNext").onclick = ()=>{
  showHero((heroIndex + 1) % heroSlides.length);
};

setInterval(()=>{
  showHero((heroIndex + 1) % heroSlides.length);
},6000);


/* =========================
   PRODUCT CARDS
========================= */

const productsEl = document.getElementById("products");

function productCard(product){
  return `
    <article class="product">
      <div class="product-image">
        <img src="${product.image}" alt="${product.brand} ${product.name}">
        <span class="product-badge">TESTED</span>
      </div>

      <div class="product-body">
        <span class="product-brand">${product.brand}</span>
        <h3>${product.name}</h3>

        <div class="specs">
          ${product.specs.map(s=>`<span class="spec">${s}</span>`).join("")}
        </div>

        <div class="product-bottom">
          <div class="price">
            ${money(product.price)}
            <small>Available now</small>
          </div>

          <button class="product-arrow add-cart" data-name="${product.name}">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(list=laptopProducts){
  productsEl.innerHTML = list.map(productCard).join("");

  document.querySelectorAll(".add-cart").forEach(btn=>{
    btn.onclick = ()=>{
      const product = laptopProducts.find(p=>p.name === btn.dataset.name);
      addToCart(product);
    };
  });
}

renderProducts();


/* =========================
   PRODUCT CAROUSEL
========================= */

document.getElementById("productNext").onclick = ()=>{
  productsEl.scrollBy({
    left:420,
    behavior:"smooth"
  });
};

document.getElementById("productPrev").onclick = ()=>{
  productsEl.scrollBy({
    left:-420,
    behavior:"smooth"
  });
};


/* =========================
   MAKE PRODUCT ROW SCROLLABLE
========================= */

productsEl.style.display = "flex";
productsEl.style.overflowX = "auto";
productsEl.style.scrollBehavior = "smooth";
productsEl.style.scrollbarWidth = "none";

const productStyle = document.createElement("style");
productStyle.innerHTML = `
  #products .product{
    min-width:280px;
    flex:0 0 280px;
  }

  #products::-webkit-scrollbar{
    display:none;
  }

  @media(max-width:600px){
    #products .product{
      min-width:245px;
      flex-basis:245px;
    }
  }
`;
document.head.appendChild(productStyle);


/* =========================
   BUDGET FILTER
========================= */

const budgetProducts = document.getElementById("budgetProducts");

function renderBudget(filter="all"){
  let data = laptopProducts;

  if(filter !== "all"){
    data = laptopProducts.filter(p=>p.budget === filter);
  }

  budgetProducts.innerHTML = data.slice(0,4).map(p=>`
    <div class="mini-product">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h4>${p.brand} ${p.name}</h4>
        <p>${p.specs.join(" • ")}</p>
        <strong>${money(p.price)}</strong>
      </div>
    </div>
  `).join("");
}

renderBudget();

document.querySelectorAll("#budgetButtons button").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll("#budgetButtons button")
      .forEach(b=>b.classList.remove("active"));

    btn.classList.add("active");

    renderBudget(btn.dataset.budget);
  };
});


/* =========================
   BRAND CARDS
========================= */

document.querySelectorAll(".brand-card").forEach(card=>{
  card.onclick = ()=>{
    const brand = card.dataset.brand;

    const filtered = laptopProducts.filter(p=>p.brand === brand);

    document.getElementById("inventory").scrollIntoView({
      behavior:"smooth"
    });

    if(filtered.length){
      renderProducts(filtered);
    }
  };
});


/* =========================
   ACCESSORIES FILTER
========================= */

const accessoryEl = document.getElementById("accessoryProducts");

function renderAccessories(type="all"){
  const data = type === "all"
    ? accessories
    : accessories.filter(a=>a.type === type);

  accessoryEl.innerHTML = data.map(item=>`
    <article class="product">
      <div class="product-image">
        <img src="${item.image}" alt="${item.name}">
        <span class="product-badge">ACCESSORY</span>
      </div>

      <div class="product-body">
        <span class="product-brand">ACCESSORIES</span>
        <h3>${item.name}</h3>

        <div class="product-bottom">
          <div class="price">
            ${money(item.price)}
            <small>Available now</small>
          </div>

          <button class="product-arrow accessory-add" data-name="${item.name}">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".accessory-add").forEach(btn=>{
    btn.onclick = ()=>{
      const item = accessories.find(a=>a.name === btn.dataset.name);
      addToCart({
        name:item.name,
        price:item.price,
        image:item.image
      });
    };
  });
}

renderAccessories();

document.querySelectorAll("#accessoryFilters button").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll("#accessoryFilters button")
      .forEach(b=>b.classList.remove("active"));

    btn.classList.add("active");
    renderAccessories(btn.dataset.type);
  };
});


/* =========================
   FAQ
========================= */

document.querySelectorAll(".faq").forEach(item=>{
  item.onclick = ()=>{
    document.querySelectorAll(".faq").forEach(other=>{
      if(other !== item) other.classList.remove("open");
    });

    item.classList.toggle("open");
  };
});


/* =========================
   MOBILE MENU
========================= */

const mobileMenu = document.getElementById("mobileMenu");

document.getElementById("menuBtn").onclick = ()=>{
  mobileMenu.classList.toggle("open");
};

document.querySelectorAll(".mobile-menu a").forEach(link=>{
  link.onclick = ()=>{
    mobileMenu.classList.remove("open");
  };
});


/* =========================
   SEARCH
========================= */

const overlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

document.getElementById("searchBtn").onclick = ()=>{
  overlay.classList.add("open");
  searchInput.focus();
};

document.getElementById("searchClose").onclick = ()=>{
  overlay.classList.remove("open");
};

overlay.addEventListener("click",e=>{
  if(e.target === overlay){
    overlay.classList.remove("open");
  }
});

searchInput.addEventListener("input",()=>{
  const q = searchInput.value.toLowerCase().trim();

  if(!q){
    searchResults.innerHTML = "";
    return;
  }

  const matches = laptopProducts.filter(p=>
    `${p.brand} ${p.name} ${p.category} ${p.specs.join(" ")}`
      .toLowerCase()
      .includes(q)
  );

  searchResults.innerHTML = matches.length
    ? matches.map(p=>`
        <div class="search-result">
          <b>${p.brand} ${p.name}</b>
          <small>${p.specs.join(" • ")} — ${money(p.price)}</small>
        </div>
      `).join("")
    : `<div class="search-result"><b>No results found</b><small>Try another brand or keyword.</small></div>`;
});


/* =========================
   CART
========================= */

let cart = [];

const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

document.getElementById("cartBtn").onclick = ()=>{
  cartDrawer.classList.add("open");
};

document.getElementById("cartClose").onclick = ()=>{
  cartDrawer.classList.remove("open");
};

function addToCart(product){
  cart.push(product);
  updateCart();
  showToast();
  cartDrawer.classList.add("open");
}

function updateCart(){
  cartCount.textContent = cart.length;

  if(!cart.length){
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Your bag is empty.</p>
        <span>Add a product to preview the interaction.</span>
      </div>
    `;
    cartTotal.textContent = "Rs. 0";
    return;
  }

  cartItems.innerHTML = cart.map((item,index)=>`
    <div class="cart-product">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <strong>${item.name}</strong>
        <span>${money(item.price)}</span>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((sum,item)=>sum + item.price,0);
  cartTotal.textContent = money(total);
}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(){
  const toast = document.getElementById("toast");

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(()=>{
    toast.classList.remove("show");
  },2200);
}


/* =========================
   CHECKOUT DEMO
========================= */

document.getElementById("checkoutBtn").onclick = ()=>{
  alert("Demo checkout — connect this button to WhatsApp / checkout system later.");
};


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown",e=>{
  if(e.key === "Escape"){
    overlay.classList.remove("open");
    cartDrawer.classList.remove("open");
  }
});
/* PATCH: Fix Apple MacBook Air product image */

const macbook = laptopProducts.find(
  product => product.name === "MacBook Air"
);

if (macbook) {
  macbook.image =
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85";
}

renderProducts();
/* =========================================
   PATCH: REAL BRAND LOGOS
========================================= */

const brandLogos = {
  Apple: "https://cdn.simpleicons.org/apple/FFFFFF",
  Dell: "https://cdn.simpleicons.org/dell/0085CA",
  HP: "https://cdn.simpleicons.org/hp/0096D6",
  Lenovo: "https://cdn.simpleicons.org/lenovo/E2231A",
  ASUS: "https://cdn.simpleicons.org/asus/FFFFFF",
  Acer: "https://cdn.simpleicons.org/acer/80BC00"
};

document.querySelectorAll(".brand-card").forEach(card => {

  const brandName = card.dataset.brand;
  const logoBox = card.querySelector(".brand-logo");

  if (!logoBox || !brandLogos[brandName]) return;

  logoBox.innerHTML = `
    <img
      src="${brandLogos[brandName]}"
      alt="${brandName} logo"
      loading="lazy"
    >
  `;

  logoBox.classList.add("real-brand-logo");
});/* =========================================
   PATCH: BRAND LOGOS - MATCH OUR WEBSITE
========================================= */

const websiteBrandLogos = {
  Apple: "https://cdn.simpleicons.org/apple/111827",
  Dell: "https://cdn.simpleicons.org/dell/0085CA",
  HP: "https://cdn.simpleicons.org/hp/0096D6",
  Lenovo: "https://cdn.simpleicons.org/lenovo/E2231A",
  ASUS: "https://cdn.simpleicons.org/asus/111827",
  Acer: "https://cdn.simpleicons.org/acer/80BC00"
};

document.querySelectorAll(".brand-card").forEach(card => {
  const brand = card.dataset.brand;
  const logoBox = card.querySelector(".brand-logo");

  if (!logoBox || !websiteBrandLogos[brand]) return;

  logoBox.innerHTML = `
    <img
      src="${websiteBrandLogos[brand]}"
      alt="${brand} logo"
      loading="lazy"
    >
  `;

  logoBox.classList.add("website-logo-fit");
});/* =========================================
   PATCH: PREMIUM TOP INFO SECTION
   JUST PASTE AT THE VERY END OF JS
========================================= */

(() => {
  if (document.getElementById("laptopTopPatch")) return;

  /* ---------- HTML ---------- */

  const oldTopbar = document.querySelector(".topbar");

  if (oldTopbar) {
    oldTopbar.outerHTML = `
      <div class="lgm-top-area" id="laptopTopPatch">

        <!-- PROMO BAR -->
        <div class="lgm-promo-bar">
          <div class="lgm-promo-inner">

            <button class="lgm-promo-arrow">
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <div class="lgm-promo-message">
              <span class="lgm-truck">🚚</span>
              <strong>Free Delivery Across Pakistan</strong>
              <span class="lgm-dot">•</span>
              <span>Pickup Available in Multan</span>
              <span class="lgm-arrow">→</span>
            </div>

            <button class="lgm-promo-arrow">
              <i class="fa-solid fa-chevron-right"></i>
            </button>

          </div>
        </div>


        <!-- STORE INFO -->
        <div class="lgm-store-bar">
          <div class="container lgm-store-inner">

            <div class="lgm-store-left">

              <span class="lgm-open">
                <span class="lgm-status-dot"></span>
                Open Today
              </span>

              <span class="lgm-separator"></span>

              <span>
                <i class="fa-solid fa-location-dot"></i>
                Multan, Pakistan
              </span>

              <span class="lgm-separator"></span>

              <span>
                <i class="fa-regular fa-clock"></i>
                Mon–Sat · 11am–9pm PKT
              </span>

            </div>


            <div class="lgm-store-right">

              <a
                href="https://maps.google.com/?q=Khan+Plaza+Multan+Cantt"
                target="_blank"
              >
                <i class="fa-solid fa-location-arrow"></i>
                Visit Branch
              </a>

              <a
                class="lgm-whatsapp"
                href="https://wa.me/923180611884"
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp"></i>
                <span>+92 318 0611884</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    `;
  }


  /* ---------- CSS ---------- */

  const style = document.createElement("style");

  style.id = "lgmTopPatchStyles";

  style.textContent = `

    /* ==============================
       MAIN WRAPPER
    ============================== */

    .lgm-top-area{
      width:100%;
      position:relative;
      z-index:120;
    }


    /* ==============================
       PROMO BAR
    ============================== */

    .lgm-promo-bar{

      color:#ffffff;

      background:
        radial-gradient(
          circle at 85% 50%,
          rgba(49,159,255,.32),
          transparent 27%
        ),
        linear-gradient(
          90deg,
          #10319F 0%,
          #185acb 52%,
          #319FFF 100%
        );

      border-bottom:1px solid rgba(255,255,255,.15);
    }

    .lgm-promo-inner{

      width:min(1180px,calc(100% - 40px));

      min-height:42px;

      margin:auto;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:20px;
    }

    .lgm-promo-message{

      display:flex;
      align-items:center;
      justify-content:center;

      gap:8px;

      text-align:center;

      font-size:12px;
      font-weight:600;
    }

    .lgm-promo-message strong{
      font-weight:800;
    }

    .lgm-truck{
      font-size:14px;
    }

    .lgm-dot{
      opacity:.45;
    }

    .lgm-arrow{
      color:#FFE06B;
      font-size:15px;
      font-weight:900;
      margin-left:2px;
    }

    .lgm-promo-arrow{

      width:27px;
      height:27px;

      display:grid;
      place-items:center;

      color:rgba(255,255,255,.82);

      background:rgba(255,255,255,.06);

      border:1px solid rgba(255,255,255,.16);

      border-radius:50%;

      transition:.25s;
    }

    .lgm-promo-arrow:hover{

      color:#17234A;

      background:#FABB1A;

      border-color:#FABB1A;

      transform:translateY(-1px);
    }


    /* ==============================
       STORE BAR
    ============================== */

    .lgm-store-bar{

      background:#ffffff;

      border-bottom:1px solid #e7edf7;

      box-shadow:0 2px 12px rgba(16,49,159,.035);
    }

    .lgm-store-inner{

      min-height:46px;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:20px;
    }

    .lgm-store-left,
    .lgm-store-right{

      display:flex;
      align-items:center;

      gap:13px;
    }

    .lgm-store-left{

      color:#68738a;

      font-size:11px;

      font-weight:600;
    }

    .lgm-store-left > span:not(.lgm-open):not(.lgm-separator){

      display:flex;
      align-items:center;

      gap:6px;
    }

    .lgm-store-left i{
      color:#10319F;
    }


    /* STATUS */

    .lgm-open{

      display:flex;
      align-items:center;

      gap:7px;

      color:#14955a;

      font-weight:800;
    }

    .lgm-status-dot{

      width:8px;
      height:8px;

      border-radius:50%;

      background:#20C978;

      box-shadow:
        0 0 0 4px rgba(32,201,120,.11);
    }


    /* SEPARATOR */

    .lgm-separator{

      width:3px;
      height:3px;

      flex:none;

      border-radius:50%;

      background:#c7cfdd;
    }


    /* RIGHT */

    .lgm-store-right{
      gap:9px;
    }

    .lgm-store-right a{

      min-height:32px;

      padding:0 10px;

      display:flex;
      align-items:center;

      gap:7px;

      color:#5e6a82;

      border-radius:10px;

      font-size:11px;

      font-weight:700;

      transition:.25s;
    }

    .lgm-store-right a:hover{

      color:#10319F;

      background:#f1f6ff;

      transform:translateY(-1px);
    }

    .lgm-store-right a i{
      color:#10319F;
    }


    /* WHATSAPP */

    .lgm-whatsapp{

      padding:0 13px !important;

      color:#ffffff !important;

      background:#10319F;

      border:1px solid #10319F;

      border-radius:20px !important;

      box-shadow:
        0 7px 18px rgba(16,49,159,.14);
    }

    .lgm-whatsapp i{
      color:#72F0A8 !important;
    }

    .lgm-whatsapp:hover{

      color:#ffffff !important;

      background:#0c277d !important;

      transform:translateY(-1px);
    }


    /* ==============================
       TABLET
    ============================== */

    @media(max-width:850px){

      .lgm-promo-message{
        font-size:10px;
      }

      .lgm-promo-message .lgm-dot{
        display:none;
      }

      .lgm-store-left{
        gap:9px;
      }

      .lgm-store-left .lgm-separator{
        display:none;
      }

      .lgm-store-right a:first-child{
        display:none;
      }

    }


    /* ==============================
       MOBILE
    ============================== */

    @media(max-width:600px){

      .lgm-promo-inner{

        width:calc(100% - 22px);

        min-height:39px;

        justify-content:center;
      }

      .lgm-promo-arrow{
        display:none;
      }

      .lgm-promo-message{

        gap:6px;

        font-size:10px;
      }

      .lgm-store-inner{
        min-height:44px;
      }

      .lgm-store-left{
        font-size:10px;
      }

      .lgm-store-left > span:nth-of-type(3){
        display:none;
      }

      .lgm-whatsapp{

        width:35px;
        height:34px;

        padding:0 !important;

        justify-content:center;

        border-radius:10px !important;
      }

      .lgm-whatsapp span{
        display:none;
      }

      .lgm-whatsapp i{
        font-size:16px;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: OPEN NOW LIVE SIGNAL DOT
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  if (document.getElementById("lgmLiveStatusPatch")) return;

  const style = document.createElement("style");

  style.id = "lgmLiveStatusPatch";

  style.textContent = `

    .lgm-status-dot{
      position:relative;
      width:8px;
      height:8px;
      flex:none;

      border-radius:50%;

      background:#20C978;

      box-shadow:
        0 0 0 4px rgba(32,201,120,.10);

      animation:
        lgmLivePulse 1.8s ease-out infinite;
    }

    .lgm-status-dot::before{
      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:8px;
      height:8px;

      border-radius:50%;

      background:rgba(32,201,120,.38);

      transform:
        translate(-50%,-50%)
        scale(1);

      animation:
        lgmLiveRipple 1.8s ease-out infinite;
    }

    .lgm-status-dot::after{
      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:18px;
      height:18px;

      border-radius:50%;

      border:1px solid rgba(32,201,120,.24);

      transform:
        translate(-50%,-50%)
        scale(.55);

      animation:
        lgmLiveRing 1.8s ease-out infinite;
    }

    @keyframes lgmLivePulse{

      0%,100%{
        box-shadow:
          0 0 0 4px rgba(32,201,120,.10),
          0 0 0 0 rgba(32,201,120,.00);
      }

      50%{
        box-shadow:
          0 0 0 4px rgba(32,201,120,.14),
          0 0 12px 2px rgba(32,201,120,.20);
      }

    }

    @keyframes lgmLiveRipple{

      0%{
        opacity:.55;
        transform:
          translate(-50%,-50%)
          scale(1);
      }

      70%,100%{
        opacity:0;
        transform:
          translate(-50%,-50%)
          scale(2.7);
      }

    }

    @keyframes lgmLiveRing{

      0%{
        opacity:.35;
        transform:
          translate(-50%,-50%)
          scale(.55);
      }

      70%,100%{
        opacity:0;
        transform:
          translate(-50%,-50%)
          scale(1.7);
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: PREMIUM WHATSAPP BUTTON
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  if (document.getElementById("lgmWhatsappPremiumPatch")) return;

  const style = document.createElement("style");

  style.id = "lgmWhatsappPremiumPatch";

  style.textContent = `

    /* Main WhatsApp button */

    .lgm-whatsapp{
      position:relative;

      min-height:36px !important;

      padding:0 15px !important;

      display:flex !important;
      align-items:center !important;
      justify-content:center !important;

      gap:8px !important;

      color:#ffffff !important;

      background:
        linear-gradient(
          135deg,
          #10319F 0%,
          #164fd0 55%,
          #319FFF 100%
        ) !important;

      border:1px solid rgba(255,255,255,.15) !important;

      border-radius:22px !important;

      box-shadow:
        0 7px 18px rgba(16,49,159,.18),
        inset 0 1px 0 rgba(255,255,255,.14);

      overflow:hidden;

      transition:
        transform .25s ease,
        box-shadow .25s ease,
        background .25s ease;
    }


    /* WhatsApp icon */

    .lgm-whatsapp i{
      position:relative;
      z-index:2;

      width:22px;
      height:22px;

      display:grid;
      place-items:center;

      color:#ffffff !important;

      background:#20d67b;

      border-radius:50%;

      font-size:12px;

      box-shadow:
        0 0 0 3px rgba(32,214,123,.12);

      transition:
        transform .25s ease,
        box-shadow .25s ease;
    }


    /* Number */

    .lgm-whatsapp span{
      position:relative;
      z-index:2;

      font-size:11px !important;

      font-weight:800 !important;

      letter-spacing:.15px;

      white-space:nowrap;
    }


    /* Subtle shine */

    .lgm-whatsapp::before{
      content:"";

      position:absolute;

      top:0;
      left:-80%;

      width:45%;
      height:100%;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(255,255,255,.20),
          transparent
        );

      transform:skewX(-20deg);

      transition:left .7s ease;
    }


    /* Small live glow */

    .lgm-whatsapp::after{
      content:"";

      position:absolute;

      width:6px;
      height:6px;

      top:6px;
      left:7px;

      border-radius:50%;

      background:#8affbd;

      box-shadow:
        0 0 10px rgba(138,255,189,.75);

      opacity:.9;

      animation:lgmWhatsappPulse 2s ease-in-out infinite;
    }


    /* Hover */

    .lgm-whatsapp:hover{

      color:#ffffff !important;

      background:
        linear-gradient(
          135deg,
          #0d287f 0%,
          #124dc3 55%,
          #268ee8 100%
        ) !important;

      transform:translateY(-2px);

      box-shadow:
        0 12px 26px rgba(16,49,159,.25),
        0 0 0 4px rgba(32,214,123,.07);
    }

    .lgm-whatsapp:hover::before{
      left:145%;
    }

    .lgm-whatsapp:hover i{
      transform:scale(1.08);

      box-shadow:
        0 0 0 4px rgba(32,214,123,.16),
        0 0 14px rgba(32,214,123,.25);
    }


    @keyframes lgmWhatsappPulse{

      0%,100%{
        transform:scale(1);
        opacity:.85;
      }

      50%{
        transform:scale(1.35);
        opacity:1;
      }

    }


    /* Mobile */

    @media(max-width:600px){

      .lgm-whatsapp{
        width:36px !important;
        height:34px !important;

        padding:0 !important;

        border-radius:11px !important;
      }

      .lgm-whatsapp span{
        display:none !important;
      }

      .lgm-whatsapp::after{
        display:none;
      }

      .lgm-whatsapp i{
        width:20px;
        height:20px;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: FLOATING WHATSAPP BUTTON
   FIXED RIGHT SIDE
========================================= */

(() => {

  if (document.getElementById("lgmFloatingWhatsapp")) return;

  /* ---------- HTML ---------- */

  const button = document.createElement("a");

  button.id = "lgmFloatingWhatsapp";

  button.href = "https://wa.me/923180611884";
  button.target = "_blank";
  button.rel = "noopener noreferrer";

  button.innerHTML = `
    <span class="lgm-wa-icon">
      <i class="fa-brands fa-whatsapp"></i>
    </span>

    <span class="lgm-wa-text">
      <small>CHAT WITH US</small>
      WhatsApp
    </span>

    <i class="fa-solid fa-arrow-up-right-from-square lgm-wa-arrow"></i>
  `;

  document.body.appendChild(button);


  /* ---------- CSS ---------- */

  const style = document.createElement("style");

  style.id = "lgmFloatingWhatsappStyles";

  style.textContent = `

    #lgmFloatingWhatsapp{
      position:fixed;

      right:22px;
      bottom:25px;

      z-index:9999;

      min-width:175px;
      height:58px;

      padding:7px 13px 7px 8px;

      display:flex;
      align-items:center;

      gap:10px;

      color:#ffffff;

      background:
        linear-gradient(
          135deg,
          #10319F 0%,
          #185cd2 55%,
          #319FFF 100%
        );

      border:1px solid rgba(255,255,255,.18);

      border-radius:18px;

      box-shadow:
        0 14px 35px rgba(16,49,159,.28),
        0 0 0 1px rgba(16,49,159,.05);

      text-decoration:none;

      overflow:hidden;

      transition:
        transform .28s ease,
        box-shadow .28s ease,
        width .28s ease;
    }


    /* WhatsApp circle */

    #lgmFloatingWhatsapp .lgm-wa-icon{

      position:relative;

      width:42px;
      height:42px;

      flex:none;

      display:grid;
      place-items:center;

      background:#20D67B;

      color:#ffffff;

      border-radius:50%;

      font-size:20px;

      box-shadow:
        0 0 0 4px rgba(32,214,123,.12);

      animation:lgmWaPulse 2.2s ease-in-out infinite;
    }


    /* Text */

    #lgmFloatingWhatsapp .lgm-wa-text{

      display:flex;
      flex-direction:column;

      line-height:1.1;

      font-size:13px;
      font-weight:800;

      white-space:nowrap;
    }

    #lgmFloatingWhatsapp .lgm-wa-text small{

      margin-bottom:3px;

      color:#beddff;

      font-size:8px;

      font-weight:800;

      letter-spacing:1.3px;
    }


    /* Arrow */

    #lgmFloatingWhatsapp .lgm-wa-arrow{

      margin-left:auto;

      color:rgba(255,255,255,.75);

      font-size:11px;

      transition:.25s;
    }


    /* Shine */

    #lgmFloatingWhatsapp::before{

      content:"";

      position:absolute;

      top:0;
      left:-80%;

      width:45%;
      height:100%;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(255,255,255,.22),
          transparent
        );

      transform:skewX(-20deg);

      transition:left .7s ease;
    }


    /* Hover */

    #lgmFloatingWhatsapp:hover{

      color:#ffffff;

      transform:
        translateY(-4px)
        scale(1.02);

      box-shadow:
        0 20px 42px rgba(16,49,159,.34),
        0 0 0 4px rgba(32,214,123,.07);
    }

    #lgmFloatingWhatsapp:hover::before{
      left:145%;
    }

    #lgmFloatingWhatsapp:hover .lgm-wa-arrow{
      transform:translate(2px,-2px);
      color:#ffffff;
    }


    /* Pulse */

    @keyframes lgmWaPulse{

      0%,100%{
        box-shadow:
          0 0 0 4px rgba(32,214,123,.12),
          0 0 0 rgba(32,214,123,0);
      }

      50%{
        box-shadow:
          0 0 0 7px rgba(32,214,123,.05),
          0 0 18px rgba(32,214,123,.25);
      }

    }


    /* Mobile */

    @media(max-width:600px){

      #lgmFloatingWhatsapp{

        right:15px;
        bottom:16px;

        min-width:0;

        width:54px;
        height:54px;

        padding:0;

        justify-content:center;

        border-radius:16px;
      }

      #lgmFloatingWhatsapp .lgm-wa-icon{
        width:42px;
        height:42px;
      }

      #lgmFloatingWhatsapp .lgm-wa-text,
      #lgmFloatingWhatsapp .lgm-wa-arrow{
        display:none;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: FIX 4TH ACCESSORY IMAGE
========================================= */

(() => {

  const laptopStand = accessories.find(
    item => item.name === "Laptop Stand"
  );

  if (laptopStand) {
    laptopStand.image =
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=85";
  }

  renderAccessories();

})();
/* =========================================
   PATCH: CORRECT LAPTOP STAND IMAGE
========================================= */

(() => {

  const laptopStand = accessories.find(
    item => item.name === "Laptop Stand"
  );

  if (laptopStand) {
    laptopStand.image =
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=700&q=85";
  }

  renderAccessories();

})();/* =========================================
   PATCH: ACTUAL LAPTOP STAND IMAGE
========================================= */

(() => {

  const laptopStand = accessories.find(
    item => item.name === "Laptop Stand"
  );

  if (laptopStand) {
    laptopStand.image =
      "https://i5.walmartimages.com/asr/b9b2ea19-b5ca-454f-8682-7afb3a0d1c4e.b0a9f5e7c03b34f7857ccad62d79d206.jpeg";
  }

  renderAccessories();

})();/* =========================================
   PATCH: PREMIUM LAPTOP GENERATION MULTAN LOGO
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  if (document.getElementById("lgmPremiumLogoPatch")) return;

  const logoMarkup = `
    <span class="lgm-premium-mark">

      <svg
        viewBox="0 0 70 70"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >

        <defs>

          <linearGradient
            id="lgmBlueGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#319FFF"/>
            <stop offset="100%" stop-color="#10319F"/>
          </linearGradient>

          <linearGradient
            id="lgmYellowGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#FFD65A"/>
            <stop offset="100%" stop-color="#FABB1A"/>
          </linearGradient>

        </defs>


        <!-- Laptop screen -->

        <rect
          x="11"
          y="12"
          width="48"
          height="34"
          rx="8"
          fill="url(#lgmBlueGradient)"
        />


        <!-- Inner screen -->

        <rect
          x="16"
          y="17"
          width="38"
          height="24"
          rx="5"
          fill="#0B1D5C"
          opacity=".95"
        />


        <!-- Custom LG monogram -->

        <path
          d="M24 33
             V23
             Q24 20 27 20
             H34"
          fill="none"
          stroke="#ffffff"
          stroke-width="3.4"
          stroke-linecap="round"
        />

        <path
          d="M29 33
             H36
             V28"
          fill="none"
          stroke="url(#lgmYellowGradient)"
          stroke-width="3.4"
          stroke-linecap="round"
        />

        <path
          d="M40 22
             Q47 22 47 29
             Q47 36 40 36
             Q34 36 34 29
             Q34 22 40 22Z"
          fill="none"
          stroke="#ffffff"
          stroke-width="3.2"
        />

        <path
          d="M40 29 H47"
          stroke="#FABB1A"
          stroke-width="3.2"
          stroke-linecap="round"
        />


        <!-- Laptop base -->

        <path
          d="M8 49
             H62
             L57 55
             H13
             Z"
          fill="url(#lgmBlueGradient)"
        />


        <!-- Base line -->

        <rect
          x="25"
          y="49"
          width="20"
          height="2.8"
          rx="1.4"
          fill="#FABB1A"
        />


        <!-- Orbit accent -->

        <path
          d="M13 17
             Q29 4 49 10"
          fill="none"
          stroke="url(#lgmYellowGradient)"
          stroke-width="2.8"
          stroke-linecap="round"
        />

        <circle
          cx="50"
          cy="10"
          r="2.8"
          fill="#FABB1A"
        />

      </svg>

    </span>

    <span class="lgm-premium-wordmark">
      <span class="lgm-main-name">
        Laptop <strong>Generation</strong>
      </span>

      <span class="lgm-city-name">
        <i></i>
        MULTAN
        <i></i>
      </span>
    </span>
  `;


  /* Replace all existing website logos */

  document.querySelectorAll(".logo").forEach(logo => {

    logo.innerHTML = logoMarkup;

    logo.classList.add("lgm-premium-logo");

  });


  /* Inject premium logo styling */

  const style = document.createElement("style");

  style.id = "lgmPremiumLogoPatch";

  style.textContent = `

    /* =========================================
       MAIN LOGO
    ========================================= */

    .lgm-premium-logo{

      display:inline-flex !important;

      align-items:center !important;

      gap:11px !important;

      text-decoration:none !important;

      color:#101936 !important;

      transition:
        transform .25s ease,
        opacity .25s ease;
    }


    .lgm-premium-logo:hover{

      transform:translateY(-1px);

    }


    /* =========================================
       ICON
    ========================================= */

    .lgm-premium-mark{

      width:48px;
      height:48px;

      flex:none;

      display:flex;

      align-items:center;
      justify-content:center;

      border-radius:14px;

      background:
        linear-gradient(
          145deg,
          #f5f9ff,
          #eaf2ff
        );

      border:1px solid #dce7f8;

      box-shadow:
        0 8px 22px rgba(16,49,159,.10),
        inset 0 1px 0 rgba(255,255,255,.9);

      transition:
        transform .3s ease,
        box-shadow .3s ease,
        border-color .3s ease;
    }


    .lgm-premium-mark svg{

      width:40px;
      height:40px;

      display:block;

      overflow:visible;
    }


    .lgm-premium-logo:hover
    .lgm-premium-mark{

      transform:
        translateY(-2px)
        scale(1.03);

      border-color:#bfd3f7;

      box-shadow:
        0 12px 28px rgba(16,49,159,.15),
        0 0 0 4px rgba(49,159,255,.05);
    }


    /* =========================================
       WORDMARK
    ========================================= */

    .lgm-premium-wordmark{

      display:flex;

      flex-direction:column;

      justify-content:center;

      line-height:1;

    }


    .lgm-main-name{

      color:#101936;

      font-family:
        "Plus Jakarta Sans",
        Inter,
        sans-serif;

      font-size:16px;

      font-weight:700;

      letter-spacing:-.4px;

      white-space:nowrap;
    }


    .lgm-main-name strong{

      color:#10319F;

      font-weight:800;
    }


    /* =========================================
       MULTAN
    ========================================= */

    .lgm-city-name{

      display:flex;

      align-items:center;

      justify-content:flex-start;

      gap:5px;

      margin-top:6px;

      color:#10319F;

      font-size:8px;

      font-weight:900;

      letter-spacing:3px;

    }


    .lgm-city-name i{

      display:block;

      width:8px;
      height:2px;

      border-radius:2px;

      background:#FABB1A;
    }


    /* =========================================
       RESPONSIVE
    ========================================= */

    @media(max-width:600px){

      .lgm-premium-mark{

        width:42px;
        height:42px;

        border-radius:12px;
      }

      .lgm-premium-mark svg{

        width:35px;
        height:35px;
      }

      .lgm-main-name{

        font-size:13px;
      }

      .lgm-city-name{

        font-size:7px;

        letter-spacing:2.4px;

        margin-top:5px;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: JUST LANDED + PREMIUM NEW BADGES
   LAPTOP GENERATION MULTAN THEME
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  if (document.getElementById("lgmInventoryBadgePatch")) return;

  /* ---------- ADD "JUST LANDED" BADGE ---------- */

  const inventorySection = document.getElementById("inventory");

  if (inventorySection) {

    const heading = inventorySection.querySelector(".section-heading");

    if (heading && !document.getElementById("lgmJustLanded")) {

      const landed = document.createElement("div");

      landed.id = "lgmJustLanded";

      landed.innerHTML = `
        <span class="lgm-live-dot"></span>
        <span>JUST LANDED</span>
      `;

      heading.insertBefore(landed, heading.firstChild);
    }
  }


  /* ---------- CHANGE PRODUCT BADGES ---------- */

  document.querySelectorAll("#inventory .product-badge").forEach(badge => {

    badge.textContent = "NEW";

    badge.classList.add("lgm-new-product-badge");

  });


  /* ---------- ADD STYLES ---------- */

  const style = document.createElement("style");

  style.id = "lgmInventoryBadgePatch";

  style.textContent = `

    /* =========================================
       JUST LANDED
    ========================================= */

    #lgmJustLanded{

      width:max-content;

      display:inline-flex;
      align-items:center;
      gap:8px;

      margin-bottom:14px;

      padding:8px 13px;

      border-radius:999px;

      color:#10319F;

      background:
        linear-gradient(
          135deg,
          #f4f8ff,
          #eaf2ff
        );

      border:1px solid #cddcf6;

      box-shadow:
        0 8px 22px rgba(16,49,159,.07);

      font-size:10px;
      font-weight:900;

      letter-spacing:1.7px;

      transition:
        transform .25s ease,
        box-shadow .25s ease,
        border-color .25s ease;
    }


    #lgmJustLanded:hover{

      transform:translateY(-2px);

      border-color:#aac4f1;

      box-shadow:
        0 12px 28px rgba(16,49,159,.11);
    }


    /* =========================================
       LIVE DOT
    ========================================= */

    .lgm-live-dot{

      position:relative;

      width:8px;
      height:8px;

      flex:none;

      border-radius:50%;

      background:#FABB1A;

      box-shadow:
        0 0 0 4px rgba(250,187,26,.10);

      animation:
        lgmLandingPulse 1.8s ease-out infinite;
    }


    .lgm-live-dot::before{

      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:8px;
      height:8px;

      border-radius:50%;

      background:rgba(250,187,26,.35);

      transform:
        translate(-50%,-50%)
        scale(1);

      animation:
        lgmLandingRipple 1.8s ease-out infinite;
    }


    .lgm-live-dot::after{

      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:18px;
      height:18px;

      border-radius:50%;

      border:1px solid rgba(250,187,26,.25);

      transform:
        translate(-50%,-50%)
        scale(.5);

      animation:
        lgmLandingRing 1.8s ease-out infinite;
    }


    /* =========================================
       PRODUCT NEW BADGE
    ========================================= */

    #inventory .lgm-new-product-badge{

      display:inline-flex !important;

      align-items:center;
      gap:6px;

      padding:7px 10px !important;

      color:#ffffff !important;

      background:
        linear-gradient(
          135deg,
          #10319F,
          #185fd8
        ) !important;

      border:1px solid rgba(255,255,255,.14);

      border-radius:999px !important;

      font-size:9px !important;

      font-weight:900 !important;

      letter-spacing:1px;

      box-shadow:
        0 7px 18px rgba(16,49,159,.17);

      backdrop-filter:blur(8px);

      transition:
        transform .25s ease,
        box-shadow .25s ease;
    }


    /* Tiny live dot inside NEW */

    #inventory .lgm-new-product-badge::before{

      content:"";

      width:6px;
      height:6px;

      flex:none;

      border-radius:50%;

      background:#FABB1A;

      box-shadow:
        0 0 0 3px rgba(250,187,26,.10);

      animation:
        lgmNewPulse 1.7s ease-out infinite;
    }


    #inventory .product:hover
    .lgm-new-product-badge{

      transform:translateY(-1px);

      box-shadow:
        0 9px 22px rgba(16,49,159,.22);
    }


    /* =========================================
       ANIMATIONS
    ========================================= */

    @keyframes lgmLandingPulse{

      0%,100%{
        box-shadow:
          0 0 0 4px rgba(250,187,26,.10),
          0 0 0 rgba(250,187,26,0);
      }

      50%{
        box-shadow:
          0 0 0 5px rgba(250,187,26,.14),
          0 0 14px 2px rgba(250,187,26,.20);
      }

    }


    @keyframes lgmLandingRipple{

      0%{
        opacity:.55;

        transform:
          translate(-50%,-50%)
          scale(1);
      }

      70%,100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(2.7);
      }

    }


    @keyframes lgmLandingRing{

      0%{
        opacity:.35;

        transform:
          translate(-50%,-50%)
          scale(.5);
      }

      70%,100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(1.7);
      }

    }


    @keyframes lgmNewPulse{

      0%,100%{
        opacity:1;
        transform:scale(1);
      }

      50%{
        opacity:.55;
        transform:scale(1.35);
      }

    }


    /* =========================================
       MOBILE
    ========================================= */

    @media(max-width:600px){

      #lgmJustLanded{

        font-size:9px;

        padding:7px 11px;

        letter-spacing:1.4px;
      }

      #inventory .lgm-new-product-badge{

        padding:6px 9px !important;

        font-size:8px !important;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: REFERENCE-STYLE BADGE COLORS
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  if (document.getElementById("lgmReferenceBadgeColors")) return;

  const style = document.createElement("style");

  style.id = "lgmReferenceBadgeColors";

  style.textContent = `

    /* =========================================
       JUST LANDED — REFERENCE COLORS
    ========================================= */

    #lgmJustLanded{
      color:#C4B5FD !important;

      background:#1A1726 !important;

      border:1px solid #403762 !important;

      box-shadow:
        0 0 0 1px rgba(196,181,253,.03),
        inset 0 1px 0 rgba(255,255,255,.03) !important;
    }

    #lgmJustLanded .lgm-live-dot{
      background:#4ADE80 !important;

      box-shadow:
        0 0 0 4px rgba(74,222,128,.10),
        0 0 12px rgba(74,222,128,.22) !important;
    }

    #lgmJustLanded .lgm-live-dot::before{
      background:rgba(74,222,128,.34) !important;
    }

    #lgmJustLanded .lgm-live-dot::after{
      border-color:rgba(74,222,128,.24) !important;
    }


    /* =========================================
       NEW — REFERENCE COLORS
    ========================================= */

    #inventory .lgm-new-product-badge{

      color:#4ADE80 !important;

      background:#18322E !important;

      border:1px solid #286A54 !important;

      box-shadow:
        0 5px 16px rgba(20,60,48,.22) !important;

      backdrop-filter:blur(7px);

    }

    #inventory .lgm-new-product-badge::before{

      background:#4ADE80 !important;

      box-shadow:
        0 0 0 3px rgba(74,222,128,.10),
        0 0 10px rgba(74,222,128,.28) !important;

    }


    /* =========================================
       MORE REFERENCE-LIKE HOVER
    ========================================= */

    #inventory .product:hover
    .lgm-new-product-badge{

      background:#1B3933 !important;

      border-color:#328165 !important;

      color:#5AEF8C !important;
    }


    /* =========================================
       LIVE DOT ANIMATION
    ========================================= */

    #lgmJustLanded .lgm-live-dot,
    #inventory .lgm-new-product-badge::before{

      animation:
        lgmReferencePulse 1.8s ease-in-out infinite !important;
    }


    @keyframes lgmReferencePulse{

      0%,100%{
        opacity:1;
        transform:scale(1);
      }

      50%{
        opacity:.62;
        transform:scale(1.22);
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: CHANGE JUST LANDED TO NEW ARRIVALS
========================================= */

(() => {

  const badge = document.getElementById("lgmJustLanded");

  if (badge) {
    badge.querySelector("span:last-child").textContent = "NEW ARRIVALS";
  }

})();/* =========================================
   PATCH: PREMIUM NEW ARRIVALS BADGE
========================================= */

(() => {

  if (document.getElementById("lgmNewArrivalsPremium")) return;

  const oldBadge = document.getElementById("lgmJustLanded");

  if (!oldBadge) return;

  oldBadge.id = "lgmNewArrivalsPremium";

  const text = oldBadge.querySelector("span:last-child");

  if (text) {
    text.textContent = "NEW ARRIVALS";
  }

  const style = document.createElement("style");

  style.id = "lgmNewArrivalsPremiumStyles";

  style.textContent = `

    #lgmNewArrivalsPremium{

      display:inline-flex !important;
      align-items:center !important;
      gap:8px !important;

      width:max-content !important;

      margin-bottom:15px !important;

      padding:8px 13px !important;

      color:#10319F !important;

      background:
        linear-gradient(
          135deg,
          #F7FAFF 0%,
          #EDF4FF 100%
        ) !important;

      border:1px solid #C8D9F5 !important;

      border-radius:12px !important;

      box-shadow:
        0 7px 20px rgba(16,49,159,.07),
        inset 0 1px 0 rgba(255,255,255,.9) !important;

      font-size:10px !important;

      font-weight:900 !important;

      letter-spacing:1.5px !important;

      transition:
        .25s ease !important;
    }


    #lgmNewArrivalsPremium:hover{

      transform:translateY(-2px) !important;

      border-color:#AFC8F3 !important;

      box-shadow:
        0 11px 25px rgba(16,49,159,.11) !important;
    }


    /* Green live signal */

    #lgmNewArrivalsPremium .lgm-live-dot{

      position:relative !important;

      width:8px !important;
      height:8px !important;

      flex:none !important;

      border-radius:50% !important;

      background:#35D982 !important;

      box-shadow:
        0 0 0 4px rgba(53,217,130,.10),
        0 0 10px rgba(53,217,130,.20) !important;

      animation:
        lgmPremiumLivePulse 1.8s ease-out infinite !important;
    }


    #lgmNewArrivalsPremium .lgm-live-dot::before{

      content:"" !important;

      position:absolute !important;

      top:50% !important;
      left:50% !important;

      width:8px !important;
      height:8px !important;

      border-radius:50% !important;

      background:rgba(53,217,130,.35) !important;

      transform:
        translate(-50%,-50%)
        scale(1) !important;

      animation:
        lgmPremiumLiveRipple 1.8s ease-out infinite !important;
    }


    @keyframes lgmPremiumLivePulse{

      0%,100%{
        box-shadow:
          0 0 0 4px rgba(53,217,130,.10),
          0 0 0 rgba(53,217,130,0);
      }

      50%{
        box-shadow:
          0 0 0 5px rgba(53,217,130,.13),
          0 0 13px 2px rgba(53,217,130,.16);
      }

    }


    @keyframes lgmPremiumLiveRipple{

      0%{
        opacity:.55;

        transform:
          translate(-50%,-50%)
          scale(1);
      }

      70%,100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(2.6);
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: PREMIUM FLOATING CALL BUTTON
   LEFT SIDE • INCOMING CALL VIBRATION
========================================= */

(() => {

  if (document.getElementById("lgmFloatingCall")) return;

  /* ---------- CREATE BUTTON ---------- */

  const callButton = document.createElement("a");

  callButton.id = "lgmFloatingCall";

  callButton.href = "tel:03180611884";

  callButton.setAttribute(
    "aria-label",
    "Call Laptop Generation Multan"
  );

  callButton.innerHTML = `
    <span class="lgm-call-icon">
      <i class="fa-solid fa-phone"></i>
    </span>

    <span class="lgm-call-text">
      <small>NEED HELP?</small>
      CALL US
    </span>
  `;

  document.body.appendChild(callButton);


  /* ---------- STYLES ---------- */

  const style = document.createElement("style");

  style.id = "lgmFloatingCallStyles";

  style.textContent = `

    /* =====================================
       MAIN CALL BUTTON
    ===================================== */

    #lgmFloatingCall{

      position:fixed;

      left:22px;
      bottom:25px;

      z-index:9999;

      height:58px;
      min-width:155px;

      padding:7px 15px 7px 8px;

      display:flex;
      align-items:center;

      gap:10px;

      color:#ffffff;

      text-decoration:none;

      background:
        linear-gradient(
          135deg,
          #FABB1A 0%,
          #F7C83F 48%,
          #E9A900 100%
        );

      border:1px solid rgba(255,255,255,.5);

      border-radius:18px;

      box-shadow:
        0 14px 35px rgba(183,133,0,.25),
        0 0 0 1px rgba(250,187,26,.05);

      overflow:hidden;

      transition:
        transform .28s ease,
        box-shadow .28s ease;
    }


    /* =====================================
       PHONE CIRCLE
    ===================================== */

    #lgmFloatingCall .lgm-call-icon{

      position:relative;

      width:42px;
      height:42px;

      flex:none;

      display:grid;
      place-items:center;

      color:#17234A;

      background:#ffffff;

      border-radius:50%;

      font-size:17px;

      box-shadow:
        0 0 0 4px rgba(255,255,255,.20);

      animation:
        lgmIncomingCall 1.7s ease-in-out infinite;
    }


    /* =====================================
       CALL TEXT
    ===================================== */

    #lgmFloatingCall .lgm-call-text{

      display:flex;
      flex-direction:column;

      line-height:1.05;

      font-size:12px;
      font-weight:900;

      white-space:nowrap;

      color:#17234A;
    }

    #lgmFloatingCall .lgm-call-text small{

      margin-bottom:3px;

      color:#5E4600;

      font-size:7px;

      font-weight:900;

      letter-spacing:1.2px;
    }


    /* =====================================
       SIGNAL RINGS
    ===================================== */

    #lgmFloatingCall .lgm-call-icon::before{

      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:42px;
      height:42px;

      border-radius:50%;

      border:1px solid rgba(255,255,255,.42);

      transform:
        translate(-50%,-50%)
        scale(.9);

      animation:
        lgmCallRing 1.7s ease-out infinite;
    }


    #lgmFloatingCall .lgm-call-icon::after{

      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:42px;
      height:42px;

      border-radius:50%;

      background:rgba(255,255,255,.14);

      transform:
        translate(-50%,-50%)
        scale(.9);

      animation:
        lgmCallGlow 1.7s ease-out infinite;
    }


    /* =====================================
       SHINE
    ===================================== */

    #lgmFloatingCall::before{

      content:"";

      position:absolute;

      top:0;
      left:-85%;

      width:45%;
      height:100%;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(255,255,255,.45),
          transparent
        );

      transform:skewX(-20deg);

      transition:left .7s ease;
    }


    /* =====================================
       HOVER
    ===================================== */

    #lgmFloatingCall:hover{

      color:#17234A;

      transform:
        translateY(-4px)
        scale(1.02);

      box-shadow:
        0 20px 42px rgba(183,133,0,.30),
        0 0 0 4px rgba(250,187,26,.08);
    }

    #lgmFloatingCall:hover::before{
      left:145%;
    }


    /* =====================================
       PHONE VIBRATION
       LIKE INCOMING CALL
    ===================================== */

    @keyframes lgmIncomingCall{

      0%,100%{
        transform:rotate(0deg);
      }

      10%{
        transform:rotate(-14deg);
      }

      20%{
        transform:rotate(14deg);
      }

      30%{
        transform:rotate(-11deg);
      }

      40%{
        transform:rotate(11deg);
      }

      50%{
        transform:rotate(-7deg);
      }

      60%{
        transform:rotate(7deg);
      }

      70%{
        transform:rotate(0deg);
      }

    }


    /* =====================================
       OUTER RING
    ===================================== */

    @keyframes lgmCallRing{

      0%{
        opacity:.45;

        transform:
          translate(-50%,-50%)
          scale(.92);
      }

      75%,100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(1.65);
      }

    }


    /* =====================================
       SOFT GLOW
    ===================================== */

    @keyframes lgmCallGlow{

      0%,100%{
        opacity:.18;

        transform:
          translate(-50%,-50%)
          scale(.92);
      }

      50%{
        opacity:.05;

        transform:
          translate(-50%,-50%)
          scale(1.18);
      }

    }


    /* =====================================
       MOBILE
    ===================================== */

    @media(max-width:600px){

      #lgmFloatingCall{

        left:15px;
        bottom:16px;

        width:54px;
        min-width:54px;

        height:54px;

        padding:0;

        justify-content:center;

        border-radius:16px;
      }

      #lgmFloatingCall .lgm-call-icon{

        width:42px;
        height:42px;
      }

      #lgmFloatingCall .lgm-call-text{

        display:none;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: SMALL PREMIUM CALL BUTTON
   STRONG VIBRATION + WAVES
========================================= */

(() => {

  const button = document.getElementById("lgmFloatingCall");

  if (!button) return;

  if (document.getElementById("lgmCallFinalPatch")) return;

  const style = document.createElement("style");

  style.id = "lgmCallFinalPatch";

  style.textContent = `

    /* ==============================
       SMALL PREMIUM BUTTON
    ============================== */

    #lgmFloatingCall{

      left:22px !important;
      bottom:22px !important;

      width:auto !important;
      min-width:122px !important;
      height:44px !important;

      padding:4px 13px 4px 6px !important;

      gap:8px !important;

      border-radius:999px !important;

      background:
        linear-gradient(
          135deg,
          #10319F 0%,
          #175DCE 52%,
          #319FFF 100%
        ) !important;

      border:1px solid rgba(255,255,255,.16) !important;

      box-shadow:
        0 10px 24px rgba(16,49,159,.25),
        0 0 0 1px rgba(16,49,159,.04) !important;

      overflow:visible !important;

      transition:
        transform .25s ease,
        box-shadow .25s ease !important;
    }


    /* ==============================
       PHONE ICON
    ============================== */

    #lgmFloatingCall .lgm-call-icon{

      position:relative !important;

      width:34px !important;
      height:34px !important;

      flex:none !important;

      display:grid !important;
      place-items:center !important;

      border-radius:50% !important;

      color:#10319F !important;

      background:#ffffff !important;

      font-size:14px !important;

      box-shadow:
        0 0 0 3px rgba(255,255,255,.12),
        0 4px 10px rgba(0,0,0,.12) !important;

      animation:
        lgmPhoneShake .9s ease-in-out infinite !important;
    }


    /* ==============================
       TEXT
    ============================== */

    #lgmFloatingCall .lgm-call-text{

      color:#ffffff !important;

      font-size:11px !important;
      font-weight:800 !important;

      letter-spacing:.1px !important;

      line-height:1 !important;
    }

    #lgmFloatingCall .lgm-call-text small{
      display:none !important;
    }


    /* ==============================
       WAVE 1
    ============================== */

    #lgmFloatingCall .lgm-call-icon::before{

      content:"" !important;

      position:absolute !important;

      top:50% !important;
      left:50% !important;

      width:36px !important;
      height:36px !important;

      border-radius:50% !important;

      border:2px solid rgba(49,159,255,.58) !important;

      transform:
        translate(-50%,-50%)
        scale(.9) !important;

      animation:
        lgmCallWave 1.6s ease-out infinite !important;
    }


    /* ==============================
       WAVE 2 + 3
    ============================== */

    #lgmFloatingCall .lgm-call-icon::after{

      content:"" !important;

      position:absolute !important;

      top:50% !important;
      left:50% !important;

      width:36px !important;
      height:36px !important;

      border-radius:50% !important;

      border:2px solid rgba(49,159,255,.34) !important;

      transform:
        translate(-50%,-50%)
        scale(.9) !important;

      animation:
        lgmCallWave 1.6s ease-out infinite .45s !important;
    }


    #lgmFloatingCall::after{

      content:"" !important;

      position:absolute !important;

      top:50% !important;
      left:23px !important;

      width:34px !important;
      height:34px !important;

      pointer-events:none !important;

      border-radius:50% !important;

      border:1.5px solid rgba(49,159,255,.18) !important;

      transform:
        translate(-50%,-50%)
        scale(.9) !important;

      animation:
        lgmCallWave 1.6s ease-out infinite .9s !important;
    }


    /* ==============================
       STRONG PHONE VIBRATION
    ============================== */

    @keyframes lgmPhoneShake{

      0%,100%{
        transform:rotate(0deg);
      }

      8%{
        transform:rotate(-18deg);
      }

      16%{
        transform:rotate(18deg);
      }

      24%{
        transform:rotate(-15deg);
      }

      32%{
        transform:rotate(15deg);
      }

      40%{
        transform:rotate(-11deg);
      }

      48%{
        transform:rotate(11deg);
      }

      56%{
        transform:rotate(-6deg);
      }

      64%{
        transform:rotate(6deg);
      }

      72%,100%{
        transform:rotate(0deg);
      }

    }


    /* ==============================
       EXPANDING WAVES
    ============================== */

    @keyframes lgmCallWave{

      0%{
        opacity:.75;

        transform:
          translate(-50%,-50%)
          scale(.82);
      }

      70%{
        opacity:.20;
      }

      100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(2.15);
      }

    }


    /* ==============================
       HOVER
    ============================== */

    #lgmFloatingCall:hover{

      transform:translateY(-3px) !important;

      box-shadow:
        0 15px 30px rgba(16,49,159,.32),
        0 0 0 4px rgba(49,159,255,.07) !important;
    }


    #lgmFloatingCall:hover
    .lgm-call-icon{

      background:#ffffff !important;

      box-shadow:
        0 0 0 4px rgba(255,255,255,.17),
        0 5px 13px rgba(0,0,0,.14) !important;
    }


    /* ==============================
       MOBILE
    ============================== */

    @media(max-width:600px){

      #lgmFloatingCall{

        left:14px !important;
        bottom:14px !important;

        min-width:52px !important;

        width:52px !important;
        height:52px !important;

        padding:0 !important;

        justify-content:center !important;

        border-radius:16px !important;
      }

      #lgmFloatingCall .lgm-call-icon{

        width:38px !important;
        height:38px !important;
      }

      #lgmFloatingCall .lgm-call-text{
        display:none !important;
      }

    }

  `;

  document.head.appendChild(style);

})();/* PATCH: YELLOW PREMIUM CALL BUTTON */

(() => {

  const button = document.getElementById("lgmFloatingCall");

  if (!button) return;

  const style = document.createElement("style");

  style.textContent = `

    #lgmFloatingCall{
      background:
        linear-gradient(
          135deg,
          #FABB1A 0%,
          #FFD45A 50%,
          #F2B400 100%
        ) !important;

      box-shadow:
        0 10px 24px rgba(190,145,0,.24),
        0 0 0 1px rgba(250,187,26,.08) !important;
    }

    #lgmFloatingCall .lgm-call-icon{
      color:#10319F !important;
      background:#ffffff !important;
    }

    #lgmFloatingCall .lgm-call-text{
      color:#17234A !important;
    }

    #lgmFloatingCall .lgm-call-icon::before{
      border-color:rgba(16,49,159,.38) !important;
    }

    #lgmFloatingCall .lgm-call-icon::after{
      border-color:rgba(16,49,159,.22) !important;
    }

    #lgmFloatingCall::after{
      border-color:rgba(16,49,159,.15) !important;
    }

    #lgmFloatingCall:hover{
      box-shadow:
        0 15px 30px rgba(190,145,0,.32),
        0 0 0 4px rgba(250,187,26,.10) !important;
    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: CALL BUTTON POPUP CARD
   CLICK CALL US -> SHOW SMALL INFO CARD
========================================= */

(() => {

  const callButton = document.getElementById("lgmFloatingCall");

  if (!callButton) return;

  if (document.getElementById("lgmCallPopupPatch")) return;

  /* Remove direct call behavior from floating button */
  callButton.removeAttribute("href");

  callButton.href = "javascript:void(0)";

  /* ==============================
     CREATE POPUP
  ============================== */

  const popup = document.createElement("div");

  popup.id = "lgmCallPopup";

  popup.innerHTML = `
    <div class="lgm-call-popup-inner">

      <button
        class="lgm-call-popup-close"
        id="lgmCallPopupClose"
        aria-label="Close"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="lgm-call-popup-icon">
        <i class="fa-solid fa-headset"></i>
      </div>

      <div class="lgm-call-popup-label">
        SALES SUPPORT AGENT
      </div>

      <h3>
        Call Us Now for the Best Deal!
      </h3>

      <div class="lgm-call-popup-number">
        <span class="lgm-popup-phone-icon">
          <i class="fa-solid fa-phone"></i>
        </span>

        <a href="tel:+923041113005">
          0304 1113005
        </a>
      </div>

      <div class="lgm-call-popup-location">
        <i class="fa-solid fa-location-dot"></i>

        <div>
          <strong>Store Location</strong>
          <span>
            Shop No. 1, Multan Cantt,<br>
            Khan Plaza Outside
          </span>
        </div>
      </div>

      <a
        class="lgm-popup-call-btn"
        href="tel:+923041113005"
      >
        <i class="fa-solid fa-phone"></i>
        Call Now
      </a>

    </div>
  `;

  document.body.appendChild(popup);


  /* ==============================
     STYLES
  ============================== */

  const style = document.createElement("style");

  style.id = "lgmCallPopupPatch";

  style.textContent = `

    /* =================================
       POPUP
    ================================= */

    #lgmCallPopup{

      position:fixed;

      left:22px;
      bottom:78px;

      z-index:10000;

      width:285px;

      opacity:0;
      visibility:hidden;

      transform:
        translateY(12px)
        scale(.96);

      transform-origin:
        bottom left;

      transition:
        opacity .22s ease,
        transform .22s ease,
        visibility .22s ease;
    }


    #lgmCallPopup.open{

      opacity:1;
      visibility:visible;

      transform:
        translateY(0)
        scale(1);
    }


    /* =================================
       CARD
    ================================= */

    .lgm-call-popup-inner{

      position:relative;

      padding:20px;

      background:#ffffff;

      border:1px solid #e5ebf5;

      border-radius:18px;

      box-shadow:
        0 22px 55px rgba(11,30,85,.18),
        0 5px 18px rgba(16,49,159,.08);

    }


    /* Small arrow pointing downward */

    .lgm-call-popup-inner::after{

      content:"";

      position:absolute;

      left:38px;
      bottom:-8px;

      width:15px;
      height:15px;

      background:#ffffff;

      border-right:1px solid #e5ebf5;
      border-bottom:1px solid #e5ebf5;

      transform:rotate(45deg);
    }


    /* =================================
       CLOSE BUTTON
    ================================= */

    .lgm-call-popup-close{

      position:absolute;

      top:10px;
      right:10px;

      width:28px;
      height:28px;

      display:grid;
      place-items:center;

      color:#7a8499;

      background:#f4f7fb;

      border-radius:9px;

      font-size:11px;

      transition:.2s;
    }

    .lgm-call-popup-close:hover{

      color:#10319F;

      background:#eaf2ff;
    }


    /* =================================
       ICON
    ================================= */

    .lgm-call-popup-icon{

      width:42px;
      height:42px;

      display:grid;
      place-items:center;

      margin-bottom:12px;

      color:#10319F;

      background:
        linear-gradient(
          135deg,
          #eef5ff,
          #e4efff
        );

      border:1px solid #d6e4fa;

      border-radius:12px;

      font-size:17px;
    }


    /* =================================
       LABEL
    ================================= */

    .lgm-call-popup-label{

      margin-bottom:5px;

      color:#10319F;

      font-size:9px;

      font-weight:900;

      letter-spacing:1.5px;
    }


    /* =================================
       HEADING
    ================================= */

    .lgm-call-popup-inner h3{

      margin:0 25px 16px 0;

      color:#101936;

      font-family:
        "Plus Jakarta Sans",
        Inter,
        sans-serif;

      font-size:17px;

      line-height:1.2;

      letter-spacing:-.35px;
    }


    /* =================================
       NUMBER
    ================================= */

    .lgm-call-popup-number{

      display:flex;

      align-items:center;

      gap:9px;

      margin-bottom:16px;
    }


    .lgm-popup-phone-icon{

      width:31px;
      height:31px;

      flex:none;

      display:grid;
      place-items:center;

      color:#10319F;

      background:#eff5ff;

      border-radius:9px;

      font-size:11px;
    }


    .lgm-call-popup-number a{

      color:#17264d;

      font-size:14px;

      font-weight:900;

      text-decoration:none;
    }


    .lgm-call-popup-number a:hover{
      color:#10319F;
    }


    /* =================================
       LOCATION
    ================================= */

    .lgm-call-popup-location{

      display:flex;

      gap:10px;

      padding-top:14px;

      margin-bottom:16px;

      border-top:1px solid #edf1f7;
    }


    .lgm-call-popup-location>i{

      margin-top:2px;

      color:#10319F;

      font-size:13px;
    }


    .lgm-call-popup-location strong{

      display:block;

      margin-bottom:3px;

      color:#35405a;

      font-size:10px;

      font-weight:800;

      text-transform:uppercase;

      letter-spacing:.8px;
    }


    .lgm-call-popup-location span{

      display:block;

      color:#7a8498;

      font-size:10px;

      line-height:1.5;
    }


    /* =================================
       CALL NOW BUTTON
    ================================= */

    .lgm-popup-call-btn{

      width:100%;

      min-height:41px;

      display:flex;

      align-items:center;
      justify-content:center;

      gap:8px;

      color:#17234A;

      background:
        linear-gradient(
          135deg,
          #FABB1A,
          #FFD35B
        );

      border-radius:12px;

      font-size:11px;

      font-weight:900;

      text-decoration:none;

      box-shadow:
        0 8px 18px rgba(190,145,0,.16);

      transition:.25s;
    }


    .lgm-popup-call-btn:hover{

      transform:translateY(-2px);

      box-shadow:
        0 11px 23px rgba(190,145,0,.23);
    }


    /* =================================
       MOBILE
    ================================= */

    @media(max-width:600px){

      #lgmCallPopup{

        left:14px;
        bottom:75px;

        width:
          min(285px,calc(100vw - 28px));
      }

      .lgm-call-popup-inner{
        padding:18px;
      }

    }

  `;

  document.head.appendChild(style);


  /* ==============================
     OPEN / CLOSE
  ============================== */

  callButton.addEventListener("click", (e) => {

    e.preventDefault();

    popup.classList.toggle("open");

  });


  document
    .getElementById("lgmCallPopupClose")
    .addEventListener("click", () => {

      popup.classList.remove("open");

    });


  /* Click outside -> close */

  document.addEventListener("click", (e) => {

    if (
      popup.classList.contains("open") &&
      !popup.contains(e.target) &&
      !callButton.contains(e.target)
    ) {

      popup.classList.remove("open");

    }

  });

})();/* =========================================
   PATCH: ORIGINAL SHOP LOCATION EVERYWHERE
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  const shopAddress =
    "Shop No. 1, Multan Cantt, Khan Plaza Outside, Multan, Pakistan";

  const shopMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(shopAddress);


  /* =========================================
     1. UPDATE ALL EXISTING MAP / LOCATION LINKS
  ========================================= */

  document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href") || "";

    if (
      href.includes("maps.google.com") ||
      href.includes("maps.app.goo.gl") ||
      href.includes("google.com/maps")
    ) {
      link.href = shopMapsUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

  });


  /* =========================================
     2. MAKE CALL POPUP LOCATION CLICKABLE
  ========================================= */

  const popupLocation = document.querySelector(
    "#lgmCallPopup .lgm-call-popup-location"
  );

  if (popupLocation && !popupLocation.dataset.locationLinked) {

    popupLocation.dataset.locationLinked = "true";

    popupLocation.style.cursor = "pointer";

    popupLocation.title = "Open shop location in Google Maps";

    popupLocation.addEventListener("click", () => {

      window.open(
        shopMapsUrl,
        "_blank",
        "noopener,noreferrer"
      );

    });

  }


  /* =========================================
     3. HOVER STYLE FOR LOCATION
  ========================================= */

  if (!document.getElementById("lgmShopLocationPatch")) {

    const style = document.createElement("style");

    style.id = "lgmShopLocationPatch";

    style.textContent = `

      #lgmCallPopup .lgm-call-popup-location{
        transition:
          background .22s ease,
          transform .22s ease;
      }

      #lgmCallPopup .lgm-call-popup-location:hover{
        background:#f3f7ff;
        border-radius:10px;
        padding-left:8px;
        padding-right:8px;
        transform:translateY(-1px);
      }

      #lgmCallPopup .lgm-call-popup-location:hover i{
        color:#319FFF;
      }

    `;

    document.head.appendChild(style);

  }

})();/* =========================================
   PATCH: SOFT ORIGINAL SOCIAL COLORS
   FACEBOOK • INSTAGRAM • WHATSAPP
========================================= */

(() => {

  if (document.getElementById("lgmSocialSoftPatch")) return;

  const style = document.createElement("style");

  style.id = "lgmSocialSoftPatch";

  style.textContent = `

    /* =====================================
       BASE SOCIAL BUTTON
    ===================================== */

    .socials a{

      position:relative;

      width:37px !important;
      height:37px !important;

      display:grid !important;
      place-items:center !important;

      border-radius:11px !important;

      border:1px solid rgba(255,255,255,.08) !important;

      transition:
        transform .25s ease,
        box-shadow .25s ease,
        background .25s ease,
        border-color .25s ease !important;
    }


    /* =====================================
       FACEBOOK
    ===================================== */

    .socials a:nth-child(1){

      color:#6FA8FF !important;

      background:
        rgba(24,119,242,.13) !important;

      border-color:
        rgba(24,119,242,.18) !important;
    }


    /* =====================================
       INSTAGRAM
    ===================================== */

    .socials a:nth-child(2){

      color:#E8A6C6 !important;

      background:
        linear-gradient(
          135deg,
          rgba(131,58,180,.12),
          rgba(225,48,108,.12),
          rgba(252,175,69,.11)
        ) !important;

      border-color:
        rgba(225,48,108,.16) !important;
    }


    /* =====================================
       WHATSAPP
    ===================================== */

    .socials a:nth-child(3){

      color:#66DCA0 !important;

      background:
        rgba(37,211,102,.12) !important;

      border-color:
        rgba(37,211,102,.17) !important;
    }


    /* =====================================
       HOVER
    ===================================== */

    .socials a:nth-child(1):hover{

      color:#8DBBFF !important;

      background:
        rgba(24,119,242,.21) !important;

      border-color:
        rgba(24,119,242,.30) !important;

      box-shadow:
        0 8px 20px rgba(24,119,242,.14);
    }


    .socials a:nth-child(2):hover{

      color:#F0BCD5 !important;

      background:
        linear-gradient(
          135deg,
          rgba(131,58,180,.18),
          rgba(225,48,108,.17),
          rgba(252,175,69,.15)
        ) !important;

      border-color:
        rgba(225,48,108,.27) !important;

      box-shadow:
        0 8px 20px rgba(225,48,108,.12);
    }


    .socials a:nth-child(3):hover{

      color:#8AE9B9 !important;

      background:
        rgba(37,211,102,.20) !important;

      border-color:
        rgba(37,211,102,.28) !important;

      box-shadow:
        0 8px 20px rgba(37,211,102,.13);
    }


    /* Small premium movement */

    .socials a:hover{

      transform:
        translateY(-2px)
        scale(1.03);
    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: PREMIUM ORIGINAL SOCIAL COLORS
   FACEBOOK • INSTAGRAM • WHATSAPP
========================================= */

(() => {

  if (document.getElementById("lgmSocialPremiumPatch")) return;

  const style = document.createElement("style");
  style.id = "lgmSocialPremiumPatch";

  style.textContent = `

    /* ==============================
       COMMON
    ============================== */

    .socials a{

      position:relative;

      width:38px !important;
      height:38px !important;

      display:grid !important;
      place-items:center !important;

      border-radius:11px !important;

      background:#111e48 !important;

      border:1px solid rgba(255,255,255,.09) !important;

      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.04),
        0 6px 16px rgba(0,0,0,.10);

      transition:
        transform .25s ease,
        background .25s ease,
        border-color .25s ease,
        box-shadow .25s ease !important;
    }


    /* ==============================
       FACEBOOK — ORIGINAL BLUE
    ============================== */

    .socials a:nth-child(1){
      color:#1877F2 !important;
    }

    .socials a:nth-child(1):hover{

      background:rgba(24,119,242,.14) !important;

      border-color:rgba(24,119,242,.35) !important;

      box-shadow:
        0 8px 22px rgba(24,119,242,.16),
        inset 0 1px 0 rgba(255,255,255,.04);
    }


    /* ==============================
       INSTAGRAM — ORIGINAL GRADIENT
    ============================== */

    .socials a:nth-child(2){

      color:#E1306C !important;
    }

    .socials a:nth-child(2):hover{

      background:
        linear-gradient(
          135deg,
          rgba(131,58,180,.16),
          rgba(225,48,108,.16),
          rgba(252,175,69,.14)
        ) !important;

      border-color:rgba(225,48,108,.30) !important;

      box-shadow:
        0 8px 22px rgba(225,48,108,.14),
        inset 0 1px 0 rgba(255,255,255,.04);
    }


    /* ==============================
       WHATSAPP — ORIGINAL GREEN
    ============================== */

    .socials a:nth-child(3){

      color:#25D366 !important;
    }

    .socials a:nth-child(3):hover{

      background:rgba(37,211,102,.15) !important;

      border-color:rgba(37,211,102,.32) !important;

      box-shadow:
        0 8px 22px rgba(37,211,102,.14),
        inset 0 1px 0 rgba(255,255,255,.04);
    }


    /* ==============================
       PREMIUM HOVER
    ============================== */

    .socials a:hover{

      transform:
        translateY(-3px)
        scale(1.04);
    }


    .socials a i{

      font-size:13px !important;

      transition:
        transform .25s ease,
        filter .25s ease;
    }


    .socials a:hover i{

      transform:scale(1.08);

      filter:
        drop-shadow(0 3px 7px rgba(255,255,255,.10));
    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: TRUE SOCIAL BRAND COLORS
   FACEBOOK • INSTAGRAM • WHATSAPP
========================================= */

(() => {

  if (document.getElementById("lgmExactSocialBrandPatch")) return;

  const style = document.createElement("style");
  style.id = "lgmExactSocialBrandPatch";

  style.textContent = `

    /* =====================================
       COMMON
    ===================================== */

    .socials a{
      width:38px !important;
      height:38px !important;

      display:grid !important;
      place-items:center !important;

      border-radius:11px !important;

      border:1px solid rgba(255,255,255,.10) !important;

      box-shadow:
        0 6px 16px rgba(0,0,0,.14),
        inset 0 1px 0 rgba(255,255,255,.16) !important;

      color:#fff !important;

      transition:
        transform .22s ease,
        box-shadow .22s ease,
        filter .22s ease !important;
    }


    .socials a i{
      color:#fff !important;

      font-size:13px !important;

      line-height:1;

      filter:none !important;
    }


    /* =====================================
       FACEBOOK
       OFFICIAL BRAND BLUE
    ===================================== */

    .socials a:has(.fa-facebook-f){

      background:#1877F2 !important;

      border-color:#1877F2 !important;
    }

    .socials a:has(.fa-facebook-f):hover{

      background:#166FE5 !important;

      border-color:#166FE5 !important;

      transform:
        translateY(-3px)
        scale(1.04);

      box-shadow:
        0 10px 24px rgba(24,119,242,.30),
        inset 0 1px 0 rgba(255,255,255,.18) !important;
    }


    /* =====================================
       INSTAGRAM
       ORIGINAL GRADIENT STYLE
    ===================================== */

    .socials a:has(.fa-instagram){

      background:
        linear-gradient(
          135deg,
          #833AB4 0%,
          #C13584 35%,
          #E1306C 58%,
          #FD1D1D 78%,
          #FCAF45 100%
        ) !important;

      border-color:rgba(255,255,255,.16) !important;
    }

    .socials a:has(.fa-instagram):hover{

      filter:
        brightness(1.08)
        saturate(1.08);

      transform:
        translateY(-3px)
        scale(1.04);

      box-shadow:
        0 10px 24px rgba(225,48,108,.26),
        inset 0 1px 0 rgba(255,255,255,.18) !important;
    }


    /* =====================================
       WHATSAPP
       OFFICIAL BRAND GREEN
    ===================================== */

    .socials a:has(.fa-whatsapp){

      background:#25D366 !important;

      border-color:#25D366 !important;
    }

    .socials a:has(.fa-whatsapp):hover{

      background:#20BD5A !important;

      border-color:#20BD5A !important;

      transform:
        translateY(-3px)
        scale(1.04);

      box-shadow:
        0 10px 24px rgba(37,211,102,.28),
        inset 0 1px 0 rgba(255,255,255,.18) !important;
    }


    /* =====================================
       ICON POLISH
    ===================================== */

    .socials a:hover i{
      transform:scale(1.08);

      transition:
        transform .22s ease !important;
    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: FIXED HERO TEXT + IMAGE PROGRESS LINES
   ONLY IMAGE CHANGES
   JUST PASTE AT THE END OF JS
========================================= */

(() => {

  if (document.getElementById("lgmHeroProgressPatch")) return;

  const heroImage = document.getElementById("heroImage");
  const heroTitle = document.getElementById("heroTitle");
  const heroText = document.getElementById("heroText");
  const heroKicker = document.getElementById("heroKicker");
  const heroCardTitle = document.getElementById("heroCardTitle");
  const heroCardMeta = document.getElementById("heroCardMeta");
  const heroDots = document.getElementById("heroDots");
  const heroImageWrap = document.querySelector(".hero-image-wrap");

  if (!heroImage || !heroImageWrap) return;


  /* =========================================
     FIXED HERO TEXT
  ========================================= */

  const fixedTitle =
    'Laptops you can <em>actually trust.</em>';

  const fixedText =
    'Tested devices, clear specifications and a better way to shop for your next laptop in Multan.';

  const fixedKicker =
    'FEATURED COLLECTION';

  const fixedCardTitle =
    'Premium laptops. Ready for your next move.';

  const fixedCardMeta =
    'Browse trusted brands, clear specifications and practical options.';


  /* Set text once */

  heroTitle.innerHTML = fixedTitle;
  heroText.textContent = fixedText;
  heroKicker.textContent = fixedKicker;
  heroCardTitle.textContent = fixedCardTitle;
  heroCardMeta.textContent = fixedCardMeta;


  /* Hide old round dots */

  if (heroDots) {
    heroDots.style.display = "none";
  }


  /* =========================================
     HERO IMAGE LIST
  ========================================= */

  const heroImages = [

    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=1200&q=85"

  ];


  let currentHeroImage = 0;


  /* =========================================
     CREATE 4 PROGRESS LINES
  ========================================= */

  const progress = document.createElement("div");

  progress.id = "lgmHeroProgress";

  progress.innerHTML = heroImages.map((_, index) => `
    <button
      class="lgm-hero-progress-line ${index === 0 ? "active" : ""}"
      data-index="${index}"
      aria-label="Show hero image ${index + 1}"
    >
      <span></span>
    </button>
  `).join("");


  heroImageWrap.appendChild(progress);


  /* =========================================
     CHANGE IMAGE
  ========================================= */

  function changeHeroImage(index){

    currentHeroImage =
      (index + heroImages.length) %
      heroImages.length;


    /* Fade image */

    heroImage.style.opacity = "0";


    setTimeout(() => {

      heroImage.src =
        heroImages[currentHeroImage];

      heroImage.style.opacity = "1";

    }, 180);


    /* Update yellow line */

    document
      .querySelectorAll(".lgm-hero-progress-line")
      .forEach((line, i) => {

        line.classList.toggle(
          "active",
          i === currentHeroImage
        );

      });

  }


  /* =========================================
     REPLACE EXISTING HERO FUNCTION
  ========================================= */

  window.showHero = changeHeroImage;


  try {
    showHero = changeHeroImage;
  } catch(e) {}


  /* =========================================
     PROGRESS LINE CLICK
  ========================================= */

  document
    .querySelectorAll(".lgm-hero-progress-line")
    .forEach(line => {

      line.addEventListener("click", () => {

        changeHeroImage(
          Number(line.dataset.index)
        );

      });

    });


  /* =========================================
     REPLACE ARROWS
  ========================================= */

  const oldPrev =
    document.getElementById("heroPrev");

  const oldNext =
    document.getElementById("heroNext");


  if (oldPrev) {

    oldPrev.onclick = () => {

      changeHeroImage(
        currentHeroImage - 1
      );

    };

  }


  if (oldNext) {

    oldNext.onclick = () => {

      changeHeroImage(
        currentHeroImage + 1
      );

    };

  }


  /* =========================================
     AUTO SLIDE
     6 SECOND
  ========================================= */

  setInterval(() => {

    changeHeroImage(
      currentHeroImage + 1
    );

  }, 6000);


  /* =========================================
     STYLE
  ========================================= */

  const style = document.createElement("style");

  style.id = "lgmHeroProgressPatch";


  style.textContent = `

    /* IMAGE TRANSITION */

    #heroImage{
      transition:
        opacity .35s ease,
        transform .5s ease !important;
    }


    /* =====================================
       PROGRESS CONTAINER
    ===================================== */

    #lgmHeroProgress{

      position:absolute;

      top:14px;
      left:16px;
      right:16px;

      z-index:8;

      display:flex;

      gap:6px;

      height:4px;
    }


    /* =====================================
       EACH LINE
    ===================================== */

    .lgm-hero-progress-line{

      position:relative;

      flex:1;

      height:4px;

      padding:0;

      border:0;

      overflow:hidden;

      border-radius:999px;

      background:
        rgba(255,255,255,.32);

      cursor:pointer;

      backdrop-filter:
        blur(6px);

      box-shadow:
        0 1px 4px rgba(0,0,0,.08);

      transition:
        opacity .2s ease;
    }


    /* =====================================
       YELLOW FILL
    ===================================== */

    .lgm-hero-progress-line span{

      position:absolute;

      inset:0;

      width:0%;

      border-radius:999px;

      background:
        linear-gradient(
          90deg,
          #FABB1A,
          #FFD75C
        );

      transition:
        width .35s ease;
    }


    /* Active line */

    .lgm-hero-progress-line.active span{
      width:100%;
    }


    /* Other lines */

    .lgm-hero-progress-line:not(.active){
      opacity:.72;
    }


    /* Hover */

    .lgm-hero-progress-line:hover{
      opacity:1;
    }


    /* =====================================
       PREMIUM SHADOW UNDER LINES
    ===================================== */

    .hero-image-wrap::after{

      content:"";

      position:absolute;

      top:0;
      left:0;
      right:0;

      height:35px;

      pointer-events:none;

      background:
        linear-gradient(
          180deg,
          rgba(0,0,0,.15),
          transparent
        );

      z-index:7;
    }


    /* =====================================
       MOBILE
    ===================================== */

    @media(max-width:600px){

      #lgmHeroProgress{

        top:11px;
        left:12px;
        right:12px;

        gap:4px;

        height:3px;
      }

      .lgm-hero-progress-line{
        height:3px;
      }

    }

  `;

  document.head.appendChild(style);


  /* =========================================
     FIRST IMAGE
  ========================================= */

  changeHeroImage(0);

})();/* =========================================
   HERO: CONTINUOUS 4-LINE PROGRESS
   LINE FILLS -> NEXT IMAGE -> NEXT LINE
========================================= */

(() => {

  const heroImage = document.getElementById("heroImage");
  const heroTitle = document.getElementById("heroTitle");
  const heroText = document.getElementById("heroText");
  const heroKicker = document.getElementById("heroKicker");
  const heroCardTitle = document.getElementById("heroCardTitle");
  const heroCardMeta = document.getElementById("heroCardMeta");
  const heroImageWrap = document.querySelector(".hero-image-wrap");
  const oldDots = document.getElementById("heroDots");

  if (!heroImage || !heroImageWrap) return;

  /* Hide old dots */

  if (oldDots) {
    oldDots.style.display = "none";
  }


  /* =========================================
     FIXED HERO TEXT
  ========================================= */

  heroTitle.innerHTML =
    'Laptops you can <em>actually trust.</em>';

  heroText.textContent =
    'Tested devices, clear specifications and a better way to shop for your next laptop in Multan.';

  heroKicker.textContent =
    'FEATURED COLLECTION';

  heroCardTitle.textContent =
    'Premium laptops. Ready for your next move.';

  heroCardMeta.textContent =
    'Browse trusted brands, clear specifications and practical options.';


  /* =========================================
     4 HERO IMAGES
  ========================================= */

  const heroPhotos = [

    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=1200&q=85"

  ];


  const totalSlides = 4;

  let currentSlide = 0;

  /* 4 seconds per picture */

  const slideDuration = 4000;


  /* =========================================
     CREATE PROGRESS SYSTEM
  ========================================= */

  let progress = document.getElementById("lgmHeroSequence");

  if (!progress) {

    progress = document.createElement("div");

    progress.id = "lgmHeroSequence";

    progress.innerHTML = heroPhotos.map(() => `
      <button class="lgm-sequence-line">
        <span></span>
      </button>
    `).join("");

    heroImageWrap.appendChild(progress);

  }


  const lines =
    [...progress.querySelectorAll(".lgm-sequence-line")];


  /* =========================================
     RESET ALL LINES
  ========================================= */

  function resetLines() {

    lines.forEach(line => {

      line.classList.remove("active");

      const fill = line.querySelector("span");

      fill.style.transition = "none";

      fill.style.width = "0%";

    });

  }


  /* =========================================
     SHOW NEXT IMAGE
  ========================================= */

  function showSlide(index) {

    currentSlide =
      (index + totalSlides) % totalSlides;


    /* Change image */

    heroImage.style.opacity = "0";

    setTimeout(() => {

      heroImage.src =
        heroPhotos[currentSlide];

      heroImage.style.opacity = "1";

    }, 180);


    /* Reset progress */

    resetLines();


    /* Current line */

    const currentLine =
      lines[currentSlide];

    if (!currentLine) return;


    currentLine.classList.add("active");


    const fill =
      currentLine.querySelector("span");


    /*
      Give browser one frame first,
      then start filling from 0 -> 100
    */

    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        fill.style.transition =
          `width ${slideDuration}ms linear`;

        fill.style.width = "100%";

      });

    });


    /*
      When current line reaches the end,
      switch to next image
    */

    setTimeout(() => {

      showSlide(currentSlide + 1);

    }, slideDuration);

  }


  /* =========================================
     CLICK LINE = JUMP TO IMAGE
  ========================================= */

  lines.forEach((line, index) => {

    line.onclick = () => {

      showSlide(index);

    };

  });


  /* =========================================
     STYLES
  ========================================= */

  if (!document.getElementById("lgmHeroSequenceStyles")) {

    const style = document.createElement("style");

    style.id = "lgmHeroSequenceStyles";

    style.textContent = `

      /* HERO IMAGE */

      #heroImage{

        transition:
          opacity .28s ease !important;

      }


      /* =====================================
         PROGRESS CONTAINER
      ===================================== */

      #lgmHeroSequence{

        position:absolute;

        top:14px;
        left:16px;
        right:16px;

        z-index:20;

        display:flex;

        gap:6px;

        height:4px;
      }


      /* =====================================
         LINE
      ===================================== */

      .lgm-sequence-line{

        position:relative;

        flex:1;

        height:4px;

        padding:0;

        border:0;

        overflow:hidden;

        border-radius:999px;

        background:
          rgba(255,255,255,.34);

        cursor:pointer;

        backdrop-filter:blur(5px);

        box-shadow:
          0 1px 4px rgba(0,0,0,.10);
      }


      /* =====================================
         YELLOW FILL
      ===================================== */

      .lgm-sequence-line span{

        position:absolute;

        top:0;
        left:0;

        width:0%;
        height:100%;

        border-radius:999px;

        background:
          linear-gradient(
            90deg,
            #FABB1A,
            #FFD75A
          );

        box-shadow:
          0 0 8px rgba(250,187,26,.18);
      }


      /* Active line slightly stronger */

      .lgm-sequence-line.active{

        background:
          rgba(255,255,255,.28);
      }


      /* =====================================
         MOBILE
      ===================================== */

      @media(max-width:600px){

        #lgmHeroSequence{

          top:11px;
          left:12px;
          right:12px;

          gap:4px;

          height:3px;
        }

        .lgm-sequence-line{

          height:3px;
        }

      }

    `;

    document.head.appendChild(style);

  }


  /* =========================================
     START
  ========================================= */

  showSlide(0);
})();/* =========================================
   FINAL HERO SEQUENCE — 1 > 2 > 3 > 4 > 1
========================================= */

(() => {

  const heroImage = document.getElementById("heroImage");
  const heroImageWrap = document.querySelector(".hero-image-wrap");

  if (!heroImage || !heroImageWrap) return;

  /* Stop old slideshow timers */
  for (let i = 1; i < 1000; i++) {
    clearInterval(i);
    clearTimeout(i);
  }

  const images = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=1200&q=85"
  ];

  let current = 0;
  const duration = 4000;

  const progress =
    document.getElementById("lgmHeroSequence");

  const lines =
    progress
      ? [...progress.querySelectorAll(".lgm-sequence-line")]
      : [];

  function play(index) {

    current = index % images.length;

    if (progress) {
      lines.forEach((line, i) => {

        const fill = line.querySelector("span");

        line.classList.toggle("active", i === current);

        fill.style.transition = "none";
        fill.style.width = "0%";

      });
    }

    heroImage.style.opacity = "0";

    setTimeout(() => {

      heroImage.src = images[current];
      heroImage.style.opacity = "1";

      const activeLine = lines[current];

      if (activeLine) {

        const fill =
          activeLine.querySelector("span");

        requestAnimationFrame(() => {

          fill.style.transition =
            `width ${duration}ms linear`;

          fill.style.width = "100%";

        });

      }

    }, 180);

    setTimeout(() => {

      play((current + 1) % images.length);

    }, duration + 180);
  }

  play(0);

})();/* =========================================
   PATCH: ONLY CURRENT LINE FILLS
   PREVIOUS LINES ALWAYS EMPTY
========================================= */

(() => {

  const progress = document.getElementById("lgmHeroSequence");

  if (!progress) return;

  const lines = [
    ...progress.querySelectorAll(".lgm-sequence-line")
  ];

  window.lgmSetHeroLine = function(activeIndex){

    lines.forEach((line, index) => {

      const fill = line.querySelector("span");

      /* Remove previous active state */
      line.classList.remove("active");

      /* Previous / future lines = EMPTY */
      fill.style.transition = "none";
      fill.style.width = "0%";

      if (index === activeIndex) {

        /* Only current line becomes active */
        line.classList.add("active");

        requestAnimationFrame(() => {

          fill.style.transition =
            "width 4000ms linear";

          fill.style.width = "100%";

        });

      }

    });

  };

  /* Start from line 1 */
  window.lgmSetHeroLine(0);

})();/* =========================================
   PATCH: HERO STATUS INFO BOX
   APPEARS ABOVE HERO TEXT
========================================= */

(() => {

  if (document.getElementById("lgmHeroStatusBox")) return;

  const heroContent = document.querySelector(".hero-content");

  if (!heroContent) return;

  const box = document.createElement("div");

  box.id = "lgmHeroStatusBox";

  box.innerHTML = `
    <span class="lgm-hero-open">
      <span class="lgm-hero-status-dot"></span>
      Open now
    </span>

    <span class="lgm-hero-separator">•</span>

    <span class="lgm-hero-info">
      <i class="fa-solid fa-location-dot"></i>
      Multan, Pakistan
    </span>

    <span class="lgm-hero-separator">•</span>

    <span class="lgm-hero-info">
      <i class="fa-regular fa-clock"></i>
      Mon–Sat 10am–9pm
    </span>
  `;

  /* Put box before hero eyebrow */

  const eyebrow = heroContent.querySelector(".eyebrow");

  if (eyebrow) {
    eyebrow.before(box);
  } else {
    heroContent.prepend(box);
  }


  /* =========================================
     STYLES
  ========================================= */

  const style = document.createElement("style");

  style.id = "lgmHeroStatusBoxStyles";

  style.textContent = `

    #lgmHeroStatusBox{

      width:max-content;

      display:flex;
      align-items:center;
      gap:10px;

      margin-bottom:18px;

      padding:9px 14px;

      color:#c7d0e5;

      background:
        linear-gradient(
          135deg,
          rgba(19,18,34,.96),
          rgba(29,24,47,.94)
        );

      border:1px solid rgba(117,94,175,.48);

      border-radius:999px;

      box-shadow:
        0 10px 28px rgba(18,10,44,.13),
        inset 0 1px 0 rgba(255,255,255,.05);

      font-size:11px;
      font-weight:700;

      backdrop-filter:blur(12px);
    }


    /* OPEN NOW */

    .lgm-hero-open{

      display:flex;
      align-items:center;
      gap:7px;

      color:#47E58B;

      font-weight:800;
    }


    /* LIVE DOT */

    .lgm-hero-status-dot{

      position:relative;

      width:7px;
      height:7px;

      border-radius:50%;

      background:#47E58B;

      box-shadow:
        0 0 0 4px rgba(71,229,139,.10),
        0 0 12px rgba(71,229,139,.28);

      animation:
        lgmHeroStatusPulse 1.8s ease-in-out infinite;
    }


    .lgm-hero-status-dot::before{

      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:7px;
      height:7px;

      border-radius:50%;

      background:rgba(71,229,139,.32);

      transform:
        translate(-50%,-50%)
        scale(1);

      animation:
        lgmHeroStatusRipple 1.8s ease-out infinite;
    }


    /* INFO */

    .lgm-hero-info{

      display:flex;
      align-items:center;
      gap:5px;

      white-space:nowrap;
    }


    .lgm-hero-info i{

      color:#9DA8C0;

      font-size:10px;
    }


    /* SEPARATOR */

    .lgm-hero-separator{

      color:#66718A;

      font-size:13px;
    }


    /* ============================
       ANIMATIONS
    ============================ */

    @keyframes lgmHeroStatusPulse{

      0%,100%{
        box-shadow:
          0 0 0 4px rgba(71,229,139,.10),
          0 0 0 rgba(71,229,139,0);
      }

      50%{
        box-shadow:
          0 0 0 5px rgba(71,229,139,.13),
          0 0 13px 2px rgba(71,229,139,.18);
      }

    }


    @keyframes lgmHeroStatusRipple{

      0%{
        opacity:.55;

        transform:
          translate(-50%,-50%)
          scale(1);
      }

      70%,100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(2.7);
      }

    }


    /* ============================
       MOBILE
    ============================ */

    @media(max-width:600px){

      #lgmHeroStatusBox{

        max-width:100%;

        padding:8px 11px;

        gap:7px;

        font-size:9px;

        margin-bottom:15px;

      }

      .lgm-hero-separator{
        font-size:10px;
      }

      .lgm-hero-info i{
        font-size:8px;
      }

    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: REPLACE HERO EYEBROW
   YELLOW PREMIUM STATUS BOX
========================================= */

(() => {

  /* Hide old Laptop Generation eyebrow */

  const oldEyebrow = document.querySelector(
    ".hero-content > .eyebrow:not(#lgmHeroStatusBox .eyebrow)"
  );

  if (oldEyebrow) {
    oldEyebrow.style.display = "none";
  }


  /* Make our status box premium yellow */

  const box = document.getElementById("lgmHeroStatusBox");

  if (!box) return;

  const style = document.createElement("style");

  style.id = "lgmHeroYellowStatusPatch";

  style.textContent = `

    #lgmHeroStatusBox{

      color:#4b3a00 !important;

      background:
        linear-gradient(
          135deg,
          #FFF8D8 0%,
          #FFF1AF 48%,
          #FFE17A 100%
        ) !important;

      border:1px solid rgba(250,187,26,.48) !important;

      box-shadow:
        0 10px 28px rgba(205,157,0,.13),
        inset 0 1px 0 rgba(255,255,255,.75) !important;

      backdrop-filter:blur(10px);

    }


    /* OPEN NOW */

    #lgmHeroStatusBox .lgm-hero-open{

      color:#148653 !important;

      font-weight:900 !important;
    }


    /* LIVE DOT */

    #lgmHeroStatusBox .lgm-hero-status-dot{

      background:#20C978 !important;

      box-shadow:
        0 0 0 4px rgba(32,201,120,.10),
        0 0 12px rgba(32,201,120,.22) !important;
    }


    #lgmHeroStatusBox .lgm-hero-status-dot::before{

      background:rgba(32,201,120,.30) !important;
    }


    /* LOCATION + TIME */

    #lgmHeroStatusBox .lgm-hero-info{

      color:#5b4c17 !important;
    }


    #lgmHeroStatusBox .lgm-hero-info i{

      color:#8a720f !important;
    }


    /* DOT SEPARATORS */

    #lgmHeroStatusBox .lgm-hero-separator{

      color:#b79b35 !important;
    }


    /* HOVER */

    #lgmHeroStatusBox:hover{

      transform:translateY(-2px);

      border-color:rgba(250,187,26,.68) !important;

      box-shadow:
        0 14px 32px rgba(205,157,0,.18),
        inset 0 1px 0 rgba(255,255,255,.82) !important;
    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: HERO STATUS SAME COLOR AS CALL US
========================================= */

(() => {

  const box = document.getElementById("lgmHeroStatusBox");

  if (!box) return;

  const style = document.createElement("style");

  style.id = "lgmHeroStatusSameCallColor";

  style.textContent = `

    /* Same yellow as floating Call Us button */

    #lgmHeroStatusBox{

      background:
        linear-gradient(
          135deg,
          #FABB1A 0%,
          #FFD45A 50%,
          #F2B400 100%
        ) !important;

      border:1px solid rgba(255,255,255,.50) !important;

      box-shadow:
        0 10px 24px rgba(190,145,0,.24),
        0 0 0 1px rgba(250,187,26,.08),
        inset 0 1px 0 rgba(255,255,255,.55) !important;

    }


    #lgmHeroStatusBox .lgm-hero-open{

      color:#17234A !important;

      background:#ffffff !important;
    }


    #lgmHeroStatusBox .lgm-hero-info{

      color:#17234A !important;
    }


    #lgmHeroStatusBox .lgm-hero-info i{

      color:#10319F !important;
    }


    #lgmHeroStatusBox .lgm-hero-separator{

      color:#876B00 !important;
    }


    /* same premium hover feel */

    #lgmHeroStatusBox:hover{

      box-shadow:
        0 15px 30px rgba(190,145,0,.32),
        0 0 0 4px rgba(250,187,26,.08),
        inset 0 1px 0 rgba(255,255,255,.65) !important;
    }

  `;

  document.head.appendChild(style);

})();/* =========================================
   PATCH: HERO STATUS BOX = CALL US STYLE
========================================= */

(() => {

  const box = document.getElementById("lgmHeroStatusBox");

  if (!box) return;

  if (document.getElementById("lgmHeroStatusCallStyle")) return;

  const style = document.createElement("style");

  style.id = "lgmHeroStatusCallStyle";

  style.textContent = `

    /* =====================================
       PREMIUM YELLOW PILL
    ===================================== */

    #lgmHeroStatusBox{

      position:relative;

      width:max-content !important;

      min-height:44px !important;

      margin-bottom:20px !important;

      padding:5px 15px 5px 8px !important;

      display:flex !important;

      align-items:center !important;

      gap:10px !important;

      border-radius:999px !important;

      color:#17234A !important;

      background:
        linear-gradient(
          135deg,
          #FABB1A 0%,
          #FFD45A 50%,
          #F1B400 100%
        ) !important;

      border:1px solid rgba(255,255,255,.55) !important;

      box-shadow:
        0 10px 25px rgba(188,140,0,.22),
        0 0 0 1px rgba(250,187,26,.08),
        inset 0 1px 0 rgba(255,255,255,.55) !important;

      overflow:visible !important;

      backdrop-filter:blur(8px);

      transition:
        transform .25s ease,
        box-shadow .25s ease !important;
    }


    /* =====================================
       OPEN NOW AREA
    ===================================== */

    #lgmHeroStatusBox .lgm-hero-open{

      min-height:34px;

      padding:0 10px;

      display:flex;
      align-items:center;

      gap:7px;

      color:#17304b !important;

      background:#ffffff;

      border-radius:999px;

      font-size:10px;

      font-weight:900;
    }


    /* =====================================
       LIVE DOT
    ===================================== */

    #lgmHeroStatusBox .lgm-hero-status-dot{

      position:relative;

      width:7px !important;
      height:7px !important;

      flex:none;

      border-radius:50%;

      background:#20C978 !important;

      box-shadow:
        0 0 0 4px rgba(32,201,120,.10),
        0 0 10px rgba(32,201,120,.28) !important;

      animation:
        lgmHeroLiveDot 1.7s ease-in-out infinite !important;
    }


    #lgmHeroStatusBox .lgm-hero-status-dot::before{

      content:"";

      position:absolute;

      top:50%;
      left:50%;

      width:7px;
      height:7px;

      border-radius:50%;

      background:rgba(32,201,120,.35);

      transform:
        translate(-50%,-50%)
        scale(1);

      animation:
        lgmHeroLiveWave 1.7s ease-out infinite;
    }


    /* =====================================
       LOCATION / TIME
    ===================================== */

    #lgmHeroStatusBox .lgm-hero-info{

      color:#29324A !important;

      font-size:10px !important;

      font-weight:800 !important;

      white-space:nowrap;
    }


    #lgmHeroStatusBox .lgm-hero-info i{

      color:#173FA6 !important;

      margin-right:2px;
    }


    /* =====================================
       SEPARATORS
    ===================================== */

    #lgmHeroStatusBox .lgm-hero-separator{

      color:#876B00 !important;

      font-size:12px !important;
    }


    /* =====================================
       SHINE
    ===================================== */

    #lgmHeroStatusBox::before{

      content:"";

      position:absolute;

      top:0;
      left:-80%;

      width:40%;
      height:100%;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(255,255,255,.36),
          transparent
        );

      transform:skewX(-20deg);

      transition:left .7s ease;

      pointer-events:none;

      border-radius:999px;
    }


    /* =====================================
       HOVER
    ===================================== */

    #lgmHeroStatusBox:hover{

      transform:translateY(-3px);

      box-shadow:
        0 15px 30px rgba(188,140,0,.28),
        0 0 0 4px rgba(250,187,26,.07),
        inset 0 1px 0 rgba(255,255,255,.65) !important;
    }


    #lgmHeroStatusBox:hover::before{
      left:145%;
    }


    /* =====================================
       ANIMATIONS
    ===================================== */

    @keyframes lgmHeroLiveDot{

      0%,100%{
        box-shadow:
          0 0 0 4px rgba(32,201,120,.10),
          0 0 0 rgba(32,201,120,0);
      }

      50%{
        box-shadow:
          0 0 0 5px rgba(32,201,120,.14),
          0 0 12px 2px rgba(32,201,120,.20);
      }

    }


    @keyframes lgmHeroLiveWave{

      0%{
        opacity:.55;

        transform:
          translate(-50%,-50%)
          scale(1);
      }

      70%,100%{
        opacity:0;

        transform:
          translate(-50%,-50%)
          scale(2.5);
      }

    }


    /* =====================================
       MOBILE
    ===================================== */

    @media(max-width:600px){

      #lgmHeroStatusBox{

        min-height:42px !important;

        padding:4px 10px 4px 6px !important;

        gap:7px !important;

        margin-bottom:16px !important;

        max-width:100%;
      }

      #lgmHeroStatusBox .lgm-hero-info{

        font-size:9px !important;
      }

      #lgmHeroStatusBox .lgm-hero-open{

        min-height:32px;

        padding:0 8px;

        font-size:9px;
      }

    }

  `;

  document.head.appendChild(style);

})();