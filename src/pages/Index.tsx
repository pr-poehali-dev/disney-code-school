import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Python для начинающих',
      description: 'Волшебное путешествие в мир программирования',
      duration: '3 месяца',
      level: 'Начальный',
      price: '15 000 ₽',
      emoji: '🐍',
      color: 'bg-primary',
    },
    {
      title: 'JavaScript & React',
      description: 'Создавай интерактивные веб-приложения',
      duration: '4 месяца',
      level: 'Средний',
      price: '20 000 ₽',
      emoji: '⚡',
      color: 'bg-secondary',
    },
    {
      title: 'Разработка игр',
      description: 'Построй свою игровую вселенную',
      duration: '6 месяцев',
      level: 'Продвинутый',
      price: '25 000 ₽',
      emoji: '🎮',
      color: 'bg-accent',
    },
  ];

  const teachers = [
    { name: 'Алиса Кодова', specialty: 'Python & AI', experience: '8 лет', emoji: '🧙‍♀️' },
    { name: 'Максим Реактов', specialty: 'Frontend', experience: '6 лет', emoji: '🧙‍♂️' },
    { name: 'Елена Геймдев', specialty: 'Game Dev', experience: '10 лет', emoji: '🧚‍♀️' },
  ];

  const pricing = [
    {
      name: 'Стартовый',
      price: '5 000 ₽',
      period: 'в месяц',
      features: ['1 курс на выбор', 'Видеоуроки', 'Чат поддержки', 'Сертификат'],
      popular: false,
    },
    {
      name: 'Премиум',
      price: '8 000 ₽',
      period: 'в месяц',
      features: ['Все курсы', 'Видеоуроки', 'Личный наставник', 'Проверка заданий', 'Сертификат', 'Доступ к комьюнити'],
      popular: true,
    },
    {
      name: 'Профи',
      price: '12 000 ₽',
      period: 'в месяц',
      features: ['Все курсы', 'Индивидуальные занятия', 'Личный наставник', 'Помощь с проектами', 'Карьерная поддержка', 'Премиум сертификат'],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'С какого возраста можно начинать?',
      answer: 'Наши курсы подходят для детей от 8 лет и взрослых любого возраста! Программы адаптируются под уровень ученика.',
    },
    {
      question: 'Нужен ли опыт в программировании?',
      answer: 'Нет! У нас есть курсы для абсолютных новичков. Мы научим всему с нуля в игровой форме.',
    },
    {
      question: 'Какое оборудование необходимо?',
      answer: 'Достаточно компьютера или ноутбука с доступом в интернет. Все программы бесплатные.',
    },
    {
      question: 'Как проходят занятия?',
      answer: 'Занятия проходят онлайн в удобное время. Видеоуроки, практические задания и поддержка наставника.',
    },
  ];

  const blogPosts = [
    {
      title: 'Почему Python — лучший язык для начала',
      date: '15 октября 2024',
      excerpt: 'Python простой, понятный и очень популярный. Узнай, почему миллионы программистов начинают именно с него!',
      image: 'https://cdn.poehali.dev/projects/32cfd860-1b53-4b8a-b4aa-b01e4ad43048/files/e8e42090-0665-4ffc-a2e6-89431e026a36.jpg',
    },
    {
      title: '5 крутых проектов для портфолио',
      date: '10 октября 2024',
      excerpt: 'Создай эти проекты и покажи их будущему работодателю. От простых до впечатляющих!',
      image: 'https://cdn.poehali.dev/projects/32cfd860-1b53-4b8a-b4aa-b01e4ad43048/files/69e455e4-dfd7-4f79-83dc-e3950df8370b.jpg',
    },
    {
      title: 'Как игры помогают учить код',
      date: '5 октября 2024',
      excerpt: 'Геймификация делает обучение веселым и эффективным. Узнай секреты нашего подхода!',
      image: 'https://cdn.poehali.dev/projects/32cfd860-1b53-4b8a-b4aa-b01e4ad43048/files/01dc5d42-22ba-4303-a512-2e6bf1033e46.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl animate-wiggle">🏰</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                КодоМагия
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'courses', 'teachers', 'about', 'pricing', 'faq', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'courses' && 'Курсы'}
                  {section === 'teachers' && 'Преподаватели'}
                  {section === 'about' && 'О школе'}
                  {section === 'pricing' && 'Цены'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:block bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-float inline-block">
            <img
              src="https://cdn.poehali.dev/projects/32cfd860-1b53-4b8a-b4aa-b01e4ad43048/files/01dc5d42-22ba-4303-a512-2e6bf1033e46.jpg"
              alt="Magic Coding Castle"
              className="w-64 h-64 object-cover rounded-3xl disney-shadow mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            Волшебный мир программирования
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Изучай код в стиле Disney! Превращаем обучение в увлекательное приключение ✨
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
              <Icon name="Sparkles" className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10">
              <Icon name="PlayCircle" className="mr-2" />
              Посмотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши курсы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Выбери свое приключение в мире кода</p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover-float disney-shadow border-0 overflow-hidden animate-enter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-3 ${course.color}`}></div>
                <CardHeader>
                  <div className="text-6xl mb-4">{course.emoji}</div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="TrendingUp" size={16} className="text-primary" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary">
                      <Icon name="DollarSign" size={16} />
                      <span>{course.price}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши наставники</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Опытные волшебники кода</p>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover-float text-center disney-shadow border-0">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl">
                    {teacher.emoji}
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Опыт: {teacher.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">О школе КодоМагия</h2>
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/projects/32cfd860-1b53-4b8a-b4aa-b01e4ad43048/files/69e455e4-dfd7-4f79-83dc-e3950df8370b.jpg"
              alt="Teacher"
              className="w-48 h-48 object-cover rounded-full mx-auto disney-shadow"
            />
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            КодоМагия — это онлайн-школа программирования, где обучение превращается в захватывающее приключение!
            Мы используем методы геймификации и визуальный стиль любимых мультфильмов, чтобы сделать изучение кода
            увлекательным и понятным.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Наша миссия — вдохновить новое поколение разработчиков и показать, что программирование — это весело,
            творчески и доступно каждому! 🚀
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-bold text-xl mb-2">5000+</h3>
              <p className="text-gray-600">Выпускников</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-bold text-xl mb-2">4.9/5</h3>
              <p className="text-gray-600">Рейтинг</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-bold text-xl mb-2">50+</h3>
              <p className="text-gray-600">Наград</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Выбери подходящий план обучения</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`hover-float ${plan.popular ? 'border-4 border-primary disney-shadow scale-105' : 'border-0'}`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 font-bold">
                    ⭐ Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Все, что нужно знать перед стартом</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl px-6 border-0 disney-shadow">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Блог</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полезные статьи о программировании</p>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-float disney-shadow border-0 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0 text-primary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 mb-8 text-lg">Готовы начать свое приключение в мире кода?</p>
          <Card className="disney-shadow border-0">
            <CardContent className="pt-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" className="text-primary" />
                  <span>info@kodomagic.ru</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" className="text-primary" />
                  <span>Москва, ул. Волшебная, д. 42</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                  <Icon name="Youtube" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                  <Icon name="Instagram" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                  <Icon name="Facebook" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                  <Icon name="Twitter" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl">🏰</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              КодоМагия
            </span>
          </div>
          <p className="text-gray-600 mb-4">Превращаем мечты в код с 2020 года</p>
          <p className="text-sm text-gray-500">© 2024 КодоМагия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}