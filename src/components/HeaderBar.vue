<template>
    <section class="headerbar">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'HearderBar',
        data() {
            return {}
        },
    }
</script>

<style lang="less" scoped>
    .headerbar {
        ul {
            display: flex;
            align-items: center;
            height: 60px;
            li {
                margin: 10px 10px 10px 0;
            }
            button {
                width: 100%;
            }
            .active {
                font-size: 22px !important;
                font-weight: 600;
                border-bottom: 4px solid #5cce9f;
            }
            .noActive {
                font-size: 16px;
            }
        }
    }
</style>
