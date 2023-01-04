<script setup lang="ts">
import { ref, watch } from "vue";
import "element-plus/es/components/drawer/style/css";

const props = defineProps<{
  threatenDrawer: boolean;
  threatenKey: string;
}>();
defineEmits(["drawerClose"]);

const drawer = ref(props.threatenDrawer);
const key = ref(props.threatenKey);

watch(
  () => props.threatenDrawer + props.threatenKey,
  () => {
    drawer.value = props.threatenDrawer;
    key.value = props.threatenKey;
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
    :title="$t('threatenDetail')"
    @closed="$emit('drawerClose')"
    direction="rtl"
    :size="getDrawerWidth()"
  >
    <div class="desc">
      <strong>{{ $t("threatenTitle") }}:&nbsp;</strong>
      {{ $t(`DSRE.threaten.${threatenKey}.title`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("threatenDefinition") }}:&nbsp;</strong>
      {{ $t(`DSRE.threaten.${threatenKey}.definition`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("threatenDescription") }}:&nbsp;</strong>
      {{ $t(`DSRE.threaten.${threatenKey}.description`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("threatenExample") }}:&nbsp;</strong>
      {{ $t(`DSRE.threaten.${threatenKey}.example`) }}
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
