<template>
  <header>
    <div class="top-bar-bg-extend">
    <div class="header-wrapper">
    <transition name="slide-up" @after-leave="isVisible = false">
    <!-- Top notification bar -->
    <div 
      v-if="isVisible" 
      class="top-bar" 
      @mouseover="pauseSlideshow" 
      @mouseleave="resumeSlideshow"
      @touchstart="handleTouchStart" 
      @touchmove="handleTouchMove" 
      @touchend="handleTouchEnd"
    >
      <div class="notification-container">
        <div class="notification" :class="animationDirection">
          <a :href="notifications[currentNotification].link" class="notification-link">
              <span>📍</span>
              {{ notifications[currentNotification].text }}
            </a>
        </div>
      </div>
      <div class="navigation-buttons">
        <!-- Back and forward buttons -->
        <button @click="slideBack">--</button>
        <button @click="slideForward">></button>
        <button @click="closeNotification">X<!-- Close icon --></button>
      </div>
    </div>
    </Transition>
    </div>

    
    <div class="main-bg-extend">
    <!-- Main header -->
    <div class="main-header">
      <!-- Logo -->
      <div class="logo">
        <!-- Image placeholder -->
        <img src="logo.png" alt="Logo" />
      </div>

      <!-- Navigation links -->
      <nav>
        <ul>
          <li><a href="#">Services <span><!-- dropdown icon --></span></a></li>
          <li><a href="#">City Guide</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>

      <!-- Language and Login -->
      <div class="header-actions">
        <div class="language-switcher">
          <span><!-- Globe icon --></span>
          <span>EN</span>
          <span><!-- dropdown icon --></span>
        </div>
        <button class="login-button">
          Log in <span><!-- login icon --></span>
        </button>
      </div>
    </div>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          text: 'Ticket Sales for Istanbul Sabiha Gökçen – Tuzla Have Started!',
          link: 'https://example.com/ticket-sales'
        },
        {
          text: 'New routes added for summer!',
          link: 'https://example.com/new-routes'
        },
        {
          text: 'Special discounts for early bookings!',
          link: 'https://example.com/discounts'
        }
      ],
      currentNotification: 0,
      interval: null,
      animationDirection: 'slide-in-right',
      isVisible: true,
      startX: 0,
      endX:0
    };
  },
  methods: {
    startSlideshow() {
      this.interval = setInterval(() => {
        this.slideForward();
      }, 5000);
    },
    pauseSlideshow() {
      clearInterval(this.interval);
    },
    resumeSlideshow() {
      this.startSlideshow();
    },
    slideForward() {
      this.animationDirection = 'slide-out-left'; // Slide out current notification
      setTimeout(() => {
        this.currentNotification =
          (this.currentNotification + 1) % this.notifications.length;
        this.animationDirection = 'slide-in-right'; // Slide in new notification
      }, 300); // Match the animation duration
    },
    slideBack() {
      this.animationDirection = 'slide-out-right'; // Slide out current notification
      setTimeout(() => {
        this.currentNotification =
          (this.currentNotification - 1 + this.notifications.length) %
          this.notifications.length;
        this.animationDirection = 'slide-in-left'; // Slide in new notification
      }, 300); // Match the animation duration
    },
    closeNotification() {
      this.isVisible = false;
    }
  },
  handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.endX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      if (this.startX - this.endX > 50) {
        // Swipe left (next slide)
        this.slideForward();
      } else if (this.endX - this.startX > 50) {
        // Swipe right (previous slide)
        this.slideBack();
      }
    },
  mounted() {
    this.startSlideshow();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
/* Top Bar Notification */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3e9f0;
  padding: 10px;
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
  margin: 0;
}

.top-bar-bg-extend {
background-color: #e3e9f0;
 width  : 100%;
}

.main-bg-extend {
  background-color: #0073e6;
}

.notification-container {
  text-decoration: none;
  display: flex;
  width: 80%;
  overflow: hidden;
  flex: 1;
}

.header-wrapper{
  max-width: 1200px;
  margin: 0 auto;
}
.notification {
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  position: relative;
  white-space: nowrap;
  transition: transform 0.3s ease-in-out;
  flex: 1 /* Adjust for smoother transitions */
}

.notification-link{
  text-decoration: none;
  flex: 1;
}

/* Sliding animations */
.slide-in-right {
  transform: translateX(100%);
  animation: slideInFromRight 0.3s forwards;
}

.slide-out-left {
  transform: translateX(0%);
  animation: slideOutToLeft 0.3s forwards;
}

.slide-in-left {
  transform: translateX(-100%);
  animation: slideInFromLeft 0.3s forwards;
}

.slide-out-right {
  transform: translateX(0%);
  animation: slideOutToRight 0.3s forwards;
}

/* Keyframes for sliding animations */
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes slideOutToLeft {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes slideOutToRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.navigation-buttons {
  display: flex;
}

.navigation-buttons button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-up-leave-to {
  transform: translateY(-100%);
}



/* Main Header */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0073e6;
  padding: 15px;
  margin: 0 auto;
  max-width: 1200px;
}

/* Add more styles for logo, navigation, and buttons */
</style>
