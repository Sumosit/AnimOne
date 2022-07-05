
setTimeout(() => {
  if (window.innerWidth < 1440) {

  }
}, 500)

setTimeout(() => {
  const animItems = document.querySelectorAll(".anim");
  const td = document.querySelectorAll(".td")
  const tr = document.querySelectorAll(".tr")
  const table = document.getElementById("table")
  const animField = document.getElementById('anim-field')
  const rInfo = document.getElementById('r-info')
  let rInfoText1 = document.getElementById('r-info-text1')
  let rInfoText2 = document.getElementById('r-info-text2')
  let rInfoText3 = document.getElementById('r-info-text3')
  let rInfoText4 = document.getElementById('r-info-text4')
  let withYou = document.getElementById('with-you')
  let changeTheme = document.getElementById('changeTheme')
  let animCompBg = document.getElementById('animCompBg')

  let scroll = 0

  const cupChTds = document.querySelectorAll('.ch-td');
  const cupTds = document.querySelectorAll('.ct-td');
  const cupTable = document.getElementById('cup-table');

  const leftAnim = document.getElementById('leftAnim');
  const rightAnim = document.getElementById('rightAnim')

  let anim1 = 0;
  let anim2 = 0;
  let anim3 = 0;
  let anim4 = 0;
  let anim5 = 0;


  // console.log(animItems)
  // console.log(animField)

  texts = [
    '<span>Watchlist</span>' +
    '<span>Котировки в реальном времени' +
    '<br>для оперативного реагирования' +
    '<br> на изменения рынков – наблюдайте' +
    '<br> за биржевым стаканом и отслеживайте настроения инвесторов</span>',

    '<span>Актуальные<br>новости</span>' +
    '<span>Следите за событиями на рынке' +
    '<br>с помощью нашей новостной ленты' +
    '<br>KASE и добавляйте наиболее интересные' +
    '<br>новости в раздел "Избранные"' +
    '<br>чтобы иметь к ним оперативный доступ</span>',

    '<span>Заявки, сделки<br>и итоги</span>' +
    '<span>Определяйте динамику рынков' +
    '<br>с помощью данных intraday' +
    '<br>а также анализируйте исторические' +
    '<br>данные за любой период для лучшего' +
    '<br>понимания картины рынка</span>',

    '<span>Индексы<br>и индикаторы</span>' +
    '<span>Оценивайте состояние рынка ценных' +
    '<br>бумаг помощью индексов' +
    '<br>и индикаторов KASE</span>'
  ]

  let firstArray = [
    ['Тикер', 'Посл. Цена', 'Объём', 'Минимум', 'Максимум', 'Время', ''],
    ['CCBN', '380,01', '-', '379,50', '389,99', '13.04.2022 13:59:04', '<img src="assets/images/Vector.svg">'],
    ['HSBK', '116,19', '-', '115,75', '117,54', '13.04.2022 14:30:43', '<img src="assets/images/Vector.svg">'],

    ['KCEL', '1 510,01', '-', '1 510,01', '1 544,00', '13.04.2022 14:30:43', '<img src="assets/images/Vector.svg">'],
    ['KEGC', '1 691,00', '-', '1 689,00', '1 707,00', '13.04.2022 14:13:09', '<img src="assets/images/Vector.svg">'],
    ['KZAP', '15 001,00', '-', '14 950,00', '15 082,00', '13.04.2022 14:30:55', '<img src="assets/images/Vector.svg">'],

    ['KZTK', '30 998,98', '-', '30 699,90', '31 150,00', '13.04.2022 13:40:46', '<img src="assets/images/Vector.svg">'],
    ['KZTO', '941,00', '-', '937,01', '959,00', '13.04.2022 14:34:38', '<img src="assets/images/Vector.svg">'],
    ['ASBN', '4,96', '-', '4,60', '5,00', '13.04.2022 13:42:41', '<img src="assets/images/Vector.svg">'],

    ['KSPI', '31 739,00', '-', '31 385,00', '31 739,25', '13.04.2022 13:43:46', '<img src="assets/images/Vector.svg">'],

    ['AKZM', '8 479,46', '-', '8 479,46', '8 479,46', '13.04.2022 14:28:38', '<img src="assets/images/Vector.svg">'],
    ['RAHT', '18 000,00', '-', '17 990,00', '18 000,00', '13.04.2022 14:34:33', '<img src="assets/images/Vector.svg">'],
    ['NL_YNDX', '16 599,00', '-', '15 801,00', '16 600,00', '13.04.2022 13:35:28', '<img src="assets/images/Vector.svg">'],
  ]

  let secondArray = [
    ['13.04.2022 12:34', 'Предоставлена выписка из системы реестров акционеров АО "ЛОГИКОМ" по состоянию на 01 апреля 2022 года', '<img src="assets/images/bookmark.svg">'],
    ['13.04.2022 12:22', 'АО "Halyk Finance" отказалось от статуса маркет-мейкера на KASE по простым акциям KZ1C00000876 (KCEL) АО "Кселл"', '<img src="assets/images/bookmark.svg">'],
    ['13.04.2022 12:06', 'Результаты торгов иностранными валютами на KASE: CNYKZT_TOD = 70,9282 (+0,2624)', '<img src="assets/images/bookmark.svg">'],
    ['13.04.2022 11:53', 'АО "Национальный управляющий холдинг "Байтерек" сообщило о подтверждении агентством Moody\'s Investors Service рейтинговых оценок', '<img src="assets/images/bookmark.svg">'],
    ['13.04.2022 11:52', 'АО "Банк Развития Казахстана" сообщило о подтверждении агентством Moody\'s Investors Service рейтинговых оценок банка, прогноз "Стабильный"', '<img src="assets/images/bookmark.svg">'],
    ['13.04.2022 11:46', 'ТОО "RG Brands Kazakhstan" выплатило четвертый и пятый транши дивидендов единственному участнику за 2006–2008, 2010, 2011, 2013– 2016, 2018–2020 годы', '<img src="assets/images/bookmark.svg">'],
    ['13.04.2022 11:44', 'Изменен состав Правления АО "Компания по страхованию жизни "Standard Life"', '<img src="assets/images/bookmark.svg">']
  ]

  let thirdArray = [
    ['Код инструмента', 'Дата и время', 'ISIN', 'Тип сделки ', 'Цена', 'Объем', 'Объем, KZT', 'Объем, USD', 'Валюта', 'Сектор ры'],
    ['CCBN', '13.04.2022 11:29:32', 'KZ0007786572', 'Рыночная', '379,50', '15', '5 692,5000', '12,6573', 'KZT', 'Вторичн'],
    ['CCBN', '13.04.2022 11:29:32', 'KZ0007786572', 'Рыночная', '379,50', '1', '379,5000', '0,8438', 'KZT', 'Вторичн'],
    ['CCBN', '13.04.2022 11:29:32', 'KZ0007786572', 'Рыночная', '379,50', '4', '1 518,0000', '3,3753', 'KZT', 'Вторичн'],
    ['CCBN', '13.04.2022 11:29:32', 'KZ0007786572', 'Рыночная', '379,50', '1', '379,5000', '0,8438', 'KZT', 'Вторичн'],
    ['KMGD', '13.04.2022 11:29:35', 'KZ1C00001254', 'Рыночная', '200,00', '2', '400,0000', '0,8894', 'KZT', 'Вторичн'],
    ['KMGD', '13.04.2022 11:29:35', 'KZ1C00001254', 'Рыночная', '200,00', '2', '400,0000', '0,8894', 'KZT', 'Вторичн'],
    ['KMGD', '13.04.2022 11:29:35', 'KZ1C00001254', 'Рыночная', '200,00', '1', '200,0000', '0,4447', 'KZT', 'Вторичн'],
    ['KMGD', '13.04.2022 11:29:35', 'KZ1C00001254', 'Рыночная', '200,00', '100', '20 000,0000', '44,4701', 'KZT', 'Вторичн'],
    ['KMGD', '13.04.2022 11:29:35', 'KZ1C00001254', 'Рыночная', '200,00', '10', '2 000,0000', '4,4470', 'KZT', 'Вторичн'],
    ['KMGD', '13.04.2022 11:29:35', 'KZ1C00001254', 'Рыночная', '200,00', '5', '1 000,0000', '2,2235', 'KZT', 'Вторичн'],
    ['KZAP', '13.04.2022 11:29:36', 'KZ1C00001619', 'Рыночная', '14 950,00', '25', '5 000,0000', '11,1175', 'KZT', 'Вторичн'],
  ]

  let fourth = [
    ['']
  ]

  let tabs = [
    ['<div class="tab">\n' +
    '          Все новости\n' +
    '        </div>\n' +
    '        <div class="tab">\n' +
    '          Новости рынков\n' +
    '        </div>\n' +
    '        <div class="tab">\n' +
    '          Новости компаний\n' +
    '        </div>\n' +
    '        <div class="tab">\n' +
    '          Новости Биржи\n' +
    '        </div>\n' +
    '        <div class="empty">\n' +
    '        </div>\n' +
    '        <div class="tab tab-favorite">\n' +
    '          <img src="assets/images/bookmark-filled.svg" alt="">\n' +
    '          Избранное\n' +
    '        </div>'
    ],
    [
      '        <div class="tab">\n' +
      '          Акции, паи, ETF\n' +
      '        </div>\n' +
      '        <div class="tab">\n' +
      '          Облигации\n' +
      '        </div>\n' +
      '        <div class="tab">\n' +
      '          ГЦБ\n' +
      '        </div>\n' +
      '        <div class="tab">\n' +
      '          Операции репо\n' +
      '        </div>\n' +
      '        <div class="tab">\n' +
      '          Иностранные валюты\n' +
      '        </div>\n' +
      '        <div class="tab">\n' +
      '          Деривативы\n' +
      '        </div>\n' + '']
  ]

  let cupHeaderValues = [
    'Биржевые котировки', '', 'HSBK', 'цена последней сделки',
    '114,74', ''
  ]

  let cupValues = [
    'Покупка', 'Цена', 'Продажа',
    '', '116,72', '19',
    '', '116,19', '60345',
    '', '116,00', '77000',
    '', '115,73', '24436',
    '', '115,00', '4998',
    '', '115,73', '24436',
    '', '115,00', '4998',
    '775', '116,72', '',
    '77010', '116,19', '',
    '1000', '116,00', '',
    '2310', '115,73', '',
    '9', '115,00', '',
    '2310', '115,73', '',
    '9', '115,00', ''
  ]

  let secCupHeaderValues = [
    'Результаты торгов иностранными валютами на KASE:<br>CNYKZT_TOD = 70,9282 (+0,2624)', '13.04.2022 12:06',
    '/KASE, 13.04.22/ – На Казахстанской фондовой бирже (KASE) в 12:00 по времени г. Нур-Султан закрылись торги китайским юанем с расчетами в день проведения торгов и операциями валютного свопа в отношении китайского юаня.',
  ]

  let secCupValues = [
    'Инструмент', 'Средне-<br>взвешенный<br>курс, KZT', 'Тренд,<br>KZT', 'Объем,<br>KZT тыс.ед.', 'Тренд,<br>тыс.ед.', 'Лучший<br>спрос', 'Лучшее<br>предло-<br>жение',
    '', 'CNYKZT_TOD', '70,9282', '+0,2624', '9 400,00', '+4 900,00', '71,1200', '70,6100', '',
    'Инструмент', 'Средневзвешенная<br>цена', 'Объем,<br>валюты тыс.ед.', 'Лучший<br>спрос', 'Лучшее<br>предложение', '',
    '',

    'CNYKZT_0_001', '–', '–', '–', '–',
    'CNYKZT_0_001', '–', '–', '–', '–', '',
    'Тренды в первой таблице указаны относительно соответствующих<br>значений предыдущего торгового дня. Если в предыдущий торговый день<br>сделок по инструменту заключено не было или торги им не проводились,<br>тренд не указывается.'
  ]

  let fourthWatchlistValues = [
    '<span>Акции</span><img src="assets/images/chevron-down.svg">',
    '<span>Индекс KASE</span><span>после каждой сделки</span>',
    '<span>Объем сделок</span><span>раз в день - тыс. USD</span>',
    '<span>Капитализация рынка акций</span><span>раз в день - млн. USD</span>',
    '<span>Облигации</span><img src="assets/images/chevron-down.svg">',
    '<span>Иностранные валюты</span><img src="assets/images/chevron-down.svg">',
    '<span>РЕПО</span><img src="assets/images/chevron-down.svg">',
    '<span>Межбанковские депозиты</депозиты></span><img src="assets/images/chevron-down.svg">',
    '<span>Гос.ценные бумаги</span><img src="assets/images/chevron-down.svg">',
    ''
  ]

  let fourthCupValues = [
    'ИНДЕКС KASE', 'после каждой сделки',
    '<span>История индикатора</span><img src="assets/images/download.svg">',
    '<span>Дата и время</span><span>Значение</span>',
    '<span>13.04.2022 12:44</span><span>3 182,79</span>',
    '<span>13.04.2022 12:44</span><span>3 182,79</span>',
    '<span>13.04.2022 12:43</span><span>3 182,79</span>',
    '<span>13.04.2022 12:41</span><span>3 183,55</span>',
    '<span>13.04.2022 12:41</span><span>3 183,55</span>',
    '<span>13.04.2022 12:41</span><span>3 183,55</span>',
    '<span>13.04.2022 12:41</span><span>3 183,55</span>',
    '<span>13.04.2022 12:41</span><span>3 183,55</span>'
  ]

  // console.log(animItems)

  if (animItems.length > 0) {
    // window.scrollTo({top: 3000, behavior: 'auto'});
    window.scrollTo({top: 0, behavior: 'auto'});
    first();
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      if (window.innerWidth > 1440) {
        for (let i = 0; i < animItems.length; i++) {
          const animItem = animItems[i];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 3;
          const animStart2 = 1.4;
          const animStart3 = 1.1;
          const animStart4 = 1.05;


          rInfoText1.style.top = '32%';
          rInfoText2.style.top = '31%';
          rInfoText3.style.top = '31%';
          rInfoText4.style.top = '32%';


          // let animItemPoint = window.innerHeight - animItemHeight / animStart;
          // let animItemPoint2 = window.innerHeight - animItemHeight / animStart2;
          // let animItemPoint3 = window.innerHeight - animItemHeight / animStart3;
          // let animItemPoint4 = window.innerHeight - animItemHeight / animStart4;

          let animItemPoint = -0;
          let animItemPoint2 = -500;
          let animItemPoint3 = -1000;
          let animItemPoint4 = -1500;
          let animItemPoint5 = -2400;
          // let animItemPoint6 = -1200;

          // console.log(animItemPoint2);
          // console.log(animItemPoint3);
          // console.log(animItemPoint4);

          // if (animItemHeight > window.innerHeight) {
          //   animItemPoint = window.innerHeight - window.innerHeight / animStart;
          // }

          if (scrollY > 1200 && scrollY <= 1600) {
            // if (!animField.classList.contains('first')) {
            // console.log(scrollY)
            animField.classList.add('first');
            animField.classList.remove('second');
            animField.classList.remove('third');
            animField.classList.remove('fourth');
            // }

            document.getElementById('tr-header').classList.add('tr-header')
            document.getElementById('table').classList.add('table-zebra')

            // rInfo.style.top = '500px';

            // rInfoText1.innerHTML = texts[0]

            rInfoText1.classList.add('opacity-1');
            rInfoText2.classList.remove('opacity-1');
            rInfoText3.classList.remove('opacity-1');
            rInfoText4.classList.remove('opacity-1')

            td[0].textContent = firstArray[0][0];
            td[1].textContent = firstArray[0][1];
            td[2].textContent = firstArray[0][2];
            td[3].textContent = firstArray[0][3];
            td[4].textContent = firstArray[0][4];
            td[5].textContent = firstArray[0][5];
            td[6].innerHTML = firstArray[0][6];

            td[10].textContent = firstArray[1][0];
            td[11].textContent = firstArray[1][1];
            td[12].textContent = firstArray[1][2];
            td[13].textContent = firstArray[1][3];
            td[14].textContent = firstArray[1][4];
            td[15].textContent = firstArray[1][5];
            td[16].innerHTML = firstArray[1][6];

            td[20].textContent = firstArray[2][0];
            td[21].textContent = firstArray[2][1];
            td[22].textContent = firstArray[2][2];
            td[23].textContent = firstArray[2][3];
            td[24].textContent = firstArray[2][4];
            td[25].textContent = firstArray[2][5];
            td[26].innerHTML = firstArray[2][6];

            td[30].textContent = firstArray[3][0];
            td[31].textContent = firstArray[3][1];
            td[32].textContent = firstArray[3][2];
            td[33].textContent = firstArray[3][3];
            td[34].textContent = firstArray[3][4];
            td[35].textContent = firstArray[3][5];
            td[36].innerHTML = firstArray[3][6];

            td[40].textContent = firstArray[4][0];
            td[41].textContent = firstArray[4][1];
            td[42].textContent = firstArray[4][2];
            td[43].textContent = firstArray[4][3];
            td[44].textContent = firstArray[4][4];
            td[45].textContent = firstArray[4][5];
            td[46].innerHTML = firstArray[4][6];

            td[50].textContent = firstArray[5][0];
            td[51].textContent = firstArray[5][1];
            td[52].textContent = firstArray[5][2];
            td[53].textContent = firstArray[5][3];
            td[54].textContent = firstArray[5][4];
            td[55].textContent = firstArray[5][5];
            td[56].innerHTML = firstArray[5][6];

            td[60].textContent = firstArray[6][0];
            td[61].textContent = firstArray[6][1];
            td[62].textContent = firstArray[6][2];
            td[63].textContent = firstArray[6][3];
            td[64].textContent = firstArray[6][4];
            td[65].textContent = firstArray[6][5];
            td[66].innerHTML = firstArray[6][6];

            td[70].textContent = firstArray[7][0];
            td[71].textContent = firstArray[7][1];
            td[72].textContent = firstArray[7][2];
            td[73].textContent = firstArray[7][3];
            td[74].textContent = firstArray[7][4];
            td[75].textContent = firstArray[7][5];
            td[76].innerHTML = firstArray[7][6];

            td[80].textContent = firstArray[8][0];
            td[81].textContent = firstArray[8][1];
            td[82].textContent = firstArray[8][2];
            td[83].textContent = firstArray[8][3];
            td[84].textContent = firstArray[8][4];
            td[85].textContent = firstArray[8][5];
            td[86].innerHTML = firstArray[8][6];

            td[90].textContent = firstArray[9][0];
            td[91].textContent = firstArray[9][1];
            td[92].textContent = firstArray[9][2];
            td[93].textContent = firstArray[9][3];
            td[94].textContent = firstArray[9][4];
            td[95].textContent = firstArray[9][5];
            td[96].innerHTML = firstArray[9][6];

            td[100].textContent = firstArray[10][0];
            td[101].textContent = firstArray[10][1];
            td[102].textContent = firstArray[10][2];
            td[103].textContent = firstArray[10][3];
            td[104].textContent = firstArray[10][4];
            td[105].textContent = firstArray[10][5];
            td[106].innerHTML = firstArray[10][6];

            td[110].textContent = firstArray[11][0];
            td[111].textContent = firstArray[11][1];
            td[112].textContent = firstArray[11][2];
            td[113].textContent = firstArray[11][3];
            td[114].textContent = firstArray[11][4];
            td[115].textContent = firstArray[11][5];
            td[116].innerHTML = firstArray[11][6];

            td[120].textContent = firstArray[12][0];
            td[121].textContent = firstArray[12][1];
            td[122].textContent = firstArray[12][2];
            td[123].textContent = firstArray[12][3];
            td[124].textContent = firstArray[12][4];
            td[125].textContent = firstArray[12][5];
            td[126].innerHTML = firstArray[12][6];

            for (let j = 0; j < cupHeaderValues.length; j++) {
              cupChTds[j].textContent = cupHeaderValues[j];
            }
            cupChTds[1].innerHTML = '<img src="assets/images/arrows-fullscreen.svg" alt="">'

            for (let j = 0; j < cupValues.length; j++) {
              cupTds[j].innerHTML = cupValues[j];
            }

          } else {
            // animField.classList.remove('first');
            // rInfoText1.classList.remove('opacity-1');
            // rInfoText2.classList.add('opacity-1');
            // rInfoText3.classList.remove('opacity-1');
            // rInfoText4.classList.remove('opacity-1')
          }

          if ((scrollY > 1600) && scrollY <= 2260) {
            animField.classList.add('second');
            animField.classList.remove('first');
            animField.classList.remove('third');
            animField.classList.remove('fourth');
            cupTable.classList.remove('table-zebra');

            rInfoText1.classList.remove('opacity-1');
            rInfoText2.classList.add('opacity-1');
            rInfoText3.classList.remove('opacity-1');
            rInfoText4.classList.remove('opacity-1');
            document.getElementById('tabs').innerHTML = tabs[0];
            document.getElementById('tr-header').classList.remove('tr-header')
            document.getElementById('table').classList.remove('table-zebra')
            // rInfo.style.top = '500px';

            // rInfoText2.innerHTML = texts[1];

            // console.log(rInfo.textContent)
            td[0].textContent = secondArray[0][0];
            td[1].textContent = secondArray[0][1];
            td[2].innerHTML = secondArray[0][2];

            td[10].textContent = secondArray[1][0];
            td[11].textContent = secondArray[1][1];
            td[12].innerHTML = secondArray[1][2];

            td[20].textContent = secondArray[2][0];
            td[21].textContent = secondArray[2][1];
            td[22].innerHTML = secondArray[2][2];

            td[30].textContent = secondArray[3][0];
            td[31].textContent = secondArray[3][1];
            td[32].innerHTML = secondArray[3][2];

            td[40].textContent = secondArray[4][0];
            td[41].textContent = secondArray[4][1];
            td[42].innerHTML = secondArray[4][2];

            td[50].textContent = secondArray[5][0];
            td[51].textContent = secondArray[5][1];
            td[52].innerHTML = secondArray[5][2];

            td[60].textContent = secondArray[5][0];
            td[61].textContent = secondArray[5][1];
            td[62].innerHTML = secondArray[5][2];

            for (let j = 0; j < cupChTds.length; j++) {
              cupChTds[j].innerHTML = secCupHeaderValues[j];
            }

            for (let j = 0; j < 7; j++) {
              cupTds[j].innerHTML = secCupValues[j];
            }
            cupTds[7].innerHTML = '<img src="assets/images/border-dashed.svg" alt="">'

            for (let j = 8; j < 15; j++) {
              cupTds[j].innerHTML = secCupValues[j];
            }
            cupTds[15].innerHTML = '<img src="assets/images/border-dashed.svg" alt="">'
            for (let j = 16; j < 21; j++) {
              cupTds[j].innerHTML = secCupValues[j];
            }
            cupTds[21].innerHTML = '<img src="assets/images/border-dashed.svg" alt="">'
            cupTds[21].innerHTML = '<img src="assets/images/border-dashed.svg" alt="">'
            for (let j = 22; j < 33; j++) {
              cupTds[j].innerHTML = secCupValues[j];
            }
            cupTds[33].innerHTML = '<img src="assets/images/border-dashed.svg" alt="">'
            cupTds[34].innerHTML = secCupValues[34]
            for (let j = 35; j < cupTds.length; j++) {
              cupTds[j].innerHTML = '';
            }
          } else {

            // rInfoText1.classList.remove('opacity-1');
            // rInfoText2.classList.remove('opacity-1');
            // rInfoText3.classList.add('opacity-1');
            // rInfoText4.classList.remove('opacity-1')
          }

          if (scrollY > 2260 && scrollY <= 2700) {
            animField.classList.add('third');
            animField.classList.remove('first');
            animField.classList.remove('second');
            animField.classList.remove('fourth');
            // animField.classList.remove('second');
            // leftAnim.style.height = '3100px';
            // rightAnim.style.height = '3000px';
            // document.getElementById('index-change').style.opacity = '0';
            // document.getElementById('index-change').style.display = 'none';


            rInfoText1.classList.remove('opacity-1');
            rInfoText2.classList.remove('opacity-1');
            rInfoText3.classList.add('opacity-1');
            rInfoText4.classList.remove('opacity-1');
            // withYou.style.opacity = '1';
            // document.getElementById('with-you').style.opacity = '1'

            document.getElementById('tabs').innerHTML = tabs[1];

            // rInfoText3.innerHTML = texts[2];
            // console.log(rInfo.innerHTML)

            td[0].textContent = thirdArray[0][0];
            td[1].textContent = thirdArray[0][1];
            td[2].innerHTML = thirdArray[0][2];
            td[3].innerHTML = thirdArray[0][3];
            td[4].innerHTML = thirdArray[0][4];
            td[5].innerHTML = thirdArray[0][5];
            td[6].innerHTML = thirdArray[0][6];
            td[7].innerHTML = thirdArray[0][7];
            td[8].innerHTML = thirdArray[0][8];
            td[9].innerHTML = thirdArray[0][9];

            td[10].textContent = thirdArray[2][0];
            td[11].textContent = thirdArray[2][1];
            td[12].innerHTML = thirdArray[2][2];
            td[13].innerHTML = thirdArray[2][3];
            td[14].innerHTML = thirdArray[2][4];
            td[15].innerHTML = thirdArray[2][5];
            td[16].innerHTML = thirdArray[2][6];
            td[17].innerHTML = thirdArray[2][7];
            td[18].innerHTML = thirdArray[2][8];
            td[19].innerHTML = thirdArray[2][9];

            td[20].textContent = thirdArray[3][0];
            td[21].textContent = thirdArray[3][1];
            td[22].innerHTML = thirdArray[3][2];
            td[23].innerHTML = thirdArray[3][3];
            td[24].innerHTML = thirdArray[3][4];
            td[25].innerHTML = thirdArray[3][5];
            td[26].innerHTML = thirdArray[3][6];
            td[27].innerHTML = thirdArray[3][7];
            td[28].innerHTML = thirdArray[3][8];
            td[29].innerHTML = thirdArray[3][9];

            td[30].textContent = thirdArray[4][0];
            td[31].textContent = thirdArray[4][1];
            td[32].innerHTML = thirdArray[4][2];
            td[33].innerHTML = thirdArray[4][3];
            td[34].innerHTML = thirdArray[4][4];
            td[35].innerHTML = thirdArray[4][5];
            td[36].innerHTML = thirdArray[4][6];
            td[37].innerHTML = thirdArray[4][7];
            td[38].innerHTML = thirdArray[4][8];
            td[39].innerHTML = thirdArray[4][9];

            td[40].textContent = thirdArray[5][0];
            td[41].textContent = thirdArray[5][1];
            td[42].innerHTML = thirdArray[5][2];
            td[43].innerHTML = thirdArray[5][3];
            td[44].innerHTML = thirdArray[5][4];
            td[45].innerHTML = thirdArray[5][5];
            td[46].innerHTML = thirdArray[5][6];
            td[47].innerHTML = thirdArray[5][7];
            td[48].innerHTML = thirdArray[5][8];
            td[49].innerHTML = thirdArray[5][9];

            td[50].textContent = thirdArray[6][0];
            td[51].textContent = thirdArray[6][1];
            td[52].innerHTML = thirdArray[6][2];
            td[53].innerHTML = thirdArray[6][3];
            td[54].innerHTML = thirdArray[6][4];
            td[55].innerHTML = thirdArray[6][5];
            td[56].innerHTML = thirdArray[6][6];
            td[57].innerHTML = thirdArray[6][7];
            td[58].innerHTML = thirdArray[6][8];
            td[59].innerHTML = thirdArray[6][9];

            td[60].textContent = thirdArray[7][0];
            td[61].textContent = thirdArray[7][1];
            td[62].innerHTML = thirdArray[7][2];
            td[63].innerHTML = thirdArray[7][3];
            td[64].innerHTML = thirdArray[7][4];
            td[65].innerHTML = thirdArray[7][5];
            td[66].innerHTML = thirdArray[7][6];
            td[67].innerHTML = thirdArray[7][7];
            td[68].innerHTML = thirdArray[7][8];
            td[69].innerHTML = thirdArray[7][9];

            td[70].textContent = thirdArray[8][0];
            td[71].textContent = thirdArray[8][1];
            td[72].innerHTML = thirdArray[8][2];
            td[73].innerHTML = thirdArray[8][3];
            td[74].innerHTML = thirdArray[8][4];
            td[75].innerHTML = thirdArray[8][5];
            td[76].innerHTML = thirdArray[8][6];
            td[77].innerHTML = thirdArray[8][7];
            td[78].innerHTML = thirdArray[8][8];
            td[79].innerHTML = thirdArray[8][9];

            td[80].textContent = thirdArray[9][0];
            td[81].textContent = thirdArray[9][1];
            td[82].innerHTML = thirdArray[9][2];
            td[83].innerHTML = thirdArray[9][3];
            td[84].innerHTML = thirdArray[9][4];
            td[85].innerHTML = thirdArray[9][5];
            td[86].innerHTML = thirdArray[9][6];
            td[87].innerHTML = thirdArray[9][7];
            td[88].innerHTML = thirdArray[9][8];
            td[89].innerHTML = thirdArray[9][9];

            td[90].textContent = thirdArray[10][0];
            td[91].textContent = thirdArray[10][1];
            td[92].innerHTML = thirdArray[10][2];
            td[93].innerHTML = thirdArray[10][3];
            td[94].innerHTML = thirdArray[10][4];
            td[95].innerHTML = thirdArray[10][5];
            td[96].innerHTML = thirdArray[10][6];
            td[97].innerHTML = thirdArray[10][7];
            td[98].innerHTML = thirdArray[10][8];
            td[99].innerHTML = thirdArray[10][9];

            td[100].textContent = thirdArray[11][0];
            td[101].textContent = thirdArray[11][1];
            td[102].innerHTML = thirdArray[11][2];
            td[103].innerHTML = thirdArray[11][3];
            td[104].innerHTML = thirdArray[11][4];
            td[105].innerHTML = thirdArray[11][5];
            td[106].innerHTML = thirdArray[11][6];
            td[107].innerHTML = thirdArray[11][7];
            td[108].innerHTML = thirdArray[11][8];
            td[109].innerHTML = thirdArray[11][9];
          } else {
            animField.classList.remove('third');

            // rInfoText1.classList.remove('opacity-1');
            // rInfoText2.classList.remove('opacity-1');
            // rInfoText3.classList.remove('opacity-1');
            // rInfoText4.classList.add('opacity-1');
          }

          if (scrollY > 2700 && scrollY <= 3400) {
            animField.classList.add('fourth');
            animField.classList.remove('first');
            animField.classList.remove('second');
            animField.classList.remove('third');
            // withYou.classList.remove('opacity-0')
            // document.getElementById('with-you').classList.add('opacity-1');
            // rInfo.style.top = '500px';

            rInfoText1.classList.remove('opacity-1');
            rInfoText2.classList.remove('opacity-1');
            rInfoText3.classList.remove('opacity-1');
            rInfoText4.classList.add('opacity-1');

            // rInfoText4.innerHTML = texts[3]

            // console.log( td)
            td[10].innerHTML = fourthWatchlistValues[0];
            td[20].innerHTML = fourthWatchlistValues[1];
            td[30].innerHTML = fourthWatchlistValues[2];
            td[40].innerHTML = fourthWatchlistValues[3];
            td[50].innerHTML = fourthWatchlistValues[4];
            td[60].innerHTML = fourthWatchlistValues[5];
            td[70].innerHTML = fourthWatchlistValues[6];
            td[80].innerHTML = fourthWatchlistValues[7];
            td[90].innerHTML = fourthWatchlistValues[8];
            td[100].innerHTML = fourthWatchlistValues[9];

            cupChTds[0].innerHTML = fourthCupValues[0];
            cupChTds[1].innerHTML = fourthCupValues[1];
            // for (let j = 2; j < cupChTds.length; j++) {
            //   cupChTds[j].innerHTML = ''
            // }

            for (let j = 0; j < fourthCupValues.length; j++) {
              cupTds[j].innerHTML = fourthCupValues[j + 2];
            }
            // for (let j = fourthCupValues.length - 2; j < cupTds.length; j++) {
            //   cupTds[j].innerHTML = ''
            //   cupTds[j].style.display = 'none'
            // }
            cupTable.classList.add('table-zebra');
            // document.getElementById('index-change').style.opacity = '1';
            // document.getElementById('index-change').style.display = 'initial';

            scroll = 0;
          } else {
            // animField.classList.remove('fourth');
          }

          if ((scrollY > animItemOffset - animItemPoint5) && scrollY < (animItemOffset + animItemHeight)) {
            // document.getElementById('with-you').classList.add('opacity-0');
            // document.getElementById('with-you').classList.remove('opacity-1');
          } else {
            // animField.classList.remove('with-you-go_up')
            // rInfoText4.classList.remove('with-you-go_up')
            // rInfoText1.classList.remove('opacity-1');
            // rInfoText2.classList.remove('opacity-1');
            // rInfoText3.classList.remove('opacity-1');
            // rInfoText4.classList.add('opacity-1');
          }


          if (scrollY > 3400 && scrollY < 3800) {
            // setTimeout(() => {
            if (scroll === 0) {

              // document.body.style.overflow = 'hidden';
              scroll = 1;
              // console.log(changeTheme.offsetTop)
              // window.scrollTo({top: scrollY + 400, behavior: 'smooth'});
              // // // setTimeout(() => {
              // // //   window.scrollTo({top: changeTheme.offsetTop, behavior: 'smooth'});
              // // // }, 500)
              // // setTimeout(() => {
              // //   window.scrollTo({top: changeTheme.offsetTop, behavior: 'smooth'});
              // // }, 800)
              // setTimeout(() => {
              //   document.body.style.overflow = 'auto';
              // }, 500)
            }
            // }, 500);
          } else {
          }
          if (scrollY === 3800) {

          }
          if (scrollY < 4200) {
            withYou.classList.remove('with-you-go_up')
            animField.classList.add('anim-you-go_up')
            rInfo.classList.add('anim-you-go_up')
          }

          if (scrollY >= 4200) {
            withYou.classList.add('with-you-go_up')
            animField.classList.remove('anim-you-go_up')
            rInfo.classList.remove('anim-you-go_up')
          }

          if (scrollY > 3400 && scrollY <= 3900) {
            // document.getElementById('with-you').classList.add('opacity-0');
            // document.getElementById('with-you').classList.remove('opacity-1');
            // leftAnim.style.height = '1800px';
            // rightAnim.style.height = '1700px';
            console.log(123)
            if (scroll === 1) {
              scroll = 0;
              withYou.style.position = 'sticky';
            }

          }

          // if (scroll === 1) {
          //   if (scrollY > 3800) {
          //     document.body.style.overflowY = 'hidden';
          //     setTimeout(() => {
          //       document.body.style.overflowY = 'auto';
          //     }, 2000)
          //   }
          // }

          // if ((scrollY > animItemOffset - animItemPoint6) && scrollY < (animItemOffset + animItemHeight)) {
          //
          // }
          // else {
          //
          // }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    animOnScroll()

  }

  function first() {
    // if (!animField.classList.contains('first')) {
    animField.classList.add('first');
    // }

    document.getElementById('tr-header').classList.add('tr-header')
    document.getElementById('table').classList.add('table-zebra')

    // rInfo.style.top = '500px';

    // rInfoText1.innerHTML = texts[0]

    rInfoText1.classList.add('opacity-1');
    rInfoText2.classList.remove('opacity-1');
    rInfoText3.classList.remove('opacity-1');
    rInfoText4.classList.remove('opacity-1')

    td[0].textContent = firstArray[0][0];
    td[1].textContent = firstArray[0][1];
    td[2].textContent = firstArray[0][2];
    td[3].textContent = firstArray[0][3];
    td[4].textContent = firstArray[0][4];
    td[5].textContent = firstArray[0][5];
    td[6].innerHTML = firstArray[0][6];

    td[10].textContent = firstArray[1][0];
    td[11].textContent = firstArray[1][1];
    td[12].textContent = firstArray[1][2];
    td[13].textContent = firstArray[1][3];
    td[14].textContent = firstArray[1][4];
    td[15].textContent = firstArray[1][5];
    td[16].innerHTML = firstArray[1][6];

    td[20].textContent = firstArray[2][0];
    td[21].textContent = firstArray[2][1];
    td[22].textContent = firstArray[2][2];
    td[23].textContent = firstArray[2][3];
    td[24].textContent = firstArray[2][4];
    td[25].textContent = firstArray[2][5];
    td[26].innerHTML = firstArray[2][6];

    td[30].textContent = firstArray[3][0];
    td[31].textContent = firstArray[3][1];
    td[32].textContent = firstArray[3][2];
    td[33].textContent = firstArray[3][3];
    td[34].textContent = firstArray[3][4];
    td[35].textContent = firstArray[3][5];
    td[36].innerHTML = firstArray[3][6];

    td[40].textContent = firstArray[4][0];
    td[41].textContent = firstArray[4][1];
    td[42].textContent = firstArray[4][2];
    td[43].textContent = firstArray[4][3];
    td[44].textContent = firstArray[4][4];
    td[45].textContent = firstArray[4][5];
    td[46].innerHTML = firstArray[4][6];

    td[50].textContent = firstArray[5][0];
    td[51].textContent = firstArray[5][1];
    td[52].textContent = firstArray[5][2];
    td[53].textContent = firstArray[5][3];
    td[54].textContent = firstArray[5][4];
    td[55].textContent = firstArray[5][5];
    td[56].innerHTML = firstArray[5][6];

    td[60].textContent = firstArray[6][0];
    td[61].textContent = firstArray[6][1];
    td[62].textContent = firstArray[6][2];
    td[63].textContent = firstArray[6][3];
    td[64].textContent = firstArray[6][4];
    td[65].textContent = firstArray[6][5];
    td[66].innerHTML = firstArray[6][6];

    td[70].textContent = firstArray[7][0];
    td[71].textContent = firstArray[7][1];
    td[72].textContent = firstArray[7][2];
    td[73].textContent = firstArray[7][3];
    td[74].textContent = firstArray[7][4];
    td[75].textContent = firstArray[7][5];
    td[76].innerHTML = firstArray[7][6];

    td[80].textContent = firstArray[8][0];
    td[81].textContent = firstArray[8][1];
    td[82].textContent = firstArray[8][2];
    td[83].textContent = firstArray[8][3];
    td[84].textContent = firstArray[8][4];
    td[85].textContent = firstArray[8][5];
    td[86].innerHTML = firstArray[8][6];

    td[90].textContent = firstArray[9][0];
    td[91].textContent = firstArray[9][1];
    td[92].textContent = firstArray[9][2];
    td[93].textContent = firstArray[9][3];
    td[94].textContent = firstArray[9][4];
    td[95].textContent = firstArray[9][5];
    td[96].innerHTML = firstArray[9][6];

    td[100].textContent = firstArray[10][0];
    td[101].textContent = firstArray[10][1];
    td[102].textContent = firstArray[10][2];
    td[103].textContent = firstArray[10][3];
    td[104].textContent = firstArray[10][4];
    td[105].textContent = firstArray[10][5];
    td[106].innerHTML = firstArray[10][6];

    td[110].textContent = firstArray[11][0];
    td[111].textContent = firstArray[11][1];
    td[112].textContent = firstArray[11][2];
    td[113].textContent = firstArray[11][3];
    td[114].textContent = firstArray[11][4];
    td[115].textContent = firstArray[11][5];
    td[116].innerHTML = firstArray[11][6];

    td[120].textContent = firstArray[12][0];
    td[121].textContent = firstArray[12][1];
    td[122].textContent = firstArray[12][2];
    td[123].textContent = firstArray[12][3];
    td[124].textContent = firstArray[12][4];
    td[125].textContent = firstArray[12][5];
    td[126].innerHTML = firstArray[12][6];

    for (let j = 0; j < cupHeaderValues.length; j++) {
      cupChTds[j].textContent = cupHeaderValues[j];
    }
    cupChTds[1].innerHTML = '<img src="assets/images/arrows-fullscreen.svg" alt="">'

    for (let j = 0; j < cupValues.length; j++) {
      cupTds[j].innerHTML = cupValues[j];
    }
  }
}, 500)


