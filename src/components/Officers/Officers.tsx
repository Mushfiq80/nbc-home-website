import officersData from '../../lib/officers.json'
import OfficerCarousel from './OfficerCarousel';

const Officers = () => {
    return (
        <div className='container mx-auto px-6 pt-10 lg:px-36 space-y-5'>
            <div>
                <h1 className='text-green-500 text-center text-2xl md:text-3xl lg:text-4xl font-semibold'>Our Officers</h1>
            </div>
            <div>
                <OfficerCarousel officers={officersData} />
            </div>
        </div>
    );
};

export default Officers;