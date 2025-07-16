// Language management
let currentLanguage = 'zh';

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
    if (langButton) {
        langButton.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    
    // Update page title
    const titleElement = document.querySelector('title[data-zh][data-en]');
    if (titleElement) {
        const title = currentLanguage === 'zh' ? titleElement.getAttribute('data-zh') : titleElement.getAttribute('data-en');
        document.title = title;
    }
    
    // Reload service content if on service page
    const serviceContent = document.getElementById('service-content');
    if (serviceContent && window.currentServiceType) {
        loadServicePageContent(window.currentServiceType);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Any additional event listeners can be added here
}

// Mobile menu toggle
function toggleMobileMenu() {
    // Implementation for mobile menu if needed
    console.log('Mobile menu toggled');
}

// Load service content for service pages
async function loadServicePageContent(serviceType) {
    window.currentServiceType = serviceType;
    const contentContainer = document.getElementById('service-content');
    
    if (!contentContainer) return;
    
    // Show loading
    contentContainer.innerHTML = `
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
            <p>${currentLanguage === 'zh' ? '加载中...' : 'Loading...'}</p>
        </div>
    `;
    
    try {
        const response = await fetch(`services/${serviceType}-${currentLanguage}.md`);
        if (response.ok) {
            const content = await response.text();
            contentContainer.innerHTML = `<div class="markdown-content">${parseMarkdown(content)}</div>`;
        } else {
            contentContainer.innerHTML = `<div class="markdown-content">${getDefaultServiceContent(serviceType)}</div>`;
        }
    } catch (error) {
        console.error('Error loading service content:', error);
        contentContainer.innerHTML = `<div class="markdown-content">${getDefaultServiceContent(serviceType)}</div>`;
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
                <h1>基础培训服务</h1>
                <h2>免费服务</h2>
                <h3>在线教程和资源</h3>
                <ul>
                    <li><strong>GitHub 官方文档</strong> - Git 和 GitHub 基础教程</li>
                    <li><strong>开源指南</strong> - GitHub 提供的开源参与指南</li>
                    <li><strong>Linux 基金会免费课程</strong> - 开源软件开发基础</li>
                    <li><strong>Coursera 开源课程</strong> - 多个大学提供的免费开源相关课程</li>
                    <li><strong>freeCodeCamp</strong> - 免费的编程和开源开发教程</li>
                </ul>
                <h2>开源项目</h2>
                <ul>
                    <li><strong>First Contributions</strong> - 帮助新手完成第一次开源贡献</li>
                    <li><strong>Good First Issues</strong> - 汇集适合新手的开源项目</li>
                    <li><strong>Awesome Lists</strong> - 各种技术领域的资源清单</li>
                </ul>
                <h2>商业服务</h2>
                <ul>
                    <li><strong>红帽培训</strong> - 企业级开源技术培训</li>
                    <li><strong>SUSE 培训中心</strong> - Linux 和开源解决方案培训</li>
                    <li><strong>华为开源培训</strong> - 企业开源实践培训</li>
                </ul>
            `,
            'en': `
                <h1>Basic Training Services</h1>
                <h2>Free Services</h2>
                <h3>Online Tutorials and Resources</h3>
                <ul>
                    <li><strong>GitHub Official Documentation</strong> - Git and GitHub basic tutorials</li>
                    <li><strong>Open Source Guides</strong> - GitHub's guide to participating in open source</li>
                    <li><strong>Linux Foundation Free Courses</strong> - Basics of open source software development</li>
                    <li><strong>Coursera Open Source Courses</strong> - Free open source related courses from multiple universities</li>
                    <li><strong>freeCodeCamp</strong> - Free programming and open source development tutorials</li>
                </ul>
                <h2>Open Source Projects</h2>
                <ul>
                    <li><strong>First Contributions</strong> - Helping newcomers make their first open source contribution</li>
                    <li><strong>Good First Issues</strong> - Collection of beginner-friendly open source projects</li>
                    <li><strong>Awesome Lists</strong> - Resource lists for various technology domains</li>
                </ul>
                <h2>Commercial Services</h2>
                <ul>
                    <li><strong>Red Hat Training</strong> - Enterprise-level open source technology training</li>
                    <li><strong>SUSE Training Center</strong> - Linux and open source solution training</li>
                    <li><strong>Huawei Open Source Training</strong> - Enterprise open source practice training</li>
                </ul>
            `
        }
    };
    
    return defaultContent[serviceType]?.[currentLanguage] || 
           `<p>${currentLanguage === 'zh' ? '内容正在完善中...' : 'Content is being improved...'}</p>`;
}

// Simple markdown parser for basic formatting
function parseMarkdown(markdown) {
    let html = markdown;
    
    // Convert images first (before links to avoid conflicts)
    html = html.replace(/!\[([^\]]*)\]\(([^\)]*)\)/gim, '<img src="$2" alt="$1" class="markdown-image">');
    
    // Convert tables
    html = convertTables(html);
    
    // Headers
    html = html
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        // Italic  
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" target="_blank">$1</a>')
        // Line breaks
        .replace(/\n\n/gim, '</p><p>')
        .replace(/\n/gim, '<br>');
    
    // Convert unordered lists
    html = html.replace(/^- (.*)$/gim, '<li>$1</li>');
    
    // Convert ordered lists
    html = html.replace(/^\d+\. (.*)$/gim, '<li-ol>$1</li-ol>');
    
    // Group consecutive unordered list items into ul tags
    html = html.replace(/(<li>.*?<\/li>)(\s*<br>\s*<li>.*?<\/li>)*/gis, function(match) {
        return '<ul>' + match.replace(/<br>\s*/gim, '') + '</ul>';
    });
    
    // Group consecutive ordered list items into ol tags
    html = html.replace(/(<li-ol>.*?<\/li-ol>)(\s*<br>\s*<li-ol>.*?<\/li-ol>)*/gis, function(match) {
        return '<ol>' + match.replace(/<br>\s*/gim, '').replace(/<li-ol>/gim, '<li>').replace(/<\/li-ol>/gim, '</li>') + '</ol>';
    });
    
    // Wrap in paragraphs
    if (!html.startsWith('<h1>') && !html.startsWith('<h2>') && !html.startsWith('<ul>') && !html.startsWith('<ol>') && !html.startsWith('<table>')) {
        html = '<p>' + html + '</p>';
    }
    
    // Clean up
    html = html.replace(/(<br>\s*){3,}/gim, '<br><br>');
    html = html.replace(/<p><\/p>/gim, '');
    
    return html;
}

// Helper function to convert markdown tables to HTML
function convertTables(markdown) {
    // Split markdown by lines
    const lines = markdown.split('\n');
    let result = [];
    let inTable = false;
    let tableRows = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Check if this line is a table row (contains | and isn't just separators)
        if (line.includes('|') && !line.match(/^\s*\|?\s*[-:]+\s*\|/)) {
            if (!inTable) {
                inTable = true;
                tableRows = [];
            }
            
            // Parse table row
            const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
            tableRows.push(cells);
        } else if (line.match(/^\s*\|?\s*[-:]+\s*\|/)) {
            // This is a table separator line, skip it
            continue;
        } else {
            // Not a table row
            if (inTable) {
                // End of table, convert to HTML
                result.push(convertTableRowsToHTML(tableRows));
                inTable = false;
                tableRows = [];
            }
            result.push(line);
        }
    }
    
    // Handle case where markdown ends with a table
    if (inTable && tableRows.length > 0) {
        result.push(convertTableRowsToHTML(tableRows));
    }
    
    return result.join('\n');
}

// Helper function to convert table rows array to HTML table
function convertTableRowsToHTML(rows) {
    if (rows.length === 0) return '';
    
    let html = '<table class="markdown-table">\n';
    
    // First row is header
    html += '  <thead>\n    <tr>\n';
    for (const cell of rows[0]) {
        html += `      <th>${cell}</th>\n`;
    }
    html += '    </tr>\n  </thead>\n';
    
    // Remaining rows are body
    if (rows.length > 1) {
        html += '  <tbody>\n';
        for (let i = 1; i < rows.length; i++) {
            html += '    <tr>\n';
            for (const cell of rows[i]) {
                html += `      <td>${cell}</td>\n`;
            }
            html += '    </tr>\n';
        }
        html += '  </tbody>\n';
    }
    
    html += '</table>';
    return html;
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
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