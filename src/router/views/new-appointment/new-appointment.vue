<script>
import DateTimePicker from '@/components/datetime-picker/datetime-picker.vue';

import { appointmentMethods } from '@/store/helpers/appointment';

export default {
  components: {
    DateTimePicker,
  },
  data() {
    return {
      model: {
        dataConsulta: '',
        paciente: '',
        observacao: '',
      },
      required: [(v) => !!v || 'Preencha este campo'],
    };
  },
  methods: {
    ...appointmentMethods,
    submitHandler() {
      const validateForm = this.$refs.form.validate();
      if (!validateForm) return;
      const {
        model: { dataConsulta, paciente, observacao },
      } = this;
      const request = { dataConsulta, paciente, observacao, idMedico: 0 };
      this.createNewAppointment(request).then((value) => {
        if (!value) return;
        this.$swal({
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        }).then(() => this.$router.push('/'));
      });
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form ref="form" @submit.prevent="submitHandler">
          <v-row>
            <v-col cols="12" md="6">
              <DateTimePicker v-model="model.dataConsulta" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="model.paciente"
                id="pacient"
                :rules="required"
                label="Nome do paciente"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea v-model="model.observacao" id="observation" label="Observações" />
            </v-col>
          </v-row>

          <v-btn color="secondary" id="submit-button" class="mr-4" type="submit"
            >Criar nova consulta</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
