const app = Vue.createApp({
    data() {
        return {
            showDiv1: true,
            showDiv2: true,
            showDiv3: true,
            showDiv4: true,
            showTask1: true,
            showTask2: true,
            showTask3: true,
            showTask4: false
        }
    },
    methods: {
        showTasks(number) {
            if (number === 1) {
                this.showDiv1 = false,
                    this.showTask1 = true,
                    this.showTask2 = false,
                    this.showTask3 = false,
                    this.showTask4= false

            }
            else if (number === 2) {
                this.showDiv2 = false,
                    this.showTask2 = true,
                    this.showTask1 = false,
                    this.showTask3 = false,
                    this.showTask4= false
            }
            else if (number === 3) {
                this.showDiv3 = false,
                    this.showTask3 = true,
                    this.showTask1 = false,
                    this.showTask2 = false,
                    this.showTask4= false
            }
            else if (number === 4)
            {
                this.showDiv1 = false,
                this.showDiv2 = false,
                this.showDiv3 = false,
                this.showDiv4 = false,
                this.showTask1 = false,
                this.showTask2 = false,
                this.showTask3 = false,
                this.showTask4 = true
            }
            else if (number === 5) {
                this.showDiv1 = true,
                    this.showDiv2 = true,
                    this.showDiv3 = true,
                    this.showDiv4 = true,
                    this.showTask1 = true,
                    this.showTask2 = true,
                    this.showTask3 = true,
                    this.showTask4= false
            }
        }
    }

})
app.mount('#app')
