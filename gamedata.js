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
		"name" : "the ruined foyer",
		"exits": {
			"east": "living room"
		},
		"entrance text" : "You stand in the sad, rubble-strewn foyer of what must have at one time been a very nice house. You'd never been invited inside.<p>\"This,\" you think, almost hopefully, \"will have to do.\"",
		"title" : "@home base@",
		"actions" : {
			"test" : {
				"menus" : {
					"move" : "testing"
				}
			}
		}
	},

	"living room": {
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
			},
			"pile" : {
				"name" : "pile of junk",
				"id" : "living room pile",
				"messages" : {
						"examine" : "It's a big mound of material from broken wall, caved-in ceiling and simple household trash. Some of it fell here, but much looks to have been piled on purpose.",
						"move" : "It'd take you ages to move it by hand. If only you had a tool..."
				},
				"states" : {
					"default" : {
						"descriptor" : "To the north, a huge pile of rubble blocks what looks like it might be a doorway."
					},
					"move" : {
						"descriptor" : "Trash and drywall is strewn around in front of the doorway.",
						"requires" : "shovel",
						"from" : {
							"default" : "You slowly push your way through the junk, tossing the little stuff aside and shoving the big pieces with your foot. Soon, the doorway is opened up."
						},
						"changes" : [
							["rooms","living room","exits","north","dining room"]
						]
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"photo" : ["picture","frame"],
				"pile" : ["trash","rubble"]
			},
			"actions" : {
				"smash" : ["break","bash"],
				"move" : [""]
			}
		},
		"title" : "@home base@"
	},
	"dining room" : {
		"type" : "room",
		"name" : "the dining room",
		"exits": {
			"south": "living room",
			"east" : "kitchen"
		},
		"entrance text" : "You're in the dining room. Faded floral wallpaper dangles from the walls.",
		"title" : "@home base@",
		"items" : {
			"table" : {
				"name" : "dining room table",
				"id" : "dining room table",
				"messages" : {
					"examine" : "A heavy wooden table, stained dark brown beneath a thin coating of dust and ash.",
					"take" : "It's a table. It's not going anywhere."
				},
				"states" : {
					"default" : {
						"descriptor" : "An ornately carved table sits in the middle of the room, its top gouged and pock-marked by the shelling."
					}
				}
			},
			"can" : {
				"name" : "can of food",
				"id" : "dining room can1",
				"messages" : {
						"examine" : "Bush's baked beans. The vegetarian variety."
				},
				"take" : {
					"default" : "You toss the can in your pack."
				},
				"states" : {
					"default" : {
						"descriptor" : "A can of beans is on the table."
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"can" : ["beans","food"]
			}
		}
	},
	"kitchen" : {
		"type" : "room",
		"name" : "the kitchen",
		"exits": {
			"west" : "dining room"
		},
		"entrance text" : "You're in the kitchen. The window is boarded up, so it's quite dark. You can make out the outline of a stove and a refrigerator in the darkness.",
		"alt text" : "You're in the kitchen. The window is boarded up, but a dim yellow light provides enough light to see. A stove and a fridge are pretty much the only appliances around - neither have their doors.",
		"title" : "@home base@",
		"items" : {
			"switch" : {
				"name" : "switch",
				"id" : "kitchen light switch",
				"messages" : {
					"examine" : "A regular old light switch, in the 'off' position. You can't tell if it's connected to anything.",
					"take" : "That's not how light switches work."
				},
				"states" : {
					"default" : {
						"descriptor" : "You see a light switch hanging from an electrical box near the door."
					},
					"flip" : {
						"descriptor" : "You see a light switch hanging from an electrical box near the door.",
						"from" : {
							"default" : "You gingerly flip the switch to the 'on' position. A sad, yellowing light in the ceiling flickers on weakly, but it helps.",
							"flip" : "You gingerly flip the switch to the 'on' position. A sad, yellowing light in the ceiling flickers on weakly, but it helps.",
							"other-flip" : "You flip the switch back into the 'off' position. The room goes dark."
						},
						"changes" : [
							["rooms","kitchen","buffer",{"reference" : ["rooms","kitchen","entrance text"]}],
							["rooms","kitchen","entrance text",{"reference" : ["rooms","kitchen","alt text"]}],
							["rooms","kitchen","alt text",{"reference" : ["rooms","kitchen","buffer"]}],

							["rooms","kitchen","buffer",{"reference" : ["rooms","kitchen","items","switch","states","flip","from","flip"]}],
							["rooms","kitchen","items","switch","states","flip","from","flip",{"reference" : ["rooms","kitchen","items","switch","states","flip","from","other-flip"]}],
							["rooms","kitchen","items","switch","states","flip","from","other-flip",{"reference" : ["rooms","kitchen","buffer"]}],
						]
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"switch" : ["light"]
			},
			"actions" : {
				"flip" : ["touch"]
			}
		}
	}
}

menus={
	"testing" : {
		"type" : "menu",
		"description" : "This is the test of the new menu thing!",
		"choices" : [
			{
				"choice" : "This is the first choice!",
				"response type" : "move",
				"destination" : "kitchen",
				"premessage" : "PREMESSAGES WORK!"
			}
		]
	}
}