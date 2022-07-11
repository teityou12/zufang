/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
/**
  * 用户登录
  */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * 租房小组
 */

export const getGroup = () => {
  return request({

    url: '/home/groups'

  })
}
