// Workshops.jsx — Upcoming workshops listing with seat counts
const Workshops = ({ lang = 'en', onBook }) => {
  const isAr = lang === 'ar';
  const [registered, setRegistered] = React.useState({});

  const items = isAr ? [
    { id: 'pbi-fund', title: 'أساسيات Power BI', date: '12 يونيو · الرياض', seats: 8, total: 20, tag: 'مبتدئ', emoji: '📊' },
    { id: 'automate', title: 'أتمتة المهام مع Power Automate', date: '19 يونيو · أونلاين', seats: 14, total: 30, tag: 'متوسط', emoji: '⚡' },
    { id: 'dax',      title: 'DAX المتقدم للمحللين', date: '3 يوليو · الرياض', seats: 4, total: 15, tag: 'متقدم', emoji: '🧠' },
  ] : [
    { id: 'pbi-fund', title: 'Power BI Foundations', date: 'Jun 12 · Riyadh', seats: 8, total: 20, tag: 'Beginner', emoji: '📊' },
    { id: 'automate', title: 'Automate the Boring with Power Automate', date: 'Jun 19 · Online', seats: 14, total: 30, tag: 'Intermediate', emoji: '⚡' },
    { id: 'dax',      title: 'DAX for Analysts', date: 'Jul 3 · Riyadh', seats: 4, total: 15, tag: 'Advanced', emoji: '🧠' },
  ];

  const register = (id) => {
    setRegistered(r => ({...r, [id]: true}));
    onBook && onBook(id);
  };

  return (
    <section className="rj-section rj-section-alt" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="rj-container">
        <div className="rj-section-head rj-section-head-row">
          <div>
            <div className="rj-eyebrow">🧠 {isAr ? 'الورش القادمة' : 'UPCOMING WORKSHOPS'}</div>
            <h2 className="rj-h2">
              {isAr ? 'تعلم بأدوات قوية، بدون شهادة دكتوراه.' : "Learn the tools. Skip the PhD."}
            </h2>
          </div>
          <a className="rj-link-arrow rj-link-arrow-strong">
            {isAr ? 'كل الورش' : 'All workshops'}
            <Icon name={isAr ? 'arrow-left' : 'arrow-right'} size={14}/>
          </a>
        </div>

        <div className="rj-workshop-list">
          {items.map(w => {
            const pct = Math.round((1 - w.seats / w.total) * 100);
            const tight = w.seats <= 5;
            return (
              <div key={w.id} className="rj-workshop-row">
                <div className="rj-workshop-emoji">{w.emoji}</div>
                <div className="rj-workshop-body">
                  <div className="rj-workshop-tag">{w.tag}</div>
                  <h3 className="rj-h4 rj-workshop-title">{w.title}</h3>
                  <div className="rj-workshop-meta">
                    <span><Icon name="calendar" size={14}/> {w.date}</span>
                    <span className={`rj-seat-bar-row ${tight ? 'is-tight' : ''}`}>
                      <span className="rj-seat-bar"><span style={{width: `${pct}%`}}/></span>
                      {isAr ? `${w.seats} مقعد متبقي` : `${w.seats} seats left`}
                    </span>
                  </div>
                </div>
                <button
                  className={`rj-btn ${registered[w.id] ? 'rj-btn-success' : 'rj-btn-primary'}`}
                  onClick={() => register(w.id)}>
                  {registered[w.id]
                    ? <><Icon name="check" size={16}/> {isAr ? 'تم التسجيل' : 'Registered'}</>
                    : (isAr ? 'سجل الآن' : 'Register')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Workshops = Workshops;
