"use strict";
import React from 'react';
export default class AboutPage extends React.Component {
  render() {
    return (
        <div>
            <h2 className='title-text'>about</h2>
            <ul>
                <li>who's jackson breyer?</li>
                    <p>I had an English degree (focus on Linguistics) when I began work as a paralegal. I didn't like where things were headed, so I taught myself to program at nights. I spent a year and a half learning and developing personal projects. At that point, I decided I needed a more robust education in Computer Science so I applied for a graduate degree.</p>

                    <p>Of the schools I was accepted to, Brandeis turned out to be the best fit. They were amenable to letting me take core classes in CS as well as explore topics I found interesting, like NLP.</p>

                    <p>During the summer between years at Brandeis, I interned at Ginger.io, where I wrote backend code in Django and learned a whole lot. I had a great experience there.</p>

                    <p>Now I'm graduating from Brandeis and I'm really excited to see where the journey takes me.</p>
                <li>languages</li>
                    <p>Python, Ruby, Java, SQL, HTML, CSS, Javascript</p>
                <li>frameworks</li>
                    <p>Django, Rails, Android, Postgres</p>
                <li>other tools + areas</li>
                    <p>Git, Databases, Natural Language Processing, Automated Testing</p>
                </ul>
        </div>
    );
  }
}