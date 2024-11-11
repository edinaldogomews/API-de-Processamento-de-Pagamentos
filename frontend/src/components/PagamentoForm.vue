<template>
  <div class="form-container">
    <h2>Criar Pagamento</h2>
    <form @submit.prevent="submitPagamento">
      <div class="form-group">
        <label for="valor">Valor:</label>
        <input v-model="pagamento.valor" type="number" id="valor" required />
      </div>
      <div class="form-group">
        <label for="moeda">Moeda:</label>
        <select v-model="pagamento.moeda" id="moeda" required>
          <option disabled value="">Selecione uma moeda</option>
          <option v-for="moeda in moedas" :key="moeda" :value="moeda">{{ moeda }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="status">Status:</label>
        <select v-model="pagamento.status" id="status" required>
          <option disabled value="">Selecione um status</option>
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>
      <button type="submit">Criar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagamento: {
        valor: '',
        moeda: '',
        status: '',
      },
      moedas: ['BRL', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD'],
      statusList: ['Pendente', 'Em processamento', 'Completo', 'Falhado', 'Cancelado'],
    };
  },
  methods: {
    async submitPagamento() {
      try {
        const response = await fetch('http://localhost:3000/pagamentos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.pagamento),
        });
        if (response.ok) {
          alert('Pagamento criado com sucesso!');
          this.pagamento = { valor: '', moeda: '', status: '' };
        } else {
          alert('Erro ao criar pagamento.');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
  background-color: #28B463; /* Verde */
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
button:hover {
  background-color: #239B56; /* Verde mais escuro */
}
</style>
