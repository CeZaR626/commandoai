
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const TelegramChatInterface = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-[#17212B] rounded-lg overflow-hidden shadow-xl">
      {/* Telegram header */}
      <div className="bg-[#242F3D] p-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-[#4992CC] flex items-center justify-center text-white font-bold">
          ШВ
        </div>
        <div className="ml-3">
          <h3 className="text-white font-medium">Штаб</h3>
          <p className="text-gray-400 text-xs">Бот | Онлайн</p>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="p-4 space-y-4 h-72 overflow-y-auto bg-[#0E1621]">
        {/* Bot message */}
        <div className="flex items-end">
          <div className="bg-[#242F3D] text-white rounded-lg p-3 max-w-xs">
            <p>Привет! Я AI-командир твоего магазина. Как прошла твоя смена сегодня?</p>
          </div>
        </div>
        
        {/* User message */}
        <div className="flex items-end justify-end">
          <div className="bg-[#4992CC] text-white rounded-lg p-3 max-w-xs">
            <p>День был нормальный, но клиенты часто спрашивали про новую коллекцию, а я не знаю что отвечать</p>
          </div>
        </div>
        
        {/* Bot message */}
        <div className="flex items-end">
          <div className="bg-[#242F3D] text-white rounded-lg p-3 max-w-xs">
            <p>Спасибо за сигнал! Я понял проблему.</p>
            <p className="mt-2">🎯 <b>Твоя миссия на завтра:</b></p>
            <p>Изучи материалы о новой коллекции, которые я отправил в общий чат. Попробуй рассказать о 3 ключевых продуктах хотя бы 5 клиентам.</p>
          </div>
        </div>
        
        {/* User message */}
        <div className="flex items-end justify-end">
          <div className="bg-[#4992CC] text-white rounded-lg p-3 max-w-xs">
            <p>Хорошо, сейчас сделаю👍</p>
          </div>
        </div>
        
        {/* Bot message - with reward phrase */}
        <div className="flex items-end">
          <div className="bg-[#242F3D] text-white rounded-lg p-3 max-w-xs">
            <p>Отлично! За выполнение предыдущей миссии ты получаешь фразу дня:</p>
            <p className="mt-2 italic">«Кто владеет информацией, тот владеет продажами»</p>
            <p className="mt-2">Это твоя 3-я фраза из 5 для получения бонуса!</p>
          </div>
        </div>
      </div>
      
      {/* Message input */}
      <div className="bg-[#17212B] p-4 flex">
        <input 
          type="text" 
          placeholder="Сообщение..." 
          className="flex-1 bg-[#242F3D] text-white rounded-lg px-4 py-2 focus:outline-none"
          readOnly
        />
        <button className="ml-2 w-10 h-10 rounded-full bg-[#4992CC] flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-white" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const GamificationSection: React.FC = () => {
  return (
    <section id="gamification" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            <span className="gradient-text">Геймификация</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Встроенная механика "Штаб вкуса" превращает работу в увлекательную игру
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="w-full md:max-w-xs mb-8 bg-gradient-to-r from-ai-blue to-ai-purple hover:opacity-90 transition-opacity text-white border-0">
                  Открыть демо "Штаб вкуса"
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 overflow-hidden">
                <TelegramChatInterface />
              </SheetContent>
            </Sheet>
            
            <h3 className="text-2xl font-semibold mb-6">
              Геймификация, которая <span className="gradient-text">работает</span>
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Ежедневные миссии</h4>
                  <p>Продавцы получают чёткую миссию на день, выполняют её и получают фразу дня как вознаграждение.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Коллекция фраз</h4>
                  <p>Собрав 5 фраз, продавец получает бонус — так мы стимулируем регулярное участие без давления.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Прозрачный рейтинг</h4>
                  <p>В Telegram-канале публикуется общий рейтинг продавцов, лучшие фразы и герои недели.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Двойная перспектива</h4>
                  <p>Собственник видит бизнес-метрики роста, а продавец — увлекательную игру с наградами.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
