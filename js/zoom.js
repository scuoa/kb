var images = document.querySelectorAll("#image-gallery img");
var currentIndex = 0;
var descriptions = Array.from(images).map(function(img) {
    return img.dataset.description;
});

function myEventListener(event) {      
    var target = event.target;
    if (target.tagName === "IMG") {
        currentIndex = Array.from(images).indexOf(target);
        showZoomed(currentIndex, descriptions, images);
    }
}

// Function to build event listeners for zooming images
function enableImageZoom() {
    // Event delegation for zooming images
    document.getElementById("image-gallery").addEventListener("click", myEventListener);
}

// Function to remove event listeners for zooming images
function removeImageZoom() {
    // Event delegation for zooming images
    document.getElementById("image-gallery").removeEventListener("click", myEventListener);
}


// Function to show the zoomed-in image
function showZoomed(index, descriptions, images) {
    var zoomedContainer = document.createElement("div");
    zoomedContainer.classList.add("zoomed-image");

    var zoomedImage = images[index].cloneNode(true);
    zoomedContainer.appendChild(zoomedImage);

    // Add image description below the zoomed-in image
    var description = document.createElement("div");
    description.classList.add("image-description");
    description.textContent = descriptions[index];
    zoomedContainer.appendChild(description);

    // Create thumbnail band container
    var thumbnailBand = document.createElement("div");
    thumbnailBand.classList.add("thumbnail-band");

    // Add thumbnails to the band
    var startIndex = Math.max(0, index - 5);
    var endIndex = Math.min(images.length - 1, index + 5);
    var visibleImagesCount = endIndex - startIndex + 1;
    if (visibleImagesCount < 11) {
        if (endIndex === images.length - 1) {
            startIndex = Math.max(0, endIndex - 10);
        } else {
            endIndex = Math.min(images.length - 1, startIndex + 10);
        }
    }
    for (var i = startIndex; i <= endIndex; i++) {
        var thumbnail = document.createElement("img");
        thumbnail.classList.add("thumbnail");
        thumbnail.src = images[i].src;
        if (i === index) {
            thumbnail.classList.add("highlighted");
        }
        thumbnail.addEventListener("click", function(event) {
            var thumbnailIndex = Array.from(thumbnailBand.children).indexOf(this) + startIndex;
            zoomedContainer.innerHTML = "";
            showZoomed(thumbnailIndex, descriptions, images);
        });
        thumbnailBand.appendChild(thumbnail);
    }

    // Append thumbnail band to zoomed container
    zoomedContainer.appendChild(thumbnailBand);

    // Add left arrow button
    var arrowLeft = document.createElement("button");
    arrowLeft.classList.add("arrow-zoom", "arrow-left-zoom");
    arrowLeft.innerHTML = "&#10094;";
    arrowLeft.addEventListener("click", function(event) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        zoomedContainer.innerHTML = "";
        showZoomed(currentIndex, descriptions, images);
    });
    zoomedContainer.appendChild(arrowLeft);

    // Add right arrow button
    var arrowRight = document.createElement("button");
    arrowRight.classList.add("arrow-zoom", "arrow-right-zoom");
    arrowRight.innerHTML = "&#10095;";
    arrowRight.addEventListener("click", function(event) {
        currentIndex = (currentIndex + 1) % images.length;
        zoomedContainer.innerHTML = "";
        showZoomed(currentIndex, descriptions, images);
    });
    zoomedContainer.appendChild(arrowRight);

    // Add event listener to remove the zoomed-in image when clicked
    zoomedContainer.addEventListener("click", function() {
        document.body.removeChild(zoomedContainer);
    });

    document.body.appendChild(zoomedContainer);
}
