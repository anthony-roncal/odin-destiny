import { React } from 'react';

const WeaponSidebarDetails = (
    {
        damageIcon,
        damageType,
        isCraftable,
        ammoType,
        seasonNum,
        powerCap,
        category,
        isInstanceItem,
        isEquippable,
        apiId
    }) => {
    return (
        <div className='sidebar-details'>
            <ul>
                <li>Deals <img src={`${damageIcon}`} alt={damageType} className='damage-type-icon' /> <span className={`damage-type-${damageType.toLowerCase()}`}>{damageType.toUpperCase()}</span> damage</li>
                <li>{!isCraftable && 'Not'} Craftable</li>
                <li>Uses <span className={`ammo-type-${ammoType.toLowerCase()}`}>{ammoType.toUpperCase()}</span> ammo</li>
                <li>Introduced in <span className='season'>Season {seasonNum}</span></li>
                <li>
                    Current Drops
                    <ul>
                        <li>
                            {powerCap === 999990 && 'No Power Cap'}
                            {powerCap !== 999990 && `Power Cap: ${powerCap}`}
                        </li>
                    </ul>
                </li>
                <li>{category}</li>
                {isInstanceItem && <li>Instance Item</li>}
                <li>
                    {isEquippable && `Equippable`}
                    {!isEquippable && `Can't be Equipped`}
                </li>
                <li>API ID: {apiId}</li>
            </ul>
        </div>
    );
}

export default WeaponSidebarDetails;