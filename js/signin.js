//Validate sign in
function signin(){
var n = document.getElementById('name').value;
var p = document.getElementById('pass').value;


if (n == null || n == "") {
        alert("Name required")
        return false;
        
    }else if (p == null || p == ""){
    	alert("Password required")
    	return false;
    	
    }else {
        $("img").before('Welcome back ' + n +'!');	
        $( "form" ).hide();
        $("button").hide();
    	
    	return false;
    }
}
//
$( "#nosignin" ).click(function() {
    $( "form" ).hide();
    $( this ).slideUp();
    $("#signin").show();
});

//
$( "#signin" ).click(function(){
    $("form").show();
    $("#nosignin").show();
    $(this).hide();
});

