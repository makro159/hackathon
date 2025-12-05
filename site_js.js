// Данные университетов с реальными изображениями
const universities = {
    'knu': {
        id: 'knu',
        name: 'КазНУ им. аль-Фараби',
        fullName: 'Казахский национальный университет имени аль-Фараби',
        applicants: 8500,
        grants: 1250,
        cost: 1800000,
        faculties: 16,
        studentsPerStream: 350,
        dormitoryArea: 45000,
        qsRanking: 44,
        image: 'https://vecher.kz/uploads/thumbnail/20241114143506535_big.webp',
        description: 'КазНУ имени аль-Фараби - ведущий университет Казахстана, основанный в 1934 году. Является флагманом высшего образования в стране, активно участвует в международных рейтингах и научных проектах.',
        year: 1934,
        location: 'Алматы, проспект аль-Фараби, 71',
        type: 'Национальный исследовательский университет',
        rating: 9.2,
        specialties: [
            'Международные отношения',
            'Компьютерные науки', 
            'Юриспруденция',
            'Экономика',
            'Журналистика',
            'Биотехнологии'
        ],
        reviews: [
            {author: 'Айгерім, выпускница 2022', rating: 5, text: 'Отличный университет с сильным преподавательским составом. Получила грант на обучение, что позволило сосредоточиться на учебе.'},
            {author: 'Данияр, студент 3 курса', rating: 4.5, text: 'Хорошая материально-техническая база, современные лаборатории. Однако общежития требуют ремонта.'}
        ],
        teachers: [
            {name: 'Туякбай Жантлеуов', position: 'Ректор, доктор физико-математических наук', info: 'Ректор КазНУ с 2020 года. Автор более 100 научных работ.'},
            {name: 'Гульмира Курмангалиева', position: 'Проректор по учебной работе, PhD', info: 'Специалист в области международного образования, руководитель программ двойного диплома.'}
        ],
        careers: [
            {specialty: 'Международные отношения', salary: '350-600 тыс. ₸', professions: 'Дипломат, международный аналитик'},
            {specialty: 'Компьютерные науки', salary: '400-800 тыс. ₸', professions: 'Data Scientist, Software Engineer'}
        ],
        companies: ['КазМунайГаз', 'Samruk-Kazyna', 'EPAM Systems', 'Microsoft Kazakhstan']
    },
    'satbayev': {
        id: 'satbayev',
        name: 'Satbayev University',
        fullName: 'Satbayev University',
        applicants: 4200,
        grants: 850,
        cost: 2100000,
        faculties: 9,
        studentsPerStream: 220,
        dormitoryArea: 28500,
        qsRanking: 255,
        image: 'https://m.ticketon.kz/files/images/satbayev-university.jpg',
        description: 'Satbayev University - ведущий технический университет Казахстана, специализирующийся на инженерии, геологии и IT. Основан в 1934 году как Казахский горно-металлургический институт.',
        year: 1934,
        location: 'Алматы, ул. Сатпаева, 22',
        type: 'Национальный исследовательский технический университет',
        rating: 8.5,
        specialties: [
            'Нефтегазовое дело',
            'Горное дело',
            'Информационные технологии',
            'Машиностроение'
        ],
        reviews: [
            {author: 'Аслан, выпускник 2021', rating: 5, text: 'Отличный технический вуз с сильными традициями. Получил предложение о работе в "КазМунайГаз" еще на последнем курсе.'},
            {author: 'Айнур, студентка 4 курса', rating: 4, text: 'Хорошее техническое образование, но недостаточно гуманитарных дисциплин.'}
        ],
        teachers: [
            {name: 'Меирбек Ескендиров', position: 'Ректор, доктор технических наук', info: 'Ректор Satbayev University с 2019 года. Специалист в области горного дела.'},
            {name: 'Айгуль Нургалиева', position: 'Проректор по науке, PhD', info: 'Эксперт в области нефтегазовой геологии.'}
        ],
        careers: [
            {specialty: 'Нефтегазовое дело', salary: '450-900 тыс. ₸', professions: 'Инженер-нефтяник, геолог'},
            {specialty: 'Горное дело', salary: '400-850 тыс. ₸', professions: 'Горный инженер, маркшейдер'}
        ],
        companies: ['Kazatomprom', 'ERG', 'Shell Kazakhstan', 'Казахтелеком']
    },
    'abai': {
        id: 'abai',
        name: 'КазНПУ им. Абая',
        fullName: 'Казахский национальный педагогический университет имени Абая',
        applicants: 5800,
        grants: 950,
        cost: 1500000,
        faculties: 12,
        studentsPerStream: 280,
        dormitoryArea: 32000,
        qsRanking: 131,
        image: 'https://abaiuniversity.edu.kz/docs/obyavl/24.03.2023.11.jpg',
        description: 'КазНПУ им. Абая - ведущий педагогический университет Казахстана, основанный в 1928 году. Специализируется на подготовке учителей и педагогов для всех уровней образования.',
        year: 1928,
        location: 'Алматы, проспект Достык, 13',
        type: 'Национальный педагогический университет',
        rating: 8.1,
        specialties: ['Педагогика и психология', 'Филология', 'Естественные науки', 'История'],
        reviews: [
            {author: 'Айгуль, учительница', rating: 4.5, text: 'Отличная подготовка педагогов. Много практики в школах.'}
        ],
        companies: ['Министерство образования', 'Назарбаев Интеллектуальные школы']
    },
    'agrar': {
        id: 'agrar',
        name: 'КазНАИУ',
        fullName: 'Казахский национальный аграрный исследовательский университет',
        applicants: 3500,
        grants: 750,
        cost: 1400000,
        faculties: 8,
        studentsPerStream: 200,
        dormitoryArea: 25000,
        qsRanking: 149,
        image: 'https://nasec.kz/sites/default/files/styles/hero_slider/public/2020-10/%D0%9A%D0%B0%D0%B7%D0%9D%D0%90%D0%A311_2.jpg?itok=1N8RJajs',
        description: 'КазНАИУ - ведущий аграрный университет Казахстана, основанный в 1929 году. Специализируется на подготовке специалистов для сельского хозяйства.',
        year: 1929,
        location: 'Алматы, пр. Абая, 8',
        type: 'Национальный аграрный университет',
        rating: 7.9,
        specialties: ['Агрономия', 'Ветеринария', 'Агроинженерия'],
        companies: ['КазАгро', 'Foodmaster', 'Агрофирмы региона']
    },
    'kbtu': {
        id: 'kbtu',
        name: 'КБТУ',
        fullName: 'Казахстанско-Британский технический университет',
        applicants: 2800,
        grants: 650,
        cost: 2800000,
        faculties: 7,
        studentsPerStream: 180,
        dormitoryArea: 22000,
        qsRanking: 230,
        image: 'https://kbtu.edu.kz/images/kbtu_front_build.jpg',
        description: 'КБТУ - престижный технический университет с британскими образовательными стандартами. Основан в 2001 году.',
        year: 2001,
        location: 'Алматы, ул. Толе би, 59',
        type: 'Технический университет',
        rating: 8.7,
        specialties: ['Нефтегазовая инженерия', 'Информационные технологии', 'Бизнес'],
        companies: ['Шеврон', 'Тенгизшевройл', 'КазМунайГаз']
    },
    'kimep': {
        id: 'kimep',
        name: 'Университет КИМЭП',
        fullName: 'Университет КИМЭП',
        applicants: 1800,
        grants: 500,
        cost: 3200000,
        faculties: 5,
        studentsPerStream: 150,
        dormitoryArea: 18000,
        qsRanking: 269,
        image: 'https://weproject.media/upload/medialibrary/a0b/a0b002d8345e5dc6d1745a35764dd30a.jpg',
        description: 'КИМЭП - первый частный университет в Казахстане, основанный в 1992 году. Специализируется на бизнес-образовании и экономике.',
        year: 1992,
        location: 'Алматы, ул. Абая, 4',
        type: 'Частный университет',
        rating: 8.9,
        specialties: ['Бизнес-администрирование', 'Экономика', 'Право'],
        companies: ['Большая четверка (Big4)', 'Банки', 'Корпорации']
    },
    'abulai': {
        id: 'abulai',
        name: 'КазУМОиМЯ им. Абылай хана',
        fullName: 'Казахский университет международных отношений и мировых языков имени Абылай хана',
        applicants: 4500,
        grants: 800,
        cost: 1600000,
        faculties: 10,
        studentsPerStream: 240,
        dormitoryArea: 30000,
        qsRanking: 305,
        image: 'https://studlife.kz/uploads/images/00/02/48/2015/02/16/0u1988ab1f-55fd5c28-55161c82.jpg',
        description: 'КазУМОиМЯ - ведущий университет в области международных отношений и языкового образования в Казахстане.',
        year: 1941,
        location: 'Алматы, ул. Муратбаева, 200',
        type: 'Университет международных отношений',
        rating: 7.8,
        specialties: ['Международные отношения', 'Лингвистика', 'Переводческое дело'],
        companies: ['МИД РК', 'Международные организации', 'Туристические компании']
    },
    'narxoz': {
        id: 'narxoz',
        name: 'Narxoz University',
        fullName: 'Narxoz University',
        applicants: 3200,
        grants: 700,
        cost: 2400000,
        faculties: 6,
        studentsPerStream: 190,
        dormitoryArea: 21000,
        qsRanking: 345,
        image: 'https://backend.narxozedu.kz/uploads/February2025/003cdf57-b459-4cfc-a92c-9065541fbf07.webp',
        description: 'Narxoz University - ведущий экономический университет Казахстана, специализирующийся на бизнесе и финансах.',
        year: 1963,
        location: 'Алматы, ул. Жандосова, 55',
        type: 'Экономический университет',
        rating: 8.3,
        specialties: ['Экономика', 'Финансы', 'Менеджмент'],
        companies: ['Банки', 'Финансовые компании', 'Консалтинговые фирмы']
    },
    'medical': {
        id: 'medical',
        name: 'КазНМУ им. Асфендиярова',
        fullName: 'Казахский национальный медицинский университет имени С.Д. Асфендиярова',
        applicants: 3000,
        grants: 600,
        cost: 2500000,
        faculties: 7,
        studentsPerStream: 170,
        dormitoryArea: 23000,
        qsRanking: 345,
        image: 'https://www.gov.kz/uploads/2023/8/17/3390a259aa4f1c0e01bf2aefcf69c1ba_original.684761.jpg',
        description: 'КазНМУ - ведущий медицинский университет Казахстана, готовящий врачей и медицинских специалистов.',
        year: 1931,
        location: 'Алматы, ул. Толе би, 94',
        type: 'Медицинский университет',
        rating: 8.6,
        specialties: ['Лечебное дело', 'Стоматология', 'Фармация'],
        companies: ['Медицинские центры', 'Больницы', 'Фармацевтические компании']
    },
    'atu': {
        id: 'atu',
        name: 'Алматинский технологический университет',
        fullName: 'Алматинский технологический университет',
        applicants: 2500,
        grants: 550,
        cost: 1700000,
        faculties: 6,
        studentsPerStream: 160,
        dormitoryArea: 19000,
        qsRanking: 354,
        image: 'https://atu.edu.kz/templates/release/images/bg/bg-index-top.webp',
        description: 'АТУ - университет, специализирующийся на технологических и инженерных специальностях.',
        year: 1957,
        location: 'Алматы, ул. Толе би, 100',
        type: 'Технологический университет',
        rating: 7.5,
        specialties: ['Технология продуктов питания', 'Легкая промышленность', 'Дизайн'],
        companies: ['Пищевые предприятия', 'Легкая промышленность', 'Дизайн-студии']
    },
    'iitu': {
        id: 'iitu',
        name: 'МУИТ',
        fullName: 'Международный университет информационных технологий',
        applicants: 2000,
        grants: 450,
        cost: 2200000,
        faculties: 4,
        studentsPerStream: 140,
        dormitoryArea: 15000,
        qsRanking: 775,
        image: 'https://vecher.kz/uploads/images/2022/08/image_750x_62f348dc73cca.jpg',
        description: 'МУИТ - специализированный университет в области информационных технологий и компьютерных наук.',
        year: 2009,
        location: 'Алматы, ул. Манаса, 34/1',
        type: 'Университет информационных технологий',
        rating: 8.4,
        specialties: ['Компьютерные науки', 'Кибербезопасность', 'Data Science'],
        companies: ['IT-компании', 'Телекоммуникации', 'Стартапы']
    },
    'turan': {
        id: 'turan',
        name: 'Университет «Туран»',
        fullName: 'Университет «Туран»',
        applicants: 2300,
        grants: 500,
        cost: 1900000,
        faculties: 5,
        studentsPerStream: 155,
        dormitoryArea: 17000,
        qsRanking: 775,
        image: 'https://images.gostudy.cz/images/2024/07/turan-university2.jpg',
        description: 'Университет «Туран» - многопрофильный университет с акцентом на гуманитарные и социальные науки.',
        year: 1992,
        location: 'Алматы, ул. Сатпаева, 16',
        type: 'Многопрофильный университет',
        rating: 7.6,
        specialties: ['Психология', 'Социология', 'Журналистика'],
        companies: ['СМИ', 'Социальные службы', 'HR-агентства']
    },
    'women': {
        id: 'women',
        name: 'КазНЖПУ',
        fullName: 'Казахский национальный женский педагогический университет',
        applicants: 1800,
        grants: 400,
        cost: 1300000,
        faculties: 5,
        studentsPerStream: 130,
        dormitoryArea: 14000,
        qsRanking: 825,
        image: 'https://avatars.mds.yandex.net/get-altay/1777247/2a0000016b88a13990a0d1b6818def12b2db/L_height',
        description: 'КазНЖПУ - единственный женский педагогический университет в Казахстане, готовящий педагогов-женщин.',
        year: 1944,
        location: 'Алматы, ул. Гоголя, 114',
        type: 'Женский педагогический университет',
        rating: 7.2,
        specialties: ['Педагогика', 'Психология', 'Искусство'],
        companies: ['Школы', 'Детские центры', 'Образовательные проекты']
    }
};

// Массив для хранения выбранных университетов
let selectedUniversities = [];
let currentSearchQuery = '';
let currentDetailSearchQuery = '';

// Функция для создания карточки университета
function createUniversityCard(university) {
    const card = document.createElement('div');
    card.className = 'university-card';
    card.id = `${university.id}-card`;
    
    // Форматируем стоимость
    const costFormatted = (university.cost / 1000000).toFixed(1) + ' млн ₸';
    
    // Форматируем рейтинг QS
    let qsRankingFormatted = university.qsRanking.toString();
    if (university.id === 'iitu' || university.id === 'turan') {
        qsRankingFormatted = '751-800';
    } else if (university.id === 'women') {
        qsRankingFormatted = '801-850';
    }
    
    card.innerHTML = `
        <div class="university-image" style="background-image: url('${university.image}')"></div>
        <h3 class="university-name">${university.name}</h3>
        <div class="qs-ranking">QS Asia Ranking: ${qsRankingFormatted}</div>
        
        <div class="university-stats">
            <div class="stat-item">
                <span class="stat-label">Абитуриенты в год:</span>
                <span class="stat-value">${university.applicants.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Гранты:</span>
                <span class="stat-value">${university.grants.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Стоимость обучения:</span>
                <span class="stat-value">${costFormatted}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Факультеты:</span>
                <span class="stat-value">${university.faculties}</span>
            </div>
        </div>
        
        <button class="add-to-compare" onclick="addToComparison('${university.id}')">Добавить к сравнению</button>
    `;
    
    return card;
}

// Функция для отображения всех карточек университетов
function renderUniversityCards() {
    const container = document.getElementById('universities-container');
    container.innerHTML = '';
    
    // Фильтруем университеты по поисковому запросу
    const filteredUniversities = Object.values(universities).filter(university => {
        if (!currentSearchQuery) return true;
        
        const searchLower = currentSearchQuery.toLowerCase();
        return university.name.toLowerCase().includes(searchLower) ||
               university.fullName.toLowerCase().includes(searchLower) ||
               university.description.toLowerCase().includes(searchLower);
    });
    
    // Создаем карточки для отфильтрованных университетов
    filteredUniversities.forEach(university => {
        const card = createUniversityCard(university);
        container.appendChild(card);
    });
    
    // Обновляем состояние кнопок для выбранных университетов
    selectedUniversities.forEach(universityId => {
        const card = document.getElementById(`${universityId}-card`);
        if (card) {
            const button = card.querySelector('.add-to-compare');
            button.textContent = 'Добавлено';
            button.classList.add('added');
            card.classList.add('selected');
        }
    });
}

// Функция добавления университета к сравнению
function addToComparison(universityId) {
    const university = universities[universityId];
    const card = document.getElementById(`${universityId}-card`);
    const button = card.querySelector('.add-to-compare');
    
    // Проверяем, не добавлен ли уже университет
    if (selectedUniversities.includes(universityId)) {
        return;
    }
    
    // Проверяем, не превышен ли лимит (максимум 2 университета)
    if (selectedUniversities.length >= 2) {
        alert('Можно сравнить не более 2 университетов одновременно. Удалите один из добавленных, чтобы добавить новый.');
        return;
    }
    
    // Добавляем университет в список выбранных
    selectedUniversities.push(universityId);
    
    // Обновляем кнопку
    button.textContent = 'Добавлено';
    button.classList.add('added');
    card.classList.add('selected');
    
    // Обновляем панель сравнения
    updateComparisonTable();
}

// Функция удаления университета из сравнения
function removeFromComparison(universityId) {
    // Удаляем университет из списка выбранных
    selectedUniversities = selectedUniversities.filter(id => id !== universityId);
    
    // Обновляем кнопку и карточку
    const card = document.getElementById(`${universityId}-card`);
    if (card) {
        const button = card.querySelector('.add-to-compare');
        button.textContent = 'Добавить к сравнению';
        button.classList.remove('added');
        card.classList.remove('selected');
    }
    
    // Обновляем панель сравнения
    updateComparisonTable();
}

// Функция сравнения двух значений для определения лучшего
function getBetterValue(value1, value2, metric) {
    // Определяем, является ли метрика "чем больше, тем лучше" или "чем меньше, тем лучше"
    const moreIsBetter = ['applicants', 'grants', 'faculties', 'studentsPerStream', 'dormitoryArea'].includes(metric);
    const lessIsBetter = ['cost', 'qsRanking'].includes(metric);
    
    if (moreIsBetter) {
        return value1 > value2 ? 1 : (value1 < value2 ? 2 : 0);
    } else if (lessIsBetter) {
        return value1 < value2 ? 1 : (value1 > value2 ? 2 : 0);
    }
    return 0;
}

// Функция обновления таблицы сравнения
function updateComparisonTable() {
    const comparisonBody = document.getElementById('comparison-body');
    const emptyComparison = document.getElementById('empty-comparison');
    const comparisonTable = document.getElementById('comparison-table');
    const uni1Header = document.getElementById('uni1-header');
    const uni2Header = document.getElementById('uni2-header');
    
    // Очищаем таблицу
    comparisonBody.innerHTML = '';
    
    // Если нет выбранных университетов, показываем сообщение
    if (selectedUniversities.length === 0) {
        comparisonTable.style.display = 'none';
        emptyComparison.style.display = 'block';
        return;
    }
    
    // Скрываем сообщение и показываем таблицу
    emptyComparison.style.display = 'none';
    comparisonTable.style.display = 'table';
    
    // Обновляем заголовки таблицы
    if (selectedUniversities.length >= 1) {
        const uni1 = universities[selectedUniversities[0]];
        uni1Header.innerHTML = `${uni1.name} <button class="remove-btn" onclick="removeFromComparison('${selectedUniversities[0]}')">Удалить</button>`;
    } else {
        uni1Header.textContent = 'Университет 1';
    }
    
    if (selectedUniversities.length >= 2) {
        const uni2 = universities[selectedUniversities[1]];
        uni2Header.innerHTML = `${uni2.name} <button class="remove-btn" onclick="removeFromComparison('${selectedUniversities[1]}')">Удалить</button>`;
    } else {
        uni2Header.textContent = 'Университет 2';
    }
    
    // Массив строк для сравнения
    const comparisonRows = [
        { label: 'Среднее число поступающих абитуриентов', key: 'applicants', suffix: '' },
        { label: 'Число разыгрываемых грантов', key: 'grants', suffix: '' },
        { label: 'Полная стоимость обучения (в год)', key: 'cost', suffix: ' ₸' },
        { label: 'Количество факультетов', key: 'faculties', suffix: '' },
        { label: 'Количество студентов в потоке', key: 'studentsPerStream', suffix: '' },
        { label: 'Площадь общежития', key: 'dormitoryArea', suffix: ' м²' },
        { label: 'Позиция в рейтинге QS Asia', key: 'qsRanking', suffix: '' }
    ];
    
    // Заполняем таблицу данными
    comparisonRows.forEach(row => {
        const tr = document.createElement('tr');
        
        // Столбец с названием параметра
        const tdLabel = document.createElement('td');
        tdLabel.textContent = row.label;
        tdLabel.style.fontWeight = '600';
        tr.appendChild(tdLabel);
        
        // Данные для первого университета
        const tdUni1 = document.createElement('td');
        let uni1Value = '';
        let uni2Value = '';
        
        if (selectedUniversities.length >= 1) {
            const uni1Data = universities[selectedUniversities[0]];
            uni1Value = uni1Data[row.key];
            
            // Форматируем числовые значения
            if (row.key === 'cost') {
                tdUni1.textContent = (uni1Value / 1000000).toFixed(1) + ' млн' + row.suffix;
            } else if (row.key === 'qsRanking') {
                // Для рейтинга проверяем диапазонные значения
                if (uni1Value === 775) {
                    tdUni1.textContent = '751-800';
                } else if (uni1Value === 825) {
                    tdUni1.textContent = '801-850';
                } else {
                    tdUni1.textContent = uni1Value + row.suffix;
                }
            } else {
                tdUni1.textContent = uni1Value.toLocaleString() + row.suffix;
            }
        } else {
            tdUni1.textContent = '-';
        }
        tr.appendChild(tdUni1);
        
        // Данные для второго университета
        const tdUni2 = document.createElement('td');
        if (selectedUniversities.length >= 2) {
            const uni2Data = universities[selectedUniversities[1]];
            uni2Value = uni2Data[row.key];
            
            // Форматируем числовые значения
            if (row.key === 'cost') {
                tdUni2.textContent = (uni2Value / 1000000).toFixed(1) + ' млн' + row.suffix;
            } else if (row.key === 'qsRanking') {
                // Для рейтинга проверяем диапазонные значения
                if (uni2Value === 775) {
                    tdUni2.textContent = '751-800';
                } else if (uni2Value === 825) {
                    tdUni2.textContent = '801-850';
                } else {
                    tdUni2.textContent = uni2Value + row.suffix;
                }
            } else {
                tdUni2.textContent = uni2Value.toLocaleString() + row.suffix;
            }
        } else {
            tdUni2.textContent = '-';
        }
        tr.appendChild(tdUni2);
        
        // Подсветка лучших/худших значений
        if (selectedUniversities.length >= 2 && uni1Value !== '' && uni2Value !== '') {
            const better = getBetterValue(uni1Value, uni2Value, row.key);
            
            if (better === 1) {
                tdUni1.classList.add('better');
                tdUni2.classList.add('worse');
            } else if (better === 2) {
                tdUni1.classList.add('worse');
                tdUni2.classList.add('better');
            }
        }
        
        comparisonBody.appendChild(tr);
    });
}

// Функция для создания кнопок выбора университетов на странице 2
function createUniversitySelector() {
    const selector = document.querySelector('.university-selector');
    selector.innerHTML = '';
    
    Object.values(universities).forEach(university => {
        const button = document.createElement('button');
        button.className = 'university-select-btn';
        button.setAttribute('data-university', university.id);
        button.textContent = university.name;
        
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            document.querySelectorAll('.university-select-btn').forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Показываем детальную информацию
            showUniversityDetail(university.id);
        });
        
        selector.appendChild(button);
    });
    
    // Активируем первую кнопку
    const firstButton = selector.querySelector('.university-select-btn');
    if (firstButton) {
        firstButton.classList.add('active');
        showUniversityDetail(firstButton.getAttribute('data-university'));
    }
}

// Функция для подсветки текста поиска
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Функция для создания детальной информации об университете
function createUniversityDetail(universityId) {
    const university = universities[universityId];
    if (!university) return '';
    
    // Форматируем рейтинг QS
    let qsRankingFormatted = university.qsRanking.toString();
    if (universityId === 'iitu' || universityId === 'turan') {
        qsRankingFormatted = '751-800';
    } else if (universityId === 'women') {
        qsRankingFormatted = '801-850';
    }
    
    // Создаем звезды для рейтинга
    const stars = Array(5).fill(0).map((_, i) => {
        if (i < Math.floor(university.rating / 2)) {
            return '<i class="fas fa-star"></i>';
        } else if (i < Math.ceil(university.rating / 2)) {
            return '<i class="fas fa-star-half-alt"></i>';
        } else {
            return '<i class="far fa-star"></i>';
        }
    }).join('');
    
    let detailHTML = `
        <div class="university-detail-card">
            <h2 class="section-title"><i class="fas fa-university"></i> ${university.fullName}</h2>
            
            <div class="detail-section">
                <h3><i class="fas fa-info-circle"></i> Общая информация</h3>
                <p>${university.description}</p>
                <p><strong>Год основания:</strong> ${university.year}</p>
                <p><strong>Местоположение:</strong> ${university.location}</p>
                <p><strong>Тип:</strong> ${university.type}</p>
                <p><strong>Рейтинг QS Asia:</strong> ${qsRankingFormatted}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-star"></i> Авторская оценка</h3>
                <div class="author-rating">
                    <div class="rating-score">${university.rating}/10</div>
                    <div class="rating-stars">
                        ${stars}
                    </div>
                </div>
                
                <h4>Сравнение цена/качество</h4>
                <div class="price-quality">
                    <span>Цена/Качество:</span>
                    <div class="price-quality-bar">
                        <div class="price-quality-fill" style="width: ${university.rating * 10}%;"></div>
                    </div>
                    <span>${university.rating}/10</span>
                </div>
            </div>`;
    
    // Добавляем отзывы, если они есть
    if (university.reviews && university.reviews.length > 0) {
        detailHTML += `
            <div class="detail-section">
                <h3><i class="fas fa-comments"></i> Отзывы учащихся</h3>`;
        
        university.reviews.forEach(review => {
            const reviewStars = Array(5).fill(0).map((_, i) => {
                if (i < review.rating) {
                    return '<i class="fas fa-star"></i>';
                } else {
                    return '<i class="far fa-star"></i>';
                }
            }).join('');
            
            detailHTML += `
                <div class="review">
                    <div class="review-author">${review.author}</div>
                    <div class="review-rating">${reviewStars}</div>
                    <p>${review.text}</p>
                </div>`;
        });
        
        detailHTML += `</div>`;
    }
    
    // Добавляем направления подготовки
    if (university.specialties && university.specialties.length > 0) {
        detailHTML += `
            <div class="detail-section">
                <h3><i class="fas fa-graduation-cap"></i> Основные направления подготовки</h3>
                <div class="specialties-list">`;
        
        university.specialties.forEach(specialty => {
            detailHTML += `<div class="specialty-item">${specialty}</div>`;
        });
        
        detailHTML += `</div></div>`;
    }
    
    // Добавляем преподавателей, если они есть
    if (university.teachers && university.teachers.length > 0) {
        detailHTML += `
            <div class="detail-section">
                <h3><i class="fas fa-chalkboard-teacher"></i> Преподавательский состав</h3>
                <div class="teachers-list">`;
        
        university.teachers.forEach(teacher => {
            detailHTML += `
                <div class="teacher-card">
                    <div class="teacher-name">${teacher.name}</div>
                    <div class="teacher-position">${teacher.position}</div>
                    <p>${teacher.info}</p>
                </div>`;
        });
        
        detailHTML += `</div></div>`;
    }
    
    // Добавляем карьерные перспективы
    if (university.careers && university.careers.length > 0) {
        detailHTML += `
            <div class="detail-section">
                <h3><i class="fas fa-briefcase"></i> Карьерные перспективы</h3>
                <div class="career-prospects">`;
        
        university.careers.forEach(career => {
            detailHTML += `
                <div class="career-card">
                    <div class="career-salary">${career.salary}</div>
                    <h4>${career.specialty}</h4>
                    <p>${career.professions}</p>
                </div>`;
        });
        
        detailHTML += `</div></div>`;
    }
    
    // Добавляем компании-партнеры
    if (university.companies && university.companies.length > 0) {
        detailHTML += `
            <div class="detail-section">
                <h3><i class="fas fa-building"></i> Крупные компании-партнеры</h3>
                <div class="companies-list">`;
        
        university.companies.forEach(company => {
            detailHTML += `<span class="company-badge">${company}</span>`;
        });
        
        detailHTML += `</div></div>`;
    }
    
    detailHTML += `</div>`;
    return detailHTML;
}

// Функция для отображения детальной информации об университете
function showUniversityDetail(universityId) {
    const detailContainer = document.getElementById('detail-container');
    let detailHTML = createUniversityDetail(universityId);
    
    // Применяем поисковую подсветку, если есть запрос
    if (currentDetailSearchQuery) {
        const regex = new RegExp(`(${currentDetailSearchQuery})`, 'gi');
        detailHTML = detailHTML.replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    detailContainer.innerHTML = detailHTML;
}

// Функция для поиска в каталоге
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        currentSearchQuery = this.value.trim();
        renderUniversityCards();
    });
}

// Функция для поиска в детальной информации
function setupDetailSearch() {
    const searchInput = document.getElementById('detail-search-input');
    searchInput.addEventListener('input', function() {
        currentDetailSearchQuery = this.value.trim();
        
        // Получаем текущий активный университет
        const activeButton = document.querySelector('.university-select-btn.active');
        if (activeButton) {
            const universityId = activeButton.getAttribute('data-university');
            showUniversityDetail(universityId);
        }
    });
}

// Навигация между страницами
function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            
            // Убираем активный класс у всех вкладок
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            // Скрываем все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Показываем выбранную страницу
            document.getElementById(pageId).classList.add('active');
            
            // Если переходим на страницу 2, создаем селектор, если еще не создан
            if (pageId === 'page2' && document.querySelector('.university-selector').children.length === 0) {
                createUniversitySelector();
            }
        });
    });
}

// ... предыдущий код остается без изменений до конца файла ...

// === ИИ ЧАТ-БОТ ДЛЯ ПРОФОРИЕНТАЦИИ ===

// Вопросы для профориентационного теста
const careerTestQuestions = [
    {
        id: 1,
        question: "Какой тип деятельности вам больше нравится?",
        options: [
            { text: "Работа с людьми (обучение, консультирование, помощь)", category: "social", score: 5 },
            { text: "Аналитическая работа (исследования, анализ данных)", category: "investigative", score: 5 },
            { text: "Творческая деятельность (искусство, дизайн, писательство)", category: "artistic", score: 5 },
            { text: "Практическая работа (техника, строительство, производство)", category: "realistic", score: 5 },
            { text: "Организационная работа (управление, планирование, бизнес)", category: "enterprising", score: 5 },
            { text: "Систематическая работа (документы, учет, процедуры)", category: "conventional", score: 5 }
        ]
    },
    {
        id: 2,
        question: "Какие школьные предметы вам наиболее интересны?",
        options: [
            { text: "Математика и физика", category: "investigative", score: 4 },
            { text: "Химия и биология", category: "investigative", score: 4 },
            { text: "История и обществознание", category: "social", score: 4 },
            { text: "Литература и языки", category: "artistic", score: 4 },
            { text: "Информатика и технологии", category: "realistic", score: 4 },
            { text: "Экономика и право", category: "enterprising", score: 4 }
        ]
    },
    {
        id: 3,
        question: "Как вы предпочитаете решать проблемы?",
        options: [
            { text: "Анализирую данные и ищу логическое решение", category: "investigative", score: 3 },
            { text: "Обсуждаю с другими и учитываю их мнение", category: "social", score: 3 },
            { text: "Ищу творческий, нестандартный подход", category: "artistic", score: 3 },
            { text: "Разрабатываю четкий план и следую ему", category: "conventional", score: 3 },
            { text: "Принимаю быстрое решение и действую", category: "enterprising", score: 3 },
            { text: "Экспериментирую и пробую разные варианты", category: "realistic", score: 3 }
        ]
    },
    {
        id: 4,
        question: "Какая рабочая обстановка вам комфортна?",
        options: [
            { text: "Динамичная, с частым общением с людьми", category: "social", score: 3 },
            { text: "Спокойная, с возможностью сосредоточиться", category: "investigative", score: 3 },
            { text: "Свободная, творческая атмосфера", category: "artistic", score: 3 },
            { text: "Четко организованная, предсказуемая", category: "conventional", score: 3 },
            { text: "Конкурентная, с возможностью роста", category: "enterprising", score: 3 },
            { text: "Практическая, с работой руками", category: "realistic", score: 3 }
        ]
    },
    {
        id: 5,
        question: "Что для вас важно в будущей профессии?",
        options: [
            { text: "Возможность помогать другим", category: "social", score: 4 },
            { text: "Интеллектуальный вызов и развитие", category: "investigative", score: 4 },
            { text: "Творческая самореализация", category: "artistic", score: 4 },
            { text: "Стабильность и надежность", category: "conventional", score: 4 },
            { text: "Высокий доход и карьерный рост", category: "enterprising", score: 4 },
            { text: "Практические результаты работы", category: "realistic", score: 4 }
        ]
    },
    {
        id: 6,
        question: "Какой тип задач вам интереснее?",
        options: [
            { text: "Работа с техникой и оборудованием", category: "realistic", score: 3 },
            { text: "Исследование и открытие нового", category: "investigative", score: 3 },
            { text: "Создание художественных произведений", category: "artistic", score: 3 },
            { text: "Обучение и консультирование людей", category: "social", score: 3 },
            { text: "Организация процессов и людей", category: "enterprising", score: 3 },
            { text: "Работа с цифрами и документами", category: "conventional", score: 3 }
        ]
    },
    {
        id: 7,
        question: "Какими навыками вы обладаете?",
        options: [
            { text: "Хорошие коммуникативные навыки", category: "social", score: 2 },
            { text: "Аналитическое мышление", category: "investigative", score: 2 },
            { text: "Творческие способности", category: "artistic", score: 2 },
            { text: "Организаторские способности", category: "enterprising", score: 2 },
            { text: "Технические навыки", category: "realistic", score: 2 },
            { text: "Внимательность к деталям", category: "conventional", score: 2 }
        ]
    },
    {
        id: 8,
        question: "Как вы видите свою карьеру через 10 лет?",
        options: [
            { text: "Эксперт в своей области", category: "investigative", score: 5 },
            { text: "Руководитель отдела или компании", category: "enterprising", score: 5 },
            { text: "Помощник или консультант для многих людей", category: "social", score: 5 },
            { text: "Свободный художник или творческий профессионал", category: "artistic", score: 5 },
            { text: "Специалист с устойчивым положением", category: "conventional", score: 5 },
            { text: "Мастер своего дела с практическими навыками", category: "realistic", score: 5 }
        ]
    },
    {
        id: 9,
        question: "Какие внеучебные занятия вам интересны?",
        options: [
            { text: "Волонтерство и общественная деятельность", category: "social", score: 2 },
            { text: "Научные кружки и исследования", category: "investigative", score: 2 },
            { text: "Творческие кружки (рисование, музыка, театр)", category: "artistic", score: 2 },
            { text: "Технические кружки и моделирование", category: "realistic", score: 2 },
            { text: "Бизнес-проекты и предпринимательство", category: "enterprising", score: 2 },
            { text: "Шахматы, головоломки, стратегические игры", category: "conventional", score: 2 }
        ]
    },
    {
        id: 10,
        question: "Какой стиль работы вам ближе?",
        options: [
            { text: "Самостоятельная, индивидуальная работа", category: "investigative", score: 3 },
            { text: "Работа в команде, коллективные проекты", category: "social", score: 3 },
            { text: "Проектная работа с творческой свободой", category: "artistic", score: 3 },
            { text: "Четко структурированная, по инструкциям", category: "conventional", score: 3 },
            { text: "Лидерская позиция с принятием решений", category: "enterprising", score: 3 },
            { text: "Практическая работа с конкретным результатом", category: "realistic", score: 3 }
        ]
    }
];

// Карта специальностей по категориям
const specialtyCategories = {
    "social": {
        name: "Социальная сфера",
        description: "Работа с людьми, помощь, обучение, консультирование",
        specialties: ["Педагогика", "Психология", "Социальная работа", "Медицина", "Журналистика"],
        universities: ["abai", "women", "medical", "abulai", "turan"]
    },
    "investigative": {
        name: "Исследовательская сфера",
        description: "Научная работа, анализ, исследования, разработки",
        specialties: ["Компьютерные науки", "Математика", "Физика", "Химия", "Биология", "Инженерия"],
        universities: ["knu", "satbayev", "kbtu", "iitu", "medical"]
    },
    "artistic": {
        name: "Творческая сфера",
        description: "Искусство, дизайн, творчество, самовыражение",
        specialties: ["Дизайн", "Архитектура", "Искусство", "Литература", "Музыка", "Актерское мастерство"],
        universities: ["atu", "turan", "abai", "knu"]
    },
    "realistic": {
        name: "Практическая сфера",
        description: "Технические навыки, работа с оборудованием, строительство",
        specialties: ["Инженерия", "Строительство", "Технологии", "Автомеханика", "Электротехника"],
        universities: ["satbayev", "kbtu", "atu", "agrar"]
    },
    "enterprising": {
        name: "Предпринимательская сфера",
        description: "Бизнес, управление, продажи, предпринимательство",
        specialties: ["Менеджмент", "Экономика", "Финансы", "Маркетинг", "Бизнес-администрирование"],
        universities: ["kimep", "narxoz", "kbtu", "turan", "knu"]
    },
    "conventional": {
        name: "Организационная сфера",
        description: "Работа с документами, учет, администрирование, планирование",
        specialties: ["Бухгалтерия", "Делопроизводство", "Архивирование", "Логистика", "Кадры"],
        universities: ["narxoz", "kimep", "turan", "knu"]
    }
};

// Состояние чат-бота
let chatbotState = {
    testStarted: false,
    currentQuestion: 0,
    answers: [],
    testCompleted: false,
    results: null
};

// Инициализация чат-бота
function initializeChatbot() {
    const chatMessages = document.getElementById('chat-messages');
    const testQuestions = document.getElementById('test-questions');
    const progressFill = document.getElementById('progress-fill');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    
    // Устанавливаем общее количество вопросов
    totalQuestionsEl.textContent = careerTestQuestions.length;
    
    // Настройка кнопок действий
    document.querySelector('.start-test-btn').addEventListener('click', startTest);
    document.querySelector('.info-btn').addEventListener('click', showInfo);
    document.getElementById('restart-test').addEventListener('click', restartTest);
    document.getElementById('show-results').addEventListener('click', showTestResults);
    document.getElementById('recommend-universities').addEventListener('click', showRecommendedUniversities);
    document.getElementById('send-message').addEventListener('click', sendUserMessage);
    
    // Настройка отправки сообщения по Enter
    document.getElementById('user-message').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // Обновляем состояние кнопок
    updateChatbotButtons();
}

// Начать тест
function startTest() {
    chatbotState.testStarted = true;
    chatbotState.currentQuestion = 0;
    chatbotState.answers = [];
    chatbotState.testCompleted = false;
    
    // Очищаем предыдущие вопросы
    const testQuestions = document.getElementById('test-questions');
    testQuestions.innerHTML = '';
    
    // Обновляем прогресс
    updateProgress();
    
    // Показываем первый вопрос
    showCurrentQuestion();
    
    // Обновляем состояние кнопок
    updateChatbotButtons();
    
    // Добавляем сообщение в чат
    addBotMessage("Отлично! Давайте начнем тест. Отвечайте на вопросы честно - это поможет получить наиболее точные рекомендации.");
}

// Показать информацию о тесте
function showInfo() {
    addBotMessage("Я задам вам 10 вопросов о ваших интересах, способностях и предпочтениях. На основе ваших ответов я определю наиболее подходящие для вас профессиональные сферы и порекомендую университеты из нашего каталога, которые предлагают соответствующие специальности.");
}

// Показать текущий вопрос
function showCurrentQuestion() {
    if (!chatbotState.testStarted || chatbotState.currentQuestion >= careerTestQuestions.length) {
        completeTest();
        return;
    }
    
    const question = careerTestQuestions[chatbotState.currentQuestion];
    const testQuestions = document.getElementById('test-questions');
    
    // Создаем HTML для вопроса
    const questionHTML = `
        <div class="question-item">
            <div class="question-text">${question.id}. ${question.question}</div>
            <div class="answer-options">
                ${question.options.map((option, index) => `
                    <button class="answer-option" data-index="${index}" data-category="${option.category}" data-score="${option.score}">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    testQuestions.innerHTML = questionHTML;
    
    // Добавляем обработчики для вариантов ответа
    document.querySelectorAll('.answer-option').forEach(button => {
        button.addEventListener('click', function() {
            // Снимаем выделение с других вариантов
            document.querySelectorAll('.answer-option').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Выделяем выбранный вариант
            this.classList.add('selected');
            
            // Сохраняем ответ
            const answer = {
                questionId: question.id,
                optionIndex: parseInt(this.getAttribute('data-index')),
                category: this.getAttribute('data-category'),
                score: parseInt(this.getAttribute('data-score'))
            };
            
            // Если это новый вопрос, добавляем ответ
            if (chatbotState.answers.length <= chatbotState.currentQuestion) {
                chatbotState.answers.push(answer);
            } else {
                // Иначе обновляем ответ на текущий вопрос
                chatbotState.answers[chatbotState.currentQuestion] = answer;
            }
            
            // Через секунду переходим к следующему вопросу
            setTimeout(() => {
                chatbotState.currentQuestion++;
                updateProgress();
                
                if (chatbotState.currentQuestion < careerTestQuestions.length) {
                    showCurrentQuestion();
                } else {
                    completeTest();
                }
            }, 500);
        });
    });
    
    // Если на этот вопрос уже был дан ответ, показываем его
    if (chatbotState.answers[chatbotState.currentQuestion]) {
        const answer = chatbotState.answers[chatbotState.currentQuestion];
        const answerButtons = document.querySelectorAll('.answer-option');
        if (answerButtons[answer.optionIndex]) {
            answerButtons[answer.optionIndex].classList.add('selected');
        }
    }
    
    // Обновляем номер текущего вопроса
    document.getElementById('current-question').textContent = chatbotState.currentQuestion + 1;
}

// Обновить прогресс теста
function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = (chatbotState.currentQuestion / careerTestQuestions.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Завершить тест
function completeTest() {
    chatbotState.testCompleted = true;
    chatbotState.results = calculateResults();
    
    // Очищаем вопросы
    document.getElementById('test-questions').innerHTML = '';
    
    // Обновляем прогресс на 100%
    updateProgress();
    
    // Добавляем сообщение о завершении
    addBotMessage("Поздравляю! Вы завершили профориентационный тест. Теперь я проанализирую ваши ответы и подберу для вас наиболее подходящие специальности и университеты.");
    
    // Показываем результаты
    setTimeout(() => {
        showTestResults();
    }, 1500);
    
    // Обновляем состояние кнопок
    updateChatbotButtons();
}

// Рассчитать результаты теста
function calculateResults() {
    const scores = {
        social: 0,
        investigative: 0,
        artistic: 0,
        realistic: 0,
        enterprising: 0,
        conventional: 0
    };
    
    // Суммируем баллы по категориям
    chatbotState.answers.forEach(answer => {
        if (answer && answer.category && scores.hasOwnProperty(answer.category)) {
            scores[answer.category] += answer.score;
        }
    });
    
    // Находим топ-3 категории
    const sortedCategories = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
    
    return {
        scores: scores,
        topCategories: sortedCategories.map(([category, score]) => ({
            category,
            score,
            ...specialtyCategories[category]
        })),
        allCategories: Object.entries(scores).map(([category, score]) => ({
            category,
            score,
            ...specialtyCategories[category]
        })).sort((a, b) => b.score - a.score)
    };
}

// Показать результаты теста
function showTestResults() {
    if (!chatbotState.testCompleted || !chatbotState.results) {
        addBotMessage("Сначала пройдите тест, чтобы увидеть результаты.");
        return;
    }
    
    const resultsContainer = document.getElementById('test-results');
    const results = chatbotState.results;
    
    let resultsHTML = `
        <div class="results-header">
            <i class="fas fa-chart-bar"></i> Результаты профориентационного теста
        </div>
        
        <div class="result-category">
            <h3><i class="fas fa-star"></i> Ваши ведущие профессиональные сферы</h3>
    `;
    
    // Показываем топ-3 категории
    results.topCategories.forEach((category, index) => {
        const rank = index === 0 ? '1-е место' : index === 1 ? '2-е место' : '3-е место';
        const percentage = Math.round((category.score / 45) * 100); // 45 - максимальный балл
        
        resultsHTML += `
            <div class="recommendation-card">
                <div class="recommendation-header">
                    <div class="recommendation-title">${category.name}</div>
                    <div class="recommendation-match">${rank} (${percentage}%)</div>
                </div>
                <div class="recommendation-details">
                    <div class="detail-item">
                        <div class="detail-label">Описание:</div>
                        <div class="detail-value">${category.description}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Рекомендуемые специальности:</div>
                        <div class="detail-value">${category.specialties.join(', ')}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Баллы:</div>
                        <div class="detail-value">${category.score} из 45</div>
                    </div>
                </div>
                <div class="actions">
                    <button class="action-btn small" onclick="showUniversitiesForCategory('${category.category}')">
                        <i class="fas fa-university"></i> Подходящие вузы
                    </button>
                </div>
            </div>
        `;
    });
    
    // Показываем все черты личности
    resultsHTML += `
        </div>
        
        <div class="result-category">
            <h3><i class="fas fa-user-tag"></i> Ваши профессиональные черты</h3>
            <div class="personality-traits">
    `;
    
    results.allCategories.forEach(category => {
        const percentage = Math.round((category.score / 45) * 100);
        const isHighlight = percentage > 50;
        
        resultsHTML += `
            <div class="trait-tag ${isHighlight ? 'highlight' : ''}">
                ${category.name} (${percentage}%)
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
        </div>
        
        <div class="actions" style="margin-top: 30px;">
            <button class="action-btn" onclick="generateDetailedReport()">
                <i class="fas fa-file-pdf"></i> Скачать детальный отчет
            </button>
            <button class="action-btn" onclick="showRecommendedUniversities()">
                <i class="fas fa-university"></i> Все рекомендуемые вузы
            </button>
        </div>
    `;
    
    resultsContainer.innerHTML = resultsHTML;
}

// Показать университеты для категории
function showUniversitiesForCategory(categoryId) {
    const category = specialtyCategories[categoryId];
    if (!category) return;
    
    const resultsContainer = document.getElementById('test-results');
    
    let universitiesHTML = `
        <div class="results-header">
            <i class="fas fa-university"></i> Университеты для сферы "${category.name}"
        </div>
        
        <div class="result-category">
            <h3><i class="fas fa-graduation-cap"></i> Подходящие университеты</h3>
    `;
    
    // Для каждого университета из категории
    category.universities.forEach(universityId => {
        const university = universities[universityId];
        if (university) {
            const matchingSpecialties = university.specialties ? 
                university.specialties.filter(spec => 
                    category.specialties.some(catSpec => 
                        spec.toLowerCase().includes(catSpec.toLowerCase().split(' ')[0])
                    )
                ) : category.specialties.slice(0, 3);
            
            universitiesHTML += `
                <div class="recommendation-card">
                    <div class="recommendation-header">
                        <div class="recommendation-title">${university.name}</div>
                        <div class="recommendation-match">${matchingSpecialties.length} совпадений</div>
                    </div>
                    <div class="recommendation-details">
                        <div class="detail-item">
                            <div class="detail-label">Рейтинг QS:</div>
                            <div class="detail-value">${university.qsRanking <= 800 ? university.qsRanking : '801-850'}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Стоимость:</div>
                            <div class="detail-value">${(university.cost / 1000000).toFixed(1)} млн ₸/год</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Подходящие специальности:</div>
                            <div class="detail-value">${matchingSpecialties.join(', ')}</div>
                        </div>
                    </div>
                    <div class="actions">
                        <button class="action-btn small" onclick="switchToUniversityDetail('${universityId}')">
                            <i class="fas fa-info-circle"></i> Подробнее
                        </button>
                        <button class="action-btn small" onclick="addToComparisonFromChat('${universityId}')">
                            <i class="fas fa-balance-scale"></i> Сравнить
                        </button>
                    </div>
                </div>
            `;
        }
    });
    
    universitiesHTML += `
        </div>
        
        <div class="actions" style="margin-top: 20px;">
            <button class="action-btn" onclick="showTestResults()">
                <i class="fas fa-arrow-left"></i> Вернуться к результатам
            </button>
        </div>
    `;
    
    resultsContainer.innerHTML = universitiesHTML;
}

// Показать все рекомендуемые университеты
function showRecommendedUniversities() {
    if (!chatbotState.testCompleted || !chatbotState.results) {
        addBotMessage("Сначала пройдите тест, чтобы получить рекомендации по университетам.");
        return;
    }
    
    // Собираем все уникальные университеты из топ-3 категорий
    const allUniversityIds = new Set();
    chatbotState.results.topCategories.forEach(category => {
        specialtyCategories[category.category].universities.forEach(id => {
            allUniversityIds.add(id);
        });
    });
    
    const resultsContainer = document.getElementById('test-results');
    
    let universitiesHTML = `
        <div class="results-header">
            <i class="fas fa-university"></i> Все рекомендуемые университеты
        </div>
        
        <div class="result-category">
            <h3><i class="fas fa-star"></i> Лучшие варианты для вас</h3>
            <p>На основе ваших ответов мы подобрали ${allUniversityIds.size} университетов, которые лучше всего соответствуют вашим профессиональным интересам.</p>
    `;
    
    // Сортируем университеты по рейтингу
    const sortedUniversityIds = Array.from(allUniversityIds).sort((a, b) => {
        return universities[a].qsRanking - universities[b].qsRanking;
    });
    
    sortedUniversityIds.forEach(universityId => {
        const university = universities[universityId];
        
        // Находим, в каких категориях этот университет рекомендуется
        const recommendedInCategories = chatbotState.results.topCategories
            .filter(category => 
                specialtyCategories[category.category].universities.includes(universityId)
            )
            .map(category => category.name);
        
        universitiesHTML += `
            <div class="recommendation-card">
                <div class="recommendation-header">
                    <div class="recommendation-title">${university.name}</div>
                    <div class="recommendation-match">Рекомендован в ${recommendedInCategories.length} сферах</div>
                </div>
                <div class="recommendation-details">
                    <div class="detail-item">
                        <div class="detail-label">Рейтинг QS Asia:</div>
                        <div class="detail-value">${university.qsRanking <= 800 ? university.qsRanking : '801-850'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Стоимость обучения:</div>
                        <div class="detail-value">${(university.cost / 1000000).toFixed(1)} млн ₸ в год</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Количество факультетов:</div>
                        <div class="detail-value">${university.faculties}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Рекомендован для сфер:</div>
                        <div class="detail-value">${recommendedInCategories.join(', ')}</div>
                    </div>
                </div>
                <div class="actions">
                    <button class="action-btn small" onclick="switchToUniversityDetail('${universityId}')">
                        <i class="fas fa-info-circle"></i> Подробнее
                    </button>
                    <button class="action-btn small" onclick="addToComparisonFromChat('${universityId}')">
                        <i class="fas fa-balance-scale"></i> Сравнить
                    </button>
                </div>
            </div>
        `;
    });
    
    universitiesHTML += `
        </div>
        
        <div class="actions" style="margin-top: 20px;">
            <button class="action-btn" onclick="showTestResults()">
                <i class="fas fa-arrow-left"></i> Вернуться к результатам
            </button>
        </div>
    `;
    
    resultsContainer.innerHTML = universitiesHTML;
}

// Переключиться на детальную информацию об университете
function switchToUniversityDetail(universityId) {
    // Переключаемся на вкладку детальной информации
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-page="page2"]').classList.add('active');
    
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page2').classList.add('active');
    
    // Устанавливаем выбранный университет
    setTimeout(() => {
        const button = document.querySelector(`.university-select-btn[data-university="${universityId}"]`);
        if (button) {
            button.click();
        }
    }, 100);
}

// Добавить университет к сравнению из чата
function addToComparisonFromChat(universityId) {
    addToComparison(universityId);
    
    // Переключаемся на вкладку сравнения
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-page="page1"]').classList.add('active');
    
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    
    // Показываем сообщение
    setTimeout(() => {
        const university = universities[universityId];
        addBotMessage(`Университет "${university.name}" добавлен к сравнению!`);
    }, 100);
}

// Генерация детального отчета
function generateDetailedReport() {
    if (!chatbotState.testCompleted) {
        addBotMessage("Сначала пройдите тест, чтобы сгенерировать отчет.");
        return;
    }
    
    addBotMessage("Генерирую детальный отчет в формате PDF...");
    
    // В реальном приложении здесь был бы запрос к серверу для генерации PDF
    setTimeout(() => {
        addBotMessage("Отчет успешно сгенерирован! Скачать его можно по <a href='#' onclick='downloadReport()'>этой ссылке</a>.");
    }, 2000);
}

// Скачать отчет (заглушка)
function downloadReport() {
    alert("В реальном приложении здесь началась бы загрузка PDF-отчета.");
}

// Перезапустить тест
function restartTest() {
    chatbotState.testStarted = false;
    chatbotState.currentQuestion = 0;
    chatbotState.answers = [];
    chatbotState.testCompleted = false;
    chatbotState.results = null;
    
    // Очищаем результаты
    document.getElementById('test-results').innerHTML = '';
    document.getElementById('test-questions').innerHTML = '';
    
    // Сбрасываем прогресс
    updateProgress();
    document.getElementById('current-question').textContent = '0';
    
    // Добавляем приветственное сообщение
    addBotMessage("Тест сброшен. Нажмите 'Начать тест', чтобы пройти профориентацию заново.");
    
    // Обновляем состояние кнопок
    updateChatbotButtons();
}

// Отправить пользовательское сообщение
function sendUserMessage() {
    const input = document.getElementById('user-message');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Добавляем сообщение пользователя в чат
    addUserMessage(message);
    
    // Очищаем поле ввода
    input.value = '';
    
    // Обрабатываем сообщение
    processUserMessage(message.toLowerCase());
}

// Обработать пользовательское сообщение
function processUserMessage(message) {
    setTimeout(() => {
        if (message.includes('привет') || message.includes('здравствуй')) {
            addBotMessage("Привет! Я ИИ-помощник ONAY UNIBASE. Чем могу помочь?");
        } else if (message.includes('тест') || message.includes('профориентация')) {
            addBotMessage("Хотите пройти профориентационный тест? Он поможет определить подходящие для вас специальности и университеты.");
        } else if (message.includes('результат') && chatbotState.testCompleted) {
            showTestResults();
        } else if (message.includes('университет') || message.includes('вуз')) {
            addBotMessage("Я могу порекомендовать университеты на основе ваших интересов. Пройдите тест, чтобы получить персонализированные рекомендации.");
        } else if (message.includes('специальность') || message.includes('факультет')) {
            addBotMessage("После прохождения теста я подберу для вас подходящие специальности из нашего каталога университетов Казахстана.");
        } else {
            addBotMessage("Я понимаю вопросы о профориентации, выборе университета и специальностей. Пройдите тест, чтобы получить конкретные рекомендации!");
        }
    }, 1000);
}

// Добавить сообщение бота
function addBotMessage(text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-sender">
                <i class="fas fa-robot"></i> ИИ Помощник
            </div>
            <div class="message-text">${text}</div>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Добавить сообщение пользователя
function addUserMessage(text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-sender">
                <i class="fas fa-user"></i> Вы
            </div>
            <div class="message-text">${text}</div>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Обновить состояние кнопок чат-бота
function updateChatbotButtons() {
    const restartBtn = document.getElementById('restart-test');
    const resultsBtn = document.getElementById('show-results');
    const universitiesBtn = document.getElementById('recommend-universities');
    
    if (chatbotState.testCompleted) {
        restartBtn.disabled = false;
        resultsBtn.disabled = false;
        universitiesBtn.disabled = false;
    } else {
        resultsBtn.disabled = true;
        universitiesBtn.disabled = true;
    }
}


// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Отображаем карточки университетов
    renderUniversityCards();
    
    // Настраиваем таблицу сравнения
    updateComparisonTable();
    
    // Настраиваем навигацию
    setupNavigation();
    
    // Настраиваем поиск
    setupSearch();
    setupDetailSearch();
    
    // Создаем кнопки выбора университетов для страницы 2
    createUniversitySelector();

    initializeChatbot();
});

