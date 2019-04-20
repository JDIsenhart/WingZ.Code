

function viewStudentStats(id, toggle)
{
	if(toggle == 0)
	{
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = "0px";
	}
	else
	{
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	}
}

function  encryptPass(){
  document.getElementById('password').innerHTML = window.btoa('password');
}

function decryptPass(){
  document.getElementById('password').innerHTML = window.atob('password');
}
