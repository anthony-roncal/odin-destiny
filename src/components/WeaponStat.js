import { React } from 'react';

const WeaponStat = ({ statName, value, showBar }) => {
    return (
        <>
            <span className='stat-name'>{statName}</span>
            {showBar && <div className='stat-bar'>
                <div className='stat-bar-value' style={{ width: `${value}%` }} />
            </div>}
            <p className='stat-value'>{value}</p>
        </>
    );
}

export default WeaponStat;