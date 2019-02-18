<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-1">
                TODO Add butons to add buttons for adding info
            </div>
            <div class="col-11">
                <div class="row">
                    <div class="col-4">
                        Picture select
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-12">
                                <p class="lead">
                                    TODO neveikia reik normaliai su map getters ir cmputed prop pasigaut info
                                    {{ this.$store.getters.getDataByFieldName('contacts').name }}
                                </p>
                            </div>
                            <div class="col-12">
                                <ul class="list-group list-group-horizontal">
                                    <!-- <li class="list-group-item">{{ contacts[0].email }}</li>
                                    <li class="list-group-item">{{ contacts[0].tel }}</li>
                                    <li class="list-group-item">{{ contacts[0].linkedIn }}</li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <draggable
                            :list="mainList"
                            :options="{group: 'listItems', handle: '.handle', animation: '150'}"
                        >
                        <element-component v-for="(element) in mainList"
                            :key="element.id"
                            :element="element"
                            v-on:delete-element="deleteElement(element)"
                        ></element-component>
                        </draggable>
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import draggable from 'vuedraggable';

    export default {

        data() {
            return {
                mainList: [],
            }
        },

        components: {
            draggable
        },

        computed: {
            ...mapGetters([
                'personalData',
            ]),
        },
        
        methods: {

            addElement(type) {
                // TODO create method for adding
                console.log(type);
            },

            deleteElement(element) {
                // TODO create method for deleting
                console.log(element);
            }
        }

    }
</script>
