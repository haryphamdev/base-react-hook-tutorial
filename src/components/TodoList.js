import React, { useState } from 'react';

const TodoList = () => {
    const [name, setName] = useState("");

    const handleClickBtn = (event, mgs) => {
        console.log(">> run inside handleClickBtn ---:", name)
    }
    return (
        <div>
            <label>Name</label>
            <input value={name} type="text"
                onChange={(event) => setName(event.target.value)} />
            <button type='submit' onClick={() => handleClickBtn("event", 'buttonClickasfasfd')}>Submit</button>
            <br /><br />
            Hello Todo list with name = {name}
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