import request from '@/utils/request'

export const getHouseById = houseCode => {
  return request({
    method: 'GET',
    url: `/houses/${houseCode}`
  })
}

export const addHouseCollect = id => {
  return request({
    method: 'POST',
    url: `/user/favorites/${id}`
  })
}

export const deleteHouseCollect = id => {
  return request({
    method: 'DELETE',
    url: `/user/favorites/${id}`
  })
}
