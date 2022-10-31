const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const wikidata = require("./../data/wikidata");
let Embed = ""
const aircraftdata = wikidata.aircraftdata
let datatype = ""
let board = ""
let top_speed = ""
let top_speed_board = [
    aircraftdata[0].top_speed,
    aircraftdata[1].top_speed,
    aircraftdata[2].top_speed,
    aircraftdata[3].top_speed,
    aircraftdata[4].top_speed,
    aircraftdata[5].top_speed,
    aircraftdata[6].top_speed,
    aircraftdata[7].top_speed
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('jetboard')
		.setDescription('Displays leadboard of a certain stat within all jets in the database.')
        .addStringOption(option =>
           option.setName('stat')
                .setDescription('Choose the aircraft stat')
                .setRequired(true)
		.addChoice('Top Speed', 'Which is the fastest?')

        ), 
        async execute(interaction) {
            
            var chosenString = interaction.options.getString('stat');
            console.log('A user requested leaderboard: ' + chosenString)

            if (chosenString === 'Which is the fastest?')  {
                board = top_speed_board.sort(function (a, b) {  return b - a;  });
                datatype = "Top Speed"
                setTimeout(function() {
                console.log(board)
                createEmbed()
                }, 400)
                setTimeout(function() {
                return interaction.reply({ embeds: [Embed]});   
                     }, 1400)         }    

        }
    }

    function createEmbed() {
        Embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Leaderboard: "+datatype)
        .setURL('https://pcpilotscrew.com/')
        .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
        //.setDescription("Empty")
        //.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
        .addFields(
            { name: 'Leaderboard:', value: "#1: "+board[0]+"\n #2: "+board[1]+"\n #3: "+board[2]+"\n #4: "+board[3]+"\n", inline: true }
        )
       // .setImage(aircraft.image)
        .setTimestamp()
        .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
        }