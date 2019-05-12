$(document).ready(function(){
	$("#goal-button").click(function(){
		$("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
		//$("#goal-list").append("<li class='list-item'>" + "</li>");
		$("#new-goal").val("");
		})
	})
