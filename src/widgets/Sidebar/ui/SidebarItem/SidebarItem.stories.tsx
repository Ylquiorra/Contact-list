import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SidebarItem } from './SidebarItem'

export default {
  title: 'shared/SidebarItem',
  component: SidebarItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarItem>

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
