# X-UI

支持多协议、单端口多用户的 xray 面版、支持Telegram Bot提醒和预警推送

> 以下为对白眼狼越南人的留言，对正常面板及脚本使用无任何影响，非越南人无视即可

Người Việt cao quý: Do sự khiêu khích của chính phủ các bạn, thành phố đã bị phong tỏa do việc buôn lậu bệnh nhân nhiễm vi khuẩn covid-19 vào thành phố của tôi. Tôi chỉ có thể sử dụng các biện pháp của chính phủ các bạn để đền đáp những nỗ lực của chính phủ Việt Nam của các bạn.

Cầu mong mọi người Việt Nam không bị nhiễm vi rút covid-19

## 安装命令

> 可直接将面板原版升级至本优化版

```shell
wget -N --no-check-certificate https://raw.githubusercontent.com/taffychan/x-ui/main/install.sh && bash install.sh
```

> 如提示 `wget: command not found` 请安装wget后再执行本脚本

> CentOS: `yum install -y wget` Debian / Ubuntu: `apt install -y wget`

## 建议系统

* CentOS 7+
* Fedora 29+
* Ubuntu 16+
* Debian 9+
* Alpine （未测试）

## 功能介绍

* 系统状态监控
* 支持多用户多协议，单端口多用户及网页可视化操作
* 支持的节点传输协议：vmess、vless、trojan、shadowsocks、shadowsocks 2022、dokodemo-door、socks、http
* 支持配置更多传输配置
* 流量统计，限制流量，限制到期时间
* 可自定义 xray 配置模板
* 支持 https 访问面板（请自行准备域名 + ssl 证书）
* 支持 纯IPv4、纯IPv6及原生双栈 IP环境的VPS
* 支持 amd64、arm64、s390x CPU架构的VPS
* 支持 Telegram Bot 提醒面板，SSH登录信息、流量使用情况

## TG机器人使用

x-ui面板支持通过TG机器人实现每日流量通知，面板登录提醒以及cmd控制等功能。

通知内容：节点流量使用、面板登录提醒、节点到期提醒和流量预警提醒

机器人命令列表：

```
/help 获取bot的帮助信息
/delete [port] 删除对应端口的节点
/restart 重启xray服务
/status 获取当前系统状态
/enable [port] 开启对应端口的节点
/disable [port] 关闭对应端口的节点
/clear [port] 清理对应端口的节点流量
/clearall 清理所有节点流量
/version [version] 将会升级xray内核到 [version] 版本
```

### 准备材料

* TG机器人TOKEN
* TG机器人ChatId
* 机器人周期运行时间，采用crontab语法，语法说明如下

> Crontab表达式生成器：https://cron.qqe2.com/
