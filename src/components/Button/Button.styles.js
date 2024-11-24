import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const buttonStyle = css`
    padding: 10px 20px;
    border-radius: 12px;
`;

export const StyledButton = styled.button`
    ${buttonStyle};
    background-color: ${({ mode }) => {
        switch (mode) {
            case 'return':
                return 'magenta';
            case 'default':
                return 'black';
            default:
                return '#007bff';
        }
    }};
    color: white;
`;
