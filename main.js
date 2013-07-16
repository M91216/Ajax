//Michael Bain
//1306
//Advanced Scalable Data
//$("#home").on("pageinit", function () {

	//$("#json").on("click", function(){
		
$(function(){

$.ajax({
   url       :'json/data.json',
   type      :'GET',
   dataType  :'json',
   success   : function(response){
	   console.log(response);
   },
	error : function(error, parseerror){
		console.log(error, parseerror);
	}
	
	
  });

});