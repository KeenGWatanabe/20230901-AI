function promptKeywords() {
    const keywords = [];
    const outputElement = document.getElementById("output");
   
    for (let i = 0; i < 5; i++) {
    const keyword = prompt(`Enter keyword ${i + 1}:`);
    keywords.push(keyword);
    }
   
    outputElement.textContent = keywords.join(",");
   }
   
   const userKeywords = promptKeywords();
   console.log(userKeywords);