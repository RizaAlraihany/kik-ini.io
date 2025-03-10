document.getElementById("toggleButton").addEventListener("click", function () {
  const container = document.getElementById("containerUcapan");
  const hloGroup = document.querySelector(".hloGroup");
  const button = document.querySelector("#toggleButton");
  const description = document.querySelector(".description");
  container.style.display =
    container.style.display === "none" ? "block" : "none";
  hloGroup.classList.toggle("hidden");
  button.classList.toggle("hidden");
  description.classList.toggle("hidden");
  if (container.style.display === "block") {
    startTypingAnimation();
  }
});

const contactForm = document.getElementById("myForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);
  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      // url thank you
      window.location.href = "thankyou.html";
    })
    .catch((e) => alert("Error occured"));
});

window.onload = function () {
  const savedContent = localStorage.getItem("textareaContent");
  if (savedContent) {
    document.getElementById("myTextarea").value = savedContent;
  }
};

function startTypingAnimation() {
  const text =
    "Aku ingin jujur kalau aku mulai punya perasaan yang cukup kuat padamu. Aku nggak nyangka bisa ngerasain ini. Aku tahu ini mungkin agak tiba-tiba, tapi aku harap kamu bisa memaklumi. Aku sebenarnya bingung juga sama perasaan ini, tapi penasaran, pernah nggak sih kamu ngerasain hal yang sama?";
  const typingText = document.getElementById("typingText");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  type();
}
