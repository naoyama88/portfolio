import React from 'react';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Marcus</h1>
        <nav>
          <ul>
            <li>Skills</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="heroarea">
          <section className="pic-icons">
            <div>
              Profile Picture
            </div>
            <div>
              <ul>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
          </section>
          <section>
            <h2>Marcus Naoya Araki</h2>
            <h3>Full-stack Web Developer currently into Front-end tech</h3>
            <p>
              Hi! I am Marcus.
              A web developer with solid backend skills is looking for an
              opotunity to work as Front-end Developer (preffered).
              I can also work as a Full-stack Developer.
              Making web application with PHP was my area,
              and I’m currently working on Front-end stuff using React as JS framework.
            </p>
          </section>
        </section>
        <section className="skills">
          <section className="main-skills">
            <h2>Skills</h2>
            <div>
              <ul>
                <li><div>PHP</div></li>
                <li><div>Laravel</div></li>
                <li><div>JS</div></li>
                <li><div>React</div></li>
                <li><div>Redux</div></li>
                <li><div>Nodejs</div></li>
                <li><div>MySQL</div></li>
                <li><div>HTML5</div></li>
                <li><div>CSS3</div></li>
                <li><div>jQuery</div></li>
              </ul>
            </div>
          </section>
          <section className="sub-skills">
            <h3>With support skills</h3>
            <div>
              <ul>
                <li><div>Git</div></li>
                <li><div>Github</div></li>
                <li><div>Source Tree</div></li>
                <li><div>Oh My Zsh</div></li>
                <li><div>VSCode</div></li>
                <li><div>Figma</div></li>
                <li><div>ESLint</div></li>
                <li><div>npm</div></li>
                <li><div>Composer</div></li>
                <li><div>PHPUnit</div></li>
                <li><div>Docker</div></li>
                <li><div>Vagrant</div></li>
              </ul>
            </div>
          </section>
          <section className="Experience">
            <h2>Experience</h2>
            <section className="BASE">
              <header>
                <h3>Full-Stack Developer, startup BASE</h3>
                <ul>
                  <li>Vancouver, Canada</li>
                  <li>Nov 2019 - April 2020</li>
                  <li><a href="https://base.town/">https://base.town/</a></li>
                </ul>
                <p>
                  <span role="img" aria-label="finger">☝️</span>
                  Worked with international people and designed,
                  argued about our app with developers
                </p>
                <p>
                  <span role="img" aria-label="finger">☝️</span>
                  Helped beginners about coding when they need
                </p>
              </header>
              <main>
                <article>
                  <h3>Projects</h3>
                  <div>
                    <div className="left">
                      <section className="project1">
                        <h4>Admin Panel for Student Evaluation App</h4>
                        <ul>
                          <li>Created an admin website from free React View Framework</li>
                          <li>
                            Created SPA with CRUD operation through provided web API,
                            and Firebase Authentication
                          </li>
                          <li>
                            Technologies used: React, Redux, Firebase auth,
                            npm, Git, CSS, WebSocket
                          </li>
                        </ul>
                      </section>
                      <section className="project2">
                        <h4>Chat web app</h4>
                        <ul>
                          <li>Created an chat web app using React with MobX & TypeScript</li>
                          <li>Created crud function connected though WebSocket</li>
                          <li>
                            Technologies used: React, MobX,
                            TypeScript, WebSocket, npm, Git, CSS
                          </li>
                        </ul>
                      </section>
                      <section className="project3">
                        <h4>Public web service</h4>
                        <ul>
                          <li>
                            Created an website which shows chat user &
                            schools’ satatus that we analyzed
                          </li>
                          <li>Technologies used: Golang, Gin, CouchBase, html, css, Git</li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </article>
                <article>
                  <h3>What I Experienced</h3>
                  <div>
                    <h5>Tech</h5>
                    <div>
                      <h6>Front-end</h6>
                      <ul>
                        <li>React</li>
                        <li>MobX</li>
                        <li>React Bootstrap</li>
                        <li>TypeScript</li>
                        <li>WebSocket</li>
                      </ul>
                    </div>
                    <div>
                      <h6>Back-end</h6>
                      <ul>
                        <li>Go</li>
                        <li>Gin</li>
                        <li>Couchbase</li>
                        <li>Firebase</li>
                        <li>WebSocket</li>
                        <li>Bitbucket Pipeline</li>
                        <li>Docker</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h5>General</h5>
                    <ul>
                      <li>Commucication with others from remote</li>
                      <li>Discussed about product with team mate</li>
                      <li>Saw what Ceo in startup does</li>
                      <li>Product grew up in very first phase</li>
                      <li>How poor company works</li>
                    </ul>
                  </div>
                </article>
              </main>
            </section>
            <section className="System-Quest">
              <header>
                <h3>Web Developer, System Quest Inc.</h3>
                <ul>
                  <li>Tokyo, Japan</li>
                  <li>Apr 2014 - Sep 2018</li>
                  <li><a href="https://www.s-quest.co.jp/">https://www.s-quest.co.jp/</a></li>
                </ul>
                <p>
                  <span role="img" aria-label="finger">☝️</span>
                  Represented System Quest at a variety of companies as an
                  in-house contracted web developer (see projects below)
                </p>
                <p>
                  <span role="img" aria-label="finger">☝️</span>
                  Adapted to changing environments, projects and workplaces
                </p>
              </header>
              <main>
                <article>
                  <h3>Projects (picked some of all confidectial works)</h3>
                  <div>
                    <div className="left">
                      <section className="project1">
                        <h4>Event Portal Website</h4>
                        <ul>
                          <li>
                            Created a website from scratch to list events (similar to Eventbrite)
                          </li>
                          <li>
                            Developed an event registration page for administrator use
                          </li>
                          <li>
                          Technologies used: PHP, Laravel, MySQL, Git, HTML, CSS, Bootstrap, jQuery
                          </li>
                        </ul>
                      </section>
                      <section className="project2">
                        <h4>Accommodation Search Web Application</h4>
                        <ul>
                          <li>Website for users to rent rooms, similar to Craigslist</li>
                          <li>
                            Implemented design using A/B testing, used the results to
                            fix features, and refactored as needed
                          </li>
                          <li>
                            Technologies used: Agile, PHP, ZendFramework, HTML,
                            CSS, BEM, JavaScript, Git, RestAPI, Vagrant, npm
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="right">
                      Picture
                    </div>
                  </div>
                </article>
                <article>
                  <h3>What I Experienced</h3>
                  <div>
                    <h5>Tech</h5>
                    <div>
                      <h6>Front-end</h6>
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>Rest API</li>
                        <li>Analyzing UX</li>
                      </ul>
                    </div>
                    <div>
                      <h6>Back-end</h6>
                      <ul>
                        <li>PHP</li>
                        <li>Laravel5</li>
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Apache</li>
                        <li>NginX</li>
                        <li>Vagrant</li>
                        <li>PHPUnit</li>
                        <li>Webpack</li>
                        <li>Docker</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h5>General</h5>
                    <ul>
                      <li>
                        Had been in variety of team (ex, number of member 3 & 100 & 8)
                      </li>
                      <li>Version control using Git, Subversion</li>
                      <li>Teach junior members</li>
                      <li>Cause critical bugs</li>
                      <li>Attitude of good developers</li>
                    </ul>
                  </div>
                </article>
              </main>
            </section>
          </section>
          <section className="Project">
            <h2>Projects</h2>
            <section className="jpcanadavanjob">
              <h3>JPCANADAVAN</h3>
            </section>
            <section className="base">
              <h3>BASE</h3>
            </section>
            <section className="Riddle">
              <h3>Riddle</h3>
            </section>
            <section className="Goncha">
              <h3>Goncha</h3>
            </section>
          </section>
        </section>
      </main>
      <footer>
        All right reserved.
      </footer>
    </div>
  );
};

export default App;
