const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const wikidata = require("./../data/wikidata");
let compareEmbed = ""

const f15cData = wikidata.f15cData
const f16Data = wikidata.f16Data
const f14bData = wikidata.f14bData
const mig29sData = wikidata.mig29sData
const eurofighterData = wikidata.eurofighterData
const mig29aData = wikidata.mig29aData
const m2000cData = wikidata.m2000cData
const f14aData = wikidata.f14aData
const miragef1Data = wikidata.miragef1Data
const mig21bisData = wikidata.mig21bisData
const su27Data = wikidata.su27Data
const su33Data = wikidata.su33Data
const fa18cData = wikidata.fa18cData
const av8bData = wikidata.av8bData
const a10aData = wikidata.a10aData
const a10cData = wikidata.a10cData
const f15eData = wikidata.f15eData
const f4eData = wikidata.f4eData
const f5e3Data = wikidata.f5e3Data
const su25Data = wikidata.su25Data
const su25tData = wikidata.su25tData
const l39Data = wikidata.l39Data
const t45Data = wikidata.t45Data
const mig23Data = wikidata.mig23Data
const ajs37Data = wikidata.ajs37Data
const c130Data = wikidata.c130Data
const a4Data = wikidata.a4Data
const mb339Data = wikidata.mb339Data
const g91Data = wikidata.g91Data
const pa200Data = wikidata.pa200Data
const f100dData = wikidata.f100dData
const f86Data = wikidata.f86Data
const mig15Data = wikidata.mig15Data
const mig19Data = wikidata.mig19Data
const kfirData = wikidata.kfirData
const jf17Data = wikidata.jf17Data

let aircraft = "Undefined"
let Embed = ""

let state = 0
let aircraft1 = ""
let aircraft2 = ""

let client = ""

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jetcompare')
		.setDescription('Compare two jets with each other.')
        .addStringOption(option =>
           option.setName('aircraft_type_1')
                .setDescription("Select your first jet.")
                .setRequired(true)
		.addChoice('F-16', 'F-16 Fighting Falcon')
        .addChoice("Eurofighter Typhoon", "Eurofighter Typhoon")
        .addChoice("F-14B", "Grumman F-14B Tomcat")
        .addChoice("AJS-37", "Saab AJS-37 Viggen")
        .addChoice("MiG-29S", "MiG-29S")
        .addChoice("F-15C", "F-15C Eagle")
        .addChoice("MiG-29A", "MiG-29A")
        .addChoice("Mirage M-2000C", "Mirage M-2000C")
        .addChoice("F-14A", "Grumman F-14A Tomcat")
        .addChoice("F-4E", "F-4E")
        .addChoice("F-5E3", "F-5E3")
        .addChoice("MB-339", "MB-339")
        .addChoice("G-91", "G-91")
        .addChoice("MRCA PA-200", "MRCA PA-200")
        .addChoice("F-100D", "F-100D")
        .addChoice("F-86", "F-86")
        )

        .addStringOption(option =>
            option.setName('aircraft_type_2')
                 .setDescription("Select your second jet.")
                 .setRequired(true)
         .addChoice('F-16', 'F-16 Fighting Falcon')
         .addChoice("Eurofighter Typhoon", "Eurofighter Typhoon")
         .addChoice("F-14B", "Grumman F-14B Tomcat")
         .addChoice("AJS-37", "Saab AJS-37 Viggen")
         .addChoice("MiG-29S", "MiG-29S")
         .addChoice("F-15C", "F-15C Eagle")
         .addChoice("MiG-29A", "MiG-29A")
         .addChoice("Mirage M-2000C", "Mirage M-2000C")
         .addChoice("F-14A", "Grumman F-14A Tomcat")
         .addChoice("F-4E", "F-4E")
         .addChoice("F-5E3", "F-5E3")
         .addChoice("MB-339", "MB-339")
         .addChoice("G-91", "G-91")
         .addChoice("MRCA PA-200", "MRCA PA-200")
         .addChoice("F-100D", "F-100D")
         .addChoice("F-86", "F-86")
        ), 

        async execute(interaction) {

            setTimeout(function() {
            var chosenString1 = interaction.options.getString('aircraft_type_1');
            var chosenString2 = interaction.options.getString('aircraft_type_2');
            console.log("Chosen Strings: "+chosenString1+ ", "+chosenString2)

            if (chosenString1 === 'F-16 Fighting Falcon')  {
            aircraft1 = f16Data

            } else 
            if (chosenString1 === "Eurofighter Typhoon")  {
                aircraft1 = eurofighterData

            } else 
            if (chosenString1 === "Grumman F-14B Tomcat")  {
                aircraft1 = f14bData

            } else 
            if (chosenString1 === "Saab AJS-37 Viggen")  {
                aircraft1 = ajs37Data

            } else 
            if (chosenString1 === "MiG-29S")  {
                aircraft1 = mig29sData
            } else 
            if (chosenString1 === "F-15C Eagle")  {
                aircraft1 = f15cData
            } else
            if (chosenString1 === "MiG-29A")  {
                aircraft1 = mig29aData
            } else 
            if (chosenString1 === "Mirage M-2000C")  {
                aircraft1 = m2000cData
            } else 
            if (chosenString1 === "Grumman F-14A Tomcat")  {
                aircraft1 = f14aData
            } else 
            if (chosenString1 === "F-4E")  {
                aircraft1 = f4eData
            } else 
            if (chosenString1 === "F-5E3")  {
                aircraft1 = f5e3Data

            } else 
            if (chosenString1 === "MB-339")  {
                aircraft1 = mb339Data
            } else 
            if (chosenString1 === "G-91")  {
                aircraft1 = g91Data
            } else 
            if (chosenString1 === "MRCA PA-200")  {
                aircraft1 = pa200Data
            } else 
            if (chosenString1 === "F-100D")  {
                aircraft1 = f100dData
            } else 
            if (chosenString1 === "F-86")  {
                aircraft1 = f86Data


            } else {
            return interaction.reply('No option was provided!');
        
        }
        
        if (chosenString2 === 'F-16 Fighting Falcon')  {
            aircraft2 = f16Data

            } else 
            if (chosenString2 === "Eurofighter Typhoon")  {
                aircraft2 = eurofighterData

            } else 
            if (chosenString2 === "Grumman F-14B Tomcat")  {
                aircraft2 = f14bData

            } else 
            if (chosenString2 === "Saab AJS-37 Viggen")  {
                aircraft2 = ajs37Data

            } else 
            if (chosenString2 === "MiG-29S")  {
                aircraft2 = mig29sData

            } else 
            if (chosenString2 === "F-15C Eagle")  {
                aircraft2 = f15cData
            } else 
            if (chosenString2 === "MiG-29S")  {
                aircraft1 = mig29sData
            } else 
            if (chosenString2 === "F-15C Eagle")  {
                aircraft1 = f15cData
            } else
            if (chosenString2 === "MiG-29A")  {
                aircraft1 = mig29aData
            } else 
            if (chosenString2 === "Mirage M-2000C")  {
                aircraft1 = m2000cData
            } else 
            if (chosenString2 === "Grumman F-14A Tomcat")  {
                aircraft1 = f14aData
            } else 
            if (chosenString2 === "F-4E")  {
                aircraft1 = f4eData
            } else 
            if (chosenString2 === "F-5E3")  {
                aircraft1 = f5e3Data

            } else 
            if (chosenString2 === "MB-339")  {
                aircraft1 = mb339Data
            } else 
            if (chosenString2 === "G-91")  {
                aircraft1 = g91Data
            } else 
            if (chosenString2 === "MRCA PA-200")  {
                aircraft1 = pa200Data
            } else 
            if (chosenString2 === "F-100D")  {
                aircraft1 = f100dData
            } else 
            if (chosenString2 === "F-86")  {
                } else 
            if (chosenString2 === "MiG-29S")  {
                aircraft2 = mig29sData
            } else 
            if (chosenString2 === "F-15C Eagle")  {
                aircraft2 = f15cData
            } else
            if (chosenString2 === "MiG-29A")  {
                aircraft2 = mig29aData
            } else 
            if (chosenString2 === "Mirage M-2000C")  {
                aircraft2 = m2000cData
            } else 
            if (chosenString2 === "Grumman F-14A Tomcat")  {
                aircraft2 = f14aData
            } else 
            if (chosenString2 === "F-4E")  {
                aircraft2 = f4eData
            } else 
            if (chosenString2 === "F-5E3")  {
                aircraft2 = f5e3Data

            } else 
            if (chosenString2 === "MB-339")  {
                aircraft2 = mb339Data
            } else 
            if (chosenString2 === "G-91")  {
                aircraft2 = g91Data
            } else 
            if (chosenString2 === "MRCA PA-200")  {
                aircraft2 = pa200Data
            } else 
            if (chosenString2 === "F-100D")  {
                aircraft2 = f100dData
            } else 
            if (chosenString2 === "F-86")  {
                aircraft2 = f86Data

            } else {
             interaction.reply('No option was provided!');
}
console.log('A user is comparing stats of '+aircraft1.name+ " with "+aircraft2.name )

createEmbed()
},400);
setTimeout(function() {

return interaction.reply({ embeds: [Embed]});
},1800);
}

}


/*
function createEmbed() {
    compareEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Jet Comparison")
    .setURL('https://pcpilotscrew.com/')
    .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
    .setDescription("You are comparing "+aircraft1[0].toString()+" with "+aircraft2[0].toString())
    .addFields(
        { name: 'First Flight'+aircraft[0].toString(), value: aircraft.first_flight.toString(), inline: true },
    { name: 'Nickname', value: aircraft.nickname.toString(), inline: true },
    { name: 'Role', value: aircraft.role.toString(), inline: false },
        { name: 'Top Speed', value: "Mach: "+aircraft.top_speed.toString(), inline: true },
        { name: 'Cruise Speed', value: "Mach: "+aircraft.cruise_speed.toString(), inline: true },
        { name: 'Combat Range', value: aircraft.combat_range.toString()+" NM", inline: true },
        { name: 'Climb Rate', value: aircraft.climb_rate.toString()+" m/s", inline: true },
    { name: 'Gross Weight', value: aircraft.gross_weight.toString()+" lbs", inline: true },
    { name: 'Thrust/Weight', value: aircraft.thrust_weight.toString(), inline: true },
    { name: 'Service Ceiling', value: aircraft.service_ceiling.toString()+" ft", inline: true },
    { name: 'G-Limits', value: aircraft['g-limit'].toString(), inline: true },
      
    )
    .setImage(aircraft.image)
    .setTimestamp()
    .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    }
*/

function createEmbed() {
    Embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Comparing: "+aircraft1.name.toString()+ " with "+aircraft2.name.toString())
    .setURL('https://pcpilotscrew.com/')
    .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
    .setDescription("Aircraft data has been provided by PCPI members and differs from various sources. If you would like to submit data, @H8mEx.")
    //.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
    .addFields(

        { name: 'Top Speed', value: "Mach: "+aircraft1.top_speed.toString(), inline: true },
        { name: '\u200B', value: "\u200B", inline: true },
        { name: 'Top Speed', value: "Mach: "+aircraft2.top_speed.toString(), inline: true },

        { name: 'Cruise Speed', value: "Mach: "+aircraft1.cruise_speed.toString(), inline: true },
        { name: '\u200B', value: "\u200B", inline: true },
        { name: 'Cruise Speed', value: "Mach: "+aircraft2.cruise_speed.toString(), inline: true },

        { name: 'Combat Range', value: aircraft1.combat_range.toString()+" NM", inline: true },
        { name: '\u200B', value: "\u200B", inline: true },
        { name: 'Combat Range', value: aircraft2.combat_range.toString()+" NM", inline: true },

        { name: 'Climb Rate', value: aircraft1.climb_rate.toString()+" m/s", inline: true },
        { name: '\u200B', value: "\u200B", inline: true },
        { name: 'Climb Rate', value: aircraft2.climb_rate.toString()+" m/s", inline: true },

    { name: 'Gross Weight', value: aircraft1.gross_weight.toString()+" lbs", inline: true },
    { name: '\u200B', value: "\u200B", inline: true },
    { name: 'Gross Weight', value: aircraft2.gross_weight.toString()+" lbs", inline: true },

    { name: 'Thrust/Weight', value: aircraft1.thrust_weight.toString(), inline: true },
    { name: '\u200B', value: "\u200B", inline: true },
    { name: 'Thrust/Weight', value: aircraft2.thrust_weight.toString(), inline: true },

    { name: 'Service Ceiling', value: aircraft1.service_ceiling.toString()+" ft", inline: true },
    { name: '\u200B', value: "\u200B", inline: true },
    { name: 'Service Ceiling', value: aircraft2.service_ceiling.toString()+" ft", inline: true },

    { name: 'G-Limits', value: aircraft1['g-limit'].toString(), inline: true },
    { name: '\u200B', value: "\u200B", inline: true },
    { name: 'G-Limits', value: aircraft2['g-limit'].toString(), inline: true },

      
    )
    //.setImage(aircraft1.image)
    .setTimestamp()
    .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    }