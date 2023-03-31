export let commands = [
    {
        command: "ls",
        payload: 
        <>
        <div className="payload-header">
            <br />
            list of commands
        </div>
        <div className="payload-body">
            <ul>
                <li>/projects - get a list of projects</li>
                <li>/about - displays a short synposis to learn more about me</li>
                <li>/resume - print out my up-to-date resume to see work history and skills</li>
                <li>/github - get a link to my github account</li>
                <li>/LinkedIn - get a link to my LinkedIn account</li>
                <li>ping</li>
                <li>exit</li>
            </ul>
        </div>

        </>
    },
    {
        command: "/help",
        payload: 
        <>
        <div className="payload-header">
            -----Welcome to JT-CLI help!-----
            <br />
            Below are a list of commands you can use learn more about me!
        </div>
        <div className="payload-body">
            <ul>
                <li>/projects - get a list of projects</li>
                <li>/about - displays a short synposis to learn more about me</li>
                <li>/resume - print out my up-to-date resume to see work history and skills</li>
                <li>/github - get a link to my github account</li>
                <li>/LinkedIn - get a link to my LinkedIn account</li>
                <li>plus a few easter eggs!</li>
            </ul>
        </div>

        </>
    },
    {
        command: "/projects",
        payload: 
               <>
                       <br />
        <div className="payload-header">
            -----Projects-----
            <br />
            <br />
                <p>Use the flags below to get some more details and see a working copy of the project.</p>
            <br />
            <p> For example: /projects --listify</p>
            <br />
            </div>
            <div className="payload-body">
            <p>Vanilla JavaScript</p>
            <ul>
                <li>--weather-app</li>
            </ul>
            </div>
            <br />
            <div className="payload-body">
            <p>React JS</p>
            <ul>
                <li>--improved-new-tab</li>
                <li>--listify</li>
                <li>--portfolio-site</li>
                <li>--react-weather</li>
            </ul>
        </div>
        </>
    },
     {
        command: "/projects --weather-app",
        payload: 
        <>
                <br />
        <h4 className="payload-body">-- Vanilla JS Weather App --</h4>
        <br />
        <div className="payload-body">
        
        <p>
        The weather app is just as it sounds, a weather app that displays the local weather with current weather info, an hourly forecast, as well as a 7 day forecast. I made this as practice for making API calls and parsing API data into meaningful info on a web-page.
        </p>
        <br />
        <p>
        This uses the Openweather API to get the weather info from the latitude and longitude from the visitor. More on the Openweather API <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">HERE</a>.
        </p>
        <br />
        <p>
        We get the latitude and longitude from the user automatically using Geolocation API via JavaScript. More info on that API <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank" rel="noreferrer">HERE</a>. So your browser may ask permission for the web-app to get your location, but this is just to fill in the weather data.
        </p>
        <br />
        <p>
        This uses vanilla JS, HTML and CSS, all the source code is on my Github <a href="https://github.com/jon-tschida/vanilla-js-weather" target="_blank" rel="noreferrer">HERE</a>.
        </p>
        <br />
        <p>You can view a working copy of the project <a href="https://jt-vanilla-js-weather.netlify.app/" target="_blank" rel="noreferrer">HERE</a></p>
        </div>
        </>
    },
    {
        command: "/projects --improved-new-tab",
        payload: 
        <>
                <br />
        <h4 className="payload-body">-- Improved New Tab --</h4>
        <br />
        <div className="payload-body">
        
        <p>
            This was my first attempt at a React project after doing some learning about how to build in React. It utilizes useState, useLayoutEffect and useEffect. It was my first time trying to manage state, but I was able to do so without too much component drilling, and tried to stick to the `one source of truth` motto. It is going through constant development as I think of new things I want to add or feature requets from friends that use it.
        </p>
        <br />
        <p> 
            I wanted to create a project that was unique and wasn't another "to-do" app. This is something that I use everyday, and solved a problem for me. The Improved New Tab project is supposed to be able to replace your New Tab // New Window page in your browser.
        </p>
        <br />
        <p>
            When you first load up the page, it will ask for a location to get weather info. Once you enter the City and State, it will grab weather info for that city and give a short current temp description and high for the day. This includes a small Crypto ticker at the bottom with 3 popular Crypto currencies. The ticker can be deactivated from the settings menu in the top left. Also in the menu, you can change the unit of measurement for the weather data. All of these settings are saved in local storage so you don't have to enter that info next time you visit the page.
        </p>
        <br />

        <p>
            This app uses React 18 utilizing funcitonal components, as well as CSS. It utilizes OpeanWeather API, Messari.io API for Crypto prices, and PTV Developer API for location Lattitude and Longitude. It is also hosted on Netlify. You can view the source code on my Github <a href="https://github.com/jon-tschida/Improved-New-Tab" target="_blank" rel="noreferrer">HERE</a>.
        </p>
        <br />

        <p>This project is live <a href="https://improved-new-tab.netlify.app" target="_blank" rel="noreferrer">HERE</a></p>

        </div>
        </>
    },
    {
        command: "/projects --listify",
        payload: 
        <>
        <h4 className="payload-body">-- Listify --</h4>
        <br />
        <div className="payload-body">
        
        <p>This was my second React project to date, it was quite a bit more ambitious than I initially thought it would be. But the whole goal of this application was to solve I problem I had, creating grocery lists.</p>

        <br />
        <p>Listify was made to make creating grocery lists easier. To get started, create a new a new meal by clicking the "+" sign in left box with the "Meals" title. This will open another section for you to create your meal. In this area, you can give your meal a title and ingredients. Once you have your meal titled and ingredients added, click the "Add meal" to add it to your meal lists.</p>
        <br />

        <p>Now that you have some meals created, just click or tap any of the meals, and the ingredients will be added to your grocery list! No more thinking through your meals for the week and what you need to shop for, just Listify them!</p>

        <br />
        <p>This appp uses React 18 utilizing funcitonal components. It is currently a live site, but may be converted or copied into a React Native app for iOS and Android. You can view the source code on my Github <a href="https://github.com/jon-tschida/Listify" target="_blank" rel="noreferrer">HERE</a>.</p>
        <br />
        <p>This project is live <a href="https://listify-meals.com/" target="_blank" rel="noreferrer">HERE</a>.</p>

        </div>
        </>
    },
        {
        command: "/projects --react-weather",
        payload: 
        <>
        <h4 className="payload-body">-- React Weather App --</h4>
        <br />
        <div className="payload-body">
        
        <p>I had made a few different iterations of a weather app in vanilla JS, but I wanted to test myself and create the same thing in React.</p>

        <br />
        <p>The React Weather App is quite a bit more responsive than the vanilla JS version, primarily with expandable hour cards to give more info.</p>
        <br />

        <p>The option to switch between metric and imperial units is also a big improvement over the JS version.</p>

        <br />
        <p>This appp uses React 18 utilizing funcitonal components.</p>
        <br />
        <p>You can view the source code on my Github <a href="https://github.com/jon-tschida/react-weather-app" target="_blank" rel="noreferrer">HERE</a>.</p>
        <br />
        <p>You can view a live version of the project <a href="https://jt-react-weather-app.netlify.app" target="_blank" rel="noreferrer">HERE</a>.</p>
        </div>
        </>
    },
    {
        command: "/projects --portfolio-site",
        payload: 
        <>
        <h4 className="payload-body">-- Portfolio Site --</h4>
        <br />
        <div className="payload-body">
        <p>This project is the one you are using right now, my portfolio site!</p>
        <br />
        <p>This site was build using React 18 with funcitonal components to mimic a command line interface, which I called JT-CLI (Jon Tschida Command Line Interface). My old portfolio site was much more traditional, build in vanilla JS and HTML/CSS. </p>

        <br />
        <p>
        After that was live for ~1 year, I figured it was time to update it to something more unique, maybe something that would stand out more. I figured a mock CLI type of site would be unique enough to turn a head or two, and also show off my abilites.</p>
        <br />
        <p>If you like, you can view the source files on GitHub <a target="_blank" href="https://github.com/jon-tschida/Portfolio-redesign" rel="noreferrer">HERE</a></p>
        </div>
        </>
    },
    {
        command: "clear",
        payload: ""
    },
    {
        command: "exit",
        payload: "closing session..."
    },
    {
        command: "ping",
        payload: "Pong!"
    },
    {
        command: "/linkedin",
        payload: 
        <>
        <p>You can view my LinkedIn <a href="https://www.linkedin.com/in/jonathan-tschida-991453109/" target={"_blank"} rel="noreferrer">HERE</a> </p>
        </>
    },
    {
        command: "/github",
        payload:
        <>
        <p>You can view my Github page and repositories <a href="https://github.com/jon-tschida" target={"_blank"} rel="noreferrer">HERE</a> </p>
        </>
    },
    {
        command: "/resume",
        payload: 
    <>
        <div className="payload-header">
            Jon Tschida Resume
        </div>
        <div className="payload-header">----------------------</div>
        <br />
        <h4 className="payload-header">Experience</h4>
        <br />
        <br />
        <h4 className="payload-body">-- Sr. Techincal Support L2 --</h4>
        <p className="payload-body">WPEngine - August 2019 to Present</p>
        <br />
        <div className="payload-body">
        
            <ul>
                <li>Contribute to the development of Internal tooling, utilizing CSS, HTML, JavaScript, React</li>
                <li>Provide technical support for Flywheel users</li>
                <li>Assist with the training of new and existing support team members</li>
                <li>Observe and track trends and use that data to submit product/platform bugs</li>
                <li>Troubleshoot Nginx configurations</li>
                <li>Troubleshoot WordPress sites on the Flywheel Hosting Platform</li>
            </ul>

        </div>
        <br />
        <br />
        <h4 className="payload-body">-- Freelance Computer Repair --</h4>
        <p className="payload-body">Freelance - June 2017 to May 2019</p>
        <br />
        <div className="payload-body">
        
            <ul>
                <li>Operating system installs and troubleshooting</li>
                <li>Installation and configurations of various networking and desktop/laptop hardware</li>
                <li>Network and computer hardware troubleshooting</li>
            </ul>

        </div>
        <br />
        <br />
        <h4 className="payload-header">Skills</h4>
        <div className="payload-body-skills-container">
        
            <div className="payload-body-skills">
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Front-End Development</li>
            </ul>
            </div>

            <div className="payload-body-skills">
            <ul>
                <li>Tailwind CSS</li>
                <li>WordPress Development</li>
                <li>Trainability</li>
                <li>Customer Support</li>
            </ul>
            </div>
        </div>
        <br />
        <br />
        <h4 className="payload-header">Awards and Certificates</h4>
        <br />
        <h4 className="payload-body">-- Standing Ovation Award --</h4>
        <p className="payload-body">Issued by WP Engine · January 2022</p>
        <br />
        <div className="payload-body">
            <ul>
                <li>An award for providing an exceptional, stand-out customer support experience.</li>
            </ul>
        </div>
        <br />
        <br />
        <br />
        <h4 className="payload-body">-- Responsive Web Design Certificate --</h4>
        <p className="payload-body">Issued by FreeCodeCamp · Feb 2022</p>
        <br />
        <div className="payload-body">
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/certification/jon-tschida/responsive-web-design">View Certificate</a></li>
            </ul>
        </div>
        <br />
        <br />
        <br />
        <h4 className="payload-body">-- Front End Development Libraries Certificate --</h4>
        <p className="payload-body">Issued by FreeCodeCamp · March 2023</p>
        <br />
        <div className="payload-body">
            <ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/certification/jon-tschida/front-end-development-libraries">View Certificate</a></li>
            </ul>
        </div>



    </>
    },
    {
        command: "/about",
        payload: 
        <>
        <div className="payload-header">-- About Jon Tschida --</div>
        <br />
        <br />
        <div className="payload-body">
        <p>
          I've always had a curiosity about the world of computer science,
          and specifically, software/web development. Bouncing between a few
          different programming languages such as C# for game development in
          Unity, Ruby on Rails, and even Perl while in College, before eventually
          falling in love with JavaScript.
        </p>
        <br />
        <p>
          As someone who dabbled in game development, but always had a desire
          to create web content, web development was the perfect fit. It
          allows me to be creative in a number of facets and gives me the freedom
          to create whatever can be imagined (with some help from Google of
          course). JavaScript fit the bill perfectly to power whatever came to
          mind, especially with how many different frameworks that are
          available, eventually finding a good fit with React. 
        </p>
        <br />
        <p>
          My background in WordPress hosting has also taught me so much about
          the hosting process as a whole. How important choosing a hosting
          tech stack can be, what that enables a project to become, and what
          it can do to hold a project back. Not to mention that it has made me
          painfully comfortable with the details of hosting a site/app, such as SSL
          certificates, domains/DNS, and all the nitty-gritty around performance.
        </p>
        <br />
        <p>
          At the end of the day, learning is what I do best. I'm always
          available to tackle new challenges and work hard to complete the
          task at hand. I hope this sounds like someone you want a part of your
          team.
        </p>
        </div>
        </>
    },
]