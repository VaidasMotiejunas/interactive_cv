<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <div class="btn-group-vertical" role="group" aria-label="Left toolbar">
                    <!-- TODO create buttons dynamicaly based on personal data from store -->
                    <button @click="addElement('skills')" type="button" class="btn btn-secondary">Skills</button>
                    <button @click="addElement('languages')" type="button" class="btn btn-secondary">Languages</button>
                    <button @click="addElement('education')" type="button" class="btn btn-secondary">Education</button>
                    <button @click="addElement('profile')" type="button" class="btn btn-secondary">About me</button>
                    <button @click="addElement('experience')" type="button" class="btn btn-secondary">Experience</button>
                </div>
            </div>
            <div class="col-10">
                <div class="row">
                    <div class="col-4">
                        Picture select
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-12">
                                <p class="lead">{{ changeContacts.name }}</p>
                            </div>
                            <div class="col-12">
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item">{{ changeContacts.email }}</li>
                                    <li class="list-group-item">{{ changeContacts.tel }}</li>
                                    <li class="list-group-item">{{ changeContacts.linkedIn }}</li>
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
                                @change="changeElementOrder"
                                :key="element.id"
                                :element="element"
                                :options="{group: 'main', handle: '.handle', animation: '150'}"
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
                contacts: [],
            }
        },

        components: {
            draggable
        },

        mounted () {
            this.getDataField('contacts');
        },

        computed: {
            ...mapGetters({
                personalData: 'personalData',
            }),

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

            changeElementOrder(){
                //TODO change element order in mainList
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

            deleteElement(element) {
                // TODO create method for deleting
                console.log(element);
            }
        }

    }
</script>
