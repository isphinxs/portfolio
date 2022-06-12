import blogCli from '../../images/blog_cli.jpg';
import blogCustomDomain from '../../images/blog_custom_domain.jpg';
import blogJwt from '../../images/blog_jwt.jpg';
import blogRailsGenerators from '../../images/blog_rails_generators.jpg';
import blogSinatra from '../../images/blog_sinatra.jpeg';
import resume from '../../images/undraw_resume.svg';

export const Blogs = [
    {
        id: 0,
        title: "",
        tagline: "Check out my most recent blog posts on Medium.",
        img: resume,
        url: "https://medium.com/@isphinxs"
    },
    {
        id: 1,
        title: "Custom Domain Names",
        tagline: "A walk through of serving a website to your custom domain using GitHub Pages and Google Domains.",
        img: blogCustomDomain,
        url: "https://medium.com/@isphinxs/using-a-custom-domain-name-with-github-pages-c9cdc2084d54"
    },
    {
        id: 2,
        title: "JWT React-Redux",
        tagline: "How to set up simple authentication with JSON Web Tokens (JWT) on a React-Redux front-end.",
        img: blogJwt,
        url: "https://medium.com/@isphinxs/setting-up-jwt-on-a-react-redux-front-end-8b4b6c351bb4"
    },
    {
        id: 3,
        title: "Sinatra & Heroku",
        tagline: "How I built my MVC, CRUD, Sinatra/Ruby app tracking publication advances, and converted it to run on Heroku.",
        img: blogSinatra,
        url: "https://medium.com/@isphinxs/deploying-a-sinatra-app-to-heroku-7944b024f77c"
    },
    {
        id: 4,
        title: "Rails Generators",
        tagline: "Outlines common generators used in Ruby on Rails, including options and shortcuts.",
        img: blogRailsGenerators,
        url: "https://medium.com/@isphinxs/a-cheat-sheet-for-rails-generators-44cf79884ac7"
    },
    {
        id: 5,
        title: "CLI & API",
        tagline: "Examines my approach to building an object-oriented Ruby application that shows air quality data to the user.",
        img: blogCli,
        url: "https://medium.com/@isphinxs/how-i-built-my-first-cli-and-api-app-548088d87871"
    }
];
