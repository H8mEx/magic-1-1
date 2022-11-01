const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { ChannelType, PermissionsBitField } = require('discord.js');

let gamerole = ""
const dcs = "676060833150926858"
const warthunder = "426745457662885898"
const il2 = "1037029961787248640"
const gta = "426745071967141909"
const starcitizen = "1037029806354731081"
const arma = "1037030209079222272"
const rulesproof = "748100298144481290"

const generalchat = client.channels.cache.get("257984126718574592")

var chosenString1 = ""
var chosenString2 = ""
var chosenString3 = ""

let usernameX = ""
let randomgifs = ""
const coolgifs = [
    "https://media3.giphy.com/media/MVgLEacpr9KVK172Ne/giphy.gif?cid=ecf05e47aps6hu7u4r4te2g9s3bthsr08evu206iwjjo337f&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/h8s5zdEJdBO48ThvOO/giphy.gif?cid=ecf05e474h709smwwcr8sql8e896y1595i42np3aest8y7p6&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/Ky4pUNjebwiAUqWg4e/giphy.gif?cid=790b76112a7b45291757db8c4315d871d547eea77edfda25&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/f5LPEFFyXg9lwZa3KJ/giphy.gif?cid=ecf05e47wbwlhv6trbhj8q712lo20jzc3id9u21sqdi4701m&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/kC8FwG0hLRd6isOf5e/giphy.gif?cid=ecf05e47cl1jupb8sf1ujkzeo1d1ozlkf9qy84tnoe22vvy6&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/lqMzxpMuOKhbwMr86u/giphy.gif?cid=ecf05e477vvjgej48wfj54npnmq2swljjpfffqysirl8x45p&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/KBIcj6nrC6zlLhwl1o/giphy.gif?cid=ecf05e47ax7pvljh11gvkwl600kirel1nlrak10codh2mow1&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/KbSNqAojoQ0TjuQfF0/giphy.gif?cid=ecf05e47f82yh4to4zsq54cbwj5w12foy2k9k1u3fw3021iy&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/S5DwRVmYXfXwVSzJAh/giphy.gif?cid=ecf05e4764ultnu41wj1ey69m342zqu3sla2gseqx0zr0vbe&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/U6AStPkS3IRCPd00eB/giphy.gif?cid=ecf05e4764ultnu41wj1ey69m342zqu3sla2gseqx0zr0vbe&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/8f5iMmMMSAfQnlnCuC/giphy.gif?cid=ecf05e47yvqb9iiyzzm9nxme0egtp2w1b96z39brudi711yu&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/x9q5Pta9hi4lRaIQAA/giphy.gif?cid=ecf05e473yb2m2snkqb023tvhg93k58prpucq9zpfmwyp1dh&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/ptCISWQH2GxbfI4i6h/giphy.gif?cid=790b76110b423287566c51e280b2d143bb15781934abe409&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/8vsnO8UzNlk13dbMEp/giphy.gif?cid=790b7611b19584f49041f278433519850d118894e7a539e8&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/pSNJyhTI0d6IPcO4PC/giphy.gif?cid=790b761178617980560c9bbfb7a22f8e613fc1fb273e15aa&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/E6zOBXWDIEAbcFwXKz/giphy.gif?cid=790b7611d3847a816938c4397c09b358cef81346bdf2f308&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/sDCcGZFdk5XxOarOIT/giphy.gif?cid=790b761110d174e011a1eaa678a5e1b5ac5dec30c2bd11a3&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/lc1NjDhvz7wSg7iC6i/giphy.gif?cid=790b761105b395b88359c359371c750acad8257290e7a45f&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/nnRG5giXc4coZ7xWCw/giphy.gif?cid=790b761146c099da77c18ffedcb46cb73f538f1b1c35be3a&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/ulNITHXiveheaCVatn/giphy.gif?cid=790b76112b07fdc2a715a72efac1547076ffebb4d1c7c5c6&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/hL18YJVLxPxrdLUlow/giphy.gif?cid=790b7611f41829cd7323770123b86df995cd3e3afe9e6d9e&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/p6rhyfotjlKso/giphy.gif?cid=790b76112b31257cf98b3a1f37f8c78d552d52259d96f829&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/pob0Q4kj6hwklslGxO/giphy.gif?cid=790b7611575fb0b3ac228dcaef8a8432d9a3e3ad2c82f55b&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/hg5Nxpri6ywwodrvb8/giphy.gif?cid=790b7611212e690c94c611099ba8dd8aab5422643b4873c5&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/zKnUyCxZyOFhGLYQRb/giphy.gif?cid=790b761193864dfe553a0677e93d071b13c27852eee743f1&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/zqXs9YjTORj4tp3pgE/giphy.gif?cid=790b7611c2d38d19a759afeee58cf09f1869bf740e3c2072&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/ZdmSJNDzrr81kIKtgC/giphy.gif?cid=790b76114c88b627fcb99436e2f62ad495697362c4da36d4&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/dpOmWQZJMtr0Nz04O2/giphy.gif?cid=790b7611e6fab7f58818caa88201e8105dfb40164a0debb4&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/UWzKPoxq0UmjXsVGml/giphy.gif?cid=790b76115a865409cff725ef6233989ae765d8a8a5ce5414&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/fVzHjRVsJw7JivAiob/giphy.gif?cid=790b7611ccd169bde2e7778a2c83afae8f541d49f70e2a7e&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/jpsztlihBM4TPz9VyD/giphy.gif?cid=790b7611e1fa2be832ba1c18e746362c12830254ff82a80f&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/3oKIPsyOrNH2Fqsgpi/giphy.gif?cid=790b76116b2b85115895f0af1438f43c99b44617c3d346ad&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/26DMXNZF4qlQ14rbW/giphy.gif?cid=790b761175f5353f9f41dc55a9586a952c3404cb2eee1299&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/Z040vc3rE5iVO/giphy.gif?cid=790b761181471b9190cebe8a21ed8eafed10d4de20905dc9&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/rAmtvwCQRhNHa/giphy.gif?cid=790b7611e0874e9f86892424d85dec161d4bb8b6116f7fe2&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/TfCnzViYTAMec/giphy.gif?cid=790b76111dbdea0733d270be946bf822a7680275d1e2852c&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/l1Kdbb3oMLljprhf2/giphy.gif?cid=790b7611ed2ff109e61a194f2f2600628ecd927a0ba65caf&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/3ohs803g5r9mTDvUDm/giphy.gif?cid=ecf05e47vzqbj2a6s3866du684akyvr0xm46ktqerccejzy3&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/SZEqy2biAdREISpUKy/giphy.gif?cid=790b7611f83a9652ed197dcc562c5dff73aa9cb61537e9d4&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/WgcEhQpqzTFq9UnVlZ/giphy.gif?cid=790b7611270171ce458cf55b13dabc190415dccb851ceeaf&rid=giphy.gif&ct=g"
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('enter')
		.setDescription('Join the server')
        .addStringOption(option =>
           option.setName('origin')
                .setDescription("Where are you from?")
                .setRequired(true)
		.addChoice("Europe", "Europe")
        .addChoice("North America", "North America")
		.addChoice("South America", "South America")
		.addChoice("Asia", "Asia")
		.addChoice("Australia", "Australia")
		.addChoice("Africa", "Africa")
        )

        .addStringOption(option =>
            option.setName('age')
                 .setDescription("How old are you?")
                 .setRequired(true)
                 .addChoice("12-17", "12-17")
                 .addChoice("18-22", "18-22")
                 .addChoice("23-29", "23-29")
                 .addChoice("30+", "30+")
                 )

                 .addStringOption(option =>
                    option.setName('game')
                         .setDescription("What is your main piloting game/simulation?")
                         .setRequired(true)
                         .addChoice("DCS World", "DCS World")
                         .addChoice("War Thunder", "War Thunder")
                         .addChoice("Grand Theft Auto", "Grand Theft Auto")
                         .addChoice("IL-2 Sturmovik", "IL-2 Sturmovik")
                         .addChoice("ARMA", "ARMA")
                         .addChoice("Star Citizen", "Star Citizen")

                         ), 

        async execute(interaction) {

            try {
               // let role = client.guilds.cache.find(r => r.name == "Member")
             chosenString1 = interaction.options.getString('origin');
             chosenString2 = interaction.options.getString('age');
             chosenString3 = interaction.options.getString('game');
             usernameX = interaction.user.tag
             randomgifs = coolgifs[Math.floor(Math.random() * coolgifs.length)];
             console.log("New user: "+usernameX)
            console.log("A new member has joined from: "+chosenString1+". He/She is "+chosenString2+" years old and mainly flies in "+chosenString3+"." )


            if (chosenString3 === 'DCS World')  {
                gamerole = dcs
            } else 
            if (chosenString3 === 'War Thunder')  {
                gamerole = warthunder
            } else 
            if (chosenString3 === 'Grand Theft Auto')  {
                gamerole = gta
                
            } else 
            if (chosenString3 === 'IL-2 Sturmovik')  {
                gamerole = il2
            } else 
            if (chosenString3 === 'ARMA')  {
                gamerole = arma
            } else 
            if (chosenString3 === 'Star Citizen')  {
                gamerole = starcitizen
            }

            
            interaction.member.roles.add(gamerole);
            interaction.member.roles.add(rulesproof);


interaction.member.roles.add("339703419537457175");


createEmbed()
interaction.reply("You are all set! Enjoy your stay!")


} catch (error){
    console.log("ERROR!!! "+error)
    return interaction.reply({ content: '@213660637274832897 Error: '+error, ephemeral: true });
}
await interaction.guild.channels.cache.get("257984126718574592").send({ embeds: [Embed]});

        }
}

function createEmbed() {
    Embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(usernameX.toString()+" has landed on RW01.")
    .setURL('https://pcpilotscrew.com/')
   // .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
    .setDescription("Come and say hello.")
   // .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
    .addFields(


        { name: 'Location: ', value: chosenString1.toString(), inline: true },
        { name: 'Age: ', value: chosenString2.toString(), inline: true },
        { name: 'Main Game: ', value: chosenString3.toString(), inline: true },

      
    )
    .setImage(randomgifs)
    .setTimestamp()
    .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    }