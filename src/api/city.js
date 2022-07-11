import request from '@/utils/request'

export const getCityList = () => {
  return request({

    url: '/area/city?level=1'

  })
}

export const getHotCityList = () => {
  return request({

    url: '/area/hot'

  })
}
