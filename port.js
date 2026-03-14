let viewCount = localStorage.getItem("portfolio_view_count");

if(viewCount){
    viewCount = Number(viewCount) + 1;
}else{
    viewCount = 1;
}

localStorage.setItem("portfolio_view_count", viewCount);

document.getElementById("view-count").textContent = viewCount;

