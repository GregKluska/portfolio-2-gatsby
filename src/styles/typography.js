import { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';

const Typography = createGlobalStyle`

    body {
        font-size: 15px;
        ${up('md')} {
            font-size: 16px;
        }
        ${up('lg')} {
            font-size: 18px;
        }

    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ theme }) => theme.colors.white};
        margin-top: 0;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    h1 {
        font-size: 2.6857rem;
        line-height: 3.1rem;
        ${up('md')} {
            font-size: 2.9857rem;
            line-height: 3.4rem;
        }
        ${up('lg')} {
            font-size: 3.2857rem;
            line-height: 4rem;
        }
    }

    h2 {
        font-size: 2.17rem;
        line-height: 2.857rem;
        ${up('md')} {
            font-size: 2.37rem;
            line-height: 3.0857rem;
        }
        ${up('lg')} {
            font-size: 2.57rem;
            line-height: 3.2857rem;
        }
    }

    h3 {
        font-size: 1.91rem;
        line-height: 2.357rem;
        ${up('md')} {
            font-size: 2rem;
            line-height: 2.7rem;
        }
    }

    h4 {
        font-size: 1.51rem;
        line-height: 2.13rem;
        ${up('md')} {
            font-size: 1.71rem;
            line-height: 2.43rem;
        }
    }

    h5 {
        font-size: 1.23rem;
        line-height: 2.04rem;
        ${up('md')} {
            font-size: 1.43rem;
            line-height: 2.14rem;
        }
    }

    h6 {
        font-size: 1.04rem;
        line-height: 1.657rem;
        ${up('md')} {
            font-size: 1.14rem;
            line-height: 1.857rem;
        }
    }


    ::-moz-selection {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
    }

    ::-ms-selection {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
    }

    ::-o-selection {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
    }

    ::selection {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.white};
    }

    a {

        &:hover,
        &:focus,
        &:active {
            text-decoration: none;
            outline: none;
        }
    }

    a,
    button {
        cursor: pointer;
    }
`;

export default Typography;
