var winter = document.querySelector(".row winter");
var spring = document.querySelector(".row spring");
var summer = document.querySelector(".row summer");
var fall = document.querySelector(".row fall");

var winterImages = document.querySelector(".row winter");
var springImages = document.querySelector(".row spring");
var summerImages = document.querySelector(".row summer");
var fallImages = document.querySelector(".row fall");







const allSeasonsData = {
    "Spring": {
        months: spring,
        images: springImages,
        targetClass: ".spring"
    },
    "Summer": {
        months: summer,
        images: summerImages,
        targetClass: ".summer"
    },
    "Fall": {
        months: fall,
        images: fallImages,
        targetClass: ".fall"
    },
    "Winter": {
        months: winter,
        images: winterImages,
        targetClass: ".winter"
    }
};


function displayAllSeasons() {
  
    for (const seasonName in allSeasonsData) { 
        if (Object.hasOwnProperty.call(allSeasonsData, seasonName)) {
            const season = allSeasonsData;
            let monthsHtml = '';


         
            for (let i = 0; i < season.months.length; i++) {
                const month = season.months;
                const image = season.images;


               
                monthsHtml += `
                    <div class="col-md-4">
                        <div class="month-card">
                            <img src="${image}" alt="${month}">
                            <div class="month-card-body">
                                <p class="card-text">${month}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            document.querySelector(season.targetClass).insertAdjacentHTML('beforeend', monthsHtml);
        }
    }
}



displayAllSeasons();




