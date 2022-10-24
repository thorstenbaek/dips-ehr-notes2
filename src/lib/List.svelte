<script>
    import { openEHR } from '../openehrStore.ts';  
    import {marked} from 'marked';      

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
        var data = await $openEHR.query(aql, {});
        
        var sorted = groupBy(data.rows, (r) => r.documentMetadata.documentId);
        
        console.log(sorted);
        return sorted;
    }

    function formatDate(d) {
        var date = new Date(d);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
</script>

{#await getDocuments()}
    Loading documents.default..
{:then documents}    
    {#each Object.values(documents) as document}
    <h1>
        Epikrise 
    </h1>
        {formatDate(document[0].items[1])}
        {#each document as heading}
        <h2>
            {heading.items[3]}
        </h2>
        <p>
            {@html marked(heading.items[2])}
        </p>
        {/each}
    {/each}
{/await}
