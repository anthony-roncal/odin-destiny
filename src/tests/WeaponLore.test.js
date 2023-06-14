import React from "react";
import renderer from "react-test-renderer";
import WeaponLore from "../components/WeaponLore";

const mockData = {
    "loreData": {
        "displayProperties": {
            "description": "Randy finally reaches the Tower. It was a long road from the Cosmodrome, but Shaw Han had given him some good directions. His ship had only exploded twice on the trip from Old Russia, and while he defended his Ghost's second (and much better) repair job, he even found some loot!\n\nAs he materializes on the receiving pad of the Tower, a gathering horde of Humans and Guardians of all \"ages\" gather around a singular figure deep in the crowd. Randy can feel an almost mythic aura—exotic, even—radiating from the figure. He jabs his scuffed elbows through the crowd to get a clear look. When he finally breaks through, he understands the draw: the Guardian. They stand, one leg propped up on the Tower railing. Randy's Ghost talked about this person a few times before. Some kind of hero.\n\nBig deal. Randy was a hero too.\n\n\"Amazing,\" a Titan says about the weapon in the Guardian's hands. Randy looks at the Titan wearing a strange chainmail visor.\n\n\"It's just a rocket launcher. I got one of those in Old Russia the other day,\" Randy brags proudly, unholstering a launcher.\n\nHis Ghost, Dandy, nudges him. \"Now listen here, berry blue,\" Dandy says. \"What you are looking at in the Guardian's hands is a top-of-the-line wolfpack deployment device. Each firing of which unleashes hell in the form of a swarm of homing micro rockets. I've told you a flock of crows is called a murder? Well, they really should've reserved the name for this swarm instead.\"\n\nRandy holds up his Bad Omens. \"I can put a tracking module on this.\" Dandy chuckles. \"I guess.\"\n\nRandy looks at the Bad Omens. His pride turns into frustration at the mediocrity of his equipment. In a fit of anger, he heaves the launcher over the Guardian's head and over the Tower railing.\n\nThe Guardian pivots and drops to a solid stance. They shoulder and fire off the Gjallarhorn like a volcanic eruption, blowing the Bad Omens to smithereens. Micro tracking rockets hunt down and turn each piece of falling debris to fireworks before they hit the ground. The acrid-sweet smell of burning fuel hangs in the air.\n\nRandy's jaw drops.\n\nThe Guardian steps forward and places the Gjallarhorn into Randy's hands with a smile.\n\n\"Start your legend with this instead.\"",
            "name": "Gjallarhorn",
            "hasIcon": false
        },
        "subtitle": "“If there is beauty in destruction, why not also in its delivery?” — Feizel Crux"
    }
};

describe("Weapon Lore component", () => {
    it("renders correct elements and data", () => {
        const tree = renderer.create(
            <WeaponLore
                loreData={mockData.loreData}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
