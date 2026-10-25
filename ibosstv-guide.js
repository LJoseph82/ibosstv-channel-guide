
/* iBossTV LIVE Channel Guide | Central Master | v1.2 */
(function () {
  'use strict';

  const CHANNELS = [
    {
      name: "Spotlight",
      description: "Featured creators and stories",
      path: "/pages/livetv-spotlight",
      image: "assets/spotlight.png"
    },
    {
      name: "Originals",
      description: "Original productions",
      path: "/pages/livetv-originals",
      image: "assets/originals.png"
    },
    {
      name: "Latino",
      description: "Latino voices and culture",
      path: "/pages/livetv-latino",
      image: "assets/latino.png"
    },
    {
      name: "Caribbean",
      description: "Caribbean culture, music and entertainment",
      path: "/pages/livetv-caribbean",
      image: "assets/caribbean.png"
    },
    {
      name: "Haiti",
      description: "Haitian culture, heritage and entertainment",
      path: "/pages/livetv-haiti",
      image: "assets/haiti.png"
    },
    {
      name: "Kids",
      description: "Family-friendly entertainment",
      path: "/pages/livetv-kids",
      image: "assets/kids.png"
    },
    {
      name: "Faith & Purpose",
      description: "Faith, inspiration and purpose",
      path: "/pages/livetv-faith-purpose",
      image: "assets/faith-purpose.png"
    },
    {
      name: "Music & Culture",
      description: "Music and performances",
      path: "/pages/livetv-music-culture",
      image: "assets/music-culture.png"
    },
    {
      name: "Creator Central",
      description: "Content for creative entrepreneurs",
      path: "/pages/livetv-creator-central",
      image: "assets/creator-central.png"
    },
    {
      name: "Previews",
      description: "Trailers and what's coming",
      path: "/pages/livetv-previews",
      image: "assets/previews.png"
    },
    {
      name: "Inside the Brand – Florida",
      description: "Stories behind Florida businesses and communities",
      path: "/pages/livetv-inside-the-brand-florida",
      image: "assets/inside-the-brand-florida.png"
    },
    {
      name: "Wellness Network",
      description: "Health and wellness",
      path: "/pages/livetv-wellness-network",
      image: "assets/wellness-network.png"
    },
    {
      name: "LOLounge",
      description: "Independent comedians, stand-up specials, sketches and nonstop laughter",
      path: "/pages/livetv-lolounge",
      image: "assets/lolounge.png"
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
