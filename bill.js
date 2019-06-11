function calculate(){
			var input = Number(document.getElementById("value").value);
			var output = 0;
			input = input * 1024;

			if(input >= 0 && input <= 1024) {
				output += (input/10);
				} 
			else if (input > 1024 && input <=2048) {
				output += (input/10);
				output += 90;
				} 
			else if(input > 2048 && input <= 3072) {
				output += (input/5);
				output += 150;
				} 
			else if(input > 3072 && input <= 4096) {
				output += (input/7);
				output += 250;
				} 
			else  if(count >4096 && count <=5120){
            	if(count<=4403.2)
                	{
                    	res+=300;
                	}
           		 else{
               			res+=300;
                		res+=((count-4403.2)/10);
           			 }   
				}			
			document.getElementById("result").innerHTML = output;
	}	