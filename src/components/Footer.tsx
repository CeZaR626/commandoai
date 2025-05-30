
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-montserrat font-bold text-xl gradient-text">
              AI-командир для розницы
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Умный помощник для розничных сетей
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#problem" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue transition-colors">
              Проблема
            </a>
            <a href="#solution" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue transition-colors">
              Решение
            </a>
            <a href="#process" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue transition-colors">
              Процесс
            </a>
            <a href="#gamification" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue transition-colors">
              Геймификация
            </a>
            <a href="#benefits" className="text-sm text-gray-600 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue transition-colors">
              Преимущества
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} AI-командир для розницы. Все права защищены.
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.354-.714.18l.253-3.608 6.575-5.94c.285-.258-.062-.402-.443-.143l-8.134 5.116-3.503-1.096c-.76-.234-.766-.76.159-1.12l13.675-5.27c.631-.246 1.185.15.947.91z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
