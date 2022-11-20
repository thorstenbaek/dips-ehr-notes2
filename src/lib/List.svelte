<script>
    import { onMount } from 'svelte';
    import { openEHR } from '../openehrStore.ts';  
    import { documents } from '../documentStore.ts';
    import { marked } from 'marked';   
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();   

    var aql = `
    SELECT
	   c/uid/value as "CID",
	   c/context/start_time/value as 'Hendelsestidspunkt',
	   e/data[at0001]/items[at0002]/value/value AS 'Sammendrag',
	   e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/value AS 'Informasjonstype',
	
	FROM
	   COMPOSITION c[openEHR-EHR-COMPOSITION.report.v1]
	      CONTAINS EVALUATION e[openEHR-EHR-EVALUATION.clinical_synopsis.v1]
	WHERE
	   -- local::at0006|Funn og undersøkelser|
	   e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0006' OR
	   -- local::at0016|Aktuell problemstilling|
	   e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0016' OR
	   --local::at0007|Vurdering|
	   e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0007' OR
	   --local::at0009|Planer for videre oppfølging|
	   e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0009'
	ORDER BY c/context/start_time/value DESC
    LIMIT 25
    `;
    
    function groupBy(xs, f) {
        return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
    }

    async function getDocuments() {
        const data = await $openEHR.query(aql, {});
        
        const grouped = groupBy(data.rows, (r) => r.documentMetadata.documentId);
        const values = Object.values(grouped);

        return values.sort((b, a) => new Date(a[0].items[1]).getTime() - new Date(b[0].items[1]).getTime());
    }

    function formatDate(d) {
        var date = new Date(d);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    onMount(async () => {
        documents.set(await getDocuments());
    });
</script>

{#if !$documents}
    Loading documents...
{:else}       

    {#each $documents as document}
        <div class="page">
            <h1>
                Epikrise 
            </h1>
                <span class="metadata">
                    {formatDate(document[0].items[1])}
                </span>
                {#each document as heading}
                    <h2>
                        {heading.items[3]}
                    </h2>
                    <div>
                    {@html marked(heading.items[2])}
                    </div>
                {/each}
                <!-- <a href="#" on:click={() => 
                    dispatch('document', {
                        document
                    })}>
                    More...
                </a> -->
        </div>   
    {/each}
{/if}

<style>
    .page {
        background-color: white;
        padding: 10px;
        margin: 15px;
    }

    .metadata {
        font-size: 0.8em;
    }
</style>