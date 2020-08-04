<script>
import { format } from 'date-fns';

export default {
  data() {
    return {
      date: '',
      time: '',
      formatDate: '',
      modal: false,
      activeTab: 0,
      required: [(v) => !!v || 'Preencha este campo'],
    };
  },
  computed: {
    hasPickedDateAndTime() {
      return !!this.date && !!this.time;
    },
    formattedDate() {
      if (!this.hasPickedDateAndTime) return '';
      return format(new Date(`${this.date} ${this.time}:00`), 'dd/MM/yyyy HH:mm');
    },
  },
  methods: {
    nextTab() {
      this.activeTab = 1;
    },
    submitHandler() {
      this.modal = false;
      this.activeTab = 0;
      this.$emit('input', this.formattedDate);
    },
  },
};
</script>

<template>
  <v-dialog ref="dialog" v-model="modal" persistent width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        id="datetime-picker"
        :value="formattedDate"
        :rules="required"
        label="Escolha uma data"
        readonly
        v-bind="attrs"
        v-on="on"
        required
      />
    </template>
    <v-tabs v-model="activeTab">
      <v-tabs-slider></v-tabs-slider>
      <v-tab :disabled="this.date === ''">
        <v-icon>mdi-calendar</v-icon>
      </v-tab>
      <v-tab :disabled="this.time === ''">
        <v-icon>mdi-clock</v-icon>
      </v-tab>
      <v-tab-item>
        <v-date-picker locale="pt" v-model="date" @input="nextTab" />
      </v-tab-item>
      <v-tab-item>
        <v-time-picker v-model="time" header-color="primary"></v-time-picker>
      </v-tab-item>
    </v-tabs>
    <v-btn
      id="submit-date"
      color="secondary"
      :disabled="!hasPickedDateAndTime"
      @click="submitHandler"
      >Ok</v-btn
    >
  </v-dialog>
</template>
