const container = document.querySelector(".container")
const obj=[{
    id:"Ubtan-face-wash...",
    image:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400",
    paragraph:"Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml",
    rating: 4.9,
    reviews: 87
},{
    id:"onion hair shampoo...",
    image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400",
    paragraph:"Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml",
    rating:4.7,
    reviews: 673
},{
    id:"vitamin c foaming face wash...",
    image:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_foaming_face_wash_1.jpg?auto=format&fit=crop&w=332&auto=compress",
    paragraph:"Vitamin C Foaming Face Wash with Vitamin C and Turmeric for Skin Illumination - 150ml",
    rating: 4.3,
    reviews: 924
},{
    id:"onion hair mask...",
    image:"https://honasa-mamaearth-production.imgix.net/o/n/onion_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400",
    paragraph:"Mamaearth onion hair mask",
    rating: 4.1,
    reviews: 442
},{
    id:"ubtan face scrub...",
    image:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan_face_scrub_1.jpg?auto=format&fit=crop&w=332&auto=compress",
    paragraph:"Ubtan Face Scrub with Turmeric and Walnut for Tan Removal - 100g",
    rating:3.9,
    reviews: 237
},{
    id:"ubtan face wash...",
    image:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1.jpg?auto=format&fit=crop&w=332&auto=compress",
    paragraph:"Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 100ml",
    rating:4.2,
    reviews: 219
},{
    id:"vitamin C day cream...",
    image:"https://honasa-mamaearth-production.imgix.net/v/i/vit-c-day_cream-1_1.jpg?auto=compress&fit=scale&w=400&h=400",
    paragraph:"Vitamin C Day Cream with Vitamin C and SPF 20 for Skin Illumination - 50g",
    rating: 4.0,
    reviews: 141
},{
    id:"vitamin C oil free...",
    image: "https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-oil-moisturizer-with-box-_-ingredients-copy.jpg?auto=format&fit=crop&w=332&auto=compress",
    paragraph: "Vitamin C Oil-Free Moisturizer For Face with Vitamin C and Gotu Kola for Skin Illumination - 80 ml",
    rating: 4.6,
    reviews: 196
},{
    id:"Tea Tree Facewash...",
    image:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400",
    paragraph:"Tea Tree Facewash for acne and pimples, 100ml",
    rating: 3.7,
    reviews: 144
}]
obj.sort(function(a,b){
    return a.rating-b.rating
})
const basket = []
const generate=()=>{
    return container.innerHTML= obj.map((e)=>{
        return `<div class="c1">
        <div class="logo">Best seller</div>
        <img src=${e.image} alt="mamaearth" id="img1">
        <p>${e.paragraph}</p>
        <p class="para"><i class="fa-solid fa-star rate"></i> ${e.rating} <span> | ${e.reviews}</span></p>
        <button id=${e.id} class="btn" onclick="increment(${e.id})">Add to cart</button>
    </div>`
    })
}
generate()
const mini = document.querySelector(".minicontainer")
const cart = document.getElementById("cart")
cart.addEventListener("click",()=>{
    mini.classList.toggle("visible")
})

const increment=(id)=>{
    let select = id
    let search = basket.find(function(x){return x.ID===select.id})
    console.log(search);
    if(search===undefined){
        basket.push({
           ID: select.id,
           item: 1
       })
    }
    else{
        search.item+=1
    }
     console.log(basket);
     function checkout(){
         return mini.innerHTML=basket.map((x)=>{
             console.log(x.ID);
             return `<div class="flex">
             <i class="fa-solid fa-heart pink"></i>
             <p>${x.ID}</p>
             <p>qyt: ${x.item}</p>
         </div>`
         })
     }
     checkout()
}