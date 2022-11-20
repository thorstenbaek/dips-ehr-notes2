<script lang="ts">
    import {openEHR} from "./openehrStore.ts";
    import List from "./lib/List.svelte";
    import Workspace from "./lib/Workspace.svelte";
</script>

{#if $openEHR}    
<div>
    <div>
        <Workspace />
    </div>
    <div class="column">
        <List />
    </div>
    
</div>
{:else}
    Loading client...
{/if}

<style>
    .row {
        display: flex;        
    }
    .column {
        flex: 100%;        
        background-color: lightgrey;
        padding: 15px;
    }    
</style>
