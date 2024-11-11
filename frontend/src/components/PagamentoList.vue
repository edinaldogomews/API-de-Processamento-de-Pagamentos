<template>
    <div class="list-container">
      <h2>Lista de Pagamentos</h2>
      <ul>
        <li v-for="pagamento in pagamentos" :key="pagamento.id">
          {{ pagamento.valor }} {{ pagamento.moeda }} - {{ pagamento.status }}
          <button @click="deletarPagamento(pagamento.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pagamentos: [],
        
      };
    },
    async created() {
      await this.fetchPagamentos();
    },
    methods: {
      async fetchPagamentos() {
        try {
          const response = await fetch('http://localhost:3000/pagamentos');
          this.pagamentos = await response.json();
        } catch (error) {
          console.error('Erro:', error);
        }
      },
      async deletarPagamento(id) {
        try {
          const response = await fetch(`http://localhost:3000/pagamentos/${id}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            this.pagamentos = this.pagamentos.filter(pagamento => pagamento.id !== id);
            alert('Pagamento deletado com sucesso!');
          } else {
            alert('Erro ao deletar pagamento.');
          }
        } catch (error) {
          console.error('Erro:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .list-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background: #f9f9f9;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    padding: 6px 12px;
    background-color: #FF6347; /* Vermelho */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  button:hover {
    background-color: #E0365F; /* Vermelho mais escuro */
  }
  </style>
  