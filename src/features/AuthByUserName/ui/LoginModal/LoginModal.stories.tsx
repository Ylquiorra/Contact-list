import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginModal } from './LoginModal'

export default {
  title: 'shared/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Normal = Template.bind({})
Normal.args = {}
