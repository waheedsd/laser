function setValue(){
	var task_Details = {};
	task_Details.mNum = $("#materialNum").val();
	task_Details.mType = $("#materialType").val();
	task_Details.material = $("#select").val();
	console.log(task_Details);
	$.ajax({
		url : 'http://localhost:3000/data/taskManager',
		method : 'POST',
		dataType : 'JSON',
		contentType: 'application/json',
		data : JSON.stringify(task_Details),	
		success : function(data){
			alert(data);
			console.log(data);
			console.log("success");
			console.log(JSON.stringify(data));
		},
		error : function(err){
			console.log(err);
			alert("error");
		}
	})
}