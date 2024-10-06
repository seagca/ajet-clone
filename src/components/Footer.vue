<template>
  <div class="block footer-block bg-aj-blue">
    <section>
      <div class="footer-content grid grid-nogutter">
        <div class="col-12 md:col-3">
          <div class="flex flex-column gap-6 mb-32 md:mb-40">
            <img src="@/assets/footer-logo.svg" class="md:w-5 w-3" alt="" />
          </div>
          <div class="flex gap-7">
            <div class="flex flex-column gap-3 mt-15">
              <div>
                <router-link to="/en/corporate"
                  class="path-item-label text-base text-tertiary-500 font-bold block mb-10">Corporate</router-link>
                <ul class="list-none flex flex-column gap-2 max-w-max w-full">
                  <li>
                    <router-link to="/en/corporate/about-us" class="text-white text-xs font-medium">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/en/corporate/vision-and-mission" class="text-white text-xs font-medium">Vision &amp;
                      Mission</router-link>
                  </li>
                  <li>
                    <router-link to="/en/corporate/our-policies" class="text-white text-xs font-medium">Our Policies</router-link>
                  </li>
                  <li>
                    <router-link to="/en/corporate/flight-points" class="text-white text-xs font-medium">Flight Points</router-link>
                  </li>
                  <li>
                    <router-link to="/en/frequently-asked-questions" class="text-white text-xs font-medium">Frequently Asked
                      Questions</router-link>
                  </li>
                  <li>
                    <router-link to="/en/corporate/rules-and-conditions" class="text-white text-xs font-medium">Rules and
                      Conditions</router-link>
                  </li>
                  <li>
                    <router-link to="/en/career" class="text-white text-xs font-medium">Career</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-column gap-3 mt-15">
              <div>
                <router-link to="/en/media" class="path-item-label text-base text-tertiary-500 font-bold block mb-10">Media</router-link>
                <ul class="list-none flex flex-column gap-2 font-normal">
                  <li>
                    <router-link to="/en/media/press-and-announcements" class="text-white text-xs">Press and Announcements</router-link>
                  </li>
                  <li>
                    <router-link to="/en/media/gallery" class="text-white text-xs">Gallery</router-link>
                  </li>
                </ul>
              </div>
              <div>
                <router-link to="/en/contact"
                  class="path-item-label text-base text-tertiary-500 font-bold block mb-10">Contact</router-link>
                <ul class="list-none flex flex-column gap-2 font-normal">
                  <li>
                    <router-link to="/en/baggage-tracking" class="text-white text-xs">Baggage Tracking</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 md:col mt-40 md:mt-0">
          <div class="flex flex-column md:gap-6">
            <div class="flex md:align-items-center justify-content-between gap-4 md:flex-row flex-column">
              <span class="social-media-label text-white text-base md:text-xl font-medium">Follow Us on Social
                Media</span>
              <ul class="flex align-items-center md:justify-content-between lg:w-5 md:w-6 w-auto gap-3">
                <li>
                  <a href="https://www.youtube.com/@AJetTR" target="_blank"
                    class="flex align-items-center justify-content-center">
                    <YoutubeIcon />
                    </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/ajet/" target="_blank"
                    class="flex align-items-center justify-content-center">
                    <FacebookIcon />
                    </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/a-jet/" target="_blank"
                    class="flex align-items-center justify-content-center">
                    <LinkedinIcon />
                    </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ajet/" target="_blank"
                    class="flex align-items-center justify-content-center">
                    <InstagramIcon />
                    </a>
                </li>
                <li>
                  <a href="https://twitter.com/AJET_TR" target="_blank"
                    class="flex align-items-center justify-content-center">
                    <TwitterIcon />
                    </a>
                </li>
              </ul>
            </div>
            <ul class="flex md:hidden align-items-center justify-content-start gap-4 mt-24">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.ajet.mobile&amp;hl=gsw"><img
                    src="@/assets/google-play-footer-mobile.svg" /></a>
              </li>
              <li>
                <a href="https://apps.apple.com/tr/app/ajet-ucuz-ucak-bileti/id6478282300?l=tr"><img
                    src="@/assets/app-store-footer-mobile.svg" /></a>
              </li>
            </ul>
            <img src="https://cdn.cloud.ajet.com/assets/ajet-mobile-app-en.png" class="hidden md:flex w-full" alt="" />
          </div>
        </div>
        <div class="col-12">
          <div
            class="flex justify-content-between py-24 md:align-items-center text-white md:flex-row flex-column border-top-1 mt-32 md:mt-56"
            style="border-color: rgba(255, 255, 255, 0.16)">
            <p class="text-sm md:block hidden">
              © 2024 AJet All rights of this site are reserved.
            </p>
            <ul class="flex md:ml-auto md:flex-row flex-column" style="gap: 24px">
              <!---->
              <li>
                <router-link to="/en/corporate/feedback-form" class="text-white font-medium text-xs">Feedback Form</router-link>
              </li>
              <li>
                <router-link to="/en/cookie-policy" class="text-white font-medium text-xs">Change Cookie Settings</router-link>
              </li>
              <li>
                <router-link to="/en/corporate/communication-center" class="text-white font-medium text-xs">Stay Informed About Us</router-link>
              </li>
              <li>
                <router-link to="/en/corporate/privacy-statement" class="text-white font-medium text-xs">Privacy Statement</router-link>
              </li>
              <li>
                <router-link to="/en/corporate/cookie-policy" class="text-white font-medium text-xs">Cookie Policy</router-link>
              </li>
            </ul>
            <p class="text-sm md:hidden block py-30">
              © 2024 AJet All rights of this site are reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FacebookIcon from '@/components/svg/FacebookIcon.vue';
import InstagramIcon from '@/components/svg/InstagramIcon.vue';
import LinkedinIcon from '@/components/svg/LinkedinIcon.vue';
import TwitterIcon from '@/components/svg/TwitterIcon.vue';
import YoutubeIcon from '@/components/svg/YoutubeIcon.vue';

export default {
  name: "AppFooter",
  components: {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
  },
};

</script>