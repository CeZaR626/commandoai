
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Circle decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-ai-blue/5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-ai-purple/5 rounded-full"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            <span className="gradient-text">Решение</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Система на базе Telegram и GPT-агентов
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-ai-blue/10 dark:bg-ai-blue/20 text-ai-blue flex items-center justify-center mr-3">1</span>
                  Сбор информации
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-командир собирает сигналы от продавцов через знакомый им Telegram (текст или голос).
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-ai-blue/10 dark:bg-ai-blue/20 text-ai-blue flex items-center justify-center mr-3">2</span>
                  Интеллектуальный анализ
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Система анализирует проблемы, выявляет паттерны и тренды в работе магазинов.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-ai-blue/10 dark:bg-ai-blue/20 text-ai-blue flex items-center justify-center mr-3">3</span>
                  Конкретные действия
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Формирует чёткие задачи и рекомендации для руководства и сотрудников.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-ai-blue/10 dark:bg-ai-blue/20 text-ai-blue flex items-center justify-center mr-3">4</span>
                  Измеримый рост
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Отслеживает выполнение задач, анализирует результаты, корректирует стратегию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
