import requestApi from '../utils/requestApi/requestApi'

export const filterMedicalExaminationTimeByCategoryAndPriceService = async (
  categories: string[],
  minPrice: number,
  maxPrice: number
) => {
  try {
    const response = await requestApi({
      url: `/medical_examinations/guest/filter?category[]=${categories.join(
        ','
      )}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      method: 'get'
    })
    return response.data
  } catch (error) {
    return error
  }
}

export const filterMedicalExaminationTimeByCategoryService = async (
  categories: string[]
) => {
  try {
    const response = await requestApi({
      url: `/medical_examinations/guest/filter?category[]=${categories.join(
        ','
      )}`,
      method: 'get'
    })
    return response.data
  } catch (error) {
    return error
  }
}

export const getAllMedicalExaminationTimeService = async () => {
  try {
    const response = await requestApi({
      url: '/medical_examinations/guest',
      method: 'get'
    })
    return response.data
  } catch (error) {
    return error
  }
}

export const getDetailMedicalExaminationTimeService = async (id: string) => {
  try {
    const result = await requestApi({
      url: `/medical_examinations/guest/${id}`,
      method: 'get'
    })
    return result.data
  } catch (error) {
    return error
  }
}
