<template>

    <div class="row">
        <div class="col-2">
            <a class="handle btn btn-outline-secondary" role="button"><font-awesome-icon icon="arrows-alt" size="sm"></font-awesome-icon></a>
            <a class="btn btn-outline-secondary" role="button"><font-awesome-icon icon="eye-slash" size="sm"></font-awesome-icon></a>
        </div>
        <div class="col-10">
            <p class="h4">{{name}}</p>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['name'],
}
</script>

