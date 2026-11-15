const QUESTIONS = [
  {
    "id": 1,
    "cat": "Vogels",
    "prompt": "Waarvoor gebruikt een vogel zijn krop?",
    "answer": "Voedsel tijdelijk opslaan en zachter maken",
    "options": [
      "Voedsel tijdelijk opslaan en zachter maken",
      "Zaden fijnmalen",
      "Zuurstof opnemen",
      "Eieren maken"
    ],
    "explanation": "Krop = opslag. De spiermaag maalt het voedsel.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 2,
    "cat": "Vogels",
    "prompt": "Wat doet de spiermaag?",
    "answer": "Voedsel vermalen",
    "options": [
      "Voedsel vermalen",
      "Voedsel alleen bewaren",
      "Bloed rondpompen",
      "Veren aanmaken"
    ],
    "explanation": "Bij zaadeters helpen maagkiezels bij het vermalen.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 3,
    "cat": "Vogels",
    "prompt": "Welke maag begint de eiwitvertering?",
    "answer": "De kliermaag",
    "options": [
      "De kliermaag",
      "De krop",
      "De cloaca",
      "De slokdarm"
    ],
    "explanation": "De kliermaag voegt verteringssappen toe; de spiermaag maalt.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 4,
    "cat": "Vogels",
    "prompt": "Waarvoor dienen staartpennen?",
    "answer": "Sturen, remmen en evenwicht bewaren",
    "options": [
      "Sturen, remmen en evenwicht bewaren",
      "Alleen warm blijven",
      "Voedsel fijnmalen",
      "Zuurstof opnemen"
    ],
    "explanation": "Slagpennen helpen bij vliegen; staartpennen bij sturen en remmen.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 5,
    "cat": "Vogels",
    "prompt": "Wat is de belangrijkste functie van dons?",
    "answer": "Isolatie",
    "options": [
      "Isolatie",
      "Sturen",
      "Voedsel zoeken",
      "Een partner vastpakken"
    ],
    "explanation": "Dons helpt lichaamswarmte vast te houden.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 6,
    "cat": "Vogels",
    "prompt": "Welke snavel past bij het kraken van zaden?",
    "answer": "Kegelsnavel",
    "options": [
      "Kegelsnavel",
      "Dolksnavel",
      "Zeefsnavel",
      "Priemvormige nectarsnavel"
    ],
    "explanation": "Een korte, sterke kegelsnavel is geschikt voor zaden.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 7,
    "cat": "Vogels",
    "prompt": "Welke snavel past bij het scheuren van prooien?",
    "answer": "Haaksnavel",
    "options": [
      "Haaksnavel",
      "Zeefsnavel",
      "Kegelsnavel",
      "Dolksnavel"
    ],
    "explanation": "De scherpe haak helpt een roofvogel prooien uiteen te scheuren.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 8,
    "cat": "Vogels",
    "prompt": "Welke snavel past bij het vangen van vis?",
    "answer": "Dolksnavel",
    "options": [
      "Dolksnavel",
      "Kegelsnavel",
      "Zeefsnavel",
      "Kromsnavel voor noten"
    ],
    "explanation": "Een dolksnavel is lang en spits.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 9,
    "cat": "Vogels",
    "prompt": "Wat past bij een kromsnavel van een papegaai?",
    "answer": "Zaden en noten openkraken",
    "options": [
      "Zaden en noten openkraken",
      "Alleen nectar drinken",
      "Water zeven",
      "Voedsel door de huid opnemen"
    ],
    "explanation": "De sterke, gekromde snavel kraakt harde zaden en noten.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 10,
    "cat": "Vogels",
    "prompt": "Wat is de functie van de cloaca?",
    "answer": "Gemeenschappelijke uitgang voor ontlasting, urine en voortplanting",
    "options": [
      "Gemeenschappelijke uitgang voor ontlasting, urine en voortplanting",
      "Alleen voedsel bewaren",
      "Alleen ademhalen",
      "Alleen veren invetten"
    ],
    "explanation": "Bij vogels komt ook het ei via de cloaca naar buiten.",
    "source": "PDR leerdoel 3 en 6 snavels en anatomie vogels, dia 15 en 18–33"
  },
  {
    "id": 11,
    "cat": "Vogels",
    "prompt": "Wat is het verschil tussen grit en maagkiezel?",
    "answer": "Grit levert kalk; maagkiezel helpt malen",
    "options": [
      "Grit levert kalk; maagkiezel helpt malen",
      "Grit maalt; maagkiezel levert eiwit",
      "Beide zijn hetzelfde",
      "Grit is alleen nestmateriaal"
    ],
    "explanation": "Grit en sepia leveren kalk/mineralen. Maagkiezel helpt in de spiermaag.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 12,
    "cat": "Vogels",
    "prompt": "Waarom is sepia nuttig?",
    "answer": "Het levert kalk en mineralen",
    "options": [
      "Het levert kalk en mineralen",
      "Het vervangt alle voeding",
      "Het is een medicijn",
      "Het levert vooral vet"
    ],
    "explanation": "In de les wordt sepia ook gekoppeld aan het slijpen van de snavel.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 13,
    "cat": "Vogels",
    "prompt": "Welke factor is biotisch?",
    "answer": "Predatie",
    "options": [
      "Predatie",
      "Temperatuur",
      "Wind",
      "Zoutgehalte"
    ],
    "explanation": "Biotisch gaat over invloeden van levende organismen.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 14,
    "cat": "Vogels",
    "prompt": "Welke factor is abiotisch?",
    "answer": "Temperatuur",
    "options": [
      "Temperatuur",
      "Parasieten",
      "Concurrentie tussen dieren",
      "Predatie"
    ],
    "explanation": "Abiotisch gaat over de niet-levende omgeving.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 15,
    "cat": "Vogels",
    "prompt": "Waarom zijn horizontale spijlen geschikt voor kromsnavels?",
    "answer": "Ze kunnen eraan klimmen",
    "options": [
      "Ze kunnen eraan klimmen",
      "Ze vervangen zitstokken en voer",
      "Ze maken de kooi warmer",
      "Ze verhinderen elk geluid"
    ],
    "explanation": "Huisvesting moet natuurlijk gedrag mogelijk maken.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 16,
    "cat": "Vogels",
    "prompt": "Waarom heeft een buitenvolière een sluis?",
    "answer": "Om ontsnappen te voorkomen",
    "options": [
      "Om ontsnappen te voorkomen",
      "Om eieren te bewaren",
      "Om water te filteren",
      "Om daglicht tegen te houden"
    ],
    "explanation": "Een sluis heeft twee deuren; je opent ze niet tegelijk.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 17,
    "cat": "Vogels",
    "prompt": "Welke plek is ongeschikt voor een vogelkooi?",
    "answer": "Vlak voor de verwarming",
    "options": [
      "Vlak voor de verwarming",
      "Op een lichte, tochtvrije plaats",
      "Tegen een muur, uit de hitte",
      "Op een rustige geschikte plek"
    ],
    "explanation": "De les noemt risico op oververhitting en uitdroging.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 18,
    "cat": "Vogels",
    "prompt": "Waarom is beplanting in een volière nuttig?",
    "answer": "Voor schuilen, foerageren en nestgelegenheid",
    "options": [
      "Voor schuilen, foerageren en nestgelegenheid",
      "Alleen voor de kleur",
      "Om onderhoud volledig overbodig te maken",
      "Om vliegen onmogelijk te maken"
    ],
    "explanation": "Verbind inrichting steeds aan het natuurlijke gedrag van de vogel.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 19,
    "cat": "Vogels",
    "prompt": "Welke bodembedekking stoft weinig maar absorbeert vocht slecht, volgens de les?",
    "answer": "Beukensnippers",
    "options": [
      "Beukensnippers",
      "Zaagsel",
      "Water",
      "Papierpulp"
    ],
    "explanation": "De les noemt bij beukensnippers: weinig stof, geurtjes opnemen, slechte vochtopname.",
    "source": "PDR leerdoel 7 voeding, huisvesting, dia 13–30"
  },
  {
    "id": 20,
    "cat": "Gedrag",
    "prompt": "Een vogel poetst zijn veren. Welk gedrag zie je?",
    "answer": "Comfortgedrag",
    "options": [
      "Comfortgedrag",
      "Territoriaal gedrag",
      "Baltsgedrag",
      "Vluchtgedrag"
    ],
    "explanation": "Comfortgedrag verzorgt huid, haar of veren.",
    "source": "PDR leerdoel 7 gedrag en plaagdieren, dia 13–27"
  },
  {
    "id": 21,
    "cat": "Gedrag",
    "prompt": "Een dier zoekt voedsel. Welk gedrag zie je?",
    "answer": "Foerageergedrag",
    "options": [
      "Foerageergedrag",
      "Alleen rustgedrag",
      "Baltsgedrag",
      "Alleen territoriaal gedrag"
    ],
    "explanation": "Foerageren draait om het verkrijgen van voedsel.",
    "source": "PDR leerdoel 7 gedrag en plaagdieren, dia 13–27"
  },
  {
    "id": 22,
    "cat": "Gedrag",
    "prompt": "Een dier onderzoekt een nieuwe omgeving. Hoe heet dat?",
    "answer": "Exploratiegedrag",
    "options": [
      "Exploratiegedrag",
      "Comfortgedrag",
      "Slaapgedrag",
      "Broedzorg"
    ],
    "explanation": "Exploratie betekent onderzoeken en ontdekken.",
    "source": "PDR leerdoel 7 gedrag en plaagdieren, dia 13–27"
  },
  {
    "id": 23,
    "cat": "Gedrag",
    "prompt": "Wat betekent solitair?",
    "answer": "Alleen levend",
    "options": [
      "Alleen levend",
      "Levend in een school",
      "Altijd in een harem",
      "Levend met een vaste partner"
    ],
    "explanation": "Solitair is een samenlevingsvorm.",
    "source": "PDR leerdoel 7 gedrag en plaagdieren, dia 13–27"
  },
  {
    "id": 24,
    "cat": "Gedrag",
    "prompt": "Welke combinatie maakt een omgeving aantrekkelijk voor plaagdieren?",
    "answer": "Voedsel, vocht, schuilplekken en geschikte temperatuur",
    "options": [
      "Voedsel, vocht, schuilplekken en geschikte temperatuur",
      "Alleen veel licht",
      "Alleen weinig planten",
      "Alleen een grote ruimte"
    ],
    "explanation": "Bestrijd de voorwaarden: ruim voerresten op, bewaar voer afgesloten en voorkom schuilplekken.",
    "source": "PDR leerdoel 7 gedrag en plaagdieren, dia 13–27"
  },
  {
    "id": 25,
    "cat": "Gedrag",
    "prompt": "Waarom vormen muizen, ratten en insecten een risico in vogelverblijven?",
    "answer": "Ze kunnen ziekten overdragen en stress veroorzaken",
    "options": [
      "Ze kunnen ziekten overdragen en stress veroorzaken",
      "Ze verlagen altijd de temperatuur",
      "Ze eten alleen stenen",
      "Ze maken vogels altijd tammer"
    ],
    "explanation": "Goede hygiëne en preventie zijn belangrijk.",
    "source": "PDR leerdoel 7 gedrag en plaagdieren, dia 13–27"
  },
  {
    "id": 26,
    "cat": "Jongen & namen",
    "prompt": "Wat past bij een nestvlieder?",
    "answer": "Ogen open, dons en al snel zelf voedsel zoeken",
    "options": [
      "Ogen open, dons en al snel zelf voedsel zoeken",
      "Altijd blind en kaal",
      "Altijd weken volledig in het nest",
      "Geen hulp van ouders ooit nodig"
    ],
    "explanation": "Nestvlieders kunnen al veel zelf, maar hebben vaak nog bescherming en warmte van ouders nodig.",
    "source": "PDR leerdoel 8 en 2.3 Vogels nieuw, dia 11"
  },
  {
    "id": 27,
    "cat": "Jongen & namen",
    "prompt": "Is een grasparkiet een nestblijver of nestvlieder?",
    "answer": "Nestblijver",
    "options": [
      "Nestblijver",
      "Nestvlieder",
      "Geen van beide",
      "Dat hangt van de kleur af"
    ],
    "explanation": "Volg het antwoordenwerkblad: parkieten en papegaaien zijn hier nestblijvers. De soortenpresentatie noemt papegaaiachtigen ten onrechte nestvlieders.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 28,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de chinese dwergkwartel?",
    "answer": "16 dagen",
    "options": [
      "16 dagen",
      "13–14 dagen",
      "18 dagen",
      "23 dagen"
    ],
    "explanation": "Chinese dwergkwartel: 16 dagen; nestvlieder. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 29,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de goudfazant?",
    "answer": "23 dagen",
    "options": [
      "23 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Goudfazant: 23 dagen; nestvlieder. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 30,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de mandarijneend?",
    "answer": "30 dagen",
    "options": [
      "30 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Mandarijneend: 30 dagen; nestvlieder. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 31,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de valkparkiet?",
    "answer": "18–21 dagen",
    "options": [
      "18–21 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Valkparkiet: 18–21 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 32,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de grasparkiet?",
    "answer": "18 dagen",
    "options": [
      "18 dagen",
      "13–14 dagen",
      "16 dagen",
      "23 dagen"
    ],
    "explanation": "Grasparkiet: 18 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 33,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de perzikkop dwergpapegaai?",
    "answer": "23 dagen",
    "options": [
      "23 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Perzikkop dwergpapegaai: 23 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 34,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de kanarie?",
    "answer": "13–14 dagen",
    "options": [
      "13–14 dagen",
      "16 dagen",
      "18 dagen",
      "23 dagen"
    ],
    "explanation": "Kanarie: 13–14 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 35,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de zebravink?",
    "answer": "13–14 dagen",
    "options": [
      "13–14 dagen",
      "16 dagen",
      "18 dagen",
      "23 dagen"
    ],
    "explanation": "Zebravink: 13–14 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 36,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de rijstvogel?",
    "answer": "14 dagen",
    "options": [
      "14 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Rijstvogel: 14 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 37,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de gould’s amadine?",
    "answer": "15 dagen",
    "options": [
      "15 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Gould’s amadine: 15 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 38,
    "cat": "Jongen & namen",
    "prompt": "Welke broedtijd geeft het groene leerblad voor de diamantduif?",
    "answer": "14 dagen",
    "options": [
      "14 dagen",
      "13–14 dagen",
      "16 dagen",
      "18 dagen"
    ],
    "explanation": "Diamantduif: 14 dagen; nestblijver. Het schoolblad noemt dit “draagtijd”; bij vogels bedoelen we hier broedtijd.",
    "source": "Opdracht draagtijd en nestvlieder met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 39,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een vrouwelijke Chinese dwergkwartel?",
    "answer": "Hennetje",
    "options": [
      "Hennetje",
      "Pop",
      "Doffer",
      "Woerd"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 40,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een vrouwelijke mandarijneend in het leerblad?",
    "answer": "Vrouw",
    "options": [
      "Vrouw",
      "Woerd",
      "Doffer",
      "Haantje"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 41,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een vrouwelijke kanarie?",
    "answer": "Pop",
    "options": [
      "Pop",
      "Hen",
      "Doffer",
      "Woerd"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 42,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een jonge kanarie in het leerblad?",
    "answer": "Jong",
    "options": [
      "Jong",
      "Pieper",
      "Pul",
      "Parelhoenkuiken"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 43,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een mannelijke diamantduif?",
    "answer": "Doffer",
    "options": [
      "Doffer",
      "Woerd",
      "Haantje",
      "Pop"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 44,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een jonge diamantduif?",
    "answer": "Pieper",
    "options": [
      "Pieper",
      "Pul",
      "Joey",
      "Veulen"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 45,
    "cat": "Jongen & namen",
    "prompt": "Hoe heet een mannelijke wilde eend?",
    "answer": "Woerd",
    "options": [
      "Woerd",
      "Doffer",
      "Fazanthaan",
      "Pop"
    ],
    "explanation": "Dit is de benaming uit de groen gemarkeerde toetsstof.",
    "source": "Benamingen diersoorten Parkdieren (vogels) met antwoorden: groen gemarkeerde regels"
  },
  {
    "id": 46,
    "cat": "Parkdieren",
    "prompt": "Tot welke diergroep hoort het gewone stekelvarken?",
    "answer": "Knaagdieren",
    "options": [
      "Knaagdieren",
      "Roofdieren",
      "Primaten",
      "Vleermuizen"
    ],
    "explanation": "Stekels maken een stekelvarken geen roofdier; het is een plantenetend knaagdier.",
    "source": "PDR leerdoel 6.1 parkdieren uitgelicht, dia 13–25"
  },
  {
    "id": 47,
    "cat": "Parkdieren",
    "prompt": "Wat slaat een kameel op in zijn bulten?",
    "answer": "Vet",
    "options": [
      "Vet",
      "Water",
      "Lucht",
      "Eieren"
    ],
    "explanation": "De les noemt twee bulten met vetopslag.",
    "source": "PDR leerdoel 6.1 parkdieren uitgelicht, dia 13–25"
  },
  {
    "id": 48,
    "cat": "Parkdieren",
    "prompt": "Wat voor dier is een nijlroezet?",
    "answer": "Een fruitetende vleermuis",
    "options": [
      "Een fruitetende vleermuis",
      "Een knaagdier",
      "Een hagedis",
      "Een roofvogel"
    ],
    "explanation": "De nijlroezet hoort bij de vleerhonden.",
    "source": "PDR leerdoel 6.1 parkdieren uitgelicht, dia 13–25"
  },
  {
    "id": 49,
    "cat": "Parkdieren",
    "prompt": "Welke kenmerken passen bij een damhertmannetje?",
    "answer": "Gevlekte vacht en een gewei",
    "options": [
      "Gevlekte vacht en een gewei",
      "Zwarte vleugels en ronde oren",
      "Twee bulten en brede voeten",
      "Zwart-witte stekels"
    ],
    "explanation": "De les koppelt het damhert aan een gevlekte vacht en gewei bij mannetjes.",
    "source": "PDR leerdoel 6.1 parkdieren uitgelicht, dia 13–25"
  },
  {
    "id": 50,
    "cat": "Parkdieren",
    "prompt": "Welk dier verdedigt zich met een sproeistraal uit geurklieren?",
    "answer": "Gestreept stinkdier",
    "options": [
      "Gestreept stinkdier",
      "Damhert",
      "Impala",
      "Bennett’s wallaby"
    ],
    "explanation": "Het gestreepte stinkdier gebruikt anale geurklieren.",
    "source": "PDR leerdoel 6.1 parkdieren uitgelicht, dia 13–25"
  },
  {
    "id": 51,
    "cat": "Parkdieren",
    "prompt": "Hoe heet het jong van een kangoeroesoort zoals de wallaby?",
    "answer": "Joey",
    "options": [
      "Joey",
      "Pieper",
      "Pul",
      "Kuiken"
    ],
    "explanation": "De wallaby is een buideldier.",
    "source": "PDR leerdoel 6.1 parkdieren uitgelicht, dia 13–25"
  },
  {
    "id": 52,
    "cat": "Vissen",
    "prompt": "Welk lichaamsdeel gebruikt een vis voor ademhaling?",
    "answer": "Kieuwen",
    "options": [
      "Kieuwen",
      "Longzakken bij alle vissen",
      "Schubben",
      "Staartvin"
    ],
    "explanation": "In de anatomieles worden kieuwen gekoppeld aan ademhaling.",
    "source": "Vissen: Les 1 intro + anatomie, dia 10 en 15; Les 3 Voeding + Soorten, dia 7–8"
  },
  {
    "id": 53,
    "cat": "Vissen",
    "prompt": "Welke bekstand past het best bij voedsel opnemen van de bodem?",
    "answer": "Onderstandig",
    "options": [
      "Onderstandig",
      "Bovenstandig",
      "Alle bekstanden uitsluitend",
      "Geen bek"
    ],
    "explanation": "Bekstand helpt voorspellen in welke waterlaag een vis eet.",
    "source": "Vissen: Les 1 intro + anatomie, dia 10 en 15; Les 3 Voeding + Soorten, dia 7–8"
  },
  {
    "id": 54,
    "cat": "Vissen",
    "prompt": "Welke bekstand past bij voer aan het wateroppervlak?",
    "answer": "Bovenstandig",
    "options": [
      "Bovenstandig",
      "Onderstandig",
      "Alleen zijstandig",
      "Geen bek"
    ],
    "explanation": "Stem de plaats en vorm van het voer af op de vis.",
    "source": "Vissen: Les 1 intro + anatomie, dia 10 en 15; Les 3 Voeding + Soorten, dia 7–8"
  },
  {
    "id": 55,
    "cat": "Vissen",
    "prompt": "Waarin spoel je mechanisch filtermateriaal voorzichtig uit volgens de les?",
    "answer": "Oud aquariumwater",
    "options": [
      "Oud aquariumwater",
      "Zeepwater",
      "Desinfectiemiddel",
      "Kokend water"
    ],
    "explanation": "Zo behoud je de nuttige bacteriën zoveel mogelijk.",
    "source": "Vissen: Les 5 huisvesting deel 2, dia 17–19"
  },
  {
    "id": 56,
    "cat": "Vissen",
    "prompt": "Welke nitrietwaarde noemt de onderhoudsles als doel?",
    "answer": "0",
    "options": [
      "0",
      "Zo hoog mogelijk",
      "Altijd 50",
      "Het hoeft nooit gemeten te worden"
    ],
    "explanation": "De les vermeldt dat nitriet nul moet zijn.",
    "source": "Vissen: Les 5 huisvesting deel 2, dia 17–19"
  },
  {
    "id": 57,
    "cat": "Vissen",
    "prompt": "Welke controle hoort bij dagelijks aquariumonderhoud?",
    "answer": "Gedrag, temperatuur en filterwerking controleren",
    "options": [
      "Gedrag, temperatuur en filterwerking controleren",
      "Elke dag alle planten weggooien",
      "Elke dag de hele bak ontsmetten",
      "Alleen de buitenkant bekijken"
    ],
    "explanation": "Observeer de vissen, controleer techniek en verwijder overtollig voer.",
    "source": "Vissen: Les 5 huisvesting deel 2, dia 17–19"
  },
  {
    "id": 58,
    "cat": "Vissen",
    "prompt": "Wat doe je met overtollig voer?",
    "answer": "Verwijderen",
    "options": [
      "Verwijderen",
      "Laten liggen tot de volgende week",
      "Meer voer erbij doen",
      "Onder het grind stoppen"
    ],
    "explanation": "Overtollig voer vervuilt het water.",
    "source": "Vissen: Les 5 huisvesting deel 2, dia 17–19"
  },
  {
    "id": 59,
    "cat": "Vissen",
    "prompt": "Welke hoeveelheid waterverversing noemt de les voor wekelijks/tweewekelijks onderhoud?",
    "answer": "10 tot 30 procent",
    "options": [
      "10 tot 30 procent",
      "Altijd 100 procent",
      "Nooit water verversen",
      "Precies 1 procent voor elke vissoort"
    ],
    "explanation": "Dit is het richtgetal uit de les; gebruik water op de juiste temperatuur.",
    "source": "Vissen: Les 5 huisvesting deel 2, dia 17–19"
  },
  {
    "id": 60,
    "cat": "Vissen",
    "prompt": "Wat doet een muilbroeder?",
    "answer": "Beschermt eieren of jongen in de bek",
    "options": [
      "Beschermt eieren of jongen in de bek",
      "Bewaart voer in een krop",
      "Legt eieren alleen op droog land",
      "Heeft nooit broedzorg"
    ],
    "explanation": "Muilbroeden is een vorm van broedzorg.",
    "source": "Vissen: Les 4 Voortplanting, dia 5–14; Les 6 Gedrag, dia 5 en 10–11"
  },
  {
    "id": 61,
    "cat": "Vissen",
    "prompt": "Wat betekent ovipaar?",
    "answer": "Eileggend",
    "options": [
      "Eileggend",
      "Levendbarend",
      "Alleen ongeslachtelijk",
      "Altijd zonder jongen"
    ],
    "explanation": "De voortplantingsles onderscheidt ovipaar, ovovivipaar en vivipaar.",
    "source": "Vissen: Les 4 Voortplanting, dia 5–14; Les 6 Gedrag, dia 5 en 10–11"
  },
  {
    "id": 62,
    "cat": "Vissen",
    "prompt": "Welke combinatie hoort bij de r-strategie in de les?",
    "answer": "Veel nakomelingen en weinig zorg",
    "options": [
      "Veel nakomelingen en weinig zorg",
      "Weinig nakomelingen en veel zorg",
      "Geen nakomelingen",
      "Alleen muilbroeden"
    ],
    "explanation": "De les zet r-strategie tegenover K-strategie.",
    "source": "Vissen: Les 4 Voortplanting, dia 5–14; Les 6 Gedrag, dia 5 en 10–11"
  },
  {
    "id": 63,
    "cat": "Vissen",
    "prompt": "Wat kan happen naar lucht aan het oppervlak signaleren?",
    "answer": "Zuurstofgebrek of een nitrietprobleem",
    "options": [
      "Zuurstofgebrek of een nitrietprobleem",
      "Dat alle vissen willen paren",
      "Dat de vis altijd honger heeft",
      "Dat onderhoud nooit nodig is"
    ],
    "explanation": "Het is een alarmsignaal: controleer waterkwaliteit, zuurstofvoorziening en techniek; het bewijst op zichzelf geen diagnose.",
    "source": "Vissen: Les 4 Voortplanting, dia 5–14; Les 6 Gedrag, dia 5 en 10–11"
  },
  {
    "id": 64,
    "cat": "Herpeten",
    "prompt": "Wat betekent ectotherm?",
    "answer": "De lichaamstemperatuur hangt sterk af van de omgeving",
    "options": [
      "De lichaamstemperatuur hangt sterk af van de omgeving",
      "Altijd dezelfde lichaamstemperatuur",
      "Een dier zonder lichaamstemperatuur",
      "Een dier dat alleen in ijs leeft"
    ],
    "explanation": "Herpeten kunnen warme en koele plaatsen opzoeken; hun omgeving levert de warmte.",
    "source": "OE Parkdieren - Herpeten Bouw en soorten terraria"
  },
  {
    "id": 65,
    "cat": "Herpeten",
    "prompt": "Waarom moet een terrarium ventilatie hebben?",
    "answer": "Om ophoping van CO2, condens en schimmel te beperken",
    "options": [
      "Om ophoping van CO2, condens en schimmel te beperken",
      "Om elk temperatuurverschil te verbieden",
      "Om alle luchtvochtigheid weg te nemen",
      "Alleen voor het uiterlijk"
    ],
    "explanation": "Ventilatie en passend klimaat moeten samen kloppen.",
    "source": "OE Parkdieren - Herpeten Bouw en soorten terraria"
  },
  {
    "id": 66,
    "cat": "Herpeten",
    "prompt": "Wat bootst een riparium na?",
    "answer": "Een oever",
    "options": [
      "Een oever",
      "Een droge woestijn",
      "Alleen boomtoppen",
      "Een vogelvlucht"
    ],
    "explanation": "Een oeverterrarium combineert water en land met een bruikbare overgang.",
    "source": "OE Parkdieren - Herpeten Bouw en soorten terraria"
  },
  {
    "id": 67,
    "cat": "Herpeten",
    "prompt": "Wat is een paludarium?",
    "answer": "Een moerasterrarium met land en water",
    "options": [
      "Een moerasterrarium met land en water",
      "Een volledig droge bak",
      "Een kooi voor roofvogels",
      "Alleen een aquariumfilter"
    ],
    "explanation": "In de les heeft het paludarium een relatief klein, ondiep waterdeel.",
    "source": "OE Parkdieren - Herpeten Bouw en soorten terraria"
  },
  {
    "id": 68,
    "cat": "Herpeten",
    "prompt": "Welke plek is ongeschikt voor een terrarium?",
    "answer": "In de volle zon",
    "options": [
      "In de volle zon",
      "Op een stabiele geschikte ondergrond",
      "Op een rustige plek",
      "Met passende ventilatie"
    ],
    "explanation": "De les waarschuwt voor plaatsing in volle zon, op de tocht en bij verwarming.",
    "source": "OE Parkdieren - Herpeten Bouw en soorten terraria"
  },
  {
    "id": 69,
    "cat": "Herpeten",
    "prompt": "Waarom hebben terrariumdieren schuil- en klimplekken nodig?",
    "answer": "Om passend natuurlijk gedrag mogelijk te maken",
    "options": [
      "Om passend natuurlijk gedrag mogelijk te maken",
      "Om schoonmaken onmogelijk te maken",
      "Alleen zodat de bak vol lijkt",
      "Omdat elke soort hetzelfde nodig heeft"
    ],
    "explanation": "Inrichting hangt af van de soort: bodembewoners en klimmers hebben verschillende behoeften.",
    "source": "OE Parkdieren - Herpeten Bouw en soorten terraria"
  },
  {
    "id": 70,
    "cat": "Herpeten",
    "prompt": "Welk dier heeft drie paar uitwendige kieuwen achter de kop?",
    "answer": "Axolotl",
    "options": [
      "Axolotl",
      "Baardagaam",
      "Koningspython",
      "Griekse landschildpad"
    ],
    "explanation": "De axolotl is een amfibie en behoudt kenmerken van het larvestadium.",
    "source": "Soortenlijst herpeten - niv. 2, dia 6–24"
  },
  {
    "id": 71,
    "cat": "Herpeten",
    "prompt": "Welke hagedis herken je aan een opvallende helm op zijn kop?",
    "answer": "Jemen-kameleon",
    "options": [
      "Jemen-kameleon",
      "Luipaardgekko",
      "Roodkeelanolis",
      "Rode rattenslang"
    ],
    "explanation": "De soortenlijst noemt een omhoogstekende helm en stekels over de rug.",
    "source": "Soortenlijst herpeten - niv. 2, dia 6–24"
  },
  {
    "id": 72,
    "cat": "Herpeten",
    "prompt": "Welke hagedis gebruikt zijn dikke staart voor vetopslag?",
    "answer": "Luipaardgekko",
    "options": [
      "Luipaardgekko",
      "Groene leguaan",
      "Jemen-kameleon",
      "Axolotl"
    ],
    "explanation": "De luipaardgekko is een grondgekko met nagels, zonder hechtlamellen.",
    "source": "Soortenlijst herpeten - niv. 2, dia 6–24"
  },
  {
    "id": 73,
    "cat": "Herpeten",
    "prompt": "Welk dier is een amfibie?",
    "answer": "Vuursalamander",
    "options": [
      "Vuursalamander",
      "Koningspython",
      "Baardagaam",
      "Muskusschildpad"
    ],
    "explanation": "Herpeten omvatten reptielen en amfibieën; het zijn verschillende groepen.",
    "source": "Soortenlijst herpeten - niv. 2, dia 6–24"
  },
  {
    "id": 74,
    "cat": "Herpeten",
    "prompt": "Welk kenmerk past bij de roodkeelanolis?",
    "answer": "Een rozerode keelwam",
    "options": [
      "Een rozerode keelwam",
      "Drie paar uitwendige kieuwen",
      "Een hard rugschild",
      "Geen poten"
    ],
    "explanation": "De soortenlijst noemt ook een groen of bruin lichaam en hechtschijven om te klimmen.",
    "source": "Soortenlijst herpeten - niv. 2, dia 6–24"
  },
  {
    "id": 75,
    "cat": "Begrippen",
    "prompt": "Wat is een carnivoor?",
    "answer": "Een vleeseter",
    "options": [
      "Een vleeseter",
      "Een planteneter",
      "Een alleseter",
      "Een dier dat nooit eet"
    ],
    "explanation": "Herbivoor = planteneter; omnivoor = alleseter.",
    "source": "Proeftoets parkdieren; leerdoel 3"
  },
  {
    "id": 76,
    "cat": "Begrippen",
    "prompt": "Welke functie hebben eiwitten vooral in de leerstof?",
    "answer": "Bouwstof",
    "options": [
      "Bouwstof",
      "Alleen kleurstof",
      "Alleen smaakstof",
      "Geen functie"
    ],
    "explanation": "De proeftoets toetst eiwitten als bouwstoffen en vitaminen als beschermende stoffen.",
    "source": "Proeftoets parkdieren; leerdoel 3"
  },
  {
    "id": 77,
    "cat": "Begrippen",
    "prompt": "Waar gaat CITES in de les vooral over?",
    "answer": "Internationale handel in beschermde soorten",
    "options": [
      "Internationale handel in beschermde soorten",
      "Alleen voeding van vogels",
      "Alleen namen van jonge dieren",
      "Alleen aquariumonderhoud"
    ],
    "explanation": "Onthoud de kern: CITES gaat over handel; de IUCN Rode Lijst over bedreigingsstatus. Dit is begrippenoefening, geen uitleg van actuele vergunningregels.",
    "source": "Parkdieren BHVD, CITES en IUCN, dia 15–26"
  },
  {
    "id": 78,
    "cat": "Begrippen",
    "prompt": "Waarvoor is de IUCN Rode Lijst bedoeld?",
    "answer": "De bedreigingsstatus van soorten beoordelen",
    "options": [
      "De bedreigingsstatus van soorten beoordelen",
      "Alle handelsvergunningen afgeven",
      "Broedtijden vastleggen",
      "Aquaria indelen"
    ],
    "explanation": "Bedreigingsstatus en handelsregels zijn verschillende dingen.",
    "source": "Parkdieren BHVD, CITES en IUCN, dia 25–26"
  },
  {
    "id": 79,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Diamantduif",
    "options": [
      "Diamantduif",
      "Perzikkop dwergpapegaai",
      "Grasparkiet",
      "Kanarie"
    ],
    "explanation": "Dit is de diamantduif.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-01.jpeg"
  },
  {
    "id": 80,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Grasparkiet",
    "options": [
      "Grasparkiet",
      "Mandarijneend",
      "Perzikkop dwergpapegaai",
      "Grijze roodstaartpapegaai"
    ],
    "explanation": "Dit is de grasparkiet.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-02.jpeg"
  },
  {
    "id": 81,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Gould’s amadine",
    "options": [
      "Gould’s amadine",
      "Rijstvogel",
      "Kanarie",
      "Grasparkiet"
    ],
    "explanation": "Dit is de gould’s amadine.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-03.jpeg"
  },
  {
    "id": 82,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Helmparelhoen",
    "options": [
      "Helmparelhoen",
      "Gould’s amadine",
      "Goudfazant",
      "Chinese dwergkwartel"
    ],
    "explanation": "Dit is de helmparelhoen.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-04.png"
  },
  {
    "id": 83,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Perzikkop dwergpapegaai",
    "options": [
      "Perzikkop dwergpapegaai",
      "Grasparkiet",
      "Diamantduif",
      "Nandoe"
    ],
    "explanation": "Dit is de perzikkop dwergpapegaai.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-05.png"
  },
  {
    "id": 84,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Rijstvogel",
    "options": [
      "Rijstvogel",
      "Chinese dwergkwartel",
      "Helmparelhoen",
      "Mandarijneend"
    ],
    "explanation": "Dit is de rijstvogel.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-06.jpeg"
  },
  {
    "id": 85,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Valkparkiet",
    "options": [
      "Valkparkiet",
      "Diamantduif",
      "Mandarijneend",
      "Helmparelhoen"
    ],
    "explanation": "Dit is de valkparkiet.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-07.png"
  },
  {
    "id": 86,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Chinese dwergkwartel",
    "options": [
      "Chinese dwergkwartel",
      "Woestijnhavik",
      "Helmparelhoen",
      "Zebravink"
    ],
    "explanation": "Dit is de chinese dwergkwartel.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-08.png"
  },
  {
    "id": 87,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Zebravink",
    "options": [
      "Zebravink",
      "Mandarijneend",
      "Blauwgele ara",
      "Woestijnhavik"
    ],
    "explanation": "Dit is de zebravink.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-09.png"
  },
  {
    "id": 88,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Mandarijneend",
    "options": [
      "Mandarijneend",
      "Diamantduif",
      "Blauwgele ara",
      "Grijze roodstaartpapegaai"
    ],
    "explanation": "Dit is de mandarijneend.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-10.jpeg"
  },
  {
    "id": 89,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Goudfazant",
    "options": [
      "Goudfazant",
      "Rijstvogel",
      "Kanarie",
      "Valkparkiet"
    ],
    "explanation": "Dit is de goudfazant.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-11.jpeg"
  },
  {
    "id": 90,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Putter (Distelvink)",
    "options": [
      "Putter (Distelvink)",
      "Goudfazant",
      "Perzikkop dwergpapegaai",
      "Gould’s amadine"
    ],
    "explanation": "Dit is de putter (distelvink).",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-12.jpeg"
  },
  {
    "id": 91,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Kanarie",
    "options": [
      "Kanarie",
      "Valkparkiet",
      "Blauwgele ara",
      "Rijstvogel"
    ],
    "explanation": "Dit is de kanarie.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-13.jpeg"
  },
  {
    "id": 92,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Blauwgele ara",
    "options": [
      "Blauwgele ara",
      "Helmparelhoen",
      "Grasparkiet",
      "Valkparkiet"
    ],
    "explanation": "Dit is de blauwgele ara.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-14.png"
  },
  {
    "id": 93,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Woestijnhavik",
    "options": [
      "Woestijnhavik",
      "Helmparelhoen",
      "Rijstvogel",
      "Blauwgele ara"
    ],
    "explanation": "Dit is de woestijnhavik.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-15.jpeg"
  },
  {
    "id": 94,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Grijze roodstaartpapegaai",
    "options": [
      "Grijze roodstaartpapegaai",
      "Putter (Distelvink)",
      "Mandarijneend",
      "Perzikkop dwergpapegaai"
    ],
    "explanation": "Dit is de grijze roodstaartpapegaai.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-16.jpeg"
  },
  {
    "id": 95,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Nandoe",
    "options": [
      "Nandoe",
      "Grasparkiet",
      "Putter (Distelvink)",
      "Chinese dwergkwartel"
    ],
    "explanation": "Dit is de nandoe.",
    "source": "Vogels oefenen met antwoorden",
    "image": "dier-17.jpeg"
  },
  {
    "id": 96,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Jemen-kameleon",
    "options": [
      "Jemen-kameleon",
      "Muskusschildpad of stinkpot",
      "Baardagaam",
      "Boa constrictor of roodstaartboa"
    ],
    "explanation": "Dit is de jemen-kameleon.",
    "source": "Soortenlijst herpeten - niv. 2, dia 6",
    "image": "dier-18.jpg"
  },
  {
    "id": 97,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Groene leguaan",
    "options": [
      "Groene leguaan",
      "Baardagaam",
      "Muskusschildpad of stinkpot",
      "Rode rattenslang of korenslang"
    ],
    "explanation": "Dit is de groene leguaan.",
    "source": "Soortenlijst herpeten - niv. 2, dia 7",
    "image": "dier-19.jpg"
  },
  {
    "id": 98,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Baardagaam",
    "options": [
      "Baardagaam",
      "Bijengifkikker",
      "Axolotl",
      "Kolenbranderschildpad"
    ],
    "explanation": "Dit is de baardagaam.",
    "source": "Soortenlijst herpeten - niv. 2, dia 8",
    "image": "dier-20.jpg"
  },
  {
    "id": 99,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Luipaardgekko",
    "options": [
      "Luipaardgekko",
      "Bijengifkikker",
      "Koningspython of balpython",
      "Kolenbranderschildpad"
    ],
    "explanation": "Dit is de luipaardgekko.",
    "source": "Soortenlijst herpeten - niv. 2, dia 9",
    "image": "dier-21.jpg"
  },
  {
    "id": 100,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Roodkeelanolis",
    "options": [
      "Roodkeelanolis",
      "Luipaardgekko",
      "Vuursalamander",
      "Groene leguaan"
    ],
    "explanation": "Dit is de roodkeelanolis.",
    "source": "Soortenlijst herpeten - niv. 2, dia 10",
    "image": "dier-22.jpg"
  },
  {
    "id": 101,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Rode rattenslang of korenslang",
    "options": [
      "Rode rattenslang of korenslang",
      "Jemen-kameleon",
      "Axolotl",
      "Luipaardgekko"
    ],
    "explanation": "Dit is de rode rattenslang of korenslang.",
    "source": "Soortenlijst herpeten - niv. 2, dia 12",
    "image": "dier-23.jpg"
  },
  {
    "id": 102,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Koningspython of balpython",
    "options": [
      "Koningspython of balpython",
      "Koreaanse vuurbuikpad",
      "Roodkeelanolis",
      "Groene leguaan"
    ],
    "explanation": "Dit is de koningspython of balpython.",
    "source": "Soortenlijst herpeten - niv. 2, dia 13",
    "image": "dier-24.jpg"
  },
  {
    "id": 103,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Boa constrictor of roodstaartboa",
    "options": [
      "Boa constrictor of roodstaartboa",
      "Bijengifkikker",
      "Luipaardgekko",
      "Groene leguaan"
    ],
    "explanation": "Dit is de boa constrictor of roodstaartboa.",
    "source": "Soortenlijst herpeten - niv. 2, dia 14",
    "image": "dier-25.jpg"
  },
  {
    "id": 104,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Griekse landschildpad",
    "options": [
      "Griekse landschildpad",
      "Koningspython of balpython",
      "Roodkeelanolis",
      "Boa constrictor of roodstaartboa"
    ],
    "explanation": "Dit is de griekse landschildpad.",
    "source": "Soortenlijst herpeten - niv. 2, dia 16",
    "image": "dier-26.jpg"
  },
  {
    "id": 105,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Muskusschildpad of stinkpot",
    "options": [
      "Muskusschildpad of stinkpot",
      "Axolotl",
      "Rode rattenslang of korenslang",
      "Baardagaam"
    ],
    "explanation": "Dit is de muskusschildpad of stinkpot.",
    "source": "Soortenlijst herpeten - niv. 2, dia 17",
    "image": "dier-27.jpg"
  },
  {
    "id": 106,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Kolenbranderschildpad",
    "options": [
      "Kolenbranderschildpad",
      "Rode rattenslang of korenslang",
      "Bijengifkikker",
      "Luipaardgekko"
    ],
    "explanation": "Dit is de kolenbranderschildpad.",
    "source": "Soortenlijst herpeten - niv. 2, dia 18",
    "image": "dier-28.jpg"
  },
  {
    "id": 107,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Axolotl",
    "options": [
      "Axolotl",
      "Kolenbranderschildpad",
      "Roodkeelanolis",
      "Vuursalamander"
    ],
    "explanation": "Dit is de axolotl.",
    "source": "Soortenlijst herpeten - niv. 2, dia 20",
    "image": "dier-29.jpg"
  },
  {
    "id": 108,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Vuursalamander",
    "options": [
      "Vuursalamander",
      "Kolenbranderschildpad",
      "Bijengifkikker",
      "Groene leguaan"
    ],
    "explanation": "Dit is de vuursalamander.",
    "source": "Soortenlijst herpeten - niv. 2, dia 21",
    "image": "dier-30.jpg"
  },
  {
    "id": 109,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Koreaanse vuurbuikpad",
    "options": [
      "Koreaanse vuurbuikpad",
      "Muskusschildpad of stinkpot",
      "Kolenbranderschildpad",
      "Baardagaam"
    ],
    "explanation": "Dit is de koreaanse vuurbuikpad.",
    "source": "Soortenlijst herpeten - niv. 2, dia 23",
    "image": "dier-31.jpg"
  },
  {
    "id": 110,
    "cat": "Dieren herkennen",
    "prompt": "Welk dier zie je?",
    "answer": "Bijengifkikker",
    "options": [
      "Bijengifkikker",
      "Griekse landschildpad",
      "Axolotl",
      "Luipaardgekko"
    ],
    "explanation": "Dit is de bijengifkikker.",
    "source": "Soortenlijst herpeten - niv. 2, dia 24",
    "image": "dier-32.jpg"
  }
];
