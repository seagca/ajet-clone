<template>

<div class="block faq-block lighter-bg">
        <section
          class="inner flex flex-column lg:flex-row justify-content-stretch align-items-top"
        >
          <div class="caption">
            <h2
              class="block text-center sm:text-left text-4xl lg:text-6xl mb-30"
            >
              Frequently Asked <span style="color: #008cff">Questions</span>
            </h2>
            <div class="cat-select">
              <label></label>
              <div class="dropdown-container bg-white border-round-lg">
                <img
                  src="@/assets/take-off-795e0bce.svg"
                  alt="AJet"
                  class="icon"
                />
                <div
                  id="faqDd"
                  class="p-dropdown p-component p-inputwrapper p-inputwrapper-filled dropdown full bg-transparent border-round-lg"
                  data-pc-name="dropdown"
                  data-pc-section="root"
                >
                  <input
                    type="text"
                    class="p-dropdown-label p-inputtext"
                    tabindex="0"
                    autocomplete="off"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="faqDd_list"
                    data-pc-section="input"
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
              </div>
            </div>
          </div>
          <div class="faq">
            <div id="faq-container">
              <div
                class="p-accordion p-component"
                data-pc-name="accordion"
                data-pc-section="root"
              >
                <div
                  class="p-accordion-tab p-accordion-tab-active"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="0"
                  data-p-active="true"
                >
                  <div
                    class="p-accordion-header p-highlight"
                    data-pc-section="header"
                    data-p-highlight="true"
                  >
                    <a
                      id="pv_id_9_0_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="true"
                      aria-controls="pv_id_9_0_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-up"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >Where can I buy my ticket?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_0_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_0_header_action"
                    data-pc-section="accordiontab.transition"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          You can purchase your ticket from AJet website, mobile
                          application, call center and authorized travel
                          agencies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="1"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_1_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_1_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >Which payment methods can I use to pay for my
                        ticket?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_1_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_1_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          We accept all VISA, Euro/MasterCard and American
                          Express cards for online ticket payments. In our call
                          center, only VISA and Euro/MasterCard are accepted.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="2"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_2_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_2_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >Through which channels can I change or refund my ticket
                        purchased on the AJet website?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_2_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_2_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          If your reservation does not have a state of emergency
                          (mandatory changes due to flight cancellation,
                          weather, etc.), you can make voluntary changes from
                          the Call Center or your agency. In case of state of
                          emergency, you can make changes through these channels
                          as well as the website or mobile application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="3"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_3_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_3_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >How can I view the fee rules through your
                        website?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_3_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_3_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          During ticketing, you can view the fare rules before
                          payment. After ticketing, you can access the content
                          of the e-mail sent to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="4"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_4_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_4_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >Are there any discounts on your flights? If so, can you
                        tell me the conditions?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_4_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_4_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          AJet offers special discounts for student, teacher,
                          soldier, veteran/widowed/ martyr family, Ministry of
                          National Defense protocol, disabled and funeral escort
                          passengers. In order for our passengers to benefit
                          from this discount, they must submit the necessary
                          documents before the flight. Please contact our Call
                          Center for detailed information about discounts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="5"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_5_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_5_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >Why are your flights overbooked?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_5_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_5_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          Airlines may overbook seats on their flights in order
                          to reduce the impact of no- shows (where a passenger
                          fails to board a flight despite having a confirmed
                          seat or ticket) and to allow passengers to travel on
                          their preferred flights. Although every effort is made
                          to ensure the travel of passengers with confirmed
                          reservations, seat availability may not be guaranteed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="6"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_6_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_6_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >May I know the expiration and refund date of my
                        ticket?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_6_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_6_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          The period of use for reserved tickets is 12 months
                          starting from the first flight date on the ticket and
                          the refund period is 24 months starting from the first
                          flight date. However, since the usage and refund
                          periods of tickets issued with some special fares
                          available on our flights may differ from the
                          above-mentioned periods according to the fare rules,
                          you can contact the sales office,
                          <router-link to="/en/contact" target="_blank">Call Center</router-link>
                          or your agency for more detailed information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="7"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_7_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_7_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >For tickets with multiple flights, what should I do if
                        I decide not to go on my flight?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_7_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_7_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          For tickets with more than one flight (round-trip,
                          connecting or multiple), flights must be used in
                          sequence. If you do not participate in any of the
                          flights, all of the remaining flights (including
                          return routes) will be automatically canceled if not
                          processed by calling our call center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-accordion-tab"
                  data-pc-section="root"
                  data-pc-name="accordiontab"
                  data-pc-index="8"
                  data-p-active="false"
                >
                  <div
                    class="p-accordion-header"
                    data-pc-section="header"
                    data-p-highlight="false"
                  >
                    <a
                      id="pv_id_9_8_header_action"
                      class="p-accordion-header-link p-accordion-header-action"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="pv_id_9_8_content"
                      data-pc-section="headeraction"
                      ><span
                        class="p-icon p-accordion-toggle-icon pi pi-chevron-down"
                      ></span
                      ><span
                        class="p-accordion-header-text"
                        data-pc-section="headertitle"
                        >Can I get information about AJet's discount for babies
                        and children?</span
                      ><!----></a
                    >
                  </div>
                  <div
                    id="pv_id_9_8_content"
                    class="p-toggleable-content"
                    role="region"
                    aria-labelledby="pv_id_9_8_header_action"
                    data-pc-section="accordiontab.transition"
                    style="display: none"
                  >
                    <div class="p-accordion-content" data-pc-section="content">
                      <div>
                        <p>
                          For detailed information about AJet's discount for
                          babies and children, please visit the fare notes page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

</template>

<script setup>


</script>

<script>
export default {
  name: "FaqBlock",
};
</script>
