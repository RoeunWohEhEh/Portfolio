<template>
  <section id="contacts" class="scroll-mt-24">
    <div class="flex items-center gap-3 mb-12">
      <span class="text-brand-teal font-mono text-xl">#</span>
      <h2 class="text-3xl font-bold font-heading text-white">contacts</h2>
      <div class="h-[1px] bg-gradient-to-r from-brand-teal to-transparent w-32 hidden sm:block"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <!-- Text and Contact Box -->
      <div class="lg:col-span-5 space-y-6">
        <h3 class="text-xl font-bold text-white font-heading">Let's build something epic</h3>
        <p class="text-sm text-gray-400 leading-relaxed font-sans">
          I am open to freelance collaborations, full-time contracts, and design consultations. Have a question or
          project idea? Fire away.
        </p>

        <div class="border border-white/5 bg-slate-900/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
          <div class="text-sm font-bold text-white font-heading">Contact Details</div>

          <div
            class="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors duration-200">
            <div
              class="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-purple">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <div class="text-[10px] text-gray-500 font-mono">EMAIL ME DIRECTLY</div>
              <a href="mailto:sekchamroeun53@gmail.com"
                class="font-medium text-gray-200 hover:underline">sekchamroeun53@gmail.com</a>
            </div>
          </div>

          <div
            class="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors duration-200">
            <div
              class="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-teal">
              <i class="fab fa-linkedin"></i>
            </div>
            <div>
              <div class="text-[10px] text-gray-500 font-mono">LINKEDIN PROFILE</div>
              <a href="https://linkedin.com/in/sek-chamroeun" target="_blank" rel="noopener noreferrer"
                class="font-medium text-gray-200 hover:underline">linkedin.com/in/sek-chamroeun</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Contact Form -->
      <div class="lg:col-span-7">
        <form @submit.prevent="submitForm"
          class="border border-white/5 bg-slate-900/20 backdrop-blur-sm rounded-2xl p-6 space-y-4 shadow-xl">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label for="name" class="text-xs font-semibold text-gray-400 font-sans">Full Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="John Doe"
                class="w-full px-4 py-2.5 bg-slate-950/70 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300" />
            </div>
            <div class="space-y-1.5">
              <label for="email" class="text-xs font-semibold text-gray-400 font-sans">Email Address</label>
              <input type="email" id="email" v-model="form.email" required placeholder="john@example.com"
                class="w-full px-4 py-2.5 bg-slate-950/70 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300" />
            </div>
          </div>
          <div class="space-y-1.5">
            <label for="message" class="text-xs font-semibold text-gray-400 font-sans">Message</label>
            <textarea id="message" v-model="form.message" required rows="4"
              placeholder="Describe your project concept..."
              class="w-full px-4 py-2.5 bg-slate-950/70 border border-white/5 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 resize-none"></textarea>
          </div>

          <!-- Error Feedback Banner -->
          <div v-if="formStatus === 'error'" class="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-start gap-2.5">
            <i class="fas fa-exclamation-circle text-rose-400 text-sm mt-0.5 shrink-0"></i>
            <div>
              <p class="font-semibold">{{ errorMessage }}</p>
              <p class="text-[11px] text-rose-400/80 mt-0.5">Please check your <code class="bg-rose-950/50 px-1 py-0.5 rounded text-rose-200">.env</code> configuration or network connection.</p>
            </div>
          </div>

          <!-- Button States -->
          <button type="submit" :disabled="formStatus === 'sending' || formStatus === 'success'"
            class="w-full py-3 px-6 rounded-xl text-white font-semibold text-sm cursor-pointer shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            :class="formStatus === 'success'
              ? 'bg-emerald-600 shadow-emerald-500/10'
              : (formStatus === 'sending' ? 'bg-brand-purple/70 cursor-not-allowed' : (formStatus === 'error' ? 'bg-rose-600 hover:bg-rose-500' : 'bg-brand-purple hover:bg-brand-purple/90 hover:shadow-brand-purple/20 hover:scale-[1.01] active:scale-[0.99]'))">
            <span v-if="formStatus === 'idle'">Send Message <i class="fas fa-paper-plane text-xs ml-1"></i></span>
            <span v-else-if="formStatus === 'sending'" class="flex items-center gap-2">
              <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              Sending...
            </span>
            <span v-else-if="formStatus === 'success'" class="flex items-center gap-1.5 animate-bounce">
              <i class="fas fa-check-circle"></i> Message Sent to Telegram!
            </span>
            <span v-else-if="formStatus === 'error'" class="flex items-center gap-1.5">
              <i class="fas fa-redo"></i> Try Sending Again
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
