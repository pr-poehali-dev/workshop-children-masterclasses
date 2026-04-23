import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/32cda1da-4644-472f-9844-46ba0932e212/files/dab38c32-3bae-451d-a254-30120d88a5a9.jpg";
const TEACHER_IMG = "https://cdn.poehali.dev/projects/32cda1da-4644-472f-9844-46ba0932e212/files/a4a81934-d585-4707-9ea6-e4e6294de954.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/32cda1da-4644-472f-9844-46ba0932e212/files/98bc8386-e7e7-4fa9-9755-bf23517b504f.jpg";
const CRAFT_IMG = "https://cdn.poehali.dev/projects/32cda1da-4644-472f-9844-46ba0932e212/files/f2266233-73f1-47a4-9f39-127aeefb3284.jpg";

const navItems = [
  { label: "О мастерской", href: "#about" },
  { label: "Мастер-классы", href: "#masterclasses" },
  { label: "Галерея", href: "#gallery" },
  { label: "Расписание", href: "#schedule" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Преподаватель", href: "#teacher" },
  { label: "Контакты", href: "#contacts" },
];

const masterclasses = [
  { title: "Гипсовые фигурки", desc: "Заливаем гипс в формы, расписываем готовые фигурки красками и лаком. Можно подарить близким или поставить дома.", age: "4–14 лет", duration: "60 мин", emoji: "🪆", price: "500 ₽" },
  { title: "Картины текстурной пастой", desc: "Создаём рельефные картины с объёмными узорами. Паста, шпатель, акрил — получается настоящий подарок для дома.", age: "7–14 лет", duration: "90 мин", emoji: "🖼️", price: "500 ₽" },
  { title: "Банты и цветы", desc: "Мастерим атласные банты, цветы из лент и ткани. Носить самой или подарить маме, подруге, воспитателю.", age: "5–12 лет", duration: "60 мин", emoji: "🎀", price: "500 ₽" },
  { title: "Бижутерия и украшения", desc: "Создаём кольца, серьги, браслеты из полимерной глины и бусин. Готовое украшение можно подарить или носить самой.", age: "8–14 лет", duration: "75 мин", emoji: "💎", price: "500 ₽" },
  { title: "Игрушки из фетра", desc: "Шьём мягкие игрушки и брелоки из фетра — без машинки. Отличный подарок ручной работы для друга или родителей.", age: "6–12 лет", duration: "90 мин", emoji: "🧸", price: "500 ₽" },
  { title: "Рисование картин", desc: "Пишем картины акрилом по холсту. Готовую работу можно повесить дома или подарить — выглядит как настоящее искусство.", age: "5–14 лет", duration: "75 мин", emoji: "🎨", price: "500 ₽" },
];

const schedule = [
  { day: "Понедельник", time: "16:00 – 17:00", name: "Гипсовые фигурки", group: "Младшая группа" },
  { day: "Вторник", time: "15:30 – 17:00", name: "Картины текстурной пастой", group: "Средняя группа" },
  { day: "Среда", time: "16:00 – 17:00", name: "Банты и цветы", group: "Младшая группа" },
  { day: "Четверг", time: "16:30 – 17:45", name: "Бижутерия и украшения", group: "Старшая группа" },
  { day: "Суббота", time: "11:00 – 12:30", name: "Игрушки из фетра", group: "Смешанная группа" },
  { day: "Воскресенье", time: "12:00 – 13:00", name: "Рисование картин", group: "Семейное занятие" },
];

const reviews = [
  { name: "Мария Н.", text: "Дочка расписала гипсовую фигурку и теперь она стоит у нас на почётном месте. Пришли на один мастер-класс — записались на весь месяц!", child: "Настя, 7 лет", stars: 5 },
  { name: "Алексей К.", text: "Сын сделал картину текстурной пастой — такую красоту я не ожидал увидеть. Теперь висит в гостиной, все гости спрашивают откуда.", child: "Артём, 10 лет", stars: 5 },
  { name: "Елена В.", text: "Дочка сделала банты себе и всем подругам. Педагог терпеливо объяснила каждый шаг — даже я научилась!", child: "Соня, 8 лет", stars: 5 },
  { name: "Дмитрий Ш.", text: "Сын в восторге от занятий по бижутерии — подарил маме серьги собственного изготовления на день рождения. Незабываемо!", child: "Миша, 11 лет", stars: 5 },
  { name: "Ольга Р.", text: "Ходим на все направления по очереди. Каждый раз домой уходим с готовой работой — это очень ценно, результат виден сразу!", child: "Даша, 9 лет", stars: 5 },
  { name: "Светлана М.", text: "Игрушка из фетра, которую сшила дочка, стала её любимой. Говорит, что сама сделала — и это правда! Очень горжусь.", child: "Лиза, 7 лет", stars: 5 },
];

const galleryImages = [HERO_IMG, GALLERY_IMG, CRAFT_IMG, GALLERY_IMG, CRAFT_IMG, HERO_IMG];

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".section-fade");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useFadeIn();

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-cormorant text-xl font-semibold text-foreground tracking-wide">
            Шалаш
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-base py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0">
          <div className="max-w-xl">
            <p className="font-golos text-sm tracking-[0.2em] uppercase text-primary mb-6">
              Детский творческий досуг
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6">
              Сделал<br />
              своими руками —<br />
              <em className="not-italic text-primary">забрал домой</em>
            </h1>
            <p className="font-golos text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Ребёнок приходит, мастерит настоящую вещь и уходит с ней. Гипс, картины, банты, игрушки, украшения — никакой теории, только руки и результат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacts"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-golos font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Записаться
              </a>
              <a
                href="#masterclasses"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-golos font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Что делаем
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[48%] h-72 md:h-auto relative overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Мастерская"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto section-fade">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-4">О нас</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground leading-tight">
                Досуг,<br />после которого<br />что-то остаётся
              </h2>
            </div>
            <div className="md:col-span-2 flex flex-col gap-8">
              <p className="font-golos text-muted-foreground text-lg leading-relaxed">
                Мастерская — это не только творчество. Здесь дети знакомятся, общаются и находят новых друзей. Пока руки заняты делом, завязываются настоящие дружбы.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { value: "6+", label: "видов изделий" },
                  { value: "до 8", label: "детей на занятии" },
                  { value: "100%", label: "уходят с готовой вещью" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-secondary rounded-xl p-6 text-center">
                    <div className="font-cormorant text-4xl font-medium text-primary mb-1">{stat.value}</div>
                    <div className="font-golos text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "Handshake", text: "Знакомятся и находят новых друзей" },
                  { icon: "Gift", text: "Делают изделия в подарок близким" },
                  { icon: "Smile", text: "Уходят с гордостью за свою работу" },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col items-center text-center gap-3 bg-secondary rounded-xl p-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon} size={18} className="text-primary" />
                    </div>
                    <p className="font-golos text-sm text-foreground leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="font-golos text-muted-foreground leading-relaxed">
                Все материалы уже в мастерской — гипс, краски, ткань, лента, фетр, фурнитура. Ничего с собой брать не нужно. Ребёнок просто приходит и начинает делать.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MASTERCLASSES */}
      <section id="masterclasses" className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-fade">
            <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-4">Что делаем</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">Виды изделий</h2>
            <p className="font-golos text-muted-foreground mt-4 max-w-xl mx-auto">На каждом занятии — одно конкретное изделие. Ребёнок делает его сам, от начала до конца.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclasses.map((mc, i) => (
              <div
                key={mc.title}
                className="section-fade bg-background rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{mc.emoji}</div>
                  <span className="font-cormorant text-2xl font-semibold text-primary">{mc.price}</span>
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-foreground">{mc.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed flex-1">{mc.desc}</p>
                <div className="flex flex-col gap-1.5 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-golos">
                    <Icon name="Users" size={13} />
                    <span>{mc.age}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-golos">
                    <Icon name="Clock" size={13} />
                    <span>{mc.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRICE BANNER */}
          <div className="mt-14 section-fade">
            <div className="bg-primary rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-golos text-primary-foreground/70 text-sm mb-2">Стоимость занятия</p>
                <div className="font-cormorant text-4xl md:text-5xl font-light text-primary-foreground">
                  500 ₽ / занятие
                </div>
                <p className="font-golos text-primary-foreground/80 text-sm mt-3 max-w-md">
                  Все материалы включены. Можно прийти на одно занятие — без абонемента и обязательств.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-6 py-4 text-center">
                  <div className="font-cormorant text-2xl font-medium text-primary-foreground">1 занятие</div>
                  <div className="font-golos text-sm text-primary-foreground/70 mt-1">без записи заранее</div>
                </div>
                <div className="bg-primary-foreground/15 border border-primary-foreground/30 rounded-xl px-6 py-4 text-center">
                  <div className="font-cormorant text-2xl font-medium text-primary-foreground">Абонемент</div>
                  <div className="font-golos text-sm text-primary-foreground/70 mt-1">скидка при оплате месяца</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-fade">
            <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-4">Творчество детей</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">Галерея работ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 section-fade">
            {galleryImages.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={src}
                  alt={`Работа ребёнка ${i + 1}`}
                  className="gallery-img w-full h-full object-cover transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-fade">
            <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-4">Когда приходить</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">Расписание</h2>
            <p className="font-golos text-muted-foreground mt-4 max-w-lg mx-auto">Занятия проходят в небольших группах. Каждый ребёнок работает в своём темпе.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((s, i) => (
              <div
                key={i}
                className="section-fade bg-background rounded-2xl p-6 schedule-card transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-cormorant text-xl font-medium text-foreground">{s.day}</span>
                  <span className="font-golos text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{s.group}</span>
                </div>
                <div className="font-golos text-2xl font-semibold text-foreground mb-1">{s.time}</div>
                <div className="font-golos text-sm text-muted-foreground">{s.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center section-fade">
            <p className="font-golos text-muted-foreground mb-6">Можно прийти на одно занятие — без абонемента и обязательств. Просто запишитесь заранее.</p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-golos font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <Icon name="PhoneCall" size={16} />
              Записаться
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-fade">
            <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-4">Что говорят родители</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">Отзывы</h2>
            <p className="font-golos text-muted-foreground mt-4 max-w-lg mx-auto">Дети возвращаются домой с готовой вещью — и рассказывают о ней всем.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="section-fade bg-secondary rounded-2xl p-7 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <span key={si} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="font-golos text-foreground leading-relaxed flex-1 text-[0.95rem]">«{r.text}»</p>
                <div className="border-t border-border pt-4">
                  <div className="font-golos font-semibold text-foreground text-sm">{r.name}</div>
                  <div className="font-golos text-xs text-muted-foreground mt-0.5">{r.child}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHER */}
      <section id="teacher" className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto section-fade">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={TEACHER_IMG}
                  alt="Преподаватель"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-5 shadow-lg hidden md:block">
                <div className="font-cormorant text-3xl font-medium text-primary">5+ лет</div>
                <div className="font-golos text-xs text-muted-foreground">ведёт детский досуг</div>
              </div>
            </div>
            <div>
              <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-6">Ведущий мастер</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-6">
                Анна Сергеевна<br />Петрова
              </h2>
              <p className="font-golos text-muted-foreground leading-relaxed mb-6">
                Ведёт занятия по детскому творческому досугу уже более 5 лет. Умеет объяснить так, чтобы ребёнок любого возраста справился сам — и был горд результатом.
              </p>
              <p className="font-golos text-muted-foreground leading-relaxed mb-8">
                Главный принцип: никакого давления. Ребёнок работает в своём темпе, а готовое изделие — его личная гордость, которую он несёт домой.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Гипс", "Текстурные картины", "Банты", "Бижутерия", "Фетр"].map((tag) => (
                  <span key={tag} className="font-golos text-sm px-4 py-1.5 bg-background border border-border rounded-full text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-6xl mx-auto section-fade">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-golos text-xs tracking-[0.2em] uppercase text-primary mb-6">Свяжитесь с нами</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">Контакты</h2>
              <div className="flex flex-col gap-6">
                {[
                  { icon: "MapPin", title: "Адрес", text: "ул. Художников, 14, студия 3" },
                  { icon: "Phone", title: "Телефон", text: "+7 (900) 000-00-00" },
                  { icon: "Mail", title: "E-mail", text: "hello@masterskaya.ru" },
                  { icon: "Clock", title: "Режим работы", text: "Пн–Пт 15:00–20:00, Сб–Вс 10:00–15:00" },
                ].map((c) => (
                  <div key={c.icon} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-golos text-xs text-muted-foreground mb-0.5">{c.title}</div>
                      <div className="font-golos text-foreground font-medium">{c.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-cormorant text-2xl font-medium text-foreground mb-6">Записаться на занятие</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-golos text-sm text-muted-foreground block mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Имя родителя"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-golos text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>
                <div>
                  <label className="font-golos text-sm text-muted-foreground block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-golos text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>
                <div>
                  <label className="font-golos text-sm text-muted-foreground block mb-2">Возраст ребёнка</label>
                  <input
                    type="text"
                    placeholder="Например: 7 лет"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-golos text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>
                <div>
                  <label className="font-golos text-sm text-muted-foreground block mb-2">Комментарий</label>
                  <textarea
                    rows={3}
                    placeholder="Интересующий курс или вопрос..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-golos text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 bg-primary text-primary-foreground font-golos font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-xl font-semibold text-foreground">Шалаш</div>
          <div className="font-golos text-sm text-muted-foreground text-center">
            Детский творческий досуг · Все права защищены · 2025
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {navItems.slice(0, 4).map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-xs">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}