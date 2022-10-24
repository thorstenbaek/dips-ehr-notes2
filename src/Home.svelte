<script lang="ts">
    import {openEHR} from "./openehrStore.ts";
    import List from "./lib/List.svelte";

    


</script>



{#if $openEHR}
    <List/>
{:else}
    Loading client...
{/if}
