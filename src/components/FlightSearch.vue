<template>
  <div class="flight-search">
    <form>
      <label>
        From:
        <select>
          <option>Istanbul (SAW)</option>
          <option>Ankara (ESB)</option>
        </select>
      </label>
      <label>
        To:
        <select>
          <option>Please select</option>
          <option>Trabzon (TZX)</option>
        </select>
      </label>
      <label>
        Departure:
        <input type="date" />
      </label>
      <label>
        Return:
        <input type="date" />
      </label>
      <label>
        Passengers:
        <input type="number" value="1" />
      </label>
      <button type="submit">Search Flight</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FlightSearch',
}
</script>

<style scoped>
.flight-search form {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
}

label {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
}

button {
  background-color: #004b97;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
