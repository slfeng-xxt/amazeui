import * as React from 'react'

export interface HelloProps { name: string }

export const Hello = (props: HelloProps) => <h2>Hello, {props.name}</h2>
