const reverseParagraph = document.querySelector(".about");
reverseParagraph.append(...Array.from(reverseParagraph.childNodes).reverse());  

