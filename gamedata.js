currentLocation="foyer";

player={
	"inventory" : {},
	"carrying" : []
}

game={
	"title" : "Survival",
	"home base" : "Sturdy Abandoned House"
}

rooms={
	"foyer" : {
		"type" : "room",
		"name" : "the ruined foyer",
		"exits": {
			"east": "living room"
		},
		"entrance text" : "You stand in the sad, rubble-strewn foyer of what must have at one time been a very nice house. You'd never been invited inside.<p>\"This,\" you think, almost hopefully, \"will have to do.\"",
		"title" : "@home base@"
	},

	"living room": {
		"type" : "room",
		"name" : "what must be the living room",
		"look" : "The town square, full of people and activities.",
		"exits": {
			"west"  : "foyer"
		},
		"changes" : [
			["rooms","foyer","entrance text","You stand in the sad, rubble-strewn foyer of what must have at one time been a very nice house."],
			["rooms","living room","name","the living room"],
			["rooms","living room","changes",[]]
		],
		"entrance text" : "You're in the living room. There's debris in here from the shelling, but it appears someone tried cleaning it up. They failed.",
		"items" : {
			"photo" : {
				"name" : "photograph of neighbor's family",
				"id" : "neighbor photo",
				"status" : "default",
				"messages" : {
						"take" : "You won't need that for anything.",
						"examine" : "You wipe some dirt off the broken glass and peer into the familiar faces of the family that lived next to you for years. They're gone now, to who knows where..."
				},
				"states" : {
					"default" : {
						"descriptor" : "A photo sits in a dingy frame on a nearby table."
					},
					"smash" : {
						"descriptor" : "The shattered remains of a picture frame are on the floor here.",
						"from" : {
							"default" : "You bash the frame against the table; its glass breaks into even more pieces and falls to the floor. You snap the frame in half and drop that nearby."
						}
					}
				}
			},
			"shovel" : {
				"name" : "shovel",
				"id" : "living room shovel",
				"status" : "default",
				"messages" : {
						"examine" : "A medium-sized shovel, light enough to carry around but heavy enough to complete most shovel-tasks."
				},
				"take" : {
					"default" : "You take the shovel. It's lighter than you expected it to be, and easy to carry."
				},
				"states" : {
					"default" : {
						"descriptor" : "A shovel leans against the couch."
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"photo" : ["picture","frame"]
			},
			"actions" : {
				"smash" : ["break","bash"]
			}
		},
		"title" : "@home base@"
	}

	/*




		"title" : "@hometown@ Town Square",
		"entrance text" : "You are in the @hometown@ town square, which is bustling with activity. All seems well.",
		"items" : {
			"pumpkin" : {
				"name" : "pumpkin",
				"status" : "default",
				"states" : {
					"default" : {
						"descriptor" : "A large pumpkin sits by the door."
					},
					"take" : {
						"descriptor" : "",
						"from" : {
							"default" : "You take the pumpkin."
						}
					},
					"smash" : {
						"descriptor" : "The gloppy remains of a smashed-up old pumpkin sit by the door.",
						"from" : {
							"default" : "You lift the pumpkin high over your head and slam it back down on the porch. It crumbles into little pumpkin chunklets."
						}
					}
				}
			}
		}
	},
	"copy room": {
		"type" : "room",
		"name" : "the front of the cider brewery",
		"look" : "The room where everybody makes their photocopies. Doesn't look like anyone's in there.",
		
		"exits": {
			"east" : "town square"
		},  
		
		"entrance text" : "The copy room - it's small, quiet, and smells faintly of ozone. Papers are strewn all over the floor. A poster hangs over the Xerox machine.",
		"actions" : {
			"inspect" : {
				"poster" : {
					"print" : "It is a black poster with bright, bold red lettering: \"DON'T MAKE COLOR COPIES UNLESS ABSOLUTELY NECESSARY.\""
				}
			}
		}
	} */
}