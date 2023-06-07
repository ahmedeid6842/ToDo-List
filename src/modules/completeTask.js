const completeTask = (event) => {
    if (event.target.classList.contains('checkbox')) {
        event.target.nextElementSibling.classList.toggle('done');
    }
}

export default completeTask;