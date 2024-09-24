
document.addEventListener("DOMContentLoaded", function() {
    const popupButton = document.querySelector(".popup-button");

    function showPopup() {
        popup.style.display = "flex";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    setTimeout(showPopup, 1000);

    popupButton.addEventListener("click", closePopup);
});