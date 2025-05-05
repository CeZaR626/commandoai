
import React from 'react';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Получение сигналов',
      description: 'Сбор данных от продавцов через Telegram в удобной для них форме (текст/голос)',
      color: 'from-blue-400 to-blue-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13"></path>
          <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      )
    },
    {
      number: 2,
      title: 'Анализ проблем',
      description: 'Искусственный интеллект обрабатывает информацию и выявляет скрытые проблемы',
      color: 'from-indigo-400 to-indigo-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: 'Действие',
      description: 'Система формирует конкретные задачи и рекомендации для руководства',
      color: 'from-violet-400 to-violet-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      number: 4,
      title: 'Рост',
      description: 'Отслеживание выполнения задач и улучшение показателей продаж',
      color: 'from-ai-blue to-ai-purple',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
          <path d="m15 5 4 4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 -z-10"></div>
      
      {/* Connected lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-ai-purple/30 dark:from-blue-800/30 dark:via-purple-800/30 dark:to-ai-purple/30 hidden md:block"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            <span className="gradient-text">Процесс</span> работы
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Полный цикл управления от сбора данных до конкретных действий и измеримого результата
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all relative z-20">
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center text-white bg-gradient-to-br ${step.color}`}>
                  {step.icon}
                </div>
                
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 text-sm font-semibold">
                  {step.number}
                </div>
                
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
