const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

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

        ), 
        async execute(interaction) {
            
            var chosenString = interaction.options.getString('aircraft_type');
            console.log('A user requested information about: ' + chosenString)

            if (chosenString === 'F-16 Fighting Falcon')  {
            return interaction.reply({ embeds: [f16Embed]});
            } else 
            if (chosenString === "Eurofighter Typhoon")  {
                return interaction.reply({ embeds: [eurofighterEmbed]});
            } else 
            if (chosenString === "Grumman F-14B Tomcat")  {
                return interaction.reply({ embeds: [f14Embed]});
                 

            } else {
            return interaction.reply('No option was provided!');
        
        }
        
}

}

//Aircraft-Data

const types = [
    "Multirole Fighter",
    "Air Superiority Fighter",
    "Interceptor"
]
/* TEMPLATE!!
const templateData = {
    "name": "template",
    "nickname": "template",
    "first_flight": "template",
    "role": types[0] + ", "+types[1],
    "top_speed": 0, //Mach
    "cruise_speed": 0, //Mach
    "combat_range": 0, //NM
    "climb_rate": 0, //m/s
    "gross_weight": 0, //lbs 
    "thrust_weight": 0,
    "service_ceiling": 0, //ft
    "g-limit": "+0, -0",
    "description": "template",
    "image": "template"
}
*/
const f16Data = {
    "name": "F-16 Fighting Falcon",
    "nickname": "Viper",
    "first_flight": "Jan 20, 1974",
    "role": types[0] + ", "+types[1],
    "top_speed": 2.05, //Mach
    "cruise_speed": 0.752018, //Mach
    "combat_range": 295, //NM
    "climb_rate": 254, //m/s
    "gross_weight": 26.500, //lbs 
    "thrust_weight": 1.095,
    "service_ceiling": 58000, //ft
    "g-limit": 9,
    "description": "The General Dynamics F-16 Fighting Falcon is a single-engine multirole fighter aircraft originally developed by General Dynamics for the United States Air Force. Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft.",
    "image": "https://static.wikia.nocookie.net/flight/images/a/a0/RL-Aircraft-F-16.jpg/revision/latest/scale-to-width-down/350?cb=20210703162930"
}

const eurofighterData = {
    "name": "Eurofighter Typhoon",
    "nickname": "Typhoon",
    "first_flight": "March 27, 1994",
    "role": types[0] + ", "+types[1],
    "top_speed": 2, //Mach
    "cruise_speed": 1.5, //Mach
    "combat_range": 1500, //NM
    "climb_rate": 315, //m/s
    "gross_weight": 24.251, //lbs 
    "thrust_weight": 1.15,
    "service_ceiling": 65000, //ft
    "g-limit": "+9, -3",
    "description": "The Typhoon is a twin-engine, supersonic, multi-role military aircraft produced by Eurofighter, a German-based consortium of Airbus Defense and Space of Germany and Spain, BAE Systems of the United Kingdom, and Italy's Leonardo.",
    "image": "https://imgr1.flugrevue.de/image-article169Gallery-bcca40fe-1552537.jpg"
}

const f14Data = {
    "name": "Grumman F-14B Tomcat",
    "nickname": "Tomcat",
    "first_flight": "December 21, 1970 (F-14A)",
    "role": types[0] + ", "+types[1]+ ", "+types[2],
    "top_speed": 2.34, //Mach
    "cruise_speed": 0.85, //Mach
    "combat_range": 500, //NM
    "climb_rate": 6000, 
    "gross_weight": 41780, //lbs 
    "thrust_weight": 0.73,
    "service_ceiling": 53000, //ft
    "g-limit": "+7,5",
    "description": "The F-14 is a carrier-capable supersonic, twin-engine, twin-tail, variable-sweep wing fighter aircraft. It served as the U.S. Navy's primary maritime air superiority fighter, fleet defense interceptor, and tactical aerial reconnaissance platform.",
    "image": "https://static.wikia.nocookie.net/flight/images/f/ff/RL-Aircraft-Grumman_F-14_Tomcat.jpg/revision/latest/scale-to-width-down/350?cb=20210818092755"
}

//embeds
//f16
const f16Embed = new MessageEmbed()
.setColor('#0099ff')
.setTitle(f16Data.name)
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription(f16Data.description.toString())
//.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: f16Data.first_flight.toString(), inline: true },
{ name: 'Nickname', value: f16Data.nickname.toString(), inline: true },
{ name: 'Role', value: f16Data.role.toString(), inline: false },
    { name: 'Top Speed', value: "Mach: "+f16Data.top_speed.toString(), inline: true },
    { name: 'Cruise Speed', value: "Mach: "+f16Data.cruise_speed.toString(), inline: true },
    { name: 'Combat Range', value: f16Data.combat_range.toString()+" NM", inline: true },
    { name: 'Climb Rate', value: f16Data.climb_rate.toString()+" m/s", inline: true },
{ name: 'Gross Weight', value: f16Data.gross_weight.toString()+" lbs", inline: true },
{ name: 'Thrust/Weight', value: f16Data.thrust_weight.toString(), inline: true },
{ name: 'Service Ceiling', value: f16Data.service_ceiling.toString()+" ft", inline: true },
{ name: 'G-Limits', value: f16Data['g-limit'].toString(), inline: true },
  
)
.setImage(f16Data.image)
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

//eurofighter
const eurofighterEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle(eurofighterData.name.toString())
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription(eurofighterData.description.toString())
//.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: eurofighterData.first_flight.toString(), inline: true },
{ name: 'Nickname', value: eurofighterData.nickname.toString(), inline: true },
{ name: 'Role', value: eurofighterData.role.toString(), inline: false },
    { name: 'Top Speed', value: "Mach: "+eurofighterData.top_speed.toString(), inline: true },
    { name: 'Cruise Speed', value: "Mach: "+eurofighterData.cruise_speed.toString(), inline: true },
    { name: 'Combat Range', value: eurofighterData.combat_range.toString()+" NM", inline: true },
    { name: 'Climb Rate', value: eurofighterData.climb_rate.toString()+" m/s", inline: true },
{ name: 'Gross Weight', value: eurofighterData.gross_weight.toString()+" lbs", inline: true },
{ name: 'Thrust/Weight', value: eurofighterData.thrust_weight.toString(), inline: true },
{ name: 'Service Ceiling', value: eurofighterData.service_ceiling.toString()+" ft", inline: true },
{ name: 'G-Limits', value: eurofighterData['g-limit'].toString(), inline: true },
  
)
.setImage(eurofighterData.image)
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

//f14b
const f14Embed = new MessageEmbed()
.setColor('#0099ff')
.setTitle(f14Data.name)
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription(f14Data.description.toString())
//.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: f14Data.first_flight.toString(), inline: true },
{ name: 'Nickname', value: f14Data.nickname.toString(), inline: true },
{ name: 'Role', value: f14Data.role.toString(), inline: false },
    { name: 'Top Speed', value: "Mach: "+f14Data.top_speed.toString(), inline: true },
    { name: 'Cruise Speed', value: "Mach: "+f14Data.cruise_speed.toString(), inline: true },
    { name: 'Combat Range', value: f14Data.combat_range.toString()+" NM", inline: true},
    { name: 'Climb Rate', value: f14Data.climb_rate.toString()+" ft/min", inline: true },
{ name: 'Gross Weight', value: f14Data.gross_weight.toString()+" lbs", inline: true },
{ name: 'Thrust/Weight', value: f14Data.thrust_weight.toString(), inline: true },
{ name: 'Service Ceiling', value: f14Data.service_ceiling.toString()+" ft", inline: true },
{ name: 'G-Limits', value: f14Data['g-limit'].toString(), inline: true },
  
)
.setImage(f14Data.image)
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });