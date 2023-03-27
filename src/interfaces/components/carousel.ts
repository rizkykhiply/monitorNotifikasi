// Import Modules
import { StaticImageData } from 'next/image';

// Define Setting Carousel
export interface CarouselSetting {
    autoPlay: boolean;
    animation: 'fade' | 'slide';
    indicators: boolean;
    interval: number;
    navButtonsAlwaysInvisible: boolean;
}

// Define Props Carousel Items
export interface PropsCarouselItems {
    image: StaticImageData;
    title: string;
    description: string;
}
