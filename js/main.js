function interrogate() {



	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName +' '+ lastName;
	console.log(fullName);

	function ageQuestion(message) {
		var age = prompt (message);
		age = parseInt(age);

		if(isNaN(age)){
			ageQuestion('How old are you? Use numbers, please');
			return false; /*tells broswer not to run the rest, but to go back and run
			again*/
		}
		if (age>=18) {
			console.log('User is an adult');
		}   else if (age>=13){console.log('User is a teenager')
			}else {console.log('User is a child')
		}
	}

	ageQuestion('how old are you?'); 

	if (firstName.toLowerCase()==='General' && lastName.tolowercase() !=='Assembley') {console.log('Hello General!')
	}

	var faveColour = prompt('What is your favorite colour');
	faveColour = faveColour.toLowerCase().trim();
	if(faveColour==='red'||
		faveColour==='green' ||
		faveColour==='blue' ||
		faveColour==='yellow') 
		{$('h1').css('color',faveColour);
		} /*trim trims off any spaces at either end of the word that the
	user types in */
	
}
//when the page loads - DOM manipulation - need to make sure that the browser has finished making the family tree is ready before running jquery.
$(function(){

	$('img').on('click', interrogate); 
	//when the user clicks a h3
	$('h3').on("click", function(){
	//Toggle the next element
	$(this).next().slideToggle(200);
	});
	
	/*several lines to 
	comment out use the magic wand*/
});