<script>
    import {authorize} from "openehr-client-js";
	import {onMount} from 'svelte';

    onMount(async () => {
		authorize(
		{
			clientId: "dips-openehr-smart-app",
			redirectUri: "http://localhost:8080/app",	
            //iss: "https://vt-selecta-b.dips.local/DIPS-WebAPI/HL7/FHIR-R4",	
            //iss: "https://vt-bc-dev04-sr.dips.local/Arena-SmartEHR",
            //iss: "https://localhost:44311",
            //iss: "https://vt-fi-a-app.dips.local/DIPS-SmartEHR",
            //iss: "http://ipv4.fiddler:5000",
            iss: "https://oslo-east.smud.dev.dips.no/smartehr",
            //iss: "https://localhost:44311/dips-smartehr-service",
            scope: "launch",
            launch: "2008905:encounter:resource",
		});
	});
</script>        

Loading...
