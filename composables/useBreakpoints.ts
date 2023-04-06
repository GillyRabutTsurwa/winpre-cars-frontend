import { ref } from "vue";
export const useBreakpoints = (): object => {
    const showElement = ref<boolean>();
    const toggleElementOnResize = (breakpointInPx: number, maxOrMinWidth: string = "max-width") => {
        const mediaQueryList = window.matchMedia(`(${maxOrMinWidth}: ${breakpointInPx}px)`);

        if (mediaQueryList.matches) {
            console.log(`Window is ${maxOrMinWidth === "max-width" ? "max" : "min"} ${breakpointInPx}px`);
            showElement.value = true;
        } else {
            console.log(`Window is ${maxOrMinWidth === "max-width" ? "over" : "under"} ${breakpointInPx}px`);
            showElement.value = false;
        }
    };

    return {
        showElement: showElement,
        toggleElementOnResize: toggleElementOnResize,
    };
};
