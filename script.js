const form = document.getElementById("form");
const formRange = document.getElementById("form_range");
const sliderRail = document.getElementById("slider_rail");

const formChackbox = document.getElementById("form_checkbox");

const topPages = document.getElementById("top__pages-insert");
const topPrice = document.getElementById("top__price-insert");

// ? handle price
const handlePrice = () => {
   let range = formRange.value;
   let check = formChackbox.checked;

   switch (range) {
      case "0":
         topPages.textContent = "10k";
         !check
            ? (topPrice.textContent = "$4")
            : (topPrice.textContent = `$${4 - 4 * 0.25}`);

         break;
      case "1":
         topPages.textContent = "50k";
         !check
            ? (topPrice.textContent = "$8")
            : (topPrice.textContent = `$${8 - 8 * 0.25}`);

         break;

      case "2":
         topPages.textContent = "100k";
         !check
            ? (topPrice.textContent = "$16")
            : (topPrice.textContent = `$${16 - 16 * 0.25}`);

         break;
      case "3":
         topPages.textContent = "300k";
         !check
            ? (topPrice.textContent = "$24")
            : (topPrice.textContent = `$${24 - 24 * 0.25}`);

         break;
      case "4":
         topPages.textContent = "500k";
         !check
            ? (topPrice.textContent = "$28")
            : (topPrice.textContent = `$${28 - 28 * 0.25}`);

         break;
      case "5":
         topPages.textContent = "1M";

         !check
            ? (topPrice.textContent = "$36")
            : (topPrice.textContent = `$${36 - 36 * 0.25}`);

         break;

      case "6":
         topPages.textContent = "1.5M";

         !check
            ? (topPrice.textContent = "$40")
            : (topPrice.textContent = `$${40 - 40 * 0.25}`);

         break;

      default:
         return;
   }
};

formRange.addEventListener("input", (e) => {
   sliderRail.style.width = e.target.value * 14.3 + "%";
   handlePrice();
});

formChackbox.addEventListener("change", () => {
   handlePrice();
});

// 
form.addEventListener("submit", (e) => {
   e.preventDefault();
});
