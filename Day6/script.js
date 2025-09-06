const keywords = [
   { 
    title: "Semantic HTML Elements", 
    desc: "Elements like &lt;header&gt;, &lt;article&gt;, &lt;footer&gt; give meaning to content.", 
    category: "HTML" 
  },
  { title: "Document Structure", desc: "HTML pages follow a structure: DOCTYPE, head, and body.", category: "HTML" },
  { title: "Accessibility Attributes", desc: "Attributes like aria-label improve usability for screen readers.", category: "HTML" },
  { 
    title: "HTML5 Features", 
    desc: "Includes new input types, &lt;video&gt;, &lt;audio&gt;, and &lt;canvas&gt;.", 
    category: "HTML" 
  },
  { title: "CSS Selectors and Properties", desc: "Selectors target elements, properties style them.", category: "CSS" },
  { title: "Box Model", desc: "Every element is a box with content, padding, border, and margin.", category: "CSS" },
  { title: "Flexbox Layout", desc: "A layout model to align items in rows or columns.", category: "CSS" },
  { title: "CSS Transitions and Animations", desc: "Add motion and effects smoothly.", category: "CSS" },
  { title: "Styling Interactive Elements", desc: "Pseudo-classes like :hover and :focus style interactions.", category: "CSS" },

  { title: "JavaScript Syntax and Keywords", desc: "var, let, const define variables; if, for, return control flow.", category: "JavaScript" },
  { title: "Functions and Objects", desc: "Functions group logic; objects store related data.", category: "JavaScript" },
  { title: "DOM Manipulation", desc: "JavaScript changes HTML/CSS dynamically via the DOM API.", category: "JavaScript" },
  { title: "Event Handling", desc: "Functions triggered by user actions like clicks or key presses.", category: "JavaScript" },
  { title: "Array Filtering", desc: "filter() returns items that match conditions.", category: "JavaScript" },
  { title: "Accessibility in Scripts", desc: "Ensure interactive elements are keyboard and screen-reader friendly.", category: "JavaScript" },
  { title: "Developer Tools and Debugging", desc: "Browsers offer consoles and inspectors to debug code.", category: "JavaScript" },
];

function renderKeywords(filter = "All") {
  const container = document.getElementById("keywords");
  container.innerHTML = "";
  keywords
    .filter(k => filter === "All" || k.category === filter)
    .forEach(k => {
      const card = document.createElement("div");
      card.className = `card ${k.category}`;
      card.innerHTML = `
        <h3>${k.title}</h3>
        <p>${k.desc}</p>
        <span class="category">${k.category}</span>
      `;
      container.appendChild(card);
    });
}

function filterCategory(category, e) {
  document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
  renderKeywords(category);
}

renderKeywords();

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const container = document.getElementById("keywords");
  container.innerHTML = "";

  keywords
    .filter(k => k.title.toLowerCase().includes(query) || k.desc.toLowerCase().includes(query))
    .forEach(k => {
      const card = document.createElement("div");
      card.className = `card ${k.category}`;
      card.innerHTML = `
        <h3>${k.title}</h3>
        <p>${k.desc}</p>
        <span class="category">${k.category}</span>
      `;
      container.appendChild(card);
    });
});
document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const container = document.getElementById("keywords");
  container.innerHTML = "";

  keywords
    .filter(k => k.title.toLowerCase().includes(query) || k.desc.toLowerCase().includes(query))
    .forEach(k => {
      const card = document.createElement("div");
      card.className = `card ${k.category}`;
      card.innerHTML = `
        <h3>${k.title}</h3>
        <p>${k.desc}</p>
        <span class="category">${k.category}</span>
      `;
      container.appendChild(card);
    });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  document.getElementById("backToTop").style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
};

document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
// ✅ Initial Render


renderKeywords();
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
} 
