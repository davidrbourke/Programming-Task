<template>
    <div>
    <header>
        <img :src="require('./_Resources/Images/Icon-32.png')" height="32" width="32"/>
        <h1>Client</h1>
        <menu-item v-for="navItem in navItems" :key="navItem.caption" :nav-item="navItem" />
    </header>
    <router-view></router-view>
    </div>
</template>

<script src="./Shell.ts" />

<style lang="scss" scoped>

header {
    align-items: center;
    background: navy;
    display: flex;
    padding: 1rem 15px;

    h1 {
        color: white;
        font-size: 1.5rem;
        margin: 0 1rem;
    }
}

</style>
