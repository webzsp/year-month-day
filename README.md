# year-month-day
年月日,三级联动,六级联动
# 引入方法,和普通的插件相同,使用script标签进行引入
```
<script src="src/index.js"></script>
```
# 年月日三级联动
## html格式
```
<select name="" id="year"></select>
<select name="" id="month"></select>
<select name="" id="day"></select>
```
## js使用方法
```
<script>
 var ymd=new YMD('year','month','day');
 ymd.init();
</script>
```
# 年月日六级联动
## html格式
```
<select name="" id="year"></select>
<select name="" id="month"></select>
<select name="" id="day"></select>
<br>
<select name="" id="year1"></select>
<select name="" id="month1"></select>
<select name="" id="day1"></select>
<script src="src/index.js"></script>
```

## js使用方法
```
<script>
//后面日期的select
 var ymd1=new YMD('year1','month1','day1');
 ymd1.initA();
 // 前面日期的select
 var ymd=new YMD('year','month','day',ymd1);
 ymd.init();
</script>
```
