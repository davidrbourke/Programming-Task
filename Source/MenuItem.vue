<template>
    <router-link :to="route" exact>{{ navItem.caption }}</router-link>
</template>

<script src="./MenuItem.ts" />

<style lang="scss" scoped>

a {
    margin-left: 2rem;
}

a.router-link-active {
    color: white;
    font-weight: bold;
}

</style>
