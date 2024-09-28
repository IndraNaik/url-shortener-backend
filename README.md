
<h1>URL Shortener Backend</h1>

<p>This is the backend service for the URL shortener application. It is built with <strong>Node.js</strong>, <strong>Express.js</strong>, and uses <strong>MongoDB</strong> as the database. It generates short URLs for long URLs using <strong>nanoid</strong>.</p>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Node.js</strong>: JavaScript runtime environment.</li>
    <li><strong>Express.js</strong>: Web framework for Node.js used to build the API.</li>
    <li><strong>MongoDB</strong>: NoSQL database to store the long URLs and their corresponding short codes.</li>
    <li><strong>nanoid</strong>: Library used to generate unique short codes for URLs.</li>
</ul>

<h2>Installation</h2>
<p>Follow the steps below to set up the backend on your local machine.</p>

<ol>
    <li><strong>Clone the Repository</strong>
        <pre><code>git clone https://github.com/IndraNaik/url-shortener-backend.git
cd url-shortener-backend</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>
        <p>Run the following command to install the required packages:</p>
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Set Up MongoDB</strong>
        <p>Ensure MongoDB is installed and running on your machine, or connect to a MongoDB Atlas instance. By default, the backend connects to <code>mongodb://localhost:27017/urlshortener</code>. If using MongoDB Atlas, update the connection string in <code>server.js</code>.</p>
    </li>
    <li><strong>Start the Backend Server</strong>
        <p>Run the following command to start the server:</p>
        <pre><code>node server.js</code></pre>  or <br/>
       <pre><code>npm start --port 4000</code></pre>
        <p>The server will run at <code>http://localhost:4000</code>.</p>
    </li>
</ol>

<h2>API Endpoints</h2>

<h3>POST <code>/api/url</code></h3>
<p><strong>Description:</strong> Shortens a given long URL and stores it in the database.</p>
<p><strong>Request Body:</strong></p>
<pre><code>{
  "longUrl": "https://www.example.com"
}</code></pre>
<p><strong>Response:</strong></p>
<pre><code>{
  "shortUrl": "http://localhost:4000/abc12345"
}</code></pre>

<h3>GET <code>/:shortCode</code></h3>
<p><strong>Description:</strong> Redirects to the original long URL based on the short code provided.</p>
<p><strong>Example Request:</strong></p>
<pre><code>GET http://localhost:5000/abc12345</code></pre>
<p><strong>Response:</strong></p>
<ul>
    <li>If the short code exists, the user is redirected to the original long URL.</li>
    <li>If the short code doesn't exist, a <code>404 Not Found</code> response is returned.</li>
</ul>

<h2>Environment Variables (Optional)</h2>
<p>You can create a <code>.env</code> file in the root directory to manage environment variables, such as the MongoDB connection string. Example <code>.env</code> file:</p>
<pre><code>MONGO_URI=mongodb://localhost:27017/urlshortener
PORT=4000</code></pre>

<h2>Project Structure</h2>
<pre><code>.
├── models/
│   └── Url.js          # Mongoose schema for URLs
├── server.js           # Main server file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation</code></pre>

<h2>Contributing</h2>
<p>Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
