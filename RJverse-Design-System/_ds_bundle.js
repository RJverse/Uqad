/* @ds-bundle: {"format":3,"namespace":"RJverseDesignSystem_ae39c8","components":[],"sourceHashes":{"ui_kits/site/About.jsx":"7696c0dff5a0","ui_kits/site/Contact.jsx":"3d39a964385d","ui_kits/site/Hero.jsx":"1d323df322d9","ui_kits/site/Icon.jsx":"fcf10b01a980","ui_kits/site/Services.jsx":"1fdfedd343a2","ui_kits/site/SiteHeader.jsx":"03f5775e9ee6","ui_kits/site/Workshops.jsx":"e4b05e39d07b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RJverseDesignSystem_ae39c8 = window.RJverseDesignSystem_ae39c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/site/About.jsx
try { (() => {
// About.jsx — Bio section with portrait placeholder + credentials
const About = ({
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  return /*#__PURE__*/React.createElement("section", {
    className: "rj-section rj-section-about",
    dir: isAr ? 'rtl' : 'ltr'
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-container rj-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-about-portrait"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-portrait-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-portrait-placeholder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-portrait-initials"
  }, "RJ"), /*#__PURE__*/React.createElement("div", {
    className: "rj-portrait-note"
  }, isAr ? 'صورة شخصية — مكان مؤقت' : 'Portrait — placeholder'))), /*#__PURE__*/React.createElement("div", {
    className: "rj-portrait-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14
  }), isAr ? 'ساعدت 120+ متدرب' : '120+ trainees · since 2020')), /*#__PURE__*/React.createElement("div", {
    className: "rj-about-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-eyebrow"
  }, "\uD83D\uDC8E ", isAr ? 'عن RJ' : 'ABOUT RJ'), /*#__PURE__*/React.createElement("h2", {
    className: "rj-h2"
  }, isAr ? 'استشاري سعودي. ولاؤه للوضوح، مو التعقيد.' : "Saudi consultant. Loyal to clarity, not jargon."), /*#__PURE__*/React.createElement("p", {
    className: "rj-body-lg"
  }, isAr ? 'أشتغل مع شركات وأفراد في السعودية والمنطقة على Power BI، الأتمتة، والتحول الرقمي — بأسلوب عملي يفهمه أي أحد. الهدف؟ نبسط الشيء المعقد ونخلي البيانات تشتغل لك، مو ضدك.' : "I work with companies and individuals across Saudi Arabia and MENA on Power BI, automation, and digital transformation — in plain language that any team can act on. The mission: simplify the complex and make data work for you, not against you."), /*#__PURE__*/React.createElement("ul", {
    className: "rj-cred-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18
  }), " ", isAr ? 'مدرب معتمد في Power Platform' : 'Certified Power Platform trainer'), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18
  }), " ", isAr ? '6+ سنوات في ذكاء الأعمال' : '6+ years in BI & analytics'), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18
  }), " ", isAr ? 'محتوى تعليمي يومي للعربية' : 'Daily Arabic-language educational content')), /*#__PURE__*/React.createElement("div", {
    className: "rj-about-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 16
  }), isAr ? 'تابع على LinkedIn' : 'Follow on LinkedIn'), /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-ghost"
  }, isAr ? 'حمّل السيرة' : 'Download CV', " ", /*#__PURE__*/React.createElement(Icon, {
    name: isAr ? 'arrow-left' : 'arrow-right',
    size: 14
  }))))));
};
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Contact.jsx
try { (() => {
// Contact.jsx — Form + sidebar with WhatsApp/Email + Footer
const Contact = ({
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    interest: 'dashboards',
    message: ''
  });
  const [sent, setSent] = React.useState(false);
  const update = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "rj-section rj-section-dark",
    dir: isAr ? 'rtl' : 'ltr',
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-section-dark-blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rj-container rj-contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-contact-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-eyebrow rj-eyebrow-on-dark"
  }, "\uD83C\uDFC1 ", isAr ? 'تواصل' : "LET'S TALK"), /*#__PURE__*/React.createElement("h2", {
    className: "rj-h2 rj-h2-on-dark"
  }, isAr ? 'مشروع في بالك؟ خل نتكلم.' : "Got a project? Let's talk."), /*#__PURE__*/React.createElement("p", {
    className: "rj-body-lg rj-on-dark"
  }, isAr ? 'استشارة قصيرة، عرض ورشة، أو سؤال سريع — كلها ترحب فيها.' : 'A quick consult, a workshop brief, or just a question — all welcome.'), /*#__PURE__*/React.createElement("div", {
    className: "rj-contact-channels"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rj-channel"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp",
    size: 18
  }), " +966 5X XXX XXXX"), /*#__PURE__*/React.createElement("a", {
    className: "rj-channel"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " hi@rjverse.io"), /*#__PURE__*/React.createElement("a", {
    className: "rj-channel"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 18
  }), " linkedin.com/in/rjverse"))), /*#__PURE__*/React.createElement("form", {
    className: "rj-form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "rj-form-sent"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 42
  }), /*#__PURE__*/React.createElement("h3", {
    className: "rj-h4"
  }, isAr ? 'وصلتنا رسالتك!' : "Got it — talk soon."), /*#__PURE__*/React.createElement("p", {
    className: "rj-body"
  }, isAr ? 'برد عليك خلال 24 ساعة.' : "I'll reply within 24 hours."), /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-secondary",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        company: '',
        interest: 'dashboards',
        message: ''
      });
    }
  }, isAr ? 'إرسال أخرى' : 'Send another')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rj-form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-field"
  }, /*#__PURE__*/React.createElement("label", null, isAr ? 'الاسم' : 'Name'), /*#__PURE__*/React.createElement("input", {
    className: "rj-input",
    value: form.name,
    onChange: update('name'),
    placeholder: isAr ? 'محمد الراشد' : 'Mohammed Al Rashed',
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "rj-field"
  }, /*#__PURE__*/React.createElement("label", null, isAr ? 'البريد' : 'Email'), /*#__PURE__*/React.createElement("input", {
    className: "rj-input",
    type: "email",
    value: form.email,
    onChange: update('email'),
    placeholder: "you@example.com",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rj-field"
  }, /*#__PURE__*/React.createElement("label", null, isAr ? 'الشركة (اختياري)' : 'Company (optional)'), /*#__PURE__*/React.createElement("input", {
    className: "rj-input",
    value: form.company,
    onChange: update('company')
  })), /*#__PURE__*/React.createElement("div", {
    className: "rj-field"
  }, /*#__PURE__*/React.createElement("label", null, isAr ? 'ايش يهمك؟' : "What's the ask?"), /*#__PURE__*/React.createElement("div", {
    className: "rj-chip-row"
  }, ['dashboards', 'automation', 'workshop', 'other'].map(k => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: k,
    className: `rj-chip ${form.interest === k ? 'is-on' : ''}`,
    onClick: () => setForm({
      ...form,
      interest: k
    })
  }, {
    dashboards: isAr ? 'لوحات Power BI' : 'Dashboards',
    automation: isAr ? 'أتمتة' : 'Automation',
    workshop: isAr ? 'ورشة' : 'Workshop',
    other: isAr ? 'غير ذلك' : 'Other'
  }[k])))), /*#__PURE__*/React.createElement("div", {
    className: "rj-field"
  }, /*#__PURE__*/React.createElement("label", null, isAr ? 'تفاصيل' : 'Details'), /*#__PURE__*/React.createElement("textarea", {
    className: "rj-input rj-textarea",
    rows: "4",
    value: form.message,
    onChange: update('message'),
    placeholder: isAr ? 'احكِ لي عن مشروعك...' : 'Tell me about your project...'
  })), /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-primary rj-btn-lg",
    type: "submit"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 16
  }), isAr ? 'أرسل الرسالة' : 'Send message')))));
};
const Footer = ({
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  return /*#__PURE__*/React.createElement("footer", {
    className: "rj-footer",
    dir: isAr ? 'rtl' : 'ltr',
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-container rj-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-footer-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-on-dark.png?v=5",
    alt: "RJverse",
    className: "rj-footer-logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "rj-footer-tag"
  }, isAr ? 'حلول رقمية، لعالمك الخاص.' : 'Digital solutions, crafted for your own universe.')), /*#__PURE__*/React.createElement("div", {
    className: "rj-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, isAr ? 'الخدمات' : 'Services'), /*#__PURE__*/React.createElement("a", null, isAr ? 'لوحات Power BI' : 'Power BI dashboards'), /*#__PURE__*/React.createElement("a", null, isAr ? 'أتمتة الأعمال' : 'Business automation'), /*#__PURE__*/React.createElement("a", null, isAr ? 'ورش الشركات' : 'Corporate workshops')), /*#__PURE__*/React.createElement("div", {
    className: "rj-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, isAr ? 'الأكاديمية' : 'Academy'), /*#__PURE__*/React.createElement("a", null, isAr ? 'الدورات القادمة' : 'Upcoming cohorts'), /*#__PURE__*/React.createElement("a", null, isAr ? 'المحتوى المجاني' : 'Free content'), /*#__PURE__*/React.createElement("a", null, isAr ? 'قصص النجاح' : 'Success stories')), /*#__PURE__*/React.createElement("div", {
    className: "rj-footer-col"
  }, /*#__PURE__*/React.createElement("h6", null, isAr ? 'تواصل' : 'Contact'), /*#__PURE__*/React.createElement("a", null, "hi@rjverse.io"), /*#__PURE__*/React.createElement("a", null, "+966 5X XXX XXXX"), /*#__PURE__*/React.createElement("a", null, isAr ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'))), /*#__PURE__*/React.createElement("div", {
    className: "rj-footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 RJverse \xB7 ", isAr ? 'كل الحقوق محفوظة' : 'All rights reserved'), /*#__PURE__*/React.createElement("span", {
    className: "rj-footer-hashtags"
  }, "#RJverse \xB7 #\u062D\u0644\u0648\u0644_\u0631\u0642\u0645\u064A\u0629 \xB7 #PowerBI")));
};
window.Contact = Contact;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Hero.jsx
try { (() => {
// Hero.jsx — Homepage hero with offset blob + headline + CTAs
const Hero = ({
  lang = 'en',
  onCta
}) => {
  const isAr = lang === 'ar';
  return /*#__PURE__*/React.createElement("section", {
    className: "rj-hero",
    dir: isAr ? 'rtl' : 'ltr'
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-blob rj-hero-blob-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-eyebrow"
  }, "\uD83C\uDF0C ", isAr ? 'RJVERSE · استشارات رقمية' : 'RJVERSE · DIGITAL CONSULTING'), /*#__PURE__*/React.createElement("h1", {
    className: "rj-h1 rj-hero-headline"
  }, isAr ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u062A\u0648\u0642\u0641 \u0639\u0646 \u0627\u0644\u0645\u0639\u0627\u0646\u0627\u0629 \u0645\u0639 Excel.", /*#__PURE__*/React.createElement("br", null), "\u0627\u0628\u062F\u0623 \u062A\u062A\u062D\u0643\u0645 \u0641\u064A \u0628\u064A\u0627\u0646\u0627\u062A\u0643.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Stop fighting Excel.", /*#__PURE__*/React.createElement("br", null), "Start owning your data.")), /*#__PURE__*/React.createElement("p", {
    className: "rj-body-lg rj-hero-sub"
  }, isAr ? 'لوحات معلومات Power BI، أتمتة Power Automate، وورش بلغة الناس — مصممة لفرق سعودية تبغى وضوح، مو ضجيج.' : 'Power BI dashboards, Power Automate flows, and workshops in plain Arabic — built for Saudi teams who want clarity, not noise.'), /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-primary rj-btn-lg",
    onClick: () => onCta('start')
  }, isAr ? 'ابدأ مشروعك' : 'Start a project', /*#__PURE__*/React.createElement(Icon, {
    name: isAr ? 'arrow-left' : 'arrow-right',
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-ghost rj-btn-lg",
    onClick: () => onCta('workshops')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 16
  }), isAr ? 'شاهد ورشة' : 'Watch a workshop')), /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-n"
  }, "120+"), /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-l"
  }, isAr ? 'متدرب' : 'trainees')), /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-n"
  }, "30+"), /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-l"
  }, isAr ? 'مشروع' : 'projects')), /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-n"
  }, "6"), /*#__PURE__*/React.createElement("div", {
    className: "rj-trust-l"
  }, isAr ? 'سنوات خبرة' : 'years in BI')))), /*#__PURE__*/React.createElement("div", {
    className: "rj-hero-visual"
  }, /*#__PURE__*/React.createElement(DashboardMock, null))));
};

// Mini dashboard mock for hero visual
const DashboardMock = () => /*#__PURE__*/React.createElement("div", {
  className: "rj-dash"
}, /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-header"
}, /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-dots"
}, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("span", {
  className: "rj-dash-title"
}, "Sales \xB7 Q2 2026")), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi"
}, /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi-label"
}, "Revenue"), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi-value"
}, "SAR 2.4M"), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi-delta"
}, "\u25B2 18%")), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi"
}, /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi-label"
}, "Deals"), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi-value"
}, "142"), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-kpi-delta"
}, "\u25B2 12%")), /*#__PURE__*/React.createElement("div", {
  className: "rj-dash-chart"
}, [40, 55, 38, 72, 60, 85, 68, 90].map((h, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "rj-bar",
  style: {
    height: `${h}%`
  }
})))));
window.Hero = Hero;
window.DashboardMock = DashboardMock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Icon.jsx
try { (() => {
// Icon.jsx — Lucide-style stroke icons, currentColor
const ICONS = {
  'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5l7 7-7 7"
  })),
  'arrow-left': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19l-7-7 7-7"
  })),
  'bar-chart': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5v13"
  })),
  'zap': /*#__PURE__*/React.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  }),
  'workflow': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "8",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "13",
    width: "8",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11v4a2 2 0 0 0 2 2h4"
  })),
  'graduation': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 10v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10l10-5 10 5-10 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"
  })),
  'lightbulb': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 14c1-1 3-3 3-6a6 6 0 0 0-12 0c0 3 2 5 3 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6"
  })),
  'database': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"
  })),
  'check': /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }),
  'check-circle': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  'mail': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9 6 9-6"
  })),
  'phone': /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.1.7.27 1.4.5 2.07a2 2 0 0 1-.45 2.11L7.91 9.09a16 16 0 0 0 7 7l1.19-1.18a2 2 0 0 1 2.11-.45c.67.23 1.37.4 2.07.5a2 2 0 0 1 1.72 2z"
  }),
  'message': /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }),
  'calendar': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  })),
  'star': /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"
  }),
  'menu': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 18h18"
  })),
  'play': /*#__PURE__*/React.createElement("polygon", {
    points: "6 4 20 12 6 20 6 4"
  }),
  'sparkles': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
  })),
  'send': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2l-7 20-4-9-9-4 20-7z"
  })),
  'whatsapp': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 21l1.65-3.8A8 8 0 1 1 8.2 19.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2-1.5 1.5z"
  })),
  'globe': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z"
  })),
  'linkedin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10v8M8 7v.01M12 18v-5c0-1.7 1.3-3 3-3s3 1.3 3 3v5"
  }))
};
const Icon = ({
  name,
  size = 20,
  stroke = 1.75,
  className = '',
  style = {}
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className,
  style: style
}, ICONS[name] || null);
window.Icon = Icon;
window.ICONS = ICONS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Services.jsx
try { (() => {
// Services.jsx — Three feature cards section
const Services = ({
  lang = 'en'
}) => {
  const isAr = lang === 'ar';
  const services = isAr ? [{
    icon: 'bar-chart',
    title: 'لوحات معلومات تتخذ قرارات',
    desc: 'تطوير لوحات Power BI تحول البيانات لقرارات سريعة — مو تقارير بعدها يطنشها أحد.',
    cta: 'شوف أمثلة'
  }, {
    icon: 'workflow',
    title: 'أتمتة بدون تعقيد',
    desc: 'تدفقات Power Automate و RPA تشيل عنك المهام المملة بصمت، بدون تعقيد تقني.',
    cta: 'كيف تشتغل'
  }, {
    icon: 'graduation',
    title: 'ورش بلغة عربية',
    desc: 'تدريب عملي للفِرق بأسلوب يفهمه أي أحد — تعليم بالشغف، مو محاضرات نظرية.',
    cta: 'احجز ورشة'
  }] : [{
    icon: 'bar-chart',
    title: 'Dashboards that decide.',
    desc: 'Power BI builds that turn data into action — not another report no one opens.',
    cta: 'See examples'
  }, {
    icon: 'workflow',
    title: 'Automation, simplified.',
    desc: 'Power Automate and RPA flows that quietly take the boring work off your plate.',
    cta: 'How it works'
  }, {
    icon: 'graduation',
    title: 'Workshops in plain Arabic.',
    desc: 'Hands-on training in the language your team actually speaks at the office.',
    cta: 'Book one'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rj-section rj-section-services",
    dir: isAr ? 'rtl' : 'ltr'
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-eyebrow"
  }, "\uD83D\uDD27 ", isAr ? 'الخدمات' : 'WHAT I DO'), /*#__PURE__*/React.createElement("h2", {
    className: "rj-h2"
  }, isAr ? 'حلول رقمية بسيطة، لكنها قوية.' : 'Simple digital solutions, quietly powerful.')), /*#__PURE__*/React.createElement("div", {
    className: "rj-feature-grid"
  }, services.map((s, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "rj-feature-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-feature-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "rj-h4"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "rj-body"
  }, s.desc), /*#__PURE__*/React.createElement("a", {
    className: "rj-link-arrow"
  }, s.cta, " ", /*#__PURE__*/React.createElement(Icon, {
    name: isAr ? 'arrow-left' : 'arrow-right',
    size: 14
  })))))));
};
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SiteHeader.jsx
try { (() => {
// SiteHeader.jsx — Sticky top navigation
const SiteHeader = ({
  onNav,
  current = 'home',
  lang = 'en',
  onLangToggle
}) => {
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
  const nav = isAr ? [['home', 'الرئيسية'], ['services', 'الخدمات'], ['workshops', 'الورش'], ['about', 'عن RJ'], ['contact', 'تواصل']] : [['home', 'Home'], ['services', 'Services'], ['workshops', 'Workshops'], ['about', 'About'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    className: `rj-header ${scrolled ? 'is-scrolled' : ''}`,
    dir: isAr ? 'rtl' : 'ltr'
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rj-logo",
    onClick: () => onNav('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "RJverse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rj-logo-text"
  }, "RJverse")), /*#__PURE__*/React.createElement("nav", {
    className: "rj-nav"
  }, nav.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    className: `rj-nav-link ${current === k ? 'is-current' : ''}`,
    onClick: () => onNav(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "rj-header-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rj-lang-toggle",
    onClick: onLangToggle
  }, isAr ? 'EN' : 'عربي'), /*#__PURE__*/React.createElement("button", {
    className: "rj-btn rj-btn-primary rj-btn-sm",
    onClick: () => onNav('contact')
  }, isAr ? 'احجز جلسة' : 'Book a call', /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })))));
};
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Workshops.jsx
try { (() => {
// Workshops.jsx — Upcoming workshops listing with seat counts
const Workshops = ({
  lang = 'en',
  onBook
}) => {
  const isAr = lang === 'ar';
  const [registered, setRegistered] = React.useState({});
  const items = isAr ? [{
    id: 'pbi-fund',
    title: 'أساسيات Power BI',
    date: '12 يونيو · الرياض',
    seats: 8,
    total: 20,
    tag: 'مبتدئ',
    emoji: '📊'
  }, {
    id: 'automate',
    title: 'أتمتة المهام مع Power Automate',
    date: '19 يونيو · أونلاين',
    seats: 14,
    total: 30,
    tag: 'متوسط',
    emoji: '⚡'
  }, {
    id: 'dax',
    title: 'DAX المتقدم للمحللين',
    date: '3 يوليو · الرياض',
    seats: 4,
    total: 15,
    tag: 'متقدم',
    emoji: '🧠'
  }] : [{
    id: 'pbi-fund',
    title: 'Power BI Foundations',
    date: 'Jun 12 · Riyadh',
    seats: 8,
    total: 20,
    tag: 'Beginner',
    emoji: '📊'
  }, {
    id: 'automate',
    title: 'Automate the Boring with Power Automate',
    date: 'Jun 19 · Online',
    seats: 14,
    total: 30,
    tag: 'Intermediate',
    emoji: '⚡'
  }, {
    id: 'dax',
    title: 'DAX for Analysts',
    date: 'Jul 3 · Riyadh',
    seats: 4,
    total: 15,
    tag: 'Advanced',
    emoji: '🧠'
  }];
  const register = id => {
    setRegistered(r => ({
      ...r,
      [id]: true
    }));
    onBook && onBook(id);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "rj-section rj-section-alt",
    dir: isAr ? 'rtl' : 'ltr'
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rj-section-head rj-section-head-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rj-eyebrow"
  }, "\uD83E\uDDE0 ", isAr ? 'الورش القادمة' : 'UPCOMING WORKSHOPS'), /*#__PURE__*/React.createElement("h2", {
    className: "rj-h2"
  }, isAr ? 'تعلم بأدوات قوية، بدون شهادة دكتوراه.' : "Learn the tools. Skip the PhD.")), /*#__PURE__*/React.createElement("a", {
    className: "rj-link-arrow rj-link-arrow-strong"
  }, isAr ? 'كل الورش' : 'All workshops', /*#__PURE__*/React.createElement(Icon, {
    name: isAr ? 'arrow-left' : 'arrow-right',
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rj-workshop-list"
  }, items.map(w => {
    const pct = Math.round((1 - w.seats / w.total) * 100);
    const tight = w.seats <= 5;
    return /*#__PURE__*/React.createElement("div", {
      key: w.id,
      className: "rj-workshop-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rj-workshop-emoji"
    }, w.emoji), /*#__PURE__*/React.createElement("div", {
      className: "rj-workshop-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rj-workshop-tag"
    }, w.tag), /*#__PURE__*/React.createElement("h3", {
      className: "rj-h4 rj-workshop-title"
    }, w.title), /*#__PURE__*/React.createElement("div", {
      className: "rj-workshop-meta"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 14
    }), " ", w.date), /*#__PURE__*/React.createElement("span", {
      className: `rj-seat-bar-row ${tight ? 'is-tight' : ''}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "rj-seat-bar"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: `${pct}%`
      }
    })), isAr ? `${w.seats} مقعد متبقي` : `${w.seats} seats left`))), /*#__PURE__*/React.createElement("button", {
      className: `rj-btn ${registered[w.id] ? 'rj-btn-success' : 'rj-btn-primary'}`,
      onClick: () => register(w.id)
    }, registered[w.id] ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    }), " ", isAr ? 'تم التسجيل' : 'Registered') : isAr ? 'سجل الآن' : 'Register'));
  }))));
};
window.Workshops = Workshops;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Workshops.jsx", error: String((e && e.message) || e) }); }

})();
