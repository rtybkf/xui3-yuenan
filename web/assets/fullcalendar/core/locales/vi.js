(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, (global.FullCalendarLocales = global.FullCalendarLocales || {}, global.FullCalendarLocales.vi = factory()));
}(this, function () { 'use strict';

    var vi = {
        code: "vi",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        buttonText: {
            prev: "昨天",
            next: "明天",
            today: "今天",
            month: "月",
            week: "星期",
            day: "日",
            list: "日程"
        },
        weekLabel: "一周",
        allDayText: "一整天",
        eventLimitText: function (n) {
            return "+ 更多的 " + n;
        },
        noEventsMessage: "没有可显示的事件"
    };

    return vi;

}));
