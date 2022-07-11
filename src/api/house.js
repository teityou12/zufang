import request from '@/utils/request'

export const getHouse = (houseCode) => {
  return request({
    url: `/houses/${houseCode}`
  })
}
