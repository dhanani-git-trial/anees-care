import type { HTMLAttributes } from "svelte/elements";


export type tContainerProps = HTMLAttributes<HTMLSpanElement> & {
    heading?: string,
};