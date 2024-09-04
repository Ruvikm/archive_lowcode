
/** 递归寻找父级列表 */
const getParentInfoList = <T>(
  treeList: T[],
  key: keyof T,
  value: T[keyof T],
  childrenKey?: keyof T
): T[] => {
  const list: T[] = []

  childrenKey = childrenKey || ('children' as keyof T)

  for (let i = 0; i < treeList?.length; i++) {
    const item: T = treeList[i]
    const children = item[childrenKey]

    if (item[key] === value) {
      list.push(item)
      break
    }
    if (children && children instanceof Array) {
      if (children.length) {
        const childList: T[] = getParentInfoList(
          children,
          key,
          value,
          childrenKey
        )
        if (childList.length) {
          list.push(...[item, ...childList])
          break
        }
      }
    }
  }

  return list
}


/** 组装树结构
 * @param {T[]} 树数据
 * @param {string} key 唯一值字段
 * @param {string} parentKey 父级key字段
 * @param {string} childrenKey 添加的子集的字段
 */
const assembleTree = <T>(
  treeList: T[],
  key: keyof T,
  parentKey: keyof T,
  childrenKey?: string
) => {
  if (!treeList?.length) return []
  if (!key) return []
  if (!parentKey) return []

  childrenKey = childrenKey || 'children'

  const copyTreeList: T[] = JSON.parse(JSON.stringify(treeList))

  return copyTreeList.filter((item) => {
    // const childrenList = copyTreeList.filter(
    //   (treeItem) => treeItem[parentKey] === item[key]
    // )

    const parentInfo = copyTreeList.find(treeItem => treeItem[key] === item[parentKey])

    if(parentInfo && childrenKey){
      
      if((parentInfo as { [key: string]: unknown })[childrenKey]){
        ((parentInfo as { [key: string]: unknown })[childrenKey] as T[]).push(item)
      }else {
        (parentInfo as { [key: string]: unknown })[childrenKey] = [item]
      }
    }

    // if (childrenKey) {
    //   ;(item as { [key: string]: unknown })[childrenKey] = childrenList
    // }

    return !parentInfo
  })
}



/** 延迟执行 */ 
const sleep = (time = 0)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },time)
  })
}


/** url获取域名 */
const getDomain = (url:string)=>{

  let domains = url.split('/'); //以“/”进行分割

  let domain = ''

  if( domains[2] ) {

  domain = domains[0] + '//' +  domains[2];

  }
  return domain
}


export {
  getParentInfoList,
  assembleTree,
  sleep,
  getDomain
}