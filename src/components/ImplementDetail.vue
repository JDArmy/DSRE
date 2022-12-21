<script setup lang="ts">
import { ref, watch } from "vue";
import DSRE from "@/DSRE";
import "element-plus/es/components/drawer/style/css";

const props = defineProps<{
  implDrawer: boolean;
  implKey: string;
}>();
defineEmits(["drawerClose"]);

const drawer = ref(props.implDrawer);
const key = ref(props.implKey);
const getImpl = () =>
  DSRE.secImpls[props.implKey as keyof typeof DSRE.secImpls];

watch(
  () => props.implDrawer + props.implKey,
  () => {
    drawer.value = props.implDrawer;
    key.value = props.implKey;
  }
);

const getDrawerWidth = () => {
  return window.innerWidth > 600 ? 600 : "100%";
};
</script>

<template>
  <!-- 风险详情页 -->
  <el-drawer
    v-model="drawer"
    :title="$t('implDetail')"
    @closed="$emit('drawerClose')"
    direction="rtl"
    :size="getDrawerWidth()"
  >
    <div class="desc">
      <strong>{{ $t("implTitle") }}:&nbsp;</strong>
      {{ $t(`DSRE.secImpls.${implKey}.title`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("implDescription") }}:&nbsp;</strong>
      {{ $t(`DSRE.secImpls.${implKey}.description`) }}
    </div>
    <div class="desc">
      <ul>
        <li v-for="(refence, refIdx) in getImpl()['references']" :key="refIdx">
          <a :href="refence.link" target="_blank">{{
            $t(`DSRE.secImpls.${implKey}.references[${refIdx}].title`)
          }}</a>
        </li>
      </ul>
    </div>
  </el-drawer>
</template>

<style scoped>
.desc {
  margin-bottom: 20px;
}
</style>

<style>
.el-drawer__header {
  margin-bottom: 0px;
}
</style>
