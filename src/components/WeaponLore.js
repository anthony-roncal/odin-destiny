import { React } from 'react';

const WeaponLore = ({ loreData }) => {
    return (
        <>
            <h3 className='section-header'>Lore</h3>
            <p>{loreData.displayProperties.name}</p>
            <p>{loreData.subtitle}</p>
            <p>{loreData.displayProperties.description}</p>
        </>
    );
}

export default WeaponLore;