<template>
  <header class="header">
    <div class="top-bar">
      <p>Exclusive lounges welcome AJet passengers in domestic flights!</p>
    </div>
    <nav class="navbar">
      <div class="logo">
        <img src="@/assets/logo.png" alt="AJet Logo">
      </div>
      <ul class="nav-links">
        <li>Services</li>
        <li>City Guide</li>
        <li>FAQ</li>
      </ul>
      <div class="navbar-right">
        <select class="language-selector">
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
        <button class="login-btn">Login</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  background-color: #004b97;
  color: white;
}

.top-bar {
  background-color: #d8d8d8;
  text-align: center;
  padding: 5px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.language-selector, .login-btn {
  margin-left: 15px;
  border: none;
  background-color: white;
  color: #004b97;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
