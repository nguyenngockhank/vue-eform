Vue.use(window.VuePaper);
console.log('>>> use VuePaper', window.VuePaper)

var vm = new Vue({
    el: "#app",
    data: {
        message: 'Hello'
    }
});

