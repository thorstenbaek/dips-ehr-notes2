import {writable, Writable} from "svelte/store";
import {ready} from 'openehr-client-js'

export const openEHR = writable(null);

ready()
    .then(client => {
        console.log(client);
        openEHR.set(client);
    })
    .catch(error => console.error(error));