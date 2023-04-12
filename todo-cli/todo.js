const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    const od = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday) {
        od.push(all[i]);
        //return a[i];
      }
    }
    //console.log(od)
    return od;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    const td = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == today) {
        td.push(all[i]);
        //return a[i];
      }
    }
    return td;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    const ld = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomorrow) {
        ld.push(all[i]);
        //return a[i];
      }
    }
    return ld;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    let l = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i].dueDate == today) {
        if (list[i].completed == true) {
          l = l.concat("[x] ", list[i].title, "\n");
        } else {
          l = l.concat("[ ] ", list[i].title, "\n");
        }
      } else if (list[i].dueDate == yesterday) {
        if (list[i].completed == true) {
          l = l.concat("[x] ", list[i].title, " ", yesterday, "\n");
        } else {
          l = l.concat("[ ] ", list[i].title, " ", yesterday, "\n");
        }
      } else {
        if (list[i].completed == true) {
          l = l.concat("[x] ", list[i].title, " ", tomorrow, "\n");
        } else {
          l = l.concat("[ ] ", list[i].title, " ", tomorrow, "\n");
        }
      }
    }
    return l.trimEnd();
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

module.exports = todoList;
