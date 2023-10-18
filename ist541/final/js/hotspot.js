// JavaScript Document
$( function() {
   $("map area").click( function(a){
	   a.preventDefault();
	   $('#myModal').modal("show");
	   
	   if ($(this).attr("id") == "Articles") {
		   $("#feedback").css("color","green");
		   $("#feedback").html("This takes us to the knowledge base articles, for self help.");
	   }

      if ($(this).attr("id") == "Chat") {
         $("#feedback").css("color","green");
         $("#feedback").html("This opens a chat with a support staff immediately!");
      }

      if ($(this).attr("id") == "Case") {
         $("#feedback").css("color","green");
         $("#feedback").html("This is the button to submit a ticket.");
	 }
      if ($(this).attr("id") == "Password") {
         $("#feedback").css("color","green");
         $("#feedback").html("This is a link to reset your password.");
	  }
   });
}); //end main jQuery function
   