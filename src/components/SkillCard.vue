<template>
    <div class="item">
        <div v-if="infos || favorite" class="info">
            <span v-if="favorite">💖</span>
            {{ infos }}
        </div>

        {{ name }}
    </div>
</template>

<script lang="ts">
export default {
    props: {
        name: String,
        infos: String,
        favorite: Boolean
    }
}
</script>
