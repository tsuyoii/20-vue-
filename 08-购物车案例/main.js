const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        //date如果不加引号，-会被当做减法计算
        date:'2006-9',
        price:85.89,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price:59,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:39,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:128.5,
        count:1
      }
    ]
  },
  computed:{
    results(){
      let result = 0
      // for(let i in this.books){
      //   result+=this.books[i].price*this.books[i].count
      // }
      for(let book of this.books){
        result += book.price*book.count
      }
      return result
    }
  },
  methods:{
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      if(this.books[index].count>1){
      this.books[index].count--
      }
    },
    clear(index){
       this.books.splice(index,1)
    }
  },
  //过滤器
  filters:{
    //过滤器会将对应的前面的要过滤的属性作为参数自动传入
    showPrice(price){
      return '￥'+ price.toFixed(2)
    }
  }
})