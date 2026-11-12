<template>
  <section id="contacts" class="scroll-mt-24">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-12">
      <span class="text-brand-teal font-mono text-2xl font-bold">#</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">contacts</h2>
      <div class="h-[2px] bg-gradient-to-r from-brand-teal via-brand-purple to-transparent w-28 hidden sm:block rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <!-- Contact Info Cards -->
      <div class="lg:col-span-5 space-y-6">
        <div class="space-y-3">
          <h3 class="text-2xl font-bold text-white font-heading">
            Let's build something exceptional
          </h3>
          <p class="text-sm text-gray-400 leading-relaxed font-sans">
            I am open to full-time opportunities, high-impact freelance projects, and creative collaborations. Have a question or project idea? Send me a message!
          </p>
        </div>

        <div class="space-y-3">
          <!-- Email Card -->
          <a href="mailto:sekchamroeun53@gmail.com"
            class="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl hover:border-brand-purple/40 hover:bg-white/[0.03] transition-all duration-300 shadow-lg">
            <div
              class="w-11 h-11 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
              <i class="fas fa-envelope text-base"></i>
            </div>
            <div>
              <div class="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Direct Email</div>
              <div class="text-sm font-semibold text-white group-hover:text-brand-purple transition-colors">sekchamroeun53@gmail.com</div>
            </div>
          </a>

          <!-- LinkedIn Card -->
          <a href="https://www.linkedin.com/in/sek-chamroeun-264695390?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank" rel="noopener noreferrer"
            class="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl hover:border-brand-teal/40 hover:bg-white/[0.03] transition-all duration-300 shadow-lg">
            <div
              class="w-11 h-11 rounded-xl bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
              <i class="fab fa-linkedin-in text-base"></i>
            </div>
            <div>
              <div class="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Professional Network</div>
              <div class="text-sm font-semibold text-white group-hover:text-brand-teal transition-colors">linkedin.com/in/sek-chamroeun</div>
            </div>
          </a>

          <!-- Phone / Telegram Card -->
          <a href="tel:+855977754614"
            class="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl hover:border-brand-pink/40 hover:bg-white/[0.03] transition-all duration-300 shadow-lg">
            <div
              class="w-11 h-11 rounded-xl bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:scale-110 transition-transform">
              <i class="fas fa-phone-alt text-base"></i>
            </div>
            <div>
              <div class="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Phone & Telegram</div>
              <div class="text-sm font-semibold text-white group-hover:text-brand-pink transition-colors">+855 97 775 4614</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Interactive Contact Form -->
      <div class="lg:col-span-7">
        <form @submit.prevent="submitForm"
          class="border border-white/[0.08] bg-[#0A0F1D]/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
          <div class="space-y-1 pb-1">
            <h4 class="text-lg font-bold text-white font-heading">Send a Quick Message</h4>
            <p class="text-xs text-gray-400">Delivered directly to my Telegram inbox.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label for="name" class="text-xs font-semibold text-gray-300 font-sans">Full Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="John Doe"
                class="w-full px-4 py-3 bg-[#070A13]/80 border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all duration-300" />
            </div>
            <div class="space-y-1.5">
              <label for="email" class="text-xs font-semibold text-gray-300 font-sans">Email Address</label>
              <input type="email" id="email" v-model="form.email" required placeholder="john@example.com"
                class="w-full px-4 py-3 bg-[#070A13]/80 border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all duration-300" />
            </div>
          </div>

          <div class="space-y-1.5">
            <label for="message" class="text-xs font-semibold text-gray-300 font-sans">Your Message</label>
            <textarea id="message" v-model="form.message" required rows="4"
              placeholder="Tell me about your project, timeline, or idea..."
              class="w-full px-4 py-3 bg-[#070A13]/80 border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all duration-300 resize-none"></textarea>
          </div>

          <!-- Error Alert Banner -->
          <div v-if="formStatus === 'error'"
            class="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-start gap-2.5">
            <i class="fas fa-exclamation-circle text-rose-400 text-sm mt-0.5 shrink-0"></i>
            <div>
              <p class="font-semibold">{{ errorMessage }}</p>
              <p class="text-[11px] text-rose-400/80 mt-0.5">Please check your network or try reaching out via direct email.</p>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" :disabled="formStatus === 'sending' || formStatus === 'success'"
            class="btn-shimmer w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm cursor-pointer shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2"
            :class="formStatus === 'success'
              ? 'bg-emerald-600 shadow-emerald-500/20'
              : (formStatus === 'sending' ? 'bg-brand-purple/70 cursor-not-allowed' : (formStatus === 'error' ? 'bg-rose-600 hover:bg-rose-500' : 'bg-gradient-to-r from-brand-purple to-indigo-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-[1.01] active:scale-[0.99]'))">
            <span v-if="formStatus === 'idle'" class="flex items-center gap-2">
              <span>Send Message</span>
              <i class="fas fa-paper-plane text-xs"></i>
            </span>
            <span v-else-if="formStatus === 'sending'" class="flex items-center gap-2">
              <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <span>Dispatching message...</span>
            </span>
            <span v-else-if="formStatus === 'success'" class="flex items-center gap-2 text-white">
              <i class="fas fa-check-circle text-emerald-300"></i>
              <span>Sent Successfully! Thank you.</span>
            </span>
            <span v-else-if="formStatus === 'error'" class="flex items-center gap-2">
              <i class="fas fa-redo text-xs"></i>
              <span>Try Sending Again</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { sendTelegramMessage } from '../services/telegram.js'

const form = ref({ name: '', email: '', message: '' })
const formStatus = ref('idle') // idle, sending, success, error
const errorMessage = ref('')

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) return
  formStatus.value = 'sending'
  errorMessage.value = ''

  try {
    await sendTelegramMessage(form.value)
    formStatus.value = 'success'
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      formStatus.value = 'idle'
    }, 4000)
  } catch (err) {
    console.error('Telegram notification error:', err)
    formStatus.value = 'error'
    errorMessage.value = err.message || 'Failed to send message via Telegram.'
  }
}
</script>
