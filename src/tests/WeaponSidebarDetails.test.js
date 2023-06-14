import React from "react";
import renderer from "react-test-renderer";
import WeaponSidebarDetails from "../components/WeaponSidebarDetails";

const mockData = {
    "defaultDamageTypeData": {
        "displayProperties": {
            "name": "Solar",
            "icon": "/common/destiny2_content/icons/DestinyDamageTypeDefinition_2a1773e10968f2d088b97c22b22bba9e.png"
        }
    },
    "equippingBlock": {
        "ammoTypeName": "Heavy"
    },
    "quality": {
        "versions": [
            {
                "powerCapData": {
                    "powerCap": 999990
                }
            }
        ],
    },
    "itemCategoryData": [
        {
            "displayProperties": {
                "name": "Power Weapon"
            }
        }
    ],
    "inventory": {
        "isInstanceItem": true,
    },
    "equippable": true,
    "hash": 1363886209
};

const BUNGIE_URL = 'https://www.bungie.net';

describe("Weapon Sidebar Details component", () => {
    it("renders correct elements and data", () => {
        const tree = renderer.create(
            <WeaponSidebarDetails
                damageIcon={`${BUNGIE_URL}${mockData.defaultDamageTypeData.displayProperties.icon}`}
                damageType={mockData.defaultDamageTypeData.displayProperties.name}
                isCraftable
                ammoType={mockData.equippingBlock.ammoTypeName}
                seasonNum={15}
                powerCap={mockData.quality.versions[0].powerCapData.powerCap}
                category={mockData.itemCategoryData[0].displayProperties.name}
                isInstanceItem={mockData.inventory.isInstanceItem}
                isEquippable={mockData.equippable}
                apiId={mockData.hash}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
