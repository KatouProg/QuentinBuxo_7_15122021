// DB provisoire

const partages = [
    { id: 1, description: "Looool", img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 2, description: 'Mdrrr', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 3, description: 'Trop drole wallah !!!', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 4, description: 'Ahahahah', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 5, description: 'Ohohohoh', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 6, description: 'Xptdrrrrrr', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 7, description: 'Ptdrrrr', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
    { id: 8, description: 'Pfffffffff...', img: 'assets/img/Hero-Elf4IhEXUAApPJQ.jpeg'},
  ];

const Accueil = {
    template: "#accueil",
    name: 'Accueil',
    data: () => {
        return {
            partages,
        }
    }
}
const Signup= {
    template: '<h1>Sign up</h1>',
    name: 'Signup'
}
const UserSettings = {
    template: '<h1>User Settings</h1>',
    name: 'Settings'
}

// Router
const router = new VueRouter ({
    routes : [
        { path: '/', component: Accueil, name: 'Accueil'},
        { path: '/SignUp', component: Signup, name: 'Signup'},
        { path: '/UserSettings', component: UserSettings, name: 'UserSettings'},
    ]
})

const vue = new Vue ({
    router
}).$mount('#app');