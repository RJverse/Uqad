// About.jsx — Bio section with portrait placeholder + credentials
const About = ({ lang = 'en' }) => {
  const isAr = lang === 'ar';
  return (
    <section className="rj-section rj-section-about" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="rj-container rj-about-grid">
        <div className="rj-about-portrait">
          <div className="rj-portrait-frame">
            <div className="rj-portrait-placeholder">
              <div className="rj-portrait-initials">RJ</div>
              <div className="rj-portrait-note">
                {isAr ? 'صورة شخصية — مكان مؤقت' : 'Portrait — placeholder'}
              </div>
            </div>
          </div>
          <div className="rj-portrait-badge">
            <Icon name="sparkles" size={14}/>
            {isAr ? 'ساعدت 120+ متدرب' : '120+ trainees · since 2020'}
          </div>
        </div>
        <div className="rj-about-copy">
          <div className="rj-eyebrow">💎 {isAr ? 'عن RJ' : 'ABOUT RJ'}</div>
          <h2 className="rj-h2">
            {isAr
              ? 'استشاري سعودي. ولاؤه للوضوح، مو التعقيد.'
              : "Saudi consultant. Loyal to clarity, not jargon."}
          </h2>
          <p className="rj-body-lg">
            {isAr
              ? 'أشتغل مع شركات وأفراد في السعودية والمنطقة على Power BI، الأتمتة، والتحول الرقمي — بأسلوب عملي يفهمه أي أحد. الهدف؟ نبسط الشيء المعقد ونخلي البيانات تشتغل لك، مو ضدك.'
              : "I work with companies and individuals across Saudi Arabia and MENA on Power BI, automation, and digital transformation — in plain language that any team can act on. The mission: simplify the complex and make data work for you, not against you."}
          </p>
          <ul className="rj-cred-list">
            <li><Icon name="check-circle" size={18}/> {isAr ? 'مدرب معتمد في Power Platform' : 'Certified Power Platform trainer'}</li>
            <li><Icon name="check-circle" size={18}/> {isAr ? '6+ سنوات في ذكاء الأعمال' : '6+ years in BI & analytics'}</li>
            <li><Icon name="check-circle" size={18}/> {isAr ? 'محتوى تعليمي يومي للعربية' : 'Daily Arabic-language educational content'}</li>
          </ul>
          <div className="rj-about-actions">
            <button className="rj-btn rj-btn-secondary">
              <Icon name="linkedin" size={16}/>
              {isAr ? 'تابع على LinkedIn' : 'Follow on LinkedIn'}
            </button>
            <button className="rj-btn rj-btn-ghost">
              {isAr ? 'حمّل السيرة' : 'Download CV'} <Icon name={isAr ? 'arrow-left' : 'arrow-right'} size={14}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

window.About = About;
