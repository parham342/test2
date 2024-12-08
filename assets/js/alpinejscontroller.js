document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', function(){
        return {
            users: [],
            pageusers: [],
            isloading: false,
            showAddModal: false,
            pagecount: 1,
            itemscount: 4,
            cuttentpage: 1,
            getUsers(){
                this.isloading = true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                    this.users= res.data
                    this.pagination()
                }).catch(error=>{
                    console.log(error.message);
                }).finally(()=>{
                    this.isloading = false
                })
            },
            pagination(){
                this.pagecount = Math.ceil(this.users.length / this.itemscount)  //3
                let start = (this.cuttentpage * this.itemscount) - this.itemscount //0
                let end = this.cuttentpage * this.itemscount  //4
                this.pageusers = this.users.slice(start,end)
                // this.users.slice(0,3)
           },
           nextpage(){
            this.cuttentpage++
            if (this.cuttentpage > this.pagecount) this.cuttentpage = this.pagecount
            this.pagination()
           },
           prevpage(){
            this.cuttentpage--
            if (this.cuttentpage < 1) this.cuttentpage = 1
            this.pagination()
           },
           handleChangeItemsCount(e){
            this.itemscount = e.value
            this.cuttentpage = 1
            if (this.itemscount < 1) this.itemscount = 1
            if (this.itemscount > this.users.length) this.itemscount = this.users.length
            this.pagination()
           }
       }
       
    })
})


// function test(){
//     do something...
//     console.log(123);
// }

// const test1 = ()=>{
//     do something...
//     console.log(123);
// }