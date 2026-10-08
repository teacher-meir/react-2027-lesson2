// rfc+tab = react function componenet
export default function Card({ title = 'student', colors = [] }) {
    const x = true;

    const todos = ['sleep', 'hw', 'bake'];

    // const newTodos = [];
    // for (const todo of todos) {
    //     newTodos.push(<li>{todo}</li>)
    // }

    const newTodos = todos.map(todo => <li>{todo}</li>)
    console.log(newTodos);

    
    // newTodos = מערך של פריטים ברשימה

    if (title.length === 0) {
        return (<div>not found</div>);
    }

    return (
        <div style={{ border: '1px solid red' }}>
            <h2>{title}</h2>
            <p>{x}</p>
            <p>{x.toString()}</p>
            <ul>
                {todos.map(todo => <li key={todo}>{todo}</li>)}
            </ul>

            {/* יצר מערך כפתורים בהתאמה למערך שהתקבל */}
            {colors.map(x => <button style={{ background: x }} key={x}>{x}</button>)}
        </div>
    );
}
