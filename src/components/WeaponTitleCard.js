import { React } from 'react';

const WeaponTitleCard = ({ icon, name, tier, damageTypeIcon, inventorySlot, weaponType, flavorText, source }) => {
    return (
        <div className='weapon-title-container'>
            <img src={icon} alt='icon' />
            <div className='weapon-title-text'>
                <h1>{name}</h1>
                <div className='weapon-title-subtext'>
                    {tier} / <img className='damage-type-icon' alt='damage-type' src={damageTypeIcon} /> {inventorySlot} / {weaponType}
                </div>
                <p className='weapon-flavor-text lore-quote'>{flavorText}</p>
                <p className='weapon-source'>{source}</p>
            </div>
        </div>
    );
}

export default WeaponTitleCard;