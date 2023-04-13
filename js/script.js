const { createApp } = Vue;

createApp({
    data(){
        return{
            images: [
                "img/01.webp",
                "img/02.webp",
                "img/03.webp",
                "img/04.webp",
                "img/05.webp",
            ],
            counter: 0,
        }
    },

    methods: {
        prevNextImg(condition){
            if(condition === true) this.counter++;
            else if(condition === false) this.counter--;
            if(this.counter > this.images.lenght) this.counter = 0;
            if(this.counter === 0) this.counter = this.images.lenght;
        }
    },




    mounted(){
        setInterval(() => {
          this.prevNextImg(true);
        }, 3000);
    },

}).mount("#app")