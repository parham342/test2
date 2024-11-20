document.addEventListener('alpine:init', () => {
    Alpine.data('mainData', () => (
        {
        message: 'i love programming', 
        names: ['parham', 'abbas','ali'], 
            
        testfunc(){
            alert(this.message)
                }
        }
    ))
})