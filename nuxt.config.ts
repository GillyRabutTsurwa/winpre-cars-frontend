// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: true, //NOTE: une erreur s'affiche ici, mais il n'y en a pas effectivement
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,500&display=swap",
                },
            ],
        },
    },
    modules: ["@nuxtjs/sanity"],
    sanity: {
        projectId: "2cbrvq50",
    },
    css: ["@/assets/sass/main.scss"],
    ssr: false,
    target: "static",
});
