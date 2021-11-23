const taskDescription = [];
const taskName = [];
const ids = [];
const uploadconfirm = document
  .getElementById("uploadconfirm")
  .addEventListener("click", () => {
    Papa.parse(document.getElementById("uploadfile").files[0], {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: function (results) {            
        let countTasks = results.data.length;
        for (let i = 0; i < countTasks; i++) {
          taskDescription.push(results.data[i].description);
          taskName.push(results.data[i].name);
          ids.push(results.data[i].id);
        }
        console.log(taskDescription);
        console.log(taskName);
        console.log(ids);
      },
    });
  });