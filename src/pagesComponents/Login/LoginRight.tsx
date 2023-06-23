// Import Modules
import Image from 'next/image';

// Import Assets
import Illustratrion from '../../../public/illustration.png';

// Import Styles
import { LoginHighlightText, LoginHighlightTitle, LoginRightContainer } from '@styles/pages';

// Define Login Right
const LoginRight = () => {
    return (
        <LoginRightContainer>
            <Image alt="Image" src={Illustratrion} width={400} height={400} />
            <LoginHighlightTitle>Lorem Ipsum</LoginHighlightTitle>
            <LoginHighlightText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores dolor officia laudantium sunt sit, modi labore? Labore,
                iusto nesciunt.
            </LoginHighlightText>
        </LoginRightContainer>
    );
};

// Export Login Right
export default LoginRight;
