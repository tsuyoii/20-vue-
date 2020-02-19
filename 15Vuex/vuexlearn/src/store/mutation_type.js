export const INCREMENT = 'increment'

// 注意这里export default导出的才能直接通过import INCREMENT from '...'导入，
// 这里不是default导出的，所以只能通过import { INCREMENT } from '...'导入
// store的mutations中使用可以见store/index.js