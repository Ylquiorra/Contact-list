import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';
import Themes from '@/shared/consts/theme';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const DarkCircle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};
