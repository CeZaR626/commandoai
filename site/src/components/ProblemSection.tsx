
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            <span className="gradient-text">Проблема</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            В магазинах — хаос, слабые продажи, ноль обратной связи от продавцов, перегруз и выгорание у руководства.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-red-100 dark:bg-red-900/30">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Отсутствие системы</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Разрозненные процессы, нет единого центра управления, информация теряется.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-orange-100 dark:bg-orange-900/30">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Выгорание руководителей</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Постоянный стресс, ручное управление всеми процессами, перегрузка информацией.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-yellow-100 dark:bg-yellow-900/30">
                <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Низкая производительность</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Продавцы не вовлечены, отсутствует мотивация, нет четких задач на день.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-purple-100 dark:bg-purple-900/30">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Отсутствие обратной связи</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Руководство не получает важных сигналов от первой линии продаж.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
