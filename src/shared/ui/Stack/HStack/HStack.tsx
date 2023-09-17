import React, { JSX } from 'react';
import Flex from '../Flex';
import IFlexProps from '../Flex/types/IFlexProps';

type IHStackProps = Omit<IFlexProps, 'direction'>;

/**
 * @description Компонент горизонтального контента с кастомным позиционированием
 */
const HStack: React.FC<IHStackProps> = (props: IHStackProps): JSX.Element => {
    return <Flex {...props} direction={'row'} />;
};

export default HStack;
