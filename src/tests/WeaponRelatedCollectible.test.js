import React from "react";
import renderer from "react-test-renderer";
import WeaponRelatedCollectible from "../components/WeaponRelatedCollectible";

const mockData = {
    "displayProperties": {
        "description": "",
        "name": "Gjallarhorn",
        "icon": "/common/destiny2_content/icons/b62083eed6a4708e581fc9a061bcc8e9.jpg",
        "hasIcon": true
    },
    "collectibleData": {
        "sourceString": "Source: \"And Out Fly the Wolves\" Quest"
    }
};

const BUNGIE_URL = 'https://www.bungie.net';

describe("Weapon Related Collectible component", () => {
    it("renders correct elements and data", () => {
        const tree = renderer.create(
            <WeaponRelatedCollectible
                icon={`${BUNGIE_URL}${mockData.displayProperties.icon}`}
                name={mockData.displayProperties.name}
                source={mockData.collectibleData.sourceString}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
