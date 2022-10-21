const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

//Add more: https://kidadl.com/articles/air-force-quotes-to-motivate-and-inspire

let wisdom = [
    "The Navy can lose us the war, but only the Air Force can win it. The fighters are our salvation, but the bombers alone provide the means of victory. \n\n  - Winston Churchill, September 1940",
"A terrorist is someone who has a bomb, but doesn't have an air force. \n \n - William Blum.",
'If our Air Forces are never used, they have achieved their finest goal. \n\n  - General Nathan Farragut Twining.',
"Airpower is like Oxygen. When you have enough, you don't have to think about it. When you don't have enough, that's all you can think about. \n\n  - General Frank Gorenc",
"Only air power can defeat air power. The actual elimination or even stalemating of an attacking air force can be achieved only by a superior air force. \n\n  - Alexander P. de Seversky",
"War is not only a matter of equipment, artillery, group troops or air force; it is largely a matter of spirit, or morale. \n \n - Chiang Kai-Shek",
"A modern, autonomous, and thoroughly trained Air Force in being at all times will not alone be sufficient, but without it, there can be no national security. \n \n - General Henry H. Arnold, Military Review Volume 26 Issue 2 (1946)",
"Not to have an adequate air force in the present state of the world is to compromise the foundations of national freedom and independence. \n\n  - Winston Churchill, 14 March 1913.",
"Our warriors are no longer limited to the people who fly the airplanes...Our entire force is a warrior force. Being a warrior is not an AFSC, ...it is a condition of the heart. \n\n - John Jumper.",
"Those who served, and those who continue to serve in the Army, Navy, Air Force, Marines, and Coast Guard took an oath to uphold and protect the Constitution against all enemies foreign and domestic, and we can never forget the importance of their commitment to our Nation.\n\n - Robin Hayes.",
"...they've got to draw in their horns and stop their aggression, or we're going to bomb them back into the stone age. And we would shove them back into the stone age with Air power or Naval power—not with ground forces.\n\n - Curtis LeMay.",
'When everything seems to be against you, remember that an airplane takes off against the wind, not with it. \n\n - Henry Ford.',
'...it was more American on an air force base in Crete than it was in Times Square.\n\n - Cathleen Schine',
"For it has been said, all that a man hath will he give for his life; and while all contribute of their substance the soldier puts his life at stake, and often yields it up in his country's cause. The highest merit, then is due to the soldier.\n\n - Abraham Lincoln, 'Collected Works Of Abraham Lincoln. Volume 7' (1864)",
"Our country has been attacked by force of arms, and by force of arms, we must retaliate. We must now turn every effort to building the greatest and most efficient Army, Navy, and Air Force in the world.\n\n - Franklin D. Roosevelt, Infamy Speech, 8 December 1941.",
"It is the pride of my heart to have been one of the earliest adopted sons of America.\n\n - Marquis de Lafayette",
"And then, when I thought about joining the Air Force, flying seemed like a natural extension of the motorcycling experience.\n\n - Duane G Carey.",
"These fallen heroes represent the character of a nation who has a long history of patriotism and honor - and a nation who has fought many battles to keep our country free from threats of terror.\n\n - Michael N. Castle",
"America without her Soldiers would be like God without His angels.\n\n - Claudia Pemberton",
"The Coast Guard has long been known as the armed service that gets more done for less.\n\n - Howard Coble",
"As a former Airman First Class in the United States Air Force, like many veterans in America, my military experience played an important part in instilling in me a sense of character and discipline that has served me throughout my life.\n\n - Chuck Norris",
"The thing about the Air Force or any branch of the military is that all of us were plucked away from our homes and our comfort zones and our families. So there was a solidarity in the military, a brotherhood.\n\n - John Huertas",
"I can still remember them wheeling the black and white TV sets into our classroom at school so we could watch the men landing on the Moon, and that obviously had a huge impact. I later found out those people flying Apollo were ex-military test pilots, so I decided to join the Air Force and become a test pilot.\n\n - David MacKay",
"The average cruising altitude of a commercial plane still is approximately 90,000m below the Kármán line — which is defined as the official border between the earth's surface and outer space.",
"95% of the world's population has never been on a flight. That means 7,410,000,000 people have never boarded an airplane.",
"The main wing of an A-4 Skyhawk attack jet is smaller than the tail of an F-14.",
"F4 Phantom II was called “World’s Leading Distributor of MiG Parts” because it destroyed so many MiG fighters",
"On 9/11, after both of the twin towers were hit, some jet fighters took to the air without any live ammunition, knowing that to prevent the hijackers from striking their intended targets, the pilots might have to intercept and crash their fighters into the hijacked planes, ejecting at the last moment.",
"During WW2, Russian Fighter pilot T. Kuznetsov flew himself home after being shot down by stealing a Nazi fighter plane. The German pilot landed near his crash site to scrounge around the wreck to look for souvenirs.",
"During WW2, while parachuting from a damaged bomber, an American aviator downed a Japanese fighter plane by shooting the pilot in the head with his sidearm.",
"In 1989, a Soviet pilot ejected a perfectly working MIG 23 thinking the plane’s engine had failed. It flew over 560 miles, crossing Germany before running out of fuel and crashing into a house in Belgium killing one teenager.",
"The Lockheed SR-71 Blackbird strategic reconnaissance aircraft was so fast, the designers did not even consider evasive maneuvers; the pilot was simply instructed to accelerate and out-fly any threat, including missiles.",
"As impressive as the Lockheed SR-71 was, it had a secret older brother (the A-12) which was even faster, lighter, and had a higher service ceiling.",
"The Lockheed U-2 is so hard to land that on every landing, the plane is paced by a chase car such as the Camaro SS with an assistant “talking” the pilot down and since 2001, more than a dozen pilots have suffered the effects of decompression sickness and nine were reported to have suffered permanent brain damage.",
"There exists a resort on a private African game reserve where, along with safari drives through beautiful landscapes, you can fly in a MiG-21 fighter jet.",
" In 1970 Russian MiG-25 Fighter had a majority of its avionics implemented in vacuum tubes to resists nuclear electromagnetic pulse.",
"Every last F14 Tomcat America has in flyable storage is being shredded to prevent spares reaching Iran, who are still flying the ones sold to them by the US in the 70’s.",
"The F-15 Eagle in all Air Forces has a combined air-to-air combat record of 104 kills to 0 losses. No air superiority versions of the F-15 (A/B/C/D models) have been shot down by enemy forces.",
" In 1983, an Israeli pilot successfully landed an F-15 with only one wing. In fact, he didn’t realize the extent of the damage until after landing, and stated he would have ejected had he known.",
"A McDonnell Douglas F-15 once shot down a satellite.",
"Chuck Yeager, the first man to fly faster than the speed of sound, revived his feat on October 14 2012 in an F-15 Eagle, to celebrate the 65th anniversary of breaking the sound barrier. He was 89 years old.",
"The F-22 and Eurofighter Typhoon have been pitted against each other in mock dogfights in the past. The Typhoons proved to be surprisingly effective against the American Aircraft, and after such an encounter the USAF declared “they didn’t want to play any more” as a result.",
"During WW2, a single American P-51 fighter plane held off 30 German fighters from attacking a squadron of B-17 bombers for over half an hour.",
"The only plane allowed to fly on 9/11 after the attacks was a plane from San Diego to Miami delivering anti-venom to a man bitten by a highly poisonous snake; it was accompanied by two jet fighters.",
"In June 1974, while President Nixon was on his way to a scheduled stop in Syria, Syrian fighter jets intercepted Air Force One to act as escorts. However, the Air Force One crew was not informed in advance and, as a result, took evasive action including a dive.",
"The test pilot for America’s first jet fighter dressed in a disguise, so that if trainees at a nearby base saw this new “propeller-less” plane, they’d be more likely to think they were hallucinating if it was being flown by a gorilla wearing a derby and smoking a cigar.",
"When the first time an F-22 Raptor flew over the International Date Line it had a massive system failure and had to turn back to Hawaii.",
"In 1956 due to high speed a F11 fighter shot itself because it was faster than its own bullet. ",
"The pride of the USAF, the F-22 raptor, has a mysterious fatal flaw. Its pilots often experience oxygen deprivation, and partly due to this the aircraft has the highest accident rate in the air force. The cause is unknown, and the issue is so severe that two pilots seek whistleblower protection.",
"The expected cost of the F-35 Program alone is nearly 7 times the total cost of the International Space Station",
"During WW2, Royal Air Force fighter pilots started a rumor that excessive carrot consumption gave gunners night vision. They did this so as not to alert Germans of RAF’s new radar technology after they shot down German aircraft on night raids and the Germans believed it. Germans fighters then started eating large quantities of carrots.",
"In 2003, a Boeing 727 aircraft was stolen out of an airport in Angola. Neither the plane, nor the two men aboard were ever found.",
"In Saudi Arabia, women are allowed to fly aircraft, though they must be chauffeured to the airport because it’s illegal for them to drive a car. ",
"A company called “VessEx” can recover stolen aircraft and ships, even venturing into warzones and combating pirates to do so.",
"In 4 out of 10 of the UK’s largest airports, it is cheaper to park a light aircraft for 24 hours than to park your car.",
"Many North American pilots refer to the female voice-warnings of certain aircrafts as “Bitching Betty”",
"Aircraft windows and doors are round to prevent metal fatigue. As the cabin pressurizes, it puts extreme pressure on the airframe, which is concentrated at right angles. The original De Havilland Comet broke apart multiple times in the 1950s because it had square windows. ",
"In 1910, while attending the first American Air Meet, William Boeing asked every aviator for a ride, but no one obliged. Disappointed, William went back to Seattle and founded Boeing aircraft",
"Norway’s first aircraft hijacking was resolved after the hijacker surrendered his weapon in exchange for more beer.",
"In 1994, a Fedex Jet (McDonnell Douglas DC-10) suffered a hijacking attempt by a disgruntled employee, who was armed with multiple melee weapons. The flight crew in spite of receiving multiple hammer blows performed extreme aerial maneuvers with the massive aircraft, at times flying upside down, with the intent of keeping the hijacker off-balance. The flight crew eventually succeeded in restraining Calloway.",
"Odds of dying in a car accident are 1 in 5000. Odds of dying in a plane crash are 1 in 11 million and even if you are involved in a plane crash, statistically you have a 76% chance of survival.",
"Chuck Yeager, the first man to break the sound barrier in a plane, did it with a broken arm and two broken ribs and had to close the plane’s cockpit with a broomstick.",
"In 2006, on a flight between Washington and Dallas, a woman farted and tried to cover up the smell by lighting matches, which led to an emergency landing.",
"In 2002, a mid-air collision between a passenger jet and cargo jet took the lives of all 71 people aboard both planes. A man whose family was killed in the collision later stabbed to death the Air Traffic Controller that was on duty at the time of the collision.",
"Airlines refuse to adopt backwards facing seats despite proven safety advantages.",
"In 1974, there was a “Not-For-Profit” airline called Freelandia, which offered organic food and waterbeds. It went bankrupt in under a year.",
"Severely overweight passengers on a Southwest Airlines flight must buy multiple tickets if their body mass extends over the armrests.",
"American Airlines saved nearly $40,000 a year by eliminating one olive from the salad they served each passenger",
" Singapore Airlines has a corpse cupboard to store people who die mid-flight.",
"United Airlines Stewardesses were forbidden to marry until 1968.",
"In 1994, the pilot of an Aeroflot Airbus A310 allowed his son to sit at the controls during a flight. The boy inadvertently turned off the autopilot controls, sending the plane into a hillside and killing all 75 aboard.",
"Aircraft black boxes are designed to be able to withstand the pressure of being a mile underwater for up to 30 days. In the case of the Airbus box on Air France 447, it spent over two-and-a-half years at over 3 miles deep and investigators were still able to determine the cause of the accident.",
"In 2002, a 15 year old boy inspired by 9/11, stole a Cessna 172 and flew it into a skyscraper in Tampa, Florida. It damaged one office room and he was the only person that died.",
"According to research funded by Lufthansa, tomato juice is more popular on airplanes than on the ground because cabin pressure changes the way we perceive taste.",
"Hydraulic pressure resonance suppressors used in airplanes were developed by Bill Nye.",
"There is a survival guide for falling out of an airplane without a parachute, with numerous case examples.",
"The loudest airplane ever built was quite possibly the XF-84H. On the ground, it created constant visible sonic booms. The shock wave was actually powerful enough to knock a man down.",
"In 2001, Rowan Atkinson (Mr. Bean) piloted his private plane carrying his family after the pilot passed out at the controls. He had never piloted a plane before. The pilot eventually came to, after several slaps by Atkinson, and managed to land the plane safely at the airport. ",
"In 2001, Captain Robert Piché successfully piloted an emergency landing of his airplane when both engines failed on a trans-Atlantic flight. The plane also lost hydraulic power to the flaps, alternate brakes, and spoilers. He landed the plane in the Azores, saving the lives of all 306 people on board.",
"In 1975, after a skydiving student’s main parachute became entangled with the plane, he deployed his reserve chute. This caused the plane to stall and engines to fail. Everybody on board survived as the plane descended under the reserve chute.",
"In 1955, when mass murderer Jack Graham blew up an airplane to kill his mother (killing 43 others), he could only be charged with one count of premeditated murder because blowing up an airplane was not a federal crime yet."


]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wisdom')
		.setDescription('Wisdom for those without.'),
	async execute(interaction) {
        let givenwisdom = wisdom[Math.floor(Math.random() * wisdom.length)];

        console.log(givenwisdom)
            //embed
    const wisdomEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setURL('https://pcpilotscrew.com/')
    //.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
    //.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
    .addFields(
    { name: 'Wisdom: \n ', value: givenwisdom, inline: true },
    //		{ name: '\u200B', value: '\u200B' },

    
    )
    
    //.setTimestamp()
    //.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    

    
		return interaction.reply({ embeds: [wisdomEmbed] }) ;

	},
};

