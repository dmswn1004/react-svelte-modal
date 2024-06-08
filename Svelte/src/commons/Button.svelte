<script lang="ts">
    export let content: string;
    export let onClick: () => void;
</script>

<button class="btn" on:click={onClick}>{content}</button>

<style>
    .btn {
        padding: 8px 12px;
        border-radius: 10px;
        border: none;
        background-color: #d9d9d9d9;
        &:hover {
           background-color: #909090;
        }
    }
</style>