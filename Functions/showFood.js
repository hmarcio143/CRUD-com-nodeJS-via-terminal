//pacote interno
const fs = require('fs');
const getName = require('./getName').getName;
//Pacotes externos
const inquirer = require("inquirer");
const chalk = require('chalk');


module.exports = {

    showFood(){

       inquirer.prompt([{

            name: "showFood",
            message:"Qual alimento você quer consultar informação do banco de dados?"
       }]).then((answers)=>{

        const showFood = answers["showFood"];
        
        //verify if exists name in database
        if(!fs.existsSync(`./foodData/${showFood}.json`)){
            console.log(chalk.bgRed.black(`O nome ${showFood} não existe na nossa base de dados, favor digitar outro nome`))
            return this.showFood();
        }

        //get name in database

        const name = getName(showFood);

        console.log(
            chalk.green(`O alimento ${name.name} tem ${name.calorie} calorias`)
        )

        

       }).catch(err=>console.log(err));
    }

}