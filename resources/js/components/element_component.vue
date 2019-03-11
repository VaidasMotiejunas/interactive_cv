<template>
<div class="card">
    <!-- SKILLS -->
    <div v-if="name == 'skills'">
        <div class="card-header">
            <card-header v-on:toggle-show-data="toggleShowData" :name="upperFirstLetter(name)"></card-header>
        </div>
        <div v-if="showData" class="card-body">
            <p class="card-text">
                <span class="h6">{{arrayToList(this.data)}}</span>
            </p>
        </div>
    </div>
    <div v-else-if="name == 'languages'">
        <div class="card-header">
            <card-header v-on:toggle-show-data="toggleShowData" :name="upperFirstLetter(name)"></card-header>
        </div>
        <div v-if="showData" class="card-body">
            <h5 class="card-title">{{data.lang}}</h5>
            <p class="card-text" v-for="key in objectKeys(data.exp)" :key="key.id">
                {{key}}: {{arrayToList(data.exp[key])}}
            </p>
        </div>
    </div>
    <div v-else-if="name == 'education'">
        <div class="card-header">
            <card-header v-on:toggle-show-data="toggleShowData" :name="upperFirstLetter(name)"></card-header>
        </div>
        <div v-if="showData" class="card-body">
            <div v-for="study in data" :key="study.id">
                <h5 class="card-title">
                    <strong>{{study.degree}}</strong>
                    {{study.place}}
                    <small class="text-muted">{{study.date}}</small>
                </h5>
                <div v-if="(study.topic)" class="card-text">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{arrayToList(study.topic)}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="name == 'profile'">
        <div class="card-header">
            <card-header v-on:toggle-show-data="toggleShowData" :name="upperFirstLetter(name)"></card-header>
        </div>
        <div v-if="showData" class="card-body">
            <p class="card-text">
                {{data}}
            </p>
        </div>
    </div>
    <div v-else>
        <div class="card-header">
            <card-header v-on:toggle-show-data="toggleShowData" :name="upperFirstLetter(name)"></card-header>
        </div>
        <div v-if="showData" class="card-body">
            <div v-for="exp in data" :key="exp.id">
                <h5 class="card-title">
                    <strong>{{exp.name}}</strong>
                    {{exp.company}}
                    <small class="text-muted">{{exp.date}}</small>
                </h5>
                <div class="card-text">
                    <ul class="list-group-flush list-group-sm">
                        <li v-for="item in exp.info" :key="item.id" class="list-group-item">
                            {{item}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {

    props: ['element'],

    data() {
        return {
            data: this.element.data,
            name: this.element.fieldName,
            showData: true,
        }
    },

    computed: {

    },

    methods: {

        arrayToList(array) {
            return array.join(", ");
        },

        objectKeys(object) {
            return Object.keys(object);
        },

        upperFirstLetter(name) {
            return name.charAt(0).toUpperCase()+name.slice(1);
        },

        toggleShowData() {
            this.showData = !this.showData;
        }

    }
    
}

</script>