function handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Friends</title>
    <style>
        body {
            background-image: url('https://images.unsplash.com/photo-1616088410192-d1b123712994?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaW1hbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 20px;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
        }
        h1 {
            color: #fff;
            text-align: center;
        }
        p {
            margin-bottom: 20px;
            color: #fff;
            text-align: justify;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Friends: A Treasure Beyond Measure</h1>
    
        <p><i>In laughter shared and tears embraced,
In moments cherished, time's sweet taste.
Through trials faced and joys unfurled,
You are the anchor in my world.<i></p>

        <p><i>With hearts entwined, through thick and thin,
In every storm, you are my kin.
A bond that grows, steadfast and true,
Forever cherished, I love you.</i></p>
<p>_______________________________________________</p>
<p>I am grateful beyond words for the friendships that have blossomed into a tapestry of memories and shared dreams. They are my sounding board, my cheerleaders, and my partners in crime. Because of them, I've learned the value of loyalty, empathy, and the beauty of being unapologetically myself.

As I look ahead to new horizons, I carry their love and support with me, knowing that with friends like these, every challenge is surmountable and every joy is sweeter. They are not just friends—they are family, and I am infinitely grateful for their presence in my life.</p>

        
        <p>Click <a href="/">here</a> to go to the home page.</p>
    </div>
</body>
</html>

    `);
    res.end();
}

module.exports = { handleRequest };
