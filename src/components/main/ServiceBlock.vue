<template>
  <div class="block service-block light-bg">
    <section class="landing-page-main">
      <div class="schedule-tabs w-full">
        <div
          class="p-tabview p-component"
          data-pc-name="tabview"
          data-pc-section="root"
        >
          <div class="p-tabview-nav-container" data-pc-section="navcontainer">
            <!---->
            <div class="p-tabview-nav-content" data-pc-section="navcontent">
              <ul class="p-tabview-nav" role="tablist" data-pc-section="nav">
                <li
                  class="p-tabview-header p-highlight tab-item"
                  role="presentation"
                  data-pc-section="header"
                  data-pc-name="tabpanel"
                  data-p-highlight="true"
                  data-pc-index="0"
                  data-p-active="true"
                >
                  <a
                    id="pv_id_6_0_header_action"
                    class="p-tabview-nav-link p-tabview-header-action aj-font p-0 sm:p-8 font-medium flex justify-content-center"
                    tabindex="0"
                    role="tab"
                    aria-selected="true"
                    aria-controls="pv_id_6_0_content"
                    data-pc-section="headeraction"
                    ><!---->
                    <div class="text-container flex align-items-center">
                      <span class="tab-icon material-icons-round">search</span
                      ><span class="tab-content">Search Flight</span>
                    </div>
                  </a>
                </li>
                <li
                  class="p-tabview-header tab-item"
                  role="presentation"
                  data-pc-section="header"
                  data-pc-name="tabpanel"
                  data-p-highlight="false"
                  data-pc-index="1"
                  data-p-active="false"
                >
                  <a
                    id="pv_id_6_1_header_action"
                    class="p-tabview-nav-link p-tabview-header-action aj-font p-0 sm:p-8 font-medium flex justify-content-center"
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    aria-controls="pv_id_6_1_content"
                    data-pc-section="headeraction"
                    ><!---->
                    <div class="text-container flex align-items-center">
                      <span class="tab-icon material-icons-round"
                        >where_to_vote</span
                      ><span class="tab-content">Online Check-in</span>
                    </div>
                  </a>
                </li>
                <li
                  class="p-tabview-header tab-item"
                  role="presentation"
                  data-pc-section="header"
                  data-pc-name="tabpanel"
                  data-p-highlight="false"
                  data-pc-index="2"
                  data-p-active="false"
                >
                  <a
                    id="pv_id_6_2_header_action"
                    class="p-tabview-nav-link p-tabview-header-action aj-font p-0 sm:p-8 font-medium flex justify-content-center"
                    tabindex="-1"
                    role="tab"
                    aria-selected="false"
                    aria-controls="pv_id_6_2_content"
                    data-pc-section="headeraction"
                    ><!---->
                    <div class="text-container flex align-items-center">
                      <span class="tab-icon material-icons-round">flight</span
                      ><span class="tab-content">Flight Management</span>
                    </div>
                  </a>
                </li>
                <li
                  class="p-tabview-ink-bar"
                  role="presentation"
                  aria-hidden="true"
                  data-pc-section="inkbar"
                  style="width: 248px; left: 0px"
                ></li>
              </ul>
            </div>
            <!---->
          </div>
          <div class="p-tabview-panels" data-pc-section="panelcontainer">
            <div
              id="pv_id_6_0_content"
              class="p-tabview-panel tab-item"
              role="tabpanel"
              aria-labelledby="pv_id_6_0_header_action"
              data-pc-section="content"
              data-pc-name="tabpanel"
              data-pc-index="0"
              data-p-active="true"
            >
              <div
                class="p-card p-component border-noround lg:border-round-right-2xl border-round-bottom-2xl"
                style="
                  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 40px 0px;
                  border-top-left-radius: 0px;
                "
                data-pc-name="card"
                data-pc-section="root"
              >
                <!---->
                <div class="p-card-body px-16 sm:px-24" data-pc-section="body">
                  <!---->
                  <div class="p-card-content p-0" data-pc-section="content">
                    <!---->
                    <div class="flex mb-32 gap-4">
                      <div class="cursor-pointer">
                        <div
                          class="p-radiobutton p-component"
                          data-pc-name="radiobutton"
                          data-pc-section="root"
                        >
                          <div
                            class="p-hidden-accessible"
                            data-pc-section="hiddeninputwrapper"
                            data-p-hidden-accessible="true"
                          >
                            <input
                              id="oneway"
                              type="radio"
                              name="flightType"
                              data-pc-section="hiddeninput"
                              value="1"
                            />
                          </div>
                          <div
                            class="p-radiobutton-box"
                            data-pc-section="input"
                            data-p-highlight="false"
                            data-p-disabled="false"
                            data-p-focused="false"
                          >
                            <div
                              class="p-radiobutton-icon"
                              data-pc-section="icon"
                            ></div>
                          </div>
                        </div>
                        <label for="oneway" class="ml-8">One Way</label>
                      </div>
                      <div>
                        <div
                          class="p-radiobutton p-component p-radiobutton-checked"
                          data-pc-name="radiobutton"
                          data-pc-section="root"
                          selected=""
                        >
                          <div
                            class="p-hidden-accessible"
                            data-pc-section="hiddeninputwrapper"
                            data-p-hidden-accessible="true"
                          >
                            <input
                              id="roundtrip"
                              type="radio"
                              name="flightType"
                              data-pc-section="hiddeninput"
                              value="2"
                            />
                          </div>
                          <div
                            class="p-radiobutton-box p-highlight"
                            data-pc-section="input"
                            data-p-highlight="true"
                            data-p-disabled="false"
                            data-p-focused="false"
                          >
                            <div
                              class="p-radiobutton-icon"
                              data-pc-section="icon"
                            ></div>
                          </div>
                        </div>
                        <label for="roundtrip" class="ml-8">Round Trip</label>
                      </div>
                    </div>
                    <div class="grid">
                      <div class="col-12 md:col-12 lg:col-6 xl:col-6">
                        <div
                          class="flex gap-3 flex-column sm:flex-row"
                          mode="default"
                        >
                          <div class="relative w-full">
                            <div>
                              <div
                                class="flight-search-input-container w-full p-input-icon-left aj-input"
                              >
                                <div
                                  class="p-dropdown p-component p-inputwrapper p-dropdown-clearable p-inputwrapper-filled aj-input flight-search-dropdown text-sm md:text-base w-full"
                                  data-pc-name="dropdown"
                                  data-pc-section="root"
                                  style="background-color: rgb(248, 249, 252)"
                                  id="pv_id_3"
                                  title="Sabiha Gökçen Airport"
                                >
                                  <input
                                    type="text"
                                    class="p-dropdown-label p-inputtext flight-search-input text-sm md:text-base font-medium w-full pt-33 pr-35 pb-14 pl-48 departure-dropdown-input"
                                    style="
                                      background-color: rgb(248, 249, 252);
                                      line-height: 12px;
                                    "
                                    placeholder="Please Select"
                                    tabindex="0"
                                    autocomplete="off"
                                    role="combobox"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    aria-controls="pv_id_3_list"
                                    data-pc-section="input"
                                  /><span
                                    class="material-icons-round text-color-medium md-16"
                                    style="
                                      top: 22px;
                                      position: absolute;
                                      right: 16px;
                                    "
                                  >
                                    highlight_off
                                  </span>
                                  <div
                                    class="p-dropdown-trigger hidden"
                                    data-pc-section="trigger"
                                  >
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
                                  <!---->
                                </div>
                                <div
                                  class="absolute"
                                  style="left: 16px; top: 23px"
                                >
                                  <span
                                    class="material-icons-round md-20 text-color-medium"
                                  >
                                    flight_takeoff
                                  </span>
                                </div>
                                <small class="p-error" id="dd-error"></small
                                ><label style="left: 50px; top: 12px"
                                  >From</label
                                >
                              </div>
                            </div>
                            <!----><button
                              disabled=""
                              class="absolute z-1 switch-button"
                            >
                              <span class="material-icons-round md-20">
                                swap_horiz
                              </span>
                            </button>
                          </div>
                          <div class="w-full">
                            <div>
                              <div
                                class="flight-search-input-container w-full p-input-icon-left aj-input"
                              >
                                <div
                                  class="p-dropdown p-component p-inputwrapper p-dropdown-clearable aj-input flight-search-dropdown text-sm md:text-base w-full"
                                  data-pc-name="dropdown"
                                  data-pc-section="root"
                                  style="background-color: rgb(248, 249, 252)"
                                  id="pv_id_4"
                                >
                                  <input
                                    type="text"
                                    class="p-dropdown-label p-inputtext flight-search-input text-sm md:text-base font-medium w-full pt-33 pr-35 pb-14 pl-48 arrival-dropdown-input"
                                    style="
                                      background-color: rgb(248, 249, 252);
                                      line-height: 12px;
                                    "
                                    placeholder="Please Select"
                                    tabindex="0"
                                    autocomplete="off"
                                    role="combobox"
                                    aria-haspopup="listbox"
                                    aria-expanded="false"
                                    aria-controls="pv_id_4_list"
                                    data-pc-section="input"
                                  /><!---->
                                  <div
                                    class="p-dropdown-trigger hidden"
                                    data-pc-section="trigger"
                                  >
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
                                  <!---->
                                </div>
                                <div
                                  class="absolute"
                                  style="left: 16px; top: 23px"
                                >
                                  <span
                                    class="material-icons-round md-20 text-color-medium"
                                  >
                                    flight_land
                                  </span>
                                </div>
                                <small class="p-error" id="dd-error"></small
                                ><label style="left: 50px; top: 12px">To</label>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="col-12 md:col-6 lg:col-4 xl:col-4">
                        <div class="flex gap-3">
                          <div class="relative w-full">
                            <div
                              data-v-2bc8a5df=""
                              class="date-picker-container"
                            >
                              Departure
                            </div>
                            <div
                              data-v-2bc8a5df=""
                              class="dp__main dp__theme_light"
                              data-datepicker-instance=""
                            >
                              <div>
                                <!---->
                                <div class="dp__input_wrap">
                                  <!----><input
                                    class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg"
                                    inputmode="none"
                                    placeholder="Please Select"
                                    autocomplete="off"
                                    aria-label="Datepicker input"
                                  />
                                  <div>
                                    <span class="dp__input_icon"
                                      ><span
                                        data-v-2bc8a5df=""
                                        class="material-icons-round md-20"
                                        style="color: rgb(126, 132, 146)"
                                        >calendar_month</span
                                      ></span
                                    ><!---->
                                  </div>
                                  <!----><!---->
                                </div>
                              </div>
                              <div disabled="true"><!----></div>
                            </div>
                          </div>
                          <div class="relative w-full">
                            <div
                              data-v-2bc8a5df=""
                              class="date-picker-container"
                            >
                              Return
                            </div>
                            <div
                              data-v-2bc8a5df=""
                              class="dp__main dp__theme_light"
                              data-datepicker-instance=""
                            >
                              <div>
                                <!---->
                                <div class="dp__input_wrap">
                                  <!----><input
                                    class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg"
                                    inputmode="none"
                                    placeholder="Please Select"
                                    autocomplete="off"
                                    aria-label="Datepicker input"
                                  />
                                  <div>
                                    <span class="dp__input_icon"
                                      ><span
                                        data-v-2bc8a5df=""
                                        class="material-icons-round md-20"
                                        style="color: rgb(126, 132, 146)"
                                        >calendar_month</span
                                      ></span
                                    ><!---->
                                  </div>
                                  <!----><!---->
                                </div>
                              </div>
                              <div disabled="true"><!----></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 md:col-6 lg:col-2 xl:col-2">
                        <div class="relative w-full" id="passengerCountWrapper">
                          <div
                            class="p-dropdown p-component p-inputwrapper p-disabled dropdown-with-icon passenger-dropdown"
                            data-pc-name="dropdown"
                            data-pc-section="root"
                            value="1"
                            id="pv_id_5"
                          >
                            <span
                              id="passenger"
                              class="p-dropdown-label p-inputtext p-0 w-full"
                              tabindex="-1"
                              role="combobox"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              aria-controls="pv_id_5_list"
                              aria-disabled="true"
                              data-pc-section="input"
                            >
                              <div class="input-with-icon">
                                <span
                                  class="material-icons-round md-20"
                                  style="color: rgb(126, 132, 146)"
                                  >person</span
                                ><label
                                  >Passengers
                                  <div>1 Passenger</div>
                                </label>
                              </div> </span
                            ><!---->
                            <div
                              class="p-dropdown-trigger"
                              data-pc-section="trigger"
                            >
                              <span
                                class="p-dropdown-trigger-icon false"
                                aria-hidden="true"
                                data-pc-section="dropdownicon"
                              ></span>
                            </div>
                          </div>
                          <small class="p-error" id="dd-error"></small
                          ><!---->
                        </div>
                      </div>
                      <div
                        class="flex flex-column justify-content-center sm:flex-row sm:justify-content-end sm:align-items-center w-full mt-16"
                        style="gap: 24px"
                      >
                        <button
                          class="aj-button primary large search-button"
                          type="button"
                        >
                          <!---->
                          Search Flight
                          <!---->
                        </button>
                      </div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
            <!----><!---->
          </div>
        </div>
      </div>
    </section>
    <section data-v-29bf10e7="" class="inner">
      <!---->
      <h2 data-v-29bf10e7="" class="my-30 sm:my-60 text-center">
        You can get more detailed information by clicking on our services.
      </h2>
      <div
        data-v-29bf10e7=""
        class="services flex justify-content-space-around align-items-center flex-wrap"
      >
        <router-link
          data-v-29bf10e7=""
          to="/en/services/seat-selection"
          class="block w-full xl:w-4 p-12"
        >
          <div
            data-v-29bf10e7=""
            class="border-round-xl bg-white border-1 border-gray-200 px-20 pt-40 pb-35 flex flex-row sm:flex-column sm:align-items-center"
          >
            <div
              data-v-29bf10e7=""
              class="flex align-items-center justify-content-start py-10 h-5rem w-3 sm:w-auto flex-grow-0"
            >
              <span data-v-29bf10e7="" class="material-icons text-7xl"
                >flight_class</span
              >
            </div>
            <h3
              data-v-29bf10e7=""
              class="text-base sm:text-center text-color sm:pt-20 flex-grow-1 flex align-items-center"
            >
              Seat Selection
            </h3>
          </div> </router-link
        ><router-link
          data-v-29bf10e7=""
          to="/en/services/excess-baggage"
          class="block w-full xl:w-4 p-12"
        >
          <div
            data-v-29bf10e7=""
            class="border-round-xl bg-white border-1 border-gray-200 px-20 pt-40 pb-35 flex flex-row sm:flex-column sm:align-items-center"
          >
            <div
              data-v-29bf10e7=""
              class="flex align-items-center justify-content-start py-10 h-5rem w-3 sm:w-auto flex-grow-0"
            >
              <span data-v-29bf10e7="" class="material-icons text-7xl"
                >luggage</span
              >
            </div>
            <h3
              data-v-29bf10e7=""
              class="text-base sm:text-center text-color sm:pt-20 flex-grow-1 flex align-items-center"
            >
              Excess Baggage
            </h3>
          </div> </router-link
        ><router-link
          data-v-29bf10e7=""
          to="/en/services/sports-equipment"
          class="block w-full xl:w-4 p-12"
        >
          <div
            data-v-29bf10e7=""
            class="border-round-xl bg-white border-1 border-gray-200 px-20 pt-40 pb-35 flex flex-row sm:flex-column sm:align-items-center"
          >
            <div
              data-v-29bf10e7=""
              class="flex align-items-center justify-content-start py-10 h-5rem w-3 sm:w-auto flex-grow-0"
            >
              <span data-v-29bf10e7="" class="material-icons text-7xl"
                >downhill_skiing</span
              >
            </div>
            <h3
              data-v-29bf10e7=""
              class="text-base sm:text-center text-color sm:pt-20 flex-grow-1 flex align-items-center"
            >
              Sports Equipment
            </h3>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "ServiceBlock",
  components: {},
  data() {
    return {};
  },
  setup() {
    return {};
  },
};
</script>
