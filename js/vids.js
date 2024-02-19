document.addEventListener("DOMContentLoaded", function() {
    var videos = [
        "vid/VID_20210220_193958.mp4",
        // Add more video paths here...
    ];

    function loadVideos() {
        var gallery = document.querySelector("#video-gallery .row");
        gallery.innerHTML = "";
        for (var i = 0; i < videos.length; i++) {
            var col = document.createElement("div");
            col.classList.add("col-md-12", "col-sm-12", "col-12", "col-xl-12", "col-lg-12", "mt-3", "mb-3");
            var videoContainer = document.createElement("div");
            videoContainer.classList.add("video-container");
            var video = document.createElement("video");
            video.setAttribute("controls", "");
            video.style.maxWidth = "100%"; // Set max width to 100% to ensure the video fits within its container
            var source = document.createElement("source");
            source.setAttribute("src", videos[i]);
            source.setAttribute("type", "video/mp4");
            video.appendChild(source);
            videoContainer.appendChild(video);
            col.appendChild(videoContainer);
            gallery.appendChild(col);
        }
    }

    loadVideos();
});
