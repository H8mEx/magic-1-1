const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const wikidata = require("./../data/wikidata");

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


module.exports = {
	data: new SlashCommandBuilder()
		.setName('aircraft')
		.setDescription('Information about the options provided.')
        .addStringOption(option =>
           option.setName('aircraft_type')
                .setDescription('Choose the aircraft type')
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
    //    .addChoice("template", "template")


        ), 
        async execute(interaction) {
            
            var chosenString = interaction.options.getString('aircraft_type');
            console.log('A user requested information about: ' + chosenString)

            if (chosenString === 'F-16 Fighting Falcon')  {
            aircraft = f16Data
            createEmbed()
            return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "Eurofighter Typhoon")  {
                aircraft = eurofighterData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "Grumman F-14B Tomcat")  {
                aircraft = f14bData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "Saab AJS-37 Viggen")  {
                aircraft = ajs37Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "MiG-29S")  {
                aircraft = mig29sData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "F-15C Eagle")  {
                aircraft = f15cData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "MiG-29A")  {
                aircraft = mig29aData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "Mirage M-2000C")  {
                aircraft = m2000cData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "Grumman F-14A Tomcat")  {
                aircraft = f14aData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "F-4E")  {
                aircraft = f4eData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "F-5E3")  {
                aircraft = f5e3Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "MB-339")  {
                aircraft = mb339Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "G-91")  {
                aircraft = g91Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "MRCA PA-200")  {
                aircraft = pa200Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "F-100D")  {
                aircraft = f100dData
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else 
            if (chosenString === "F-86")  {
                aircraft = f86Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});

            } else {
            return interaction.reply('No option was provided!');
        
        }
        
}

}


//embeds
function createEmbed() {
Embed = new MessageEmbed()
.setColor('#0099ff')
.setTitle(aircraft.name.toString())
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription(aircraft.description.toString())
//.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: aircraft.first_flight.toString(), inline: true },
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
