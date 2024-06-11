<script lang="ts">
	import Button from './Button.svelte';

	export let content: string;
	export let closeModal: () => void;
</script>

<div class="overlay">
	<dialog open class="modal-container">
		<p>{content}</p>
		<div>
			<Button content="취소" onClick={closeModal} color="Secondary" />
			<Button content="닫기" onClick={closeModal} color="Destructive" />
		</div>
	</dialog>
</div>

<style>
	.overlay {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: #d9d9d9;
	}

	.modal-container {
		position: absolute;
		width: 200px;
		height: 120px;
		left: 50%;
		top: 50%;
		margin: 0;
		transform: translate(-50%, -50%);

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		gap: 20px;
		border-radius: 10px;
		border: none;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
</style>
