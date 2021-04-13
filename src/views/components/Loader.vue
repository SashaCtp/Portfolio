<template>
    <div class="loader" :class="this.type">
        <i class="fas fa-circle-notch fa-spin"></i>

        <p class="text-center" v-if="text">{{ this.text }}</p>
    </div>
</template>

<script>
export default{    
    props: {
        type: String,
        text: String
    }
}
</script>