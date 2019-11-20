
const HomePage = {
    template:`
    <div>
        <h1>{{title}}</h1>
        <router-link to="/about">Om oss</router-link><br>
        <input v-model="title" placeholder="Skriv inn titel" />
        <button @click="addPost">Legg til post</button>

        <ul>
            <li v-for="post in posts">
                {{post}}
            </li>
        </ul>
    </div>
    `
    ,
    data() {
        return {
            title: "",
            posts: [
                "Min post",
                "Min andre post"
            ]
        }
    },
    methods: {
        addPost() {
            this.posts.push(this.title);
        }
    }

};

const AboutPage = {
    template:`
    <div>
        <h1>
            Om oss
        </h1>
    </div>
`
};

const router = new VueRouter(
    {
        routes: [
            {
                path:'/',
                component: HomePage
            },
            {
                path:'/about',
                component: AboutPage
            }
        ]
}
);


new Vue({
    el: '#app',
    router:router
});

