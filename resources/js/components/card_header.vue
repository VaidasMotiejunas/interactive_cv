<template>

    <div class="row">
        <div class="col-3">
            <a class="handle btn btn-outline-secondary" role="button"><font-awesome-icon icon="arrows-alt" size="sm"></font-awesome-icon></a>
            <span v-if="showData == true">
                <a @click="$emit('toggle-show-data'); showData = false" class="btn btn-outline-secondary" role="button"><font-awesome-icon icon="eye-slash" size="sm"></font-awesome-icon></a>
            </span>
            <span v-else>
                <a @click="$emit('toggle-show-data'); showData = true" class="btn btn-outline-secondary" role="button"><font-awesome-icon icon="eye" size="sm"></font-awesome-icon></a>
            </span>
            <a @click="deleteElement" class="btn btn-outline-secondary" role="button"><font-awesome-icon icon="trash-alt" size="sm"></font-awesome-icon></a>
        </div>
        <div class="col-9">
            <p class="h4"><font-awesome-icon v-bind:icon="chooseIcon" size="lg"></font-awesome-icon> {{name}}</p>
        </div>
    </div>
    
</template>

<script>

import { EventBus } from '../event/event-bus';

export default {
    props: ['name'],

    data() {
        return {
            showData: true,
        }
    },

    computed:{
        chooseIcon() {
            // return 'pencil-alt'
            switch (this.name.toLowerCase()) {
                case 'skills':
                    return 'pencil-alt';
                    break;
                case 'languages':
                    return 'comment';
                    break;
                case 'education':
                    return 'brain';
                    break;
                case 'profile':
                    return 'star';
                    break;
                case 'experience':
                    return 'lightbulb';
                    break;
                default:
                    break;
            }
        }
    },

    methods: {
        deleteElement: function () {
            EventBus.$emit('delete-element', this.name);
        },
    }
}
</script>

