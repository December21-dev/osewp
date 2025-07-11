// Language management
let currentLanguage = 'zh';
const translations = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    setupEventListeners();
});

// Initialize language system
function initializeLanguage() {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
        currentLanguage = 'en';
        updateLanguageDisplay();
    }
}

// Toggle between Chinese and English
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguageDisplay();
}

// Update all text based on current language
function updateLanguageDisplay() {
    const elements = document.querySelectorAll('[data-zh][data-en]');
    elements.forEach(element => {
        const text = currentLanguage === 'zh' ? element.getAttribute('data-zh') : element.getAttribute('data-en');
        element.textContent = text;
    });
    
    // Update language button
    const langButton = document.getElementById('lang-text');
    langButton.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('service-modal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    // Implementation for mobile menu if needed
    console.log('Mobile menu toggled');
}

// Load service content
async function loadServiceContent(serviceType) {
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Show loading
    modalBody.innerHTML = '<div class="loading"></div>';
    modal.style.display = 'block';
    
    try {
        const response = await fetch(`services/${serviceType}-${currentLanguage}.md`);
        if (response.ok) {
            const content = await response.text();
            modalBody.innerHTML = parseMarkdown(content);
        } else {
            modalBody.innerHTML = getDefaultServiceContent(serviceType);
        }
        
        // Set title
        modalTitle.textContent = getServiceTitle(serviceType);
    } catch (error) {
        console.error('Error loading service content:', error);
        modalBody.innerHTML = getDefaultServiceContent(serviceType);
        modalTitle.textContent = getServiceTitle(serviceType);
    }
}

// Get service title based on type and language
function getServiceTitle(serviceType) {
    const titles = {
        'basic-training': {
            'zh': '基础培训',
            'en': 'Basic Training'
        },
        'community-services': {
            'zh': '社区服务',
            'en': 'Community Services'
        },
        'technical-services': {
            'zh': '技术服务',
            'en': 'Technical Services'
        },
        'legal-services': {
            'zh': '法务服务',
            'en': 'Legal Services'
        },
        'business-services': {
            'zh': '商业服务',
            'en': 'Business Services'
        },
        'talent-services': {
            'zh': '人才服务',
            'en': 'Talent Services'
        },
        'policy-services': {
            'zh': '政策服务',
            'en': 'Policy Services'
        }
    };
    
    return titles[serviceType]?.[currentLanguage] || serviceType;
}

// Get default service content when markdown file is not available
function getDefaultServiceContent(serviceType) {
    const defaultContent = {
        'basic-training': {
            'zh': `
                <h4>免费服务</h4>
                <ul>
                    <li>开源软件开发基础教程</li>
                    <li>Git 版本控制培训</li>
                    <li>开源许可证介绍</li>
                    <li>开源社区参与指南</li>
                </ul>
                <h4>开源项目</h4>
                <ul>
                    <li>各类开源学习资源汇总</li>
                    <li>开源培训教材项目</li>
                    <li>在线学习平台</li>
                </ul>
                <h4>商业服务</h4>
                <ul>
                    <li>企业级开源培训定制</li>
                    <li>专业认证培训</li>
                    <li>开源技术咨询</li>
                </ul>
            `,
            'en': `
                <h4>Free Services</h4>
                <ul>
                    <li>Basic tutorials for open source software development</li>
                    <li>Git version control training</li>
                    <li>Introduction to open source licenses</li>
                    <li>Guide to participating in open source communities</li>
                </ul>
                <h4>Open Source Projects</h4>
                <ul>
                    <li>Collection of various open source learning resources</li>
                    <li>Open source training material projects</li>
                    <li>Online learning platforms</li>
                </ul>
                <h4>Commercial Services</h4>
                <ul>
                    <li>Customized enterprise-level open source training</li>
                    <li>Professional certification training</li>
                    <li>Open source technology consulting</li>
                </ul>
            `
        },
        'community-services': {
            'zh': `
                <h4>免费服务</h4>
                <ul>
                    <li>开源社区建设指南</li>
                    <li>社区活动组织支持</li>
                    <li>开源贡献者激励机制</li>
                    <li>社区治理最佳实践</li>
                </ul>
                <h4>开源项目</h4>
                <ul>
                    <li>社区管理工具</li>
                    <li>开源协作平台</li>
                    <li>社区分析工具</li>
                </ul>
                <h4>商业服务</h4>
                <ul>
                    <li>专业社区运营服务</li>
                    <li>社区策略咨询</li>
                    <li>企业开源社区建设</li>
                </ul>
            `,
            'en': `
                <h4>Free Services</h4>
                <ul>
                    <li>Open source community building guide</li>
                    <li>Community event organization support</li>
                    <li>Contributor incentive mechanisms</li>
                    <li>Community governance best practices</li>
                </ul>
                <h4>Open Source Projects</h4>
                <ul>
                    <li>Community management tools</li>
                    <li>Open source collaboration platforms</li>
                    <li>Community analytics tools</li>
                </ul>
                <h4>Commercial Services</h4>
                <ul>
                    <li>Professional community operations services</li>
                    <li>Community strategy consulting</li>
                    <li>Enterprise open source community building</li>
                </ul>
            `
        }
    };
    
    return defaultContent[serviceType]?.[currentLanguage] || 
           `<p>${currentLanguage === 'zh' ? '内容正在完善中...' : 'Content is being improved...'}</p>`;
}

// Simple markdown parser for basic formatting
function parseMarkdown(markdown) {
    let html = markdown
        // Headers
        .replace(/^### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^## (.*$)/gim, '<h3>$1</h3>')
        .replace(/^# (.*$)/gim, '<h2>$1</h2>')
        // Bold
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" target="_blank">$1</a>')
        // Line breaks
        .replace(/\n/gim, '<br>');
    
    // Convert lists
    html = html.replace(/^[\-\*\+] (.*)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gis, '<ul>$1</ul>');
    
    return html;
}

// Close modal
function closeModal() {
    const modal = document.getElementById('service-modal');
    modal.style.display = 'none';
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});