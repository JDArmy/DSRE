<script lang="ts" setup>
import "element-plus/es/components/menu/style/css";
import "element-plus/es/components/menu-item/style/css";
import "element-plus/es/components/dropdown/style/css";
import "element-plus/es/components/dropdown-menu/style/css";
import "element-plus/es/components/dropdown-item/style/css";
import "element-plus/theme-chalk/display.css";

import iconTranslate from "@/components/icons/iconTranslate.vue";
import GithubPane from "@/components/GithubPane.vue";
import { ArrowDown } from "@element-plus/icons-vue";

import {
  ElMenu,
  ElIcon,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";

import { useI18n } from "vue-i18n";
import { languages, setLocale } from "@/i18n";

const { locale } = useI18n();
</script>

<template>
  <el-menu
    :default-active="$route.fullPath"
    mode="horizontal"
    :ellipsis="false"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
    class="hidden-md-and-up"
    style="height: 100%"
  >
    <div style="position: absolute; left: 0; top: 0">
      <img src="@/assets/logo.jpg" class="logo" width="50" alt="" />
    </div>
    <h3 class="banner" style="text-align: center; width: 100%; height: 100%">
      {{ $t("DSRE.name") }}
    </h3>
  </el-menu>

  <el-menu
    :default-active="$route.fullPath"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :ellipsis="false"
    :router="true"
    class="hidden-sm-and-down"
  >
    <div>
      <img src="@/assets/logo.jpg" class="logo" alt="JDArmy DSRE" />
    </div>

    <div>
      <h3 class="banner">
        {{ $t("DSRE.name") }}
      </h3>
    </div>

    <div class="flex-grow" />
    <el-menu-item class="" index="/">{{ $t("menu.home") }}</el-menu-item>
    <el-menu-item class="" index="/risks">{{ $t("menu.risks") }}</el-menu-item>

    <el-dropdown class="outside-link">
      <span class="el-dropdown-link">
        JDArmy
        <el-icon>
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="outside-link-menu">
          <el-dropdown-item
            ><a target="_blank" href="https://jd.army"
              >Webpage</a
            ></el-dropdown-item
          >
          <el-dropdown-item
            ><a target="_blank" href="https://blog.jd.army"
              >Blog</a
            ></el-dropdown-item
          >
          <el-dropdown-item divided
            ><a target="_blank" href="https://rtass.jd.army"
              >RTASS</a
            ></el-dropdown-item
          >
          <el-dropdown-item
            ><a target="_blank" href="https://break.jd.army"
              >BREAK</a
            ></el-dropdown-item
          >
          <el-dropdown-item
            ><a target="_blank" href="https://dsre.jd.army"
              >DSRE</a
            ></el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown class="translate" trigger="click" @command="setLocale">
      <span class="el-dropdown-link">
        <icon-translate />
        <span>{{ languages[locale as keyof typeof languages] }}</span>
        <el-icon><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(label, lang) in languages"
            :key="lang"
            :command="lang"
            :class="{ 'is-active': locale === lang }"
          >{{ label }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <github-pane class="github" />
  </el-menu>
</template>

<style scoped>
.logo {
  background: #b0afaf;
  border-radius: 20px;
  margin: 5px;
  width: 40px;
}
.version {
  color: var(--el-color-info);
  font-size: 50%;
}

.flex-grow {
  flex-grow: 1;
}

.banner {
  color: #fff;
  padding-left: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  text-align: center;
}

.sm-banner {
  text-align: center;
  width: 100%;
}

.description {
  color: #fff;
  margin: 0 0 5px 0;
  padding: 0 0 0 10px;
}

.translate {
  color: var(--el-menu-text-color);
  margin: auto 10px;
  cursor: pointer;
}

.translate .el-dropdown-link {
  display: flex;
  align-items: center;
  gap: 4px;
}

.github {
  color: var(--el-menu-text-color);
  margin: auto 10px;
  display: flex;
  align-items: center;
}

.outside-link {
  line-height: var(--el-menu-item-height);
  color: var(--el-menu-text-color);
  padding: 0 var(--el-menu-base-level-padding);
  cursor: pointer;
}

.outside-link .el-dropdown-link {
  display: flex;
  align-items: center;
  gap: 4px;
}

.outside-link-menu a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #000;
  text-decoration: none;
}
</style>
