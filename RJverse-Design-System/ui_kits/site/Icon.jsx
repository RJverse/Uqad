// Icon.jsx — Lucide-style stroke icons, currentColor
const ICONS = {
  'arrow-right': <><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></>,
  'arrow-left':  <><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></>,
  'bar-chart':   <><path d="M3 3v18h18"/><path d="M7 14v4"/><path d="M12 9v9"/><path d="M17 5v13"/></>,
  'zap':         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  'workflow':    <><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/></>,
  'graduation':  <><path d="M22 10v6"/><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></>,
  'lightbulb':   <><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15 14c1-1 3-3 3-6a6 6 0 0 0-12 0c0 3 2 5 3 6"/><path d="M9 18h6"/></>,
  'database':    <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></>,
  'check':       <path d="M5 12l5 5L20 7"/>,
  'check-circle':<><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></>,
  'mail':        <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
  'phone':       <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.1.7.27 1.4.5 2.07a2 2 0 0 1-.45 2.11L7.91 9.09a16 16 0 0 0 7 7l1.19-1.18a2 2 0 0 1 2.11-.45c.67.23 1.37.4 2.07.5a2 2 0 0 1 1.72 2z"/>,
  'message':     <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>,
  'calendar':    <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
  'star':        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/>,
  'menu':        <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>,
  'play':        <polygon points="6 4 20 12 6 20 6 4"/>,
  'sparkles':    <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>,
  'send':        <><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></>,
  'whatsapp':    <><path d="M3 21l1.65-3.8A8 8 0 1 1 8.2 19.4z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2-1.5 1.5z"/></>,
  'globe':       <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z"/></>,
  'linkedin':    <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v8M8 7v.01M12 18v-5c0-1.7 1.3-3 3-3s3 1.3 3 3v5"/></>,
};

const Icon = ({ name, size = 20, stroke = 1.75, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round"
       className={className} style={style}>
    {ICONS[name] || null}
  </svg>
);

window.Icon = Icon;
window.ICONS = ICONS;
