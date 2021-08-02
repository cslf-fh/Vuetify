<template>
  <v-card id="form-inputs" class="background text-center" flat>
    <v-card-title class="text-h4">Form inputs & controls</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1"></code>
    </v-card-subtitle>
    <Autocompletes class="mb-4"></Autocompletes>
  </v-card>
</template>

<script>
import Autocompletes from '@/components/ui_components/form_inputs_and_controls/Autocompletes.vue';

export default {
  name: 'FormInputsAndControls',
  components: { Autocompletes },
};
</script>
