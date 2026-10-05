// SiteHeader.jsx — Sticky top navigation
const SiteHeader = ({ onNav, current = 'home', lang = 'en', onLangToggle }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.getElementById('site-scroll') || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 12);
    };
    root.addEventListener('scroll', onScroll);
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  const isAr = lang === 'ar';
  const nav = isAr
    ? [['home','الرئيسية'], ['services','الخدمات'], ['workshops','الورش'], ['about','عن RJ'], ['contact','تواصل']]
    : [['home','Home'], ['services','Services'], ['workshops','Workshops'], ['about','About'], ['contact','Contact']];

  return (
    <header className={`rj-header ${scrolled ? 'is-scrolled' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="rj-header-inner">
        <a className="rj-logo" onClick={() => onNav('home')}>
          <img src="../../assets/logo-mark.png" alt="RJverse" />
          <span className="rj-logo-text">RJverse</span>
        </a>
        <nav className="rj-nav">
          {nav.map(([k, label]) => (
            <a key={k}
               className={`rj-nav-link ${current === k ? 'is-current' : ''}`}
               onClick={() => onNav(k)}>{label}</a>
          ))}
        </nav>
        <div className="rj-header-actions">
          <button className="rj-lang-toggle" onClick={onLangToggle}>
            {isAr ? 'EN' : 'عربي'}
          </button>
          <button className="rj-btn rj-btn-primary rj-btn-sm" onClick={() => onNav('contact')}>
            {isAr ? 'احجز جلسة' : 'Book a call'}
            <Icon name="arrow-right" size={16}/>
          </button>
        </div>
      </div>
    </header>
  );
};

window.SiteHeader = SiteHeader;
