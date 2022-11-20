<script>
    import {marked} from 'marked';   
    import { openEHR } from '../openehrStore.ts';            
    import CompositionFactory from '../compositionFactory.ts';
    import { documents } from '../documentStore.ts';
    import {ParseMarkdown} from '../utils/ParseMarkdown.js';
    import toMarkdown from 'to-markdown';

    export let html;
    export let markdown;

    function newDocument() {
        markdown = 
            "## Aktuell problemstilling\n\n" +            
            "|\n" + 
            "## Funn og undersøkelser\n\n" +
            "|\n" + 
            "## Vurdering\n\n" +
            "|\n" + 
            "## Planer for videre oppfølging\n\n" + 
            "|\n\n\n" 
        ;

        html = marked(markdown);
    }

    async function save() 
    {
        const markdown = toMarkdown(html);
        var parser = new ParseMarkdown();
        var headings = parser.parseMarkdown(markdown);        
        await postComposition(headings);
        
        html = null;
        documents.set(null);
        //await getDocuments();
    }

    async function postComposition(headings)
    {
        var concept = "-4027:1003101";
        await $openEHR.compose(            
            concept,
            new CompositionFactory().getEhrNotesDocument(headings));
    }

</script>

<!-- <button on:click="{postComposition}">
    Compose a document
</button>    -->

{#if html}    
    <div contenteditable="true" class="editor" bind:innerHTML={html}/>    
    
    <div class="toolbar">
        <button on:click="{save}">
            Save
        </button>
    </div>
{:else}
    <button on:click="{newDocument}">
        New Document
    </button>
{/if}

<style>
    .editor {
        margin: 0;
        padding: 10px;
        border-color: white;        
    }

    .toolbar {        
        padding: 10px;
    }

    [contenteditable] {
        outline: 0px solid transparent;
    }

</style>
