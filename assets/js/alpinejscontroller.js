document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', function(){
        return {
            users: [],
            isloading: false,
            getUsers(){
                this.isloading = true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                    this.users= res.data
                }).catch(error=>{
                    console.log(error.message);
                }).finally(()=>{
                    this.isloading = false
                })
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