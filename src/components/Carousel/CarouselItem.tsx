// Import Modules
import { memo } from 'react';
import Image from 'next/image';

// Import Interfaces
import { PropsCarouselItems } from '@/interfaces/components';

// Import Styles
import { ItemContentText, ItemContentTitle, ItemContentWrapper, ItemImageWrapper, ItemWrapper } from '@/styles/components/carousel';

// Define Carousel Items
const CarouselItems = (props: PropsCarouselItems) => {
    return (
        <ItemWrapper>
            <ItemImageWrapper>
                <Image alt="Carousel Image" src={props.image} width={600} height={400} />
            </ItemImageWrapper>
            <ItemContentWrapper>
                <ItemContentTitle>{props.title}</ItemContentTitle>
                <ItemContentText>{props.description}</ItemContentText>
            </ItemContentWrapper>
        </ItemWrapper>
    );
};

// Export Carousel Items
export default memo(CarouselItems);
