// Clash 模块通用响应日志脚本
// 用于调试：打印 URL、状态码和响应体

const url = $request.url || "unknown";
const status = $response.status || "unknown";
const body = $response.body;

console.log("========== Response Log ==========");
console.log("URL: " + url);
console.log("Status: " + status);
console.log("Method: " + ($request.method || "unknown"));

if (typeof body === "string") {
  console.log("Body length: " + body.length);
  // 避免日志过长，只打印前 2000 字符（可按需调整）
  const preview = body.length > 2000 ? body.substring(0, 2000) + "...[truncated]" : body;
  console.log("Body: " + preview);
} else {
  console.log("Body: not available or not a string (check requires-body=true)");
}

console.log("==================================");

// 不修改响应，原样返回
console.log("脚本已执行");
$done({});
