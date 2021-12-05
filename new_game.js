let category = "prog";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropdown_button')) {
      var dropdowns = document.getElementsByClassName("dropdown-options");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function setCat(cat_selection)
{
    category = cat_selection;
}  

function play()
{
    //sessionStorage.setItem("category", category);
    var url = './main_game.html?category=' + encodeURIComponent(category);
    window.location.href = url;
}