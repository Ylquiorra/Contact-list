import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Icon from './Icon';
import Theme from '@/shared/assets/icons/theme.svg';
import Themes from '@/shared/consts/theme';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        Svg: Theme,
    },
};
