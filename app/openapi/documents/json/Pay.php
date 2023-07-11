<?php

return ["title" => "支付", "item" => ["pay" => ["title" => "发起支付", "desc" => "发起支付", "url" => "v1/pay", "method" => "POST", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "payment", "type" => "string", "require" => "是", "max" => "", "desc" => "支付方式", "example" => "WxPay", "child" => []], ["name" => "invoiceid", "type" => "int", "require" => "是", "max" => "11", "desc" => "账单ID", "example" => "1000001", "child" => []]], "return" => [["name" => "payment", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式", "example" => "AliPayDmf", "child" => []], ["name" => "total", "type" => "price", "require" => "是", "max" => "-", "desc" => "支付金额", "example" => "1601.20", "child" => []], ["name" => "total_desc", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付金额描述", "example" => "1601.20元", "child" => []], ["name" => "credit", "type" => "price", "require" => "是", "max" => "-", "desc" => "余额", "example" => "6001.10", "child" => []], ["name" => "invoiceid", "type" => "int", "require" => "是", "max" => "-", "desc" => "账单ID", "example" => "551197", "child" => []], ["name" => "pay_html", "type" => "array[]", "require" => "是", "max" => "-", "desc" => "三方支付信息:1.当 `type=url` 时，[data]值为 转换二维码的url地址 由系统自动转换
2.当 `type=insert` 时，[data]值为 第三方支付系统提供的二维码地址 由系统嵌入该二维码
3.当 `type=jump` 时，[data]值为 需要跳转到第三方的支付链接网址
4.当 `type=html` 时，[data]值为  需要提交的html表单", "example" => "{
            \"type\": \"url\",
            \"data\": \"https://qr.alipay.com/bax08708r1xf4c8pd4iy3080\"
        }", "child" => [["name" => "type", "type" => "string", "require" => "是", "max" => "-", "desc" => "类型", "example" => "url", "child" => []], ["name" => "data", "type" => "string", "require" => "是", "max" => "-", "desc" => "数据", "example" => "https://qr.alipay.com/bax08708r1xf4c8pd4iy3080", "child" => []]]], ["name" => "gateway_list", "type" => "array[]", "require" => "是", "max" => "-", "desc" => "支持的支付方式", "example" => "{
                \"id\": 2,
                \"name\": \"WxPay\",
                \"title\": \"微信支付\",
                \"status\": 1,
                \"module\": \"gateways\",
                \"url\": \"upload/pay/WxPay.png\",
                \"author_url\": \"data:image/png;base64,iVBORw0KGgoA……\"
                }", "child" => [["name" => "id", "type" => "int", "require" => "是", "max" => "-", "desc" => "支付方式ID", "example" => "1", "child" => []], ["name" => "name", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式标识", "example" => "WxPay", "child" => []], ["name" => "title", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式名称", "example" => "微信支付", "child" => []], ["name" => "url", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式图标:资源地址(已舍弃)", "example" => "upload/pay/WxPay.png", "child" => []], ["name" => "author_url", "type" => "base64", "require" => "是", "max" => "-", "desc" => "支付方式图标:base64数据", "example" => "data:image/png;base64,iVBORw0KGgoA……", "child" => []]]], ["name" => "is_open_shd_credit_limit", "type" => "int", "require" => "是", "max" => "-", "desc" => "是否开启信用额", "example" => "1", "child" => []], ["name" => "client", "type" => "array[]", "require" => "否", "max" => "-", "desc" => "客户信息(登录后才有)", "example" => "{
            \"credit\": \"6001.10\",
            \"credit_limit\": \"2000.00\",
            \"is_open_credit_limit\": 1,
            \"currency\": 1,
            \"amount_to_be_settled\": 93.19,
            \"credit_limit_used\": 93.19,
            \"credit_limit_balance\": 1906.81
        }", "child" => [["name" => "credit", "type" => "price", "require" => "是", "max" => "-", "desc" => "余额", "example" => "1000.00", "child" => []], ["name" => "credit_limit", "type" => "price", "require" => "是", "max" => "-", "desc" => "信用额", "example" => "2000.00", "child" => []], ["name" => "is_open_credit_limit", "type" => "int", "require" => "是", "max" => "-", "desc" => "客户是否开启信用额:1是,0否", "example" => "1", "child" => []], ["name" => "amount_to_be_settled", "type" => "price", "require" => "是", "max" => "-", "desc" => "客户已结算信用额", "example" => "93.19", "child" => []], ["name" => "credit_limit_used", "type" => "price", "require" => "是", "max" => "-", "desc" => "客户已用信用额(包括已结算+未支付的)", "example" => "93.19", "child" => []], ["name" => "credit_limit_balance", "type" => "price", "require" => "是", "max" => "-", "desc" => "客户剩余信用额", "example" => "1906.81", "child" => []]]]]], "fund" => ["title" => "使用余额", "desc" => "使用余额", "url" => "v1/invoices/:id/fund", "method" => "POST", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "id", "type" => "int", "require" => "是", "max" => "", "desc" => "账单ID", "example" => "1", "child" => []]], "return" => [["name" => "invoiceid", "type" => "int", "require" => "否", "max" => "-", "desc" => "账单ID:当状态码为200的时候返回", "example" => "1", "child" => []], ["name" => "url", "type" => "string", "require" => "是", "max" => "-", "desc" => "跳转地址", "example" => "servicedetail?id=619", "child" => []], ["name" => "hostid", "type" => "array[]", "require" => "否", "max" => "-", "desc" => "产品ID(当状态码为1001时返回)", "example" => "{619,620}", "child" => []]], "code" => [["name" => "200", "desc" => "使用余额成功,账单未支付,还需要调支付接口"], ["name" => "1001", "desc" => "使用余额成功,且支付完成"], ["name" => "400", "desc" => "使用余额失败"]]], "fundDelete" => ["title" => "删除余额", "desc" => "删除余额", "url" => "v1/invoices/:id/fund", "method" => "DELETE", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "id", "type" => "int", "require" => "是", "max" => "", "desc" => "账单ID", "example" => "1", "child" => []]], "return" => [["name" => "invoiceid", "type" => "int", "require" => "否", "max" => "-", "desc" => "账单ID", "example" => "1", "child" => []]]], "credit" => ["title" => "使用信用额", "desc" => "使用信用额", "url" => "v1/invoices/:id/credit", "method" => "POST", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "id", "type" => "int", "require" => "是", "max" => "", "desc" => "账单ID", "example" => "1", "child" => []]], "return" => [["name" => "invoiceid", "type" => "int", "require" => "否", "max" => "-", "desc" => "账单ID", "example" => "1", "child" => []], ["name" => "url", "type" => "string", "require" => "是", "max" => "-", "desc" => "跳转地址", "example" => "servicedetail?id=619", "child" => []], ["name" => "hostid", "type" => "array[]", "require" => "否", "max" => "-", "desc" => "产品ID(当状态码为1001时返回)", "example" => "{619,620}", "child" => []]], "code" => [["name" => "1001", "desc" => "支付完成"], ["name" => "400", "desc" => "使用信用额失败"]]], "status" => ["title" => "请求支付状态", "desc" => "请求支付状态", "url" => "v1/invoices/:id/status", "method" => "GET", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "id", "type" => "int", "require" => "是", "max" => "", "desc" => "账单ID", "example" => "1", "child" => []]], "return" => [["name" => "url", "type" => "string", "require" => "是", "max" => "-", "desc" => "跳转地址", "example" => "servicedetail?id=619", "child" => []], ["name" => "hid", "type" => "array[]", "require" => "是", "max" => "-", "desc" => "产品ID数组", "example" => "[637,678]", "child" => []]], "code" => [["name" => "1000", "desc" => "支付成功"], ["name" => "1001", "desc" => "支付失败"]]]]];