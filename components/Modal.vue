<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        required: true,
        default: false
    },
    modalImg: {
        // type: String,
        // required: true
    }
})
</script>

<template>
    <Transition name="modal">
        <div v-if="show" @click.self="$emit(`close`)" class="modal-mask">
            <div class="modal-container">
                <span @click="$emit(`previous`)" class="arrow arrow-left">&lsaquo;</span>
                <SanityImage :asset-id="props.modalImg" auto="format" alt="pic" />
                <button class="modal-default-button" @click="$emit(`close`)">&times;</button>
                <span @click="$emit(`next`)" class="arrow arrow-right">&rsaquo;</span>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    position: relative;
    width: 90rem;
    height: 70rem;
    margin: auto;
    /* padding: 20px 30px; */
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    all: unset;
    position: absolute;
    top: -6rem;
    right: 0;
    color: #fff;
    font-size: 4rem;
    cursor: pointer;
    padding: 0;

}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}


/* NOTE MY STYLES */
img {
    width: 100%;
    height: 100%;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 8rem;
    cursor: pointer;

    &-left {
        left: -4rem;
    }

    &-right {
        right: -4rem;
    }
}
</style>