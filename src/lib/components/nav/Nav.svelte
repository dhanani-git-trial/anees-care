<script lang="ts">
    import { Logo } from '$lib';
    import Phone from '~icons/fa6-solid/phone';
    import Fax from '~icons/fa-solid/fax';
    import Envelope from '~icons/fa6-solid/envelope';
</script>

<div class="sticky top-0 z-50 bg-[var(--color-lavender)] text-[var(--color-purple)] text-[17px] flex justify-center items-center p-3 space-x-2 sm:space-x-10">
  <!-- Logo Image -->
  <img class="h-24 animate-slide-right" src={Logo} alt="Anee's Care" />

  <!-- Phone -->
  <a href="tel:+18177290428" class="flex items-center">
    <Phone class="mr-3 w-5 h-5" />
    <span class="hidden sm:inline">817-729-0428</span>
  </a>

  <!-- Fax -->
  <a href="tel:+18045851960" class="flex items-center">
    <Fax class="mr-3 w-5 h-5" />
    <span class="hidden sm:inline">804-585-1960</span>
  </a>

  <!-- Email -->
  <a href="mailto:anee.care92@gmail.com" class="flex items-center">
    <Envelope class="mr-3 w-5 h-5" />
    <span class="hidden sm:inline">anee.care92@gmail.com</span>
  </a>
</div>
