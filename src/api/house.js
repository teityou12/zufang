import request from '@/utils/request'

export const getHouseById = houseCode => {
  return request({
    method: 'GET',
    url: `/houses/${houseCode}`
  })
}
