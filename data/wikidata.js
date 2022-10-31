//Aircraft-Data

const wikidata = "No Info"

const types = [
    "Multirole Fighter",
    "Air Superiority Fighter",
    "Interceptor",
    "Strike Fighter",
    "Fighter Bomber",
    "Trainer"
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

const f14bData = {
    "name": "Grumman F-14B Tomcat",
    "nickname": "Tomcat",
    "first_flight": "December 21, 1970 (F-14A)",
    "role": types[0] + ", "+types[1]+ ", "+types[2],
    "top_speed": 2.34, //Mach
    "cruise_speed": 0.85, //Mach
    "combat_range": 500, //NM
    "climb_rate": "not provided", 
    "gross_weight": 41780, //lbs 
    "thrust_weight": 0.73,
    "service_ceiling": 53000, //ft
    "g-limit": "+7,5",
    "description": "The F-14 is a carrier-capable supersonic, twin-engine, twin-tail, variable-sweep wing fighter aircraft. It served as the U.S. Navy's primary maritime air superiority fighter, fleet defense interceptor, and tactical aerial reconnaissance platform.",
    "image": "https://static.wikia.nocookie.net/flight/images/f/ff/RL-Aircraft-Grumman_F-14_Tomcat.jpg/revision/latest/scale-to-width-down/350?cb=20210818092755"
}

const ajs37Data = {
    "name": "Saab AJS-37 Viggen",
    "nickname": "Viggen",
    "first_flight": "Feb 8th, 1967 (Viggen; not AJS)",
    "role": types[3],
    "top_speed": 1.73, //Mach
    "cruise_speed": 0.9, //Mach
    "combat_range": 540, //NM
    "climb_rate": 203, //m/s
    "gross_weight": 37479, //lbs 
    "thrust_weight": 0.76,
    "service_ceiling": 59000, //ft
    "g-limit": "+7",
    "description": "The AJS-37 Viggen (Bolt) is a Swedish-designed, single engine, supersonic strike fighter. First operational in the early 1970s, the Viggen was one of the most advanced aircrafts in Europe before the Panavia Tornado.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Saab_AJS-37_Viggen_37098_52_%28SE-DXN%29_%289256079273%29.jpg"
}

const f15cData = {
    "name": "MC Donnal Douglas F-15C",
    "nickname": "Eagle",
    "first_flight": "Jul 27, 1972",
    "role": types[1],
    "top_speed": 2.5, //Mach
    "cruise_speed": 0.86, //Mach
    "combat_range": 1061, //NM
    "climb_rate": 254, //m/s
    "gross_weight": 44500, //lbs 
    "thrust_weight": 1.07,
    "service_ceiling": 65000, //ft
    "g-limit": "+9, -3",
    "description": "The F-15C Eagle  is an American-designed, twin-engine, supersonic fighter. First operational in the late 1970s, the Eagle is among the most successful fighters in the world, with 102 confirmed kills without ever getting shot down.    ",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/F-15%2C_71st_Fighter_Squadron%2C_in_flight.JPG/1920px-F-15%2C_71st_Fighter_Squadron%2C_in_flight.JPG"
}

const mig29sData = {
    "name": "MiG-29S",
    "nickname": "Fulcrum C",
    "first_flight": "Dec 23, 1980",
    "role": types[1],
    "top_speed": 1.98, //Mach
    "cruise_speed": 1.21, //Mach
    "combat_range": 770, //NM
    "climb_rate": 330, //m/s
    "gross_weight": 42680, //lbs 
    "thrust_weight": 1.09,
    "service_ceiling": 59000, //ft
    "g-limit": "+9",
    "description": "The MiG-29 Fulcrum is a Russian-designed, twin-engine, supersonic fighter. First operational in the early 1980s, the Fulcrum is a light weight fighter, comparable to the American F/A-18 Hornet and F-16.",
    "image": "https://static.wikia.nocookie.net/flight/images/1/1f/RL-Aircraft-Mikoyan_MiG-29.jpg/revision/latest/scale-to-width-down/350?cb=20211112230250"
}

const mig29aData = {
    "name": "MiG-29A",
    "nickname": "Fulcrum A",
    "first_flight": "Oct 6,1977",
    "role": types[1],
    "top_speed": 1.94, //Mach
    "cruise_speed": 1.21, //Mach
    "combat_range": 772, //NM
    "climb_rate": 330, //m/s
    "gross_weight": 43431, //lbs 
    "thrust_weight": 1.01,
    "service_ceiling": 59100, //ft
    "g-limit": "+9",
    "description": "The MiG-29 was designed in response to a new generation of American fighters, which included the F-15 and F-16. Designed as an air defense fighter, this dual-purpose aircraft also possessed a ground attack capability.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mikoyan-Gurevich_MiG-29A_%289-12A%29%2C_Russia_-_Air_Force_AN0762084.jpg/800px-Mikoyan-Gurevich_MiG-29A_%289-12A%29%2C_Russia_-_Air_Force_AN0762084.jpg?20130925002739"
}
const m2000cData = {
    "name": "Mirage M-2000C",
    "nickname": "Vajra (Thunderbolt)",
    "first_flight": "Mar 10, 1978",
    "role": types[0],
    "top_speed": 2.2, //Mach
    "cruise_speed": 1.88, //Mach
    "combat_range": 837, //NM
    "climb_rate": 285, //m/s
    "gross_weight": 30420, //lbs 
    "thrust_weight": 0.91,
    "service_ceiling": 59000, //ft
    "g-limit": "+9",
    "description": 'The Mirage 2000 "Vajra" is a low-set delta wing combat aircraft which is an extremely agile and manoeuvrable fighter developed for the French Air Force. The Mirage 2000 started its service life as an interceptor, designated 2000C and the two-seat trainer 2000B.',
    "image": "https://cdn.airplane-pictures.net/images/uploaded-images/2021/3/11/1380415.jpg"
}
const f14aData = {
    "name": "F-14A",
    "nickname": "Tomcat",
    "first_flight": "Dec 21, 1970",
    "role": types[0],
    "top_speed": 2, //Mach
    "cruise_speed": 0.75, //Mach
    "combat_range": 500, //NM
    "climb_rate": 230, //m/s
    "gross_weight": 61000, //lbs 
    "thrust_weight": 0.92,
    "service_ceiling": 53000, //ft
    "g-limit": "+7.5",
    "description": "The Grumman F-14 Tomcat is an American carrier-capable supersonic, twin-engine, two-seat, twin-tail, variable-sweep wing fighter aircraft. The Tomcat was developed for the United States Navy's Naval Fighter Experimental (VFX) program after the collapse of the General Dynamics-Grumman F-111B project. The F-14 was the first of the American Teen Series fighters, which were designed incorporating air combat experience against MiG fighters during the Vietnam War.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg/1000px-US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg"
}

const miragef1Data = wikidata.miragef1Data
const mig21bisData = wikidata.mig21bisData
const su27Data = wikidata.su27Data
const su33Data = wikidata.su33Data
const fa18cData = wikidata.fa18cData
const av8bData = wikidata.av8bData
const a10aData = wikidata.a10aData
const a10cData = wikidata.a10cData
const f15eData = wikidata.f15eData

const f4eData = {
    "name": "F-4E",
    "nickname": " Phantom II",
    "first_flight": " May 27, 1958 (YF4H-1)",
    "role": types[4],
    "top_speed": 2.23, //Mach
    "cruise_speed": 0.77, //Mach
    "combat_range": 370, //NM
    "climb_rate": 210, //m/s
    "gross_weight": 41.5, //lbs 
    "thrust_weight": 0.86,
    "service_ceiling": 62650, //ft
    "g-limit": "+6",
    "description": " The F-4 Phantom II is an American-designed, twin engine, supersonic fighter. First operational in the early 1960s, the Phantom II was one of the most legendary aircraft in US service, and became the most known aircraft used in the Vietnam War.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/QF-4_Holloman_AFB.jpg"
}

const f5e3Data = {
    "name": "F-5E3",
    "nickname": "Tiger II",
    "first_flight": "Aug 11, 1972",
    "role": types[1],
    "top_speed": 1.63, //Mach
    "cruise_speed": 0.9, //Mach
    "combat_range": 120, //NM
    "climb_rate": 175, //m/s
    "gross_weight": 15745, //lbs 
    "thrust_weight": 0.58,
    "service_ceiling": 51800, //ft
    "g-limit": "+7,3, -3.9",
    "description": "The F-5E Tiger II is an American-designed, twin engine, supersonic light fighter. First operational in the early 1970s, the Tiger II was a very nimble aircraft and a fearful dogfighter. It became famous as the MiG-28 thanks to the movie Top Gun (1986).",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/J-3005.jpg/1280px-J-3005.jpg"
}

const su25Data = wikidata.su25Data
const su25tData = wikidata.su25tData
const l39Data = wikidata.l39Data
const t45Data = wikidata.t45Data
const mig23Data = wikidata.mig23Data
const c130Data = wikidata.c130Data
const a4Data = wikidata.a4Data
const mb339Data = {
    "name": "Aermacchi MB-339",
    "nickname": "Macchino (Little Macchi)",
    "first_flight": "Aug 12, 1976",
    "role": types[3] + ", "+types[5],
    "top_speed": 0.8, //Mach
    "cruise_speed": 0.76, //Mach
    "combat_range": 212, //NM
    "climb_rate": 33.5, //m/s
    "gross_weight": 9700, //lbs 
    "thrust_weight": 0.41,
    "service_ceiling": 48000, //ft
    "g-limit": "+8, -4",
    "description": "The MB-339 is an Italian-designed, single engine, subsonic trainer and strike fighter. First operational in the late 1970s, the 339 is the italian national acrobatic team's (Pattuglia Acrobatica Nazionale) current aircraft and is also the only jet plane capable of the Lomcovàk maneuver without the use of thrust vectoring.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Aermacchi_MB-339_Freccia_Tricolore.jpg/1280px-Aermacchi_MB-339_Freccia_Tricolore.jpg"
}
const g91Data = {
    "name": "Fiat G-91",
    "nickname": "Little Sabre",
    "first_flight": "Aug 9, 1956",
    "role": "(Light) "+types[4],
    "top_speed": 0.87, //Mach
    "cruise_speed": 0.51, //Mach
    "combat_range": 150, //NM
    "climb_rate": 30, //m/s
    "gross_weight": 12000, //lbs 
    "thrust_weight": 0.42,
    "service_ceiling": 42.979, //ft
    "g-limit": "+6 (Data might be faulty)",
    "description": "The G.91 Little Sabre is an Italian-designed, single engine, subsonic light fighter-bomber. First operational in the late 1950s, the Little Sabre was the winner of the NBMR-1 (NATO Basic Military Requirement 1°) and an agile dogfighter. It participated in the Colonial Portuguese War and it was the first aircraft operated by the Frecce Tricolore, the italian national acrobatic team (Pattuglia Acrobatica Nazionale).",
    "image": "https://www.aeronautica.difesa.it/storia/museostorico/PublishingImages/Hangar_Skema/FiatG91PAN/FIAT%20G91PAN%2004HOMEweb.jpg"
}
const pa200Data = {
    "name": "Panavado MRCA PA-200",
    "nickname": "Tornado",
    "first_flight": "Aug 14, 1974",
    "role": types[0] + ", "+types[4]+" and more (other variants)",
    "top_speed": 2.2, //Mach
    "cruise_speed": 0.9, //Mach
    "combat_range": 645, //NM
    "climb_rate": 77, //m/s
    "gross_weight":44.6, //lbs 
    "thrust_weight": 0.77,
    "service_ceiling": 50000, //ft
    "g-limit": "+7.5",
    "description": "The PA-200 Tornado is an European-designed, single engine, variable wing-sweep, supersonic fighter. First operational in the late 1970s, the Tornado is the result of a joint project developed by England (BAC, now BAE), Germany (MBB) and Italy (FIAT, now Leonardo) and it was the most advanced fighter in Europe until the end of the 20th century. Unlike most variable wing-sweep aircrafts, the Tornado has a system that allows its ordnance to always stay alligned with the air flow.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/RAF_CONDUCTS_FIRST_AIR_STRIKES_OF_IRAQ_MISSION_MOD_45158635.jpg/1280px-RAF_CONDUCTS_FIRST_AIR_STRIKES_OF_IRAQ_MISSION_MOD_45158635.jpg"
}
const f100dData = {
    "name": "F-100D",
    "nickname": "Super Saber",
    "first_flight": "May 25, 1953",
    "role": types[4],
    "top_speed": 1.4, //Mach
    "cruise_speed": 0.8, //Mach
    "combat_range": 460, //NM
    "climb_rate": 114, //m/s
    "gross_weight": 28.85, //lbs 
    "thrust_weight": 0.55,
    "service_ceiling": 50000, //ft
    "g-limit": "+7",
    "description": "The F-100D Super Sabre is an American-designed, single engine, supersonic fighter-bomber. First operational in the mid 1950s, the Super Sabre, also known as Catfish (due to the nose shape) or Hun (short for hundred), was the first operational supersonic plane. The name Super Sabre comes from it being a rework of the F-86 Sabre project. However, the operational versions shared almost nothing with its predecessor.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/F-100_Rogers_Dry_Lake.jpg/300px-F-100_Rogers_Dry_Lake.jpg"
}
const f86Data = {
    "name": "F-86",
    "nickname": "Sabre",
    "first_flight": "Oct 1, 1947",
    "role": types[1],
    "top_speed": 0.95, //Mach
    "cruise_speed": 0.7, //Mach
    "combat_range": 360, //NM
    "climb_rate": 46, //m/s
    "gross_weight": 15200, //lbs 
    "thrust_weight": 0.42,
    "service_ceiling": 50000, //ft
    "g-limit": "+6.5",
    "description": "The F-86 Sabre is an American-designed, single engine, subsonic fighter. First operational in the late 1940s, the Sabre, also know as Sabrejet, became one of the most iconic aircraft of the Korean War, together with its archenemy, the MiG-15.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/46/F-86F_12th_FBS_at_Taegu_1952.jpg"
}
const mig15Data = wikidata.mig15Data
const mig19Data = wikidata.mig19Data
const kfirData = wikidata.kfirData
const jf17Data = wikidata.jf17Data

const aircraftdata = [
    f15cData,
f16Data ,
f14bData ,
mig29sData,
eurofighterData,
mig29aData,
m2000cData,
f14aData ,
miragef1Data,
mig21bisData,
su27Data ,
su33Data ,
fa18cData,
av8bData ,
a10aData ,
a10cData ,
f15eData ,
f4eData ,
f5e3Data ,
su25Data ,
su25tData ,
l39Data ,
t45Data ,
mig23Data ,
ajs37Data ,
c130Data,
a4Data,
mb339Data ,
g91Data ,
pa200Data ,
f100dData ,
f86Data ,
mig15Data ,
mig19Data ,
kfirData,
jf17Data
]

module.exports = { aircraftdata, f15cData, f16Data, eurofighterData, mig29sData, ajs37Data, f14bData,
 mig29aData, m2000cData, f14aData, f4eData, f5e3Data, mb339Data, g91Data, pa200Data, f100dData, f86Data};