import React, { useState } from 'react';
import _ from 'lodash';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: "Whatching youtube" },
            { id: 'todo2', name: "Using facebook" },
            { id: 'todo3', name: "Reading book" }
        ]
    )

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }



    const handleClickBtn = () => {
        let todoId = randomIntFromInterval(4, 99999999999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo //string template
        }

        let currentTodoList = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList)

        // setListTodo([...listTodo, todoItem]);  //spread operator
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo);
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        // currentTodoList = currentTodoList.filter(item => {
        //     if (item.id !== id) return item;
        // });

        setListTodo(currentTodoList)
    }
    return (
        <div>
            <label>Todo's Name: </label>
            <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)} />
            <button type='submit' onClick={() => handleClickBtn()}>Submit</button>
            <br /><br />

            <div>---- List todo ----- </div>
            {listTodo.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => handleDeleteTodo(item.id)}> {item.name}</div>
                )
            })}
        </div>
    );
}

// class TodoList extends React.Component {

//     //khai báo state
//     state = {
//         name: '',
//     }

//     //gán lại giá trị cho state
//     render() {
//         return (
//             <div>

//                 <label>Name</label>
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
//                 <br /><br />
//                 Hello Todo list with name = {this.state.name}
//             </div>
//         )

//     }
// }

export default TodoList;