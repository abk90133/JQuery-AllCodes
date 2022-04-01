// $("h1").hasClass("SomeRandomClass");

// $("h1").addClass("SomeRandomClass");

// $("h1").text("AnyText");

// !!!! We can also use the HTML in it using the jQuery code.  !!

// $("h1").html("<em>Hello</em>");

// For a anchor tag
// Here instread of using the attribute as whole we use the attr tag

// $("a").attr("href", "https://www.yahoo.com");

// To Add a Event Listener to the code we have that:


$("button").click(function() {
  $("h1").css("color", "purple");
});

// $("input").keypress(function(event) {
//   console.log(event.key);
// });

$("input").keypress(function(event) {
  $("h1").text(event.key);
});
