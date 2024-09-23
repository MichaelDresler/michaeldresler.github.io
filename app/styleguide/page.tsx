
export default function styleguide() {


    return (
      <div>
<h1>Heading 1</h1>
<h2>Heading 2</h2>

<p>This is a paragraph of text.</p>
<span>This is inline text within a paragraph.</span>


<a href="https://example.com">This is a hyperlink</a>


<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
</ul>

<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
</ol>

<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data cell 1</td>
        <td>Data cell 2</td>
    </tr>
</table>


<header>
    <h1>Site Header</h1>
</header>

<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
</nav>

<main>
    <section>
        <article>
            <h2>Article Title</h2>
            <p>Content of the article goes here.</p>
        </article>
    </section>
    <aside>
        <p>This is an aside element.</p>
    </aside>
</main>

<footer>
    <p>&copy; 2023 Your Name</p>
</footer>

<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="50" rx="10" ry="10" fill="skyblue" stroke="black" stroke-width="2" />
    <circle cx="200" cy="35" r="25" fill="red" stroke="black" stroke-width="2" />
    <ellipse cx="300" cy="35" rx="50" ry="25" fill="green" stroke="black" stroke-width="2" />
    <line x1="10" y1="100" x2="390" y2="100" stroke="purple" stroke-width="2" />
    <polygon points="200,60 216,95 254,95 222,115 233,150 200,130 167,150 178,115 146,95 184,95" fill="gold" stroke="black" stroke-width="2" />
    <polyline points="10,150 50,180 90,150 130,180 170,150" stroke="orange" stroke-width="2" fill="none" />
    <path d="M150 100 C150 75 200 75 200 100 C200 125 150 150 150 175 C150 150 100 125 100 100 C100 75 150 75 150 100 Z" fill="pink" stroke="red" stroke-width="2" />
    <text x="200" y="190" font-family="Verdana" font-size="20" fill="black" text-anchor="middle">SVG Graphics</text>
</svg>

<h3>SVG Gradients and Patterns</h3>


<h3>SVG Transformations</h3>
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="50" fill="lightblue" stroke="black" stroke-width="2" />
    <rect x="10" y="10" width="80" height="50" fill="lightgreen" stroke="black" stroke-width="2" transform="translate(100,0)" />
    <rect x="10" y="10" width="80" height="50" fill="lightcoral" stroke="black" stroke-width="2" transform="rotate(45, 50, 35)" />
    <rect x="10" y="10" width="80" height="50" fill="lightyellow" stroke="black" stroke-width="2" transform="scale(1.5)" />
    <rect x="10" y="10" width="80" height="50" fill="plum" stroke="black" stroke-width="2" transform="translate(200,100) rotate(30) scale(1.2)" />
</svg>

      </div>
    );
  }
  