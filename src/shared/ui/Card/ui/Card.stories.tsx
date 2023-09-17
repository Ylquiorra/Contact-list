import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Card from './Card';
import { Text } from '../../Text';
import Themes from '@/shared/consts/theme';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: <Text title={'Title'} text={'text'} />,
    },
};
