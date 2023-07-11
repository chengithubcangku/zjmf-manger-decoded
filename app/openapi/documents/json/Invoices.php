<?php

return ["title" => "财务管理", "item" => ["invoices" => ["title" => "获取账单详情", "desc" => "获取账单详情", "url" => "v1/invoices/:id", "method" => "GET", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "id", "type" => "int", "require" => "require", "max" => "11", "desc" => "账单ID", "example" => "1", "child" => []]], "return" => [["name" => "invoices", "type" => "array[]", "require" => "", "max" => "-", "desc" => "账单信息", "example" => "", "child" => [["name" => "logo", "type" => "string", "require" => "", "max" => "-", "desc" => "账单logo地址", "example" => "", "child" => []], ["name" => "username", "type" => "string", "require" => "", "max" => "-", "desc" => "支付方信息", "example" => "", "child" => []], ["name" => "companyname", "type" => "string", "require" => "", "max" => "-", "desc" => "收款方信息", "example" => "", "child" => []], ["name" => "create_time", "type" => "int", "require" => "", "max" => "-", "desc" => "创建时间", "example" => "", "child" => []], ["name" => "status", "type" => "string", "require" => "", "max" => "-", "desc" => "支付状态:Paid已支付,Unpaid未支付,Refunded已退款,Cancelled被取消,
                            Draft已草稿,Overdue已逾期,Collections已收藏", "example" => "Paid", "child" => []], ["name" => "total", "type" => "price", "require" => "", "max" => "-", "desc" => "账单总价", "example" => "100.00", "child" => []], ["name" => "invoice_items", "type" => "array[]", "require" => "", "max" => "-", "desc" => "账单子项", "example" => "{
                \"type\": \"host\",
                \"description\": \"产品升降级001 -ser571869537400(2022-01-06 16 - 2022-02-06 16) \\n IP数量: 1\\n CPU:  1核\\n\",
                \"amount\": \"300.00\",
                \"rel_id\": 625,
            }", "child" => [["name" => "type", "type" => "string", "require" => "", "max" => "-", "desc" => "账单子项类型:host产品,renew续费,recharge充值,setup初装费,promo优惠码,upgrade升降级,客户折扣等", "example" => "host", "child" => []], ["name" => "description", "type" => "string", "require" => "", "max" => "-", "desc" => "描述", "example" => "产品升降级001 -ser571869537400(2022-01-06 16 - 2022-02-06 16) \\n IP数量: 1\\n CPU:  1核\\n", "child" => []], ["name" => "amount", "type" => "price", "require" => "", "max" => "-", "desc" => "价格", "example" => "300.00", "child" => []], ["name" => "rel_id", "type" => "int", "require" => "", "max" => "-", "desc" => "关联ID", "example" => "1", "child" => []]]]]], ["name" => "currency", "type" => "array[]", "require" => "是", "max" => "-", "desc" => "货币信息", "example" => "", "child" => [["name" => "id", "type" => "int", "require" => "是", "max" => "-", "desc" => "货币ID", "example" => "1", "child" => []], ["name" => "code", "type" => "string", "require" => "是", "max" => "-", "desc" => "货币代码", "example" => "CNY", "child" => []], ["name" => "prefix", "type" => "string", "require" => "是", "max" => "-", "desc" => "货币前缀", "example" => "￥", "child" => []], ["name" => "suffix", "type" => "string", "require" => "是", "max" => "-", "desc" => "货币后缀", "example" => "元", "child" => []]]], ["name" => "gateways", "type" => "array[]", "require" => "", "max" => "-", "desc" => "支付方式(仅账单状态为未支付Unpaid时返回)", "example" => "{
                \"name\": \"WxPay\",
                \"title\": \"微信支付\",
                \"url\": \"upload/pay/WxPay.png\",
                \"author_url\": \"\"
                }", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "支付方式ID", "example" => "1", "child" => []], ["name" => "name", "type" => "string", "require" => "", "max" => "-", "desc" => "支付标识", "example" => "WxPay", "child" => []], ["name" => "title", "type" => "string", "require" => "", "max" => "-", "desc" => "支付名称", "example" => "微信支付", "child" => []], ["name" => "url", "type" => "string", "require" => "", "max" => "-", "desc" => "图片地址", "example" => "upload/pay/WxPay.png", "child" => []], ["name" => "author_url", "type" => "string", "require" => "是", "max" => "-", "desc" => "图片地址base64", "example" => "", "child" => []]]], ["name" => "accounts", "type" => "array[]", "require" => "", "max" => "-", "desc" => "交易流水(仅账单已支付返回)", "example" => "", "child" => [["name" => "trans_id", "type" => "int", "require" => "", "max" => "-", "desc" => "交易流水号", "example" => "17344353453145345", "child" => []], ["name" => "amount_in", "type" => "price", "require" => "", "max" => "-", "desc" => "金额", "example" => "", "child" => []], ["name" => "gateway", "type" => "string", "require" => "", "max" => "-", "desc" => "支付方式", "example" => "", "child" => []], ["name" => "pay_time", "type" => "int", "require" => "", "max" => "-", "desc" => "支付时间", "example" => "", "child" => []]]]]], "combineInvoices" => ["title" => "合并账单", "desc" => "合并账单", "url" => "v1/invoices/combines", "method" => "POST", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "ids", "type" => "array[]", "require" => "", "max" => "", "desc" => "账单ID数组", "example" => "[1,2,3]", "child" => []]], "return" => [0 => ["name" => "id", "type" => "int", "require" => "", "max" => "", "desc" => "账单ID", "example" => "1", "child" => []], "code" => [["name" => "200", "desc" => "合并账单成功"], ["name" => "1001", "desc" => "合并账单成功且完成账单支付"], ["name" => "400", "desc" => "合并账单失败"]]]], "funds" => ["title" => "账户充值", "desc" => "账户充值", "url" => "v1/funds", "method" => "POST", "auth" => "智简魔方", "version" => "v1", "param" => [["name" => "amount", "type" => "price", "require" => "", "max" => "", "desc" => "充值金额", "example" => "0.01", "child" => []], ["name" => "payment", "type" => "string", "require" => "", "max" => "", "desc" => "支付方式", "example" => "WxPay", "child" => []]], "return" => [["name" => "invoice_id", "type" => "int", "require" => "", "max" => "", "desc" => "账单ID", "example" => "1", "child" => []]]], "fundsInfo" => ["title" => "账户充值信息", "desc" => "账户充值信息", "url" => "v1/funds", "method" => "GET", "auth" => "智简魔方", "version" => "v1", "param" => [], "return" => [["name" => "currency", "type" => "array[]", "require" => "", "max" => "-", "desc" => "货币信息", "example" => "", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "货币ID", "example" => "1", "child" => []], ["name" => "code", "type" => "string", "require" => "", "max" => "-", "desc" => "货币代码", "example" => "CNY", "child" => []], ["name" => "prefix", "type" => "string", "require" => "", "max" => "-", "desc" => "货币前缀", "example" => "￥", "child" => []], ["name" => "suffix", "type" => "string", "require" => "", "max" => "-", "desc" => "货币后缀", "example" => "元", "child" => []]]], ["name" => "allow_recharge", "type" => "int", "require" => "", "max" => "-", "desc" => "是否允许充值,1是，0否", "example" => "1", "child" => []], ["name" => "credit", "type" => "price", "require" => "", "max" => "-", "desc" => "余额", "example" => "100.00", "child" => []], ["name" => "gateways", "type" => "array[]", "require" => "是", "max" => "-", "desc" => "支持的支付方式", "example" => "{
                \"id\": 2,
                \"name\": \"WxPay\",
                \"title\": \"微信支付\",
                \"status\": 1,
                \"module\": \"gateways\",
                \"url\": \"upload/pay/WxPay.png\",
                \"author_url\": \"data:image/png;base64,iVBORw0KGgoA……\"
                }", "child" => [["name" => "id", "type" => "int", "require" => "是", "max" => "-", "desc" => "支付方式ID", "example" => "1", "child" => []], ["name" => "name", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式标识", "example" => "WxPay", "child" => []], ["name" => "title", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式名称", "example" => "微信支付", "child" => []], ["name" => "url", "type" => "string", "require" => "是", "max" => "-", "desc" => "支付方式图标:资源地址(已舍弃)", "example" => "upload/pay/WxPay.png", "child" => []], ["name" => "author_url", "type" => "base64", "require" => "是", "max" => "-", "desc" => "支付方式图标:base64数据", "example" => "data:image/png;base64,iVBORw0KGgoA……", "child" => []]]], ["name" => "addfunds_minimum", "type" => "price", "require" => "", "max" => "-", "desc" => "充值最小值", "example" => "1", "child" => []], ["name" => "addfunds_maximum", "type" => "price", "require" => "", "max" => "-", "desc" => "充值最大值", "example" => "1", "child" => []], ["name" => "addfunds_maximum_balance", "type" => "price", "require" => "", "max" => "-", "desc" => "充值最大金额", "example" => "1", "child" => []], ["name" => "count", "type" => "int", "require" => "", "max" => "-", "desc" => "账单数量", "example" => "1", "child" => []], ["name" => "invoices", "type" => "array[]", "require" => "", "max" => "-", "desc" => "交易流水", "example" => "{
                \"trans_id\": \"2022022822001416851402771569\",
                \"amount_in\": \"0.01元\",
                \"pay_time\": 1646027663,
                \"gateway\": \"支付宝当面付\",
                \"amount_out\": \"0.00\",
                \"invoice_id\": 551408,
                \"description\": \"用户充值\",
                \"type\": \"充值\"
            }", "child" => [["name" => "trans_id", "type" => "int", "require" => "", "max" => "-", "desc" => "交易流水id", "example" => "1", "child" => []], ["name" => "amount_in", "type" => "price", "require" => "", "max" => "-", "desc" => "金额", "example" => "1", "child" => []], ["name" => "pay_time", "type" => "int", "require" => "", "max" => "-", "desc" => "支付时间,时间戳", "example" => "1", "child" => []], ["name" => "gateway", "type" => "string", "require" => "", "max" => "-", "desc" => "支付方式", "example" => "1", "child" => []], ["name" => "invoice_id", "type" => "int", "require" => "", "max" => "-", "desc" => "账单id", "example" => "1", "child" => []], ["name" => "description", "type" => "int", "require" => "", "max" => "-", "desc" => "描述", "example" => "1", "child" => []], ["name" => "type", "type" => "string", "require" => "", "max" => "-", "desc" => "类型", "example" => "1", "child" => []]]]]], "accountsRecord" => ["title" => "交易记录", "desc" => "交易记录", "url" => "v1/transactions/funds", "method" => "GET", "auth" => "智简魔方", "version" => "v1", "param" => [], "return" => [["name" => "currency", "type" => "array[]", "require" => "", "max" => "-", "desc" => "货币信息", "example" => "", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "货币ID", "example" => "1", "child" => []], ["name" => "code", "type" => "string", "require" => "", "max" => "-", "desc" => "货币代码", "example" => "CNY", "child" => []], ["name" => "prefix", "type" => "string", "require" => "", "max" => "-", "desc" => "货币前缀", "example" => "￥", "child" => []], ["name" => "suffix", "type" => "string", "require" => "", "max" => "-", "desc" => "货币后缀", "example" => "元", "child" => []]]], ["name" => "total", "type" => "int", "require" => "", "max" => "-", "desc" => "总数", "example" => "元", "child" => []], ["name" => "accounts", "type" => "int", "require" => "", "max" => "-", "desc" => "总数", "example" => "元", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "交易流水id", "example" => "1", "child" => []], ["name" => "invoice_id", "type" => "int", "require" => "", "max" => "-", "desc" => "交易流水id", "example" => "1", "child" => []], ["name" => "pay_time", "type" => "int", "require" => "", "max" => "-", "desc" => "支付时间,时间戳", "example" => "1", "child" => []], ["name" => "payment_zh", "type" => "string", "require" => "", "max" => "-", "desc" => "支付方式", "example" => "微信支付", "child" => []], ["name" => "description", "type" => "string", "require" => "", "max" => "-", "desc" => "描述", "example" => "ceshi", "child" => []], ["name" => "type", "type" => "string", "require" => "", "max" => "-", "desc" => "账单类型", "example" => "recharge", "child" => []], ["name" => "trans_id", "type" => "int", "require" => "", "max" => "-", "desc" => "流水id", "example" => "12341234", "child" => []], ["name" => "amount_in", "type" => "price", "require" => "", "max" => "-", "desc" => "金额", "example" => "1", "child" => []], ["name" => "refund", "type" => "array[]", "require" => "", "max" => "-", "desc" => "退款", "example" => "", "child" => [["name" => "id", "type" => "int", "require" => "", "max" => "-", "desc" => "退款流水id", "example" => "1", "child" => []], ["name" => "amount_out", "type" => "price", "require" => "", "max" => "-", "desc" => "退款金额", "example" => "1.00", "child" => []]]]]]]]]];