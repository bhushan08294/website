var baseURL = "http://whiteboard.dbsprojects.ie:8080/"

function fetch(completeURL)
{
	return new Promise(function(resolve, reject) 
	{
		var xhr = new XMLHttpRequest();
		xhr.open("GET", completeURL, true);
  
		xhr.onreadystatechange = function() 
		{
			if (xhr.readyState == XMLHttpRequest.DONE) 
			{
				resolve(JSON.parse(this.responseText));
			}
			if(xhr.status != 200)
			{
				reject("Error");
			}
		};
		
		xhr.send();
	})
};


function submitButton() {
	
	var subject = document.getElementById("subject").value;
	var content = document.getElementById("area").value;
	var completeURL = userURL+"add?subject="+subject+"&content="content";

	fetch(completeURL).then(function(provided) 
	{
		document.getElementById("profilePicture").src = provided.avatar_url;      
    }, 
	function(err) 
	{
     alert(err);
    });
	 
}

