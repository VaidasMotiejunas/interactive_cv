<template>
    <div class="container">
        <div class="row">
            <div class="col-2">
                    <!-- TODO create buttons dynamicaly based on personal data from store -->
                <div class="btn-group-vertical" role="group" aria-label="Left toolbar">
                    <button @click="showContacts = true" type="button" class="btn btn-secondary" :disabled="dynamicContactButton">Show Contacts</button>
                    <button @click="addElement('skills')" type="button" class="btn btn-secondary" :disabled="dynamicButtons('skills')" >Skills</button>
                    <button @click="addElement('languages')" type="button" class="btn btn-secondary" :disabled="dynamicButtons('languages')" >Languages</button>
                    <button @click="addElement('education')" type="button" class="btn btn-secondary" :disabled="dynamicButtons('education')" >Education</button>
                    <button @click="addElement('profile')" type="button" class="btn btn-secondary" :disabled="dynamicButtons('profile')" >About me</button>
                    <button @click="addElement('experience')" type="button" class="btn btn-secondary" :disabled="dynamicButtons('experience')" >Experience</button>
                </div>
            </div>
            <div class="col-10">
                <div class="row">
                    <div class="col-4">
                        Picture select
                    </div>
                    <div class="col-8">
                        <div v-if="showContacts" class="card">
                            <div class="card-header">
                                <p class="h4">
                                    {{changeContacts.name}}
                                </p>
                            </div>
                            <div class="card-body">
                                 <ul class="list-group list-group-sm">
                                    <li class="list-group-item"><font-awesome-icon icon="at" size="lg"></font-awesome-icon> {{changeContacts.email}}</li>
                                    <li class="list-group-item"><font-awesome-icon icon="phone" size="lg"></font-awesome-icon> {{changeContacts.tel}}</li>
                                    <li class="list-group-item"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]" size="lg"></font-awesome-icon> {{changeContacts.linkedIn}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <draggable
                            :list="mainList"
                            group="listItems"
                            handle=".handle"
                            @start="drag=true" 
                            @end="drag=false"
                        >
                            <!-- key has to be existing value for draggable to corectly update view -->
                            <element-component v-for="(element) in mainList" :key="element.fieldName"
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
import { EventBus } from '../event/event-bus';

    export default {

        data() {
            return {
                mainList: [],
                contacts: [],
                showContacts: false,
            }
        },

        components: {
            draggable
        },

        mounted () {
            this.getDataField('contacts');

            EventBus.$on('delete-element', (payload) => {
                this.deleteElement(payload);
            });
        },

        computed: {
            ...mapGetters({
                personalData: 'personalData',
            }),

            /**
             * Toggles disabled attribute based on showContacts data property
             */
            dynamicContactButton() {
                return this.showContacts ? true : false;
            },

            // TODO is it really neccessary to have a computed property for this ?
            changeContacts: {
                get() {
                    return this.contacts;
                },
                set(contacts) {
                    this.contacts = contacts;
                }
            }
        },
        
        methods: {

            /**
             * Toggles disabled attribute
             * Returns true if showContcts == false
             * Returns true if the element coresponding to button type is already added to mainList
             */
            dynamicButtons(type) {

                if(this.showContacts)
                {
                    var disabled = false;
                    this.mainList.forEach(element => {
                        if(type == element.fieldName)
                        {
                            disabled = true;
                        }
                    })
                    return disabled;
                }
                else
                {
                    return true;
                }

            },

            getDataField(name, prop) {
                this.personalData.forEach(element => {
                    if(element.fieldName == name)
                    {
                        // console.log(element.data[prop]);
                        this.changeContacts = element.data;
                    }
                });
            },

            /**
             * Inserts new element from vuex store to mainList by provided element type
             * Skips if element is already in the array
             */
            addElement(type) {
                var element = this.$store.getters.getFieldByName(type);

                var addElement = true;
                this.mainList.forEach(element => {
                    if(element.fieldName == type)
                    {
                        addElement = false;
                    }
                });

                if(addElement)
                {
                    this.mainList.push(element);
                }
            },

            /**
             * Deletes an element from mainList based on emited element name
             */
            deleteElement(name) {
                this.mainList.forEach(element => {
                    if(element.fieldName == name.toLowerCase())
                    {
                        this.mainList.splice(this.mainList.indexOf(element), 1);
                    }
                })
            }
        }

    }
</script>
