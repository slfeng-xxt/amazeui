export interface LabelledValue {
  label: string
}

export function printLabel(labelledValue: LabelledValue) {
  console.log(labelledValue.label)
}
