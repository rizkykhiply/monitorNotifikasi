// Import Modules
import { memo } from 'react';
import Carousel from 'react-material-ui-carousel';

// Import Setting
import { carouselSetting } from '@/lib/utils';

// Import Components
import CarouselItems from './CarouselItem';

// Import Assets
import Analytics from '../../../public/illustration_analytics.svg';
import Reporting from '../../../public/illustration_reporting.svg';
import Summary from '../../../public/illustration_summary.svg';

// Define Carousel Component
const CarouselComponent = () => {
    const items = [
        {
            image: Analytics,
            title: 'Analytics',
            description:
                'An analytics dashboard is a highly visual display of data used to monitor conditions or rapidly facilitate understanding.',
        },
        {
            image: Reporting,
            title: 'Report',
            description: 'Is a graphical depiction of an organizations key performance indicators.',
        },
        {
            image: Summary,
            title: 'Summary',
            description: 'Gives you a summary of information about the health of a specific managed object.',
        },
    ];

    return (
        <Carousel
            index={0}
            navButtonsProps={{
                style: {
                    margin: '0 30px',
                    opacity: 1,
                    background: 'rgba(0,0,0,0.5)',
                },
            }}
            indicatorIconButtonProps={{
                style: { margin: '0 2px', color: 'rgba(0,0,0,0.5)' },
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#fff',
                },
            }}
            cycleNavigation={true}
            {...carouselSetting}
        >
            {items.map((v, i) => (
                <CarouselItems key={i} image={v.image} title={v.title} description={v.description} />
            ))}
        </Carousel>
    );
};

// Export Carousel Component
export default memo(CarouselComponent);
