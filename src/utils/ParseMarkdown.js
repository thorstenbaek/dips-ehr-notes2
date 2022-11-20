export class ParseMarkdown {

    parseMarkdown(markdown) {
        var headings = [];

        const lines = markdown.split("\n");
        var h;
        
        lines.forEach(line => {
            if (line.startsWith("##")) {
                h = new Array();
                headings[headings.push(h)];
            }
            else if(h) {                
                if (line != "") {                    
                    h.push(line);
                }
            }                
        });
        
        return headings;
    }    
}