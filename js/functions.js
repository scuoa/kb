function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }


function setValue(value) {
    pageSize = value;
}

function reloadPage() {
  // remove zoom event listeners
  removeImageZoom();
  // reset to first page
  currentPage = 1;
  currentIndexPage = 0;
  // load new images
  loadImages();
  updatePaginationButtons();
  // reset global functions for zoom, remake zoom event listeners
  images = document.querySelectorAll("#image-gallery img");
  CurrentIndex = 0;
  descriptions = Array.from(images).map(function(img) {
      return img.dataset.description;
  });
  enableImageZoom();
}
