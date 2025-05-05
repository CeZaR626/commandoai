
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

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              <span className="gradient-text">Основатель</span> и архитектор
            </h2>
            
            <div className="text-xl font-medium mb-4">Всеволод</div>
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-6">Архитектор систем</div>
            
            <div className="mb-8">
              <blockquote className="text-lg md:text-xl italic border-l-4 border-ai-blue pl-4 py-2 text-gray-700 dark:text-gray-300">
                "Я создаю не чат-ботов, а инструменты управления вниманием, действиями и деньгами."
              </blockquote>
            </div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Более 10 лет опыта в создании высокоэффективных бизнес-систем, которые не просто работают, а кратно увеличивают результативность команд.
              </p>
              <p>
                С 2021 года сфокусирован на интеграции искусственного интеллекта в управленческие процессы розничного бизнеса.
              </p>
            </div>
            
            <div className="mt-8">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg" className="bg-gradient-to-r from-ai-blue to-ai-purple hover:opacity-90 transition-opacity text-white border-0">
                    Посмотреть пример чата "Штаб вкуса"
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md p-0 overflow-hidden">
                  <TelegramChatInterface />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
