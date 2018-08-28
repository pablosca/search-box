import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCheckCircle, faServer, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faCheckCircle, faServer, faSpinner);

Vue.component('icon', FontAwesomeIcon);