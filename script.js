class DeepSeekChat {
    constructor() {
        this.apiKey = localStorage.getItem('deepseek_api_key') || '';
        this.endpoint = 'https://api.deepseek.com/v1/chat/completions';
        this.model = 'deepseek-chat';
        this.conversations = JSON.parse(localStorage.getItem('conversations') || '[]');
        this.currentConversation = null;
        this.isGenerating = false;
        this.abortController = null;
        
        this.init();
    }

    init() {
        this.initElements();
        this.initEventListeners();
        this.loadSettings();
        this.loadConversations();
        this.setupTheme();
        this.startSessionTimer();
        
        // Автоматически тестируем API если ключ есть
        if (this.apiKey) {
            this.testConnection();
        }
    }

    initElements() {
        // Основные элементы
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.messagesContainer = document.getElementById('messagesContainer');
        this.historyList = document.getElementById('historyList');
        
        // Кнопки
        this.newChatBtn = document.getElementById('newChat');
        this.themeToggle = document.getElementById('themeToggle');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.exportBtn = document.getElementById('exportBtn');
        
        // Модальные окна
        this.settingsModal = document.getElementById('settingsModal');
        this.closeSettings = document.getElementById('closeSettings');
        this.saveSettingsBtn = document.getElementById('saveSettingsBtn');
        this.testApiBtn = document.getElementById('testApiBtn');
        
        // Настройки
        this.apiKeyInput = document.getElementById('apiKey');
        this.modelSelect = document.getElementById('modelSelect');
        this.toggleKeyVisibility = document.getElementById('toggleKeyVisibility');
        
        // Быстрые промпты
        this.promptButtons = document.querySelectorAll('.prompt-btn, .example-btn');
        
        // Панель информации
        this.closeInfo = document.getElementById('closeInfo');
        this.infoSidebar = document.querySelector('.info-sidebar');
        
        // Статистика
        this.messageCountEl = document.getElementById('messageCount');
        this.tokenCountEl = document.getElementById('tokenCount');
        this.chatTimeEl = document.getElementById('chatTime');
        this.contextBar = document.getElementById('contextBar');
        this.contextUsed = document.getElementById('contextUsed');
        
        // Настройки API
        this.temperature = document.getElementById('temperature');
        this.maxTokens = document.getElementById('maxTokens');
        this.tempValue = document.getElementById('tempValue');
        this.tokensValue = document.getElementById('tokensValue');
    }

    initEventListeners() {
        // Отправка сообщения
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
            // Авто-расширение текстового поля
            this.autoResizeTextarea();
        });

        // Новый чат
        this.newChatBtn.addEventListener('click', () => this.createNewChat());

        // Тема
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Настройки
        this.settingsBtn.addEventListener('click', () => this.showSettings());
        this.closeSettings.addEventListener('click', () => this.hideSettings());
        this.saveSettingsBtn.addEventListener('click', () => this.saveSettings());
        this.testApiBtn.addEventListener('click', () => this.testConnection());

        // Видимость API ключа
        this.toggleKeyVisibility.addEventListener('click', () => {
            const type = this.apiKeyInput.type === 'password' ? 'text' : 'password';
            this.apiKeyInput.type = type;
            this.toggleKeyVisibility.innerHTML = type === 'password' ? 
                '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });

        // Быстрые промпты
        this.promptButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const prompt = e.target.dataset.prompt;
                this.messageInput.value = prompt;
                this.autoResizeTextarea();
            });
        });

        // Закрытие инфопанели
        this.closeInfo.addEventListener('click', () => {
            this.infoSidebar.classList.remove('active');
        });

        // Настройки API
        this.temperature.addEventListener('input', (e) => {
            this.tempValue.textContent = e.target.value;
        });

        this.maxTokens.addEventListener('input', (e) => {
            this.tokensValue.textContent = e.target.value;
        });

        // Экспорт
        this.exportBtn.addEventListener('click', () => this.exportConversation());

        // Подсчет символов
        this.messageInput.addEventListener('input', () => {
            document.getElementById('charCount').textContent = this.messageInput.value.length;
            this.autoResizeTextarea();
        });

        // Остановка генерации
        document.getElementById('stopBtn').addEventListener('click', () => this.stopGeneration());
    }

    autoResizeTextarea() {
        const textarea = this.messageInput;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    }

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message || this.isGenerating) return;

        // Проверка API ключа
        if (!this.apiKey) {
            alert('Пожалуйста, добавьте API ключ в настройках');
            this.showSettings();
            return;
        }

        // Создаем новую конверсацию если нужно
        if (!this.currentConversation) {
            this.createNewChat();
        }

        // Добавляем сообщение пользователя
        this.addMessage('user', message);
        this.messageInput.value = '';
        this.autoResizeTextarea();
        document.getElementById('charCount').textContent = '0';

        // Показываем индикатор набора
        this.showTypingIndicator();

        try {
            this.isGenerating = true;
            this.sendBtn.disabled = true;
            this.abortController = new AbortController();

            const response = await this.streamCompletion(message);
            
            if (response) {
                this.currentConversation.messages.push(
                    { role: 'user', content: message },
                    { role: 'assistant', content: response }
                );
                this.saveConversations();
                this.updateStats();
            }
        } catch (error) {
            console.error('Error:', error);
            this.addMessage('assistant', `Ошибка: ${error.message}. Проверьте API ключ и подключение к интернету.`);
        } finally {
            this.removeTypingIndicator();
            this.isGenerating = false;
            this.sendBtn.disabled = false;
            this.abortController = null;
        }
    }

    async streamCompletion(message) {
    const messages = [
        ...this.currentConversation.messages,
        { role: 'user', content: message }
    ];

    // Используем несколько прокси для надежности
    const proxyList = [
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?',
        'https://thingproxy.freeboard.io/fetch/',
        'https://proxy.cors.sh/'
    ];

    let lastError = null;

    for (const proxy of proxyList) {
        try {
            const proxyUrl = proxy + encodeURIComponent('https://api.deepseek.com/v1/chat/completions');
            
            console.log('Пробуем прокси:', proxy);
            
            const response = await fetch(proxyUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Origin': 'http://127.0.0.1:5500' // Явно указываем origin
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    stream: true,
                    temperature: parseFloat(this.temperature.value),
                    max_tokens: parseInt(this.maxTokens.value)
                }),
                signal: this.abortController.signal,
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`Прокси ${proxy} вернул статус: ${response.status}`);
            }

            // Если дошли сюда - успех!
            console.log('Успешно подключились через:', proxy);
            return await this.processStreamResponse(response);

        } catch (error) {
            console.warn(`Прокси ${proxy} не сработал:`, error.message);
            lastError = error;
            continue; // Пробуем следующий прокси
        }
    }

    // Если все прокси не сработали
    throw new Error(`Все прокси не сработали. Последняя ошибка: ${lastError?.message}`);
}

async processStreamResponse(response) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    // Убираем индикатор и создаем сообщение
    this.removeTypingIndicator();
    const messageId = this.addMessage('assistant', '', true);

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') continue;

                try {
                    const parsed = JSON.parse(data);
                    const content = parsed.choices[0]?.delta?.content || '';
                    if (content) {
                        fullResponse += content;
                        this.updateMessageContent(messageId, fullResponse);
                    }
                } catch (e) {
                    console.warn('Ошибка парсинга chunk:', e);
                }
            }
        }
    }

    return fullResponse;
}

    addMessage(role, content, isStreaming = false) {
        const messageDiv = document.createElement('div');
        const messageId = 'msg-' + Date.now();
        messageDiv.className = `message ${role}`;
        messageDiv.id = messageId;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = `<div class="avatar">${role === 'user' ? '👤' : '🤖'}</div>`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (isStreaming) {
            contentDiv.innerHTML = this.renderMarkdown(content);
        } else {
            contentDiv.innerHTML = this.renderMarkdown(content);
            hljs.highlightAll();
        }

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(contentDiv);
        this.messagesContainer.appendChild(messageDiv);

        // Прокрутка к последнему сообщению
        messageDiv.scrollIntoView({ behavior: 'smooth' });

        return messageId;
    }

    updateMessageContent(messageId, content) {
        const messageDiv = document.getElementById(messageId);
        if (messageDiv) {
            const contentDiv = messageDiv.querySelector('.message-content');
            contentDiv.innerHTML = this.renderMarkdown(content);
            hljs.highlightAll();
            
            // Прокрутка к обновляемому сообщению
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }

    renderMarkdown(text) {
        // Простой рендеринг markdown
        let html = marked.parse(text);
        
        // Безопасность: удаляем потенциально опасные теги
        const div = document.createElement('div');
        div.innerHTML = html;
        
        // Очищаем HTML
        return div.innerHTML;
    }

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message assistant';
        indicator.id = 'typing-indicator';
        
        indicator.innerHTML = `
            <div class="message-avatar">
                <div class="avatar">🤖</div>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        this.messagesContainer.appendChild(indicator);
        indicator.scrollIntoView({ behavior: 'smooth' });
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    stopGeneration() {
        if (this.abortController) {
            this.abortController.abort();
            this.isGenerating = false;
            this.sendBtn.disabled = false;
            this.removeTypingIndicator();
            this.addMessage('assistant', 'Генерация остановлена пользователем.');
        }
    }

    createNewChat() {
        const conversation = {
            id: Date.now(),
            title: `Диалог ${this.conversations.length + 1}`,
            messages: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.conversations.unshift(conversation);
        this.currentConversation = conversation;
        this.saveConversations();
        
        // Очищаем чат
        this.messagesContainer.innerHTML = '';
        
        // Добавляем приветственное сообщение
        this.addWelcomeMessage();
        
        // Обновляем историю
        this.loadConversations();
        this.updateStats();
        
        // Обновляем заголовок
        document.getElementById('chatTitle').textContent = conversation.title;
    }

    addWelcomeMessage() {
        const welcomeDiv = document.querySelector('.welcome-message');
        if (welcomeDiv) {
            this.messagesContainer.appendChild(welcomeDiv.cloneNode(true));
        }
    }

    loadConversations() {
        this.historyList.innerHTML = '';
        
        this.conversations.forEach(conv => {
            const item = document.createElement('div');
            item.className = `history-item ${conv.id === this.currentConversation?.id ? 'active' : ''}`;
            item.innerHTML = `
                <div class="history-title">${conv.title}</div>
                <div class="history-date">${new Date(conv.updatedAt).toLocaleDateString()}</div>
            `;
            
            item.addEventListener('click', () => this.loadConversation(conv.id));
            this.historyList.appendChild(item);
        });
    }

    loadConversation(conversationId) {
        const conversation = this.conversations.find(c => c.id === conversationId);
        if (!conversation) return;

        this.currentConversation = conversation;
        this.messagesContainer.innerHTML = '';
        
        conversation.messages.forEach(msg => {
            this.addMessage(msg.role, msg.content);
        });
        
        document.getElementById('chatTitle').textContent = conversation.title;
        this.loadConversations();
        this.updateStats();
    }

    saveConversations() {
        localStorage.setItem('conversations', JSON.stringify(this.conversations));
    }

    updateStats() {
        if (!this.currentConversation) return;
        
        const messageCount = this.currentConversation.messages.length;
        const tokenCount = this.currentConversation.messages.reduce((acc, msg) => 
            acc + Math.ceil(msg.content.length / 4), 0);
        
        this.messageCountEl.textContent = messageCount;
        this.tokenCountEl.textContent = tokenCount;
        
        // Обновляем прогресс контекста
        const contextPercentage = Math.min((tokenCount / 128000) * 100, 100);
        this.contextBar.style.width = `${contextPercentage}%`;
        this.contextUsed.textContent = `${contextPercentage.toFixed(1)}%`;
    }

    showSettings() {
        this.apiKeyInput.value = this.apiKey;
        this.modelSelect.value = this.model;
        this.settingsModal.classList.add('active');
    }

    hideSettings() {
        this.settingsModal.classList.remove('active');
    }

    saveSettings() {
        this.apiKey = this.apiKeyInput.value.trim();
        this.model = this.modelSelect.value;
        
        localStorage.setItem('deepseek_api_key', this.apiKey);
        localStorage.setItem('deepseek_model', this.model);
        
        this.hideSettings();
        this.testConnection();
    }

    async testConnection() {
        if (!this.apiKey) return;
        
        try {
            const response = await fetch('https://api.deepseek.com/v1/models', {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            
            if (response.ok) {
                alert('✅ Подключение к API успешно!');
            } else {
                alert('❌ Ошибка подключения. Проверьте API ключ.');
            }
        } catch (error) {
            alert('❌ Ошибка сети. Проверьте подключение к интернету.');
        }
    }

    loadSettings() {
        const savedKey = localStorage.getItem('deepseek_api_key');
        const savedModel = localStorage.getItem('deepseek_model');
        
        if (savedKey) {
            this.apiKey = savedKey;
            this.apiKeyInput.value = savedKey;
        }
        
        if (savedModel) {
            this.model = savedModel;
            this.modelSelect.value = savedModel;
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = this.themeToggle.querySelector('i');
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const icon = this.themeToggle.querySelector('i');
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    startSessionTimer() {
        this.sessionStart = Date.now();
        setInterval(() => {
            const minutes = Math.floor((Date.now() - this.sessionStart) / 60000);
            this.chatTimeEl.textContent = `${minutes}м`;
        }, 60000);
    }

    exportConversation() {
        if (!this.currentConversation || this.currentConversation.messages.length === 0) {
            alert('Нет сообщений для экспорта');
            return;
        }

        const content = this.currentConversation.messages.map(msg => 
            `${msg.role.toUpperCase()}:\n${msg.content}\n\n`
        ).join('---\n\n');

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `deepseek-chat-${new Date().toISOString().slice(0, 10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    window.chatApp = new DeepSeekChat();
});

// Добавляем поддержку голосового ввода
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.continuous = false;
    recognition.interimResults = false;

    document.getElementById('voiceBtn').addEventListener('click', () => {
        recognition.start();
        document.getElementById('voiceBtn').innerHTML = '<i class="fas fa-microphone-slash"></i>';
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('messageInput').value = transcript;
        document.getElementById('voiceBtn').innerHTML = '<i class="fas fa-microphone"></i>';
    };

    recognition.onerror = () => {
        document.getElementById('voiceBtn').innerHTML = '<i class="fas fa-microphone"></i>';
    };
} else {
    document.getElementById('voiceBtn').style.display = 'none';
}