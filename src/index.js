/**
 * Created by zsp on 2018/5/14.
 */
/**
 * 三级联动年月日
 * @param year
 * @param month
 * @param day
 * @param ymd 如果为六级联动是后面一个设置的
 * @constructor
 */
var startYear=1996;
//往后多少年
var beforeYear=10;
var yearMes='-请选择年分-';
var monthMes='-请选择月份-';
var dayMes='-请选择日期-';
function YMD(year,month,day,ymd) {
    if(arguments.length<3){
      throw new Error('参数错误');
    }else {
        this.year=document.getElementById(year);
        this.month=document.getElementById(month);
        this.day=document.getElementById(day);
        this.ymd=arguments[3]||null;
        this.year.onchange=this.YearChange.bind(this);
        this.month.onchange=this.MonthChange.bind(this);
        this.day.onchange=this.DayChange.bind(this);
        this.minYear=startYear;
        this.minMonth=1;
        this.minDay=1;
    }
}
YMD.prototype.DayChange=function () {
   if(this.ymd){
       this.ymd.minDay=this.day.value;
      this.six();
   }
};
YMD.prototype.MonthChange=function () {
    this.setDay(this.day.value);
    if(this.ymd){
        this.ymd.minMonth=this.month.value;
       this.six();
    }
};
YMD.prototype.YearChange=function () {
    this.setMonth(this.month.value);
    this.setDay(this.day.value);
    if(this.ymd){
        this.ymd.minYear=this.year.value;
        this.six();
    }
};
YMD.prototype.six=function () {
    if(this.year.value!=0&&this.month.value!=0&&this.day.value!=0){
        this.ymd.init();

    }
};
YMD.prototype.setYear=function (year) {
    this.year.innerHTML='';
    this.year.options.add(new Option(yearMes,0));
    var start=this.minYear;
    for (var i = start; i <=startYear+beforeYear; i++) {
        var opt;
        if(arguments[0]&&i === year) {
            opt = new Option(i+'年', i);
            opt.selected=true;
        }else {
            opt = new Option(i+'年', i);
        }
        this.year.options.add(opt);
    }
};
YMD.prototype.setMonth=function (month) {
    this.month.innerHTML='';
    if(this.year.value==0){
        this.month.options.add(new Option(monthMes,0));
        return;
    }
    var start=1;
    if(this.year.value==this.minYear){
        start=this.minMonth;
    }
    this.month.options.add(new Option(monthMes,0));
    for (var i = start; i <=12; i++) {
        var opt;
        if(i == month) {
            opt = new Option(i+'月', i);
            opt.selected=true;
        }else {
            opt = new Option(i+'月', i);
        }
        this.month.options.add(opt);
    }
};
YMD.prototype.setDay=function (day) {
    this.day.innerHTML='';
    if(this.month.value==0||this.year.value==0){
        this.day.options.add(new Option(dayMes,0));
        return;
    }
    this.day.options.add(new Option(dayMes,0));
    var day1=YMD.getCountDays(this.year.value,this.month.value);
    var start=1;
    if(this.month.value==this.minMonth&&this.year.value==this.minYear){
        start=this.minDay;
    }
    for (var i = start; i <= day1; i++) {
           if(i==day){
              var z= new Option(i+'日',i);
              z.selected=true;
              this.day.options.add(z);
           }
            this.day.options.add(new Option(i+"日",i));
       }
    };
YMD.getCountDays=function (year,month) {
    month = parseInt(month,10);
    var temp = new Date(year,month,0);
    return temp.getDate();
};
YMD.prototype.initA=function () {
  this.year.innerHTML='';
  this.year.options.add(new Option(yearMes,0));
  this.setMonth();
  this.setDay()
};
YMD.prototype.init=function (year,month,day) {
        this.setYear(year);
        this.setMonth(month);
        this.setDay(day);

};
module.exports=YMD;