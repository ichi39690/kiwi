// ユーザーの回答を格納するための変数
let userAnswers = {
    relation: null,
    preference: null,
    budget: null
};

// プレゼント候補リスト
const giftSuggestions = {
    senior: {
        high: ['高級なワインセット', '豪華な食器セット'],
        low: ['美しいブーケ', 'オーダーメイドの結婚祝いギフト']
    },
    junior: {
        high: ['ユニークな家電', 'デザイン性のあるインテリア'],
        low: ['ペアアイテム（Tシャツ、マグカップ）', 'カジュアルな食器セット']
    }
};

// 質問と選択肢
const questions = {
    relation: {
        question: "相手との関係は？",
        options: [
            { value: 'senior', text: '目上の人' },
            { value: 'junior', text: '後輩・親しい人' }
        ]
    },
    preference: {
        question: "プレゼントの種類は？",
        options: [
            { value: 'high', text: '高級志向' },
            { value: 'low', text: 'カジュアル志向' }
        ]
    },
    budget: {
        question: "予算はどれくらいですか？",
        options: [
            { value: 'high', text: '高めの予算' },
            { value: 'low', text: '低めの予算' }
        ]
    }
};

// 次の質問に進む関数
function nextQuestion(category, answer) {
    userAnswers[category] = answer;

    // 次の質問に進む
    if (category === 'relation') {
        showQuestion('preference');
    } else if (category === 'preference') {
        showQuestion('budget');
    } else if (category === 'budget') {
        showGiftSuggestions();
    }
}

// 質問を表示する関数
function showQuestion(category) {
    const questionData = questions[category];
    const questionTitle = document.getElementById('question-title');
    const optionsContainer = document.getElementById('options-container');

    questionTitle.textContent = questionData.question;
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option.text;
        button.onclick = () => nextQuestion(category, option.value);
        optionsContainer.appendChild(button);
    });
}

// ギフト提案を表示する関数
function showGiftSuggestions() {
    const giftList = document.getElementById('gift-list');
    giftList.innerHTML = ''; // 既存のリストをクリア

    const relation = userAnswers.relation;
    const preference = userAnswers.preference;
    
    const selectedGifts = giftSuggestions[relation][preference];

    selectedGifts.forEach(gift => {
        const listItem = document.createElement('li');
        listItem.textContent = gift;
        giftList.appendChild(listItem);
    });

    // ギフト提案を表示
    document.getElementById('gift-suggestions').style.display = 'block';
}

// 最初の質問を表示
showQuestion('relation');
