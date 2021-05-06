export const localStorageService = {
  setItem(key, value) {
    localStorage.setItem(key.toString(), JSON.stringify(value))
  },
  clearAll() {
    localStorage.clear()
  },
  getTodoList() {
    const item = localStorage.getItem('todoList')
    return item ? JSON.parse(item) : []
  },
  getColor() {
    const item = localStorage.getItem('color')
    return item ? JSON.parse(item) : { title: 'orange', color: '#f49737' }
  },
  updateLocalStorage(todoList) {
    localStorageService.setItem('todoList', todoList)
  },
  setColor(color) {
    localStorageService.setItem('color', color)
  },
}
