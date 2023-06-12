import { React } from 'react';

const WeaponCuratedRoll = ({ socketEntries, BUNGIE_URL, handlePerkHover, handlePerkBlur, handleMouseMove }) => {
    return (
        <>
            <h3 className='section-header'>Curated Roll</h3>
            <p className='curated-roll-info'> Not all curated rolls actually drop in-game.</p>
            <ul className='curated-roll-perks'>
                <li onMouseEnter={handlePerkHover} onMouseLeave={handlePerkBlur} onMouseMove={handleMouseMove} data-perkindex={0}>
                    <img className='curated-roll-perk perk' 
                        src={`${BUNGIE_URL}${socketEntries[0].singleInitialItemData.displayProperties.icon}`}
                        alt={`${socketEntries[0].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li onMouseEnter={handlePerkHover} onMouseLeave={handlePerkBlur} onMouseMove={handleMouseMove} data-perkindex={1}>
                    <img className='curated-roll-perk perk' 
                        src={`${BUNGIE_URL}${socketEntries[1].singleInitialItemData.displayProperties.icon}`}
                        alt={`${socketEntries[1].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li onMouseEnter={handlePerkHover} onMouseLeave={handlePerkBlur} onMouseMove={handleMouseMove} data-perkindex={2}>
                    <img className='curated-roll-perk perk' 
                        src={`${BUNGIE_URL}${socketEntries[2].singleInitialItemData.displayProperties.icon}`}
                        alt={`${socketEntries[2].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li onMouseEnter={handlePerkHover} onMouseLeave={handlePerkBlur} onMouseMove={handleMouseMove} data-perkindex={3}>
                    <img className='curated-roll-perk perk' 
                        src={`${BUNGIE_URL}${socketEntries[3].singleInitialItemData.displayProperties.icon}`}
                        alt={`${socketEntries[3].singleInitialItemData.displayProperties.name}`} />
                </li>
                <li onMouseEnter={handlePerkHover} onMouseLeave={handlePerkBlur} onMouseMove={handleMouseMove} data-perkindex={4}>
                    <img className='curated-roll-perk perk' 
                        src={`${BUNGIE_URL}${socketEntries[4].singleInitialItemData.displayProperties.icon}`}
                        alt={`${socketEntries[4].singleInitialItemData.displayProperties.name}`} />
                </li>
            </ul>
        </>
    );
}

export default WeaponCuratedRoll;