document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "images/1.png",
        "images/e1.png",
        "images/e2.png",
        "images/e4.png",
        "images/e5.png",
        "images/e6.png",
        "images/e7.png",
        "images/IMG_20191128_164357.jpg",
        "images/IMG_20191211_002316.jpg",
        "images/0.jpg",
        "images/2.png",
        "images/3.png",
         // Add more image paths here...
    ];
    var currentIndexPage = 0;
    var pageSize = 60;
    var currentPage = 1;

    function loadImages() {
        var gallery = document.querySelector("#image-gallery .row");
        gallery.innerHTML = "";
        var endIndexPage = Math.min(currentIndexPage + pageSize, images.length);
        for (var i = currentIndexPage; i < endIndexPage; i++) {
            var col = document.createElement("div");
            col.classList.add("col-md-6", "col-sm-12", "col-12", "col-xl-6", "col-lg-6", "mt-3", "mb-3");
            var img = document.createElement("img");
            img.classList.add("img-fluid", "rounded");
            /* img.setAttribute("data-description", "Description for Image"); */
            img.src = images[i];
            col.appendChild(img);
            gallery.appendChild(col);
        }
        updatePaginationInfo();
    }

    function updatePaginationInfo() {
        var paginationInfo = document.querySelector(".pagination-info");
        paginationInfo.textContent = "Page " + currentPage + " of " + Math.ceil(images.length / pageSize);
    }

    function updatePaginationButtons() {
        document.getElementById("prev-page").disabled = currentIndexPage === 0;
        document.getElementById("next-page").disabled = currentIndexPage + pageSize >= images.length;
    }

    loadImages();
    updatePaginationButtons();

    document.getElementById("prev-page").addEventListener("click", function() {
        currentIndexPage -= pageSize;
        if (currentIndexPage < 0) {
            currentIndexPage = 0;
        }
        currentPage--;
        loadImages();
        updatePaginationButtons();
    });

    document.getElementById("next-page").addEventListener("click", function() {
        currentIndexPage += pageSize;
        currentPage++;
        loadImages();
        updatePaginationButtons();
    });

    // Event delegation for zooming images
    document.getElementById("image-gallery").addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName === "IMG") {
            var currentIndex = Array.from(target.parentNode.parentNode.children).indexOf(target.parentNode);
            var descriptions = Array.from(document.querySelectorAll("#image-gallery img")).map(function(img) {
                return img.dataset.description;
            });
            showZoomed(currentIndex, descriptions);
        }
    });
});
