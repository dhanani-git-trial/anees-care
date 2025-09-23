<!-- Container.svelte -->
<script lang="ts">
  import type { Props } from '.';
  let {
        children,
        heading = $bindable(''),
    }: Props = $props();
</script>

<div class="max-w-3xl mx-auto my-8 p-6 bg-[#c8aeb9] rounded-lg shadow-md">
  <h2 class="text-2xl text-[var(--color-purple)] font-normal mb-4">{heading}</h2>
  <div class="font-normal text-base leading-relaxed">
    {@render children?.()}
  </div>
</div>
