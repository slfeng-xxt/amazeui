import * as React from 'react'
import {
  Table,
  Column,
  Cell,
} from '@blueprintjs/table'

export interface HelloProps { name: string }

export const Hello = (props: HelloProps) => {
  const renderCell = (rowIndex: number) => {
    return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
  }
  return (
    <Table numRows={10}>
      <Column name="Dollars" renderCell={renderCell}/>
    </Table>
  )
}
