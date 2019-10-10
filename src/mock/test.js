import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random
export const Test = (req) => {
  let testList = []
  doCustomTimes(5, () => {
    testList.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return testList
}
