import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(/fonts/roboto-mono-200.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/roboto-mono-400.woff2) format('woff2');
    }
    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/roboto-mono-700.woff2) format('woff2');
    }
`;

export default Typography;
