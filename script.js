let unit = 'metric', lastKey = null;

/* ─── DATA ─── */
const DATA = {
  underweight: {
    color:'#5bb4f5', panelBg:'rgba(91,180,245,.08)', panelBorder:'rgba(91,180,245,.28)',
    gesture:'🥗', headline:'Time to nourish your body',
    sub:'Your BMI is below the healthy range. The goal is to gain healthy, sustainable weight through nutrient-dense foods and strength training — not empty calories. Small consistent steps make a big difference.',
    tips:[
      {icon:'🍳',title:'Load up on protein',body:'Eat eggs, chicken, lentils, dairy & nuts at every meal. Protein builds lean muscle and drives healthy weight gain more than anything else.'},
      {icon:'🏋️',title:'Lift weights 3×/week',body:'Squats, push-ups, and deadlifts stimulate muscle growth. Start light and progress weekly — you will see results in 4–6 weeks.'},
      {icon:'🥑',title:'Healthy caloric surplus',body:'Add 300–500 extra calories daily from healthy fats — avocado, olive oil, nuts, full-fat dairy, and whole grain bread.'},
      {icon:'🥣',title:'5–6 meals a day',body:'Never skip meals. Eat every 2.5–3 hrs. High-calorie smoothies (banana + oats + nut butter + milk) are your best friend.'},
      {icon:'💤',title:'Sleep 8–9 hours',body:'Growth hormone released during deep sleep is the key driver of muscle repair and weight gain. Sleep is not optional.'},
      {icon:'🩺',title:'Rule out medical causes',body:'Low weight can stem from thyroid issues, coeliac disease, or digestive conditions. Ask your doctor for a blood panel check.'},
    ],
    week:[
      {day:'Mon',activity:'Strength training — upper body (push-ups, rows, shoulder press)',badge:'Muscle',bc:'rgba(91,180,245,.15)',bt:'#5bb4f5'},
      {day:'Tue',activity:'High-calorie meal prep + 30 min light walk',badge:'Nutrition',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Wed',activity:'Strength training — lower body (squats, lunges, deadlifts)',badge:'Muscle',bc:'rgba(91,180,245,.15)',bt:'#5bb4f5'},
      {day:'Thu',activity:'Rest day — focus on eating 5 meals, hydrate well',badge:'Recovery',bc:'rgba(123,110,246,.15)',bt:'#9b8ff8'},
      {day:'Fri',activity:'Full-body circuit training + protein-rich dinner',badge:'Muscle',bc:'rgba(91,180,245,.15)',bt:'#5bb4f5'},
      {day:'Sat',activity:'Social activity (hike, swim, cycle) + caloric snacks',badge:'Active',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Sun',activity:'Meal planning for the week — prep snacks & smoothie packs',badge:'Plan',bc:'rgba(245,200,66,.1)',bt:'#f5c842'},
    ]
  },
  normal: {
    color:'#c8f564', panelBg:'rgba(200,245,100,.07)', panelBorder:'rgba(200,245,100,.28)',
    gesture:'🏆', headline:'You\'re in the healthy zone!',
    sub:'Your BMI is exactly where it should be. This is a real achievement — many people never reach or maintain this. Your job now is consistency: protect what you have built and keep your habits strong.',
    tips:[
      {icon:'🏃',title:'150 min cardio/week',body:'Brisk walking, cycling, swimming or jogging. Mix moderate and vigorous intensity. Consistent cardio protects heart health long-term.'},
      {icon:'🥦',title:'Eat the rainbow',body:'Fill half your plate with colourful vegetables at every meal. Diversity in plant foods feeds your gut microbiome and prevents disease.'},
      {icon:'💧',title:'Drink 2–3 L water daily',body:'Proper hydration keeps metabolism efficient, reduces false hunger signals, and improves energy and skin health noticeably.'},
      {icon:'🧘',title:'Manage stress actively',body:'Chronic stress raises cortisol which causes fat storage and cravings. Try 10 min of meditation, yoga, or deep breathing daily.'},
      {icon:'😴',title:'Protect your sleep',body:'7–9 hours of quality sleep regulates ghrelin and leptin — the hunger hormones. Poor sleep is one of the top causes of weight gain.'},
      {icon:'📅',title:'Annual health check',body:'Even at a healthy weight, annual blood tests (glucose, lipids, thyroid) catch metabolic issues before symptoms appear.'},
    ],
    week:[
      {day:'Mon',activity:'30 min jog or brisk walk + stretching',badge:'Cardio',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Tue',activity:'Strength training — upper body',badge:'Strength',bc:'rgba(91,180,245,.1)',bt:'#5bb4f5'},
      {day:'Wed',activity:'Yoga or Pilates (45 min) — flexibility & core',badge:'Flexibility',bc:'rgba(123,110,246,.15)',bt:'#9b8ff8'},
      {day:'Thu',activity:'Brisk walk (30 min) + balanced nutrition focus',badge:'Active',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Fri',activity:'Strength training — lower body',badge:'Strength',bc:'rgba(91,180,245,.1)',bt:'#5bb4f5'},
      {day:'Sat',activity:'Longer outdoor activity (hike, swim, sport)',badge:'Endurance',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Sun',activity:'Full rest day — focus on good sleep & meal prep',badge:'Recovery',bc:'rgba(123,110,246,.15)',bt:'#9b8ff8'},
    ]
  },
  overweight: {
    color:'#f5c842', panelBg:'rgba(245,200,66,.08)', panelBorder:'rgba(245,200,66,.28)',
    gesture:'💪', headline:'Small changes, big results',
    sub:'You\'re slightly above the healthy range — but you do not need drastic measures. Sustainable daily habits will get you there within a few months. No crash diets, no extreme workouts. Just smart, consistent effort.',
    tips:[
      {icon:'🚶',title:'Walk 30–45 min daily',body:'Adding a daily walk is the single most sustainable fat-loss habit. It burns 200–350 cal and improves insulin sensitivity immediately.'},
      {icon:'🍽️',title:'Smaller plates, eat slower',body:'Use a side plate instead of a dinner plate. Eat slowly (20 min per meal). Your brain takes 20 min to register fullness — this trick saves 300+ cal/day.'},
      {icon:'🧃',title:'Eliminate liquid calories',body:'Sodas, juices, flavoured lattes and alcohol are calorie bombs with zero satiety. Switch entirely to water, black coffee, or herbal tea.'},
      {icon:'🥗',title:'Fibre at every meal',body:'High-fibre foods (vegetables, legumes, oats, seeds) keep you full for hours and reduce total calorie intake naturally without hunger.'},
      {icon:'🏊',title:'Low-impact cardio 4×/week',body:'Swimming, cycling, elliptical, and rowing are joint-friendly and highly effective for fat loss. 40–50 min per session, moderate intensity.'},
      {icon:'📓',title:'Food journal for 2 weeks',body:'Just tracking what you eat for 14 days creates powerful awareness. Research shows journallers lose twice as much weight as non-journallers.'},
    ],
    week:[
      {day:'Mon',activity:'45 min brisk walk + calorie-tracking breakfast',badge:'Cardio',bc:'rgba(245,200,66,.1)',bt:'#f5c842'},
      {day:'Tue',activity:'Strength circuit (20 min) + high-fibre lunch',badge:'Strength',bc:'rgba(91,180,245,.1)',bt:'#5bb4f5'},
      {day:'Wed',activity:'40 min cycling or swimming',badge:'Cardio',bc:'rgba(245,200,66,.1)',bt:'#f5c842'},
      {day:'Thu',activity:'Rest day — focus on cooking healthy meals at home',badge:'Nutrition',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Fri',activity:'Full-body strength training (30 min) + 20 min walk',badge:'Mixed',bc:'rgba(245,200,66,.1)',bt:'#f5c842'},
      {day:'Sat',activity:'Longer cardio (60 min swim, hike, or cycling)',badge:'Endurance',bc:'rgba(245,200,66,.1)',bt:'#f5c842'},
      {day:'Sun',activity:'Light yoga or stretching + meal prep for the week',badge:'Recovery',bc:'rgba(123,110,246,.15)',bt:'#9b8ff8'},
    ]
  },
  obese: {
    color:'#f56b6b', panelBg:'rgba(245,107,107,.08)', panelBorder:'rgba(245,107,107,.28)',
    gesture:'🌱', headline:'Every step forward matters',
    sub:'Your BMI indicates obesity — this is a health concern, but it is completely manageable. The most important thing is to start somewhere, anywhere. You do not need a perfect plan. You need a first step. Then another.',
    tips:[
      {icon:'🩺',title:'See your doctor first',body:'A GP can screen for type 2 diabetes, hypertension, and sleep apnoea — all common at this BMI level — and create a medically safe plan.'},
      {icon:'🚶',title:'Start with 15 min walks',body:'Just 15–20 min of walking daily is a powerful start. Add 5 min every week. No pressure — the habit matters more than the intensity.'},
      {icon:'🍱',title:'Cut ultra-processed foods',body:'Fast food, packaged snacks, fried food, and sugary cereals are calorie-dense and inflammation-promoting. Replace with simple home-cooked meals.'},
      {icon:'🥤',title:'Water only — cut all drinks',body:'Eliminating sugary drinks and alcohol is the easiest single calorie cut — often 400–600 calories per day — with zero effort.'},
      {icon:'🧑‍⚕️',title:'Work with a dietitian',body:'A registered dietitian builds a personalised, medically-sound meal plan that actually fits your life — far more effective than any fad diet.'},
      {icon:'🤝',title:'Build accountability',body:'Join a support group, find a walking buddy, or use a health app. Studies show social accountability doubles long-term success rates.'},
    ],
    week:[
      {day:'Mon',activity:'15–20 min slow walk + drink 8 glasses of water',badge:'Start',bc:'rgba(245,107,107,.1)',bt:'#f56b6b'},
      {day:'Tue',activity:'Cook a healthy meal at home + cut one processed food',badge:'Nutrition',bc:'rgba(200,245,100,.1)',bt:'#c8f564'},
      {day:'Wed',activity:'20 min walk (slightly faster than Monday)',badge:'Cardio',bc:'rgba(245,107,107,.1)',bt:'#f56b6b'},
      {day:'Thu',activity:'Rest + doctor appointment or research dietitians',badge:'Health',bc:'rgba(123,110,246,.15)',bt:'#9b8ff8'},
      {day:'Fri',activity:'20–25 min walk + avoid all sugary drinks today',badge:'Progress',bc:'rgba(245,107,107,.1)',bt:'#f56b6b'},
      {day:'Sat',activity:'Social activity — gentle swim, slow cycle, or nature walk',badge:'Active',bc:'rgba(245,107,107,.1)',bt:'#f56b6b'},
      {day:'Sun',activity:'Plan your meals for next week — prep one healthy dish',badge:'Plan',bc:'rgba(245,200,66,.1)',bt:'#f5c842'},
    ]
  }
};

/* ─── HELPERS ─── */
function setUnit(u){
  unit=u;
  document.getElementById('btn-metric').classList.toggle('active',u==='metric');
  document.getElementById('btn-imperial').classList.toggle('active',u==='imperial');
  document.getElementById('metric-inputs').classList.toggle('hidden',u!=='metric');
  document.getElementById('imperial-inputs').classList.toggle('hidden',u!=='imperial');
  calculate();
}
function syncSlider(inputId,sliderId,min,max){
  const v=parseFloat(document.getElementById(inputId).value);
  if(!isNaN(v)){
    document.getElementById(sliderId).value=Math.min(Math.max(v,min),max);
    updateSliderLabel(sliderId,sliderId+'-val',inputId.includes('cm')?'cm':'kg');
  }
}
function syncInput(sliderId,inputId){document.getElementById(inputId).value=document.getElementById(sliderId).value}
function updateSliderLabel(sid,lid,u){document.getElementById(lid).textContent=document.getElementById(sid).value+' '+u}
function imperialHeightSlider(){
  const t=parseInt(document.getElementById('sl-in').value);
  const ft=Math.floor(t/12),inn=t%12;
  document.getElementById('h-ft').value=ft;
  document.getElementById('h-in').value=inn;
  document.getElementById('sl-in-val').textContent=ft+"'"+inn+'"';
}

/* ─── MAIN CALCULATE ─── */
function calculate(){
  let bmi=null,hcm=null,wkg=null;
  if(unit==='metric'){
    const h=parseFloat(document.getElementById('h-cm').value);
    const w=parseFloat(document.getElementById('w-kg').value);
    if(h>0&&w>0){bmi=w/Math.pow(h/100,2);hcm=h;wkg=w;}
  } else {
    const ft=parseFloat(document.getElementById('h-ft').value)||0;
    const inn=parseFloat(document.getElementById('h-in').value)||0;
    const lbs=parseFloat(document.getElementById('w-lbs').value);
    const tot=ft*12+inn;
    if(tot>0&&lbs>0){bmi=(lbs/Math.pow(tot,2))*703;hcm=tot*2.54;wkg=lbs*0.453592;}
  }

  const ph=document.getElementById('placeholder');
  const rc=document.getElementById('result-content');
  if(!bmi||isNaN(bmi)||bmi<=5||bmi>100){
    ph.classList.remove('hidden');rc.classList.add('hidden');return;
  }
  ph.classList.add('hidden');rc.classList.remove('hidden');

  const bmiR=(Math.round(bmi*10)/10).toFixed(1);
  document.getElementById('bmi-num').textContent=bmiR;

  let cat,key,desc,color,badgeBg,pilIdx,pct;
  if(bmi<18.5){
    cat='Underweight';key='underweight';color='#5bb4f5';
    desc='Below healthy range. Nourish your body with calorie-dense foods and strength training.';
    badgeBg='rgba(91,180,245,.15)';pilIdx=0;pct=Math.min((bmi/18.5)*22,20);
  } else if(bmi<25){
    cat='Normal Weight';key='normal';color='#c8f564';
    desc='Within the healthy range. Keep up the great work — consistency is everything.';
    badgeBg='rgba(200,245,100,.15)';pilIdx=1;pct=22+((bmi-18.5)/6.5)*30;
  } else if(bmi<30){
    cat='Overweight';key='overweight';color='#f5c842';
    desc='Slightly above healthy range. Small consistent changes in diet and exercise will get you there.';
    badgeBg='rgba(245,200,66,.15)';pilIdx=2;pct=52+((bmi-25)/5)*20;
  } else {
    cat='Obese';key='obese';color='#f56b6b';
    desc='BMI indicates obesity. Start with small steps and seek professional guidance — every positive change counts.';
    badgeBg='rgba(245,107,107,.15)';pilIdx=3;pct=Math.min(72+((bmi-30)/20)*26,96);
  }

  document.getElementById('bmi-num').style.color=color;
  document.getElementById('res-cat').textContent=cat;
  document.getElementById('res-cat').style.color=color;
  document.getElementById('res-desc').textContent=desc;
  const badge=document.getElementById('res-badge');
  badge.textContent=cat.toUpperCase();
  badge.style.background=badgeBg;badge.style.color=color;badge.style.border=`1px solid ${color}40`;
  document.getElementById('result-card').style.borderColor=color+'30';
  document.getElementById('scale-fill').style.width=pct+'%';
  document.getElementById('scale-fill').style.background=color;
  document.getElementById('needle').style.left=pct+'%';
  document.getElementById('needle').style.background=color;
  for(let i=0;i<4;i++) document.getElementById('pill-'+i).classList.toggle('active',i===pilIdx);

  if(key!==lastKey){
    lastKey=key;
    renderAdvice(key,parseFloat(bmiR),hcm,wkg);
  } else if(hcm&&wkg&&key!=='normal'){
    updateRing(key,hcm,wkg);
  }
}

/* ─── RENDER ADVICE ─── */
function renderAdvice(key,bmi,hcm,wkg){
  const d=DATA[key];

  /* re-trigger animation */
  const sec=document.getElementById('advice-section');
  sec.style.animation='none';sec.offsetHeight;
  sec.style.animation='adviceIn .7s cubic-bezier(.22,1,.36,1) both';

  /* gesture banner */
  const gb=document.getElementById('gesture-banner');
  gb.style.background=d.panelBg;
  gb.style.borderColor=d.panelBorder;
  document.getElementById('big-gesture').textContent=d.gesture;
  document.getElementById('gesture-headline').textContent=d.headline;
  document.getElementById('gesture-headline').style.color=d.color;
  document.getElementById('gesture-sub').textContent=d.sub;

  /* target weight ring */
  const tsw=document.getElementById('target-strip-wrap');
  if(key==='normal'){
    tsw.innerHTML=`
      <div class="celebrate-grid" style="margin-bottom:16px">
        <div class="celebrate-card"><div class="celebrate-card-icon">🎯</div><div class="celebrate-card-text" style="color:#c8f564;font-weight:500">Your BMI: ${bmi}</div></div>
        <div class="celebrate-card"><div class="celebrate-card-icon">✅</div><div class="celebrate-card-text">Healthy range: 18.5 – 24.9</div></div>
        <div class="celebrate-card"><div class="celebrate-card-icon">❤️</div><div class="celebrate-card-text">Keep your current habits going strong</div></div>
        <div class="celebrate-card"><div class="celebrate-card-icon">🧬</div><div class="celebrate-card-text">Your weight supports good metabolic health</div></div>
      </div>`;
  } else if(hcm&&wkg){
    renderRing(key,d,hcm,wkg,tsw);
  } else {
    tsw.innerHTML='';
  }

  /* tips */
  document.getElementById('tips-heading').textContent = key==='normal' ? 'Keep thriving with these habits' : 'Actionable tips for you';
  document.getElementById('tips-grid').innerHTML=d.tips.map(t=>`
    <div class="tip-card">
      <span class="tip-icon">${t.icon}</span>
      <div class="tip-title" style="color:${d.color}">${t.title}</div>
      <div class="tip-body">${t.body}</div>
    </div>`).join('');

  /* weekly plan */
  document.getElementById('week-plan-wrap').innerHTML=`
    <div class="week-plan">
      <div class="week-plan-title">Your suggested weekly plan</div>
      ${d.week.map(r=>`
        <div class="week-row">
          <div class="week-day">${r.day}</div>
          <div class="week-activity">${r.activity}</div>
          <div class="week-badge" style="background:${r.bc};color:${r.bt}">${r.badge}</div>
        </div>`).join('')}
    </div>`;
}

function renderRing(key,d,hcm,wkg,container){
  const hM=hcm/100;
  const minW=Math.ceil(18.5*hM*hM*10)/10;
  const maxW=Math.floor(24.9*hM*hM*10)/10;
  let diff,diffText,pct;
  if(key==='underweight'){
    diff=+(minW-wkg).toFixed(1);
    diffText=diff+' kg to gain';
    pct=Math.min((wkg/minW)*100,99);
  } else {
    diff=+(wkg-maxW).toFixed(1);
    diffText=diff+' kg to lose';
    pct=Math.min((maxW/wkg)*100,99);
  }
  const r=30, circ=2*Math.PI*r;
  const offset=circ*(1-pct/100);
  container.innerHTML=`
    <div class="target-strip">
      <div class="target-ring">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle class="ring-bg" cx="36" cy="36" r="${r}"/>
          <circle class="ring-fill" cx="36" cy="36" r="${r}"
            stroke="${d.color}"
            stroke-dasharray="${circ.toFixed(2)}"
            stroke-dashoffset="${offset.toFixed(2)}"/>
        </svg>
        <div class="ring-label" style="color:${d.color}">${Math.round(pct)}%</div>
      </div>
      <div class="target-info">
        <div class="target-title" style="color:${d.color}">Your healthy weight range</div>
        <div class="target-detail">Based on your height of <strong>${Math.round(hcm)} cm</strong>, a healthy weight is <strong>${minW}–${maxW} kg</strong></div>
      </div>
      <div class="target-kg" style="color:${d.color}">${diffText}</div>
    </div>`;
}

function updateRing(key,hcm,wkg){
  const d=DATA[key];
  const tsw=document.getElementById('target-strip-wrap');
  if(tsw.querySelector('.target-strip')) renderRing(key,d,hcm,wkg,tsw);
}

/* init */
document.getElementById('sl-cm-val').textContent='170 cm';
document.getElementById('sl-kg-val').textContent='70 kg';
document.getElementById('sl-lbs-val').textContent='154 lbs';
document.getElementById('sl-in-val').textContent="5'7\"";
