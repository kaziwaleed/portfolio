/* ============ DATA ============
   Video sources: "v12" = local file ./v12.mp4.
   To host on Vimeo or YouTube later, replace with "vimeo:123456789" or "youtube:VIDEO_ID". */
const RT={v63:20,v1:20,v2:30,v3:10,v4:30,v5:15,v6:14,v7:13,v8:23,v9:15,v10:32,v11:26,v12:26,v13:25,v14:26,v15:23,v16:31,v17:32,v18:30,v19:30,v20:60,v21:25,v22:10,v23:25,v24:15,v25:10,v26:15,v27:10,v28:22,v29:15,v30:10,v31:30,v32:50,v33:20,v34:20,v35:15,v36:46,v37:26,v38:15,v39:49,v40:57,v41:56,v42:62,v43:26,v44:118,v45:196,v46:67,v47:60,v48:10,v49:21,v50:28,v51:26,v52:15,v53:56,v54:49,v55:13,v56:13,v57:45,v58:15,v59:35,v60:80,v61:22,v62:53};
const TALL=new Set(["v6","v7","v17","v26","v27","v29","v30"]);
const I=n=>typeof n==="number"?`./image${n}.jpg`:`./${n}.jpg`;
const POVR={v2:"./th-always.jpg",v20:"./th-dalda.jpg",v45:"./th-tmk.jpg",v46:"./th-rwp.jpg",v47:"./th-dig.jpg"};
const P=v=>POVR[v]||`./p-${v}.jpg`;
/* award cutouts: ./aw-<name>.png, "laurel" = drawn fallback */
const LAUREL=(()=>{let l="";for(let s of [-1,1])for(let i=0;i<7;i++){const ad=28+i*18,a=ad*Math.PI/180,r=34,x=50+s*Math.sin(a)*r,y=50-Math.cos(a)*r;l+=`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="4.4" ry="9.5" transform="rotate(${(s*(ad+90-28)).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`}return `<svg class="troph laurel" viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor">${l}<path d="M50 30l3.6 8 8.8.9-6.6 5.9 1.9 8.7-7.7-4.5-7.7 4.5 1.9-8.7-6.6-5.9 8.8-.9z"/></g></svg>`})();
const TR=t=>!t?"":t==="laurel"?LAUREL:`<img class="troph" src="./aw-${t}.png" alt="" loading="lazy">`;

const WORK=[
 {id:"always",type:"campaign",size:"wide",client:"P&G · Always",agency:"Leo Burnett",year:"2024",role:"Creative Director",
  title:"Shhh Nahi Shhhare",poster:I("th-always"),loop:"v2",award:"Dragons of Asia",trophy:"dragon-gold",
  line:"Reversed <b>two years of 20% share decline</b> by ending the silence around period discomfort.",
  brief:"Always was losing share in Pakistan, and the improved product needed a reason to be heard. The category talked around periods, never about them.",
  idea:"We built the campaign on a cultural truth: girls grow up being told to hush any talk of period discomfort. 'Shhh Nahi Shhhare' turned the hush into the conversation, and repositioned the product around confidence instead of compromise.",
  results:[["96%","positive brand perception"],["2 yrs","of 20% share decline reversed"],["Best Social Good Brand","Dragons of Asia 2025"]],
  videos:[["v2","No Irritation, No Adjustment · soft relaunch"],["v7","Shhh Nahi Shhhare · social"],["v6","Haww Haye, Shhhh · social"],["v55","Director's cut"],["v56","Mirror scene"]],images:[I(20),I(22)]},
 {id:"zyn",type:"content",client:"PMI · ZYN",agency:"Leo Burnett",year:"2024–25",role:"Creative Director · writer, associate director, voice",
  title:"ZYN 2.0 launch slate",poster:P("v12"),loop:"v12",
  line:"Wrote a <b>15-DVC slate</b> and CGI flavour launches behind <b>20% category share growth</b> in a year.",
  brief:"Launch ZYN's 2.0 era in a tier-1 market with some of the region's biggest media spends, inside strict regulatory guardrails on what nicotine advertising can show and say.",
  idea:"'ZYN ke saath… stay in the moment.' A series of everyday moments (cooking, painting, dancing, jamming, shopping) that land emotional, culturally specific stories without breaking a single rule. CGI launches carried XX-Strong and Fresh Mint.",
  results:[["+20%","category share vs the legacy player"],["15","DVCs written"],["2","CGI flavour launches directed"]],
  videos:[["v8","Fresh Mint · flavour launch"],["v9","XX-Strong · CGI"],["v10","Chef moment"],["v12","Painting moment"],["v14","Dance moment"],["v13","Shopping moment"],["v11","Date moment"],["v15","Watermelon"],["v16","Skiing"],["v17","Jamming · vertical"],["v49","Find Your ZYN"]],images:[I(28),I(37),I(31),I(32)]},
 {id:"safeguard",type:"campaign",client:"P&G · Safeguard",agency:"Leo Burnett",year:"2025",role:"Creative Director",
  title:"Hifazat Ka All-Rounder",poster:I(21),loop:"v1",
  line:"The brand's <b>first repositioning in 20 years</b>, with an <b>18% brand affinity lift</b>.",
  brief:"Safeguard had said the same thing for two decades. The brand needed a sharper role in family life without losing the protection equity it built.",
  idea:"Position Safeguard as the family's all-rounder: one soap that covers every kind of germ a busy household meets, told through everyday family chaos.",
  results:[["+18%","brand affinity"],["20 yrs","since the last repositioning"]],
  videos:[["v1","Hifazat Ka All-Rounder · TVC"]],images:[I(21)]},
 {id:"barbican",type:"campaign",client:"Barbican · AFC Champions League",agency:"Helium MENA",year:"2025",role:"Creative Lead · strategy & creative",
  title:"Raise The Game",poster:I(38),loop:"l-barbican",
  line:"A winning strategy and a <b>$700K+ campaign</b> across <b>4 GCC markets</b>.",
  brief:"Become the evening social beverage of choice for young adults. Move Barbican from 'just a malt beverage' to an iconic social drink, using its AFC Champions League partnership.",
  idea:"'Raise The Game' pivots Barbican toward evening social occasions around football: the match, the crowd, the moment you raise a bottle. The platform ran across stadium, retail, digital and a consumer promotion microsite, with Arabic and English expressions.",
  results:[["$700K+","campaign budget"],["4","markets"],["4","channels: stadium, retail, digital, microsite"]],
  videos:[],images:[I(43),I("bbn-merch"),I(38),I(41),I(42),I(44)]},
 {id:"dalda",type:"campaign",client:"Dalda Foods",agency:"MullenLowe",year:"2023–24",role:"Associate Creative Director · writer · associate director on the Ramadan films",
  title:"Jahan Maamta Wahan Dalda",poster:I("th-dalda"),loop:"v20",award:"Effie Gold",trophy:"effie-gold",
  line:"A thematic reboot with Fawad Khan that won <b>Effie Gold</b> and drove an <b>11% sales increase</b>.",
  brief:"Modernise a legacy cooking-oil brand for millennial households while keeping its warmth around motherhood.",
  idea:"The Maamta story: everyday Pakistani family life where care shows up in food. We cast Fawad Khan and wrote a series that balances scale with small, true moments. The Ramadan work, 'Eid se Pehle Eidi', carried the same warmth into a value offer, and I associate-directed those films.",
  results:[["Gold","Effie Awards 2023"],["+11%","sales"],["2","campaign seasons"]],
  videos:[["v20","Jahan Maamta Wahan Dalda · 60s"],["v18","Maamta story continues"],["v19","Maamta story · cut 2"],["v21","Jahan Dalda Wahan Har Din Eid"],["v23","Eid se Pehle Eidi"],["v22","Save 250 · Ramadan offer"]],images:[I(52),I(50),I(53)]},
 {id:"value",type:"campaign",size:"wide",client:"P&G · Unilever",agency:"Leo Burnett · MullenLowe",year:"2023–25",role:"Creative Director · Associate Creative Director",
  title:"Value without compromise",poster:I("value-trio"),loop:"v4",award:"Dragons of Asia",trophy:"dragon-silver",
  line:"Three brands, one inflation-era problem. Ariel's value tier <b>protected 78% of baseline volume</b> while prices climbed.",
  brief:"Peak inflation was pushing Pakistani households down the shelf. Each brand had to offer real savings without signalling a cheaper, lesser product, and without undoing years of equity.",
  idea:"Make the saving feel like strength, not a step down. Ariel kept tough-stain performance as the proof point ('Karak Daaghon Ki Karak Safai', 'Daagh aur Doubt Dono Out'). Knorr Chicken Cubes said a mother's cooking stays uncompromised ('Khanay Mein No Samjhota'). Lifebuoy turned the bills into the hook: big protection now comes with big savings ('Bari Hifazat, Bari Bachat').",
  results:[["78%","of Ariel's baseline sales volume protected"],["3","brands, one strategy, two agencies"],["Sustainability & Environment","Dragons of Asia 2024 · Ariel"]],
  videos:[["v4","Ariel · Daagh aur Doubt Dono Out"],["v63","Knorr Chicken Cubes · Khanay Mein No Samjhota"],["v33","Lifebuoy · Bari Hifazat, Bari Bachat"],["v5","Ariel · Up to 100% tough stain removal"],["v3","Ariel · Karak Daaghon Ki Karak Safai"]],images:[I(23),I(25),I(64)]},
 {id:"knorr",type:"campaign",client:"Unilever · Knorr Noodles",agency:"MullenLowe",year:"2021",role:"Associate Creative Director · writer",
  title:"Tummy Full, Tiffin Chatt",poster:I("knorr-cat"),loop:"v32",
  line:"Gave the market leader a grumpy anti-hero, Billa the cat, and broke the global brand book to do it.",
  brief:"Knorr owns almost the entire instant-noodle category in Pakistan. When you already lead, the risk is becoming wallpaper: a kids-and-moms brand that adults tune out.",
  idea:"Tell the tiffin story from the point of view of the house cat, Billa, who waits every day for leftovers that never come back, because the Knorr tiffin always comes home empty. It sat outside Knorr's global brand guidelines and the global team didn't agree. The local brand team and we believed in it and made it anyway.",
  results:[["Kids + adults","Aurora noted the 2021 billa film reached adults as well as kids"],["3+ yrs","Billa stayed on as the brand's character"],["Effie APAC Gold","2023 · BillaGram, the brand's next agency building on Billa"]],
  videos:[["v32","Tummy Full, Tiffin Chatt · TVC"]],images:[I(63),I("knorr-cat")]},
 {id:"kia",type:"campaign",client:"KIA Motors",agency:"MullenLowe",year:"2023",role:"Associate Creative Director · writer, associate director",
  title:"KIA Stonic · It's Got It All",poster:I("th-kia"),loop:"v41",award:"iF Design",trophy:"if",
  line:"Repositioned a crossover against the <b>two best-selling sedans</b> with a multi-part DVC series.",
  brief:"KIA Stonic was priced against sedans, but people compared it to crossovers. It needed to win buyers from the Toyota Yaris and Changan Alsvin.",
  idea:"We gave the rival sedans alter egos, Yasir and Alvin, and let Stonic show up everything they couldn't do. A multi-series DVC campaign activated across digital.",
  results:[["iF Design Award","2023 · #PlayItYoung"],["2","category leaders targeted"]],
  videos:[["v41","It's Got It All · 1"],["v39","It's Got It All · 2"],["v40","It's Got It All · 3"]],images:[I(73),I(74),I(75),I(70)]},
 {id:"efu",type:"design",client:"EFU Life · WIN app",agency:"MullenLowe",year:"2022",role:"Associate Creative Director · identity, strategy, writing",
  title:"WIN at life, together",poster:I(67),loop:"v36",
  line:"Built the <b>brand identity, strategy and 360° launch</b> for a wellness app from scratch.",
  brief:"EFU Life was launching WIN, a wellness and fitness app, and needed a brand people would actually want on their phone.",
  idea:"I created the WIN identity and wrote the launch across TV, digital, print and radio around one idea: small wins, done together.",
  results:[["Insurance Asia Award","winner"],["4","channels at launch"]],
  videos:[["v36","Let's WIN at life together"],["v35","Wellness Wheel"],["v37","Achieve your WIN status"],["v38","Ready Ho Jao!"]],images:[I(66),I(68),I(69)]},
 {id:"unilever",type:"campaign",client:"Unilever · Surf Excel, Lifebuoy",agency:"MullenLowe",year:"2021–24",role:"Associate Creative Director",
  title:"Keeping big brands close",poster:I(62),loop:"v31",
  line:"Won back <b>2 departing Unilever brands</b> and kept 6 on the roster.",
  brief:"Sustain brand frameworks across one of the world's largest FMCG portfolios, while making older brands matter to younger audiences.",
  idea:"Surf Excel's 'Ziddi Daaghon Se Kia Darna' kept the brand's fearless-kids promise fresh, Lifebuoy's Ramadan film made handwashing an act of goodness, and Knorr's bouillon brand was rebuilt for Gen-Z through platform-native content and creators.",
  results:[["2","brands won back"],["6","Unilever brands retained"]],
  videos:[["v31","Surf Excel · Ziddi Daaghon Se Kia Darna"],["v34","Lifebuoy · Achai Ka Haath Barhao"]],images:[I(62),I(65)]},
 {id:"maxx",type:"design",client:"PepsiCo · Lay's MaXx",agency:"Helium MENA",year:"2025",role:"Creative Lead · KV & copy",
  title:"MaXx Cheese key visual",poster:I(77),loop:"l-maxx",
  line:"A launch KV for Italian Style Cheese, built from the pack, in Arabic and English.",
  brief:"Design a key visual and copy for the new Italian Style Cheese flavour. Cheese is the hero: rich, melty, indulgent. Reinforce MaXx's promise of thicker chips for bigger hunger.",
  idea:"Lift the visual world straight off the packaging so shelf and screen match, with warm tones for appetite. English line: 'MaXx Crunch. MaXx Cheese. For MaXx Hunger.'",
  results:[["2","language variants"],["24%","production budget saved on PepsiCo seasonal packs"]],
  videos:[],images:[I(77),I(76)]},
 {id:"closeup",type:"content",client:"Unilever · Close Up",agency:"Helium MENA",year:"2025",role:"Creative Lead · director & producer",
  title:"White Now in full 3D",poster:P("v28"),loop:"v28",
  line:"A <b>26-asset CGI suite</b>, A/B tested live, with a <b>+32% retention lift</b>.",
  brief:"Launch Close Up White Now across social with assets that stop the scroll and keep people watching.",
  idea:"Every asset fully 3D-generated, bold colour, one benefit each: stain remover, Hollywood smile, extra fresh. We used performance data to optimise assets in real time, ran A/B tests, and kept adjusting while the campaign was live.",
  results:[["+32%","retention lift"],["26","3D assets"],["3","formats: 16:9, 4:5, 9:16"]],
  videos:[["v28","Carousel · all the packs"],["v24","3D Stain Remover"],["v29","Extra Fresh · 9:16"],["v26","Hollywood Smile · 9:16"],["v27","3D Hollywood Smile · 4:5"],["v30","3D Stain Remover · 4:5"],["v25","Stay ice-cold"]],images:[I(59),I(56),I(55)]}
];

const EXP=[
 {id:"sting",type:"exp",size:"wide",client:"PepsiCo · Sting",agency:"Helium MENA",year:"2025",role:"Creative Lead · experience design",
  title:"Sting × MDLBEAST Riyadh",poster:I(105),loop:"l-sting",
  line:"A <b>10×10 m</b> night-mode build with <b>14K+ samplings</b> and <b>240K+ organic impressions</b>.",
  brief:"Sting's audience lives a routine that feels flat by day. MDLBEAST is the loudest night of their year.",
  idea:"When night falls, Sting electrifies. 'Tokyo Nights × Sting' turned the booth into a neon street built for MDLBEAST's scale and energy.",
  results:[["14K+","samplings"],["240K+","organic impressions"],["10×10 m","activation footprint"]],
  videos:[],images:[I(105),I(104),I(106),I(107),I(108),I(103)]},
 {id:"flaminhot",type:"exp",client:"PepsiCo · Flamin' Hot",agency:"Helium MENA",year:"2025",role:"Creative Lead",
  title:"Flamin' Hot culinary tour",poster:I(118),loop:"l-fh",award:"Saudi Event Awards",trophy:"laurel",
  line:"A spicy recipe menu across <b>Jeddah, Riyadh and Dammam</b>, with a Kleenex twist.",
  brief:"Bring Doritos, Cheetos and Lay's Flamin' Hot to life in KSA as an experience, not a sample table.",
  idea:"A culinary activation with a menu built around the snacks, plus a Kleenex collaboration, because with snacks this spicy you need something to wipe the tears.",
  results:[["3","cities"],["Nominee","Outstanding Activation, Saudi Event Awards 2025"]],
  videos:[],images:[I(118),I(115),I(116),I(117),I(119)]},
 {id:"layschili",type:"exp",client:"PepsiCo · Lay's",agency:"Helium MENA",year:"2025",role:"Creative Lead",
  title:"Original Chili is Back",poster:I(110),loop:"l-chili",
  line:"A mall tasting challenge with a <b>Nielsen survey</b> built into the experience.",
  brief:"Bring back a fan-favourite flavour in KSA and prove people still love it.",
  idea:"A fiery tasting challenge that doubled as research: shoppers played, tasted, and fed a Nielsen survey on the spot.",
  results:[["KSA","mall activation"],["Nielsen","survey integrated"]],
  videos:[],images:[I(110),I(109),I(113),I(114),I(112)]}
];

const FILM=[
 {id:"tmk",client:"Feature film · SEE Prime",year:"2023",role:"Marketing & sponsorships",title:"Teri Meri Kahaniyaan",poster:P("v45"),v:"v45",hov:12,
  line:"Pakistan's first theatrical anthology. I led marketing and sponsorships."},
 {id:"rawalpindi",client:"Feature film",year:"2023",role:"Producer",title:"Rawalpindi Express",poster:P("v46"),v:"v46",hov:28,
  line:"The Shoaib Akhtar biopic. I line-produced the first-look teaser."},
 {id:"digestive",client:"Short-film platform · YouTube",year:"2021",role:"Associate Creative Producer",title:"Digestive Showtime",poster:P("v47"),v:"v47",hov:24,
  line:"5 films, 5 directors, crews of 150, and <b>15M+ views</b> in the first month."},
 {id:"nkf",client:"12-episode web series",year:"2020",role:"Associate Creative Producer",title:"National Ketchup Factory",poster:P("v43"),v:"v43",hov:3,award:"Effie Bronze",trophy:"effie-bronze",
  line:"A kids' cooking series for National Foods that won an Effie."},
 {id:"haleon",client:"Haleon · KSA",year:"2025",role:"Producer",title:"Healthy Saudi Smile",poster:I(80),v:"v44",hov:20,
  line:"A Saudi oral-health film produced end to end."},
 {id:"dvc",client:"TVCs & DVCs",year:"2019",role:"Associate Creative Producer · Director",title:"DVC Showreel",poster:P("v42"),v:"v42",hov:5,
  line:"Work for EBM, National Foods, Domino's, Oppo and Bayer."}
];

const REEL=[["v52","Dalda · Har Din Eid"],["v48","Dalda · Eid se Pehle Eidi"],["v49","ZYN · Find Your ZYN"],["v50","ZYN · Jamming"],["v51","ZYN · Painting"],["v53","KIA Stonic · Beach"],["v54","KIA Stonic · Rooftop"],["v55","Always · Shhh"],["v56","Always · Haww Haye"],["v57","Ensure · Abbott TVC"],["v58","Faysal Bank · Credit Cards"],["v59","Faysal Bank · Rehmat Account"]];

const AWARDS=[
 ["2025","Saudi Event Awards","Outstanding Activation · Nominee","Flamin' Hot Culinary Activation","Helium MENA","laurel"],
 ["2025","Dragons of Asia","Best Social Good Brand","Always · Changing the Narrative","Leo Burnett","dragon-gold"],
 ["2025","Effie Awards","Special Recognition · Most Effective Agency Network","P&G, PMI and EBM portfolios","Leo Burnett","effie-black"],
 ["2024","Dragons of Asia","Sustainability & Environment","Ariel · Sustainability at Home","Leo Burnett","dragon-silver"],
 ["2023","Effie Awards","Gold","Dalda · Jahan Maamta Wahan Dalda","MullenLowe","effie-gold"],
 ["2023","Effie Awards","Bronze","Tullo · Restaging the Kids' Chant","MullenLowe","effie-bronze"],
 ["2023","iF Design Award","Digital Campaign","KIA Stonic · #PlayItYoung","MullenLowe","if"],
 ["2022","Insurance Asia Awards","Winner","EFU Life · WIN app launch","MullenLowe","laurel"],
 ["2020","Effie Awards","Bronze","National Ketchup Factory · 12-episode web series","Digital Invasion Films","effie-bronze"]
];

const JOBS=[
 ["2025 – now","Regional Creative Lead","Helium Marketing · UAE","Strategy, creative direction and production for a $16M Fortune 500 portfolio (PepsiCo, Unilever) plus Barbican across 6 GCC markets. 40+ activations and campaigns a year, 4 live pitches a month at a 60% win rate, and DZRT's repositioning to 'Breathe Life'."],
 ["2024 – 2025","Creative Director","Adcom Leo Burnett · PK","Led P&G (MENAP) and Philip Morris at Effie's 2025 Network Agency of the Year. Repositioned Safeguard, Always and ZYN, associate-directed 5 DVCs, and brought AI tools into the team's workflow."],
 ["2021 – 2024","Associate Creative Director","MullenLowe · PK","Led a team of 12 across 11 brands in 2 markets, reporting to the CCO. Won 2 new brands, won back 2, grew the retainer base by 20%, and rebuilt Knorr's bouillon identity for Gen-Z."],
 ["2018 – 2021","Creative Producer","SEEME · Tall Man Films · Digital Invasion","Produced, wrote and directed for EBM, National Foods, Domino's, Oppo and Bayer. 16+ TVCs, an Effie-winning web series, and an OTT and cinema division with 2 theatrical features."]
];

const BRANDS=["P&G","PepsiCo","Unilever","Philip Morris","Always","Ariel","Safeguard","ZYN","Barbican","DZRT","Dubai Holding","Close Up","Lay's","Sting","Doritos","Dalda","KIA","Lifebuoy","Knorr","Surf Excel","Haleon","EFU Life","Domino's","Oppo"];

/* ============ SHOWREEL (played as 5 back-to-back parts) ============ */
const REEL_PARTS=[0,1,2,3,4,5].map(n=>`./reel-${n}.mp4`), REEL_POSTER="./reel-poster.jpg";
function playReel(video){
  let i=0; const pre=document.createElement("video"); pre.preload="auto"; pre.muted=true;
  const load=k=>{ video.src=REEL_PARTS[k]; video.play().catch(()=>{}); if(k+1<REEL_PARTS.length) pre.src=REEL_PARTS[k+1]; };
  video.poster=REEL_POSTER; video.onended=()=>{ if(++i<REEL_PARTS.length) load(i); }; load(0);
}
