import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar } from './Navbar'

export default {
  title: 'shared/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Normal = Template.bind({})
Normal.args = {}
