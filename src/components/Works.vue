<template>
        <div class="cards">
        <img :src="require(`../assets/images/${project.image}.png`)" alt="">
        <div class="info">
            <h4>{{project.title}}</h4>
            <div class="description">
                {{project.description}}
            </div>
            <router-link to="#" class="link">Read More...</router-link>
        </div>
    </div>
</template>

<script>
export default {
name: 'works',
components: { },
props: ['project'],
}
</script>

<style>

</style>