
const DisplayTodo = (props) => {
    const handleDeleteTodo = () => {

    }

    const listTodo = props.childData;

    return (
        <div>
            <div>---- List todo ----- </div>
            {listTodo.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => handleDeleteTodo(item.id)}> {item.name}</div>
                )
            })}
        </div>
    )
}

export default DisplayTodo;