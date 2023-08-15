function saveData(){
	let email,password;
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	if(email == " "){
		$(".EmailR").html("Please Enter Email");
	}else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            $(".EmailR").html("Please enter a valid email address");
        } 
		else{
		$(".EmailR").html("");
		EmailErr = false;
	} 
    }
	
	if(password == ""){
		$(".PasswordR").html("Please Enter Password");
	}else if(password.length<6){
		$(".PasswordR").html("Password should be atleast 6 character long");
	}else{
		$(".PasswordR").html(" ");
	}
	
	if(email != "" || email || password !="" || password ){
		let user_details = new Array();
	user_details = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
	if(user_details.some((v)=>
	{
		return v.email == email && v.password == password;
	})){
		alert("Login Successful!")
		let current_user = user_details.filter((v)=>{
			return v.email==email && v.password==password
		})[0];
		localStorage.setItem("name",current_user.name);
		localStorage.setItem("email",current_user.email);
		window.location.href="Profile.html";
	}
	else{
		alert("Login Fail, Please Register to Login");
	}
		
	}
	
	
}