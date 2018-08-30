$("#send").click(function(){
   var useremail = $("#email").val();
   var name = $("#Name").val();
   var usermessage = $("#message").val();

   if (useremail==="") {
   	 $("#error2").text('*please enter your email address');
   }
   else{
   	 $("#error2").text('');
   }


   if (name==="") {
   	$("#error1").text('*please enter your name');
   }
   else{
   	 $("#error1").text('');
   }


   if (usermessage==="") {
   	$("#error3").text('*This field is empty');
   }
   else{
   	 $("#error3").text('');
   }


});
