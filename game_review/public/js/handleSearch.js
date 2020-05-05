function handleSearch(searchBar, searchBtn){
    if (searchBar && searchBtn){
        window.location.href = '/searchResult.html?query='+ searchBar.value;

    }
}
 

function onClickSearch(){
    var bar = document.getElementById('searchInput');
    var btn = document.getElementById('searchButton')
    handleSearch(bar, btn);
}
