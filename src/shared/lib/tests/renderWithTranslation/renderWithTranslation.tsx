import { render } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../config/i18n/i18nForTests'

// обертка для тестирования динамических компонентов, у которых есть i18n
export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
  )
}
