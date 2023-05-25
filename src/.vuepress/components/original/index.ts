import { type VNode, defineComponent, h } from "vue";

import { useMetaLocale } from "@theme-hope/modules/info/composables/index";

import "./original.scss";

export default defineComponent({
  name: "OriginalInfo",

  inheritAttrs: false,

  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean,
  },

  setup(props) {
    const metaLocale = useMetaLocale();

    return (): VNode | null =>
      props.isOriginal
        ? h("span", { class: 'nl-original-wrap nl-original','data-theme':'light' }, metaLocale.value.origin)
        : null;
  },
});