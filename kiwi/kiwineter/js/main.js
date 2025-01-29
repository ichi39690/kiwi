// ユーザーの回答入れ込む変数
        let answers = {
            relation: null,
            hobby: null,
            activ: null,
            budget: null,
            design: null,
            type: null
        };
        // プレゼント候補リスト
        const giftlist = {
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
                question: "相手との<br>関係は？",
                options: [
                    { value: 'senior', text: '目上の人' },
                    { value: 'junior', text: '後輩・親しい人' }
                ]
            },
            hobby: {
                question: "趣味は？",
                options: [
                    { value: 'travel', text: '旅行' },
                    { value: 'beauty', text: '美容' },
                    { value: 'cooking', text: '料理' },
                    { value: 'fasion', text: 'ファッション' },
                ]
            },
            activ: {
                question: "普段の<br>過ごし方は？",
                options: [
                    { value: 'indoor', text: 'インドア' },
                    { value: 'outdoor', text: 'アウトドア' },
                ]
            },
            budget: {
                question: "予算は？",
                options: [
                    { value: 'verylow', text: '3,000~5,000円' },
                    { value: 'low', text: '5,000~10,000円' },
                    { value: 'high', text: '10,000~15,000円' },
                    { value: 'veryhigh', text: '15,000~30000円' },
                ]
            },
            design: {
                question: "好きな<br>デザインは？",
                options: [
                    { value: 'stylish', text: 'スタイリッシュ' },
                    { value: 'cute', text: 'かわいい' },
                    { value: 'color', text: '原色' },
                    { value: 'natural', text: 'ナチュラル' },
                ]
            },
            type: {
                question: "どんなタイプの<br>ギフトがいい？",
                options: [
                    { value: 'experiential', text: '体験型' },
                    { value: 'dispo', text: '消えもの' },
                    { value: 'tangible', text: 'かたちにのこるもの' },
                ]
            },
            result: {
                question: "こちらは<br>いかがですか",
                options: [
                    { value: 'exper', text: '気に入りました' },
                    { value: 'dispo', text: 'うーん' },
                ]
            },
            suggestion: {
                question: "おちからになれず<br>ごめんなさい(>-<)",
                options: [
                    { value: 'site', text: '参考にしてください' },
                ]
            }
        }
        // ユーザーの選択を answers に格納
        function nextquestion(category, answer) {
            answers[category] = answer;
    
        // 質問の進行に従って次の質問を表示
        if (category === 'relation') {
            showquestion('hobby');
        } else if (category === 'hobby') {
            showquestion('activ');
        } else if (category === 'activ') {
            showquestion('budget');
        } else if (category === 'budget') {
            showquestion('design');
        } else if (category === 'design') {
            showquestion('type');
        } else if (category === 'type') {
            showquestion('result');
        } else if (category === 'result') {
            showGiftSuggestions('suggestion');
        }
    }
        
        function showquestion(category) {
            const questiondate = questions[category];
            const questiontitle = document.getElementById('question_title');
            const optioncontainer = document.getElementById('option_button');
        }
        // 質問の内容を表示
        questiontitle.innerHTML = `<p>${questiondate.question}</p>`;
        optioncontainer.innerHTML = '';
    
        // 新しい選択肢を追加
        questiondate.options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.innerText = option.text;
            
            // ボタンがクリックされたら次の質問に進む
            button.onclick = () => nextquestion(category, option.value);
            
            optioncontainer.appendChild(button);
        });
    
        // 最初の質問（relation）を表示
        window.onload = function() {
            showquestion('relation');
        };