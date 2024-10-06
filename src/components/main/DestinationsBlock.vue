<template>
    <div class="block destinations-block lighter-bg">
        <section class="inner">
          <div
            class="flex flex-column-reverse sm:flex-column align-items-stretch"
          >
            <div
              class="caption flex flex-row-reverse justify-content-space-between flex-wrap"
            >
              <div
                class="from-where flex flex-column sm:flex-row sm:justify-content-end align-items-stretch sm:align-items-center w-full xl:w-6 mb-18"
              >
                <span
                  class="text-sm font-bold pr-12 text-center sm:text-left pb-10 mt-30 sm:mt-0 sm:pb-0"
                  >From where would you like to fly?</span
                ><span
                  class="dropdown-container w-full sm:w-auto bg-white border-round-lg"
                  ><img
                    src="@/assets/take-off-795e0bce.svg"
                    alt="AJet"
                    class="icon"
                  />
                  <div
                    class="p-dropdown p-component p-inputwrapper dropdown bg-transparent border-round-lg"
                    data-pc-name="dropdown"
                    data-pc-section="root"
                    id="pv_id_7"
                  >
                    <input
                      type="text"
                      class="p-dropdown-label p-inputtext"
                      tabindex="0"
                      autocomplete="off"
                      role="combobox"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      aria-controls="pv_id_7_list"
                      data-pc-section="input"
                      placeholder="Please select location"
                    /><!---->
                    <div class="p-dropdown-trigger" data-pc-section="trigger">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="p-icon p-dropdown-trigger-icon"
                        aria-hidden="true"
                        data-pc-section="dropdownicon"
                      >
                        <path
                          d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div>
              <h2
                class="block w-full xl:w-6 text-4xl sm:text-6xl mb-18 text-center md:text-left"
              >
                <span style="color: #008cff">Flight</span> Points
              </h2>
            </div>
          </div>
          <div
            data-v-abe43e5f=""
            class="carousel-container"
            style="--e2e83e0c: 10px; --8144ae90: 0px; --37a81ce1: 50%"
          >
            <Swiper
              :modules="[Navigation, Pagination]"
              :breakpoints="{
                575: { 
                  slidesPerView: 1
                },
                768: { 
                  slidesPerView: 2
                },
                992: { 
                  slidesPerView: 2
                },
                1200: { 
                  slidesPerView: 4
                }
              }"
              :pagination="{
                el: '.controller .swp-paginate',
                bulletActiveClass: 'active',
                bulletClass: 'b',
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class='${className}' data-v-5c1187bc> </span>`;
                },
              }"
              :navigation="{ nextEl: '.controller .swp-next', prevEl: '.controller .swp-prev' , disabledClass: 'disabled' }"
              data-v-abe43e5f=""
              class="carousel multi"
            >
              <swiper-slide
                data-v-abe43e5f=""
                v-for="(item, index) in flightPointsSlider"
                :key="index"
              >
                <div
                  data-v-0e3cbb4c=""
                  data-v-abe43e5f=""
                  class="slide"
                  :style="item.style"
                >
                  <router-link
                    data-v-0e3cbb4c=""
                    :to="item.url"
                    class="content flex flex-column justify-content-stretch text-color border-1 border-gray-200 overflow-hidden"
                  >
                    <div data-v-0e3cbb4c="" class="box-image"></div>
                    <div
                      data-v-0e3cbb4c=""
                      class="box-info flex flex-column justify-content-between px-12 pb-18"
                    >
                      <div
                        data-v-0e3cbb4c=""
                        class="caption text-2xl font-bold mt-20"
                      >
                        {{ item.text }}
                      </div>
                      <div data-v-0e3cbb4c="" class="date">
                        To Fly at Advantageous Prices
                      </div>
                      <div
                        data-v-0e3cbb4c=""
                        class="pricing flex justify-content-start align-items-center"
                      >
                        <div data-v-0e3cbb4c="" class="price">Buy Ticket</div>
                      </div>
                      <div
                        data-v-0e3cbb4c=""
                        class="pricing-cover flex justify-content-between align-items-center"
                      >
                        <div
                          data-v-0e3cbb4c=""
                          class="price-container flex justify-content-between align-items-center"
                        >
                          <div data-v-0e3cbb4c="" class="price">Buy Ticket</div>
                        </div>
                        <div data-v-0e3cbb4c="" class="arrow">
                          <img
                            data-v-0e3cbb4c=""
                            src="@/assets/arrow-right-255a83a7.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
              <div
                data-v-5c1187bc=""
                data-v-abe43e5f=""
                class="slider-control controller"
                style="--cfbe0776: center; --0a8cc1e8: 87px"
              >
                <div data-v-5c1187bc="" class="swp-nav">
                  <div data-v-5c1187bc="" class="swp swp-prev">
                    <img
                      data-v-5c1187bc=""
                      src="@/assets/chevron-left-ab39b75e.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div data-v-5c1187bc="" class="swp-paginate">
                  <span data-v-5c1187bc="" class=""></span
                  ><span data-v-5c1187bc="" class=""></span
                  ><span data-v-5c1187bc="" class=""></span
                  ><span data-v-5c1187bc="" class=""></span>
                </div>
                <div data-v-5c1187bc="" class="swp-nav">
                  <div data-v-5c1187bc="" class="swp swp-next">
                    <img
                      data-v-5c1187bc=""
                      src="@/assets/chevron-right-b7eac6e0.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Swiper>

            <!---->
          </div>
        </section>
      </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import flightPointsSliderData from "@/data/flightPointsSliderData.json";

</script>

<script>
export default {
  name: "DestinationsBlock",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      flightPointsSlider: flightPointsSliderData,
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination],
    };
  },
};
</script>
