import { React } from 'react';

const WeaponExoticPerks = ({ intrinsic, intrinsicIcon, perk, perkIcon }) => {

    return (
        <>
            <h3 className='section-header'>Exotic Perks</h3>
            <ul className='exotic-perks'>
                <li className='exotic-perk'>
                    <img src={intrinsicIcon} alt='intrinsic-icon'/>
                    <div className='exotic-perk-text'>
                        <p>{intrinsic.name}</p>
                        <p>{intrinsic.description}</p>
                    </div>
                </li>
                <li className='exotic-perk'>
                    <img src={perkIcon} alt='perk-icon'/>
                    <div className='exotic-perk-text'>
                        <p>{perk.name}</p>
                        <p>{perk.description}</p>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default WeaponExoticPerks;