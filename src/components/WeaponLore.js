import { React } from 'react';

const WeaponLore = ({ loreData }) => {
    return (
        <>
            <h3 className='section-header'>Lore</h3>
            <div className='lore-container'>
                <p className='lore-name'>{loreData.displayProperties.name}</p>
                <p className='lore-quote'>{loreData.subtitle}</p>
                <p className='lore-description'>{loreData.displayProperties.description}</p>
            </div>
        </>
    );
}

export default WeaponLore;