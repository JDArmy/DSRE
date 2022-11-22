<script lang="ts" setup>
import DSRE from "@/DSRE";

let risks = Array();
Object.keys(DSRE.risks).forEach((rKey) => {
  let riskVal = DSRE.risks[rKey as keyof typeof DSRE.risks];
  if (riskVal.title) {
    let risk = {
      ...riskVal,
      rKey: rKey,
    };
    risks.push(risk);
  }
});

let getWindowHeight = () => window.innerHeight;
const getCategory = (rKey: string) => {
  return DSRE.risks[rKey as keyof typeof DSRE.risks].category;
};
</script>

<template lang="">
  <h3>{{ $t("menu.risks") }}</h3>
  <el-table :height="getWindowHeight() - 50" :data="risks" stripe border>
    <el-table-column prop="rKey" width="120px" :label="$t('riskKey')">
      <template v-slot="scope">
        {{ scope.row.rKey }}
      </template>
    </el-table-column>
    <el-table-column prop="title" width="250px" :label="$t('riskTitle')">
      <template #default="scope">
        {{ scope.row.rKey ? $t(`DSRE.risks.${scope.row.rKey}.title`) : "" }}
        <el-tag
          size="small"
          class="category"
          effect="plain"
          :class="getCategory(scope.row.rKey)"
          >{{ $t(`DSRE.riskCtg.${getCategory(scope.row.rKey)}.title`) }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column prop="description" :label="$t('riskDescription')"
      ><template #default="scope">
        {{
          scope.row.rKey ? $t(`DSRE.risks.${scope.row.rKey}.description`) : ""
        }}
      </template></el-table-column
    >
  </el-table>
</template>

<style lang=""></style>
