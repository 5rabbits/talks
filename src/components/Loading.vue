<template>
  <div class="loading">
    <h4>Cargando...</h4>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading {
  width: 12em;
  height: 8em;
  opacity: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  z-index: 100;
  border: 15px solid #9999;
  border-radius: 15px;
  box-shadow: 5px 5px 15px black;
}

h4 {
    font-size: 2em;
    font-weight: 300;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
</style>
