// Function to generate a random Customer ID
function generateCustomerId() {
  const randomId = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit random number
  const customerIdField = document.getElementById("customerId");
  customerIdField.value = randomId; // Set the generated ID to the input field
}
function validate(){
				//check name
				//check for the @ symbol in email
				// for any issues generate a msg-- return that msg is required
				// to check for the above set a flag to be true and then change to false if any form condition is not met
				
				let valid= true; //our flag
				let msge= "Incomplete form: ";
				// name validation
				if(document.getElementById("name").value ==""){
					msge+= "You need to fill name."; //building a message
					valid= false; // flag is false
					
				}
				//email validation
				if(document.getElementById("email").value ==""){
					msge+= "need to fill in email.";
					valid= false;
				}else if(document.getElementById("email").value !=""){
					inputE = document.getElementById("email").value;
					let symbol= inputE.indexOf("@"); //will return the index
					if(symbol<1){
						msge+="not a valid email";
						valid false;
					}
				}
				// message validation
				if(document.getElementById("message").value ==""){
					msge+= "You need to enter a message."; //building a message
					valid= false; // flag is false
					
				}
}