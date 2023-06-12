import { React } from 'react';

const WeaponPerkTooltip = ({ position, BUNGIE_URL, name, icon, slot, season, description, stats, perks, weaponName, objective }) => {
    return (
        <div className='weapon-perk-tooltip' style={{ left: `${position.left}px`, top: `${position.top}px` }}>
            <img src={icon} alt={name} />
            <div>
                <div className={slot === 'Exotic' ? 'tooltip-header exotic' : 'tooltip-header'}>
                    <h2>{name}</h2>
                    <h4>{slot}</h4>
                </div>
                <div className='tooltip-details'>
                    <span className='tooltip-season'>Added in S{season}</span>
                    <p>{description}</p>
                    {perks.length > 0 && <div className='tooltip-perk'>
                        <img src={`${BUNGIE_URL}${perks[0].perkData.displayProperties.icon}`} alt={perks[0].perkData.displayProperties.name}/>
                        <div>
                            <p className='tooltip-perk-name'>{perks[0].perkData.displayProperties.name}</p>
                            <p>{perks[0].perkData.displayProperties.description}</p>
                        </div>
                    </div>}
                    {stats.length > 0 && <div className='tooltip-stats'>
                        {stats.map(stat => {
                            return (
                                <div className='tooltip-stat'>
                                    <span className='tooltip-stat-name'>{stat.statTypeData.displayProperties.name}</span>
                                    <span>{weaponName === "Gjallarhorn" && stat.value/20}</span>
                                    <span>{weaponName !== "Gjallarhorn" && stat.value}</span>
                                </div>
                            );
                        })}
                    </div>}
                    {slot === 'Exotic' && <div>
                        <p className='tooltip-objective-label'>Objectives</p>
                        <div className='tooltip-objective'>
                            <p className='tooltip-objective-description'>{objective.progressDescription}</p>
                            <p className='tooltip-objective-value'>{objective.completionValue}</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default WeaponPerkTooltip;