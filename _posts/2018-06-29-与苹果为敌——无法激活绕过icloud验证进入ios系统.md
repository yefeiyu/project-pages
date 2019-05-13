---
date: 2018-06-29
tags: 
- apple
- iOS 9.0.2
- icloud
- SemiRestore
- Cydia
- openssh
- clutch
- jailbreak
-
author: yefeiyu
layout: post
title: 与苹果为敌——无法激活绕过icloud验证进入iOS系统
subtitle: jailbreak ios on an unactivated device.
categories: 
- mobile
scheme-text: "#0029ff"
scheme-link: "#ff00b4"
---


# 无法激活状态的前情

一直越狱使用iOS9.0.2的手机，上周摔了屏幕，想到天才吧花点贵钱换个原装屏。天才吧的政策是手机必须非越狱状态才提供维修服务，不得已只好搜索一下越狱擦除工具。开始的时候使用Cydia eraser（原Cydia Impactor），提供无ota无法使用；继尔使用SemiRestore，成功擦除。
擦除后发现不能激活，再次上网搜索，发现是9.0-9.1关闭了（即使正常状态下手机恢复）激活通道。


# 绕过激活开启手机

SemiRestore擦除保留了越狱系统，擦除时强制要求在Cydia下载Openssh。这一措施为下述这方案提供ssh控制手机的支持。


## 开始使用bypass iCloud activation修改DNS后网页版，得到safari网页版系统，能使用部分手机功能。


## 然后看到这个贴子

[{Question} Can't activate after Semi Restore on 9.0.2. What are my options for jailbreaking?](https://www.reddit.com/r/jailbreak/comments/82y50o/question_cant_activate_after_semi_restore_on_902/)

> Yeah 9.0.2 has no tfp0 enabled. Hmm, can you send file to your device through SSH ? If so, then try this :
> download this nvrampatcher and place to root folder (/)
> ssh your device, login as root, pass alpine
> type&enter: chmod +x nvrampatcher
> type&enter: ./nvrampatcher
> wait until it say "Applying kernel patch&#x2026; done" then good
> type&enter: nvram -p
> type&enter: nvram com.apple.System.boot-nonce=GENERATOR<sub>BLOBS</sub>
> then type&enter: nvram -p
> if the string nvram com.apple.System.boot-nonce=0xxx is appear, then good, your Generator has been set. Do upgrade from 9.0.2 to jailbroken firmware (in your case which is 11.0 - 11.1.2) with latest (unofficial) futurerestore v173.

试了启动tpf0[升降級工具必備條件！教你替iOS 9設備啟動tpf0技巧](https://mrmad.com.tw/cl0ver)，亦未能激活。（这篇文章中间翻译有点小缺漏，需要分别下载并將「cl0ver檔案」與「offsets.dat檔案」拷贝到手机，最好看原文[How to Enable tfp0 on iOS 9 Jailbreak](https://yalujailbreak.net/enable-tpf0-ios-9-jailbreak/)）
看来它似乎只支持iphone5S以下。


## others

然后看到这个贴子，[{Discussion} Don't attempt semi-restore/Cydia Eraser/Reset on ios 9 to 9.1/wont activate!!!!](https://www.reddit.com/r/jailbreak/comments/8bjs2k/discussion_dont_attempt_semirestorecydia/), 这个网页的回贴中，似乎只有facetime和imessage不能使用。但是的我手机是涉及icloud的整个系统不能使用。可能是该贴主要讨论的是5s之前的手机。在苹果新64位系统中，已经作了相关补丁，即不通过icloud注册，无法打开通讯录等。而原本旧版手机是锁机状态下通过盲人模式进入通讯录可以激活系统的。


# 使用手机能流畅使用的具体方法


## 无法使用app store

在cydia下载kstore。凡是app store中打开app的页面显示“K”标志的，可以下载使用。
在cydia下载appcake（源cydia.iphonecake.com），非官方商店。
如果上述商店仍然存在无法下载的app，则需要通过对app进行脱壳后传送并安装。详见第四部分“脱壳”。


## 无法使用通讯录

appcake搜索下载allcontacts pro，同步google联系人至手机。
如果在app store中下载其他的contacts同步工具，也可以完成此项工作。可选择范围可能扩大至outlook contacts、qq通讯录等。


## 无法使用自带备忘录、提醒事项等

使用google keep代替。


## 其他方法，目前看未发现不便之处。


# 脱壳

一般说来，需要在电脑端操作（未实验），或者在其他越狱手机上操作。下面以手机为例。


## cydia下载NewTerm 2, (源<https://cydia.hbang.ws>)


## cydia下载clutch 2，（源cydia.ichitaso.com）

clutch -i查看app编号
clutch -d 01脱壳01号app，默认保存路径为/var/mobile/Documents/Dumped
复制安装即可


## imovie

这个软件也许用的人不多，其中用到icloud的一点是导入背景音乐库。
由于icloud整体已经不能用，即使用itools和ifunbox也无法导入任何歌曲。
经过测试，可以直接把mp3文件导入到imovie中。具体方法见第五条。


## cydia安装App Admin

部分app的新版本无法成功脱壳，如腾迅系、阿里系，使用本插件下载旧版本脱壳（不知道其他脱壳工具是否可以脱新版本）。


# 和电脑互拷文件

如果单纯在手机上使用文件操作，则使用cydia下载Filza即可（由于无法使用icloud，我的正版ifile也无法验证注册）
如果想使用电脑更方便的操作，那么就借助SemiRestore时强制安装的Openssh。在pc上安装winscp，或者cygwin等命令行工具，在linux下可以直接操作。


## 登陆、操作手机：

ssh root@192.168.xxx.xxx（手机ip地址）


## 拷贝文件到手机：

scp -r /localhost/xx.mp3 root@192.168.xxx.xxx


## 已经登陆手机，从电脑往手机上拷贝：

scp -r xxx@192.168.xxx.xxx(电脑ip) *localhost*.（手机所在文件夹位置）


## 将mp3文件拷贝到imovie

先使用google drive或dropbox网盘工具下载mp3，如BusyBaby.mp3，导入到imove中。
在NewTerm 2或者已登陆手机winscp命令行或linux ssh命令行中，使用命令find / -name BusyBaby.mp3，查看文件位置。如/private/var/mobile/Containers/Da\\
ta/Application/19FE5032-EB86-40AC-B2FE-9F023A27F0D8/Library/Application Support/Documents/SharedM\\
edia/Audio/BusyBaby.mp3，找到路径。
最后使用命令scp拷贝。

