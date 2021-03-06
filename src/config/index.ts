'use strict';
import * as nconf from 'nconf';
import * as path from 'path';

const obj:any = {};

if(!obj.config){
    obj.config = nconf.argv().env().file({file: 'config.json'});
}
let config = obj.config;
config.set('root', path.join(__dirname, '../'));

export default config;