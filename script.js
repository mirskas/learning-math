// ===== i18n =====
let lang = localStorage.getItem('math-lang') || 'en';

const i18n = {
  en: {
    'logo': 'Learning Math',
    'nav.home': 'Home',
    'nav.topics': 'Topics',
    'nav.quiz': 'Quiz',
    'nav.lessons': 'Lessons',
    'hero.title': 'Master Math, One Step at a Time',
    'hero.sub': 'Interactive lessons, practice quizzes, and fun challenges to boost your math skills — from arithmetic to algebra and beyond.',
    'hero.cta1': 'Start Learning',
    'hero.cta2': 'Take a Quiz',
    'topics.title': 'Explore Topics',
    'topics.sub': 'Choose a topic and start learning at your own pace.',
    'topics.arithmetic.name': 'Arithmetic',
    'topics.arithmetic.desc': 'Addition, subtraction, multiplication, and division fundamentals.',
    'topics.fractions.name': 'Fractions',
    'topics.fractions.desc': 'Simplify, add, subtract, multiply, and divide fractions.',
    'topics.algebra.name': 'Algebra',
    'topics.algebra.desc': 'Solve equations, work with variables, and understand expressions.',
    'topics.geometry.name': 'Geometry',
    'topics.geometry.desc': 'Shapes, angles, area, perimeter, and the Pythagorean theorem.',
    'topics.percentages.name': 'Percentages',
    'topics.percentages.desc': 'Calculate discounts, tips, increases, and percentage change.',
    'topics.wordproblems.name': 'Word Problems',
    'topics.wordproblems.desc': 'Translate real-world scenarios into math and solve them.',
    'level.beginner': 'Beginner',
    'level.intermediate': 'Intermediate',
    'level.advanced': 'Advanced',
    'lessons.title': 'Lessons',
    'lessons.sub': 'Click a topic above or pick a lesson below to study concepts with examples.',
    'lessons.placeholder': 'Select a topic to view its lesson.',
    'quiz.title': 'Practice Quiz',
    'quiz.sub': 'Test your skills with randomly generated questions.',
    'quiz.complete': 'Quiz Complete!',
    'quiz.again': 'Try Again',
    'quiz.topicLabel': 'Topic:',
    'quiz.mixed': 'Mixed Topics',
    'quiz.loading': 'Loading question…',
    'quiz.next': 'Next Question →',
    'quiz.correct': '✓ Correct!',
    'quiz.incorrect': '✗ Incorrect. The answer is',
    'quiz.score': 'Score:',
    'quiz.result': (s, t, p) => `You scored ${s} out of ${t} (${p}%).`,
    'quiz.msg90': 'Excellent! You\'re a math star!',
    'quiz.msg70': 'Great job! Keep practicing!',
    'quiz.msg50': 'Good effort! Review the lessons and try again.',
    'quiz.msg0': 'Keep studying! Practice makes perfect.',
    'q.whatIs': (expr) => `What is ${expr}?`,
    'q.solveForX': (eq) => `Solve for x: ${eq}`,
    'q.rectArea': (l, w) => `Area of a rectangle with length ${l} and width ${w}?`,
    'q.triArea': (b, h) => `Area of a triangle with base ${b} and height ${h}?`,
    'q.pythTriple': (a, b) => `Pythagorean triple: legs ${a} and ${b}. Hypotenuse?`,
    'q.pctOf': (p, w) => `What is ${p}% of ${w}?`,
    'q.priceIncrease': (o, n) => `Price goes from $${o} to $${n}. What is the percent increase?`,
    'unit.sq': 'sq units'
  },
  ru: {
    'logo': 'Изучаем Математику',
    'nav.home': 'Главная',
    'nav.topics': 'Темы',
    'nav.quiz': 'Тест',
    'nav.lessons': 'Уроки',
    'hero.title': 'Освой математику шаг за шагом',
    'hero.sub': 'Интерактивные уроки, тесты для практики и интересные задачи, чтобы улучшить навыки — от арифметики до алгебры и дальше.',
    'hero.cta1': 'Начать обучение',
    'hero.cta2': 'Пройти тест',
    'topics.title': 'Изучай темы',
    'topics.sub': 'Выбери тему и начни обучение в своём темпе.',
    'topics.arithmetic.name': 'Арифметика',
    'topics.arithmetic.desc': 'Основы сложения, вычитания, умножения и деления.',
    'topics.fractions.name': 'Дроби',
    'topics.fractions.desc': 'Сокращение, сложение, вычитание, умножение и деление дробей.',
    'topics.algebra.name': 'Алгебра',
    'topics.algebra.desc': 'Решение уравнений, работа с переменными и выражениями.',
    'topics.geometry.name': 'Геометрия',
    'topics.geometry.desc': 'Фигуры, углы, площадь, периметр и теорема Пифагора.',
    'topics.percentages.name': 'Проценты',
    'topics.percentages.desc': 'Расчёт скидок, чаевых, увеличений и изменения процентов.',
    'topics.wordproblems.name': 'Задачи',
    'topics.wordproblems.desc': 'Перевод реальных ситуаций в математику и их решение.',
    'level.beginner': 'Начальный',
    'level.intermediate': 'Средний',
    'level.advanced': 'Продвинутый',
    'lessons.title': 'Уроки',
    'lessons.sub': 'Нажми на тему выше или выбери урок ниже, чтобы изучить понятия с примерами.',
    'lessons.placeholder': 'Выбери тему, чтобы увидеть урок.',
    'quiz.title': 'Практический тест',
    'quiz.sub': 'Проверь свои навыки на случайных вопросах.',
    'quiz.complete': 'Тест завершён!',
    'quiz.again': 'Попробовать снова',
    'quiz.topicLabel': 'Тема:',
    'quiz.mixed': 'Смешанные темы',
    'quiz.loading': 'Загрузка вопроса…',
    'quiz.next': 'Следующий вопрос →',
    'quiz.correct': '✓ Верно!',
    'quiz.incorrect': '✗ Неверно. Ответ:',
    'quiz.score': 'Счёт:',
    'quiz.result': (s, t, p) => `Ты набрал ${s} из ${t} (${p}%).`,
    'quiz.msg90': 'Отлично! Ты звезда математики!',
    'quiz.msg70': 'Хорошая работа! Продолжай практику!',
    'quiz.msg50': 'Неплохо! Повтори уроки и попробуй снова.',
    'quiz.msg0': 'Продолжай учиться! Практика делает мастера.',
    'q.whatIs': (expr) => `Сколько будет ${expr}?`,
    'q.solveForX': (eq) => `Найди x: ${eq}`,
    'q.rectArea': (l, w) => `Площадь прямоугольника с длиной ${l} и шириной ${w}?`,
    'q.triArea': (b, h) => `Площадь треугольника с основанием ${b} и высотой ${h}?`,
    'q.pythTriple': (a, b) => `Тройка Пифагора: катеты ${a} и ${b}. Гипотенуза?`,
    'q.pctOf': (p, w) => `Сколько составляет ${p}% от ${w}?`,
    'q.priceIncrease': (o, n) => `Цена выросла с $${o} до $${n}. На какой процент выросла цена?`,
    'unit.sq': 'кв. ед.'
  }
};

function t(key, ...args) {
  const entry = i18n[lang][key] ?? i18n.en[key] ?? key;
  return typeof entry === 'function' ? entry(...args) : entry;
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
  // Re-render current quiz state
  if (quiz.questions.length > 0) {
    document.getElementById('quiz-topic-label').textContent =
      quiz.topic === 'mixed' ? t('quiz.mixed') : t('topics.' + quiz.topic + '.name');
    if (!document.getElementById('quiz-body').hidden) {
      renderQuestion();
    } else {
      endQuiz();
    }
  }
  // Re-render open lesson
  const activeCard = document.querySelector('.topic-card.active');
  if (activeCard) showLesson(activeCard.dataset.topic, true);
}

// ===== Lessons Data =====
const lessons = {
  en: {
    arithmetic: `
      <h3>➕ Arithmetic</h3>
      <p>Arithmetic is the foundation of all math. It covers the four basic operations: addition, subtraction, multiplication, and division.</p>
      <h4>Key Operations</h4>
      <ul>
        <li><strong>Addition (+):</strong> Combining quantities. Example: 7 + 5 = 12</li>
        <li><strong>Subtraction (−):</strong> Finding the difference. Example: 15 − 8 = 7</li>
        <li><strong>Multiplication (×):</strong> Repeated addition. Example: 4 × 6 = 24</li>
        <li><strong>Division (÷):</strong> Splitting into equal groups. Example: 20 ÷ 4 = 5</li>
      </ul>
      <div class="example-box">
        <strong>Example:</strong> A store sells notebooks for $3 each. If you buy 7 notebooks, how much do you pay?<br>
        7 × $3 = <strong>$21</strong>
      </div>
      <div class="formula">Order of Operations: PEMDAS — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction</div>
      <h4>Practice Tip</h4>
      <p>Break large problems into smaller steps. For example, 48 + 37 can be solved as (48 + 30) + 7 = 78 + 7 = 85.</p>
    `,
    fractions: `
      <h3>½ Fractions</h3>
      <p>A fraction represents a part of a whole. It has a <strong>numerator</strong> (top) and a <strong>denominator</strong> (bottom).</p>
      <h4>Simplifying</h4>
      <p>Divide the numerator and denominator by their greatest common divisor (GCD).</p>
      <div class="example-box">
        <strong>Example:</strong> Simplify 12/18.<br>
        GCD of 12 and 18 is 6 → 12÷6 / 18÷6 = <strong>2/3</strong>
      </div>
      <h4>Adding Fractions</h4>
      <p>Find a common denominator, then add the numerators.</p>
      <div class="formula">a/b + c/b = (a + c) / b</div>
      <div class="example-box">
        <strong>Example:</strong> 1/4 + 2/4 = 3/4
      </div>
      <h4>Multiplying Fractions</h4>
      <div class="formula">(a/b) × (c/d) = (a × c) / (b × d)</div>
      <div class="example-box">
        <strong>Example:</strong> 2/3 × 3/5 = 6/15 = <strong>2/5</strong> (simplified)
      </div>
    `,
    algebra: `
      <h3>x Algebra</h3>
      <p>Algebra uses letters (variables) to represent unknown numbers. The goal is to solve for the variable.</p>
      <h4>Solving Linear Equations</h4>
      <p>Whatever you do to one side, do to the other to keep it balanced.</p>
      <div class="example-box">
        <strong>Example:</strong> Solve 3x + 5 = 20<br>
        3x = 20 − 5<br>
        3x = 15<br>
        x = 5
      </div>
      <h4>Distributive Property</h4>
      <div class="formula">a(b + c) = ab + ac</div>
      <div class="example-box">
        <strong>Example:</strong> 2(x + 4) = 2x + 8
      </div>
      <h4>Word Problems</h4>
      <p>Translate words into equations. "A number plus 7 equals 12" becomes x + 7 = 12, so x = 5.</p>
    `,
    geometry: `
      <h3>△ Geometry</h3>
      <p>Geometry studies shapes, sizes, angles, and positions of figures.</p>
      <h4>Key Formulas</h4>
      <ul>
        <li><strong>Rectangle Area:</strong> A = length × width</li>
        <li><strong>Triangle Area:</strong> A = ½ × base × height</li>
        <li><strong>Circle Area:</strong> A = πr²</li>
        <li><strong>Circle Circumference:</strong> C = 2πr</li>
      </ul>
      <div class="example-box">
        <strong>Example:</strong> A triangle has base 10 cm and height 6 cm.<br>
        A = ½ × 10 × 6 = <strong>30 cm²</strong>
      </div>
      <h4>Pythagorean Theorem</h4>
      <div class="formula">a² + b² = c²</div>
      <div class="example-box">
        <strong>Example:</strong> Legs 3 and 4.<br>
        3² + 4² = 9 + 16 = 25 → c = √25 = <strong>5</strong>
      </div>
    `,
    percentages: `
      <h3>% Percentages</h3>
      <p>A percent means "per hundred." To convert a decimal to a percent, multiply by 100.</p>
      <h4>Finding a Percentage</h4>
      <div class="formula">part = percentage × whole</div>
      <div class="example-box">
        <strong>Example:</strong> What is 20% of 80?<br>
        0.20 × 80 = <strong>16</strong>
      </div>
      <h4>Percentage Increase/Decrease</h4>
      <div class="formula">% change = (new − old) / old × 100</div>
      <div class="example-box">
        <strong>Example:</strong> A price goes from $50 to $65.<br>
        (65 − 50) / 50 × 100 = <strong>30% increase</strong>
      </div>
      <h4>Discounts</h4>
      <p>A 25% discount on $80 saves 0.25 × 80 = $20, so you pay $60.</p>
    `,
    wordproblems: `
      <h3>📝 Word Problems</h3>
      <p>Word problems combine reading comprehension with math. Follow a systematic approach:</p>
      <h4>Steps to Solve</h4>
      <ul>
        <li><strong>1. Read carefully</strong> — identify what is given and what is asked.</li>
        <li><strong>2. Define variables</strong> — let x represent the unknown.</li>
        <li><strong>3. Write an equation</strong> — translate words into math.</li>
        <li><strong>4. Solve</strong> — use algebra or arithmetic.</li>
        <li><strong>5. Check</strong> — does the answer make sense?</li>
      </ul>
      <div class="example-box">
        <strong>Example:</strong> A train travels 60 mph for 2.5 hours. How far does it go?<br>
        Distance = speed × time = 60 × 2.5 = <strong>150 miles</strong>
      </div>
      <div class="example-box">
        <strong>Example:</strong> Twice a number minus 4 equals 10. Find the number.<br>
        2x − 4 = 10 → 2x = 14 → x = <strong>7</strong>
      </div>
    `
  },
  ru: {
    arithmetic: `
      <h3>➕ Арифметика</h3>
      <p>Арифметика — основа всей математики. Она охватывает четыре базовые операции: сложение, вычитание, умножение и деление.</p>
      <h4>Основные операции</h4>
      <ul>
        <li><strong>Сложение (+):</strong> Объединение количеств. Пример: 7 + 5 = 12</li>
        <li><strong>Вычитание (−):</strong> Нахождение разности. Пример: 15 − 8 = 7</li>
        <li><strong>Умножение (×):</strong> Повторное сложение. Пример: 4 × 6 = 24</li>
        <li><strong>Деление (÷):</strong> Разделение на равные части. Пример: 20 ÷ 4 = 5</li>
      </ul>
      <div class="example-box">
        <strong>Пример:</strong> Магазин продаёт тетради по $3 за штуку. Если купить 7 тетрадей, сколько заплатить?<br>
        7 × $3 = <strong>$21</strong>
      </div>
      <div class="formula">Порядок действий: скобки, степени, умножение/деление, сложение/вычитание</div>
      <h4>Совет для практики</h4>
      <p>Разбивай большие примеры на маленькие шаги. Например, 48 + 37 можно решить как (48 + 30) + 7 = 78 + 7 = 85.</p>
    `,
    fractions: `
      <h3>½ Дроби</h3>
      <p>Дробь представляет часть целого. Она состоит из <strong>числителя</strong> (сверху) и <strong>знаменателя</strong> (снизу).</p>
      <h4>Сокращение</h4>
      <p>Раздели числитель и знаменатель на их наибольший общий делитель (НОД).</p>
      <div class="example-box">
        <strong>Пример:</strong> Сократи 12/18.<br>
        НОД чисел 12 и 18 равен 6 → 12÷6 / 18÷6 = <strong>2/3</strong>
      </div>
      <h4>Сложение дробей</h4>
      <p>Найди общий знаменатель, затем сложи числители.</p>
      <div class="formula">a/b + c/b = (a + c) / b</div>
      <div class="example-box">
        <strong>Пример:</strong> 1/4 + 2/4 = 3/4
      </div>
      <h4>Умножение дробей</h4>
      <div class="formula">(a/b) × (c/d) = (a × c) / (b × d)</div>
      <div class="example-box">
        <strong>Пример:</strong> 2/3 × 3/5 = 6/15 = <strong>2/5</strong> (сокращено)
      </div>
    `,
    algebra: `
      <h3>x Алгебра</h3>
      <p>Алгебра использует буквы (переменные) для обозначения неизвестных чисел. Цель — найти значение переменной.</p>
      <h4>Решение линейных уравнений</h4>
      <p>Что делаешь с одной стороной — делай и с другой, чтобы сохранить баланс.</p>
      <div class="example-box">
        <strong>Пример:</strong> Реши 3x + 5 = 20<br>
        3x = 20 − 5<br>
        3x = 15<br>
        x = 5
      </div>
      <h4>Дистрибутивное свойство</h4>
      <div class="formula">a(b + c) = ab + ac</div>
      <div class="example-box">
        <strong>Пример:</strong> 2(x + 4) = 2x + 8
      </div>
      <h4>Задачи</h4>
      <p>Переводи текст в уравнения. «Число плюс 7 равно 12» — это x + 7 = 12, значит x = 5.</p>
    `,
    geometry: `
      <h3>△ Геометрия</h3>
      <p>Геометрия изучает форму, размеры, углы и положение фигур.</p>
      <h4>Основные формулы</h4>
      <ul>
        <li><strong>Площадь прямоугольника:</strong> S = длина × ширина</li>
        <li><strong>Площадь треугольника:</strong> S = ½ × основание × высота</li>
        <li><strong>Площадь круга:</strong> S = πr²</li>
        <li><strong>Длина окружности:</strong> C = 2πr</li>
      </ul>
      <div class="example-box">
        <strong>Пример:</strong> Треугольник с основанием 10 см и высотой 6 см.<br>
        S = ½ × 10 × 6 = <strong>30 см²</strong>
      </div>
      <h4>Теорема Пифагора</h4>
      <div class="formula">a² + b² = c²</div>
      <div class="example-box">
        <strong>Пример:</strong> Катеты 3 и 4.<br>
        3² + 4² = 9 + 16 = 25 → c = √25 = <strong>5</strong>
      </div>
    `,
    percentages: `
      <h3>% Проценты</h3>
      <p>Процент означает «на сто». Чтобы перевести десятичную дробь в проценты, умножь на 100.</p>
      <h4>Нахождение процента</h4>
      <div class="formula">часть = процент × целое</div>
      <div class="example-box">
        <strong>Пример:</strong> Сколько составляет 20% от 80?<br>
        0.20 × 80 = <strong>16</strong>
      </div>
      <h4>Увеличение / уменьшение процента</h4>
      <div class="formula">% изменения = (новое − старое) / старое × 100</div>
      <div class="example-box">
        <strong>Пример:</strong> Цена выросла с $50 до $65.<br>
        (65 − 50) / 50 × 100 = <strong>рост на 30%</strong>
      </div>
      <h4>Скидки</h4>
      <p>Скидка 25% на $80 экономит 0.25 × 80 = $20, поэтому платишь $60.</p>
    `,
    wordproblems: `
      <h3>📝 Задачи</h3>
      <p>Задачи сочетают понимание текста и математику. Следуй системному подходу:</p>
      <h4>Шаги решения</h4>
      <ul>
        <li><strong>1. Внимательно прочитай</strong> — определи, что дано и что нужно найти.</li>
        <li><strong>2. Введи переменную</strong> — пусть x обозначает неизвестное.</li>
        <li><strong>3. Составь уравнение</strong> — переведи слова в математику.</li>
        <li><strong>4. Реши</strong> — используй алгебру или арифметику.</li>
        <li><strong>5. Проверь</strong> — имеет ли ответ смысл?</li>
      </ul>
      <div class="example-box">
        <strong>Пример:</strong> Поезд едет со скоростью 60 км/ч в течение 2,5 часов. Какой путь он пройдёт?<br>
        Путь = скорость × время = 60 × 2,5 = <strong>150 км</strong>
      </div>
      <div class="example-box">
        <strong>Пример:</strong> Два числа минус 4 равно 10. Найди число.<br>
        2x − 4 = 10 → 2x = 14 → x = <strong>7</strong>
      </div>
    `
  }
};

// ===== Quiz Question Generators =====
const questionGenerators = {
  arithmetic: () => {
    const ops = ['+', '-', '×'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, answer;
    if (op === '+') { a = rand(10, 99); b = rand(10, 99); answer = a + b; }
    else if (op === '-') { a = rand(20, 99); b = rand(5, a); answer = a - b; }
    else { a = rand(3, 12); b = rand(3, 12); answer = a * b; }
    return { q: t('q.whatIs', `${a} ${op} ${b}`), answer };
  },
  fractions: () => {
    const type = Math.random();
    if (type < 0.5) {
      const den = [2, 3, 4, 5, 6, 8, 10][Math.floor(Math.random() * 7)];
      const n1 = rand(1, den - 1);
      const n2 = rand(1, den - 1);
      return {
        q: t('q.whatIs', `${n1}/${den} + ${n2}/${den}`),
        answer: simplifyFraction(n1 + n2, den),
        rawAnswer: (n1 + n2) + '/' + den
      };
    } else {
      const n1 = rand(1, 5), d1 = rand(2, 6);
      const n2 = rand(1, 5), d2 = rand(2, 6);
      return {
        q: t('q.whatIs', `${n1}/${d1} × ${n2}/${d2}`),
        answer: simplifyFraction(n1 * n2, d1 * d2),
        rawAnswer: (n1 * n2) + '/' + (d1 * d2)
      };
    }
  },
  algebra: () => {
    const x = rand(1, 12);
    const a = rand(2, 8);
    const b = rand(1, 15);
    const result = a * x + b;
    return { q: t('q.solveForX', `${a}x + ${b} = ${result}`), answer: x };
  },
  geometry: () => {
    const type = Math.random();
    if (type < 0.4) {
      const l = rand(3, 15), w = rand(2, 12);
      return { q: t('q.rectArea', l, w), answer: l * w, unit: t('unit.sq') };
    } else if (type < 0.7) {
      const b = rand(2, 12), h = rand(2, 12);
      const area = (b * h) / 2;
      return { q: t('q.triArea', b, h), answer: area, unit: t('unit.sq') };
    } else {
      const legs = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]];
      const [a, b, c] = legs[Math.floor(Math.random() * legs.length)];
      return { q: t('q.pythTriple', a, b), answer: c };
    }
  },
  percentages: () => {
    const type = Math.random();
    if (type < 0.5) {
      const pcts = [10, 20, 25, 50, 75];
      const p = pcts[Math.floor(Math.random() * pcts.length)];
      const whole = [20, 40, 50, 80, 100, 120, 200][Math.floor(Math.random() * 7)];
      return { q: t('q.pctOf', p, whole), answer: (p / 100) * whole };
    } else {
      const old = rand(20, 100);
      const inc = rand(10, 50);
      const nw = old + inc;
      return { q: t('q.priceIncrease', old, nw), answer: Math.round((inc / old) * 100), unit: '%' };
    }
  }
};

// ===== Helpers =====
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(n, d) {
  if (d === 0) return 'undefined';
  const g = gcd(n, d);
  const sn = n / g, sd = d / g;
  return sd === 1 ? String(sn) : `${sn}/${sd}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== Quiz State =====
const QUIZ_LENGTH = 10;
let quiz = {
  topic: 'mixed',
  questions: [],
  index: 0,
  score: 0,
  answered: false
};

function generateOptions(correct) {
  const opts = new Set([String(correct)]);
  let attempts = 0;
  while (opts.size < 4 && attempts < 50) {
    attempts++;
    let delta = rand(1, Math.max(5, Math.abs(Number(correct)) || 5));
    if (Math.random() > 0.5) delta = -delta;
    let candidate = Number(correct) + delta;
    if (candidate < 0) candidate = Math.abs(candidate) + 1;
    if (Number.isInteger(Number(correct))) candidate = Math.round(candidate);
    opts.add(String(candidate));
  }
  while (opts.size < 4) {
    opts.add(String(Number(correct) + opts.size + 1));
  }
  return shuffle([...opts]);
}

function buildQuestion(topic) {
  const gen = topic === 'mixed'
    ? questionGenerators[Object.keys(questionGenerators)[rand(0, 4)]]
    : questionGenerators[topic];
  const data = gen();
  const correct = data.answer !== undefined ? data.answer : data.rawAnswer;
  const options = generateOptions(correct);
  if (!options.includes(String(correct))) {
    options[0] = String(correct);
  }
  return {
    text: data.q,
    options: shuffle(options),
    answer: String(correct),
    unit: data.unit || ''
  };
}

function startQuiz() {
  quiz.questions = [];
  for (let i = 0; i < QUIZ_LENGTH; i++) {
    quiz.questions.push(buildQuestion(quiz.topic));
  }
  quiz.index = 0;
  quiz.score = 0;
  document.getElementById('quiz-result').hidden = true;
  document.getElementById('quiz-body').hidden = false;
  document.getElementById('quiz-topic-label').textContent =
    quiz.topic === 'mixed' ? t('quiz.mixed') : t('topics.' + quiz.topic + '.name');
  renderQuestion();
}

function renderQuestion() {
  quiz.answered = false;
  const q = quiz.questions[quiz.index];
  document.getElementById('quiz-question').textContent = q.text;
  document.getElementById('quiz-score').textContent = `${t('quiz.score')} ${quiz.score} / ${quiz.index}`;
  document.getElementById('progress-bar').style.width = `${(quiz.index / QUIZ_LENGTH) * 100}%`;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('next-btn').hidden = true;
  document.getElementById('next-btn').textContent = t('quiz.next');

  const container = document.getElementById('quiz-options');
  container.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt + (q.unit ? ' ' + q.unit : '');
    btn.addEventListener('click', () => selectOption(btn, opt));
    container.appendChild(btn);
  });
}

function selectOption(btn, selected) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.questions[quiz.index];
  const feedback = document.getElementById('quiz-feedback');
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(b => {
    b.disabled = true;
    const val = b.textContent.replace(' ' + q.unit, '').trim();
    if (val === q.answer) b.classList.add('correct');
  });

  if (selected === q.answer) {
    quiz.score++;
    feedback.textContent = t('quiz.correct');
    feedback.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    feedback.textContent = `${t('quiz.incorrect')} ${q.answer}${q.unit ? ' ' + q.unit : ''}.`;
    feedback.classList.add('wrong');
  }

  document.getElementById('quiz-score').textContent = `${t('quiz.score')} ${quiz.score} / ${quiz.index + 1}`;
  document.getElementById('next-btn').hidden = false;
}

function nextQuestion() {
  quiz.index++;
  if (quiz.index >= QUIZ_LENGTH) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz() {
  document.getElementById('quiz-body').hidden = true;
  const result = document.getElementById('quiz-result');
  result.hidden = false;
  const pct = Math.round((quiz.score / QUIZ_LENGTH) * 100);
  let message;
  if (pct >= 90) message = t('quiz.msg90');
  else if (pct >= 70) message = t('quiz.msg70');
  else if (pct >= 50) message = t('quiz.msg50');
  else message = t('quiz.msg0');
  document.getElementById('result-text').textContent =
    `${t('quiz.result', quiz.score, QUIZ_LENGTH, pct)} ${message}`;
}

// ===== Lesson Viewer =====
function showLesson(topic, skipScroll) {
  const lesson = lessons[lang][topic] || lessons.en[topic];
  if (!lesson) return;
  document.getElementById('lesson-content').innerHTML = lesson;
  document.querySelectorAll('.topic-card').forEach(card => {
    card.classList.toggle('active', card.dataset.topic === topic);
  });
  if (!skipScroll) document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.getElementById('lang-en').addEventListener('click', () => {
    if (lang === 'en') return;
    lang = 'en';
    localStorage.setItem('math-lang', lang);
    applyLang();
    startQuiz();
  });
  document.getElementById('lang-ru').addEventListener('click', () => {
    if (lang === 'ru') return;
    lang = 'ru';
    localStorage.setItem('math-lang', lang);
    applyLang();
    startQuiz();
  });

  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // Active nav on scroll
  const sections = document.querySelectorAll('section');
  const navAnchors = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // Topic cards → lessons
  document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => showLesson(card.dataset.topic));
  });

  // Quiz controls
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('restart-btn').addEventListener('click', startQuiz);
  document.getElementById('topic-select').addEventListener('change', e => {
    quiz.topic = e.target.value;
    startQuiz();
  });

  // Apply saved language and start quiz
  applyLang();
  startQuiz();
});
