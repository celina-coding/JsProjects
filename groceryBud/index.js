// ****** select items **********
const groceryForm = document.querySelector('.grocery-form');
const alrt = document.querySelector('.alert');
const list = document.querySelector('.grocery-list');
const item = document.getElementById('item');
const submitBtn = document.querySelector('.btn-submit');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');  

// ****** edit options **********
let edtFlag=false;
let edtId='';
let edtElement

// ****** event listeners **********
groceryForm.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearItems);
// ****** functions **********
function addItem(e){
    e.preventDefault();
    //get the submitted value
    const value = item.value;
    //set the id 
    const id= new Date().getTime().toString();
    // console.log(id);
    //check the edts
    if(value!=='' && edtFlag===false){
        // console.log('add item');
        //creating an article alement
        let element = document.createElement('article');
        //add the class grocery-item
        element.classList.add('grocery-item');
        //add the id to each item
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML=`<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edt-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`;
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edt-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        // append the child
        list.appendChild(element);
        // add the class show-container
        groceryContainer.classList.add('show-container');
        //display the succes alert
        displayAlert('item added succesfult','succes');
        // set local storage
        addToLocalStorage(id,value);
        // set to default
        setBackToDefault();
    }else if(value!=='' && edtFlag===true){
        // console.log('edited value');
        edtElement.innerHTML = value;
        //alert 
        displayAlert('item edited','succes');
        //editLocalStorage
        editLocalStorage(edtId,value);
        //set back to default
        setBackToDefault();
    }else{
        // console.log('empty value');
        displayAlert('please enter value','danger');
    }
}

function displayAlert(text,type){
    alrt.textContent=text;
    alrt.classList.add(`alert-${type}`);
    //remove alert
    setTimeout(function(){
        alrt.textContent='';
        alrt.classList.remove(`alert-${type}`);
    },1000);
}

function setBackToDefault(){
    item.value='';
    edtFlag=false;
    edtId='';
    submitBtn.textContent = "submit";
}

function clearItems(){
    const groceryItem = document.querySelectorAll('.grocery-item');
    if(groceryItem.length>0){
        //remove the items from the list
        groceryItem.forEach(function(item){
            list.remove(item);
        })
    }
    // hide the container
    groceryContainer.classList.remove('show-container');
    // display alert
    displayAlert('list cleared','danger');
    setBackToDefault();
    //remove item from local storage
    removeFromLocalStorage();
    
}
// delete function
function deleteItem(e){
    // console.log('item deleted')
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length===0){
        //hide the show container class
        groceryContainer.classList.remove('show-container');
        //disply alert
        displayAlert('list cleared','danger');
    }else{
        //disply alert
        displayAlert('item deleted','danger');
    }
    setBackToDefault();
    removeFromLocalStorage(id);
}
//edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    submitBtn.innerHTML='edit';
    edtElement= e.currentTarget.parentElement.previousElementSibling;
    item.value = edtElement.innerHTML;
    edtFlag =true;
    edtId = element.dataset.id;
}

// ****** local storage **********
// add to local storage
function addToLocalStorage(id,value){
    // console.log('item added to local storage');
    const grocery = {id:id,value:value};
    let items =getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
}

function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id===id){
            item.value=value;
        }
    });
    localStorage.setItem('list',JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
   items = items.filter(function(item){
    if(item.id!==id){
        return item
    }
    });
    localStorage.setItem('list',JSON.stringify(items));
}

//local storage API
//setItem
//getItem using JSON.parse
//removeItem
//save as strings
