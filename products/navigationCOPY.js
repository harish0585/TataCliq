// salman bhai nav code

id = 0
function searchbar(){
    var inpField = document.querySelector('.search-tab-container')
    var inp = document.getElementById('search-field')
    var search = document.querySelector('.search-tab-logo')
    inpField.style.backgroundColor = 'white'
    inpField.style.width = '500px'
    inp.style.color = 'black'
    inp.style.border = 'none'
    search.style.opacity = '0'
    if(id == 0){
    var img = document.createElement('img')
    img.src = 'https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png'
    inpField.append(img)
    img.style.float = 'right'
   img.style.width = '5.5%'
   img.style.marginTop = '-25px'
   img.style.zIndex = '10'
    }
    id++

}


//back to original search field

function closesearch(){
    var inpField = document.querySelector('.search-tab-container')
    var inp = document.getElementById('search-field')
    var search = document.querySelector('.search-tab-logo')
    inpField.style.backgroundColor = '#212121'
    inpField.style.width = '245px'
    search.style.opacity = '1'
}

//hover div over category

function showCategory(){
      var category = document.querySelector('.category')
      var category_arrow = document.querySelector('.category-arrow')
       category_arrow.style.transform = 'rotate(180deg)'
}
function closeCategory(){
    var category = document.querySelector('.category')
      var category_arrow = document.querySelector('.category-arrow')
       category_arrow.style.transform = 'rotate(0)'
}

// hover div over brand

function showBrand(){
    var brand = document.querySelector('.brand')
    var brand_arrow = document.querySelector('.brand-arrow')
     brand_arrow.style.transform = 'rotate(180deg)'
}
function closeBrand(){
  var brand = document.querySelector('.brand')
    var brand_arrow = document.querySelector('.brand-arrow')
     brand_arrow.style.transform = 'rotate(0)'
}


// sticky nav bar
window.addEventListener("scroll",function(){
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0);
})


//modal_container
const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')

function showCheckout(){
    modal_container.classList.add('showModal');
    
}

function closeModal(){
    modal_container.classList.remove('showModal');
}


// salman bhai code over


// my own code

const productArray = [
    // first product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009543026_437Wx649H_202105121815021.jpeg",
        productName: "Lee",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Green Crew T-Shirt",
        productPriceActual:  1999,
        productDiscountPercentage: 0,
        productPrice: "&#8377;1999", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // second product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009193628_437Wx649H_202103300043551.jpeg",
        productName: "Lee",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Lee Cooper Yellow T-Shirt",
        productPriceActual:  550,
        productDiscountPercentage: ( (999-550) / 999 ) * 100,
        productPrice: "&#8377;550 &nbsp; <span class='linethroughRupee'>&#8377;999</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // third product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008729273_437Wx649H_202102062346211.jpeg",
        productName: "Pepe Jeans",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Pepe Jeans Black T-Shirt",
        productPriceActual:  734,
        productDiscountPercentage: ( (1049-734) / 1049 ) * 100,
        productPrice: "&#8377;734 &nbsp; <span class='linethroughRupee'>&#8377;1049</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // fourth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009848069_437Wx649H_202106250334571.jpeg",
        productName: "Lee",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Lee Black T-Shirt",
        productPriceActual:  909,
        productDiscountPercentage: ( (1339-909) / 1339 ) * 100,
        productPrice: "&#8377;909 &nbsp; <span class='linethroughRupee'>&#8377;1339</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // fifth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009234469_437Wx649H_202104031719081.jpeg",
        productName: "Pepe Jeans",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Westside Mustard",
        productPriceActual:  1399,
        productDiscountPercentage: 0,
        productPrice: "&#8377;1399", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // sixth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008621722_437Wx649H_202101212110411.jpeg",
        productName: "Being Human",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Green Cotton T-Shirt",
        productPriceActual:  559,
        productDiscountPercentage: ( (699-559) / 699 ) * 100,
        productPrice: "&#8377;559 &nbsp; <span class='linethroughRupee'>&#8377;699</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // seventh product
    {
        productImage: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007747519_437Wx649H_20200917212341.jpeg",
        productName: "Pepe Jeans",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Unlimited Black Slim",
        productPriceActual:  1199,
        productDiscountPercentage: ( (1249-1199) / 1249 ) * 100,
        productPrice: "&#8377;1199 &nbsp; <span class='linethroughRupee'>&#8377;1249</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // eigth product
    {
        productImage: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006299108_437Wx649H_20200111203131.jpeg",
        productName: "Lee",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Blue Polo T-Shirt",
        productPriceActual:  833,
        productDiscountPercentage: ( (1699-833) / 1699 ) * 100,
        productPrice: "&#8377;833 &nbsp; <span class='linethroughRupee'>&#8377;1699</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // ninth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008587650_437Wx649H_202101171852501.jpeg",
        productName: "Being Human",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "White Cotton T-Shirt",
        productPriceActual:  1489,
        productDiscountPercentage: ( (1499-1489) / 1499 ) * 100,
        productPrice: "&#8377;1489 &nbsp; <span  class='linethroughRupee'>&#8377;1499</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // tenth product
    {
        productImage: "https://img.tatacliq.com/images/i4/437Wx649H/MP000000005058783_437Wx649H_20190716192434.jpeg",
        productName: "Pepe Jeans",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Westside Mustard",
        productPriceActual:  1199,
        productDiscountPercentage: 0,
        productPrice: "&#8377;1199", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // eleventh product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009846638_437Wx649H_202106250206531.jpeg",
        productName: "Being Human",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Grey Crew T-Shirt",
        productPriceActual:  559,
        productDiscountPercentage: ( (799-559) / 799 ) * 100,
        productPrice: "&#8377;559 &nbsp; <span class='linethroughRupee'>&#8377;799</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // twelfth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008375264_437Wx649H_202012110108381.jpeg",
        productName: "Lee",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Black Polo T-Shirt",
        productPriceActual:  612,
        productDiscountPercentage: ( (1225-612) / 1225 ) * 100,
        productPrice: "&#8377;612 &nbsp; <span class='linethroughRupee'>&#8377;1225</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // thirteenth Product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008063086_437Wx649H_202010282330141.jpeg",
        productName: "Being Human",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Maroon Cotton Fit",
        productPriceActual:  854,
        productDiscountPercentage: ( (1899-854) / 1899 ) * 100,
        productPrice: "&#8377;854 &nbsp; <span class='linethroughRupee'>&#8377;1899</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // fourteenth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009350507_437Wx649H_202104151556021.jpeg",
        productName: "Being Human",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "V Neck T-Shirt",
        productPriceActual:  849,
        productDiscountPercentage: ( (999-849) / 999 ) * 100,
        productPrice: "&#8377;849 &nbsp; <span class='linethroughRupee'>&#8377;999</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // fifteenth product
    {
        productImage: "https://img.tatacliq.com/images/i4/437Wx649H/MP000000006661989_437Wx649H_20200305093803.jpeg",
        productName: "Pepe Jeans",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "White Round T-Shirt",
        productPriceActual:  734,
        productDiscountPercentage: ( (1049-734) / 1049 ) * 100,
        productPrice: "&#8377;734 &nbsp; <span class='linethroughRupee'>&#8377;1049</span>", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    },
    // sixteenth product
    {
        productImage: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008680719_437Wx649H_202101291449301.jpeg",
        productName: "Lee",
        productWishlistIcon: "https://www.tatacliq.com/src/wishlist/components/img/wishlist_unfilled.08f94e93a491.svg",
        productDescription: "Green Crew T-Shirt",
        productPriceActual:  1999,
        productDiscountPercentage: 0,
        productPrice: "&#8377;1999", 
        productRatingIcon: "https://www.tatacliq.com/src/general/components/img/star-fill-white.0af01b22b4b6.svg"
    }
]


if(localStorage.getItem('allProducts') == null){
    localStorage.setItem('allProducts',JSON.stringify(productArray));
}

function showProducts(element){
    let product = element;
    let allProductsDiv = document.getElementById('productContainerMain');
    allProductsDiv.innerHTML = null;
    
    product.forEach(function(el){
        // created a div for each product
        let createDiv = document.createElement('div');

        // image
        let imageProduct = document.createElement('img');
        imageProduct.src = el.productImage;
        imageProduct.setAttribute("class","productActualImage");

        // TESTING PHASE to get the image inside a div and give it a background color of white + border radius
        let imageEditDiv = document.createElement("div")
        imageEditDiv.append(imageProduct);
        imageEditDiv.setAttribute("class","productImageDiv")


        // name
        let nameProduct = document.createElement('p');
        nameProduct.innerText = el.productName;

        // wishlist Icon
        let wishlistProduct = document.createElement('img');
        wishlistProduct.src = el.productWishlistIcon;

        // TESTING PHASE to get the name and wishlist Icon on same line
        let productHeaderDiv = document.createElement("div");
        let productHeaderSpan = document.createElement("span");
        productHeaderSpan.innerHTML = `<div class="nameCheck"><div class="productName">${el.productName}</div><div><img src="${el.productWishlistIcon}"></div></div>`
        productHeaderDiv.append(productHeaderSpan);
        productHeaderDiv.setAttribute("class","productContentHeaderDiv")


        // description
        let descriptionProduct = document.createElement('p');
        descriptionProduct.innerHTML = el.productDescription;

        // to add the functionality to move to specific product page
        if (el.productDescription == "Grey Crew T-Shirt"){
            createDiv.addEventListener("click",function(){
                window.location.href = "../SpecificPage/specificProduct.html"
            })
        }

        let priceProduct = document.createElement('p');
        priceProduct.innerHTML = el.productPrice;
        priceProduct.style.marginTop = "-12px"

        let productDescriptionDiv = document.createElement("div");
        productDescriptionDiv.setAttribute("class","descriptionDiv");
        productDescriptionDiv.append(descriptionProduct,priceProduct);

        let starRatingContainer = document.createElement("div");
        starRatingContainer.setAttribute("class","starRatingDiv");
        let spanStarNumber = document.createElement("span");
        let randomStarRating = Math.floor(Math.random() * 5) + 1;
        spanStarNumber.innerHTML = `<span style="background:#49a862; color:#ffffff;">${randomStarRating}<img src="${el.productRatingIcon}" class="starClass"></span>`;
        starRatingContainer.append(spanStarNumber);

        let productContentContainer = document.createElement("div");
        productContentContainer.setAttribute("class","productContentContainerDiv");
        productContentContainer.append(productHeaderDiv,productDescriptionDiv,starRatingContainer)

        createDiv.append(imageEditDiv,productContentContainer)
        createDiv.setAttribute("class","eachProductMainContainer")
        allProductsDiv.append(createDiv)
    });

}


showProducts(JSON.parse(localStorage.getItem('allProducts')))


function topFilterChange(){
    let selectBox = document.getElementById("topSelect").value;
    let selectBoxDiv = document.getElementById("topSelectDiv");
    if (selectBox === "price-asc"){
        selectBoxDiv.innerHTML = "Price Low to High";
        document.getElementById("topSelect").setAttribute("label","Price Low to High")
        sortLH();
    }else if (selectBox === "price-desc"){
        selectBoxDiv.innerHTML = "Price High to Low";
        document.getElementById("topSelect").setAttribute("label","Price High to Low")
        sortHL();
    }else if (selectBox === "isDiscountedPrice"){
        selectBoxDiv.innerHTML = "Discounts";
        document.getElementById("topSelect").setAttribute("label","Discounts")
        discountHL();
    }else if (selectBox === "isProductNew"){
        selectBoxDiv.innerHTML = "New Arrivals";
        document.getElementById("topSelect").setAttribute("label","New Arrivals")
    }else if (selectBox === "relevance"){
        selectBoxDiv.innerHTML = "Popularity";
        document.getElementById("topSelect").setAttribute("label","Popularity")
        Popularity();
    }
}



function sortLH(){
    let products = JSON.parse(localStorage.getItem('allProducts'));
    products = products.sort(function(a,b){
        return a.productPriceActual - b.productPriceActual;
    })
    showProducts(products);
}

function sortHL(){
    let products = JSON.parse(localStorage.getItem('allProducts'));
    products = products.sort(function(a,b){
        return b.productPriceActual - a.productPriceActual;
    })
    showProducts(products);
}

function discountHL(){
    let products = JSON.parse(localStorage.getItem('allProducts'));
    for (var i = 0; i < products.length; i++) {
        for (var j = 0; j < (products.length-1-i); j++) {
            if (products[j].productDiscountPercentage < products[j+1].productDiscountPercentage){
                var temp = products[j];
                products[j] = products[j+1];
                products[j+1] = temp;
            }else if (products[j].productDiscountPercentage === products[j+1].productDiscountPercentage){
                if (products[j].productPriceActual > products[j+1].productPriceActual){
                    var temp = products[j];
                    products[j] = products[j+1];
                    products[j+1] = temp;
                }
            }
        }
    }
    showProducts(products);
}

function Popularity(){
    let products = JSON.parse(localStorage.getItem('allProducts'));
    showProducts(products);
}

// BRAND FILTERING
    // i will make the overflow visible
    // j, k and m are for checkboxes of three brands

    var i = 0;
    function xse(){
        let varia = document.getElementById("testingICONcontrol")
        let varianew;
        // original style is height: 0px, overflow: hidden
        // new style is height:auto
        if (i % 2 === 0){
            varia.classList.remove('Accordion__iconPlus');
            varia.setAttribute('class','Accordion__iconMinus');
            varianew = document.getElementById("testingMODALcontrol");
            varianew.style.height = "auto";
            varianew.style.overflow = "";
            i = i + 1
        }else {
            varia.classList.remove('Accordion__iconMinus');
            varia.setAttribute('class','Accordion__iconPlus');
            varianew = document.getElementById("testingMODALcontrol");
            varianew.style.height = "0px";
            varianew.style.overflow = "hidden";
            i = i + 1
        }
    }

    function removeItemAll(arr, value) {
        var i = 0;
        while (i < arr.length) {
          if (arr[i].productName === value) {
            arr.splice(i, 1);
          } else {
            ++i;
          }
        }
        return arr;
    }


    // lee
    var j = 0
    function change(){
        let varia = document.getElementById("boxy");
        let varianew = document.getElementById("boxyOld");
        if (j % 2 === 0){
            varia.classList.remove('CheckBox__base');
            varia.setAttribute('class','CheckBox__selected CheckBox__base');
            varianew.classList.remove('FilterSelect__itemContent');
            varianew.setAttribute('class','FilterSelect__contentSelected FilterSelect__itemContent')
            // j = j + 1
        }else {
            varia.classList.remove('CheckBox__selected', 'CheckBox__base');
            varia.setAttribute('class','CheckBox__base');
            varianew.classList.remove('FilterSelect__contentSelected','FilterSelect__itemContent');
            varianew.setAttribute('class', 'FilterSelect__itemContent')
            // j = j + 1
        }

        // brand filtering
        if (j % 2 === 0){
            let arr;
            arr = localStorage.getItem("brandArray");
            if(arr == null){
                arr = [];
            }else {
                arr = JSON.parse(localStorage.getItem('brandArray'));
            }
            let brandName = document.getElementById("brandNameLee").innerHTML;
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let newLeeArray = [];
            for (var i = 0; i < products.length; i++){
                if (products[i].productName === brandName){
                    newLeeArray.push(products[i]);
                }
            }
            for (var i = 0; i < newLeeArray.length; i++){
                arr.push(newLeeArray[i]);
            }
            localStorage.setItem('brandArray', JSON.stringify(arr))
            showProducts(JSON.parse(localStorage.getItem('brandArray')));
        }else {
            let arr = JSON.parse(localStorage.getItem("brandArray"));
            arr = removeItemAll(arr,"Lee");
            // localStorage.setItem('brandArray', JSON.stringify(arr))
            if (arr.length > 0){
                localStorage.setItem('brandArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('brandArray')));
            }else{
                localStorage.setItem('brandArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('allProducts')));
            }
        }

        j = j + 1;
    }

    // pepe jeans
    var k = 0
    function changeTwo(){
        let varia = document.getElementById("boxyTwo");
        let varianew = document.getElementById("boxyOldTwo");
        if (k % 2 === 0){
            varia.classList.remove('CheckBox__base');
            varia.setAttribute('class','CheckBox__selected CheckBox__base');
            varianew.classList.remove('FilterSelect__itemContent');
            varianew.setAttribute('class','FilterSelect__contentSelected FilterSelect__itemContent')
            // k = k + 1
        }else {
            varia.classList.remove('CheckBox__selected', 'CheckBox__base');
            varia.setAttribute('class','CheckBox__base');
            varianew.classList.remove('FilterSelect__contentSelected','FilterSelect__itemContent');
            varianew.setAttribute('class', 'FilterSelect__itemContent')
            // k = k + 1
        }

        // brand filtering
        if (k % 2 === 0){
            let arr;
            arr = localStorage.getItem("brandArray");
            if(arr == null){
                arr = [];
            }else {
                arr = JSON.parse(localStorage.getItem('brandArray'));
            }
            let brandName = document.getElementById("brandNamePepe").innerHTML;
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let newLeeArray = [];
            for (var i = 0; i < products.length; i++){
                if (products[i].productName === brandName){
                    newLeeArray.push(products[i]);
                }
            }
            for (var i = 0; i < newLeeArray.length; i++){
                arr.push(newLeeArray[i]);
            }
            localStorage.setItem('brandArray', JSON.stringify(arr))
            showProducts(JSON.parse(localStorage.getItem('brandArray')));
        }else {
            let arr = JSON.parse(localStorage.getItem("brandArray"));
            arr = removeItemAll(arr,"Pepe Jeans");
            // localStorage.setItem('brandArray', JSON.stringify(arr))
            if (arr.length > 0){
                localStorage.setItem('brandArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('brandArray')));
            }else{
                localStorage.setItem('brandArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('allProducts')));
            }
        }

        k = k + 1;
    }

    // being human
    var m = 0
    function changeThree(){
        let varia = document.getElementById("boxyThree");
        let varianew = document.getElementById("boxyOldThree");
        if (m % 2 === 0){
            varia.classList.remove('CheckBox__base');
            varia.setAttribute('class','CheckBox__selected CheckBox__base');
            varianew.classList.remove('FilterSelect__itemContent');
            varianew.setAttribute('class','FilterSelect__contentSelected FilterSelect__itemContent')
            // m = m + 1
        }else {
            varia.classList.remove('CheckBox__selected', 'CheckBox__base');
            varia.setAttribute('class','CheckBox__base');
            varianew.classList.remove('FilterSelect__contentSelected','FilterSelect__itemContent');
            varianew.setAttribute('class', 'FilterSelect__itemContent')
            // m = m + 1
        }

        // brand filtering
        if (m % 2 === 0){
            let arr;
            arr = localStorage.getItem("brandArray");
            if(arr == null){
                arr = [];
            }else {
                arr = JSON.parse(localStorage.getItem('brandArray'));
            }
            let brandName = document.getElementById("brandNameBHuman").innerHTML;
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let newLeeArray = [];
            for (var i = 0; i < products.length; i++){
                if (products[i].productName === brandName){
                    newLeeArray.push(products[i]);
                }
            }
            for (var i = 0; i < newLeeArray.length; i++){
                arr.push(newLeeArray[i]);
            }
            localStorage.setItem('brandArray', JSON.stringify(arr))
            showProducts(JSON.parse(localStorage.getItem('brandArray')));
        }else {
            let arr = JSON.parse(localStorage.getItem("brandArray"));
            arr = removeItemAll(arr,"Being Human");
            // localStorage.setItem('brandArray', JSON.stringify(arr))
            if (arr.length > 0){
                localStorage.setItem('brandArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('brandArray')));
            }else{
                localStorage.setItem('brandArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('allProducts')));
            }
        }

        m = m + 1;
    }



    // PRICE FILTERING
    // a will make the overflow visible
    // b,c and d are used for prices checkbox
    var a = 0;
    function pricexse(){
        let varia = document.getElementById("pricePlus")
        let varianew;
        // original style is height: 0px, overflow: hidden
        // new style is height:auto
        if (a % 2 === 0){
            varia.classList.remove('Accordion__iconPlus');
            varia.setAttribute('class','Accordion__iconMinus');
            varianew = document.getElementById("pricePlusBox");
            varianew.style.height = "auto";
            varianew.style.overflow = "";
            a = a + 1
        }else {
            varia.classList.remove('Accordion__iconMinus');
            varia.setAttribute('class','Accordion__iconPlus');
            varianew = document.getElementById("pricePlusBox");
            varianew.style.height = "0px";
            varianew.style.overflow = "hidden";
            a = a + 1
        }
    }


    function removeItemAllPrice(arr, value) {
        var i = 0;
        while (i < arr.length) {
          if (arr[i].productPriceActual >= value[0] && arr[i].productPriceActual <= value[1]) {
            arr.splice(i, 1);
          } else {
            ++i;
          }
        }
        return arr;
    }


    function sortLHPrice(){
        let price = JSON.parse(localStorage.getItem('PriceArray'));
        price = price.sort(function(a,b){
            return a.productPriceActual - b.productPriceActual;
        })
        return price;
    }

    var b = 0
    function vallahOne(){
        let varia = document.getElementById("priceyOne");
        let varianew = document.getElementById("priceyBigOne");
        if (b % 2 === 0){
            varia.classList.remove('CheckBox__base');
            varia.setAttribute('class','CheckBox__selected CheckBox__base');
            varianew.classList.remove('FilterSelect__itemContent');
            varianew.setAttribute('class','FilterSelect__contentSelected FilterSelect__itemContent')
            // b = b + 1
        }else {
            varia.classList.remove('CheckBox__selected', 'CheckBox__base');
            varia.setAttribute('class','CheckBox__base');
            varianew.classList.remove('FilterSelect__contentSelected','FilterSelect__itemContent');
            varianew.setAttribute('class', 'FilterSelect__itemContent')
            // b = b + 1
        }

        // now we will filter
        if (b % 2 === 0){
            let arr;
            arr = localStorage.getItem("PriceArray");
            if(arr == null){
                arr = [];
            }else {
                arr = JSON.parse(localStorage.getItem('PriceArray'));
            }
            // let brandName = document.getElementById("brandNameBHuman").innerHTML;
            let priceLowStart = 501;
            let priceLowEnd = 1000;
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let newLeeArray = [];
            for (var i = 0; i < products.length; i++){
                if (products[i].productPriceActual >= priceLowStart && products[i].productPriceActual <= priceLowEnd){
                    newLeeArray.push(products[i]);
                }
            }
            for (var i = 0; i < newLeeArray.length; i++){
                arr.push(newLeeArray[i]);
            }
            localStorage.setItem('PriceArray', JSON.stringify(arr))
            // 
            let newResult = sortLHPrice()
            // 
            // showProducts(JSON.parse(localStorage.getItem('PriceArray')));
            showProducts(newResult);
        }else {
            let arr = JSON.parse(localStorage.getItem("PriceArray"));
            arr = removeItemAllPrice(arr,[501,1000]);
            // localStorage.setItem('PriceArray', JSON.stringify(arr))
            if (arr.length > 0){
                localStorage.setItem('PriceArray', JSON.stringify(arr))
                // 
                let newResult = sortLHPrice()
                // 
                // showProducts(JSON.parse(localStorage.getItem('PriceArray')));
                showProducts(newResult);
            }else{
                localStorage.setItem('PriceArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('allProducts')));
            }
        }
        b = b + 1;
    }

    var c = 0
    function vallahTwo(){
        let varia = document.getElementById("priceyTwo");
        let varianew = document.getElementById("priceyBigTwo");
        if (c % 2 === 0){
            varia.classList.remove('CheckBox__base');
            varia.setAttribute('class','CheckBox__selected CheckBox__base');
            varianew.classList.remove('FilterSelect__itemContent');
            varianew.setAttribute('class','FilterSelect__contentSelected FilterSelect__itemContent')
            // c = c + 1
        }else {
            varia.classList.remove('CheckBox__selected', 'CheckBox__base');
            varia.setAttribute('class','CheckBox__base');
            varianew.classList.remove('FilterSelect__contentSelected','FilterSelect__itemContent');
            varianew.setAttribute('class', 'FilterSelect__itemContent')
            // c = c + 1
        }
        // now we will filter
        if (c % 2 === 0){
            let arr;
            arr = localStorage.getItem("PriceArray");
            if(arr == null){
                arr = [];
            }else {
                arr = JSON.parse(localStorage.getItem('PriceArray'));
            }
            // let brandName = document.getElementById("brandNameBHuman").innerHTML;
            let priceLowStart = 1001;
            let priceLowEnd = 1500;
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let newLeeArray = [];
            for (var i = 0; i < products.length; i++){
                if (products[i].productPriceActual >= priceLowStart && products[i].productPriceActual <= priceLowEnd){
                    newLeeArray.push(products[i]);
                }
            }
            for (var i = 0; i < newLeeArray.length; i++){
                arr.push(newLeeArray[i]);
            }
            localStorage.setItem('PriceArray', JSON.stringify(arr))
            // 
            let newResult = sortLHPrice()
            // 
            // showProducts(JSON.parse(localStorage.getItem('PriceArray')));
            showProducts(newResult);
        }else {
            let arr = JSON.parse(localStorage.getItem("PriceArray"));
            arr = removeItemAllPrice(arr,[1001,1500]);
            // localStorage.setItem('PriceArray', JSON.stringify(arr))
            if (arr.length > 0){
                localStorage.setItem('PriceArray', JSON.stringify(arr))
                // 
                let newResult = sortLHPrice()
                // 
                // showProducts(JSON.parse(localStorage.getItem('PriceArray')));
                showProducts(newResult);
            }else{
                localStorage.setItem('PriceArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('allProducts')));
            }
        }
        c = c + 1;
    }

    var d = 0
    function vallahThree(){
        let varia = document.getElementById("priceyThree");
        let varianew = document.getElementById("priceyBigThree");
        if (d % 2 === 0){
            varia.classList.remove('CheckBox__base');
            varia.setAttribute('class','CheckBox__selected CheckBox__base');
            varianew.classList.remove('FilterSelect__itemContent');
            varianew.setAttribute('class','FilterSelect__contentSelected FilterSelect__itemContent')
            // d = d + 1
        }else {
            varia.classList.remove('CheckBox__selected', 'CheckBox__base');
            varia.setAttribute('class','CheckBox__base');
            varianew.classList.remove('FilterSelect__contentSelected','FilterSelect__itemContent');
            varianew.setAttribute('class', 'FilterSelect__itemContent')
            // d = d + 1
        }

        // now we will filter
        if (d % 2 === 0){
            let arr;
            arr = localStorage.getItem("PriceArray");
            if(arr == null){
                arr = [];
            }else {
                arr = JSON.parse(localStorage.getItem('PriceArray'));
            }
            // let brandName = document.getElementById("brandNameBHuman").innerHTML;
            let priceLowStart = 1501;
            let priceLowEnd = 2000;
            let products = JSON.parse(localStorage.getItem('allProducts'));
            let newLeeArray = [];
            for (var i = 0; i < products.length; i++){
                if (products[i].productPriceActual >= priceLowStart && products[i].productPriceActual <= priceLowEnd){
                    newLeeArray.push(products[i]);
                }
            }
            for (var i = 0; i < newLeeArray.length; i++){
                arr.push(newLeeArray[i]);
            }
            localStorage.setItem('PriceArray', JSON.stringify(arr))
            // 
            let newResult = sortLHPrice()
            // 
            // showProducts(JSON.parse(localStorage.getItem('PriceArray')));
            showProducts(newResult);
        }else {
            let arr = JSON.parse(localStorage.getItem("PriceArray"));
            arr = removeItemAllPrice(arr,[1501,2000]);
            // localStorage.setItem('PriceArray', JSON.stringify(arr))
            if (arr.length > 0){
                localStorage.setItem('PriceArray', JSON.stringify(arr))
                // 
                let newResult = sortLHPrice()
                // 
                // showProducts(JSON.parse(localStorage.getItem('PriceArray')));
                showProducts(newResult);
            }else{
                localStorage.setItem('PriceArray', JSON.stringify(arr))
                showProducts(JSON.parse(localStorage.getItem('allProducts')));
            }
        }
        d = d + 1;
    }

    // SIZE FILTERING
    // e will make the overflow visible
    // f, g and h are for checkboxes of three brands

    var e = 0;
    function xseThree(){
        let varia = document.getElementById("testingICONcontrolThree")
        let varianew;
        // original style is height: 0px, overflow: hidden
        // new style is height:auto
        if (e % 2 === 0){
            varia.classList.remove('Accordion__iconPlus');
            varia.setAttribute('class','Accordion__iconMinus');
            varianew = document.getElementById("testingMODALcontrolThree");
            varianew.style.height = "auto";
            varianew.style.overflow = "";
            e = e + 1
        }else {
            varia.classList.remove('Accordion__iconMinus');
            varia.setAttribute('class','Accordion__iconPlus');
            varianew = document.getElementById("testingMODALcontrolThree");
            varianew.style.height = "0px";
            varianew.style.overflow = "hidden";
            e = e + 1
        }
    }


// clear filter function
function showxxx(){
    // let arr = JSON.parse(localStorage.getItem("PriceArray"));
    // let arrNew = JSON.parse(localStorage.getItem("brandArray"));
    localStorage.removeItem("PriceArray");
    localStorage.removeItem("brandArray");
    window.location.href="navigationCOPY.html";
    // showProducts(JSON.parse(localStorage.getItem('allProducts')));
}