// JavaScript Document


for(y=0;y<2000;y+=20){
	
	var rule="<div style='position:absolute;top:"+y+"px'>"+y+"</div>";
   $("#ruler").append(rule);
}

 $("#ruler_fixed").append($("#ruler").html());