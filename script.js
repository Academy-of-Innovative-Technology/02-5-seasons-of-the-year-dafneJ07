var winter = ;
var spring = ;
var summer = ;
var fall = ;


// Image URLs for each season (replace with your chosen image URLs)
// Make sure the images are stored in the same order as the months for that season.
var winterImages = ;
var springImages = ;
var summerImages = ;
var fallImages = ;


// Combine all season data into a single structure for the advanced challenge
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
    // Advanced Challenge: Use a single loop to process all months and images
    for (const seasonName in allSeasonsData) { // Uses for...in iterator
        if (Object.hasOwnProperty.call(allSeasonsData, seasonName)) {
            const season = allSeasonsData;
            let monthsHtml = '';


            // Use a for loop to iterate through months and images for the current season
            for (let i = 0; i < season.months.length; i++) {
                const month = season.months;
                const image = season.images;


                // Dynamically generate HTML using template literals
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
            // Insert the generated HTML into the correct target div using document.querySelector() and insertAdjacentHTML()
            document.querySelector(season.targetClass).insertAdjacentHTML('beforeend', monthsHtml);
        }
    }
}


// Call the function to display all seasons when the script loads
displayAllSeasons();




