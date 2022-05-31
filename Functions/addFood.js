//pacote interno
const fs = require('fs');
 
//Pacotes externos
const inquirer = require("inquirer");
const chalk = require('chalk');

module.exports = {

    addFood(){
        inquirer.prompt([{
            name:"nameFood",
            message: "Qual o nome do alimento que você queira adicionar?"
        }]).then((answer)=>{
            const nameFood = answer['nameFood'];
            console.log(nameFood)
            
            inquirer.prompt([{
                name:"qtdCaloria",
                message:`Quantas calorias tem ${nameFood}`
            }]).then((answer)=>{
                const qtdCalorias = answer["qtdCaloria"];               
                

                //Create database
                if(!fs.existsSync("./foodData")){
                    fs.mkdirSync("foodData");
                    
                }
                

                //Verify if name exists
                  if(fs.existsSync(`./foodData/${nameFood}.json`)){
                     console.log(chalk.bgRed.black(`O nome ${nameFood} já existe, favor digitar outro nome`))
                        return this.addFood();
                 }

                ///Save database
                fs.writeFileSync(
                    `foodData/${nameFood}.json`,
                    `{"name":"${nameFood}", "calorie":${qtdCalorias}}`,
                    (err)=>{
                        console.log(err);
                    }
                )

                console.log(
                    chalk.green(`O alimento ${nameFood} foi adicionado com ${qtdCalorias} calorias`)
                )
                

            }).catch(err => console.log(err))
        }).catch(err => console.log(err));
        
    }
}

