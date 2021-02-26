$(document).ready(function() {
    $("h1").click(function() {
        alert("You click h1");
    });

    $("myH2").click(function() {
    alert("You click h2");
    });

    $("btnSubmit").click(function(){
        let name = $("#name").val()
        alert(name)
        $("#myH2").text(name)
    })
});