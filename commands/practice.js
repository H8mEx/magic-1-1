const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

let practicejetcat =
['AA','AA','AG','LNDG','AG']

let practicehelocat =
['AG','AG','AG','AA']


module.exports = {
	data: new SlashCommandBuilder()
    .setName('challenge')
    .setDescription('Returns a challenge to practice your skills')
    .addStringOption(option =>
       option.setName('aircraft_type')
            .setDescription('Choose the aircraft type')
            .setRequired(true)
    .addChoice('Jet', 'Returns a task to practice jet skills')
    .addChoice('Helo', 'Returns a task to practice helo skills')
    ), 
    async execute(interaction) {
        
        var chosenString = interaction.options.getString('aircraft_type');
        //JET
        if (chosenString === 'Returns a task to practice jet skills')  {
        practicejetcatcalc = practicejetcat[getRandomInt(5)]; //!!
        //practicejetcatcalc = practicejetcat.toString()
        console.log(practicejetcatcalc);
        if (practicejetcatcalc === 'AA') {
            console.log('Jet, AA Task') 
            getJetAAChallenge()
            interaction.reply(JetAAChallenge)
            JetAAChallenge = []
            AAWeaponModifier = []
            AATargetModifier = []
            AANumber = [1,2,3,4,5,6,7,8,9,10]
            JetAAChallenge = []
            AAWeapon = ['Aim-120C', 'Aim-120B', 'Aim-9M', 'Aim-9X', 'Cannons']
            AATarget = ['Bot(s)', 'Player(s)']
            AAPlace = ['on our server.', 'on Growling Sidewinder Server.']
            return
        } else if (practicejetcatcalc === 'AG') {
            console.log('Jet, AG Task')
            getAGtask()
            return interaction.reply(AGTask)
        } else if (practicejetcatcalc === 'SEAD') {
            console.log('Jet, SEAD Task')
            return interaction.reply('**SEAD Task:** '+JetSEADTask[getRandomInt(2)])
        } else if (practicejetcatcalc === 'LNDG') {
            console.log('Jet, LNDG Task')
            getlndgchallenge()
            interaction.reply(lndgchallenge)
            return lndgchallenge = [
                'Landing Challenge 1',
                'Landing Challenge 2',
                'Landing Challenge 3',
                'Landing Challenge 4',
                ]
            
        }

                //HELO
    } else if (chosenString === 'Returns a task to practice helo skills')  {
                    practicehelocatcalc = practicehelocat[getRandomInt(4)];
                    console.log(practicehelocatcalc);
                    if (practicehelocatcalc === 'AA') {
                        console.log('Helo, AA Task') 
                        getHeloAAtask()
                       
                        return interaction.reply(HeloAATask)
                    } else if (practicehelocatcalc === 'AG') {
                        console.log('Helo, AG Task')
                        getHeloAGtask()
                        interaction.reply(HeloAGTask)
                        return HeloAGTask = 1

};}}}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



 //Jet
let lndgchallenge = [
'Landing Challenge 1',
'Landing Challenge 2',
'Landing Challenge 3',
'Landing Challenge 4'
]

function getlndgchallenge() {
lndgchallenge = lndgchallenge[getRandomInt(1)]
if (lndgchallenge === 'Landing Challenge 1') {
    lndgchallenge = '(Jet) **Landing-Challenge:** Perform a clean overhead break landing in the training mission: https://www.digitalcombatsimulator.com/upload/iblock/941/agghadtafzfzd0dszlbac396mcxfd74e/CAUCASUS_-_LANDING_TRAINER_by_JOACOFZ6-V11.miz'
} else if (lndgchallenge === 'Landing Challenge 2') {
    lndgchallenge = 'Do something'                      //FILL ME
} else if (lndgchallenge === 'Landing Challenge 3') {
    lndgchallenge = 'Do something'
} else if (lndgchallenge === 'Landing Challenge 4') {
    lndgchallenge = 'Do something'
}
return }



let AAWeapon =
['Aim-120C', 'Aim-120B', 'Aim-9M', 'Aim-9X', 'Cannons']

let AATarget =
['Bot(s)', 'Player(s)']

let AAPlace =
['on our server.', 'on Growling Sidewinder Server.']

let AAWeaponModifier = []

let AATargetModifier = []

let AANumber =
[1,2,3,4,5,6,7,8,9,10]

let JetAAChallenge = []

function getJetAAChallenge() {
AAWeapon = AAWeapon[getRandomInt(5)]
AATarget = AATarget[getRandomInt(2)]

if (AAWeapon === 'Aim-120C') {
    AAWeaponModifier = 1
} else if (AAWeapon === 'Aim-120B') {
    AAWeaponModifier = 1.25
} else if (AAWeapon === 'Aim-9M') {
    AAWeaponModifier = 3.25
} else if (AAWeapon === 'Aim-9X') {
    AAWeaponModifier = 2.25
} else if (AAWeapon === 'Cannons') {
    AAWeaponModifier = 5
}

if (AATarget === 'Bot(s)') {
    AATargetModifier = 0.75
    AANumber = AANumber[getRandomInt(10)]
    AAPlace = AAPlace[0]
} else if (AATarget === 'Player(s)') {
    AATargetModifier = 3
    AANumber = AANumber[getRandomInt(5)]
    AAPlace = AAPlace[1]
}
JetAAChallenge = '(Jet) **Air-to-Air-Challenge:** Take out '+AANumber.toString()+' '+AATarget.toString()+' with '+AAWeapon.toString() +' '+AAPlace.toString()+'\n \n **REWARD: '+200*AANumber*AAWeaponModifier*AATargetModifier+' XP**'
}




let AGArray =
[1,2,3,4,5,6,7,8,9,10]

let LAVs = 35

let Tanks = 60

let Artillery = 30

let SAM = 100

let AAA = 60

let Utility = 25


let AGTarget =
[LAVs,Tanks,Utility,Artillery,SAM,AAA]

let AGTargetName = ' '

let AGWeaponModifier = [1,1.1,1.2]

let AGWeapon =
['Unguided bombs', 'Guided bombs', 'AGMs']

let AGTask = 1

function getAGtask() {
    AGArray = [1,2,3,4,5,6,7,8,9,10]
    AGNumber = AGArray[getRandomInt(10)]
    AGTarget = [LAVs,Tanks,Utility,Artillery,SAM,AAA]
    AGTarget = AGTarget[getRandomInt(6)]

    if (AGTarget === 25) {
        AGTargetName = 'Utility (unarmed vehicles)'
    } else if  (AGTarget === 35) {
    AGTargetName = 'LAVs (Light Armored Vehicles)'
} else if (AGTarget === 60) {
    AGTargetName = 'Tanks'
} else if (AGTarget === 30) {
    AGTargetName = 'Artillery Units'
} else if (AGTarget === 100) {
    AGTargetName = 'SAMs (Surface to Air Missile Systems [SR and LN count as one])'
} else if (AGTarget === 60) {
    AGTargetName = 'AAAs (Anti Aircraft Artillery)'
} else if (AGTarget === 25) {
    AGTargetName = 'Utillity (Unarmed vehicles (e.g. transport trucks))'
}


AGWeapon = ['Unguided bombs', 'Guided bombs', 'AGMs']
AGWeapon = AGWeapon[getRandomInt(3)]

    AGWeaponModifier = [1,1.5,2]
    if (AGWeapon === 'Unguided bombs') {
        AGWeaponModifier = AGWeaponModifier[0]
       }   else if (AGWeapon === 'Guided bombs') {
        AGWeaponModifier = AGWeaponModifier[1]
    }   else if (AGWeapon === 'AGMs') {
        AGWeaponModifier = AGWeaponModifier[2]
    }
  AGTask = '(Jet) **Air-to-Ground-Task:** \n \nDestroy '+AGNumber +' '+ AGTargetName + ' with '+ AGWeapon +' on our server. \n \n**REWARD: '+AGTarget*AGNumber*AGWeaponModifier+' XP**'
return
    }

const JetLNDGTask =
["Landing tasks will be added later!","Landing tasks will be added later!"]

//Helo
let HeloAANumber =
[1,2,3,4,5]

let HeloAATask = []

let HeloAAWeaponModifier =
[]

let HeloAAWeapon =
['Hellfires', 'Hydra Rockets', 'Cannons']

function getHeloAAtask() {
    HeloAANumber = HeloAANumber[getRandomInt(5)]
    HeloAAWeapon = HeloAAWeapon[getRandomInt(3)]
    if (HeloAAWeapon === 'Hellfires'){
        HeloAAWeaponModifier = 1
    } else if (HeloAAWeapon === 'Hydra Rockets'){
        HeloAAWeaponModifier = 5
    } else if (HeloAAWeapon === 'Cannons'){
        HeloAAWeaponModifier = 2.5
    }
    HeloAATask = '(Helo) **Air-to-Air-Task:** Take out '+HeloAANumber.toString()+' helicopters with '+HeloAAWeapon+' on our server as pilot or CPG. \n \n**REWARD: '+300*HeloAANumber*HeloAAWeaponModifier+' XP**'
}


let HeloAGArray =
[1,2,3,4,5,6,7,8,9,10]

let HeloLAVs = 50

let HeloTanks = 80

let HeloArtillery = 40

let HeloSAM = 120

let HeloAAA = 60

let HeloUtility = 25


let HeloAGTarget =
[HeloLAVs,HeloTanks,HeloUtility,HeloArtillery,HeloSAM,HeloAAA]

let HeloAGTargetName = ' '

let HeloAGWeaponModifier = [1,1.5,2]

let HeloAGWeapon =
['Hellfires', 'Hydra Rockets', 'Cannons']

let HeloAGTask = 1

function getHeloAGtask() {
    HeloAGArray = [1,2,3,4,5,6,7,8,9,10]
    HeloAGNumber = HeloAGArray[getRandomInt(10)]
    HeloAGTarget = [HeloLAVs,HeloTanks,HeloUtility,HeloArtillery,HeloSAM,HeloAAA]
    HeloAGTarget = HeloAGTarget[getRandomInt(6)]

    if (HeloAGTarget === 25) {
        HeloAGTargetName = 'Utility (unarmed vehicles)'
    } else if  (HeloAGTarget === 50) {
    HeloAGTargetName = 'LAVs (Light Armored Vehicles)'
} else if (HeloAGTarget === 80) {
    HeloAGTargetName = 'Tanks'
} else if (HeloAGTarget === 40) {
    HeloAGTargetName = 'Artillery Units'
} else if (HeloAGTarget === 120) {
    HeloAGTargetName = 'SAMs (Surface to Air Missile Systems [SR and LN count as one])'
} else if (HeloAGTarget === 60) {
    HeloAGTargetName = 'AAAs (Anti Aircraft Artillery)'
}

HeloAGWeapon = ['Hellfires', 'Hydra Rockets', 'Cannons']
HeloAGWeapon = HeloAGWeapon[getRandomInt(3)]

    HeloAGWeaponModifier = [1,1.5,2]
    if (HeloAGWeapon === 'Hellfires') {
        HeloAGWeaponModifier = HeloAGWeaponModifier[0]
       }   else if (HeloAGWeapon === 'Hydra Rockets') {
        HeloAGWeaponModifier = HeloAGWeaponModifier[1]
    }   else if (HeloAGWeapon === 'Cannons') {
        HeloAGWeaponModifier = HeloAGWeaponModifier[2]
    }
  HeloAGTask = '(Helo) **Air-to-Ground-Task:** \n \nDestroy '+HeloAGNumber +' '+ HeloAGTargetName + ' with '+ HeloAGWeapon +' on our server as pilot or CPG. \n \n**REWARD: '+HeloAGTarget*HeloAGNumber*HeloAGWeaponModifier+' XP**'
return
    }

