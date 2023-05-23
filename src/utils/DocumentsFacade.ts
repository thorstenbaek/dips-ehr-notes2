import { get } from 'svelte/store';
import { openEHR } from '../openehrStore'

export default class DocumentsFacade {

    // var aql = `
    // SELECT
	//    c/uid/value as "CID",
	//    c/context/start_time/value as 'Hendelsestidspunkt',
	//    e/data[at0001]/items[at0002]/value/value AS 'Sammendrag',
	//    e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/value AS 'Informasjonstype',
	
	// FROM
	//    COMPOSITION c[openEHR-EHR-COMPOSITION.report.v1]
	//       CONTAINS EVALUATION e[openEHR-EHR-EVALUATION.clinical_synopsis.v1]
	// WHERE
	//    -- local::at0006|Funn og undersøkelser|
	//    e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0006' OR
	//    -- local::at0016|Aktuell problemstilling|
	//    e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0016' OR
	//    --local::at0007|Vurdering|
	//    e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0007' OR
	//    --local::at0009|Planer for videre oppfølging|
	//    e/protocol[at0003]/items[openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1]/items[at0001]/value/defining_code/code_string = 'at0009'
	// ORDER BY c/context/start_time/value DESC
    // LIMIT 25
    // `;

    aql: string = `
        select
            c/context/start_time/value as hendelsestid,
            c/name/value as tittel
        from
            composition c
        where
            c/name/value = 'Klinisk kontakt'
        order by c/context/start_time/value desc

        limit 5
    `;

    async getDocuments() {
        const documents = await get(openEHR).query(this.aql, {});

        console.log(documents);

        return documents;
    }
}