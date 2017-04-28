import { configure, addDecorator, setAddon } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import infoAddon from '@kadira/react-storybook-addon-info'

import React from 'react'

setAddon(infoAddon)
addDecorator(withKnobs)
addDecorator((story) => (
  <div>
    <h1>Examples</h1>
    {story()}
  </div>
))


configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename))
  },
  module
)
