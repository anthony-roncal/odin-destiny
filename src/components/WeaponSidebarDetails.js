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
    }
) => {
    return (
        <ul className='sidebar-details'>
            <li>Deals <img src={`${damageIcon}`} alt={damageType} className='damage-type-icon' />{damageType} damage</li>
            <li>{!isCraftable && 'Not'} Craftable</li>
            <li>Uses {ammoType} ammo</li>
            <li>Introduced in Season {seasonNum}</li>
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
    );
}

export default WeaponSidebarDetails;