<script lang="ts">
	export let content: string;
	export let onClick: () => void;
	export let color: 'Primary' | 'Secondary' | 'Destructive';
</script>

<button class={`btn ${color}`} on:click={onClick}>{content}</button>

<style>
	.btn {
		padding: 8px 12px;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		&:hover {
			opacity: 0.6;
		}
	}
	.Primary {
		background-color: #000000;
		color: #ffffff;
	}
	.Secondary {
		background-color: #d9d9d9d9;
	}
	.Destructive {
		background-color: #d80000;
		color: #ffffff;
	}
</style>
