import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { text, select } from '@kadira/storybook-addon-knobs'

import Name from './Name'
import Button from './Button'
const types = {
  "": "",
  highlight: 'highlight',
  disabled: 'disabled',
}

storiesOf('Components', module)
  .addWithInfo(
    'Name with info',
    `
    A component to display a colored name tag.
    `,
    () => (
      <Name name="Louie Anderson" />
    ),
    { inline: true },
  )
  .addWithInfo(
    'Button with text info',
    `
    A component for button.
    `,
    () => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    ),
    { inline: true },
  )
  .addWithInfo(
    'Button with emoji info',
    `
    A component for button with emoji.
    `,
    () => (
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    ),
    { inline: true },
  )

  /*  .add('Name', () => (
    <div>
      <h2>Normal</h2>
      <Name name={text('Name', 'Louie Anderson')} type={select('Type', types)} />
    </div>
  ))*/
