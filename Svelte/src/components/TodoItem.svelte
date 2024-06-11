<script lang="ts">
	import Button from '../commons/Button.svelte';
	import Modal from '../commons/Modal.svelte';

	export let item: {
		id: number;
		content: string;
		completed: boolean;
	};

	let isOpen: Boolean = false;

	function openModal() {
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}
</script>

<div class="todo-container">
	<div>
		<label>
			<input type="checkbox" bind:checked={item.completed} on:click={() => console.log('완료')} />
			<span>{item.content}</span>
		</label>
	</div>

	<div>
		<Button content="수정" onClick={() => {}} color="Secondary" />
		<Button content="삭제" onClick={openModal} color="Destructive" />
	</div>

	{#if isOpen}
		<Modal content="모달을 닫으시겠습니까?" {closeModal} />
	{/if}
</div>

<style>
	.todo-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;

		padding: 10px 0;
		gap: 40px;
	}
</style>
