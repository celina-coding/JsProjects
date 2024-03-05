 // let fruitsArray=['Mango','Banana','Apple'];
 let todoListe=[];
        
 renderTodoList();


 function renderTodoList(){
     let todoListeHtml='';

     for (let i =0;i<todoListe.length;i++){
         const todo=todoListe[i];
         const name = todo.name;
         const dueDate=todo.dueDate;
         const html=`
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
            todoListe.splice(${i},1);
            renderTodoList();
             " class="delete-todo-btn">Delete</button>
           `;
         todoListeHtml+=html;
     }
     console.log(todoListeHtml);
     document.querySelector('.js-task').innerHTML=todoListeHtml;
 }
 

 function addToList(){
     const inputElement=document.querySelector('.js-todo');
     let name=inputElement.value ;

     const inputDateElement=document.querySelector('.js-dueDate');
     let dueDate=inputDateElement.value;


     todoListe.push({
         name:name,
         dueDate:dueDate
     });
     console.log(todoListe);

     inputElement.value='';

     renderTodoList();
     

 }