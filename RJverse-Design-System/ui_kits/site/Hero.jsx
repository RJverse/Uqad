// Hero.jsx — Homepage hero with offset blob + headline + CTAs
const Hero = ({ lang = 'en', onCta }) => {
  const isAr = lang === 'ar';
  return (
    <section className="rj-hero" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="rj-hero-blob"/>
      <div className="rj-hero-blob rj-hero-blob-2"/>
      <div className="rj-hero-inner">
        <div className="rj-hero-copy">
          <div className="rj-eyebrow">
            🌌 {isAr ? 'RJVERSE · استشارات رقمية' : 'RJVERSE · DIGITAL CONSULTING'}
          </div>
          <h1 className="rj-h1 rj-hero-headline">
            {isAr
              ? <>توقف عن المعاناة مع Excel.<br/>ابدأ تتحكم في بياناتك.</>
              : <>Stop fighting Excel.<br/>Start owning your data.</>}
          </h1>
          <p className="rj-body-lg rj-hero-sub">
            {isAr
              ? 'لوحات معلومات Power BI، أتمتة Power Automate، وورش بلغة الناس — مصممة لفرق سعودية تبغى وضوح، مو ضجيج.'
              : 'Power BI dashboards, Power Automate flows, and workshops in plain Arabic — built for Saudi teams who want clarity, not noise.'}
          </p>
          <div className="rj-hero-cta-row">
            <button className="rj-btn rj-btn-primary rj-btn-lg" onClick={() => onCta('start')}>
              {isAr ? 'ابدأ مشروعك' : 'Start a project'}
              <Icon name={isAr ? 'arrow-left' : 'arrow-right'} size={18}/>
            </button>
            <button className="rj-btn rj-btn-ghost rj-btn-lg" onClick={() => onCta('workshops')}>
              <Icon name="play" size={16}/>
              {isAr ? 'شاهد ورشة' : 'Watch a workshop'}
            </button>
          </div>
          <div className="rj-hero-trust">
            <div className="rj-trust-stat">
              <div className="rj-trust-n">120+</div>
              <div className="rj-trust-l">{isAr ? 'متدرب' : 'trainees'}</div>
            </div>
            <div className="rj-trust-stat">
              <div className="rj-trust-n">30+</div>
              <div className="rj-trust-l">{isAr ? 'مشروع' : 'projects'}</div>
            </div>
            <div className="rj-trust-stat">
              <div className="rj-trust-n">6</div>
              <div className="rj-trust-l">{isAr ? 'سنوات خبرة' : 'years in BI'}</div>
            </div>
          </div>
        </div>
        <div className="rj-hero-visual">
          <DashboardMock/>
        </div>
      </div>
    </section>
  );
};

// Mini dashboard mock for hero visual
const DashboardMock = () => (
  <div className="rj-dash">
    <div className="rj-dash-header">
      <div className="rj-dash-dots">
        <span/><span/><span/>
      </div>
      <span className="rj-dash-title">Sales · Q2 2026</span>
    </div>
    <div className="rj-dash-grid">
      <div className="rj-dash-kpi">
        <div className="rj-dash-kpi-label">Revenue</div>
        <div className="rj-dash-kpi-value">SAR 2.4M</div>
        <div className="rj-dash-kpi-delta">▲ 18%</div>
      </div>
      <div className="rj-dash-kpi">
        <div className="rj-dash-kpi-label">Deals</div>
        <div className="rj-dash-kpi-value">142</div>
        <div className="rj-dash-kpi-delta">▲ 12%</div>
      </div>
      <div className="rj-dash-chart">
        {[40,55,38,72,60,85,68,90].map((h, i) => (
          <div key={i} className="rj-bar" style={{height: `${h}%`}}/>
        ))}
      </div>
    </div>
  </div>
);

window.Hero = Hero;
window.DashboardMock = DashboardMock;
