<script setup lang="ts">
import { ref, watch } from "vue";
import DSRE from "@/DSRE";
import "element-plus/es/components/drawer/style/css";

const props = defineProps<{
  drawer: boolean;
  rKey: string;
}>();
defineEmits(["drawerClose"]);

const getCategory = () =>
  props.rKey ? DSRE.risks[props.rKey as keyof typeof DSRE.risks].category : "";

const drawer = ref(props.drawer);
const category = ref(getCategory());

watch(
  () => props.rKey + props.drawer,
  () => {
    drawer.value = props.drawer;
    category.value = getCategory();
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
    @closed="$emit('drawerClose')"
    :title="$t('riskDetail')"
    direction="rtl"
    :size="getDrawerWidth()"
  >
    <div class="desc">
      <strong>{{ $t("riskKey") }}:&nbsp;</strong>
      {{ rKey }}
    </div>
    <div class="desc">
      <strong>{{ $t("riskTitle") }}:&nbsp;</strong>
      {{ $t(`DSRE.risks.${rKey}.title`) }}
      <el-tag
        v-if="category"
        size="small"
        class="category"
        effect="plain"
        :class="category"
        >{{ $t(`DSRE.riskCtg.${category}.title`) }}</el-tag
      >
    </div>
    <div class="desc">
      <strong>{{ $t("riskDescription") }}:&nbsp;</strong>
      {{ $t(`DSRE.risks.${rKey}.description`) }}
    </div>
  </el-drawer>
  <!-- 手段详情页 -->
  <!-- <el-drawer
    v-model="avoidanceDrawer"
    :title="$t('avoidance')"
    :append-to-body="true"
    :size="getInnerDrawerWidth()"
  >
    <div class="desc">
      <strong>{{ $t("ID") }}:&nbsp;</strong>
      {{ avoidanceKey }}
    </div>
    <div class="desc">
      <strong>{{ $t("title") }}:&nbsp;</strong>
      {{ $t(`DSRE.avoidances.${avoidanceKey}.title`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("summary") }}:&nbsp;</strong>
      {{ $t(`DSRE.avoidances.${avoidanceKey}.summary`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("description") }}:&nbsp;</strong>
      {{ $t(`DSRE.avoidances.${avoidanceKey}.description`) }}
    </div>
    <div class="desc" v-if="$t(`DSRE.avoidances.${avoidanceKey}.limitation`)">
      <strong>{{ $t("limitation") }}:&nbsp;</strong>
      {{ $t(`DSRE.avoidances.${avoidanceKey}.limitation`) }}
    </div>
    <div class="desc" v-if="getAvoidanceReferences(avoidanceKey).length > 0">
      <strong>{{ $t("references") }}:&nbsp;</strong>
      <ul>
        <li
          v-for="(reference, refIdx) in getAvoidanceReferences(avoidanceKey)"
          :key="refIdx"
        >
          <a :href="reference.link" target="_blank">
            <el-icon><Link /></el-icon
            >{{
              $t(`DSRE.avoidances.${avoidanceKey}.references[${refIdx}].title`)
            }} </a
          >:
          {{
            $t(
              `DSRE.avoidances.${avoidanceKey}.references[${refIdx}].description`
            )
          }}
        </li>
      </ul>
    </div>
  </el-drawer> -->
  <!-- 攻击工具详情页 -->
  <!-- <el-drawer
    v-model="attackToolDrawer"
    :title="$t('attackTools')"
    :append-to-body="true"
    :size="getInnerDrawerWidth()"
  >
    <div class="desc">
      <strong>{{ $t("ID") }}:&nbsp;</strong>
      {{ attackToolKey }}
    </div>
    <div class="desc">
      <strong>{{ $t("title") }}:&nbsp;</strong>
      {{ $t(`DSRE.attackTools.${attackToolKey}.title`) }}
    </div>
    <div class="desc">
      <strong>{{ $t("description") }}:&nbsp;</strong>
      {{ $t(`DSRE.attackTools.${attackToolKey}.description`) }}
    </div>
    <div class="desc" v-if="getAttackToolAvoidances(attackToolKey).length > 0">
      <strong>{{ $t("avoidance") }}:&nbsp;</strong>
      <el-button
        v-for="aKey in getAttackToolAvoidances(attackToolKey)"
        :key="aKey"
        class="relational-link"
        @click="
          avoidanceKey = aKey;
          avoidanceDrawer = true;
        "
        round
        >{{
          aKey + ":&nbsp;" + $t(`DSRE.avoidances.${aKey}.title`)
        }}</el-button
      >
    </div>
    <div class="desc" v-if="getAttackToolReferences(attackToolKey).length > 0">
      <strong>{{ $t("references") }}:&nbsp;</strong>
      <ul>
        <li
          v-for="(reference, refIdx) in getAttackToolReferences(attackToolKey)"
          :key="refIdx"
        >
          <a :href="reference.link" target="_blank">
            <el-icon><Link /></el-icon
            >{{
              $t(
                `DSRE.attackTools.${attackToolKey}.references[${refIdx}].title`
              )
            }}
          </a>
        </li>
      </ul>
    </div>
  </el-drawer> -->
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
