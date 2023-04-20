import requestApi from '../utils/requestApi/requestApi'

export const getDetailTimeSlotService = async (id: string) => {
  try {
    const response = await requestApi({
      url: `/time_slots/guest/${id}`,
      method: 'get'
    })
    return response.data
  } catch (error) {
    return error
  }
}
