//不影响，强迫症请安装该插件`vuepress-plugin-copyright2@next -D`
import type { CopyrightOptions } from 'vuepress-plugin-copyright2'
import { AUTHOR,LICENSE } from '../consts';
export const copyright:CopyrightOptions={
    author:AUTHOR,
    license:LICENSE,
    triggerWords:10,
    disableCopy:false,
    disableSelection:false,
    global:true,
}