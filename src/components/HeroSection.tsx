
import React from 'react';
import { Button } from '@/components/ui/button';
import { TelegramIcon, ArrowRightIcon } from './Icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const TelegramChatInterface = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-[#17212B] rounded-lg overflow-hidden shadow-xl">
      {/* Telegram header */}
      <div className="bg-[#242F3D] p-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-[#4992CC] flex items-center justify-center text-white font-bold">
          ШВ
        </div>
        <div className="ml-3">
          <h3 className="text-white font-medium">Штаб Вкуса</h3>
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
            <p>Хорошо, сделаю завтра👍</p>
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

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 pb-10 px-4 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-ai-darkBlue dark:to-ai-midnight -z-10"></div>
      
      {/* Abstract background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ai-blue/10 rounded-full filter blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-ai-purple/10 rounded-full filter blur-3xl animate-pulse -z-10"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto max-w-6xl z-10 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="gradient-text">AI-командир</span> для розницы
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Умный помощник, который слышит продавцов, видит продажи и каждый день даёт чёткие действия.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-ai-blue to-ai-purple hover:opacity-90 transition-opacity min-w-[200px] h-12 text-base">
                Хочу себе такого
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md p-0 overflow-hidden">
              <TelegramChatInterface />
            </SheetContent>
          </Sheet>
          
          <Button variant="outline" size="lg" className="h-12 bg-white/50 dark:bg-white/5 border-gray-200 dark:border-gray-700 min-w-[200px] text-base">
            <TelegramIcon className="mr-2 h-5 w-5 text-[#0088cc]" />
            <span>Написать в Telegram</span>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#problem" 
          className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 hover:text-ai-blue dark:hover:text-ai-blue transition-colors"
        >
          <span className="mb-2">Узнать больше</span>
          <ArrowRightIcon className="h-5 w-5 transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
