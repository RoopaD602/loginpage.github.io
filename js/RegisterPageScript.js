function saveData(){
	let name, email, password;
	name=document.getElementById("name").value;
	email=document.getElementById("email").value;
	password=document.getElementById("password").value;
	console.log(name+email+password);
	var NameErr = EmailErr = PasswordErr = true;
	if(name == null || name==""){
		$(".NameR").html("Plase Enter Name");
	}else{
		$(".NameR").html("");
		NameErr = false;
	}
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
	}
	else if(password.length<6){
		$(".PasswordR").html("Password should be atleast 6 character long");
	}else{
		$(".PasswordR").html(" ");
		PasswordErr = false;
	}

	if((NameErr,EmailErr,PasswordErr) == true ){
		return false
	}else{
	localStorage.setItem("name",name);
	localStorage.setItem("email",email);
	localStorage.setItem("password",password);
	
	let user_details = new Array();
	user_details = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
	if(user_details.some((v) =>{
		return v.email == email
	})){
		alert("Duplicate Data");
	}else{
		user_details.push({
			"name":name,
			"email":email,
			"password":password
			
		})
		localStorage.setItem("users",JSON.stringify(user_details));
		alert('Regsitered Successfully!')
	}
}

}