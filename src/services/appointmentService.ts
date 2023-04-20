import requestAuthApi from '../utils/requestApi/requestAuthApi'

export const getListAppointmentService = async () => {
  try {
    const response = await requestAuthApi({
      url: 'appointments/patient',
      method: 'get'
    })
    return response.data
  } catch (error) {
    return error
  }
}
