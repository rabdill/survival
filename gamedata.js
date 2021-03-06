currentLocation="foyer";

player={
	"inventory" : {},
	"carrying" : []
}

game={
	"title" : "Survival",
	"home base" : "Sturdy Abandoned House"
}

menus={}

rooms={
	"foyer" : {
		"name" : "the ruined foyer",
		"exits": {
			"east": ["living room"]
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
			"west"  : ["foyer"]
		},
		"changes" : [
			["rooms","foyer","entrance text","You stand in the sad, rubble-strewn foyer of what must have at one time been a very nice house."],
			["rooms","living room","name","the living room"],
			["rooms","living room","changes",[]]
		],
		"entrance text" : "You're in the living room. There's debris in here from the shelling; it appears someone tried cleaning it up. They failed.",
		"items" : {
			"photo" : {
				"name" : "photograph of neighbor's family",
				"id" : "neighbor photo",
				"states" : {
					"default" : {
						"descriptor" : "A photo sits in a dingy frame on a nearby table.",
						"messages" : {
							"take" : "You won't need that for anything.",
							"examine" : "You wipe some dirt off the broken glass and peer into the familiar faces of the family that lived next to you for years. They're gone now, to who knows where..."
						},
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
				"take" : {
					"default" : {"message" : "You take the shovel. It's lighter than you expected it to be, and easy to carry."}
				},
				"states" : {
					"default" : {
						"descriptor" : "A shovel leans against the couch.",
						"messages" : {
							"examine" : "A medium-sized shovel, light enough to carry around but heavy enough to complete most shovel-tasks."
						}
					}
				}
			},
			"pile" : {
				"name" : "pile of junk",
				"id" : "living room pile",
				"states" : {
					"default" : {
						"descriptor" : "To the north, a huge pile of rubble blocks what looks like it might be a doorway.",
						"messages" : {
							"examine" : "It's a big mound of material from broken wall, caved-in ceiling and simple household trash. Some of it fell here, but much looks to have been piled on purpose.",
							"move" : "It'd take you ages to move it by hand. If only you had a tool..."
						}
					},
					"move" : {
						"descriptor" : "Trash and drywall is strewn around in front of the doorway.",
						"requires" : {
							"item" : "shovel"
						},
						"from" : {
							"default" : "You slowly push your way through the junk, tossing the little stuff aside and shoving the big pieces with your foot. Soon, the doorway is opened up."
						},
						"changes" : [
							["rooms","living room","exits","north",["dining room"]]
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
		"look" : "It's the dining room!",
		"exits": {
			"south": ["living room"],
			"east" : ["kitchen"]
		},
		"entrance text" : "You're in the dining room. Faded floral wallpaper dangles from the walls -- except for the left wall, which has a boarded-up door.",
		"title" : "@home base@",
		"items" : {
			"table" : {
				"name" : "dining room table",
				"id" : "dining room table",
				"states" : {
					"default" : {
						"descriptor" : "An ornately carved table sits in the middle of the room, its top gouged and pock-marked by the shelling.",
						"messages" : {
							"examine" : "A heavy wooden table, stained dark brown beneath a thin coating of dust and ash.",
							"take" : "It's a table. It's not going anywhere."
						}
					}
				}
			},
			"wood" : {
				"name" : "piece of plywood",
				"id" : "dining room plywood",
				"take" : {
					"default" : {"message" : "You heft up the piece of plywood to take along."}
				},
				"states" : {
					"default" : {
						"descriptor" : "A wide piece of plywood is sitting in the corner.",
						"messages" : {
							"examine" : "About three feet long, and thick enough to make you wonder if you'd be able to afford it if you had to buy it somewhere."
						}
					}
				}
			},
			"can" : {
				"name" : "can of food",
				"id" : "dining room can1",
				"take" : {
					"default" : {"message" : "You toss the can in your pack."}
				},
				"states" : {
					"default" : {
						"descriptor" : "A can of beans is on the table.",
						"messages" : {
							"examine" : "Bush's baked beans. The vegetarian variety."
						}
					}
				}
			},
			"wallpaper" : {
				"name" : "wallpaper",
				"id" : "dining room wallpaper",
				"states" : {
					"default" : {
						"descriptor" : "",
						"messages" : {
							"examine" : "It's not outdated, so to speak, just beat up. Autumn rain isn't usually kind to exposed wallpaper."
						}
					}
				}
			},
			"door" : {
				"name" : "door",
				"id" : "small bedroom door",
				"states" : {
					"default" : {
						"descriptor" : "",
						"messages" : {
							"examine" : "Tons of boards and wood scraps have been piled on top of each other in front of what must be a door. Someone realllly didn't want people to be able to get in here -- and from the looks of it, someone else realllly wanted to get in. The wood is chipped and gouged from where someone tried to break through.",
							"open" : "You're not going to be able to get through this barricade. It's just too sturdy.",
							"go" : "You're not going to be able to get through this barricade. It's just too sturdy."
						}
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"can" : ["beans","food"],
				"wood" : ["plywood", "board"],
				"door" : ["west"]
			}
		}
	},
	"kitchen" : {
		"type" : "room",
		"name" : "the kitchen",
		"exits": {
			"west" : ["dining room"]
		},
		"entrance text" : "You're in the kitchen. The window is boarded up, so it's quite dark. You can make out the outline of a stove and a refrigerator in the darkness.",
		"alt text" : "You're in the kitchen. The window is boarded up, but a dim yellow light provides enough light to see. A stove and a fridge are pretty much the only appliances around - neither have their doors.",
		"title" : "@home base@",
		"items" : {
			"stairs" : {
				"name" : "stairs",
				"id" : "kitchen-stairs",
				"states" : {
					"default" : {
						"descriptor" : "",
						"messages" : {
							"examine" : "They look stable, for the most part, but there's a hefty gap right in the middle that's going to keep you from climbing up... for now.",
							"go" : "You try to head upstairs, but it doesn't take long for you to realize that the huge gap in the stairs is going to keep you from going up the steps in their current state.",
							"repair" : "It doesn't look tricky to repair, if you had something to bridge the gap..."
						}
					},
					"repair" : {
						"descriptor" : "",
						"requires" : {
							"item" : "wood",
							"consumed" : true
						},
						"from" : {
							"default" : "You lean one end of the plywood on the step and let it fall over the gap. It covers the gap perfectly."
						},
						"changes" : [
							["rooms","kitchen","exits","north",["top of steps","a staircase winding upstairs somewhere, patched by a hunk of plywood"]],
							["rooms","kitchen","items","wood", {"name" : "wood that's patching the steps","id" : "steps-wood","status" : "default","states" : {"default" : {"descriptor" : "","messages" : {"take" : {"message" : "You were clever enough to fix the steps, don't break 'em again."}}}}}]
						]
					}
				}
			},
			"switch" : {
				"name" : "switch",
				"id" : "kitchen light switch",
				"states" : {
					"default" : {
						"descriptor" : "You see a light switch hanging from an electrical box near the door.",
						"messages" : {
							"examine" : "A regular old light switch, in the 'off' position. You can't tell if it's connected to anything.",
							"take" : "That's not how light switches work."
						}
					},
					"flip" : {
						"descriptor" : "You see a light switch hanging from an electrical box near the door.",
						"messages" : {
							"examine" : "A regular old light switch.",
							"take" : "That's not how light switches work."
						},
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

							["rooms","kitchen","items","stairs","states","default","descriptor","To the north, a cramped, winding staircase leads up into... somewhere."]
						]
					}
				}
			},
			"stove" : {
				"name" : "stove",
				"id" : "stove",
				"states" : {
					"default" : {
						"descriptor" : "",
						"messages" : {
							"examine" : "A regular old gas stove... it would be more useful if there were any gas left. And if it had an oven door.",
							"take" : "It's a STOVE."
						}
					}
				}
			},
			"fridge" : {
				"name" : "fridge",
				"id" : "fridge",
				"states" : {
					"default" : {
						"descriptor" : "",
						"messages" : {
							"examine" : "It's either unplugged or broken -- either way, probably not a safe place to keep your yogurt. The door appears to have been removed -- and without the proper tools.",
							"take" : "You have enough problems without having to worry about lugging a FRIDGE around, don't you?"
						}
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"switch" : ["light"],
				"stairs" : ["north","steps"],
				"north" : ["up"],
				"fridge" : ["refridgerator","icebox"],
				"wood" : ["plywood", "board"]
			},
			"actions" : {
				"flip" : ["touch"],
				"repair" : ["fix","patch"]
			}
		}
	},
	"top of steps" : {
		"name" : "the top of a busted-up staircase",
		"exits" : {
			"south" : ["kitchen","a staircase winding downward to the kitchen, patched by a hunk of plywood"],
			"west" : ["upstairs hallway"]
		},
		"title" : "@home base@",
		"entrance text" : "You're at the top of the steps. You can hear the house's wasted skeleton creaking all around you.",
		"items" : {
			"wood" : {
				"name" : "wood that's patching the steps",
				"id" : "steps-wood",
				"states" : {
					"default" : {
						"descriptor" : "",
						"messages" : {
							"take" : "If you move that now, how will you get down?"
						}
					}
				}
			}
		},
		"synonyms" : {
			"items" : {
				"south" : ["down"]
			}
		}
	},
	"upstairs hallway" : {
		"name" : "a partially caved-in hallway",
		"exits" : {
			"east" : ["top of steps"],
			"south" : ["master bedroom","a bedroom, probably"],
			"west" : ["upstairs bathroom"]
		},
		"title" : "@home base@",
		"entrance text" : "You crouch and do a kind of crab-walk down the hall."
	},
	"master bedroom" : {
		"name" : "bedroom",
		"exits" : {
			"north" : ["upstairs hallway"]
		},
		"title" : "@home base@",
		"entrance text" : "You push some hanging wires out of the way and enter the house's master bedroom. Save for the exploded house surrounding it, it still appears eerily lived-in: It's hard to remember it's an abandoned house when the bed is made.",
		"changes" : [
			["rooms","upstairs hallway","exits","south",["master bedroom","the master bedroom"]]
		]
	},
	"upstairs bathroom" : {
		"name" : "a bathroom",
		"exits" : {
			"east" : ["top of steps"],
			"south" : ["master bedroom","a bedroom, probably"]
		},
		"title" : "@home base@",
		"entrance text" : "You're in a dark old bathroom. The toilet is all bashed up, but the fancy old tub looks relatively untouched. Its brass claw-feet shine dimly in the light coming in the window.",
		"items" : {
			"book" : {
				"name" : "book with compartment",
				"id" : "hidey-book",
				"states" : {
					"default" : {
						"descriptor" : "A book sits on top of the toilet.",
						"messages" : {
							"examine" : "You pick up the book and peer at the cover. It's a copy of 'Catch-22,' but the title isn't what grabs your attention -- despite how hefty it looks, it seems weirdly lightweight.",
							"take" : "You grab the book to put it in your pack, but before you do, you can't help noticing a bizarre difference between how large it is and how little it weighs..."
						}
					},
					"open" : {
						"descriptor" : "A hollowed-out copy of 'Catch-22' is on the ground here, opened up to reveal a small metal key sitting in its nook.",
						"from" : {
							"default" : "You open the book, expecting to see the familiar ravings of Yossarian and company. Instead, however, you discover that the pages of the book have been hollowed out to form a small, hidden box. Inside the box is a small key.",
							"open" : "It's already open."
						},
						"messages" : {
							"examine" : "'Catch-22,' except instead of a timeless war story, the book is a hollowed-out compartment. A small key sits inside.",
							"take" : "You don't need the whole book, but that key might come in handy."
						},
						"changes" : [
							["rooms","master bedroom","items","key",
								{
									"name" : "small key",
									"id" : "book-from-key",
									"status" : "default",
									"states" : {
										"default" : {
											"descriptor" : "keykeykey",
											"messages" : {
												"examine" : "It's made of metal and seems, for reasons you can't quite put your finger on, to be quite old. It appears to be too small to fit a door or car."
											}
										}
									},
									"take" : {
										"default" : {
											"message" : "You put the key in your pocket.",
											"changes" : [
												["rooms","master bedroom","items","book","states","open","messages","take","You don't need to take that. The good parts got chopped out anyway."],
												["rooms","master bedroom","items","book","states","open","messages","examine","'Catch-22,' except instead of a timeless war story, the book is a hollowed-out compartment. A key used to be in here."]
											]
										}
									}
								}
							]
						]
					}
				}
			}
		}
	},
}