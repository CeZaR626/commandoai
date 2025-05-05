
import React from 'react';
import { Button } from '@/components/ui/button';
import { TelegramIcon } from './Icons';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-ai-blue/10 to-ai-purple/10 dark:from-ai-blue/5 dark:to-ai-purple/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Готовы повысить эффективность вашей <span className="gradient-text">розницы?</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Внедрите AI-командира и наблюдайте, как ваши магазины трансформируются в высокоэффективную систему
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-ai-blue to-ai-purple hover:opacity-90 transition-opacity min-w-[220px] h-12 text-base">
              Хочу себе такого
            </Button>
            
            <Button variant="outline" size="lg" className="h-12 bg-white/50 dark:bg-white/5 border-gray-200 dark:border-gray-700 min-w-[220px] text-base">
              <TelegramIcon className="mr-2 h-5 w-5 text-[#0088cc]" />
              <span>Написать в Telegram</span>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Ответим в течение 24 часов и расскажем, как внедрить систему у вас
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
