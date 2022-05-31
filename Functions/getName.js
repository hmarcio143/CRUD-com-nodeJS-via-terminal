//pacote interno
const fs = require('fs');
 

module.exports = {

    getName(name){

        const NameDataJson = fs.readFileSync(`./foodData/${name}.json`, {
            enconding: 'utf8',
            flag: 'r'

        })

        return JSON.parse(NameDataJson);
    }
}