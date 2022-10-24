const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
let aircraft = "Undefined"
let Embed = ""

//Aircraft-Data

const types = [
    "Multirole Fighter",
    "Air Superiority Fighter",
    "Interceptor",
    "Strike Fighter"
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

const viggenData = {
    "name": "Saab AJS-37 Viggen",
    "nickname": "Viggen",
    "first_flight": "Feb 8th, 1967 (Viggen; not AJS)",
    "role": types[3],
    "top_speed": 1.73, //Mach
    "cruise_speed": 0.9, //Mach
    "combat_range": 540, //NM
    "climb_rate": 203, //m/s
    "gross_weight": 37.479, //lbs 
    "thrust_weight": 0.76,
    "service_ceiling": 59000, //ft
    "g-limit": "+7",
    "description": "The AJS-37 Viggen (Bolt) is a Swedish-designed, single engine, supersonic strike fighter. First operational in the early 1970s, the Viggen was one of the most advanced aircrafts in Europe before the Panavia Tornado.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Saab_AJS-37_Viggen_37098_52_%28SE-DXN%29_%289256079273%29.jpg"
}

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
                aircraft = f14Data
                createEmbed()
                return interaction.reply({ embeds: [Embed]});
            } else 
            if (chosenString === "Saab AJS-37 Viggen")  {
                aircraft = viggenData
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
