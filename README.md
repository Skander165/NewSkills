# NewSkills

<h5 class="code-line" data-line-start=1 data-line-end=2 ><a id="A_Business_Network_project_1"></a>A Business Network project</h5>
<h1 class="code-line" data-line-start=4 data-line-end=5 ><a id="_4"></a></h1>
<h2 class="code-line" data-line-start=5 data-line-end=6 ><a id="Overview_5"></a>Overview</h2>
<p class="has-line-data" data-line-start="6" data-line-end="7">This project was developed by the company Vyemedia following the request of the client. Its main objective is to bring together individual investors to carry out joint investment projects. The financial education aspect is also one of the main objectives of this project, with analyses of national and global economic news as a guideline.</p>
<p class="has-line-data" data-line-start="8" data-line-end="9">The projet is currently still in a development state. Within this documentation, we will explain the current state of the project, the necessary configurations and some guidelines for picking up the development process.</p>
<p class="has-line-data" data-line-start="10" data-line-end="11">This project follows the design provided by the Vyemedia company and available at <a href="https://www.figma.com/file/bKUNQ4W6ghNr6Fpi5VPJD8/New-skills?node-id=0%3A1&amp;t=nuITsMESGlwRdAbv-0">https://www.figma.com/file/bKUNQ4W6ghNr6Fpi5VPJD8/New-skills?node-id=0%3A1&amp;t=nuITsMESGlwRdAbv-0</a></p>
<h2 class="code-line" data-line-start=12 data-line-end=13 ><a id="Technologies_12"></a>Technologies</h2>
<ul>
<li class="has-line-data" data-line-start="13" data-line-end="14">The project was developed using the Next.Js Framework version 12, which is a React.js and Node.js Framework. To learn more about Next.js, check their official website at <a href="https://nextjs.org/">https://nextjs.org/</a></li>
<li class="has-line-data" data-line-start="14" data-line-end="16">This project uses Material UI version 5, The Server Side Rendering aspect of Next.js conflicts with Material UI styling, but this issue was resolved by using Material UI official template with Next.js. To learn more about Material UI, check their official website at <a href="https://mui.com/">https://mui.com/</a><br>
– The files responsbile for this configuration are: <code>createEmotionCache.js</code>, <code>_document.js</code>.</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">For authentication, this project Uses Next-Auth, which is a complete open-source authentication solution for Next.js applications. to learn more, check their official website at <a href="https://next-auth.js.org/">https://next-auth.js.org/</a></li>
</ul>
<h2 class="code-line" data-line-start=19 data-line-end=20 ><a id="Installation_19"></a>Installation</h2>
<p class="has-line-data" data-line-start="20" data-line-end="21">Clone the project, and install the dependencies using</p>
<pre><code class="has-line-data" data-line-start="22" data-line-end="24">yarn
</code></pre>
<p class="has-line-data" data-line-start="25" data-line-end="26">After installation, run the project using</p>
<pre><code class="has-line-data" data-line-start="27" data-line-end="29">yarn dev
</code></pre>
<p class="has-line-data" data-line-start="30" data-line-end="31">In order for this project to work as expected, you need to configure the environment variables:</p>
<ul>
<li class="has-line-data" data-line-start="31" data-line-end="32">Create a .env.local file</li>
<li class="has-line-data" data-line-start="32" data-line-end="39">add the following variables:<br>
– MONGO_URL : your mongodb link<br>
– NODE_ENV : set it to “development” while developing the project, and to “production” while in production state<br>
– GOOGLE_CLIENT_ID : Necessary for Next-auth to run the google authentication<br>
– GOOGLE_CLIENT_SECRET: Necessary for Next-auth to run the google authentication<br>
– NEXTAUTH_SECRET: any random string. It’s necessary for Next-auth to function correctly.</li>
</ul>
<h2 class="code-line" data-line-start=39 data-line-end=40 ><a id="Front_End_39"></a>Front End</h2>
<p class="has-line-data" data-line-start="40" data-line-end="41">Next.js has a file-system based router built on the concept of pages. Any file that gets added to the Pages directory, is automatically available as a route. For example, if we add a Contact.jsx file in the pages directory, the content of that file will be automatically available in <a href="http://localhost:3000/contact">http://localhost:3000/contact</a></p>
<p class="has-line-data" data-line-start="42" data-line-end="43">To create a cleaner project, we adopted a components approach. Each component is created in a seperate file in the components directory, and then gets imported into its page file.</p>
<h3 class="code-line" data-line-start=44 data-line-end=45 ><a id="The_Layout_component_44"></a>The Layout component</h3>
<p class="has-line-data" data-line-start="45" data-line-end="46">The layout component helps define the general structure of any page in the website. For now, it just insert a Header component and a Footer component between the children Components. in the <code>_app.js</code> file, the Layout components wraps the <code>&lt;Component {...pageProps} /&gt;</code></p>
<h3 class="code-line" data-line-start=47 data-line-end=48 ><a id="Responsiveness_47"></a>Responsiveness</h3>
<p class="has-line-data" data-line-start="48" data-line-end="49">Since Material UI was used for developing the user interface, most of the components were developed using the <code>Grid</code> component which makes implementing responsiveness relatively simple. Some components implemented responsiveness, some did not. Please make sure to test the interface and check the code along with Material UI</p>
<h3 class="code-line" data-line-start=51 data-line-end=52 ><a id="Theme_51"></a>Theme</h3>
<p class="has-line-data" data-line-start="52" data-line-end="53">Material UI allows you to create a Theme, to make recurring front-end configuration like Background Color, text color and other configurations easy to maintain. Please be sure to check the <code>lightTheme.js</code> file in the <code>styles/theme/lightTheme.js</code> directory. this file is not final, please be sure to check the Material UI documentation to learn how to extend it.</p>
<p class="has-line-data" data-line-start="54" data-line-end="55">NB: the <code>global.css</code> and the <code>Home.module.css</code> are native to Next.js and are not used in this project, feel free to delete them.</p>
<h2 class="code-line" data-line-start=57 data-line-end=58 ><a id="Backend_57"></a>Backend</h2>
<p class="has-line-data" data-line-start="58" data-line-end="59">This is where we are gonna explain the current state of the APIs, authentication and other Backend related configurations.</p>
<h3 class="code-line" data-line-start=59 data-line-end=60 ><a id="Database_59"></a>Database</h3>
<p class="has-line-data" data-line-start="60" data-line-end="61">We used the mongoDB database to set up this project. The models were partly defined in the models directory, their configuration is not final.</p>
<h3 class="code-line" data-line-start=62 data-line-end=63 ><a id="MongoDB_packages_62"></a>MongoDB packages</h3>
<p class="has-line-data" data-line-start="63" data-line-end="66">In the lib directory, we set up two MongoDB related files:<br>
<code>mongo.js</code>: This file uses mongoose to set up the database connection and is used in the interaction with Models and in creating APIs<br>
<code>mongodb.js</code>: This file is required for Next-Auth, it uses the mongodb package.</p>
<h3 class="code-line" data-line-start=67 data-line-end=68 ><a id="Next_Auth_67"></a>Next Auth</h3>
<p class="has-line-data" data-line-start="68" data-line-end="69">To configure Next-Auth, a file named <code>[...nextauth].js</code> is set up in the <code>/pages/api/auth</code> directory. This file includes the providers, the credentials login logic and the adapters. This file is not final, it still requires further configuration.</p>
<p class="has-line-data" data-line-start="70" data-line-end="71">The Google authentication authenticates the user and creates the session, but the Front-end is still not configured to be dynamic for that specific user. The credentials Login still isn’t fully functional. Next-Auth requires you to add your own logic when implementing the credentials login. the Logic is added but still displays some errors.</p>
<h3 class="code-line" data-line-start=72 data-line-end=73 ><a id="Sign_Up_72"></a>Sign Up</h3>
<p class="has-line-data" data-line-start="73" data-line-end="74">For credentials login, Next-Auth only supports the login process. It doesn’t include the signing up process. This logic needs to be implemented manually. In <code>register.js</code>, We implemented a sign up process that includes:</p>
<ul>
<li class="has-line-data" data-line-start="74" data-line-end="75">Verifying the existence of a user</li>
<li class="has-line-data" data-line-start="75" data-line-end="76">Verifying password length</li>
<li class="has-line-data" data-line-start="76" data-line-end="77">Hashing the password</li>
<li class="has-line-data" data-line-start="77" data-line-end="79">Verifying that the username is unique.</li>
</ul>
<h3 class="code-line" data-line-start=79 data-line-end=80 ><a id="dummy_data_79"></a>dummy data</h3>
<p class="has-line-data" data-line-start="80" data-line-end="81">For testing purposes, we created the file <code>data.js</code> in the <code>utility/data.js</code> directory.</p>
