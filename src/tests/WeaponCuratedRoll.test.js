import React from "react";
import renderer from "react-test-renderer";
import WeaponCuratedRoll from "../components/WeaponCuratedRoll";

const mockData = [
    {
        "singleInitialItemData": {
            "displayProperties": {
                "description": "Rounds fired split into tracking cluster missiles upon detonation.",
                "name": "Wolfpack Rounds",
                "icon": "/common/destiny2_content/icons/9581a5329d9eff75cb770180cc644ced.png",
            }
        }
    },
    {
        "singleInitialItemData": {
            "displayProperties": {
                "description": "This weapon is optimized for an especially explosive payload.\n  •  Greatly increases blast radius\n  •  Slightly decreases handling speed\n  •  Slightly decreases projectile speed",
                "name": "Volatile Launch",
                "icon": "/common/destiny2_content/icons/d255c9140cf640cfc820f995d1c1e96a.png"
            }
        }
    },
    {
        "singleInitialItemData": {
            "displayProperties": {
                "description": "Reduces weight for faster reloads.\n  •  Greatly increases reload speed\n  •  Decreases stability",
                "name": "Alloy Casing",
                "icon": "/common/destiny2_content/icons/e02a542e5162c002112c21b6fdf2e86b.png"
            }
        }
    },
    {
        "singleInitialItemData": {
            "displayProperties": {
                "description": "Gain increased handling and reload speed when standing near allies. Firing this weapon also grants Wolfpack Rounds to nearby allies wielding non-Exotic Rocket Launchers.",
                "name": "Pack Hunter",
                "icon": "/common/destiny2_content/icons/5e8be152a38c4acd61b2a9e56671cc83.png"
            }
        }
    },
    {
        "singleInitialItemData": {
            "displayProperties": {
                "description": "This weapon is especially easy to grip.\n  •  Greatly increases handling speed",
                "name": "Short-Action Stock",
                "icon": "/common/destiny2_content/icons/47f90d3f25a517166933f2b4eb38e9aa.png"
            }
        }
    }
];

const BUNGIE_URL = 'https://www.bungie.net';
const onHoverMock = jest.fn();
const onBlurMock = jest.fn();
const onMouseMoveMock = jest.fn();


describe("Weapon Curated Roll component", () => {
    it("renders correct elements and data", () => {
        const tree = renderer.create(
            <WeaponCuratedRoll
                socketEntries={mockData}
                BUNGIE_URL={BUNGIE_URL}
                handlePerkHover={onHoverMock}
                handlePerkBlur={onBlurMock}
                handleMouseMove={onMouseMoveMock}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
