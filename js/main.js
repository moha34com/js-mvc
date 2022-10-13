//variables
//add todo event
const var_el = 
    {
        title :          document.querySelector('#title'),
        body :           document.querySelector('#body'),
        todo_container : document.querySelector('#todo-container'),
        addtodo_btn :    document.querySelector('#addtodo-btn'),
        out_put :        document.querySelector('#output'),
        sh_create:       document.querySelector('#sh-create'),
        sh_update:       document.querySelector('#sh-update'),
        blue_container:  document.querySelector('#blue-container'),
        yellow_container:document.querySelector('#yellow-container'),
        
    }
    const var_edit_el = {
        edit_title : document.querySelector('#edit-title'),
        edit_body : document.querySelector('#edit-body'),
        updat_todo : document.querySelector('#update-todo')
    }
   var store = [];

var_el.addtodo_btn.onclick = ()=>{
    if(validate()){
    var neoObj = {
        id : Math.round(Math.random() * 1000),
        title : var_el.title.value,
        body : var_el.body.value
    };
    store.push(neoObj); 
    //check and print
    // console.log(store);   
    render(store);
    var_el.title.value = '';
    var_el.body.value = '';
    }
}
 var edit_el = null;
//delete event
var_el.todo_container.onclick = (e)=>{
    if(e.target.classList.contains('delete-btn')){
        var del_el = document.querySelector(e.target.dataset.todo)
        del_el.remove();
    }
    if(e.target.classList.contains('edit-btn')){
        console.log('you clicked me')
        // var ed_el = document.querySelector(e.target.dataset.todo);
        // yellow_container.style.display = "block";
        // blue_container.style.display = "none";
        // // blue_container.classList.toggle("switch")
        var edit_id = e.target.dataset.todo;
        for(i=0 ; i < store.length; i++){
            if(store[i].id == edit_id){
                edit_el = store[i];
            }
            var_edit_el.edit_title.value = edit_el.title;
            var_edit_el.edit_body.value = edit_el.body;
            // console.log(edit_el)
        }
        var_el.yellow_container.style.display = 'block';
        var_el.blue_container.style.display = 'none';

    }
}
var_edit_el.updat_todo.onclick = (e)=>{
    console.log('update')
    var new_store = [];
    if(validateedit()){
        for(i=0 ; i < store.length ; i++ ){
            if(store[i].id != edit_el.id ){
                new_store.push(store[i])
            }else{
                edit_el.title = var_edit_el.edit_title.value;
                edit_el.body = var_edit_el.edit_body.value;
                new_store.push(edit_el);
            }
        }
        store = new_store;
        render(store)
    }
}
//functions
var render = (x)=>{
    //this function to render todo elements 
    //create todo list x
    //create todo var to output the data init
    //loop in the todo var 
    //append todo var in the page
    var todoElemnts = '';
    for( i = 0 ; i < x.length; i++){
        todoElemnts = 
        `
            <div class="row mt-2 justify-content-center">
                <div class="col-md-8">
                    <div class="card" id="${x[i].id}">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-6">
                                    ${x[i].title}
                                </div>
                                <div class="col-6 text-end">
                                    <button data-todo="${x[i].id}" class="edit-btn btn btn-warning ">update</button>
                                    <button data-todo="${x[i].id}" class="delete-btn btn btn-danger ">delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-header">
                            ${x[i].body}
                        </div>
                    </div><!--card-->
                </div><!--col-md-8-->
            </div><!--row-->
        
        `

    } 
    var_el.todo_container.innerHTML += todoElemnts;
}
var validate = ()=>{
    is_valied = true;
    if(var_el.title.value == ''){
        var_el.title.style.border = '1px solid red';
        is_valied = false;
    }else{
        var_el.title.style.border = '';
    };
    if(body.value == ''){
        var_el.body.style.border = '1px solid red';
        is_valied = false;
    }else{
        var_el.body.style.border = '';
    }  
    return is_valied;
}
var validateedit = ()=>{
    is_valied = true;
    if(var_edit_el.edit_title.value == ''){
        var_edit_el.edit_title.style.border = '1px solid red';
        is_valied = false;
    }else{
        var_edit_el.edit_title.style.border = '';
    };
    if(var_edit_el.edit_body.value == ''){
        var_edit_el.edit_body.style.border = '1px solid red';
        is_valied = false;
    }else{
        var_edit_el.edit_body.style.border = '';
    }  
    return is_valied;
}
//buttons
//output button
var_el.out_put.onclick = ()=>{
    console.log('stored-array = ', store)
}
//show or hide create-todo body
var_el.sh_create.onclick = ()=>{
    if(true){
        var_el.blue_container.classList.toggle("switch") 
        
    }
}   
//show update-todo body
var_el.sh_update.onclick = ()=>{
    if(true){
        var_el.yellow_container.classList.toggle("switch1")
        var_el.blue_container.classList.toggle("switch")
    }
}
//use the update to edite the entered values and store it again

