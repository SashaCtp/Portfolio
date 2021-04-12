<template>
    <div>
        <h1 class="placeholder" v-if="this.type === 'h1'" :class="size"></h1>
        <h2 class="placeholder" v-if="this.type === 'h2'" :class="size"></h2>
    </div>
</template>

<script>
export default{
    props: {
        type: String,
        size: String
    }
}
</script>