function handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Me</title>
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
                    min-height: 100vh;
                }
                .content {
                    background: rgba(0, 0, 0, 0.6);
                    padding: 20px;
                    border-radius: 10px;
                    width: 80%;
                    max-width: 800px;
                    margin: 20px;
                    text-align: left;
                }
                .profile-pic {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: center;
                    margin: 20px auto;
                    display: block;
                    transition: transform 0.3s ease-in-out;
                }
                .profile-pic:hover {
                    transform: scale(1.1);
                }
                h1 {
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #ffcc00;
                }
                p {
                    line-height: 1.6;
                    margin-bottom: 20px;
                    color: #ffffff;
                }
                .gallery {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    margin-top: 20px;
                }
                .gallery img {
                    width: calc(33.33% - 20px);
                    max-width: 300px;
                    height: auto;
                    border-radius: 10px;
                    margin: 10px;
                    transition: transform 0.3s ease-in-out;
                    cursor: pointer;
                }
                .gallery img:hover {
                    transform: scale(1.1);
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
            <div class="content">
                <img src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t1.6435-9/212245158_4116771891775586_7951960856025946357_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_ohc=jQ8qJGS-TjIQ7kNvgFW6c8j&_nc_ht=scontent.fmnl31-1.fna&oh=00_AYAUuiDdeqGgBrdWusJNCFOT7qAJIx_fa7PJXKuJolDGyA&oe=66B9635C" alt="Profile Picture" class="profile-pic">
                <h1>About Me</h1>
                <p>Hey there, I'm Alyssa May Tizon, a 22-year-old BSIT student at DLSUD. As I eagerly approach my final year in college, I'm balancing my excitement for the future with a deep appreciation for the present—whether it's studying with friends or exploring new hobbies like coding.</p>
                <p>Beyond academics, I have a passion for travel and a dream to live abroad someday. The thought of immersing myself in different cultures and landscapes fills me with anticipation and wonder. At home, I cherish moments with my cat Mei and stay active with badminton.</p>
                <p>In my downtime, you'll find me indulging in TV series, anime, and music—a perfect escape after a day of learning and exploring. But above all, my friends are my constants, bringing joy and support to every adventure life brings.</p>
                <p>I believe life is about embracing opportunities, whether they're found in a new coding challenge, a favorite TV series, or a journey to a distant land. I'm excited to see where these passions and dreams take me next!</p>
                
                <div class="gallery">
                    <img src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t39.30808-6/320511861_686960169567308_1933420417298461960_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dcYUNo73BloQ7kNvgHtCZXP&_nc_ht=scontent.fmnl31-1.fna&oh=00_AYCXXlFTOD7wh5q4L6dPuRIwEIWz1Tduk0YcSLPqTruoBg&oe=6697C98E" alt="Image 1">
                    <img src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t39.30808-6/278612854_5018309871621779_8811523574087251381_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uY2QXhkzMGkQ7kNvgGqtH4W&_nc_ht=scontent.fmnl31-1.fna&oh=00_AYCig0PHiNcyXjpZoqVVH47n0Hnf9DR5ZmwYqjZWKRBarw&oe=6697BF62" alt="Image 2">
                    <img src="https://nordicnews.net/wp-content/uploads/2019/05/Screen-Shot-2019-05-23-at-10.02.55-PM-2-718x900.jpg" alt="Image 3">
                </div>
                <div class="home-link">
                <p>Click <a href="/activity3">here</a> to go to the home page.</p>
            </div>
        </body>
        </html>
    `);
    res.end();
}

module.exports = { handleRequest };
