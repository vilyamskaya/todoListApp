export const localStorageService: Record<string, Function> = {
  setItem(key: string, value: any): void {
    localStorage.setItem(key.toString(), JSON.stringify(value))
  },
  clearAll(): void {
    localStorage.clear()
  },
  getTodoList(): TTodoList {
    const item = localStorage.getItem('todoList')
    return item ? JSON.parse(item) : []
  },
  getTheme(): TAppTheme {
    const item = localStorage.getItem('theme')
    return item ? JSON.parse(item) : null
  },
  updateLocalStorage(todoList: TTodoList): void {
    localStorageService.setItem('todoList', todoList)
  },
  setTheme(theme: TAppTheme): void {
    localStorageService.setItem('theme', theme)
  },
}
