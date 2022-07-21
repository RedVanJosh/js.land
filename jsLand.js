import { opine } from 'https://deno.land/x/opine@2.2.0/mod.ts';
import { LoadGlobals } from './lobot/lobot.js';

const server = opine();
await LoadGlobals();

import { Content, Home, Tools } from './routing/routerBundle.js';
server.use('/', Home);
server.use('/content', Content);
server.use('/tools', Tools);

server.listen(3000);
console.log(`JsLand is running on port 3000`);
