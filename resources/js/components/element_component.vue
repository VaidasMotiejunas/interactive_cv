<template>
    <!-- ELEMENT CARD -->
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-10 col-lg-11">
                    <a :href="channel.permalink" target="blank">{{channel.title}}</a>
                </div>
                <div class="col-md-2 col-lg-1">
                    <div v-if="showFeed">
                        <button @click="toggleFeed()" type="button" class="btn btn-primary">hide</button>
                    </div>
                    <div v-else>
                        <button @click="toggleFeed()" type="button" class="btn btn-primary">show</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- FEED DATA -->
        <div v-show="showFeed">
            <ul class="list-group list-group-flush">
                <button @click="showModal(feed)" type="button" class="list-group-item list-group-item-action" data-toggle="modal" data-target="#exampleModal" 
                    v-for="(feed) in channel.items" 
                    :key="feed.id"
                >
                    {{feed.title}}
                </button>
            </ul>
        </div>

    </div>
    
</template>
<script>
export default {
    
}
</script>

