import type { AutoCatalogOptions } from "vuepress-plugin-auto-catalog";

export const autoCatalog: AutoCatalogOptions = {
  orderGetter(page) {
    let dir_config = page.frontmatter.dir as any;

    if (dir_config?.index) {
      return dir_config.order;
    }
    return -new Date(page.date).getTime();
  },
};
