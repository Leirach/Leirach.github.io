new Vue({
    el: '#vueapp',
    data: {
        name: "Juan Carlos De León Álvarez",
        clicked: false,
        cards: [
            {
                title: "Bruh moment.",
                description: "25/02/2020",
                img: "bruh.jpeg"
            },
            {
                title: "Henlo",
                description: "welcom",
                img: "dog.jpeg"
            },
            {
                title: "Bootstrap is alright",
                description: "(heavy breathing)",
                img: "cat.jpeg"
            }
        ]
    },
    methods: {
        btnClicked() {
            this.clicked = true;
        },
        showAlert: function () {
            alert('¡Te dije que no!');
        },
    }
});