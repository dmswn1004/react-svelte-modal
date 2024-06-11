export const postNewTodo = async (content: string) => {
  try {
    const response = await fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content })
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}