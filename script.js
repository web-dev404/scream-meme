const copyButton = document.querySelector(".ca-wrapper");
const textToCopy = document.querySelector(".ca").textContent;
const videoElement = document.getElementById("screamer");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

copyButton.addEventListener("click", () => {
  // if (!localStorage.getItem("videoPlayed")) {
  videoElement.classList.remove("hidden");
  videoElement.play();

  videoElement.addEventListener("ended", () => {
    videoElement.classList.add("hidden");

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }, 4000);

    localStorage.setItem("videoPlayed", "true");
  });
  // } else {
  // modal.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  // setTimeout(() => {
  // modal.classList.add("hidden");
  // overlay.classList.add("hidden");
  // }, 3000);
  // }

  navigator.clipboard.writeText(textToCopy).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
});
