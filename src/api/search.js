import request from '@/utils/request'

export const getHomeList = () => {
  return request({
    url: '/houses'

  })
}

export const getChooseList = params => {
  return request({
    url: '/houses/condition?id=AREA%7C88cff55c-aaa4-e2e0'

  })
}
