import { useRoutes } from 'react-router-dom'

import Page404 from '../utils/Page404'
import adminRoutes from './AdminRoutes'
import globalRoutes from './GlobalRoutes'
import patientRoutes from './PatientRoutes'

function ApplicationRoute() {
  const routes = [
    ...adminRoutes,
    ...patientRoutes,
    ...globalRoutes,
    {
      path: '*',
      element: <Page404 />
    }
  ]

  return useRoutes(routes)
}

export default ApplicationRoute
