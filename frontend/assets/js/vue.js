

const Accueil = {
    template: '<h1>Accueil</h1>',
    name: 'Accueil'
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