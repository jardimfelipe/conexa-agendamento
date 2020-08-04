<script>
import AppointmentSchedule from '@/components/appointment-schedule/appointment-schedule.vue';

import { appointmentComputed, appointmentMethods } from '@/store/helpers/appointment';

export default {
  components: {
    AppointmentSchedule,
  },
  computed: {
    ...appointmentComputed,
  },
  methods: {
    ...appointmentMethods,
  },
  created() {
    this.fetchAppointmentList();
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <AppointmentSchedule :events="appointmentList" />
      </v-col>
    </v-row>
  </v-container>
</template>
