$(document).ready(function(){
    $("#designimg , #design").click(function(){
        $ ("#design").toggle()
        $ ("#designimg").toggle()
    });
    $("#developimg , #develop").click(function(){
        $("#develop").toggle()
        $("#developimg").toggle()
    });
    $("#productimg , #product").click(function(){
        $("#product").toggle()
        $("#productimg").toggle()
    });
});
