export const patchTodo = async (id: number, content: string, completed: boolean) => {
  try {
    const response = await fetch(`http://localhost:8000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({content, completed})
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}