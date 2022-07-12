  import {readFile, writeFile} from 'fs/promises';

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')
console.log('template: ', template);

const data = {
    title: 'learn node.js',
    body: 'this is the final html'
}

for (const [k,v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v )
}
console.log('template: ', template);
await writeFile(new URL('index.html', import.meta.url), template)