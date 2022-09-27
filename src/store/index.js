import { ref, reactive } from 'vue'

const appStates = reactive({
    isScan: 0,
    isSearchByName: 1,
    isAutoRecog: 2,
    isSetting: 3,
});

const currentState = ref(0);

export default {
    appStates,
    currentState,
};