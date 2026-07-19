// ===============================
// ElectroHub - About Page
// ===============================

const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("moreText");

if (readBtn && moreText) {

    readBtn.addEventListener("click", function () {

        if (moreText.style.display === "none" || moreText.style.display === "") {

            moreText.style.display = "block";
            readBtn.innerHTML = "Read Less";

        } else {

            moreText.style.display = "none";
            readBtn.innerHTML = "Read More";

        }

    });

}