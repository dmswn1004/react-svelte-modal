<script lang="ts">
    let isOpen: Boolean = false;
    import Button from "../commons/Button.svelte";
	import Modal from "../commons/Modal.svelte";

    function openModal() {
        isOpen = true;
    }

    function closeModal() {
        isOpen = false;
    }
</script>

<div class="container">
    <Button content="모달 열기" onClick={openModal}/>

    {#if isOpen}
        <Modal {closeModal}/>
    {/if}
</div>

<style>
    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>