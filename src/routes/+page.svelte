<script>
    import { Nav } from "$lib";
    import { Parallax } from "$lib";
    import { Container } from "$lib";
    import Footer from "$lib/components/footer/Footer.svelte";
</script>
<Nav/>
<Parallax/>
<div class="bg-white py-[1px]">
<Container heading="About Anee's Care">
    <p>
    Hello, my name is Anisa Merchant, the owner of Anee's Care, dedicated to providing top-notch exceptional care to the community, allowing patients to be in a familiar and secure environment. Our mission is to empower individuals to make informed choices about their care and support needs. We are committed to delivering personalized and compassionate services, so if you are looking for a good professional to help you, we encourage you to contact Anee's Care. We are here to help you and your loved ones get the care you need.
  </p>
</Container>
<Container heading="Services">
  <ul class="list-disc pl-8">
    <li>Service Facilitating for Consumer-Directed Programs</li>
    <li>Personal Care Assistance</li>
    <li>Respite Care Assistance</li>
    <li>Healthcare Consulting</li>
    <li>Wound Care</li>
    <li>Medication Management and Teaching</li>
    <li>Skilled Nursing</li>
    <li class="font-bold">and much more!</li>
  </ul>
</Container>
<Container heading="Contact Me">
<p class="text-center">If you have any questions or need assistance, please feel free to contact me!</p>
<div class="flex items-center justify-center">
  <div class="xs:mr-[20px] mr-auto">
    <p class="font-bold xs:text-[20px] text-[16px]">Anisa Merchant</p>
  </div>
  <div class="mt-[12px] sm:text-[16px] text-[14px]">
    <a
      href="tel:+18177290428"
      class="text-blue-700 underline hover:text-blue-900"
    >
      (817) 729-0428
    </a>
    <span class="italic text-[var(--color-purple)]">*Preferred*</span>
    <br>
    <a
      href="mailto:anee.care92@gmail.com"
      class="text-blue-700 underline hover:text-blue-900"
    >
      anee.care92@gmail.com
    </a>
  </div>
</div>
</Container>
</div>
<Footer/>