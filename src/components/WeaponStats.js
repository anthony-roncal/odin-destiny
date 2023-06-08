import { React } from 'react';
import WeaponStat from './WeaponStat';

const WeaponStats = ({ weapon }) => {
    return (
        <>
            <h3 className='stats-header'>Stats</h3>
            <div className='stats-container'>
                <ul className='stats-basic'>
                    <li>
                        <WeaponStat statName={'Blast Radius'} value={weapon.stats.stats['3614673599'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Velocity'} value={weapon.stats.stats['2523465841'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Stability'} value={weapon.stats.stats['155624089'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Handling'} value={weapon.stats.stats['943549884'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Reload Speed'} value={weapon.stats.stats['4188031367'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Reload Time'} value={'3.5s'} showBar={false} />
                    </li>
                    <li>
                        <WeaponStat statName={'Aim Assistance'} value={weapon.stats.stats['1345609583'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Inventory Size'} value={weapon.stats.stats['1931675084'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Zoom'} value={weapon.stats.stats['3555269338'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Airborne Effectiveness'} value={weapon.stats.stats['2714457168'].value} showBar={true} />
                    </li>
                    <li>
                        <WeaponStat statName={'Recoil Direction'} value={weapon.stats.stats['2715839340'].value} showBar={false} />
                    </li>
                    <li>
                        <WeaponStat statName={'Rounds Per Minute'} value={weapon.stats.stats['4284893193'].value} showBar={false} />
                    </li>
                    <li>
                        <WeaponStat statName={'Magazine'} value={weapon.stats.stats['3871231066'].value} showBar={false} />
                    </li>
                </ul>
                <div>
                    <h4>Perks</h4>
                    
                </div>
            </div>
        </>
    );
}

export default WeaponStats;