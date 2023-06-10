import { React } from 'react';

const WeaponRelatedCollectible = ({ icon, name, source }) => {
    return (
        <>
            <h3 className='section-header'>Related Collectible</h3>
            <div className='weapon-related-collectible'>
                <img src={icon} alt='icon' />
                <div className='weapon-related-collectible-text'>
                    <h1><a href="#">{name}</a></h1>
                    <p className='weapon-source'>{source}</p>
                </div>
            </div>
        </>
    );
}

export default WeaponRelatedCollectible;