function handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>One Piece Page</title>
            <style>
                body {
                    background-image: url('https://wallpapers.com/images/featured/one-piece-c0pujiakubq5rwas.jpg');
                    background-size: cover;
                    background-position: center;
                    color: white;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                }
                .content {
                    background: rgba(0, 0, 0, 0.6);
                    padding: 20px;
                    border-radius: 10px;
                    max-width: 40%;
                    margin: 20px;
                    text-align: justify;
                    line-height: 1.6;
                }
                .logo {
                    width: 500px;
                    height: auto;
                    margin-top: -50px;
                    margin-bottom: 20px;
                }
                h1 {
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                p {
                    margin-bottom: 20px;
                }
                a {
                    color: #ffcc00;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa4UAEx4vGcwwHQGJ4rLB3zaYiVdZZ7lgSdgv8OAWEb34BGXEFbNumHPKAupfLMmOiOD-DIsXy5DRklM_Qk9xwIape-S7O0u67l4BYO9Ghj-.png?r=74a" alt="OP" class="logo">
            <div class="content">
                <h1>The journey to One Piece</h1>
                <p>It all started with my older brother, always excitedly talking about "One Piece" during our family dinners. He would vividly describe the adventures of Monkey D. Luffy and his crew, sailing through the Grand Line in search of treasure.</p>
                <p>"Alyssa, you've got to watch this show," he'd say eagerly, his eyes shining with enthusiasm. "Each episode is full of action, humor, and amazing characters."</p>
                <p>His passion intrigued me, even though I hadn't seen a single episode. His storytelling made me curious about the world he described—a world where pirates soared through the skies and dreams were as boundless as the ocean.</p>
                <p>One lazy Saturday afternoon, I finally decided to give "One Piece" a try. From the very first episode, I was captivated. The determination of Luffy, the bond between his crewmates, and the vast, unpredictable adventures they embarked on drew me in.</p>
                <p>As I continued watching, I found myself eagerly anticipating each new episode, marveling at the creativity and depth of the storyline. What began as a suggestion from my brother became a shared interest. We bonded over our favorite moments and debated the strengths of different characters.</p>
                <p>"One Piece" isn't just a show to me now—it's a journey. It's about discovery, laughter, and the power of dreams and friendship.</p>
                <p>Thanks to my brother's enthusiasm and his lively storytelling, I discovered a world that has become a part of my own adventures. And as I sail alongside Luffy and his crew, I know that the excitement is only just beginning.</p>
               <p>Click <a href="/activity3">here</a> to go to the main page.</p>
            </div>
        </body>
        </html>
    `);
    res.end();
}

module.exports = { handleRequest };
