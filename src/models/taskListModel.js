let taskLists = [
  { id: '1', title: 'Estudos' },
  { id: '2', title: 'Tarefas de casa' },
  { id: '3', title: 'Jogar bola' },
]

module.exports = {
  getAllTaskLists: () => {
    return taskLists
  }
}