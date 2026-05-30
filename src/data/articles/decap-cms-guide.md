---
title: AI agent后端算力模型架构设计
date: 2026-05-30T20:51:00.000+08:00
author: Alan
tags:
  - llama
  - Redis
  - RediSearch
  - Semantic cache
description: 仅用于个人尝试记录，处于实验摸索阶段。单实例模型 + 语义缓存混合架构部署，实现本地Ai agent对接。
image: ""
---


```
# 🚀 单实例模型 + 语义缓存混合架构部署手册
**针对硬件**：Intel Xeon E5-2695 v2 + 80GB DDR3 
 **目标模型**：Qwen3.5-35B-A3B (或备用4B模型)  
**核心架构**：Ai agent → 语义缓存(混合策略) → llama-server (单实例)
```



## 🎯 架构概览

![架构概览](/images/system_architecture_diagram.png "架构概览")



### 核心优势

* ✅ **时间敏感检测**：避免"明天天气"类查询的假阳性
* ✅ **双缓存协同**：语义缓存处理跨会话重复，KV缓存处理同会话增量
* ✅ **智能降级**：时间敏感或缓存未命中时无缝转发
* ✅ **自动过期**：基于TTL的缓存清理，防止数据陈旧



## 📦 第一阶段：安装语义缓存依赖



### 1.0 源码编译

llama.cpp-master.zip 压缩包解压

```
cd /opt/ai-agent
unzip llama.cpp-master.zip
mv llama.cpp-master llama.cpp

cd /opt/ai-agent/llama.cpp
sudo apt update
sudo apt  install cmake

# 1. 创建构建目录
mkdir -p build
cd build

# 2. 配置 CMake（针对你的 CPU 优化）
cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DLLAMA_AVX=ON \
    -DLLAMA_AVX2=ON \
    -DLLAMA_F16C=ON \
    -DLLAMA_SSE3=ON \
    -DLLAMA_SSSE3=ON \
    -DLLAMA_SSE41=ON \
    -DLLAMA_SSE42=ON \
    -DLLAMA_POPCNT=ON

# 3. 编译（用你 CPU 的核心数，16 核用 -j16）
make -j16

# 4. 验证编译成功
ls -la bin/llama-server
```



### 1.1 安装 Redis 和 RediSearch 模块


**使用系统包管理器安装 Redis Stack（推荐）**

```
# 添加 Redis 官方仓库
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

# 安装 Redis Stack Server（包含 RediSearch 和 RedisJSON）
sudo apt update
sudo apt install -y jq
sudo apt install -y redis-stack-server

# 停止可能冲突的原有 Redis 服务
sudo systemctl stop redis-server 2>/dev/null
sudo systemctl disable redis-server 2>/dev/null

# 启动 Redis Stack Server
sudo systemctl enable redis-stack-server
sudo systemctl start redis-stack-server

# 验证模块已加载
redis-cli MODULE LIST
```
