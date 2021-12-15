import React, { useState } from 'react';
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const Home = () => {
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
        if (!todo) {
            alert("Todo's name is not empty");
            return;
        }
        let todoId = randomIntFromInterval(4, 99999999999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo //string template
        }

        let currentTodoList = _.clone(listTodo);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);
        setTodo("");

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

    const myInfor = { channel: "hoi dan it", age: 25 }
    //props, state: object (key: value)
    return (
        <div>
            <div></div>

            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClickBtn={handleClickBtn}
            />

            <DisplayTodo
                childData={listTodo} // x=y =>   x <- y
                name={"Eric"}
                myInfor={myInfor}
                deleteTodoInParent={handleDeleteTodo}
            />

        </div>
    );
}

// class Home extends React.Component {

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

export default Home;