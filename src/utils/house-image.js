import Baratheon from '../../images/coat-of-arms/Baratheon.png';
import Bolton from '../../images/coat-of-arms/Bolton.png';
import Greyjoy from '../../images/coat-of-arms/Greyjoy.png';
import Lannister from '../../images/coat-of-arms/Lannister.png';
import Martell from '../../images/coat-of-arms/Martell.png';
import Stark from '../../images/coat-of-arms/Stark.png';
import Targaryen from '../../images/coat-of-arms/Targaryen.png';
import Tarly from '../../images/coat-of-arms/Tarly.png';
import Tully from '../../images/coat-of-arms/Tully.png';
import Tyrell from '../../images/coat-of-arms/Tyrell.png';

const houseImage = (house) => {
    switch (house) {
        case 'Baratheon':
            return Baratheon;
        case 'Bolton':
            return Bolton;
        case 'Greyjoy':
            return Greyjoy;
        case 'Lannister':
            return Lannister;
        case 'Martell':
            return Martell;
        case 'Stark':
            return Stark;
        case 'Targaryen':
            return Targaryen;
        case 'Tarly':
            return Tarly;
        case 'Tully':
            return Tully;
        case 'Tyrell':
            return Tyrell;
        default:
            return null;
    }
};

export default houseImage;
