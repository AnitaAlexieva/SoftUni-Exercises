import styles from './TodoListItem.module.css'

export default function TodoListItem({
    _id,
    text, 
    isCompleted,
    onStatusChange
}){

    const todoClassName = [styles['todo']]
    if(isCompleted){
        todoClassName.push(styles['is-completed'])
    }
    return(
        <>
             {/* <!-- Todo item --> */}
             <tr className={todoClassName.join(' ')}>
              <td>{text}</td>
              <td>{isCompleted ? 'Complete':'Incomplete'}</td>
              <td className="todo-action">
                <button onClick={ () => onStatusChange(_id)} className="btn todo-btn">Change status</button>
              </td>
            </tr>
        </>
    )
}