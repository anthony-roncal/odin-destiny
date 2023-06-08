import { React, useState } from 'react';
import '../styles/WeaponDetails.css';
import WeaponTitleCard from './WeaponTitleCard';
import WeaponStats from './WeaponStats';

const WeaponDetails = () => {
    const BUNGIE_URL = 'https://www.bungie.net';
    const [weapon, setWeapon] = useState({
        "displayProperties": {
            "description": "",
            "name": "Gjallarhorn",
            "icon": "/common/destiny2_content/icons/b62083eed6a4708e581fc9a061bcc8e9.jpg",
            "hasIcon": true
        },
        "tooltipNotifications": [],
        "collectibleHash": 4027219968,
        "collectibleData": {
            "displayProperties": {
                "description": "",
                "name": "Gjallarhorn",
                "icon": "/common/destiny2_content/icons/44c179be9cb72b37f6fcb0b775c8d6fa.jpg",
                "hasIcon": true
            },
            "scope": 0,
            "sourceString": "Source: \"And Out Fly the Wolves\" Quest",
            "sourceHash": 2763252588,
            "itemHash": 1363886209,
            "acquisitionInfo": {
                "acquireMaterialRequirementHash": 1920773870,
                "runOnlyAcquisitionRewardSite": false
            },
            "stateInfo": {
                "requirements": {
                    "entitlementUnavailableMessage": ""
                }
            },
            "presentationNodeType": 2,
            "traitIds": [],
            "traitHashes": [],
            "parentNodeHashes": [
                1139971093
            ],
            "parentNodeData": {
                "displayProperties": {
                    "description": "",
                    "name": "Power",
                    "hasIcon": false
                }
            },
            "hash": 4027219968,
            "index": 3407,
            "redacted": false,
            "blacklisted": false
        },
        "iconWatermark": "/common/destiny2_content/icons/671a19eca92ad9dcf39d4e9c92fcdf75.png",
        "backgroundColor": {
            "red": 0,
            "green": 0,
            "blue": 0,
            "alpha": 0
        },
        "screenshot": "/common/destiny2_content/screenshots/1363886209.jpg",
        "itemTypeDisplayName": "Rocket Launcher",
        "flavorText": "“If there is beauty in destruction, why not also in its delivery?” — Feizel Crux",
        "uiItemDisplayStyle": "",
        "itemTypeAndTierDisplayName": "Exotic Rocket Launcher",
        "displaySource": "",
        "action": {
            "verbName": "Dismantle",
            "verbDescription": "",
            "isPositive": false,
            "requiredCooldownSeconds": 0,
            "requiredItems": [],
            "progressionRewards": [],
            "actionTypeLabel": "shard",
            "rewardSheetHash": 0,
            "rewardItemHash": 0,
            "rewardSiteHash": 0,
            "requiredCooldownHash": 0,
            "deleteOnAction": true,
            "consumeEntireStack": false,
            "useOnAcquire": false
        },
        "inventory": {
            "maxStackSize": 1,
            "bucketTypeHash": 953998645,
            "recoveryBucketTypeHash": 215593132,
            "tierTypeHash": 2759499571,
            "isInstanceItem": true,
            "nonTransferrableOriginal": false,
            "tierTypeName": "Exotic",
            "tierType": 6,
            "expirationTooltip": "",
            "expiredInActivityMessage": "",
            "expiredInOrbitMessage": "",
            "suppressExpirationWhenObjectivesComplete": true
        },
        "stats": {
            "disablePrimaryStatDisplay": false,
            "statGroupHash": 3658346844,
            "stats": {
                "155624089": {
                    "statHash": 155624089,
                    "value": 64,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "943549884": {
                    "statHash": 943549884,
                    "value": 66,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "1345609583": {
                    "statHash": 1345609583,
                    "value": 76,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "1480404414": {
                    "statHash": 1480404414,
                    "value": 0,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "1885944937": {
                    "statHash": 1885944937,
                    "value": 0,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "1931675084": {
                    "statHash": 1931675084,
                    "value": 50,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "1935470627": {
                    "statHash": 1935470627,
                    "value": 0,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "2523465841": {
                    "statHash": 2523465841,
                    "value": 45,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "2714457168": {
                    "statHash": 2714457168,
                    "value": 6,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "2715839340": {
                    "statHash": 2715839340,
                    "value": 49,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "3555269338": {
                    "statHash": 3555269338,
                    "value": 20,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "3614673599": {
                    "statHash": 3614673599,
                    "value": 90,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "3871231066": {
                    "statHash": 3871231066,
                    "value": 1,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "4188031367": {
                    "statHash": 4188031367,
                    "value": 37,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                },
                "4284893193": {
                    "statHash": 4284893193,
                    "value": 15,
                    "minimum": 0,
                    "maximum": 0,
                    "displayMaximum": 100
                }
            },
            "hasDisplayableStats": true,
            "primaryBaseStatHash": 1480404414
        },
        "equippingBlock": {
            "uniqueLabel": "exotic_weapon",
            "uniqueLabelHash": 4017842899,
            "equipmentSlotTypeHash": 953998645,
            "attributes": 0,
            "equippingSoundHash": 0,
            "hornSoundHash": 0,
            "ammoType": 3,
            "displayStrings": [
                ""
            ]
        },
        "translationBlock": {
            "weaponPatternHash": 1363886209,
            "defaultDyes": [
                {
                    "channelHash": 1667433279,
                    "dyeHash": 404016555
                },
                {
                    "channelHash": 1667433278,
                    "dyeHash": 404016554
                },
                {
                    "channelHash": 1667433277,
                    "dyeHash": 404016553
                }
            ],
            "lockedDyes": [],
            "customDyes": [],
            "arrangements": [
                {
                    "classHash": 0,
                    "artArrangementHash": 1363886209
                }
            ],
            "hasGeometry": true
        },
        "preview": {
            "screenStyle": "screen_style_sockets",
            "previewVendorHash": 0,
            "previewActionString": ""
        },
        "quality": {
            "itemLevels": [],
            "qualityLevel": 0,
            "infusionCategoryName": "2865487836",
            "infusionCategoryHash": 2865487836,
            "infusionCategoryHashes": [
                2865487836
            ],
            "progressionLevelRequirementHash": 492032699,
            "currentVersion": 0,
            "versions": [
                {
                    "powerCapHash": 2759499571
                }
            ],
            "displayVersionWatermarkIcons": [
                "/common/destiny2_content/icons/671a19eca92ad9dcf39d4e9c92fcdf75.png"
            ]
        },
        "acquireRewardSiteHash": 0,
        "acquireUnlockHash": 0,
        "sockets": {
            "detail": "Details",
            "socketEntries": [
                {
                    "socketTypeHash": 3956125808,
                    "singleInitialItemHash": 2962361451,
                    "singleInitialItemData": {
                        "displayProperties": {
                            "description": "Rounds fired split into tracking cluster missiles upon detonation.",
                            "name": "Wolfpack Rounds",
                            "icon": "/common/destiny2_content/icons/9581a5329d9eff75cb770180cc644ced.png",
                        },
                        "perks": [
                            {
                                "requirementDisplayString": "",
                                "perkHash": 2447763556,
                                "perkData": {
                                    "displayProperties": {
                                        "description": "Creates tracking cluster missiles on impact.",
                                        "name": "Wolfpack Rounds",
                                        "icon": "/common/destiny2_content/icons/9581a5329d9eff75cb770180cc644ced.png",
                                        "hasIcon": true
                                    },
                                    "isDisplayable": true,
                                    "damageType": 0,
                                    "hash": 2447763556,
                                    "index": 2527,
                                    "redacted": false,
                                    "blacklisted": false
                                },
                                "perkVisibility": 0
                            },
                            {
                                "requirementDisplayString": "",
                                "perkHash": 3620970280,
                                "perkVisibility": 0
                            }
                        ]
                    },
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 6,
                    "reusablePlugSetHash": 1026,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 1656112293,
                    "singleInitialItemHash": 1478423395,
                    "singleInitialItemData": {
                        "displayProperties": {
                            "description": "This weapon is optimized for an especially explosive payload.\n  •  Greatly increases blast radius\n  •  Slightly decreases handling speed\n  •  Slightly decreases projectile speed",
                            "name": "Volatile Launch",
                            "icon": "/common/destiny2_content/icons/d255c9140cf640cfc820f995d1c1e96a.png"
                        }
                    },
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 6,
                    "reusablePlugSetHash": 277,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 4246926293,
                    "singleInitialItemHash": 2985827016,
                    "singleInitialItemData": {
                        "displayProperties": {
                            "description": "Reduces weight for faster reloads.\n  •  Greatly increases reload speed\n  •  Decreases stability",
                            "name": "Alloy Casing",
                            "icon": "/common/destiny2_content/icons/e02a542e5162c002112c21b6fdf2e86b.png"
                        }
                    },
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 6,
                    "reusablePlugSetHash": 894,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 2614797986,
                    "singleInitialItemHash": 3874977694,
                    "singleInitialItemData": {
                        "displayProperties": {
                            "description": "Gain increased handling and reload speed when standing near allies. Firing this weapon also grants Wolfpack Rounds to nearby allies wielding non-Exotic Rocket Launchers.",
                            "name": "Pack Hunter",
                            "icon": "/common/destiny2_content/icons/5e8be152a38c4acd61b2a9e56671cc83.png"
                        }
                    },
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 6,
                    "reusablePlugSetHash": 1027,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 2575784089,
                    "singleInitialItemHash": 1067908860,
                    "singleInitialItemData": {
                        "displayProperties": {
                            "description": "This weapon is especially easy to grip.\n  •  Greatly increases handling speed",
                            "name": "Short-Action Stock",
                            "icon": "/common/destiny2_content/icons/47f90d3f25a517166933f2b4eb38e9aa.png"
                        }
                    },
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 6,
                    "reusablePlugSetHash": 274,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 1231208388,
                    "singleInitialItemHash": 0,
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 1,
                    "overridesUiAppearance": false,
                    "defaultVisible": false
                },
                {
                    "socketTypeHash": 1706683771,
                    "singleInitialItemHash": 2931483505,
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 7,
                    "reusablePlugSetHash": 1028,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 0,
                    "singleInitialItemHash": 0,
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 1,
                    "overridesUiAppearance": false,
                    "defaultVisible": false
                },
                {
                    "socketTypeHash": 0,
                    "singleInitialItemHash": 0,
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 1,
                    "overridesUiAppearance": false,
                    "defaultVisible": false
                },
                {
                    "socketTypeHash": 1282012138,
                    "singleInitialItemHash": 2240097604,
                    "reusablePlugItems": [],
                    "preventInitializationOnVendorPurchase": true,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 6,
                    "reusablePlugSetHash": 7,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                },
                {
                    "socketTypeHash": 708652038,
                    "singleInitialItemHash": 1498917124,
                    "reusablePlugItems": [
                        {
                            "plugItemHash": 2526801077,
                            "plugItemData": {
                                "displayProperties": {
                                    "description": "Upgrades this weapon to a Masterwork. Once upgraded, the weapon will obtain enhanced capabilities, such as increased stats and/or additional perks.\n\nDefeat targets using this weapon to unlock this upgrade.",
                                    "name": "Gjallarhorn Catalyst",
                                    "icon": "/common/destiny2_content/icons/cb7b28517f147274efe68112a637bc94.jpg"
                                },
                                "objectives": {
                                    "objectiveHashes": [
                                        56878078
                                    ],
                                    "objectiveData": {
                                        "completionValue": 400,
                                        "progressDescription": "Targets defeated",
                                    }
                                }
                            }
                        }
                    ],
                    "preventInitializationOnVendorPurchase": false,
                    "preventInitializationWhenVersioning": false,
                    "hidePerksInItemTooltip": false,
                    "plugSources": 3,
                    "overridesUiAppearance": false,
                    "defaultVisible": true
                }
            ],
            "intrinsicSockets": [
                {
                    "plugItemHash": 2589185654,
                    "socketTypeHash": 2882625187,
                    "defaultVisible": true
                }
            ],
            "socketCategories": [
                {
                    "socketCategoryHash": 3956125808,
                    "socketIndexes": [
                        0
                    ]
                },
                {
                    "socketCategoryHash": 4241085061,
                    "socketIndexes": [
                        1,
                        2,
                        3,
                        4,
                        9
                    ]
                },
                {
                    "socketCategoryHash": 2685412949,
                    "socketIndexes": [
                        5,
                        10
                    ]
                },
                {
                    "socketCategoryHash": 2048875504,
                    "socketIndexes": [
                        6
                    ]
                }
            ]
        },
        "talentGrid": {
            "talentGridHash": 521135891,
            "itemDetailString": "Details",
            "hudDamageType": 1
        },
        "investmentStats": [
            {
                "statTypeHash": 1480404414,
                "value": 0,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 1935470627,
                "value": 0,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 1885944937,
                "value": 0,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 3555269338,
                "value": 20,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 4284893193,
                "value": 40,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 3614673599,
                "value": 90,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 2523465841,
                "value": 45,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 155624089,
                "value": 64,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 3871231066,
                "value": 20,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 4188031367,
                "value": 37,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 1931675084,
                "value": 50,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 943549884,
                "value": 66,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 1345609583,
                "value": 76,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 2715839340,
                "value": 49,
                "isConditionallyActive": false
            },
            {
                "statTypeHash": 2714457168,
                "value": 6,
                "isConditionallyActive": false
            }
        ],
        "perks": [
            {
                "requirementDisplayString": "",
                "perkHash": 3486450016,
                "perkVisibility": 0
            }
        ],
        "loreHash": 1363886209,
        "loreData": {
            "displayProperties": {
                "description": "Randy finally reaches the Tower. It was a long road from the Cosmodrome, but Shaw Han had given him some good directions. His ship had only exploded twice on the trip from Old Russia, and while he defended his Ghost's second (and much better) repair job, he even found some loot!\n\nAs he materializes on the receiving pad of the Tower, a gathering horde of Humans and Guardians of all \"ages\" gather around a singular figure deep in the crowd. Randy can feel an almost mythic aura—exotic, even—radiating from the figure. He jabs his scuffed elbows through the crowd to get a clear look. When he finally breaks through, he understands the draw: the Guardian. They stand, one leg propped up on the Tower railing. Randy's Ghost talked about this person a few times before. Some kind of hero.\n\nBig deal. Randy was a hero too.\n\n\"Amazing,\" a Titan says about the weapon in the Guardian's hands. Randy looks at the Titan wearing a strange chainmail visor.\n\n\"It's just a rocket launcher. I got one of those in Old Russia the other day,\" Randy brags proudly, unholstering a launcher.\n\nHis Ghost, Dandy, nudges him. \"Now listen here, berry blue,\" Dandy says. \"What you are looking at in the Guardian's hands is a top-of-the-line wolfpack deployment device. Each firing of which unleashes hell in the form of a swarm of homing micro rockets. I've told you a flock of crows is called a murder? Well, they really should've reserved the name for this swarm instead.\"\n\nRandy holds up his Bad Omens. \"I can put a tracking module on this.\" Dandy chuckles. \"I guess.\"\n\nRandy looks at the Bad Omens. His pride turns into frustration at the mediocrity of his equipment. In a fit of anger, he heaves the launcher over the Guardian's head and over the Tower railing.\n\nThe Guardian pivots and drops to a solid stance. They shoulder and fire off the Gjallarhorn like a volcanic eruption, blowing the Bad Omens to smithereens. Micro tracking rockets hunt down and turn each piece of falling debris to fireworks before they hit the ground. The acrid-sweet smell of burning fuel hangs in the air.\n\nRandy's jaw drops.\n\nThe Guardian steps forward and places the Gjallarhorn into Randy's hands with a smile.\n\n\"Start your legend with this instead.\"",
                "name": "Gjallarhorn",
                "hasIcon": false
            }
        },
        "summaryItemHash": 2673424576,
        "allowActions": true,
        "doesPostmasterPullHaveSideEffects": false,
        "nonTransferrable": false,
        "itemCategoryHashes": [
            4,
            1,
            13
        ],
        "specialItemType": 0,
        "itemType": 3,
        "itemSubType": 10,
        "classType": 3,
        "breakerType": 0,
        "equippable": true,
        "damageTypeHashes": [
            1847026933
        ],
        "damageTypes": [
            3
        ],
        "defaultDamageType": 3,
        "defaultDamageTypeHash": 1847026933,
        "defaultDamageTypeData": {
            "displayProperties": {
                "description": "This deals Solar damage.",
                "name": "Solar",
                "icon": "/common/destiny2_content/icons/DestinyDamageTypeDefinition_2a1773e10968f2d088b97c22b22bba9e.png",
                "hasIcon": true
            },
            "transparentIconPath": "/img/destiny_content/damage_types/destiny2/thermal_trans.png",
            "showIcon": true,
            "enumValue": 3,
            "color": {
                "red": 242,
                "green": 114,
                "blue": 27,
                "alpha": 255
            },
            "hash": 1847026933,
            "index": 2,
            "redacted": false,
            "blacklisted": false
        },
        "isWrapper": false,
        "traitIds": [
            "item.weapon.rocket_launcher"
        ],
        "traitHashes": [
            3925016055
        ],
        "hash": 1363886209,
        "index": 11438,
        "redacted": false,
        "blacklisted": false
    });

    return (
        <div>
            <div className='weapon-header'>
                <WeaponTitleCard
                    icon={`${BUNGIE_URL}${weapon.displayProperties.icon}`}
                    name={weapon.displayProperties.name}
                    tier={weapon.inventory.tierTypeName}
                    damageTypeIcon={`${BUNGIE_URL}${weapon.defaultDamageTypeData.displayProperties.icon}`}
                    inventorySlot={weapon.collectibleData.parentNodeData.displayProperties.name}
                    weaponType={weapon.itemTypeDisplayName}
                    flavorText={weapon.flavorText}
                    source={weapon.collectibleData.sourceString}
                />
            </div>
            <div className='weapon-info-container'>
                <div className='weapon-info-content'>
                    <WeaponStats weapon={weapon} />
                </div>
                <div className='weapon-info-sidebar'>
                    <img src={`${BUNGIE_URL}${weapon.screenshot}`} alt='screenshot' />
                </div>
            </div>
        </div>
    );
}

export default WeaponDetails;