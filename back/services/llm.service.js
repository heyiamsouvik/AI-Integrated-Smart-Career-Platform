exports.generateDesign = async () => {
  try {
    const prompt = `
You are an award-winning senior frontend architect and UI designer.

Generate premium, modern, production-quality CSS and minimal JavaScript.

IMPORTANT:
- DO NOT return JSON
- DO NOT use backticks
- DO NOT explain anything
- DO NOT include HTML
- Only CSS and JS

Return strictly in this format:

---CSS---
<css here>
---JS---
<js here>

DESIGN REQUIREMENTS:

Visual Style:
- Modern SaaS landing page style
- Indigo / Blue gradient hero
- Clean white sections
- Glassmorphism cards
- Soft shadows
- Subtle border highlights
- Elegant hover transitions

Typography:
- Font: 'Poppins'
- Clear hierarchy
- Large hero heading (clamp responsive)
- Proper spacing scale (8px system)

Layout:
- Max width container (1200px)
- Centered layout
- Generous whitespace
- Proper section padding (100px desktop, 60px mobile)

Components:
- Sticky navbar with blur background on scroll
- Hero with gradient + subtle radial overlay
- Profile image: circular, 160px, shadowed
- Cards with hover lift effect
- Skill tags as pill badges
- Smooth scroll behavior
- Fade-in scroll reveal animations

Animations:
- Use CSS transitions
- Use transform + opacity only
- Avoid heavy JS

Responsiveness:
- Mobile first
- Use clamp() for typography
- Breakpoint at 768px

Quality:
- Use CSS variables (:root)
- Clean structure
- No inline styles
- No !important
- No messy repeated rules
- Professional spacing

Make it look like a real premium portfolio.
`;


    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.4,
          max_tokens: 1500
        })
      }
    );

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Extract CSS
    const cssMatch = content.match(/---CSS---([\s\S]*?)---JS---/);
    const jsMatch = content.match(/---JS---([\s\S]*)/);

    const css = cssMatch ? cssMatch[1].trim() : "";
    const js = jsMatch ? jsMatch[1].trim() : "";

    return { css, js };

  } catch (err) {
    console.error("Groq Design Generation Error:", err);

    return {
      css: `
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
}
`,
      js: `console.log("Fallback loaded");`
    };
  }
};