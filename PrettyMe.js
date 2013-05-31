(function($){

 
  
  var methods={ 
                  
			   init:function() 
				 { 
				     return this.each(function(){   // maintain chainability
				        
					 var obj=$(this);					 // jQuery Object	
				   
					  
					  console.log(obj);
					  
					  
				     if(obj.is("input[type=text]"))
					 {
					    prettyInput(obj);
					 }
				     else if (obj.is("body"))
					 {  
	
					   prettyBody(obj)
					 }
					 
					 else if (obj.is("input[type='submit'],button"))
					 {
					   prettyButton(obj)
					 }
					 
					 
					 else if( obj.is("form"))
					 {
					  
					   prettyForm(obj)
					 }
					 else if(obj.is("p"))
					 {
					 
					 
					 }
					 
				     else{
					 
					   $.error("Libary does not support this tag");
					 }
				   });
				 }
				 
				 
				 ,
				 reset:function()
				 {
				    return this.each(function(){
					 
					 
					 var obj=$(this) // jquery object wrapper
					
					 if(obj.is("input"))
					 {
					 
					   obj.removeClass("prettyInput")
					 }
					
					 else if(obj.is("body"))
					 {
					  
					    obj.removeClass("prettyBody");
					 
					 }
					 else {
					 
					 
					 }
					 
					})
				 
				 }
  
      }

	 $.fn.PrettyMe=function(method)
	 {
	   if(methods[method])
	   {
	      return  methods[method].apply(this,Array.prototype.slice.call(arguments,1));
	   
	   }
	   
	   else {
	   
	     $.error("The method " + method + "does not exist ");
	   
	   }
	 }
	 
	 function prettyInput(input){
	 
	   input.addClass("prettinput");
	 }
	 
	 
	 function prettyBody(body)
	 {
	   body.addClass("prettyBody");
	 }
	 
})(jQuery)