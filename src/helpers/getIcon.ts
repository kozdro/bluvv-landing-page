export enum Icon {
  Decision = 'Decision',
  Reviews = 'Reviews',
  Store = 'Store',
  Waste = 'Waste',
}

export const getIcon = (iconName: Icon) => {
  return iconName ? () => import(`@/assets/icons/${iconName}.svg`) : null
}
