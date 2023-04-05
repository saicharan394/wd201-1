const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      odue=[];
      for (let i=0; i<todos.all.length; i++){
          if (todos.all[i].dueDate == yesterday){
              odue.push(todos.all[i]);
          }
        }
        return odue;

    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      tdue=[];
      for (let i=0; i<todos.all.length; i++){
          if (todos.all[i].dueDate == today){
              tdue.push(todos.all[i]);
              //return a[i];
          }
      }
      return tdue;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      ldue=[];
      for (let i=0; i<todos.all.length; i++){
          if (todos.all[i].dueDate == tomorrow){
              ldue.push(todos.all[i]);
              //return a[i];
          }
      }
      return ldue;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      l=''
      for (let i=0; i<list.length;i++){
          if (list[i].dueDate==today){
              if (list[i].completed==true){
              l=l.concat("[x] ",list[i].title,"\n");
              }else{
                  l=l.concat("[ ] ",list[i].title,"\n");
              }
          }
          else if(list[i].dueDate==yesterday){
              if (list[i].completed==true){
              l=l.concat("[x] ",list[i].title," ",yesterday,"\n");
              }else{
                  l=l.concat("[ ] ",list[i].title," ",yesterday,"\n");
              }
          }else{
              if (list[i].completed==true){
              l=l.concat("[x] ",list[i].title," ",tomorrow,"\n");
              }else{
                  l=l.concat("[ ] ",list[i].title," ",tomorrow,"\n");
              }
          }     
      };
       return l.trimEnd();
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")