<template>
  <footer class="border-t border-white/[0.08] bg-[#070A13]/90 backdrop-blur-xl mt-32 relative z-10">
    <div
      class="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-sans">
      
      <!-- Logo & Tagline -->
      <div class="space-y-2 text-center md:text-left">
        <div
          class="flex items-center justify-center md:justify-start gap-2 font-heading font-bold text-white text-base">
          <span class="text-brand-purple">&lt;</span>
          <span>SEK CHAMROEUN<span class="text-brand-teal font-light">.dev</span></span>
          <span class="text-brand-purple">&gt;</span>
        </div>
        <p class="text-gray-500 text-xs">Crafting responsive, high-performance web applications with precision.</p>
      </div>

      <!-- Social Links -->
      <div class="flex items-center gap-3">
        <a href="https://github.com/RoeunWohEhEh" target="_blank" rel="noopener noreferrer"
          class="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:border-brand-purple/40 hover:bg-brand-purple/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
          aria-label="GitHub">
          <i class="fab fa-github text-sm"></i>
        </a>
        <a href="https://www.linkedin.com/in/sek-chamroeun-264695390?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank" rel="noopener noreferrer"
          class="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:border-brand-teal/40 hover:bg-brand-teal/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
          aria-label="LinkedIn">
          <i class="fab fa-linkedin-in text-sm"></i>
        </a>
        <a href="https://www.facebook.com/share/1BnJ7iYCTh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
          class="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:border-brand-pink/40 hover:bg-brand-pink/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
          aria-label="Facebook">
          <i class="fab fa-facebook-f text-sm"></i>
        </a>
      </div>

      <!-- Copyright & Top Link -->
      <div class="text-center md:text-right space-y-2">
        <p class="text-gray-500">© 2026 Sek Chamroeun. All rights reserved.</p>
        <a href="#home"
          class="inline-flex items-center gap-1.5 text-xs text-brand-purple hover:text-brand-teal transition-colors font-medium">
          <span>Back to Top</span>
          <i class="fas fa-arrow-up text-[10px]"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
