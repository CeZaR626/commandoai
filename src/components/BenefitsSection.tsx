
import React from 'react';
import { CheckIcon, TrendingUpIcon } from './Icons';

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-ai-darkBlue to-ai-midnight text-white relative overflow-hidden">
      {/* Background grid and decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')]"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-ai-darkBlue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-ai-darkBlue to-transparent"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-ai-blue/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-ai-purple/10 filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300">Преимущества</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100/80">
            Конкретные результаты для вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Revenue increase */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-white/5 hover:bg-white/10 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-ai-blue/20 flex items-center justify-center mr-4">
                <TrendingUpIcon className="w-6 h-6 text-ai-blue" />
              </div>
              <h3 className="text-2xl font-semibold">+15% выручки</h3>
            </div>
            <p className="text-blue-100/80">
              Наши клиенты отмечают стабильный рост продаж благодаря оптимизированным процессам и повышению вовлеченности персонала.
            </p>
          </div>
          
          {/* Daily clarity */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-white/5 hover:bg-white/10 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-ai-purple/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-ai-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Ежедневная ясность</h3>
            </div>
            <p className="text-blue-100/80">
              Чёткие приоритеты и фокус на важном вместо постоянного "тушения пожаров" и реактивного управления.
            </p>
          </div>
          
          {/* Less burnout */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-white/5 hover:bg-white/10 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-teal-400/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Меньше выгорания</h3>
            </div>
            <p className="text-blue-100/80">
              Снижение стресса для руководителей и сотрудников благодаря автоматизации рутинных процессов и четкому распределению обязанностей.
            </p>
          </div>
          
          {/* Systematic team */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-white/5 hover:bg-white/10 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-amber-400/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Системная команда</h3>
            </div>
            <p className="text-blue-100/80">
              Формирование слаженного коллектива с прозрачными целями, понятной коммуникацией и справедливой системой поощрений.
            </p>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ai-blue text-white text-sm px-4 py-1 rounded-full">
            Отзыв клиента
          </div>
          
          <blockquote className="mb-6">
            <p className="text-lg md:text-xl italic text-blue-50">
              "До внедрения AI-командира у нас был хаос в коммуникации между магазинами. Сейчас продажи выросли на 23%, а время на управление сократилось вдвое. Команда стала более сплоченной и мотивированной."
            </p>
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ai-blue to-ai-purple flex items-center justify-center text-xl font-bold mr-3">
              А
            </div>
            <div className="text-left">
              <div className="font-medium text-white">Александр</div>
              <div className="text-blue-200 text-sm">Владелец сети из 8 магазинов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
