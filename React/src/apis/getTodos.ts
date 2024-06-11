export const getTodos = async () => {
  try {
    const response = await fetch('http://localhost:8000/todos')
    return response.json()
  } catch (error) {
    console.error(error)
  }
}