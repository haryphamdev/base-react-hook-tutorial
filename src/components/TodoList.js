import React from 'react';
// const TodoList = () => {

//     return (
//         <div>
//             Hello Todo list
//         </div>
//     );
// }

class TodoList extends React.Component {

    //khai báo state
    state = {
        name: 'Eric',
    }

    //gán lại giá trị cho state
    render() {
        return (
            <div>

                <label>Name</label>
                <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
                <br /><br />
                Hello Todo list with name = {this.state.name}
            </div>
        )

    }
}

export default TodoList;