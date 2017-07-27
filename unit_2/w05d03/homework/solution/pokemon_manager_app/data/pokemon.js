module.exports = [
  {
    id: "001",
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
    type: [
      "Grass",
      "Poison"
    ],
    stats: {
      hp: "45",
      attack: "49",
      defense: "49",
      spattack: "65",
      spdefense: "65",
      speed: "45"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "3",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "leech seed",
        gen: "V"
      }, {
        learnedat: "9",
        name: "vine whip",
        gen: "V"
      }, {
        learnedat: "13",
        name: "poison powder",
        gen: "V"
      }, {
        learnedat: "13",
        name: "sleep powder",
        gen: "V"
      }, {
        learnedat: "15",
        name: "take down",
        gen: "V"
      }, {
        learnedat: "19",
        name: "razor leaf",
        gen: "V"
      }, {
        learnedat: "21",
        name: "sweet scent",
        gen: "V"
      }, {
        learnedat: "25",
        name: "growth",
        gen: "V"
      }, {
        learnedat: "27",
        name: "double-edge",
        gen: "V"
      }, {
        learnedat: "31",
        name: "worry seed",
        gen: "V"
      }, {
        learnedat: "33",
        name: "synthesis",
        gen: "V"
      }, {
        learnedat: "37",
        name: "seed bomb",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm16",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm53",
        name: "energy ball",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      egg: [{
        name: "skull bash",
        gen: "V"
      }, {
        name: "charm",
        gen: "V"
      }, {
        name: "petal dance",
        gen: "V"
      }, {
        name: "magical leaf",
        gen: "V"
      }, {
        name: "grasswhistle",
        gen: "V"
      }, {
        name: "curse",
        gen: "V"
      }, {
        name: "ingrain",
        gen: "V"
      }, {
        name: "nature power",
        gen: "V"
      }, {
        name: "amnesia",
        gen: "V"
      }, {
        name: "leaf storm",
        gen: "V"
      }, {
        name: "power whip",
        gen: "V"
      }, {
        name: "sludge",
        gen: "V"
      }, {
        name: "endure",
        gen: "V"
      }, {
        name: "giga drain",
        gen: "V"
      }],
      tutor: [{
        name: "grass pledge",
        gen: "V"
      }],
      gen34: [{
        name: "bullet seed",
        method: "Gen IV TM09"
      }, {
        name: "secret power",
        method: "Gen IV TM43"
      }, {
        name: "captivate",
        method: "Gen IV TM78"
      }, {
        name: "sleep talk",
        method: "Gen IV TM82"
      }, {
        name: "natural gift",
        method: "Gen IV TM83"
      }, {
        name: "fury cutter",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "knock off",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "snore",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "mudslap",
        method: "Move Tutor  PtHGSS"
      }, {
        name: "string shot",
        method: "Move Tutor  HGSS"
      }, {
        name: "headbutt",
        method: "Move Tutor  HGSS"
      }, {
        name: "defense curl",
        method: "Move Tutor  Emerald"
      }, {
        name: "body slam",
        method: "Move Tutor  FRLG"
      }, {
        name: "mimic",
        method: "Move Tutor  FRLG"
      }]
    },
    damages: {
      normal: "1",
      fire: "2",
      water: "0.5",
      electric: "0.5",
      grass: "0.25",
      ice: "2",
      fight: "0.5",
      poison: "1",
      ground: "1",
      flying: "2",
      psychic: "2",
      bug: "1",
      rock: "1",
      ghost: "1",
      dragon: "1",
      dark: "1",
      steel: "1"
    },
    misc: {
      sex: {
        male: "87.5",
        female: "12.5"
      },
      abilities: {
        normal: [
          "Overgrow"
        ],
        hidden: [
          "Chlorophyll"
        ]
      },
      classification: "seed pokemon",
      height: "2’04”",
      weight: "15.2",
      capturerate: "45",
      eggsteps: "5120",
      expgrowth: "1059860",
      happiness: "70",
      evpoints: [
        "1 Sp. Attack Point(s)"
      ],
      fleeflag: "34",
      entreeforestlevel: "10"
    }
  },
  {
    id: "002",
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
    type: [
      "Grass",
      "Poison"
    ],
    stats: {
      hp: "60",
      attack: "62",
      defense: "63",
      spattack: "80",
      spdefense: "80",
      speed: "60"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "leech seed",
        gen: "V"
      }, {
        learnedat: "3",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "leech seed",
        gen: "V"
      }, {
        learnedat: "9",
        name: "vine whip",
        gen: "V"
      }, {
        learnedat: "13",
        name: "poison powder",
        gen: "V"
      }, {
        learnedat: "13",
        name: "sleep powder",
        gen: "V"
      }, {
        learnedat: "15",
        name: "take down",
        gen: "V"
      }, {
        learnedat: "20",
        name: "razor leaf",
        gen: "V"
      }, {
        learnedat: "23",
        name: "sweet scent",
        gen: "V"
      }, {
        learnedat: "28",
        name: "growth",
        gen: "V"
      }, {
        learnedat: "31",
        name: "double-edge",
        gen: "V"
      }, {
        learnedat: "36",
        name: "worry seed",
        gen: "V"
      }, {
        learnedat: "39",
        name: "synthesis",
        gen: "V"
      }, {
        learnedat: "44",
        name: "solarbeam",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm16",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm53",
        name: "energy ball",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [{
        name: "grass pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "2",
        water: "0.5",
        electric: "0.5",
        grass: "0.25",
        ice: "2",
        fight: "0.5",
        poison: "1",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Overgrow"
          ],
          hidden: [
            "Chlorophyll"
          ]
        }
      }
    }
  }, {
    id: "003",
    name: "Venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur.jpg",
    type: [
      "Grass",
      "Poison"
    ],
    stats: {
      hp: "80",
      attack: "82",
      defense: "83",
      spattack: "100",
      spdefense: "100",
      speed: "80"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "leech seed",
        gen: "V"
      }, {
        learnedat: "",
        name: "vine whip",
        gen: "V"
      }, {
        learnedat: "3",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "leech seed",
        gen: "V"
      }, {
        learnedat: "9",
        name: "vine whip",
        gen: "V"
      }, {
        learnedat: "13",
        name: "poison powder",
        gen: "V"
      }, {
        learnedat: "13",
        name: "sleep powder",
        gen: "V"
      }, {
        learnedat: "15",
        name: "take down",
        gen: "V"
      }, {
        learnedat: "20",
        name: "razor leaf",
        gen: "V"
      }, {
        learnedat: "23",
        name: "sweet scent",
        gen: "V"
      }, {
        learnedat: "28",
        name: "growth",
        gen: "V"
      }, {
        learnedat: "31",
        name: "double-edge",
        gen: "V"
      }, {
        learnedat: "32",
        name: "petal dance",
        gen: "V"
      }, {
        learnedat: "39",
        name: "worry seed",
        gen: "V"
      }, {
        learnedat: "45",
        name: "synthesis",
        gen: "V"
      }, {
        learnedat: "53",
        name: "solarbeam",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm05",
        name: "roar",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm16",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm53",
        name: "energy ball",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "2",
        water: "0.5",
        electric: "0.5",
        grass: "0.25",
        ice: "2",
        fight: "0.5",
        poison: "1",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Overgrow"
          ],
          hidden: [
            "Chlorophyll"
          ]
        },
        classification: "seed pokemon",
        height: "6’07”",
        weight: "220.5",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "2 Sp. Attack Point(s)",
          "1 Sp. Defense Point(s)"
        ],
        fleeflag: "34",
        entreeforestlevel: "32"
      }
    }
  }, {
    id: "004",
    name: "Charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg",
    type: [
      "Fire"
    ],
    stats: {
      hp: "39",
      attack: "52",
      defense: "43",
      spattack: "60",
      spdefense: "50",
      speed: "65"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "ember",
        gen: "V"
      }, {
        learnedat: "10",
        name: "smokescreen",
        gen: "V"
      }, {
        learnedat: "16",
        name: "dragon rage",
        gen: "V"
      }, {
        learnedat: "19",
        name: "scary face",
        gen: "V"
      }, {
        learnedat: "25",
        name: "fire fang",
        gen: "V"
      }, {
        learnedat: "28",
        name: "flame burst",
        gen: "V"
      }, {
        learnedat: "34",
        name: "slash",
        gen: "V"
      }, {
        learnedat: "37",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "43",
        name: "fire spin",
        gen: "V"
      }, {
        learnedat: "46",
        name: "inferno",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm02",
        name: "dragon claw",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm35",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "tm38",
        name: "fire blast",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm43",
        name: "flame charge",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm50",
        name: "overheat",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm59",
        name: "incinerate",
        gen: "V"
      }, {
        learnedat: "tm61",
        name: "will-o-wisp",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [{
        name: "fire pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "0.5",
        water: "2",
        electric: "1",
        grass: "0.5",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "2",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Blaze"
          ],
          hidden: [
            "Solar Power"
          ]
        },
        classification: "lizard pokemon",
        height: "2’00”",
        weight: "18.7",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)"
        ],
        fleeflag: "94",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "005",
    name: "Charmeleon",
    img: "http://img.pokemondb.net/artwork/charmeleon.jpg",
    type: [
      "Fire"
    ],
    stats: {
      hp: "58",
      attack: "64",
      defense: "58",
      spattack: "80",
      spdefense: "65",
      speed: "80"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "ember",
        gen: "V"
      }, {
        learnedat: "7",
        name: "ember",
        gen: "V"
      }, {
        learnedat: "10",
        name: "smokescreen",
        gen: "V"
      }, {
        learnedat: "17",
        name: "dragon rage",
        gen: "V"
      }, {
        learnedat: "21",
        name: "scary face",
        gen: "V"
      }, {
        learnedat: "28",
        name: "fire fang",
        gen: "V"
      }, {
        learnedat: "32",
        name: "flame burst",
        gen: "V"
      }, {
        learnedat: "39",
        name: "slash",
        gen: "V"
      }, {
        learnedat: "43",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "50",
        name: "fire spin",
        gen: "V"
      }, {
        learnedat: "54",
        name: "inferno",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm02",
        name: "dragon claw",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm35",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "tm38",
        name: "fire blast",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm43",
        name: "flame charge",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm50",
        name: "overheat",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm59",
        name: "incinerate",
        gen: "V"
      }, {
        learnedat: "tm61",
        name: "will-o-wisp",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [{
        name: "fire pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "0.5",
        water: "2",
        electric: "1",
        grass: "0.5",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "2",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Blaze"
          ],
          hidden: [
            "Solar Power"
          ]
        },
        classification: "flame pokemon",
        height: "3’07”",
        weight: "41.9",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)",
          "1 Sp. Attack Point(s)"
        ],
        fleeflag: "94",
        entreeforestlevel: "16"
      }
    }
  }, {
    id: "006",
    name: "Charizard",
    img: "http://img.pokemondb.net/artwork/charizard.jpg",
    type: [
      "Fire",
      "Flying"
    ],
    stats: {
      hp: "78",
      attack: "84",
      defense: "78",
      spattack: "109",
      spdefense: "85",
      speed: "100"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "dragon claw",
        gen: "V"
      }, {
        learnedat: "",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "",
        name: "air slash",
        gen: "V"
      }, {
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "ember",
        gen: "V"
      }, {
        learnedat: "",
        name: "smokescreen",
        gen: "V"
      }, {
        learnedat: "7",
        name: "ember",
        gen: "V"
      }, {
        learnedat: "10",
        name: "smokescreen",
        gen: "V"
      }, {
        learnedat: "17",
        name: "dragon rage",
        gen: "V"
      }, {
        learnedat: "21",
        name: "scary face",
        gen: "V"
      }, {
        learnedat: "28",
        name: "fire fang",
        gen: "V"
      }, {
        learnedat: "32",
        name: "flame burst",
        gen: "V"
      }, {
        learnedat: "36",
        name: "wing attack",
        gen: "V"
      }, {
        learnedat: "41",
        name: "slash",
        gen: "V"
      }, {
        learnedat: "47",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "56",
        name: "fire spin",
        gen: "V"
      }, {
        learnedat: "62",
        name: "inferno",
        gen: "V"
      }, {
        learnedat: "71",
        name: "heat wave",
        gen: "V"
      }, {
        learnedat: "77",
        name: "flare blitz",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm02",
        name: "dragon claw",
        gen: "V"
      }, {
        learnedat: "tm05",
        name: "roar",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm35",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "tm38",
        name: "fire blast",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm43",
        name: "flame charge",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm50",
        name: "overheat",
        gen: "V"
      }, {
        learnedat: "tm52",
        name: "focus blast",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm58",
        name: "sky drop",
        gen: "V"
      }, {
        learnedat: "tm59",
        name: "incinerate",
        gen: "V"
      }, {
        learnedat: "tm61",
        name: "will-o-wisp",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm82",
        name: "dragon tail",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm02",
        name: "fly",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [{
        name: "blast burn",
        gen: "V"
      }, {
        name: "fire pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "0.5",
        water: "2",
        electric: "2",
        grass: "0.25",
        ice: "1",
        fight: "0.5",
        poison: "1",
        ground: "0",
        flying: "1",
        psychic: "1",
        bug: "0.25",
        rock: "4",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Blaze"
          ],
          hidden: [
            "Solar Power"
          ]
        },
        classification: "flame pokemon",
        height: "5’07”",
        weight: "199.5",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "3 Sp. Attack Point(s)"
        ],
        fleeflag: "94",
        entreeforestlevel: "36"
      }
    }
  }, {
    id: "007",
    name: "Squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle.jpg",
    type: [
      "Water"
    ],
    stats: {
      hp: "44",
      attack: "48",
      defense: "65",
      spattack: "50",
      spdefense: "64",
      speed: "43"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "4",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "7",
        name: "bubble",
        gen: "V"
      }, {
        learnedat: "10",
        name: "withdraw",
        gen: "V"
      }, {
        learnedat: "13",
        name: "water gun",
        gen: "V"
      }, {
        learnedat: "16",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "19",
        name: "rapid spin",
        gen: "V"
      }, {
        learnedat: "22",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "25",
        name: "water pulse",
        gen: "V"
      }, {
        learnedat: "28",
        name: "aqua tail",
        gen: "V"
      }, {
        learnedat: "31",
        name: "skull bash",
        gen: "V"
      }, {
        learnedat: "34",
        name: "iron defense",
        gen: "V"
      }, {
        learnedat: "37",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "40",
        name: "hydro pump",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm07",
        name: "hail",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm55",
        name: "scald",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm74",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm03",
        name: "surf",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }, {
        learnedat: "hm05",
        name: "waterfall",
        gen: "V"
      }, {
        learnedat: "hm06",
        name: "dive",
        gen: "V"
      }],
      tutor: [{
        name: "water pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "0.5",
        water: "0.5",
        electric: "2",
        grass: "2",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Torrent"
          ],
          hidden: [
            "Rain Dish"
          ]
        },
        classification: "tiny turtle pokemon",
        height: "1’08”",
        weight: "19.8",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Defense Point(s)"
        ],
        fleeflag: "44",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "008",
    name: "Wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle.jpg",
    type: [
      "Water"
    ],
    stats: {
      hp: "59",
      attack: "63",
      defense: "80",
      spattack: "65",
      spdefense: "80",
      speed: "58"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "",
        name: "bubble",
        gen: "V"
      }, {
        learnedat: "4",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "7",
        name: "bubble",
        gen: "V"
      }, {
        learnedat: "10",
        name: "withdraw",
        gen: "V"
      }, {
        learnedat: "13",
        name: "water gun",
        gen: "V"
      }, {
        learnedat: "16",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "20",
        name: "rapid spin",
        gen: "V"
      }, {
        learnedat: "24",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "28",
        name: "water pulse",
        gen: "V"
      }, {
        learnedat: "32",
        name: "aqua tail",
        gen: "V"
      }, {
        learnedat: "36",
        name: "skull bash",
        gen: "V"
      }, {
        learnedat: "40",
        name: "iron defense",
        gen: "V"
      }, {
        learnedat: "44",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "48",
        name: "hydro pump",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm07",
        name: "hail",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm55",
        name: "scald",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm74",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm03",
        name: "surf",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }, {
        learnedat: "hm05",
        name: "waterfall",
        gen: "V"
      }, {
        learnedat: "hm06",
        name: "dive",
        gen: "V"
      }],
      tutor: [{
        name: "water pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "0.5",
        water: "0.5",
        electric: "2",
        grass: "2",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Torrent"
          ],
          hidden: [
            "Rain Dish"
          ]
        },
        classification: "turtle pokemon",
        height: "3’03”",
        weight: "49.6",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Defense Point(s)",
          "1 Sp. Defense Point(s)"
        ],
        fleeflag: "44",
        entreeforestlevel: "16"
      }
    }
  }, {
    id: "009",
    name: "Blastoise",
    img: "http://img.pokemondb.net/artwork/blastoise.jpg",
    type: [
      "Water"
    ],
    stats: {
      hp: "79",
      attack: "83",
      defense: "100",
      spattack: "85",
      spdefense: "105",
      speed: "78"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "flash cannon",
        gen: "V"
      }, {
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "",
        name: "bubble",
        gen: "V"
      }, {
        learnedat: "",
        name: "withdraw",
        gen: "V"
      }, {
        learnedat: "4",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "7",
        name: "bubble",
        gen: "V"
      }, {
        learnedat: "10",
        name: "withdraw",
        gen: "V"
      }, {
        learnedat: "13",
        name: "water gun",
        gen: "V"
      }, {
        learnedat: "16",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "20",
        name: "rapid spin",
        gen: "V"
      }, {
        learnedat: "24",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "28",
        name: "water pulse",
        gen: "V"
      }, {
        learnedat: "32",
        name: "aqua tail",
        gen: "V"
      }, {
        learnedat: "39",
        name: "skull bash",
        gen: "V"
      }, {
        learnedat: "46",
        name: "iron defense",
        gen: "V"
      }, {
        learnedat: "53",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "60",
        name: "hydro pump",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm05",
        name: "roar",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm07",
        name: "hail",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm23",
        name: "smack down",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm52",
        name: "focus blast",
        gen: "V"
      }, {
        learnedat: "tm55",
        name: "scald",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm74",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm82",
        name: "dragon tail",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm91",
        name: "flash cannon",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm03",
        name: "surf",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }, {
        learnedat: "hm05",
        name: "waterfall",
        gen: "V"
      }, {
        learnedat: "hm06",
        name: "dive",
        gen: "V"
      }],
      tutor: [{
        name: "hydro cannon",
        gen: "V"
      }, {
        name: "water pledge",
        gen: "V"
      }],
      damages: {
        normal: "1",
        fire: "0.5",
        water: "0.5",
        electric: "2",
        grass: "2",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Torrent"
          ],
          hidden: [
            "Rain Dish"
          ]
        },
        classification: "shellfish pokemon",
        height: "5’03”",
        weight: "188.5",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "3 Sp. Defense Point(s)"
        ],
        fleeflag: "44",
        entreeforestlevel: "36"
      }
    }
  }, {
    id: "010",
    name: "Caterpie",
    img: "http://img.pokemondb.net/artwork/caterpie.jpg",
    type: [
      "Bug"
    ],
    stats: {
      hp: "45",
      attack: "30",
      defense: "35",
      spattack: "20",
      spdefense: "20",
      speed: "45"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "string shot",
        gen: "V"
      }, {
        learnedat: "15",
        name: "bug bite",
        gen: "V"
      }],
      tmhm: [],
      tutor: [],
      damages: {
        normal: "1",
        fire: "2",
        water: "1",
        electric: "1",
        grass: "0.5",
        ice: "1",
        fight: "0.5",
        poison: "1",
        ground: "0.5",
        flying: "2",
        psychic: "1",
        bug: "1",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Shield Dust"
          ],
          hidden: [
            "Run Away"
          ]
        },
        classification: "worm pokemon",
        height: "1’00”",
        weight: "6.4",
        capturerate: "255",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "1 HP Point(s)"
        ],
        fleeflag: "50",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "011",
    name: "Metapod",
    img: "http://img.pokemondb.net/artwork/metapod.jpg",
    type: [
      "Bug"
    ],
    stats: {
      hp: "50",
      attack: "20",
      defense: "55",
      spattack: "25",
      spdefense: "25",
      speed: "30"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "harden",
        gen: "V"
      }, {
        learnedat: "7",
        name: "harden",
        gen: "V"
      }],
      tmhm: [],
      tutor: [],
      damages: {
        normal: "1",
        fire: "2",
        water: "1",
        electric: "1",
        grass: "0.5",
        ice: "1",
        fight: "0.5",
        poison: "1",
        ground: "0.5",
        flying: "2",
        psychic: "1",
        bug: "1",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Shed Skin"
          ],
          hidden: []
        },
        classification: "cocoon pokemon",
        height: "2’04”",
        weight: "21.8",
        capturerate: "120",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Defense Point(s)"
        ],
        fleeflag: "61",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "012",
    name: "Butterfree",
    img: "http://img.pokemondb.net/artwork/butterfree.jpg",
    type: [
      "Bug",
      "Flying"
    ],
    stats: {
      hp: "60",
      attack: "45",
      defense: "50",
      spattack: "80",
      spdefense: "80",
      speed: "70"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "confusion",
        gen: "V"
      }, {
        learnedat: "10",
        name: "confusion",
        gen: "V"
      }, {
        learnedat: "12",
        name: "poison powder",
        gen: "V"
      }, {
        learnedat: "12",
        name: "stun spore",
        gen: "V"
      }, {
        learnedat: "12",
        name: "sleep powder",
        gen: "V"
      }, {
        learnedat: "16",
        name: "gust",
        gen: "V"
      }, {
        learnedat: "18",
        name: "supersonic",
        gen: "V"
      }, {
        learnedat: "22",
        name: "whirlwind",
        gen: "V"
      }, {
        learnedat: "24",
        name: "psybeam",
        gen: "V"
      }, {
        learnedat: "28",
        name: "silver wind",
        gen: "V"
      }, {
        learnedat: "30",
        name: "tailwind",
        gen: "V"
      }, {
        learnedat: "34",
        name: "rage powder",
        gen: "V"
      }, {
        learnedat: "36",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "40",
        name: "captivate",
        gen: "V"
      }, {
        learnedat: "42",
        name: "bug buzz",
        gen: "V"
      }, {
        learnedat: "46",
        name: "quiver dance",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm29",
        name: "psychic",
        gen: "V"
      }, {
        learnedat: "tm30",
        name: "shadow ball",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm53",
        name: "energy ball",
        gen: "V"
      }, {
        learnedat: "tm62",
        name: "acrobatics",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm76",
        name: "struggle bug",
        gen: "V"
      }, {
        learnedat: "tm77",
        name: "psych up",
        gen: "V"
      }, {
        learnedat: "tm85",
        name: "dream eater",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "2",
        water: "1",
        electric: "2",
        grass: "0.25",
        ice: "2",
        fight: "0.25",
        poison: "1",
        ground: "0",
        flying: "2",
        psychic: "1",
        bug: "0.5",
        rock: "4",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Compoundeyes"
          ],
          hidden: [
            "Tinted Lens"
          ]
        },
        classification: "butterfly pokemon",
        height: "3’07”",
        weight: "70.5",
        capturerate: "45",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Sp. Attack Point(s)",
          "1 Sp. Defense Point(s)"
        ],
        fleeflag: "110",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "013",
    name: "Weedle",
    img: "http://img.pokemondb.net/artwork/weedle.jpg",
    type: [
      "Bug",
      "Poison"
    ],
    stats: {
      hp: "40",
      attack: "35",
      defense: "30",
      spattack: "20",
      spdefense: "20",
      speed: "50"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "",
        name: "string shot",
        gen: "V"
      }, {
        learnedat: "15",
        name: "bug bite",
        gen: "V"
      }],
      tmhm: [],
      tutor: [],
      damages: {
        normal: "1",
        fire: "2",
        water: "1",
        electric: "1",
        grass: "0.25",
        ice: "1",
        fight: "0.25",
        poison: "0.5",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Shield Dust"
          ],
          hidden: [
            "Run Away"
          ]
        },
        classification: "hairy pokemon",
        height: "1’00”",
        weight: "7.1",
        capturerate: "255",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)"
        ],
        fleeflag: "50",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "014",
    name: "Kakuna",
    img: "http://img.pokemondb.net/artwork/kakuna.jpg",
    type: [
      "Bug",
      "Poison"
    ],
    stats: {
      hp: "45",
      attack: "25",
      defense: "50",
      spattack: "25",
      spdefense: "25",
      speed: "35"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "harden",
        gen: "V"
      }, {
        learnedat: "7",
        name: "harden",
        gen: "V"
      }],
      tmhm: [],
      tutor: [],
      damages: {
        normal: "1",
        fire: "2",
        water: "1",
        electric: "1",
        grass: "0.25",
        ice: "1",
        fight: "0.25",
        poison: "0.5",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Shed Skin"
          ],
          hidden: []
        },
        classification: "cocoon pokemon",
        height: "2’00”",
        weight: "22.0",
        capturerate: "120",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Defense Point(s)"
        ],
        fleeflag: "61",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "015",
    name: "Beedrill",
    img: "http://img.pokemondb.net/artwork/beedrill.jpg",
    type: [
      "Bug",
      "Poison"
    ],
    stats: {
      hp: "65",
      attack: "80",
      defense: "40",
      spattack: "45",
      spdefense: "80",
      speed: "75"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "fury attack",
        gen: "V"
      }, {
        learnedat: "10",
        name: "fury attack",
        gen: "V"
      }, {
        learnedat: "13",
        name: "focus energy",
        gen: "V"
      }, {
        learnedat: "16",
        name: "twineedle",
        gen: "V"
      }, {
        learnedat: "19",
        name: "rage",
        gen: "V"
      }, {
        learnedat: "22",
        name: "pursuit",
        gen: "V"
      }, {
        learnedat: "25",
        name: "toxic spikes",
        gen: "V"
      }, {
        learnedat: "28",
        name: "pin missile",
        gen: "V"
      }, {
        learnedat: "31",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "34",
        name: "assurance",
        gen: "V"
      }, {
        learnedat: "37",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "40",
        name: "endeavor",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm22",
        name: "solarbeam",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm54",
        name: "false swipe",
        gen: "V"
      }, {
        learnedat: "tm62",
        name: "acrobatics",
        gen: "V"
      }, {
        learnedat: "tm66",
        name: "payback",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm76",
        name: "struggle bug",
        gen: "V"
      }, {
        learnedat: "tm81",
        name: "x-scissor",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "2",
        water: "1",
        electric: "1",
        grass: "0.25",
        ice: "1",
        fight: "0.25",
        poison: "0.5",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Swarm"
          ],
          hidden: [
            "Sniper"
          ]
        },
        classification: "poison bee pokemon",
        height: "3’03”",
        weight: "65.0",
        capturerate: "45",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Attack Point(s)",
          "1 Sp. Defense Point(s)"
        ],
        fleeflag: "97",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "016",
    name: "Pidgey",
    img: "http://img.pokemondb.net/artwork/pidgey.jpg",
    type: [
      "Normal",
      "Flying"
    ],
    stats: {
      hp: "40",
      attack: "45",
      defense: "40",
      spattack: "35",
      spdefense: "35",
      speed: "56"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "5",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "9",
        name: "gust",
        gen: "V"
      }, {
        learnedat: "13",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "17",
        name: "whirlwind",
        gen: "V"
      }, {
        learnedat: "21",
        name: "twister",
        gen: "V"
      }, {
        learnedat: "25",
        name: "featherdance",
        gen: "V"
      }, {
        learnedat: "29",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "33",
        name: "wing attack",
        gen: "V"
      }, {
        learnedat: "37",
        name: "roost",
        gen: "V"
      }, {
        learnedat: "41",
        name: "tailwind",
        gen: "V"
      }, {
        learnedat: "45",
        name: "mirror move",
        gen: "V"
      }, {
        learnedat: "49",
        name: "air slash",
        gen: "V"
      }, {
        learnedat: "53",
        name: "hurricane",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm02",
        name: "fly",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "2",
        grass: "0.5",
        ice: "2",
        fight: "1",
        poison: "1",
        ground: "0",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Keen Eye",
            "Tangled Feet"
          ],
          hidden: [
            "Big Pecks"
          ]
        },
        classification: "tiny bird pokemon",
        height: "1’00”",
        weight: "4.0",
        capturerate: "255",
        eggsteps: "3840",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)"
        ],
        fleeflag: "145",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "017",
    name: "Pidgeotto",
    img: "http://img.pokemondb.net/artwork/pidgeotto.jpg",
    type: [
      "Normal",
      "Flying"
    ],
    stats: {
      hp: "63",
      attack: "60",
      defense: "55",
      spattack: "50",
      spdefense: "50",
      speed: "71"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "",
        name: "gust",
        gen: "V"
      }, {
        learnedat: "5",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "9",
        name: "gust",
        gen: "V"
      }, {
        learnedat: "13",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "17",
        name: "whirlwind",
        gen: "V"
      }, {
        learnedat: "22",
        name: "twister",
        gen: "V"
      }, {
        learnedat: "27",
        name: "featherdance",
        gen: "V"
      }, {
        learnedat: "32",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "37",
        name: "wing attack",
        gen: "V"
      }, {
        learnedat: "42",
        name: "roost",
        gen: "V"
      }, {
        learnedat: "47",
        name: "tailwind",
        gen: "V"
      }, {
        learnedat: "52",
        name: "mirror move",
        gen: "V"
      }, {
        learnedat: "57",
        name: "air slash",
        gen: "V"
      }, {
        learnedat: "62",
        name: "hurricane",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm02",
        name: "fly",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "2",
        grass: "0.5",
        ice: "2",
        fight: "1",
        poison: "1",
        ground: "0",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Keen Eye",
            "Tangled Feet"
          ],
          hidden: [
            "Big Pecks"
          ]
        },
        classification: "bird pokemon",
        height: "3’07”",
        weight: "66.1",
        capturerate: "120",
        eggsteps: "3840",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "2 Speed Point(s)"
        ],
        fleeflag: "145",
        entreeforestlevel: "18"
      }
    }
  }, {
    id: "018",
    name: "Pidgeot",
    img: "http://img.pokemondb.net/artwork/pidgeot.jpg",
    type: [
      "Normal",
      "Flying"
    ],
    stats: {
      hp: "83",
      attack: "80",
      defense: "75",
      spattack: "70",
      spdefense: "70",
      speed: "91"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "",
        name: "gust",
        gen: "V"
      }, {
        learnedat: "",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "5",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "9",
        name: "gust",
        gen: "V"
      }, {
        learnedat: "13",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "17",
        name: "whirlwind",
        gen: "V"
      }, {
        learnedat: "22",
        name: "twister",
        gen: "V"
      }, {
        learnedat: "27",
        name: "featherdance",
        gen: "V"
      }, {
        learnedat: "32",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "38",
        name: "wing attack",
        gen: "V"
      }, {
        learnedat: "44",
        name: "roost",
        gen: "V"
      }, {
        learnedat: "50",
        name: "tailwind",
        gen: "V"
      }, {
        learnedat: "56",
        name: "mirror move",
        gen: "V"
      }, {
        learnedat: "62",
        name: "air slash",
        gen: "V"
      }, {
        learnedat: "68",
        name: "hurricane",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm02",
        name: "fly",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "2",
        grass: "0.5",
        ice: "2",
        fight: "1",
        poison: "1",
        ground: "0",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Keen Eye",
            "Tangled Feet"
          ],
          hidden: [
            "Big Pecks"
          ]
        },
        classification: "bird pokemon",
        height: "4’11”",
        weight: "87.1",
        capturerate: "45",
        eggsteps: "3840",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "3 Speed Point(s)"
        ],
        fleeflag: "145",
        entreeforestlevel: "36"
      }
    }
  }, {
    id: "019",
    name: "Rattata",
    img: "http://img.pokemondb.net/artwork/rattata.jpg",
    type: [
      "Normal"
    ],
    stats: {
      hp: "30",
      attack: "56",
      defense: "35",
      spattack: "25",
      spdefense: "35",
      speed: "72"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "4",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "7",
        name: "focus energy",
        gen: "V"
      }, {
        learnedat: "10",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "13",
        name: "pursuit",
        gen: "V"
      }, {
        learnedat: "16",
        name: "hyper fang",
        gen: "V"
      }, {
        learnedat: "19",
        name: "sucker punch",
        gen: "V"
      }, {
        learnedat: "22",
        name: "crunch",
        gen: "V"
      }, {
        learnedat: "25",
        name: "assurance",
        gen: "V"
      }, {
        learnedat: "28",
        name: "super fang",
        gen: "V"
      }, {
        learnedat: "31",
        name: "double-edge",
        gen: "V"
      }, {
        learnedat: "34",
        name: "endeavor",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm12",
        name: "taunt",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm30",
        name: "shadow ball",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm57",
        name: "charge beam",
        gen: "V"
      }, {
        learnedat: "tm67",
        name: "retaliate",
        gen: "V"
      }, {
        learnedat: "tm73",
        name: "thunder wave",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm93",
        name: "wild charge",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "1",
        grass: "1",
        ice: "1",
        fight: "2",
        poison: "1",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Run Away",
            "Guts"
          ],
          hidden: [
            "Hustle"
          ]
        },
        classification: "mouse pokemon",
        height: "1’00”",
        weight: "7.7",
        capturerate: "255",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)"
        ],
        fleeflag: "55",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "020",
    name: "Raticate",
    img: "http://img.pokemondb.net/artwork/raticate.jpg",
    type: [
      "Normal"
    ],
    stats: {
      hp: "55",
      attack: "81",
      defense: "60",
      spattack: "50",
      spdefense: "70",
      speed: "97"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "",
        name: "tackle",
        gen: "V"
      }, {
        learnedat: "",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "",
        name: "focus energy",
        gen: "V"
      }, {
        learnedat: "4",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "7",
        name: "focus energy",
        gen: "V"
      }, {
        learnedat: "10",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "13",
        name: "pursuit",
        gen: "V"
      }, {
        learnedat: "16",
        name: "hyper fang",
        gen: "V"
      }, {
        learnedat: "19",
        name: "sucker punch",
        gen: "V"
      }, {
        learnedat: "20",
        name: "scary face",
        gen: "V"
      }, {
        learnedat: "24",
        name: "crunch",
        gen: "V"
      }, {
        learnedat: "29",
        name: "assurance",
        gen: "V"
      }, {
        learnedat: "34",
        name: "super fang",
        gen: "V"
      }, {
        learnedat: "39",
        name: "double-edge",
        gen: "V"
      }, {
        learnedat: "44",
        name: "endeavor",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm05",
        name: "roar",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm12",
        name: "taunt",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm30",
        name: "shadow ball",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm57",
        name: "charge beam",
        gen: "V"
      }, {
        learnedat: "tm67",
        name: "retaliate",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm73",
        name: "thunder wave",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm93",
        name: "wild charge",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "1",
        grass: "1",
        ice: "1",
        fight: "2",
        poison: "1",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Run Away",
            "Guts"
          ],
          hidden: [
            "Hustle"
          ]
        },
        classification: "mouse pokemon",
        height: "2’04”",
        weight: "40.8",
        capturerate: "127",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Speed Point(s)"
        ],
        fleeflag: "55",
        entreeforestlevel: "20"
      }
    }
  }, {
    id: "021",
    name: "Spearow",
    img: "http://img.pokemondb.net/artwork/spearow.jpg",
    type: [
      "Normal",
      "Flying"
    ],
    stats: {
      hp: "40",
      attack: "60",
      defense: "30",
      spattack: "31",
      spdefense: "31",
      speed: "70"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "peck",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "5",
        name: "leer",
        gen: "V"
      }, {
        learnedat: "9",
        name: "fury attack",
        gen: "V"
      }, {
        learnedat: "13",
        name: "pursuit",
        gen: "V"
      }, {
        learnedat: "17",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "21",
        name: "mirror move",
        gen: "V"
      }, {
        learnedat: "25",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "29",
        name: "assurance",
        gen: "V"
      }, {
        learnedat: "33",
        name: "roost",
        gen: "V"
      }, {
        learnedat: "37",
        name: "drill peck",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm54",
        name: "false swipe",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm02",
        name: "fly",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "2",
        grass: "0.5",
        ice: "2",
        fight: "1",
        poison: "1",
        ground: "0",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Keen Eye"
          ],
          hidden: [
            "Sniper"
          ]
        },
        classification: "tiny bird pokemon",
        height: "1’00”",
        weight: "4.4",
        capturerate: "255",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)"
        ],
        fleeflag: "97",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "022",
    name: "Fearow",
    img: "http://img.pokemondb.net/artwork/fearow.jpg",
    type: [
      "Normal",
      "Flying"
    ],
    stats: {
      hp: "65",
      attack: "90",
      defense: "65",
      spattack: "61",
      spdefense: "61",
      speed: "100"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "",
        name: "peck",
        gen: "V"
      }, {
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "leer",
        gen: "V"
      }, {
        learnedat: "",
        name: "fury attack",
        gen: "V"
      }, {
        learnedat: "5",
        name: "leer",
        gen: "V"
      }, {
        learnedat: "9",
        name: "fury attack",
        gen: "V"
      }, {
        learnedat: "13",
        name: "pursuit",
        gen: "V"
      }, {
        learnedat: "17",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "23",
        name: "mirror move",
        gen: "V"
      }, {
        learnedat: "29",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "35",
        name: "assurance",
        gen: "V"
      }, {
        learnedat: "41",
        name: "roost",
        gen: "V"
      }, {
        learnedat: "47",
        name: "drill peck",
        gen: "V"
      }, {
        learnedat: "53",
        name: "drill run",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm54",
        name: "false swipe",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm83",
        name: "work up",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm88",
        name: "pluck",
        gen: "V"
      }, {
        learnedat: "tm89",
        name: "u-turn",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm02",
        name: "fly",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "2",
        grass: "0.5",
        ice: "2",
        fight: "1",
        poison: "1",
        ground: "0",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "0",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Keen Eye"
          ],
          hidden: [
            "Sniper"
          ]
        },
        classification: "beak pokemon",
        height: "3’11”",
        weight: "83.8",
        capturerate: "90",
        eggsteps: "3840",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Speed Point(s)"
        ],
        fleeflag: "97",
        entreeforestlevel: "20"
      }
    }
  }, {
    id: "023",
    name: "Ekans",
    img: "http://img.pokemondb.net/artwork/ekans.jpg",
    type: [
      "Poison"
    ],
    stats: {
      hp: "35",
      attack: "60",
      defense: "44",
      spattack: "40",
      spdefense: "54",
      speed: "55"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "wrap",
        gen: "V"
      }, {
        learnedat: "",
        name: "leer",
        gen: "V"
      }, {
        learnedat: "4",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "9",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "12",
        name: "glare",
        gen: "V"
      }, {
        learnedat: "17",
        name: "screech",
        gen: "V"
      }, {
        learnedat: "20",
        name: "acid",
        gen: "V"
      }, {
        learnedat: "25",
        name: "stockpile",
        gen: "V"
      }, {
        learnedat: "25",
        name: "swallow",
        gen: "V"
      }, {
        learnedat: "25",
        name: "spit up",
        gen: "V"
      }, {
        learnedat: "28",
        name: "acid spray",
        gen: "V"
      }, {
        learnedat: "33",
        name: "mud bomb",
        gen: "V"
      }, {
        learnedat: "36",
        name: "gastro acid",
        gen: "V"
      }, {
        learnedat: "41",
        name: "haze",
        gen: "V"
      }, {
        learnedat: "44",
        name: "coil",
        gen: "V"
      }, {
        learnedat: "49",
        name: "gunk shot",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm34",
        name: "sludge wave",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm41",
        name: "torment",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm66",
        name: "payback",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "1",
        grass: "0.5",
        ice: "1",
        fight: "0.5",
        poison: "0.5",
        ground: "2",
        flying: "1",
        psychic: "2",
        bug: "0.5",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Intimidate",
            "Shed Skin"
          ],
          hidden: [
            "Unnerve"
          ]
        },
        classification: "snake pokemon",
        height: "6’07”",
        weight: "15.2",
        capturerate: "255",
        eggsteps: "5120",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "1 Attack Point(s)"
        ],
        fleeflag: "127",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "024",
    name: "Arbok",
    img: "http://img.pokemondb.net/artwork/arbok.jpg",
    type: [
      "Poison"
    ],
    stats: {
      hp: "60",
      attack: "85",
      defense: "69",
      spattack: "65",
      spdefense: "79",
      speed: "80"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "ice fang",
        gen: "V"
      }, {
        learnedat: "",
        name: "thunder fang",
        gen: "V"
      }, {
        learnedat: "",
        name: "fire fang",
        gen: "V"
      }, {
        learnedat: "",
        name: "wrap",
        gen: "V"
      }, {
        learnedat: "",
        name: "leer",
        gen: "V"
      }, {
        learnedat: "",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "4",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "9",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "12",
        name: "glare",
        gen: "V"
      }, {
        learnedat: "17",
        name: "screech",
        gen: "V"
      }, {
        learnedat: "20",
        name: "acid",
        gen: "V"
      }, {
        learnedat: "22",
        name: "crunch",
        gen: "V"
      }, {
        learnedat: "27",
        name: "stockpile",
        gen: "V"
      }, {
        learnedat: "27",
        name: "swallow",
        gen: "V"
      }, {
        learnedat: "27",
        name: "spit up",
        gen: "V"
      }, {
        learnedat: "32",
        name: "acid spray",
        gen: "V"
      }, {
        learnedat: "39",
        name: "mud bomb",
        gen: "V"
      }, {
        learnedat: "44",
        name: "gastro acid",
        gen: "V"
      }, {
        learnedat: "51",
        name: "haze",
        gen: "V"
      }, {
        learnedat: "56",
        name: "coil",
        gen: "V"
      }, {
        learnedat: "63",
        name: "gunk shot",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm34",
        name: "sludge wave",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm41",
        name: "torment",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm66",
        name: "payback",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm82",
        name: "dragon tail",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "1",
        grass: "0.5",
        ice: "1",
        fight: "0.5",
        poison: "0.5",
        ground: "2",
        flying: "1",
        psychic: "2",
        bug: "0.5",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Intimidate",
            "Shed Skin"
          ],
          hidden: [
            "Unnerve"
          ]
        },
        classification: "cobra pokemon",
        height: "11’06”",
        weight: "143.3",
        capturerate: "90",
        eggsteps: "5120",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Attack Point(s)"
        ],
        fleeflag: "127",
        entreeforestlevel: "22"
      }
    }
  }, {
    id: "025",
    name: "Pikachu",
    img: "http://img.pokemondb.net/artwork/pikachu.jpg",
    type: [
      "Electric"
    ],
    stats: {
      hp: "35",
      attack: "55",
      defense: "30",
      spattack: "50",
      spdefense: "40",
      speed: "90"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "thundershock",
        gen: "V"
      }, {
        learnedat: "5",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "10",
        name: "thunder wave",
        gen: "V"
      }, {
        learnedat: "13",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "18",
        name: "electro ball",
        gen: "V"
      }, {
        learnedat: "21",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "26",
        name: "slam",
        gen: "V"
      }, {
        learnedat: "29",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "34",
        name: "feint",
        gen: "V"
      }, {
        learnedat: "37",
        name: "agility",
        gen: "V"
      }, {
        learnedat: "42",
        name: "discharge",
        gen: "V"
      }, {
        learnedat: "45",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "50",
        name: "thunder",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm16",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm57",
        name: "charge beam",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm72",
        name: "volt switch",
        gen: "V"
      }, {
        learnedat: "tm73",
        name: "thunder wave",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm93",
        name: "wild charge",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "0.5",
        grass: "1",
        ice: "1",
        fight: "1",
        poison: "1",
        ground: "2",
        flying: "0.5",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Static"
          ],
          hidden: [
            "Lightningrod"
          ]
        },
        classification: "mouse pokemon",
        height: "1’04”",
        weight: "13.2",
        capturerate: "190",
        eggsteps: "2560",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Speed Point(s)"
        ],
        fleeflag: "31",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "026",
    name: "Raichu",
    img: "http://img.pokemondb.net/artwork/raichu.jpg",
    type: [
      "Electric"
    ],
    stats: {
      hp: "60",
      attack: "90",
      defense: "55",
      spattack: "90",
      spdefense: "80",
      speed: "100"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "thundershock",
        gen: "V"
      }, {
        learnedat: "",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "",
        name: "quick attack",
        gen: "V"
      }, {
        learnedat: "",
        name: "thunderbolt",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm16",
        name: "light screen",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm52",
        name: "focus blast",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm57",
        name: "charge beam",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm70",
        name: "flash",
        gen: "V"
      }, {
        learnedat: "tm72",
        name: "volt switch",
        gen: "V"
      }, {
        learnedat: "tm73",
        name: "thunder wave",
        gen: "V"
      }, {
        learnedat: "tm86",
        name: "grass knot",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm93",
        name: "wild charge",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "0.5",
        grass: "1",
        ice: "1",
        fight: "1",
        poison: "1",
        ground: "2",
        flying: "0.5",
        psychic: "1",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Static"
          ],
          hidden: [
            "Lightningrod"
          ]
        },
        classification: "mouse pokemon",
        height: "2’07”",
        weight: "66.1",
        capturerate: "75",
        eggsteps: "2560",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "3 Speed Point(s)"
        ],
        fleeflag: "31",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "027",
    name: "Sandshrew",
    img: "http://img.pokemondb.net/artwork/sandshrew.jpg",
    type: [
      "Ground"
    ],
    stats: {
      hp: "50",
      attack: "75",
      defense: "85",
      spattack: "20",
      spdefense: "30",
      speed: "40"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "3",
        name: "defense curl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "9",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "13",
        name: "rapid spin",
        gen: "V"
      }, {
        learnedat: "15",
        name: "swift",
        gen: "V"
      }, {
        learnedat: "19",
        name: "fury swipes",
        gen: "V"
      }, {
        learnedat: "21",
        name: "rollout",
        gen: "V"
      }, {
        learnedat: "25",
        name: "fury cutter",
        gen: "V"
      }, {
        learnedat: "27",
        name: "sand tomb",
        gen: "V"
      }, {
        learnedat: "31",
        name: "slash",
        gen: "V"
      }, {
        learnedat: "33",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "37",
        name: "sandstorm",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm37",
        name: "sandstorm",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm74",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm81",
        name: "x-scissor",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "2",
        electric: "0",
        grass: "2",
        ice: "2",
        fight: "1",
        poison: "0.5",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "0.5",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Sand Veil"
          ],
          hidden: [
            "Sand Rush"
          ]
        },
        classification: "mouse pokemon",
        height: "2’00”",
        weight: "26.5",
        capturerate: "255",
        eggsteps: "5120",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "1 Defense Point(s)"
        ],
        fleeflag: "146",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "028",
    name: "Sandslash",
    img: "http://img.pokemondb.net/artwork/sandslash.jpg",
    type: [
      "Ground"
    ],
    stats: {
      hp: "75",
      attack: "100",
      defense: "110",
      spattack: "45",
      spdefense: "55",
      speed: "65"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "",
        name: "defense curl",
        gen: "V"
      }, {
        learnedat: "",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "3",
        name: "defense curl",
        gen: "V"
      }, {
        learnedat: "7",
        name: "sand-attack",
        gen: "V"
      }, {
        learnedat: "9",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "13",
        name: "rapid spin",
        gen: "V"
      }, {
        learnedat: "15",
        name: "swift",
        gen: "V"
      }, {
        learnedat: "19",
        name: "fury swipes",
        gen: "V"
      }, {
        learnedat: "21",
        name: "rollout",
        gen: "V"
      }, {
        learnedat: "22",
        name: "crush claw",
        gen: "V"
      }, {
        learnedat: "28",
        name: "fury cutter",
        gen: "V"
      }, {
        learnedat: "33",
        name: "sand tomb",
        gen: "V"
      }, {
        learnedat: "40",
        name: "slash",
        gen: "V"
      }, {
        learnedat: "45",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "52",
        name: "sandstorm",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm20",
        name: "safeguard",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm37",
        name: "sandstorm",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm52",
        name: "focus blast",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm71",
        name: "stone edge",
        gen: "V"
      }, {
        learnedat: "tm74",
        name: "gyro ball",
        gen: "V"
      }, {
        learnedat: "tm75",
        name: "swords dance",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm81",
        name: "x-scissor",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "2",
        electric: "0",
        grass: "2",
        ice: "2",
        fight: "1",
        poison: "0.5",
        ground: "1",
        flying: "1",
        psychic: "1",
        bug: "1",
        rock: "0.5",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "50",
          female: "50"
        },
        abilities: {
          normal: [
            "Sand Veil"
          ],
          hidden: [
            "Sand Rush"
          ]
        },
        classification: "mouse pokemon",
        height: "3’03”",
        weight: "65.0",
        capturerate: "90",
        eggsteps: "5120",
        expgrowth: "1000000",
        happiness: "70",
        evpoints: [
          "2 Defense Point(s)"
        ],
        fleeflag: "146",
        entreeforestlevel: "22"
      }
    }
  }, {
    id: "029",
    name: "Nidoran?",
    img: "http://img.pokemondb.net/artwork/nidoran-f.jpg",
    type: [
      "Poison"
    ],
    stats: {
      hp: "55",
      attack: "47",
      defense: "52",
      spattack: "40",
      spdefense: "40",
      speed: "41"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "7",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "9",
        name: "double kick",
        gen: "V"
      }, {
        learnedat: "13",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "19",
        name: "fury swipes",
        gen: "V"
      }, {
        learnedat: "21",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "25",
        name: "helping hand",
        gen: "V"
      }, {
        learnedat: "31",
        name: "toxic spikes",
        gen: "V"
      }, {
        learnedat: "33",
        name: "flatter",
        gen: "V"
      }, {
        learnedat: "37",
        name: "crunch",
        gen: "V"
      }, {
        learnedat: "43",
        name: "captivate",
        gen: "V"
      }, {
        learnedat: "45",
        name: "poison fang",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "1",
        grass: "0.5",
        ice: "1",
        fight: "0.5",
        poison: "0.5",
        ground: "2",
        flying: "1",
        psychic: "2",
        bug: "0.5",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "0",
          female: "100"
        },
        abilities: {
          normal: [
            "Poison Point",
            "Rivalry"
          ],
          hidden: [
            "Hustle"
          ]
        },
        classification: "poison pin pokemon",
        height: "1’04”",
        weight: "15.4",
        capturerate: "235",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 HP Point(s)"
        ],
        fleeflag: "55",
        entreeforestlevel: "10"
      }
    }
  }, {
    id: "030",
    name: "Nidorina",
    img: "http://img.pokemondb.net/artwork/nidorina.jpg",
    type: [
      "Poison"
    ],
    stats: {
      hp: "70",
      attack: "62",
      defense: "67",
      spattack: "55",
      spdefense: "55",
      speed: "56"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "growl",
        gen: "V"
      }, {
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "7",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "9",
        name: "double kick",
        gen: "V"
      }, {
        learnedat: "13",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "20",
        name: "fury swipes",
        gen: "V"
      }, {
        learnedat: "23",
        name: "bite",
        gen: "V"
      }, {
        learnedat: "28",
        name: "helping hand",
        gen: "V"
      }, {
        learnedat: "35",
        name: "toxic spikes",
        gen: "V"
      }, {
        learnedat: "38",
        name: "flatter",
        gen: "V"
      }, {
        learnedat: "43",
        name: "crunch",
        gen: "V"
      }, {
        learnedat: "50",
        name: "captivate",
        gen: "V"
      }, {
        learnedat: "58",
        name: "poison fang",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "1",
        electric: "1",
        grass: "0.5",
        ice: "1",
        fight: "0.5",
        poison: "0.5",
        ground: "2",
        flying: "1",
        psychic: "2",
        bug: "0.5",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "0",
          female: "100"
        },
        abilities: {
          normal: [
            "Poison Point",
            "Rivalry"
          ],
          hidden: [
            "Hustle"
          ]
        },
        classification: "poison pin pokemon",
        height: "2’07”",
        weight: "44.1",
        capturerate: "120",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "2 HP Point(s)"
        ],
        fleeflag: "55",
        entreeforestlevel: "16"
      }
    }
  }, {
    id: "031",
    name: "Nidoqueen",
    img: "http://img.pokemondb.net/artwork/nidoqueen.jpg",
    type: [
      "Poison",
      "Ground"
    ],
    stats: {
      hp: "90",
      attack: "82",
      defense: "87",
      spattack: "75",
      spdefense: "85",
      speed: "76"
    },
    moves: {
      level: [{
        learnedat: "",
        name: "scratch",
        gen: "V"
      }, {
        learnedat: "",
        name: "tail whip",
        gen: "V"
      }, {
        learnedat: "",
        name: "double kick",
        gen: "V"
      }, {
        learnedat: "",
        name: "poison sting",
        gen: "V"
      }, {
        learnedat: "23",
        name: "chip away",
        gen: "V"
      }, {
        learnedat: "35",
        name: "body slam",
        gen: "V"
      }, {
        learnedat: "43",
        name: "earth power",
        gen: "V"
      }, {
        learnedat: "58",
        name: "superpower",
        gen: "V"
      }],
      tmhm: [{
        learnedat: "tm01",
        name: "hone claws",
        gen: "V"
      }, {
        learnedat: "tm05",
        name: "roar",
        gen: "V"
      }, {
        learnedat: "tm06",
        name: "toxic",
        gen: "V"
      }, {
        learnedat: "tm09",
        name: "venoshock",
        gen: "V"
      }, {
        learnedat: "tm10",
        name: "hidden power",
        gen: "V"
      }, {
        learnedat: "tm11",
        name: "sunny day",
        gen: "V"
      }, {
        learnedat: "tm12",
        name: "taunt",
        gen: "V"
      }, {
        learnedat: "tm13",
        name: "ice beam",
        gen: "V"
      }, {
        learnedat: "tm14",
        name: "blizzard",
        gen: "V"
      }, {
        learnedat: "tm15",
        name: "hyper beam",
        gen: "V"
      }, {
        learnedat: "tm17",
        name: "protect",
        gen: "V"
      }, {
        learnedat: "tm18",
        name: "rain dance",
        gen: "V"
      }, {
        learnedat: "tm21",
        name: "frustration",
        gen: "V"
      }, {
        learnedat: "tm23",
        name: "smack down",
        gen: "V"
      }, {
        learnedat: "tm24",
        name: "thunderbolt",
        gen: "V"
      }, {
        learnedat: "tm25",
        name: "thunder",
        gen: "V"
      }, {
        learnedat: "tm26",
        name: "earthquake",
        gen: "V"
      }, {
        learnedat: "tm27",
        name: "return",
        gen: "V"
      }, {
        learnedat: "tm28",
        name: "dig",
        gen: "V"
      }, {
        learnedat: "tm30",
        name: "shadow ball",
        gen: "V"
      }, {
        learnedat: "tm31",
        name: "brick break",
        gen: "V"
      }, {
        learnedat: "tm32",
        name: "double team",
        gen: "V"
      }, {
        learnedat: "tm34",
        name: "sludge wave",
        gen: "V"
      }, {
        learnedat: "tm35",
        name: "flamethrower",
        gen: "V"
      }, {
        learnedat: "tm36",
        name: "sludge bomb",
        gen: "V"
      }, {
        learnedat: "tm37",
        name: "sandstorm",
        gen: "V"
      }, {
        learnedat: "tm38",
        name: "fire blast",
        gen: "V"
      }, {
        learnedat: "tm39",
        name: "rock tomb",
        gen: "V"
      }, {
        learnedat: "tm40",
        name: "aerial ace",
        gen: "V"
      }, {
        learnedat: "tm41",
        name: "torment",
        gen: "V"
      }, {
        learnedat: "tm42",
        name: "facade",
        gen: "V"
      }, {
        learnedat: "tm44",
        name: "rest",
        gen: "V"
      }, {
        learnedat: "tm45",
        name: "attract",
        gen: "V"
      }, {
        learnedat: "tm46",
        name: "thief",
        gen: "V"
      }, {
        learnedat: "tm48",
        name: "round",
        gen: "V"
      }, {
        learnedat: "tm49",
        name: "echoed voice",
        gen: "V"
      }, {
        learnedat: "tm52",
        name: "focus blast",
        gen: "V"
      }, {
        learnedat: "tm56",
        name: "fling",
        gen: "V"
      }, {
        learnedat: "tm59",
        name: "incinerate",
        gen: "V"
      }, {
        learnedat: "tm60",
        name: "quash",
        gen: "V"
      }, {
        learnedat: "tm65",
        name: "shadow claw",
        gen: "V"
      }, {
        learnedat: "tm68",
        name: "giga impact",
        gen: "V"
      }, {
        learnedat: "tm71",
        name: "stone edge",
        gen: "V"
      }, {
        learnedat: "tm78",
        name: "bulldoze",
        gen: "V"
      }, {
        learnedat: "tm80",
        name: "rock slide",
        gen: "V"
      }, {
        learnedat: "tm82",
        name: "dragon tail",
        gen: "V"
      }, {
        learnedat: "tm84",
        name: "poison jab",
        gen: "V"
      }, {
        learnedat: "tm87",
        name: "swagger",
        gen: "V"
      }, {
        learnedat: "tm90",
        name: "substitute",
        gen: "V"
      }, {
        learnedat: "tm94",
        name: "rock smash",
        gen: "V"
      }, {
        learnedat: "hm01",
        name: "cut",
        gen: "V"
      }, {
        learnedat: "hm03",
        name: "surf",
        gen: "V"
      }, {
        learnedat: "hm04",
        name: "strength",
        gen: "V"
      }],
      tutor: [],
      damages: {
        normal: "1",
        fire: "1",
        water: "2",
        electric: "0",
        grass: "1",
        ice: "2",
        fight: "0.5",
        poison: "0.25",
        ground: "2",
        flying: "1",
        psychic: "2",
        bug: "0.5",
        rock: "0.5",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "0",
          female: "100"
        },
        abilities: {
          normal: [
            "Poison Point",
            "Rivalry"
          ],
          hidden: [
            "Sheer Force"
          ]
        },
        classification: "drill pokemon",
        height: "4’03”",
        weight: "132.3",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "3 HP Point(s)"
        ],
        fleeflag: "125",
        entreeforestlevel: "16"
      }
    }
  }
];
