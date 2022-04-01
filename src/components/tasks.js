const tasks = [
    {
       text: "Chess Club Meeting",
       day: "26th July at 7:30 pm" ,
        reminder: true,
    },
    {
       text: "Chess Club Meeting",
       day: "19th August at 8:40 pm" ,
        reminder: true,
    },
    {

       text: "Meet with Nelly",
       day: "18th June at 8:30 pm" ,
        reminder: false,
    }
]

const Tasks = () => {
    return(
        <>
            {tasks.map(
                (task) => (<h3 key={task
                    .id}>{task.text}</h3>)
                )
            }
        </>
    )

}

export default Tasks