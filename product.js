document.addEventListener('DOMContentLoaded', function() {
        const wishlistIcons = document.querySelectorAll('.wishlist-icon');
        wishlistIcons.forEach((like1)=>{

        like1.addEventListener("click",(event) =>{
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
        const images = [
        'url("image/img-5.jpg")',
        'url("image/img-6.jpg")',
        'url("image/img-7.jpg")',
        'url("image/img-8.jpg")',
        'url("image/img-9.jpg")',
        'url("image/img-10.jpg")',
        'url("image/Rectangle 22.png")',
        'url("image/img-11.jpg")'
        ];

    const spotImg = document.querySelector(".spotmid-img");

    // Retrieve the selected index from local storage
    const selectedIndex = localStorage.getItem("selectedImageIndex");
        if (selectedIndex !== null) {
            spotImg.style.backgroundImage = images[selectedIndex]; // Set the background image
        }


    });
});