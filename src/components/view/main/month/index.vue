<template>
</template>

<script>
import '@fullcalendar/core/vdom'
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
     name: 'index.vue',
     description: '',
     components: {
          FullCalendar
     },
     data() {
          return {
               calendarOptions: {
                    plugins: [
                         dayGridPlugin,
                         timeGridPlugin,
                         interactionPlugin // needed for dateClick
                    ],
                    headerToolbar: {
                         left: '',
                         center: '',
                         right: ''
                    },
                    initialView: 'dayGridMonth',
                    // initialEvents: {
                    //      id: 1,
                    //      title: 'All-day event',
                    //      start: new Date().toISOString().replace(/T.*$/, '')
                    // }, // alternatively, use the `events` setting to fetch from a feed
                    // editable: true,
                    // selectable: true,
                    // selectMirror: true,
                    // dayMaxEvents: true,
                    // weekends: true,
                    // select: this.handleDateSelect,
                    // eventClick: this.handleEventClick,
                    // eventsSet: this.handleEvents
                    /* you can update a remote database when these fire:
                    eventAdd:
                    eventChange:
                    eventRemove:
                    */
               },
               currentEvents: []
          }
     }
}
</script>

<style scoped>

</style>
