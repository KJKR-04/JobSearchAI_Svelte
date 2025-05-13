<script>
    import "../app.css";
</script>

<div class="slot">
    
    <slot />
</div>

<style>
    .slot {
        box-sizing: border-box; /* Include border in width */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
