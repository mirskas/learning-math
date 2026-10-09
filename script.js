// ===== Lessons Data =====
const lessons = {
  arithmetic: {
    title: "Arithmetic",
    content: `
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
    `
  },
  fractions: {
    title: "Fractions",
    content: `
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
    `
  },
  algebra: {
    title: "Algebra",
    content: `
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
    `
  },
  geometry: {
    title: "Geometry",
    content: `
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
    `
  },
  percentages: {
    title: "Percentages",
    content: `
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
    `
  },
  wordproblems: {
    title: "Word Problems",
    content: `
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
    return { q: `What is ${a} ${op} ${b}?`, a, b, op, answer };
  },
  fractions: () => {
    const type = Math.random();
    if (type < 0.5) {
      const den = [2, 3, 4, 5, 6, 8, 10][Math.floor(Math.random() * 7)];
      const n1 = rand(1, den - 1);
      const n2 = rand(1, den - 1);
      return {
        q: `What is ${n1}/${den} + ${n2}/${den}?`,
        answer: simplifyFraction(n1 + n2, den),
        rawAnswer: (n1 + n2) + '/' + den
      };
    } else {
      const n1 = rand(1, 5), d1 = rand(2, 6);
      const n2 = rand(1, 5), d2 = rand(2, 6);
      return {
        q: `What is ${n1}/${d1} × ${n2}/${d2}?`,
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
    return {
      q: `Solve for x: ${a}x + ${b} = ${result}`,
      answer: x
    };
  },
  geometry: () => {
    const type = Math.random();
    if (type < 0.4) {
      const l = rand(3, 15), w = rand(2, 12);
      return { q: `Area of a rectangle with length ${l} and width ${w}?`, answer: l * w, unit: 'sq units' };
    } else if (type < 0.7) {
      const b = rand(2, 12), h = rand(2, 12);
      const area = (b * h) / 2;
      return { q: `Area of a triangle with base ${b} and height ${h}?`, answer: area, unit: 'sq units' };
    } else {
      const legs = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]];
      const [a, b, c] = legs[Math.floor(Math.random() * legs.length)];
      return { q: `Pythagorean triple: legs ${a} and ${b}. Hypotenuse?`, answer: c };
    }
  },
  percentages: () => {
    const type = Math.random();
    if (type < 0.5) {
      const pcts = [10, 20, 25, 50, 75];
      const p = pcts[Math.floor(Math.random() * pcts.length)];
      const whole = [20, 40, 50, 80, 100, 120, 200][Math.floor(Math.random() * 7)];
      return { q: `What is ${p}% of ${whole}?`, answer: (p / 100) * whole };
    } else {
      const old = rand(20, 100);
      const inc = rand(10, 50);
      const nw = old + inc;
      return { q: `Price goes from $${old} to $${nw}. What is the percent increase?`, answer: Math.round((inc / old) * 100), unit: '%' };
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

  // For fractions, correct may be "2/3" string
  const correct = data.answer !== undefined ? data.answer : data.rawAnswer;
  const options = generateOptions(correct);

  // If fraction answer not in options, add it
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
    quiz.topic === 'mixed' ? 'Mixed Topics' : quiz.topic.charAt(0).toUpperCase() + quiz.topic.slice(1);
  renderQuestion();
}

function renderQuestion() {
  quiz.answered = false;
  const q = quiz.questions[quiz.index];
  document.getElementById('quiz-question').textContent = q.text;
  document.getElementById('quiz-score').textContent = `Score: ${quiz.score} / ${quiz.index}`;
  document.getElementById('progress-bar').style.width = `${(quiz.index / QUIZ_LENGTH) * 100}%`;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('next-btn').hidden = true;

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
    feedback.textContent = '✓ Correct!';
    feedback.classList.add('correct');
  } else {
    btn.classList.add('wrong');
    feedback.textContent = `✗ Incorrect. The answer is ${q.answer}${q.unit ? ' ' + q.unit : ''}.`;
    feedback.classList.add('wrong');
  }

  document.getElementById('quiz-score').textContent = `Score: ${quiz.score} / ${quiz.index + 1}`;
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
  if (pct >= 90) message = 'Excellent! You\'re a math star!';
  else if (pct >= 70) message = 'Great job! Keep practicing!';
  else if (pct >= 50) message = 'Good effort! Review the lessons and try again.';
  else message = 'Keep studying! Practice makes perfect.';
  document.getElementById('result-text').textContent =
    `You scored ${quiz.score} out of ${QUIZ_LENGTH} (${pct}%). ${message}`;
}

// ===== Lesson Viewer =====
function showLesson(topic) {
  const lesson = lessons[topic];
  if (!lesson) return;
  document.getElementById('lesson-content').innerHTML = lesson.content;
  document.querySelectorAll('.topic-card').forEach(card => {
    card.classList.toggle('active', card.dataset.topic === topic);
  });
  document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
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

  // Start quiz on load
  startQuiz();
});
