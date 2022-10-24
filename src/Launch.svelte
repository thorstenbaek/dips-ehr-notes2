<script>
    import {authorize} from "openehr-client-js";
	import {onMount} from 'svelte';

    onMount(async () => {
		authorize(
		{
			clientId: "dips-simplest-smart-app",
			redirectUri: "http://localhost:8080/app",	
            //iss: "https://vt-selecta-b.dips.local/DIPS-WebAPI/HL7/FHIR-R4",	
            //iss: "https://vt-bc-dev04-sr.dips.local/Arena-SmartEHR",
            //iss: "https://localhost:44311",
            //iss: "https://vt-fi-a-app.dips.local/DIPS-SmartEHR",
            //iss: "https://foi-tst.smud.dev.dips.no/smartehr",
            iss: "http://localhost:5000",
            //iss: "https://localhost:44311/dips-smartehr-service",
            scope: "launch",
            launch: "2008905:encounter:resource",
		});
	});
</script>        

Loading...
