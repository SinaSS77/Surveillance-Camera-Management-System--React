let loadTasks;
//loads tasks from database to the page
$(document).ready(function() {
  //gets tasks as JSON file from /api/tasks/
  loadTasks = function() {
    $.ajax('http://localhost:8080/api/tasks/ ', { method: 'GET' })
    .then((data) => {
      return data
    })
      .then(renderTasks); //renderTasts.js
  };
  loadTasks();
});
