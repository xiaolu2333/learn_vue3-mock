<template>
  <button @click="getListBtn">获取mock数据</button>
  <div v-if="state.getlistResponseData.message">响应消息：{{ state.getlistResponseData.message }}</div>
</template>
<script>
import {reactive} from "vue";
import { getList } from "@/api/getList";

export default {
  setup() {
    const state = reactive({
      getlistResponseData: {}
    });

    const getListBtn = () => {
      getList().then(res => {
        if (res.status === 200) {
          console.log(res);
          state.getlistResponseData = res.data;
          console.log(state.getlistResponseData);
        }
      });
    };

    return {
      state,
      getListBtn
    };
  }
};
</script>