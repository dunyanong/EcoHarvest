import Image from 'next/image';
import bin0 from '../img/trash/bin0.jpg';
import bin25 from '../img/trash/bin25.jpg';
import bin50 from '../img/trash/bin50.jpg';
import bin75 from '../img/trash/bin75.jpg';
import bin100 from '../img/trash/bin100.jpg';

const BinIcon = ({ data }) => {
    const calculatePercentage = (ultrasonicValue) => {
        // 23cm
        const binHeight = 23;
        return ((binHeight - ultrasonicValue) / binHeight) * 100;
    };

    const percentage = calculatePercentage(data.ultrasonicValue);

    let binImage;
    if (percentage === 0) {
        binImage = bin0;
    } else if (percentage > 0 && percentage <= 40) {
        binImage = bin25;
    } else if (percentage > 40 && percentage <= 60) {
        binImage = bin50;
    } else if (percentage > 60 && percentage <= 90) {
        binImage = bin75;
    } else {
        binImage = bin100;
    }

    return (
        <Image src={binImage} alt={`Bin ${percentage}% full`} width={300} height={300} />
    );
}
 
export default BinIcon;