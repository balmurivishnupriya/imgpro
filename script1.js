const accesskey="5x96jYd9-qFoEN3qQ_P2f3K9otkNYOAdAv9KCMYlskk"

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const searchMoreBtn=document.getElementById("show-more-btn");
let keyword= "";
let page=1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    
    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    searchMoreBtn.style.display="block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page=1;
    searchImages();
})
searchMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})