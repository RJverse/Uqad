// Services.jsx — Three feature cards section
const Services = ({ lang = 'en' }) => {
  const isAr = lang === 'ar';
  const services = isAr ? [
    { icon: 'bar-chart', title: 'لوحات معلومات تتخذ قرارات', desc: 'تطوير لوحات Power BI تحول البيانات لقرارات سريعة — مو تقارير بعدها يطنشها أحد.', cta: 'شوف أمثلة' },
    { icon: 'workflow',  title: 'أتمتة بدون تعقيد',       desc: 'تدفقات Power Automate و RPA تشيل عنك المهام المملة بصمت، بدون تعقيد تقني.', cta: 'كيف تشتغل' },
    { icon: 'graduation',title: 'ورش بلغة عربية',         desc: 'تدريب عملي للفِرق بأسلوب يفهمه أي أحد — تعليم بالشغف، مو محاضرات نظرية.', cta: 'احجز ورشة' },
  ] : [
    { icon: 'bar-chart', title: 'Dashboards that decide.', desc: 'Power BI builds that turn data into action — not another report no one opens.', cta: 'See examples' },
    { icon: 'workflow',  title: 'Automation, simplified.',  desc: 'Power Automate and RPA flows that quietly take the boring work off your plate.', cta: 'How it works' },
    { icon: 'graduation',title: 'Workshops in plain Arabic.',desc: 'Hands-on training in the language your team actually speaks at the office.', cta: 'Book one' },
  ];

  return (
    <section className="rj-section rj-section-services" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="rj-container">
        <div className="rj-section-head">
          <div className="rj-eyebrow">🔧 {isAr ? 'الخدمات' : 'WHAT I DO'}</div>
          <h2 className="rj-h2">
            {isAr ? 'حلول رقمية بسيطة، لكنها قوية.' : 'Simple digital solutions, quietly powerful.'}
          </h2>
        </div>
        <div className="rj-feature-grid">
          {services.map((s, i) => (
            <article key={i} className="rj-feature-card">
              <div className="rj-feature-chip">
                <Icon name={s.icon} size={24}/>
              </div>
              <h3 className="rj-h4">{s.title}</h3>
              <p className="rj-body">{s.desc}</p>
              <a className="rj-link-arrow">{s.cta} <Icon name={isAr ? 'arrow-left' : 'arrow-right'} size={14}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Services = Services;
