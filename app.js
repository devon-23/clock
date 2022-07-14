const app = Vue.createApp({
    data () {
        return {
            timestamp: '',
            isDark: true
        }
    },
    created() {
        setInterval(() => {
          this.getNow();
        }, 1000)
      },
    methods: {
        getNow: function() {
            const today = new Date();
            var minutes = (today.getMinutes()<10?'0':'') + today.getMinutes()
            var seconds = (today.getSeconds()<10?'0':'') + today.getSeconds()
            const time = today.getHours() + ":" + minutes + ":" + seconds;
            this.timestamp = time;
        },
        darkToggle () {
            this.isDark = !this.isDark
        }
    }
})

app.mount('#app') //take app instance and mount it to app, controls everything in the app div



