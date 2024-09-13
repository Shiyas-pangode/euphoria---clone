document.addEventListener('DOMContentLoaded',() => {

    const colour = document.querySelectorAll(".colours");
    const size = document.querySelectorAll(".card-size");
    const size1 = document.querySelector(".card-size1");
    const size2 = document.querySelectorAll(".card-size2");
    const size3 = document.querySelectorAll(".card-size3");
    const size4 = document.querySelectorAll(".card-size4");
    const allColour = document.querySelectorAll(".colours ,.colours1, .colours2, .colours3")
    const allsize = document.querySelectorAll(".card-size,.card-size1,.card-size2,.card-size3,.card-size4 ")
    function changecolor() {
        resetcolour();
        this.style.borderColor = "#3F4646";  
    }
    colour.forEach( (colour) => {
        colour.addEventListener('click',changecolor);
        
    });
    function resetcolour() {
        allColour.forEach(allcolour =>{
            allcolour.style.borderColor="#fff"
        })
    }
    function resetstyles(){
        allsize.forEach(allsize  =>{
            allsize.style.backgroundColor = "#fff";
            allsize.style.color = "#3C4242";
        });
    }
    function handleClick(event) {
        resetstyles();
        if (event.target.classList.contains('card-size')) {
            event.target.style.backgroundColor="black";
            event.target.style.color = '#fff';
        } else if (event.target.classList.contains('card-size1')) {
            event.target.style.backgroundColor="black";
            event.target.style.color="#fff";
            event.size.style.backgroundColor="#fff";
        }else if (event.target.classList.contains('card-size2')) {
            event.target.style.backgroundColor="black";
            event.target.style.color="#fff";
        }
        else if (event.target.classList.contains('card-size3')) {
            event.target.style.backgroundColor="black";
            event.target.style.color="#fff";
        }
        else if (event.target.classList.contains('card-size4')) {
            event.target.style.backgroundColor="black";
            event.target.style.color="#fff";
        }
    }
    document.addEventListener('click',handleClick);
    function changebackground() {
        this.style.backgroundColor="black";
        this.style.color="#fff"
    }
    size.forEach( (size) =>{
        size.addEventListener('click',changebackground);
        
    });

    const leftButton = document.querySelector(".left-arrow");
    const rightButton = document.querySelector(".right-arrow");
    const sliderContent = document.querySelector(".arrival-content");
    const visualcard = 0 ;
    let currentIndex = 0 ;
    const cardWidth = document.querySelector(".arrival-card-content").offsetWidth + 951.58 ;
    const totalcard = document.querySelectorAll(".arrival-card-content").length;
    

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
            rightButton.style.display="flex";
        }
              
    });
    rightButton.addEventListener('click',() =>{
        if (currentIndex === 0) {
            currentIndex++ ;
            updateSlider();
            rightButton.style.display="none";
            
        }else {
            currentIndex=totalcard - visualcard;
            updateSlider();
           
        }
    });
    
    function updateSlider() {
        sliderContent.style.transform =`translateX(-${ currentIndex * cardWidth }px)`;
    }
    const wishlist = document.querySelectorAll(".wishlist ");
    
    
    wishlist.forEach((like)=>{
        
        like.addEventListener("click",(event) =>{
            const redFilter = "invert(1) sepia(1) saturate(10000%) hue-rotate(0deg)";
            // const redFilter ="red"
           if (event.target.style.filter===redFilter){
            event.target.style.filter="";
            // localStorage.setItem("imageFilter","");
           } else{
            event.target.style.filter=redFilter;
            // localStorage.setItem("imageFilter",redFilter);
           }
        });
    });
    const wishList = document.querySelectorAll(".wish-list ");
    
    
    wishList.forEach((like2)=>{
        
        like2.addEventListener("click",(event) =>{
            const redFilter1 = "invert(1) sepia(1) saturate(10000%) hue-rotate(0deg)";
            
           if (event.target.style.filter===redFilter1){
            alert("hi")
            event.target.style.filter="";
            
           } else{
            alert("hi")
            event.target.style.filter=redFilter1;
            
           }
        });
    });
   
    const backgrounds = [
        'url("image/bg-1.jpg")',
        'url("image/bg-2.jpg")',
        'url("image/bg-3.jpg")'  
    ];
    
    let currentIndex1 = 0;
    const spotlight = document.getElementById('spotlight');
    
    document.querySelector('.slide-left').addEventListener('click', () => {
        currentIndex1 = (currentIndex1 === 0) ? backgrounds.length - 1 : currentIndex1 - 1;
        updateBackground();
    });
    
    document.querySelector('.slide-right').addEventListener('click', () => {
        currentIndex1 = (currentIndex1 === backgrounds.length - 1) ? 0 : currentIndex1 + 1;
        updateBackground();
    });
    
    function updateBackground() {
        spotlight.style.backgroundImage = backgrounds[currentIndex1];
    }
    //fetch json data
    // Step 1: Get the product ID from the URL
   // product.js
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    fetch('products.json') // Assuming your JSON file is named products.json
        .then(response => response.json())
        .then(data => {
            const product = data.find(p => p.id == productId);

            if (product) {
                document.getElementById('product-image').innerHTML = `<img src="${product.img}" alt="${product.title}">`;
                document.getElementById('product-title').textContent = product.title;
                document.getElementById('product-description').textContent = 'Product description goes here'; // Add your product description if available
            } else {
                // Handle case where product is not found
                document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
            }
        })
        .catch(error => console.error('Error fetching product data:', error));
});

    


    


}); 


    
    