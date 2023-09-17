import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import Input from './Input';
import Themes from '@/shared/consts/theme';
import themeDecorator from '@/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};
