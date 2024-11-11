<template>
  <div id="app">
    <header>
      <h1>Zro Bank - Processamento de Pagamentos</h1>
    </header>
    <main>
      <PagamentoForm />
      <PagamentoList />
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
import PagamentoForm from './components/PagamentoForm.vue';
import PagamentoList from './components/PagamentoList.vue';

export default {
  components: {
    PagamentoForm,
    PagamentoList,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  background-color: #f5f5f5;
  color: #2c3e50;
  padding: 0 20px;
}

header {
  background-color: #007BFF; /* Azul */
  padding: 20px;
  text-align: center;
  color: white;
}

main {
  padding: 20px;
}

footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
