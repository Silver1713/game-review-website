function showModals(titles, description, footerHtml){
    var title = document.getElementById("modalTitle");
    var desc = document.getElementById("modalDesc");
    var footerhtml = document.getElementById("footerhtml");
    title.innerHTML = titles;
    desc.innerHTML = description;
    footerhtml.innerHTML = footerHtml
    //Jquery
    $('#loginResponse').modal('show');
}