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
		.addChoice('F/A-18', 'F/A-18C Hornet')
        .addChoice('F-15C', 'F-15C Eagle')
        .addChoice('JF-17', 'PAC/CAC JF-17 Thunder')
        .addChoice('AJS-37', 'Saab 37 Viggen (Saab 37')
        .addChoice('MiG-21Bis', 'Mikoyan-Gurevich MiG-21Bis')
        .addChoice('MiG-29', 'Mikoyan-Gurevich MiG-29')
        .addChoice('AV-8B', 'McDonnell Douglas AV-8B Harrier II')
        .addChoice('A-10C', 'Fairchild Republic A-10 Thunderbolt II')
        ), 
        async execute(interaction) {
            
            var chosenString = interaction.options.getString('aircraft_type');
            console.log('A user requested information about: ' + chosenString)
            //F16
            if (chosenString === 'F-16 Fighting Falcon')  {
            return interaction.reply({ embeds: [f16Embed] } )
            //F15c
            } else if (chosenString === 'F-15C Eagle')  {
                return interaction.reply({ embeds: [f15Embed] }) ;
            //FA18
             } else if (chosenString === 'F/A-18C Hornet')  {
            return interaction.reply({ embeds: [fa18Embed] }) ;
            //MiG29
            } else if (chosenString === 'Mikoyan-Gurevich MiG-29')  {
            return interaction.reply({ embeds: [mig29Embed] }) ;
            //JF-17
            } else if (chosenString === 'PAC/CAC JF-17 Thunder')  {
            return interaction.reply({ embeds: [jf17Embed] }) ;
        } else if (chosenString === 'Saab 37 Viggen (Saab 37')  {
            return interaction.reply({ embeds: [ajs37Embed] }) ;
        } else if (chosenString === 'Mikoyan-Gurevich MiG-21Bis')  {
            return interaction.reply({ embeds: [mig21Embed] }) ;
        } else if (chosenString === 'McDonnell Douglas AV-8B Harrier II')  {
            return interaction.reply({ embeds: [av8bEmbed] }) ;
        } else if (chosenString === 'Fairchild Republic A-10 Thunderbolt II')  {
            return interaction.reply({ embeds: [a10cEmbed] }) ;
            } else {
            return interaction.reply('No option was provided!');
        
        }
        
}

}

//Aircraft
//f16
const f16Embed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('F-16 Fighting Falcon')
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription('The General Dynamics F-16 Fighting Falcon is a single-engine multirole fighter aircraft originally developed by General Dynamics for the United States Air Force. Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft.')
.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: 'Jan 20, 1974', inline: true },
//		{ name: '\u200B', value: '\u200B' },
{ name: 'Nickname', value: 'Viper', inline: true },
{ name: 'Role', value: 'Multirole fighter, air superiority fighter', inline: true },
    { name: 'Top Speed', value: 'Mach 2.05', inline: true },
    { name: 'Climb Rate', value: '254 m/s', inline: true },
{ name: 'Gross weight', value: '26,500 lb (12,020 kg)', inline: true },
{ name: 'Thrust/Weight', value: '1.095', inline: true },
{ name: 'Service Ceiling', value: '58000 ft', inline: true },
{ name: 'G-Limits', value: '+9.0', inline: true },
  
)
.setImage('https://i.imgur.com/tHPVrax.jpeg')
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

        //F-15C

        const f15Embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('McDonnell Douglas F-15C Eagle')
        .setURL('https://pcpilotscrew.com/')
        .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
        .setDescription('The McDonnell Douglas F-15 Eagle is an American twin-engine, all-weather tactical fighter aircraft designed by McDonnell Douglas. Following reviews of proposals, the United States Air Force selected McDonnell Douglass design in 1969 to meet the services need for a dedicated air superiority fighter.')
        .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
        .addFields(
            { name: 'First Flight', value: 'Jul 27, 1972', inline: true },
    //		{ name: '\u200B', value: '\u200B' },
        { name: 'Nickname', value: 'Eagle', inline: true },
        { name: 'Role', value: 'Air superiority fighter', inline: true },
            { name: 'Top Speed', value: 'Mach 2.5', inline: true },
            { name: 'Climb Rate', value: '340,6 m/s', inline: true },
        { name: 'Gross weight', value: '44,500 lb (20,185 kg)', inline: true },
        { name: 'Thrust/Weight', value: '1.07', inline: true },
        { name: 'Service Ceiling', value: '65000 ft', inline: true },
        { name: 'G-Limits', value: '+9.0', inline: true },
          
        )
        .setImage('https://i.imgur.com/Snr5yKg.jpeg')
        .setTimestamp()
        .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

//MiG29
        const mig29Embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Mikoyan MiG-29')
        .setURL('https://pcpilotscrew.com/')
        .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
        .setDescription('The Mikoyan MiG-29 is a twin-engine jet fighter aircraft designed in the Soviet Union. Developed by the Mikoyan design bureau as an air superiority fighter during the 1970s.')
        .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
        .addFields(
            { name: 'First Flight', value: 'Oct 6, 1977', inline: true },
    //		{ name: '\u200B', value: '\u200B' },
        { name: 'Nickname', value: 'Fulcrum', inline: true },
        { name: 'Role', value: 'Air superiority fighter', inline: true },
            { name: 'Top Speed', value: 'Mach 2.25', inline: true },
            { name: 'Climb Rate', value: '330 m/s', inline: true },
        { name: 'Gross weight', value: '14,900 kg (32,849 lb)', inline: true },
        { name: 'Thrust/Weight', value: '1.09', inline: true },
        { name: 'Service Ceiling', value: '59000 ft', inline: true },
        { name: 'G-Limits', value: '+9.0', inline: true },
          
        )
        .setImage('https://i.imgur.com/9PPFDOb.jpeg')
        .setTimestamp()
        .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

//Hornet
const fa18Embed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('McDonnell Douglas F/A-18 Hornet')
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription('The McDonnell Douglas F/A-18 Hornet is a twin-engine, supersonic, all-weather, carrier-capable, multirole combat jet, designed as both a fighter and attack aircraft (hence the F/A designation). Designed by McDonnell Douglas (now part of Boeing) and Northrop (now part of Northrop Grumman), the F/A-18 was derived from the latters YF-17 in the 1970s for use by the United States Navy and Marine Corps.')
.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: 'Jan 7, 1983', inline: true },
//		{ name: '\u200B', value: '\u200B' },
{ name: 'Nickname', value: 'Hornet', inline: true },
{ name: 'Role', value: 'Multirole fighter', inline: true },
    { name: 'Top Speed', value: 'Mach 1.8', inline: true },
    { name: 'Climb Rate', value: '250 m/s', inline: true },
{ name: 'Gross weight', value: '36,970 lb (16,769 kg)', inline: true },
{ name: 'Thrust/Weight', value: '0.96', inline: true },
{ name: 'Service Ceiling', value: '50000 ft', inline: true },
{ name: 'G-Limits', value: '+7.5, -3', inline: true },
  
)
.setImage('https://i.imgur.com/uPkTOdw.jpeg')
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });


        //Jeff
        const jf17Embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('PAC/CAC JF-17 Thunder')
        .setURL('https://pcpilotscrew.com/')
        .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
        .setDescription('The PAC JF-17 Thunder, or CAC FC-1 Xiaolong, is a lightweight, single-engine, fourth-generation multi-role combat aircraft developed jointly by the Pakistan Aeronautical Complex and the Chengdu Aircraft Corporation of China.')
        .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
        .addFields(
            { name: 'First Flight', value: 'Aug 25, 2003', inline: true },
    //		{ name: '\u200B', value: '\u200B' },
        { name: 'Nickname', value: 'Jeff', inline: true },
        { name: 'Role', value: 'Multirole fighter', inline: true },
            { name: 'Top Speed', value: 'Mach 1.8', inline: true },
            { name: 'Climb Rate', value: '300 m/s', inline: true },
        { name: 'Empty weight', value: '6,586 kg (14,520 lb)', inline: true },
        { name: 'Thrust/Weight', value: '0.95', inline: true },
        { name: 'Service Ceiling', value: '55510 ft', inline: true },
        { name: 'G-Limits', value: '+8, -3', inline: true },
          
        )
        .setImage('https://i.imgur.com/qXg5rEG.jpeg')
        .setTimestamp()
        .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    

//Viggen

const ajs37Embed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Saab 37 Viggen (Saab 37)')
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription('The Saab 37 Viggen (Swedish: "(thunder)bolt") was a Swedish single-seat, single-engine, short-medium range fighter and attack aircraft, manufactured between 1970 and 1990. Several variants were produced to perform the roles of all-weather fighter-interceptor, ground-attack and photo-reconnaissance, as well as a two-seat trainer.')
.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
    { name: 'First Flight', value: 'Feb 8, 1967', inline: true },
//		{ name: '\u200B', value: '\u200B' },
{ name: 'Nickname', value: 'Viggen', inline: true },
{ name: 'Role', value: 'Attack, Fighter, Reconnaissance', inline: true },
    { name: 'Top Speed', value: 'Mach 2.1', inline: true },
    { name: 'Climb Rate', value: '203 m/s', inline: true },
{ name: 'Gross weight', value: '16,439 kg (36,242 lb)', inline: true },
{ name: 'Thrust/Weight', value: 'N/A', inline: true },
{ name: 'Service Ceiling', value: '59000 ft', inline: true },
{ name: 'G-Limits', value: 'N/A', inline: true },
  
)
.setImage('https://i.imgur.com/NNs1PJ9.jpeg')
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

        //harrier
        const av8bEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('McDonnell Douglas AV-8B Harrier II')
	.setURL('https://pcpilotscrew.com/')
	.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
	.setDescription('The McDonnell Douglas AV-8B Harrier II is a single-engine ground-attack aircraft that constitutes the second generation of the Harrier Jump Jet family, capable of vertical or short takeoff and landing.')
	.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
	.addFields(
		{ name: 'First Flight', value: 'Nov 9, 1978', inline: true },
//		{ name: '\u200B', value: '\u200B' },
    { name: 'Nickname', value: 'Harrier', inline: true },
	{ name: 'Role', value: 'Ground attack', inline: true },
		{ name: 'Top Speed', value: 'Mach 0.9', inline: true },
		{ name: 'Climb Rate', value: '75 m/s', inline: true },
    { name: 'Gross weight', value: '22,950 lb (10,410 kg)', inline: true },
    { name: 'Thrust/Weight', value: '0,948', inline: true },
    { name: 'Service Ceiling', value: 'N/A', inline: true },
    { name: 'G-Limits', value: '+8/-3 G', inline: true },
  	
	)
	.setImage('https://aerobuzz.de/wp-content/uploads/2021/01/BAE-Systems-support-AV-8B-Harrier-US-Marine-Corps-900x599.jpg')
	.setTimestamp()
	.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });


//A10c
const a10cEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Fairchild Republic A-10 Thunderbolt II')
	.setURL('https://pcpilotscrew.com/')
	.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
	.setDescription('The Fairchild Republic A-10 Thunderbolt II is a single-seat, twin-turbofan, straight-wing, subsonic attack aircraft developed by Fairchild-Republic for the United States Air Force (USAF). In service since 1976, it is named for the Republic P-47 Thunderbolt, a World War II-era fighter-bomber effective at attacking ground targets, but commonly referred to as the "Warthog" or "Hog". The A-10 was designed to provide close air support (CAS) to friendly ground troops by attacking armored vehicles, tanks, and other enemy ground forces; it is the only production-built aircraft designed solely for CAS to have served with the U.S. Air Force. Its secondary mission is to direct other aircraft in attacks on ground targets, a role called forward air controller-airborne; aircraft used primarily in this role are designated OA-10.')
	.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
	.addFields(
		{ name: 'First Flight', value: 'Nov 9, 1978', inline: true },
//		{ name: '\u200B', value: '\u200B' },
    { name: 'Nickname', value: 'Warthog', inline: true },
	{ name: 'Role', value: 'Ground attack', inline: true },
		{ name: 'Top Speed', value: 'Mach 0.57', inline: true },
		{ name: 'Climb Rate', value: '30 m/s', inline: true },
    { name: 'Gross weight', value: '30,384 lb (13,782 kg)', inline: true },
    { name: 'Thrust/Weight', value: '0,36', inline: true },
    { name: 'Service Ceiling', value: '45000', inline: true },
    { name: 'G-Limits', value: '+5.8/-2 G', inline: true },
  	
	)
	.setImage('https://en-academic.com/pictures/enwiki/65/A-10_Thunderbolt_II_In-flight-2.jpg')
	.setTimestamp()
	.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });


            //mig21

            const mig21Embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Mikoyan-Gurevich MiG-21Bis')
	.setURL('https://pcpilotscrew.com/')
	.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
	.setDescription('The MiG-21bis is a delta wing, supersonic, fighter-interceptor jet aircraft. Much like the AK-47 became the everymans rifle, the MiG-21 has been operated by more than 40 countries worldwide, and has enjoyed the longest production run of any modern jet fighter to date.')
	.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
	.addFields(
		{ name: 'First Flight', value: 'Jun 16, 1955 (Ye-4)', inline: true },
//		{ name: '\u200B', value: '\u200B' },
    { name: 'Nickname', value: 'Fishbed', inline: true },
	{ name: 'Role', value: 'Interceptor, Fighter', inline: true },
		{ name: 'Top Speed', value: 'Mach 2.05', inline: true },
		{ name: 'Climb Rate', value: '235 m/s', inline: true },
    { name: 'Gross weight', value: '8,725 kg (19,235 lb)', inline: true },
    { name: 'Thrust/Weight', value: '0,76', inline: true },
    { name: 'Service Ceiling', value: '57400 ft', inline: true },
    { name: 'G-Limits', value: '+8,5 G', inline: true },
  	
	)
	.setImage('https://i.imgur.com/Udi9Kuk.jpeg')
	.setTimestamp()
	.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
