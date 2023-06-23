// Import Modules
import Image from 'next/image';

// Import Assets
import Preview from '../../../public/illustration_preview.png';

// Import Styles
import { RegisterHightlightText, RegisterHightlightTitle, RegisterRightContainer } from '@styles/pages/register';

// Define Register Right
const RegisterRight = () => {
    return (
        <RegisterRightContainer>
            <Image alt="Image" src={Preview} width={600} height={400} />
            <RegisterHightlightTitle>Lorem Ipsum</RegisterHightlightTitle>
            <RegisterHightlightText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores dolor officia laudantium sunt sit, modi labore? Labore,
                iusto nesciunt.
            </RegisterHightlightText>
        </RegisterRightContainer>
    );
};

// Export Register Right
export default RegisterRight;
