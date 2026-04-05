from pathlib import Path
path = Path('index.html')
text = path.read_text(encoding='utf-8')
start = text.index('<!-- ABOUT -->')
end = text.index('<!-- SKILLS -->', start)
replacement = '''<!-- ABOUT -->
<section id="about">
  <div class="sec-eyebrow">About Me</div>
  <h2 class="sec-title reveal">Who I <span class="gr">Am</span></h2>
  <div class="sec-divider"></div>

  <div class="about-grid">
    <div class="about-photo-col reveal">
      <div class="photo-frame">
        <div class="photo-img" aria-hidden="true" style="background:radial-gradient(circle at 30% 30%, rgba(255,255,255,.18), rgba(109,40,217,.13) 35%, rgba(5,5,15,.95) 100%);"></div>
        <div class="photo-badge b1"><span class="pb-icon">🎓</span> CSE Student</div>
        <div class="photo-badge b2"><span class="pb-icon">💻</span> Full-Stack</div>
      </div>
    </div>
    <div class="about-info-col reveal">
      <p class="about-bio">I am a Computer Science &amp; Engineering student at NIE Mysuru, building modern full-stack web applications with clean code, thoughtful UX, and scalable backend systems. I enjoy solving real problems through intuitive digital experiences.</p>
      <ul class="about-traits">
        <li><span class="trait-icon">⚡</span> Fast learner of web technologies</li>
        <li><span class="trait-icon">🧠</span> Problem solver with attention to detail</li>
        <li><span class="trait-icon">🤝</span> Team player focused on collaboration</li>
      </ul>
      <div class="about-stats">
        <div class="stat-box">
          <div class="stat-num">6+</div>
          <div class="stat-lbl">Technologies</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">12+</div>
          <div class="stat-lbl">Projects</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">100%</div>
          <div class="stat-lbl">Focus</div>
        </div>
      </div>
    </div>
  </div>
</section>

'''
text = text[:start] + replacement + text[end:]
path.write_text(text, encoding='utf-8')
print('updated about section')
