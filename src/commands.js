export let commands = [
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
            {/* TODO list out commands using either a list or manually */}
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
                <li>--pig-game</li>
                <li>--weather-app</li>
                <li>--mock-bank</li>
            </ul>
            </div>
            <br />
            <div className="payload-body">
            <p>React JS</p>
            <ul>
                <li>--improved-new-tab</li>
                <li>--listify</li>
                <li>--portfolio-site</li>
            </ul>
        </div>
        </>
    },
    {
        command: "/projects --pig-game",
        payload: 
        <>
        <h4 className="payload-body">-- The Pig Game --</h4>
        <br />
        <div className="payload-body">
            <p>
            Contrary to popular belief, the pig game actually contains ZERO pigs. This is actually a two player dice game, a race to 100 points.
            <br />
            <br />
            In this game, there are two players who take turns rolling a die. Each round, one player can roll the dice, if they roll a "1", their turn is over and they earn no points for that turn. However, the player can choose to end their turn and take the points instead of risking rolling a "1". First player to 100 points wins!
            <br />
            <br />
            This uses vanilla JS, HTML and CSS, all the source code is on my Github <a href="https://github.com/jon-tschida/Pig-game" target="_blank" rel="noreferrer">HERE</a>
            </p>
        </div>
        </>
    },
    {
        command: "clear",
        payload: ""
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
                <li>Problem Solving</li>
                <li>WordPress Development</li>
                <li>WordPress troubleshooting</li>
                <li>Trainability</li>
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
          available.
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