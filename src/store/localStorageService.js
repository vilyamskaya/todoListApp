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
  updateLocalStorage(todoList) {
    localStorageService.setItem('todoList', todoList)
  },
}
