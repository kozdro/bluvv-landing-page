import { defineAsyncComponent } from 'vue'

import { Icon } from '@/types'

export default (iconName: Icon) => {
  return iconName
    ? defineAsyncComponent(() => import(`@/assets/icons/${iconName}.svg`))
    : null
}
