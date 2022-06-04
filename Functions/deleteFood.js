//pacote interno
const fs = require('fs');
const getName = require('./getName').getName;
//Pacotes externos
const inquirer = require("inquirer");
const chalk = require('chalk');


module.exports = {

    deleteFood(){

        inquirer.prompt([{
            name:"nameFodd",
            message:"Qual alimento você quer deletar?"

        }]).then((anwers)=>{

            const nameFood = anwers["nameFodd"];

            //verify if exists name in database
            if(!fs.existsSync(`./foodData/${nameFood}.json`)){
            console.log(chalk.bgRed.black(`O nome ${nameFood} não existe na nossa base de dados, favor digitar outro nome`))
            return this.deleteFood();
            }

           fs.unlinkSync(`./foodData/${nameFood}.json`, function(err){

            console.log(err);
           })

           console.log(
               chalk.green(`O arquivo ${nameFood} foi excluido da nossa base de dados`)
           )

        }).catch(err => console.log(err))
}

}