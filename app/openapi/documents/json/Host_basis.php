<?php

return ["title" => "基础信息类", "item" => ["getHostLogs" => ["title" => "产品日志", "desc" => "产品日志", "url" => "/v1/hosts/[:id]/logs", "method" => "GET", "auth" => "开发者", "version" => "v1", "param" => [["name" => "page", "type" => "int", "require" => "require", "max" => "-", "desc" => "页数", "example" => "1", "child" => []], ["name" => "limit", "type" => "int", "require" => "require", "max" => "-", "desc" => "分页条数", "example" => "20", "child" => []], ["name" => "orderby", "type" => "string", "require" => "", "max" => "-", "desc" => "排序字段", "example" => "", "child" => []], ["name" => "sort", "type" => "string", "require" => "", "max" => "-", "desc" => "DESC降序，ASC升序，只有这有这两个值", "example" => "DESC", "child" => []], ["name" => "keywords", "type" => "string", "require" => "", "max" => "-", "desc" => "搜索", "example" => "", "child" => []]], "return" => [["name" => "total", "type" => "int", "require" => "", "max" => "-", "desc" => "数据条数", "example" => "1", "child" => []], ["name" => "list", "type" => "array[]", "require" => "", "max" => "-", "desc" => "日志列表", "example" => "[{\"id\":1,\"uid\":1,\"user\":\"example\",\"description\":\"example\",\"ipaddr\":\"192.168.1.1\",\"port\":443,\"create_time\":1639979575}]", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "日志ID", "example" => "1", "child" => []], ["name" => "uid", "type" => "int", "require" => "", "max" => "-", "desc" => "用户ID", "example" => "1", "child" => []], ["name" => "user", "type" => "string", "require" => "", "max" => "-", "desc" => "用户名", "example" => "example", "child" => []], ["name" => "description", "type" => "string", "require" => "", "max" => "-", "desc" => "描述", "example" => "example", "child" => []], ["name" => "ipaddr", "type" => "string", "require" => "", "max" => "-", "desc" => "IP地址", "example" => "192.168.1.1", "child" => []], ["name" => "port", "type" => "int", "require" => "", "max" => "-", "desc" => "端口号", "example" => "443", "child" => []], ["name" => "create_time", "type" => "int", "require" => "", "max" => "-", "desc" => "创建时间", "example" => "1639979575", "child" => []]]]]], "getHostDownloads" => ["title" => "文件下载列表", "desc" => "文件下载列表", "url" => "/v1/hosts/:id/downloads", "method" => "GET", "auth" => "开发者", "version" => "v1", "param" => [], "return" => [["name" => "download", "type" => "array[]", "require" => "", "max" => "-", "desc" => "文件下载列表", "example" => "[{\"id\":1,\"name\":\"example\",\"amount\":1,\"create_time\":1639979575}]", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "文件下载ID", "example" => "1", "child" => []], ["name" => "name", "type" => "string", "require" => "", "max" => "-", "desc" => "名称", "example" => "example", "child" => []], ["name" => "amount", "type" => "int", "require" => "", "max" => "-", "desc" => "下载次数", "example" => "1", "child" => []], ["name" => "create_time", "type" => "int", "require" => "", "max" => "-", "desc" => "创建时间", "example" => "1639979575", "child" => []]]]]], "hostDownloadFile" => ["title" => "下载文件", "desc" => "下载文件", "url" => "/v1/hosts/:id/downloads/:id", "method" => "GET", "auth" => "开发者", "version" => "v1", "param" => [], "return" => []]]];