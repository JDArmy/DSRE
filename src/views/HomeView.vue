<script lang="ts" setup>
import DSRE from "@/DSRE";
import { ref, watch } from "vue";

import RiskDetail from "@/components/RiskDetail.vue";
import { useRouter, useRoute } from "vue-router";

const secAttrs = ["header"].concat(Object.keys(DSRE.secAttrs));
const lifeCycle = Object.keys(DSRE.lifeCycle);
const getWindowHeight = () => window.innerHeight;

//分场景查看风险
let ctgRiskKeys = ref(Object.keys(DSRE.risks));
const rcKeySelected = ref("");
watch(rcKeySelected, async () => {
  if (rcKeySelected.value == "") {
    ctgRiskKeys.value = Object.keys(DSRE.risks);
  } else {
    ctgRiskKeys.value = Object.keys(DSRE.risks).filter(
      (rKey) =>
        DSRE.risks[rKey as keyof typeof DSRE.risks].category ==
        rcKeySelected.value
    );
  }
});

//获取Risk Keys列表
const getRisk = (saKey: string, lcKey: string) => {
  const saRisks = DSRE.secAttrs[saKey as keyof typeof DSRE.secAttrs].risks;
  const lcRisks = DSRE.lifeCycle[lcKey as keyof typeof DSRE.lifeCycle].risks;
  return saRisks.filter(
    (saRiskKey) =>
      lcRisks.includes(saRiskKey as never) &&
      ctgRiskKeys.value.includes(saRiskKey as never)
  );
};

/////////////////////////////////////////////////////////////////////
//start: 查看风险细节
const router = useRouter();
const route = useRoute();

let drawer = ref(false);
let riskKey = ref("");
let showRiskDetail = (riskKey1: string, drawer1: boolean) => {
  drawer.value = drawer1;
  riskKey.value = riskKey1;
};

if (route.name == "riskDetail") {
  showRiskDetail(route.params.rKey as string, true);
}
watch(
  () => route.params.rKey,
  async () => {
    if (route.name == "riskDetail") {
      showRiskDetail(route.params.rKey as string, true);
    }
  }
);

let riskDetailClose = () => {
  drawer.value = false;
  router.push({
    name: "home",
  });
};
//end.
</script>

<template lang="">
  <el-row class="header">
    <el-col :span="24" :offset="0" style="text-align: center">
      <h3 style="margin-bottom: 0">
        {{ $t("DSRE.title") }} v{{ DSRE.version }}
      </h3>
      <h6 style="color: gray">{{ $t("DSRE.description") }}</h6>
    </el-col>

    <el-col>
      <el-select v-model="rcKeySelected" :placeholder="$t('allCategories')">
        <el-option key="" :label="$t('allCategories')" value=""></el-option>
        <el-option
          v-for="(rcVal, rcKey) in DSRE.riskCtg"
          :key="rcKey"
          :label="rcVal.title"
          :value="rcKey"
        />
      </el-select>
      <el-tag
        v-if="rcKeySelected"
        effect="plain"
        style="margin-left: 10px"
        :class="rcKeySelected"
        >{{ $t(`DSRE.riskCtg.${rcKeySelected}.description`) }}</el-tag
      >
    </el-col>
  </el-row>

  <el-table :data="lifeCycle" border stripe style="width: 100%">
    <el-table-column
      v-for="saKey in secAttrs"
      :width="saKey == 'header' ? 100 : ''"
      :key="saKey"
    >
      <template #header>
        <div v-if="saKey == 'header'" class="header-sec-attrs">
          安全属性→<br />生命周期↓
        </div>
        <div v-else class="header-sec-attrs">
          {{ $t(`DSRE.secAttrs.${saKey}.title`) }}
          <br />
          {{ saKey }}
          <br />
          <div>
            <el-tag
              type="danger"
              :title="$t(`DSRE.secAttrs.${saKey}.threaten.definition`)"
              >对应威胁：{{
                $t(`DSRE.secAttrs.${saKey}.threaten.title`)
              }}</el-tag
            >
          </div>
        </div></template
      >
      <template #default="scope">
        <div class="header-life-cycle" v-if="saKey == 'header'">
          {{
            typeof scope.row == "string"
              ? $t(`DSRE.lifeCycle.${scope.row}.title`)
              : null
          }}
        </div>
        <ul class="risk-list" v-else>
          <li
            class="risk"
            v-for="rKey in getRisk(saKey, scope.row)"
            :key="rKey"
          >
            <router-link class="link" :to="'/risk/' + rKey">
              {{ $t(`DSRE.risks.${rKey}.title`) }}
              <el-tag
                v-if="DSRE.risks[rKey as keyof typeof DSRE.risks].category"
                size="small"
                class="category"
                effect="plain"
                :class="DSRE.risks[rKey as keyof typeof DSRE.risks].category"
                >{{
                  $t(
                    `DSRE.riskCtg.${
                      DSRE.risks[rKey as keyof typeof DSRE.risks].category
                    }.title`
                  )
                }}</el-tag
              >
            </router-link>
          </li>
        </ul>
      </template>
    </el-table-column>
  </el-table>
  <RiskDetail
    v-on:drawer-close="riskDetailClose"
    :drawer="drawer"
    :rKey="riskKey"
  />
</template>
<style scoped>
.header-sec-attrs {
  text-align: center;
}

.header-life-cycle {
  font-weight: bolder;
  text-align: center;
}

.header {
  margin-bottom: 10px;
}

.risk-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.risk,
.sub-risk-link {
  padding: 3px;
}

.s-risk {
  padding: 0 0 3px 0;
}

.risk,
.s-risk,
.sub-risk-link {
  font-size: 1em;
  text-align: center;
  border: 1px solid lightgray;
}

.risk:hover,
.s-risk:hover {
  background-color: rgb(228, 228, 230);
}

.sub-risk-link:hover {
  background-color: rgb(194, 196, 228);
}

.risk a,
.s-risk a,
.sub-risk a {
  color: #294e76;
  text-decoration: none;
  display: inline-block;
}

.risk a:hover,
.s-risk a:hover,
.sub-risk a:hover {
  color: #002b58;
}

.sidebar {
  width: 5px;
}

.link {
  display: block;
  height: 100%;
  width: 100%;
}

.category {
  transform: scale(0.75);
  margin-left: -5px;
}
</style>
