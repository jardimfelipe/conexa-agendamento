<script>
import formatDate from '@/utils/formatDate';

export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      calendarDate: '',
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      selectedEvent: '',
      hasOpenEvent: false,
    };
  },
  computed: {
    computedEvents() {
      const events = this.events.map(({ dataConsulta, paciente, observacao, medico }) => ({
        start: this.getFormattedDate(dataConsulta),
        name: `${dataConsulta.split(' ')[1]} | ${paciente}`,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        observacao,
        medico,
      }));
      return events;
    },
    getCalendarType() {
      return window.innerWidth > 768 ? 'month' : 'day';
    },
  },
  methods: {
    getFormattedDate(date) {
      const dateArray = date.split(' ');
      const currentDate = formatDate(dateArray[0]);
      const currentTime = dateArray[1];
      return new Date(`${currentDate}T${currentTime}:00`);
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.calendarDate = '';
    },
    prevMonth() {
      this.$refs.calendar.prev();
    },
    nextMonth() {
      this.$refs.calendar.next();
    },
    openEvent({ nativeEvent, event }) {
      if (this.hasOpenEvent) this.hasOpenEvent = false;
      this.selectedEvent = event;
      this.selectedElement = nativeEvent.target;
      setTimeout(() => {
        this.hasOpenEvent = true;
      }, 10);
      nativeEvent.stopPropagation();
    },
  },
};
</script>

<template>
  <div class="appointments-calendar">
    <v-sheet height="64">
      <v-toolbar flat color="white">
        <v-row align="center">
          <v-col cols="6">
            <v-btn
              outlined
              :disabled="!calendarDate"
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Hoje
            </v-btn>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-between">
            <v-btn fab text small color="grey darken-2" @click="prevMonth">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-btn fab text small color="grey darken-2" @click="nextMonth">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-sheet>
    <v-calendar
      v-model="calendarDate"
      ref="calendar"
      color="secondary"
      locale="pt"
      :type="getCalendarType"
      :events="computedEvents"
      :event-color="getEventColor"
      @click:event="openEvent"
    />
    <v-menu
      v-model="hasOpenEvent"
      v-if="selectedEvent"
      :close-on-content-click="false"
      :activator="selectedElement"
      offset-x
    >
      <v-card min-width="350px" flat>
        <v-toolbar :color="selectedEvent.color" dark>
          <v-toolbar-title> {{ selectedEvent.name }} </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p>Observações: {{ selectedEvent.observacao }}</p>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>
