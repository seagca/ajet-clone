<template>

<div class="block cities-block lighter-bg">
        <section class="inner">
          <div class="flex flex-column flex-start gap-5">
            <div
              class="flex flex-wrap align-items-center justify-content-center xl:justify-content-between"
            >
              <h2
                class="block w-full xl:w-6 text-4xl sm:text-6xl mb-18 text-center xl:text-left"
                style="font-size: 38px; flex: 1 1 auto; margin: 0px"
              >
                <span style="color: #008cff">All</span> Flight Points
              </h2>
              <div class="flex flex-column" style="gap: 10px">
                <div class="flex" style="gap: 10px">
                  <button
                    class="p-button p-component p-button-secondary p-button-outlined region-btn shadow-none active"
                    type="button"
                    aria-label="International"
                    style="padding: 6px 24px; gap: 10px"
                    data-pc-name="button"
                    data-pc-section="root"
                    data-pc-severity="secondary"
                  >
                    <!----><span class="p-button-label" data-pc-section="label"
                      >International</span
                    ><!----></button
                  ><button
                    class="p-button p-component p-button-secondary p-button-outlined region-btn shadow-none"
                    type="button"
                    aria-label="Domestic"
                    style="padding: 6px 24px; gap: 10px"
                    data-pc-name="button"
                    data-pc-section="root"
                    data-pc-severity="secondary"
                  >
                    <!----><span class="p-button-label" data-pc-section="label"
                      >Domestic</span
                    ><!---->
                  </button>
                </div>
                <div class="flex" style="gap: 10px">
                  <button
                    class="p-button p-component p-button-secondary p-button-outlined region-btn shadow-none active"
                    type="button"
                    aria-label="Europe"
                    style="padding: 6px 24px; gap: 10px"
                    data-pc-name="button"
                    data-pc-section="root"
                    data-pc-severity="secondary"
                  >
                    <!----><span class="p-button-label" data-pc-section="label"
                      >Europe</span
                    ><!----></button
                  ><button
                    class="p-button p-component p-button-secondary p-button-outlined region-btn shadow-none"
                    type="button"
                    aria-label="Asia"
                    style="padding: 6px 24px; gap: 10px"
                    data-pc-name="button"
                    data-pc-section="root"
                    data-pc-severity="secondary"
                  >
                    <!----><span class="p-button-label" data-pc-section="label"
                      >Asia</span
                    ><!----></button
                  ><button
                    class="p-button p-component p-button-secondary p-button-outlined region-btn shadow-none"
                    type="button"
                    aria-label="Africa"
                    style="padding: 6px 24px; gap: 10px"
                    data-pc-name="button"
                    data-pc-section="root"
                    data-pc-severity="secondary"
                  >
                    <!----><span class="p-button-label" data-pc-section="label"
                      >Africa</span
                    ><!---->
                  </button>
                </div>
              </div>
            </div>
            <div
              class="destination-card-container flex w-full gap-6 justify-content-between align-items-center border-round-lg"
            >
              <div
                class="destination-card-content w-full"
                style="align-self: stretch"
              >
                <ul class="destination-list-container">
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Netherlands</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/amsterdam-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Amsterdam</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Switzerland</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/basel-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Basel</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/en/city-guide/geneva-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Geneva</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/en/city-guide/zurich-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Zurich</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Serbia</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/belgrade-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Belgrade</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Germany</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/berlin-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Berlin</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Belgium</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/brussels-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Brussels</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Hungary</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/budapest-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Budapest</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Denmark</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/copenhagen-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Copenhagen</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Cyprus</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/lefkosa-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Lefkosa</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >United Kingdom</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/london-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >London</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >France</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/lyon-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Lyon</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/en/city-guide/paris-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Paris</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Italy</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/milan-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Milan</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/en/city-guide/rome-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Rome</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Kosovo</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/prishtina-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Prishtina</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Bosnia and Herzegovina</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/sarajevo-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Sarajevo</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            to="/en/city-guide/tuzla-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Tuzla</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >North Macedonia</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/skopje-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Skopje</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <div
                      class="p-divider p-component p-divider-horizontal p-divider-dotted p-divider-left"
                      style="justify-content: center; margin: 12px 0px"
                      role="separator"
                      aria-orientation="horizontal"
                      data-pc-name="divider"
                      data-pc-section="root"
                    >
                      <!---->
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Sweden</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/stockholm-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Stockholm</router-link
                          >
                        </li>
                      </div>
                    </div>
                  </div>
                  <div class="country-list flex flex-column">
                    <div class="flex flex-column justify-content-center gap-2">
                      <span class="country-label text-base font-semibold"
                        >Austria</span
                      >
                      <div class="flex flex-column gap-2">
                        <li>
                          <router-link
                            to="/en/city-guide/vienna-flight-ticket"
                            class="text-sm font-medium text-color-strong"
                            >Vienna</router-link
                          >
                        </li>
                      </div>
                    </div>
                    <!---->
                  </div>
                </ul>
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
  name: "CitiesBlock",
  components: {
  },
  data() {
    return {
    };
  },
  setup() {
    return {
    };
  },
};
</script>
