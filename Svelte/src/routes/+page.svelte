<script lang="ts">
	import Button from '../commons/Button.svelte';
	import TodoItem from '../components/TodoItem.svelte';

	const data = [
		{
			id: 1,
			content: '코딩',
			completed: false
		},
		{
			id: 2,
			content: '코딩',
			completed: false
		}
	];

	let newTodoContent = '';

	const addTodo = () => {
		// data.update((todos) => [
		// 	...todos,
		// 	{
		// 		id: todos.length + 1,
		// 		content: newTodoContent,
		// 		completed: false
		// 	}
		// ]);
		newTodoContent = '';
	};
</script>

<div class="container">
	<h1>TODO App</h1>

	{#each data as item (item.id)}
		<TodoItem {item} />
	{/each}

	<div class="newTodo-container">
		<input
			class="new-todo"
			type="text"
			bind:value={newTodoContent}
			placeholder="새로운 할 일을 입력하세요."
		/>
		<Button content="Button" onClick={addTodo} color="Primary" />
	</div>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.newTodo-container {
		display: flex;
		justify-content: center;
		padding-top: 20px;
		gap: 10px;
	}
	.new-todo {
		width: 200px;
		border: none;
		border-bottom: 1px solid #111;
		color: #888;
	}
	.new-todo:focus {
		outline: none;
	}
</style>
