const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const wikidata = require("./../data/wikidata");
let compareEmbed = ""

let data = wikidata.aircraftdata

let Embed = ""

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
        .addChoice("MB-339", "Aermacchi MB-339")
        .addChoice("G.91", "Fiat G.91")
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
         .addChoice("MB-339", "Aermacchi MB-339")
         .addChoice("G.91", "Fiat G.91")
         .addChoice("MRCA PA-200", "MRCA PA-200")
         .addChoice("F-100D", "F-100D")
         .addChoice("F-86", "F-86")
        ), 

        async execute(interaction) {

            var chosenString1 = interaction.options.getString('aircraft_type_1');
            var chosenString2 = interaction.options.getString('aircraft_type_2');
            console.log("Chosen Strings: "+chosenString1+ ", "+chosenString2)
            
            try{
                data = data.filter(function( element ) {
                    return element !== undefined;
                 });

                 for (let aircraft of data){
                    if (aircraft.name === chosenString1){
                        aircraft1 = aircraft;
                    }
                    if (aircraft.name === chosenString2){
                        aircraft2 = aircraft;
                    }
                
                }

                if (aircraft1 === aircraft2) {
                    return interaction.reply("Error Mate! H8mEx has to fix this. Both aircraft seem to be the same!")
                }

            }catch (error){
                console.log(error)
                return interaction.reply({ content: '@213660637274832897 Error: '+error, ephemeral: true });
            } 

            
            console.log('A user is comparing stats of '+aircraft1.name+ " with "+aircraft2.name )

            createEmbed();
            return interaction.reply({ embeds: [Embed]});
        }
        
}



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