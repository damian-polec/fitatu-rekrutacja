<template>
    <header class="page-header">
        <div class="page-header__content">
            <div class="page-header__logo" @click="onLogoClick">
                <Logo />
            </div>
        </div>
    </header>
</template>
<script>
    import Logo from '@img/fitatu.svg';

    export default {
        props: {
            onLogoClick: {
                type: Function,
                default: () => {},
            },
        },
        components: {
            Logo,
        },
    };
</script>
<style lang="scss" scoped>
    .page-header {
        height: 60px;

        &__content {
            display: flex;
            align-items: center;
            justify-content: center;

            position: fixed;
            z-index: 11;
            height: inherit;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 0 15px #ced0d0;
        }

        &__logo {
            cursor: pointer;
        }
    }
</style>