<script lang="ts">
    import {openEHR} from "./openehrStore.ts";
    import List from "./lib/List.svelte";
    import Workspace from "./lib/Workspace.svelte";

    export let currentDocument;

    function SelectDocument(event) {
        console.log(event.detail);
        currentDocument = event.detail.document;
    }
</script>



{#if $openEHR}    
<div>
    <div>
        <Workspace document={currentDocument}/>
    </div>
    <div class="column">
        <List on:document={SelectDocument}/>
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
