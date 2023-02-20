/* jshint esversion: 6 */

import service from "@/utils/request"; // 引入拦截器

export function getList(data) {
    "use strict";
    return service.request({
        method: "get",
        url: "/getList/",
        data,
    });
}