var winter;
var spring;
var summer;
var fall;

var winterImages;
var springImages;
var summerImages;
var fallImages;

winter = ["December", "January", "February" ];
spring = ["March", "April", "May"];
summer = ["June", "July", "August"];
fall = ["September", "October", "November"];

winterImages = ["https://nationaltoday.com/wp-content/uploads/2019/12/christmas-1-1200x834.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRGQYIjpdRkM5GQLvWDENM_TLdoQwU0OysQ&s", "https://t4.ftcdn.net/jpg/02/41/43/63/360_F_241436363_jp0KLco9RmoHY5hpw2z7lKgi7961Qjs0.jpg"];
springImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejJwvBNgirOuex5NtCkdKjVLdGr5lXURSbA&s", "https://www.projectsforpreschoolers.com/wp-content/uploads/2011/03/april1.gif", "https://www.thefactsite.com/wp-content/uploads/2020/04/may-facts.jpg"];
summerImages = ["https://funworldfacts.com/wp-content/uploads/2024/11/facts-about-june.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRiB3EB43cOkdBgvKuU688yoDpUuPLorIwQ&s", "https://www.madewithhappy.com/wp-content/uploads/month-of-august.jpg"];
fallImages = ["https://media.istockphoto.com/id/1267485165/vector/september-text-lettering-typography-vector-illustration-as-poster-postcard-greeting-card.jpg?s=612x612&w=0&k=20&c=AhTukEabgsari2_JW_HbZhQpXZF4WaQnvVXOtT2qHME=", "https://media.istockphoto.com/id/1054931018/photo/hello-october-with-pumpkins-at-night.jpg?s=612x612&w=0&k=20&c=wIP93DslUKnFxmMYT_Nl9bqOoiPtKONamsMCrB65kxU=", "https://media.timeout.com/images/106193491/750/562/image.jpg"];

let spring_container_DOM = document.querySelector(".spring");
let summer_container_DOM = document.querySelector(".summer");
let fall_container_DOM = document.querySelector(".fall");
let winter_container_DOM = document.querySelector(".winter");

let Get_Template = (month, image_url) => {
    let Template = `
    <div class="month-card">
        <img src="${image_url}" class="month-img">
        <div class="month-body">${month}</div>
    </div>`;
    return Template;
}

function load_season(container_dom, months_array, images_array){
    container_dom.innerHTML = "";
    months_array.forEach( (month, index) => {
        
        let Month_Image_URL = images_array[index];

        let Template = Get_Template(month, Month_Image_URL);
        container_dom.insertAdjacentHTML("beforeend", Template);

    });
}

function displayWinter() {
    load_season(winter_container_DOM, winter, winterImages);
}


function displaySpring() {
    load_season(spring_container_DOM, spring, springImages);
}

function displaySummer() {
    load_season(summer_container_DOM, summer, summerImages);
}

function displayFall() {
    load_season(fall_container_DOM, fall, fallImages);
}


function displayAllSeasons() {
    displayWinter();
    displaySpring();
    displaySummer();
    displayFall();
}

displayAllSeasons();