// Contact.jsx — Form + sidebar with WhatsApp/Email + Footer
const Contact = ({ lang = 'en' }) => {
  const isAr = lang === 'ar';
  const [form, setForm] = React.useState({ name: '', email: '', company: '', interest: 'dashboards', message: '' });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section className="rj-section rj-section-dark" dir={isAr ? 'rtl' : 'ltr'} data-theme="dark">
      <div className="rj-section-dark-blob"/>
      <div className="rj-container rj-contact-grid">
        <div className="rj-contact-copy">
          <div className="rj-eyebrow rj-eyebrow-on-dark">🏁 {isAr ? 'تواصل' : "LET'S TALK"}</div>
          <h2 className="rj-h2 rj-h2-on-dark">
            {isAr ? 'مشروع في بالك؟ خل نتكلم.' : "Got a project? Let's talk."}
          </h2>
          <p className="rj-body-lg rj-on-dark">
            {isAr
              ? 'استشارة قصيرة، عرض ورشة، أو سؤال سريع — كلها ترحب فيها.'
              : 'A quick consult, a workshop brief, or just a question — all welcome.'}
          </p>

          <div className="rj-contact-channels">
            <a className="rj-channel"><Icon name="whatsapp" size={18}/> +966 5X XXX XXXX</a>
            <a className="rj-channel"><Icon name="mail" size={18}/> hi@rjverse.io</a>
            <a className="rj-channel"><Icon name="linkedin" size={18}/> linkedin.com/in/rjverse</a>
          </div>
        </div>

        <form className="rj-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="rj-form-sent">
              <Icon name="check-circle" size={42}/>
              <h3 className="rj-h4">{isAr ? 'وصلتنا رسالتك!' : "Got it — talk soon."}</h3>
              <p className="rj-body">{isAr ? 'برد عليك خلال 24 ساعة.' : "I'll reply within 24 hours."}</p>
              <button className="rj-btn rj-btn-secondary" onClick={() => { setSent(false); setForm({ name:'',email:'',company:'',interest:'dashboards',message:'' }); }}>
                {isAr ? 'إرسال أخرى' : 'Send another'}
              </button>
            </div>
          ) : (
            <>
              <div className="rj-form-row">
                <div className="rj-field">
                  <label>{isAr ? 'الاسم' : 'Name'}</label>
                  <input className="rj-input" value={form.name} onChange={update('name')} placeholder={isAr ? 'محمد الراشد' : 'Mohammed Al Rashed'} required/>
                </div>
                <div className="rj-field">
                  <label>{isAr ? 'البريد' : 'Email'}</label>
                  <input className="rj-input" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" required/>
                </div>
              </div>
              <div className="rj-field">
                <label>{isAr ? 'الشركة (اختياري)' : 'Company (optional)'}</label>
                <input className="rj-input" value={form.company} onChange={update('company')}/>
              </div>
              <div className="rj-field">
                <label>{isAr ? 'ايش يهمك؟' : "What's the ask?"}</label>
                <div className="rj-chip-row">
                  {['dashboards', 'automation', 'workshop', 'other'].map(k => (
                    <button type="button"
                            key={k}
                            className={`rj-chip ${form.interest === k ? 'is-on' : ''}`}
                            onClick={() => setForm({...form, interest: k})}>
                      { {
                        dashboards: isAr ? 'لوحات Power BI' : 'Dashboards',
                        automation: isAr ? 'أتمتة' : 'Automation',
                        workshop: isAr ? 'ورشة' : 'Workshop',
                        other: isAr ? 'غير ذلك' : 'Other',
                      }[k] }
                    </button>
                  ))}
                </div>
              </div>
              <div className="rj-field">
                <label>{isAr ? 'تفاصيل' : 'Details'}</label>
                <textarea className="rj-input rj-textarea" rows="4" value={form.message} onChange={update('message')} placeholder={isAr ? 'احكِ لي عن مشروعك...' : 'Tell me about your project...'}/>
              </div>
              <button className="rj-btn rj-btn-primary rj-btn-lg" type="submit">
                <Icon name="send" size={16}/>
                {isAr ? 'أرسل الرسالة' : 'Send message'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = ({ lang = 'en' }) => {
  const isAr = lang === 'ar';
  return (
    <footer className="rj-footer" dir={isAr ? 'rtl' : 'ltr'} data-theme="dark">
      <div className="rj-container rj-footer-inner">
        <div className="rj-footer-brand">
          <img src="../../assets/logo-on-dark.png?v=5" alt="RJverse" className="rj-footer-logo"/>
          <p className="rj-footer-tag">
            {isAr ? 'حلول رقمية، لعالمك الخاص.' : 'Digital solutions, crafted for your own universe.'}
          </p>
        </div>
        <div className="rj-footer-col">
          <h6>{isAr ? 'الخدمات' : 'Services'}</h6>
          <a>{isAr ? 'لوحات Power BI' : 'Power BI dashboards'}</a>
          <a>{isAr ? 'أتمتة الأعمال' : 'Business automation'}</a>
          <a>{isAr ? 'ورش الشركات' : 'Corporate workshops'}</a>
        </div>
        <div className="rj-footer-col">
          <h6>{isAr ? 'الأكاديمية' : 'Academy'}</h6>
          <a>{isAr ? 'الدورات القادمة' : 'Upcoming cohorts'}</a>
          <a>{isAr ? 'المحتوى المجاني' : 'Free content'}</a>
          <a>{isAr ? 'قصص النجاح' : 'Success stories'}</a>
        </div>
        <div className="rj-footer-col">
          <h6>{isAr ? 'تواصل' : 'Contact'}</h6>
          <a>hi@rjverse.io</a>
          <a>+966 5X XXX XXXX</a>
          <a>{isAr ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}</a>
        </div>
      </div>
      <div className="rj-footer-bottom">
        <span>© 2026 RJverse · {isAr ? 'كل الحقوق محفوظة' : 'All rights reserved'}</span>
        <span className="rj-footer-hashtags">#RJverse · #حلول_رقمية · #PowerBI</span>
      </div>
    </footer>
  );
};

window.Contact = Contact;
window.Footer = Footer;
