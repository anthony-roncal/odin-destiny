import { React } from 'react';

const WeaponCuratedRoll = ({ weapon, BUNGIE_URL }) => {
    return (
        <>
            <h3 className='section-header'>Curated Roll</h3>
            <ul className='curated-roll-perks'>
                <li>
                    <img className='curated-roll-perk'
                        src={`${BUNGIE_URL}${weapon.sockets.socketEntries[0].singleInitialItemData.displayProperties.icon}`}
                        alt={`${weapon.sockets.socketEntries[0].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li>
                    <img className='curated-roll-perk'
                        src={`${BUNGIE_URL}${weapon.sockets.socketEntries[1].singleInitialItemData.displayProperties.icon}`}
                        alt={`${weapon.sockets.socketEntries[1].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li>
                    <img className='curated-roll-perk'
                        src={`${BUNGIE_URL}${weapon.sockets.socketEntries[2].singleInitialItemData.displayProperties.icon}`}
                        alt={`${weapon.sockets.socketEntries[2].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li>
                    <img className='curated-roll-perk'
                        src={`${BUNGIE_URL}${weapon.sockets.socketEntries[3].singleInitialItemData.displayProperties.icon}`}
                        alt={`${weapon.sockets.socketEntries[3].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li>
                    <img className='curated-roll-perk'
                        src={`${BUNGIE_URL}${weapon.sockets.socketEntries[4].singleInitialItemData.displayProperties.icon}`}
                        alt={`${weapon.sockets.socketEntries[4].singleInitialItemData.displayProperties.name}`} />
                </li>
            </ul>
        </>
    );
}

export default WeaponCuratedRoll;