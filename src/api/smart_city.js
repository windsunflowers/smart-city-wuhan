// 导入request实例
import request from './request'

// 编写接口
export const getCityBuildings = () => {
  return request({
    url: 'wuhan_buildings',
    method: 'GET',
  })
}
export const getRoads = () => {
  return request({
    url: 'wuhan_roads',
    method: 'GET',
  })
}
export const getEvents = () => {
  return request({
    url: 'wuhan_events',
    method: 'GET',
  })
}
