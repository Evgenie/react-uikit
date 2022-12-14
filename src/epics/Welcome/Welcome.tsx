import { useTheme } from '@emotion/react';
import React, { MouseEventHandler } from 'react';
import { TElementProps } from '../../definitions';
import Section from '../../features/Section';
import { CWrap } from './Welcome.styles';

export type IProps = TElementProps & {
    onClick?: MouseEventHandler,
};

export const Welcome: React.FC<IProps> = (props): JSX.Element => {
    //@ts-ignore
    const theme = { ...useTheme().Welcome };
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <Section sizeId={'desktop'} />
        </CWrap >
    );
};

export default Welcome;
