let taskLists = [
  { id: '1', title: 'Estudos', tasks: [{ id: '1', title: 'Estudar Node', completed: false }] },
  { id: '2', title: 'Tarefas de casa', tasks: [] },
  { id: '3', title: 'Jogar bola', tasks: [] },
]

module.exports = {
  getAllTaskLists: () => {
    return taskLists
  },

  getTaskListById: (id) => {
    return taskLists.find(list => list.id === id)
  },

  createList: (title) => {
    const newList = {
      id: Math.floor(Math.random() * 99999999).toString(),
      title: title
    }
    return newList
  },

  saveList: (taskList) => {
    if (taskList.title == '') throw new Error('Título da lista não pode ficar vazio.')
    taskLists.push(taskList)
  }
}