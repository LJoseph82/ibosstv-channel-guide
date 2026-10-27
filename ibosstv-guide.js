
/* iBossTV LIVE Channel Guide | Central Master | v1.4 */
(function () {
  'use strict';

  const CHANNELS = [
    {
      name: "Spotlight",
      tagline: "Discover Talent. Explore Stories. Get Inspired.",
      overview: "Welcome to iBossTV Spotlight, where independent creators, emerging talent, and compelling stories take center stage.\n\nDiscover interviews, showcases, short films, and conversations that introduce the voices and visions shaping the creative world. From new discoveries to inspiring journeys, Spotlight celebrates the people and stories worth watching.\n\nTune in to explore fresh perspectives, connect with creativity, and discover talent you may not find anywhere else.",
      description: "Featured creators and stories",
      path: "/pages/livetv-spotlight",
      image: "assets/spotlight.png"
    },
    {
      name: "Originals",
      tagline: "Original Stories. Fresh Perspectives.",
      overview: "Welcome to iBossTV Originals, a home for original storytelling and fresh perspectives.\n\nExplore independent films, original series, documentaries, and creative productions that reflect the imagination and vision of storytellers. From thought-provoking narratives to entertaining discoveries, Originals brings distinctive programming together in one place.\n\nDiscover new voices and experience stories made to inform, entertain, and inspire.",
      description: "Original productions",
      path: "/pages/livetv-originals",
      image: "assets/originals.png"
    },
    {
      name: "Latino",
      tagline: "Nuestra Cultura. Nuestras Historias.",
      overview: "Welcome to iBossTV Latino, a channel celebrating Latino culture, creativity, and community.\n\nEnjoy films, music, entertainment, interviews, and stories that reflect the richness and diversity of Latino experiences. Discover artists, entrepreneurs, creators, and communities sharing their perspectives through engaging programming.\n\nFrom cultural traditions to contemporary voices, iBossTV Latino is a place to connect with stories that matter. Nuestra cultura. Nuestras historias.",
      description: "Latino voices and culture",
      path: "/pages/livetv-latino",
      image: "assets/latino.png"
    },
    {
      name: "Caribbean",
      tagline: "Experience the Islands. Celebrate the Culture.",
      overview: "Welcome to iBossTV Caribbean, where the vibrant cultures and creative voices of the Caribbean come together.\n\nExplore island-inspired music, entertainment, films, conversations, and stories celebrating the region's rich heritage and global influence.\n\nFrom local traditions to the experiences of Caribbean communities around the world, discover programming that connects people through creativity, identity, and shared experiences.",
      description: "Caribbean culture, music and entertainment",
      path: "/pages/livetv-caribbean",
      image: "assets/caribbean.png"
    },
    {
      name: "Haiti",
      tagline: "Discover Haiti. Celebrate Our Stories.",
      overview: "Welcome to iBossTV Haiti, a destination for Haitian culture, creativity, and storytelling.\n\nDiscover Haitian music, films, interviews, community features, and programming that celebrates the country's heritage and the voices of its people.\n\nExplore stories from Haiti and the Haitian diaspora, highlighting artists, entrepreneurs, traditions, and new perspectives. Connect with the creativity, resilience, and cultural richness that make Haiti's stories worth sharing.",
      description: "Haitian culture, heritage and entertainment",
      path: "/pages/livetv-haiti",
      image: "assets/haiti.png"
    },
    {
      name: "Kids",
      tagline: "Big Imaginations. Little Adventures. Endless Discovery.",
      overview: "Welcome to iBossTV Kids, a family-friendly destination for imagination, discovery, and entertainment.\n\nExplore stories, educational adventures, creative programming, and engaging content designed for young viewers and families to enjoy together.\n\nFrom playful learning to inspiring characters and imaginative experiences, iBossTV Kids makes room for curiosity and fun. Discover new adventures and stories that encourage children to explore the world around them.",
      description: "Family-friendly entertainment",
      path: "/pages/livetv-kids",
      image: "assets/kids.png"
    },
    {
      name: "Faith & Purpose",
      tagline: "Inspire Faith. Discover Purpose. Live with Meaning.",
      overview: "Welcome to iBossTV Faith & Purpose, a space for uplifting stories, meaningful conversations, and programming centered on faith, hope, and purpose.\n\nDiscover inspirational films, personal journeys, interviews, and perspectives that invite reflection and growth.\n\nWhether you're seeking encouragement, exploring questions of meaning, or connecting with stories of perseverance and belief, Faith & Purpose offers content designed to inspire thoughtful living and deeper connection.",
      description: "Faith, inspiration and purpose",
      path: "/pages/livetv-faith-purpose",
      image: "assets/faith-purpose.png"
    },
    {
      name: "Music & Culture",
      tagline: "Discover the Sounds. Experience the Culture.",
      overview: "Welcome to iBossTV Music & Culture, where music, artistry, and cultural expression take center stage.\n\nExperience music videos, performances, artist interviews, creative showcases, and stories exploring the sounds and influences that connect communities.\n\nDiscover emerging performers, established creative voices, and the cultural traditions behind the music. From new sounds to familiar rhythms, celebrate the artists and experiences that make music a universal language.",
      description: "Music and performances",
      path: "/pages/livetv-music-culture",
      image: "assets/music-culture.png"
    },
    {
      name: "Creator Central",
      tagline: "Where Creators Connect and Stories Come Alive.",
      overview: "Welcome to iBossTV Creator Central, a destination for filmmakers, artists, and creative entrepreneurs.\n\nGo behind the scenes of the creative process through interviews, conversations, production insights, showcases, and stories from people bringing ideas to life.\n\nDiscover how creators develop their craft, navigate challenges, collaborate, and build opportunities. Whether you create, support creative work, or simply love great storytelling, Creator Central connects you to the people behind the projects.",
      description: "Content for creative entrepreneurs",
      path: "/pages/livetv-creator-central",
      image: "assets/creator-central.png"
    },
    {
      name: "Previews",
      tagline: "Discover What's Coming Next.",
      overview: "Welcome to iBossTV Previews, your destination for discovering upcoming films, series, documentaries, and exciting content from independent creators.\n\nExplore movie trailers, show previews, promotional features, and sneak peeks that introduce you to new stories, emerging talent, and entertainment worth watching.\n\nWhether you're looking for your next favorite film, exploring original productions, or discovering independent storytellers, iBossTV Previews gives you a first look at what's coming to iBossTV and beyond. Watch LIVE. Discover your next favorite story.",
      description: "Trailers and what's coming",
      path: "/pages/livetv-previews",
      image: "assets/previews.png"
    },
    {
      name: "Inside the Brand – Florida",
      tagline: "Discover the People. Explore the Businesses. Experience the Stories.",
      overview: "Go inside the businesses, organizations, and stories shaping Florida's communities.\n\nInside the Brand – Florida takes viewers beyond products and services to discover the people, purpose, innovation, and experiences behind the brands making an impact. Through business profiles, entrepreneur interviews, community features, and behind-the-scenes storytelling, the channel highlights the individuals and organizations contributing to Florida's economic, creative, and community landscape.\n\nFrom emerging entrepreneurs to established businesses and community organizations, discover the stories behind the brands and the people bringing their visions to life.",
      description: "Stories behind Florida businesses and communities",
      path: "/pages/livetv-inside-the-brand-florida",
      image: "assets/inside-the-brand-florida.png"
    },
    {
      name: "Wellness Network",
      tagline: "Live Well. Grow Strong. Find Your Balance.",
      overview: "Welcome to iBossTV Wellness Network, a destination for health, fitness, and balanced living.\n\nExplore engaging conversations, expert perspectives, personal journeys, and programming covering movement, nutrition, mental well-being, and everyday wellness.\n\nDiscover practical ideas and inspiring stories from professionals and individuals committed to healthier living. Whether you're beginning your wellness journey or looking for new ways to grow, Wellness Network offers perspectives to help you make informed choices and find your balance.",
      description: "Health and wellness",
      path: "/pages/livetv-wellness-network",
      image: "assets/wellness-network.png"
    },
    {
      name: "LOLounge",
      tagline: "Laugh More. Enjoy the Moment.",
      overview: "Welcome to iBossTV LOLounge, a place to relax, laugh, and enjoy a little more humor in your day.\n\nDiscover stand-up comedy, funny sketches, comedic shorts, entertaining personalities, and lighthearted stories from independent creative voices.\n\nWhether you're taking a break or looking for your next laugh, LOLounge brings playful entertainment together in one channel. Settle in, discover something funny, and enjoy the moment.",
      description: "Independent comedians, stand-up specials, sketches and nonstop laughter",
      path: "/pages/livetv-lolounge",
      image: "assets/lolounge.png"
    }
    
    ,{
      name: "LifeWise",
      tagline: "Learn More. Live Better.",
      overview: "Welcome to iBossTV LifeWise, a channel dedicated to personal growth, practical knowledge, and the everyday lessons that help us navigate life with greater confidence and purpose.\n\nExplore engaging conversations, educational programming, inspiring stories, and real-world insights on topics such as personal development, relationships, communication, financial literacy, career growth, decision-making, and lifelong learning.\n\nWhether you're building better habits, navigating life's challenges, developing new skills, or discovering fresh perspectives, LifeWise brings together ideas and experiences designed to encourage meaningful growth. Because learning doesn't stop in the classroom, and personal growth doesn't have an expiration date. Watch LIVE. Keep learning. Live better.",
      description: "Personal growth and practical life skills",
      path: "/pages/livetv-lifewise",
      image: "assets/ibosstv-lifewise.png"
    }
  ];

  // Locate image assets relative to this script
  const currentScript = document.currentScript;

  const assetBase = currentScript && currentScript.src
    ? new URL('.', currentScript.src).href
    : window.location.href;

  // Existing approved visual design
  const css = `
    .ibg-guide{--ibg-teal:#00c2cb;--ibg-gold:#d4af37;box-sizing:border-box;width:100%;background:#11181d;color:#fff;border:1px solid #27363e;border-radius:16px;padding:22px;font-family:Arial,Helvetica,sans-serif}
    .ibg-guide *{box-sizing:border-box}
    .ibg-head{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-bottom:18px}
    .ibg-eyebrow{color:var(--ibg-teal);font-size:11px;letter-spacing:1.5px;font-weight:700}
    .ibg-title{font-size:24px;font-weight:800;margin:6px 0}
    .ibg-sub{color:#aab7bd;font-size:13px;margin:0;line-height:1.5}
    .ibg-toggle{flex-shrink:0;background:transparent;color:var(--ibg-teal);border:1px solid var(--ibg-teal);border-radius:8px;padding:10px 13px;font-size:12px;font-weight:700;cursor:pointer}
    .ibg-toggle:hover{background:#17353b}
    .ibg-list{display:flex;gap:13px;overflow-x:auto;padding:3px 2px 14px;scroll-snap-type:x proximity;scrollbar-color:#52636c transparent}
    .ibg-list.ibg-expanded{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));overflow:visible}
    .ibg-card{flex:0 0 205px;min-width:0;text-decoration:none;color:#fff;background:#1a252b;border:1px solid #34434b;border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;scroll-snap-align:start;transition:background .2s,border-color .2s}
    .ibg-card:hover,.ibg-card:focus-visible{border-color:var(--ibg-teal);background:#22363c}
    .ibg-card.ibg-active{border:2px solid var(--ibg-teal);background:#163036}
    .ibg-art{width:100%;max-width:136px;aspect-ratio:1;object-fit:contain}
    .ibg-name{font-size:15px;font-weight:700;text-align:center}
    .ibg-desc{font-size:12px;line-height:1.4;color:#aab7bd;text-align:center}
    .ibg-current{font-size:10px;color:var(--ibg-gold);font-weight:700;letter-spacing:.5px}
    .ibg-info{display:flex;align-items:flex-start;gap:18px;margin-top:14px;padding:18px;border:1px solid #00c2cb;border-radius:12px;background:#102a30;border-top:3px solid #d4af37}
    .ibg-info-art{width:92px;height:92px;flex:0 0 92px;object-fit:contain}
    .ibg-info-body{min-width:0;flex:1}
    .ibg-info-eyebrow{font-size:10px;letter-spacing:1.4px;color:#d4af37;font-weight:700}
    .ibg-info-name{font-size:21px;line-height:1.3;margin:6px 0;color:#fff}
    .ibg-info-tagline{font-size:13px;font-weight:700;color:#00c2cb;margin:0 0 10px}
    .ibg-info-text{white-space:pre-line;line-height:1.65;font-size:13px;color:#e0e9ec;margin:0}
    .ibg-info-text.ibg-clamped{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;white-space:normal}
    .ibg-readmore{margin-top:12px;background:transparent;color:#00c2cb;border:1px solid #00c2cb;border-radius:8px;padding:9px 12px;cursor:pointer;font-weight:700}
    .ibg-readmore:hover,.ibg-readmore:focus-visible{background:#173c43}
    @media(max-width:600px){.ibg-info{gap:12px;padding:13px}.ibg-info-art{width:60px;height:60px;flex-basis:60px}.ibg-info-name{font-size:17px}}
    @media(max-width:950px){.ibg-list.ibg-expanded{grid-template-columns:repeat(3,minmax(0,1fr))}}
    @media(max-width:600px){.ibg-guide{padding:14px}.ibg-head{align-items:flex-start}.ibg-title{font-size:19px}.ibg-toggle{padding:8px;font-size:11px}.ibg-card{flex-basis:162px;padding:11px}.ibg-art{max-width:116px}.ibg-list.ibg-expanded{grid-template-columns:repeat(2,minmax(0,1fr))}}
  `;

  function make(tag, cls, text) {
    const el = document.createElement(tag);

    if (cls) el.className = cls;
    if (text != null) el.textContent = text;

    return el;
  }

  function mount(root) {
    if (root.dataset.ibgMounted === 'true') return;

    root.dataset.ibgMounted = 'true';

    const section = make('section', 'ibg-guide');
    const header = make('div', 'ibg-head');
    const left = make('div');

    left.append(
      make('div', 'ibg-eyebrow', '● LIVE TV'),
      make('h2', 'ibg-title', 'iBossTV Channel Guide'),
      make(
        'p',
        'ibg-sub',
        'Explore the network. Discover something worth watching.'
      )
    );

    const toggle = make(
      'button',
      'ibg-toggle',
      'View All Channels ↓'
    );

    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');

    const list = make('nav', 'ibg-list');
    list.setAttribute(
      'aria-label',
      'iBossTV LIVE channels'
    );

    // Detect which Uscreen channel page is open
    const currentPath =
      window.location.pathname.replace(/\/+$/, '') || '/';

    // NEW: Automatically place current channel first
    const sortedChannels = [...CHANNELS].sort((a, b) => {
      const aActive = a.path === currentPath;
      const bActive = b.path === currentPath;

      return Number(bActive) - Number(aActive);
    });

    sortedChannels.forEach(channel => {
      const active = currentPath === channel.path;

      const card = make(
        'a',
        'ibg-card' + (active ? ' ibg-active' : '')
      );

      card.href = channel.path;

      if (active) {
        card.setAttribute('aria-current', 'page');
      }

      const img = make('img', 'ibg-art');

      img.src = new URL(channel.image, assetBase).href;
      img.alt = channel.name + ' channel logo';
      img.loading = 'lazy';

      card.append(
        img,
        make('div', 'ibg-name', channel.name),
        make('div', 'ibg-desc', channel.description)
      );

      if (active) {
        card.append(
          make('div', 'ibg-current', 'NOW WATCHING')
        );
      }

      list.append(card);
    });

    toggle.addEventListener('click', () => {
      const expanded =
        list.classList.toggle('ibg-expanded');

      toggle.textContent = expanded
        ? 'Show Less ↑'
        : 'View All Channels ↓';

      toggle.setAttribute(
        'aria-expanded',
        String(expanded)
      );
    });

    header.append(left, toggle);
    section.append(header, list);
    // Automatically display the current channel's full overview in a compact, expandable panel.
    const currentChannel = CHANNELS.find(channel => channel.path === currentPath);
    if (currentChannel) {
      const info = make('aside', 'ibg-info');
      info.setAttribute('aria-label', currentChannel.name + ' channel overview');
      const logo = make('img', 'ibg-info-art');
      logo.src = new URL(currentChannel.image, assetBase).href;
      logo.alt = currentChannel.name + ' logo';
      logo.loading = 'lazy';
      const body = make('div', 'ibg-info-body');
      const detail = make('p', 'ibg-info-text ibg-clamped', currentChannel.overview);
      const detailId = 'ibg-detail-' + currentChannel.path.split('/').pop();
      detail.id = detailId;
      const readMore = make('button', 'ibg-readmore', 'Read Full Description ↓');
      readMore.type = 'button';
      readMore.setAttribute('aria-controls', detailId);
      readMore.setAttribute('aria-expanded', 'false');
      readMore.addEventListener('click', () => {
        const expanded = detail.classList.toggle('ibg-clamped') === false;
        readMore.textContent = expanded ? 'Show Less ↑' : 'Read Full Description ↓';
        readMore.setAttribute('aria-expanded', String(expanded));
      });
      body.append(make('div', 'ibg-info-eyebrow', 'CURRENT CHANNEL · ABOUT'), make('h3', 'ibg-info-name', currentChannel.name), make('p', 'ibg-info-tagline', currentChannel.tagline), detail, readMore);
      info.append(logo, body);
      section.append(info);
    }
    root.append(section);
  }

  function init() {
    if (!document.getElementById('ibg-master-style')) {
      const style = make('style');

      style.id = 'ibg-master-style';
      style.textContent = css;

      document.head.append(style);
    }

    document
      .querySelectorAll('[data-ibosstv-guide]')
      .forEach(mount);
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      init,
      { once: true }
    );
  } else {
    init();
  }
})();
