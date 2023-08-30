//不影响，可以通过安装插件`vuepress-plugin-copyright2@next -D`解决
import type { CopyrightOptions } from "vuepress-plugin-copyright2";
import { AUTHOR, LICENSE } from "../consts";
export const copyright: CopyrightOptions = {
  author: AUTHOR,
  license: LICENSE,
  triggerLength: 10,
  disableCopy: false,
  disableSelection: false,
  global: true,
};
