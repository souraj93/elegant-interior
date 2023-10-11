function launch_chaty(t) {
    (void 0 == t || "widget_index" == t) && (t = 0),
    jQuery("#chaty-widget-" + t).length && jQuery("#chaty-widget-" + t + " .chaty-cta-button .open-chaty").trigger("click")
}
function close_chaty() {
    jQuery(".chaty.active .chaty-open").length && jQuery(".chaty.active .chaty-open").each(function() {
        jQuery(this).find(".chaty-cta-close").trigger("click")
    })
}
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t, a) {
    var e, c, i = [], n = "", s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? 1 : 0, o = ["System Stack", "Arial", "Tahoma", "Verdana", "Helvetica", "Times New Roman", "Trebuchet MS", "Georgia", "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"], h = !1, l = !1, r = 0, d = !1, y = !1, g = [], p = 0, f = 0, v = "", m = 0, u = "";
    function w(e) {
        if (a != t("#chaty-widget-" + e).data("animation") && "none" != t("#chaty-widget-" + e).data("animation")) {
            var c = "chaty-animation-" + t("#chaty-widget-" + e).data("animation");
            t("#chaty-widget-" + e + " ." + c).removeClass(c)
        }
    }
    function $() {
        i.length && (t.each(i, function(a, e) {
            var c, h = "", g = "", p = 0, f = {}, v = (c = e,
            !E(c.triggers.has_countries) || !!A(c.triggers.countries) || !c.triggers.countries.length || "-" == (n = O()) || -1 != t.inArray(n, c.triggers.countries));
            if (v = (v = v && function t(a) {
                if (a.triggers.has_date_scheduling_rules) {
                    var e = a.triggers.date_scheduling_rules.start_date_time
                      , c = a.triggers.date_scheduling_rules.end_date_time
                      , i = new Date
                      , n = (i = q(i, a.triggers.time_diff)).getFullYear() + "-" + W(i.getMonth() + 1) + "-" + W(i.getDate()) + " " + W(i.getHours()) + ":" + W(i.getMinutes()) + ":" + W(i.getSeconds());
                    return "" == c && !!(e <= n) || "" == e && !!(c >= n) || "" != e && "" != c && !!(e <= n) && !!(c >= n)
                }
                return !0
            }(e)) && function t(a) {
                var e = !0;
                if (E(a.triggers.has_day_hours_scheduling_rules) && a.triggers.day_hours_scheduling_rules.length > 0) {
                    var c = a.triggers.day_hours_scheduling_rules;
                    if (c.length > 0) {
                        e = !1;
                        for (var i = new Date, n = (i = q(i, a.triggers.day_time_diff)).getHours(), s = i.getMinutes(), o = i.getDay(), h = 0; h < c.length; h++) {
                            var l = 0
                              , r = 0
                              , d = 0;
                            -1 == c[h].days ? d = 1 : c[h].days >= 0 && c[h].days <= 6 ? c[h].days == o && (d = 1) : 7 == c[h].days ? o >= 0 && o <= 4 && (d = 1) : 8 == c[h].days ? o >= 1 && o <= 5 && (d = 1) : 9 == c[h].days && (6 == o || 0 == o) && (d = 1),
                            1 == d && (n > c[h].start_hours && n < c[h].end_hours ? l = 1 : n == c[h].start_hours && n < c[h].end_hours ? s >= c[h].start_min && (l = 1) : n > c[h].start_hours && n == c[h].end_hours ? s <= c[h].end_min && (l = 1) : n == c[h].start_hours && n == c[h].end_hours && s >= c[h].start_min && s <= c[h].end_min && (l = 1),
                            1 == l && s >= c[h].start_min && s <= c[h].end_min && (r = 1)),
                            1 == l && 1 == d && (e = 1),
                            1 == e && (h = c.length + 1)
                        }
                    }
                }
                return e
            }(e),
            t.each(e.channels, function(t, a) {
                _(a) && (p++,
                f = a)
            }),
            "open" == e.settings.default_state && 1 == p && (e.settings.default_state = "click",
            i[a].settings.default_state = "click"),
            v && p > 0 && !t("#chaty-widget-" + e.id).length) {
                var m, u = P(e.settings);
                u = "right" == u ? "right" : "left";
                var w = (m = e,
                "vertical" != m.settings.icon_view ? "top" : "right" == P(m.settings) ? "left" : "right");
                if ("chat-view" == e.settings.cta_type) {
                    var $, C, k, S, T, M, z, I = "<div style='display: none' class='chaty chaty-has-chat-view chaty-id-" + e.id + " chaty-widget-" + e.id + " chaty-key-" + a + "' id='chaty-widget-" + e.id + "' data-key='" + a + "' data-id='" + e.id + "' data-identifier='" + e.identifier + "' data-nonce='" + e.settings.widget_token + "' ><div class='chaty-widget " + u + "-position'><div class='chaty-channels'><div class='chaty-i-trigger'></div></div></div></div>";
                    t("body").append(I),
                    C = ($ = e).id,
                    null == (k = F(C)) && (k = -1),
                    S = $.settings.cta_body,
                    T = $.settings.cta_head,
                    M = t("title").text(),
                    A(M) ? (S = S.replace(/{title}/g, ""),
                    T = T.replace(/{title}/g, "")) : (S = S.replace(/{title}/g, M),
                    T = T.replace(/{title}/g, M)),
                    S = S.replace(/{url}/g, "<a target='_blank' href='" + window.location.href + "'>" + window.location.href + "</a>"),
                    T = T.replace(/{url}/g, "<a target='_blank' href='" + window.location.href + "'>" + window.location.href + "</a>"),
                    z = "",
                    z += "<div style='display:none;' class='chaty-chat-view chaty-chat-view-" + C + " chaty-form-" + C + "' data-channel='chaty-chat-view' id='chaty-form-" + C + "-chaty-chat-view' data-widget='" + C + "' data-index='" + k + "'>",
                    z += "<div class='chaty-view-body'>",
                    z += "<div class='chaty-view-header'>" + T,
                    z += "<div role='button' class='chaty-close-view-list'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330'><path d='M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001s-5.858 15.355 0 21.213l150.004 150a15 15 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z'/></svg></div>",
                    z += "</div>",
                    z += "<div class='chaty-view-content'>",
                    z += "<div class='chaty-top-content'>",
                    z += S,
                    z += "</div>",
                    z += "<div class='chaty-view-channels'>",
                    z += "</div>",
                    z += "</div>",
                    z += "</div>",
                    z += "</div>",
                    t("#chaty-widget-" + C).append(z)
                } else {
                    var I = "<div style='display: none' class='chaty chaty-id-" + e.id + " chaty-widget-" + e.id + " chaty-key-" + a + "' id='chaty-widget-" + e.id + "' data-key='" + a + "' data-id='" + e.id + "' data-identifier='" + e.identifier + "' data-nonce='" + e.settings.widget_token + "' ><div class='chaty-widget " + u + "-position'><div class='chaty-channels'><div class='chaty-channel-list'></div><div class='chaty-i-trigger'></div></div></div></div>";
                    t("body").append(I)
                }
                E(e.triggers.auto_hide_widget) && parseInt(e.triggers.hide_after) > 0 && (t("#chaty-widget-" + e.id).addClass("auto-hide-chaty"),
                t("#chaty-widget-" + e.id).attr("data-time", e.triggers.hide_after));
                var L = H(e.id, "c-widget");
                if (t("#chaty-widget-" + e.id).addClass(e.settings.show_cta),
                1 == p && "chat-view" != e.settings.cta_type) {
                    "vertical" != e.settings.icon_view && (w = "right" != u ? "right" : "left");
                    var D = j(f, e.id, w);
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger").html(D),
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger").addClass("single-channel"),
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel").addClass("single"),
                    t("#chaty-widget-" + e.id + " .chaty-widget").addClass("has-single");
                    var G = e.settings.cta_text;
                    A(G) || (G = b(G)),
                    "first_click" == e.settings.show_cta && (L ? (t("#chaty-widget-" + e.id + " .chaty-tooltip").removeClass("chaty-tooltip"),
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel").addClass("active").addClass("chaty-tooltip").addClass("pos-" + w),
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel").append("<span class='on-hover-text'>" + G + "</span>").addClass("active").addClass("has-on-hover"),
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel a").append("<span class='on-hover-text'>" + G + "</span>").addClass("has-on-hover")) : t("#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel a").append("<span class='on-hover-text'>" + G + "</span>").removeClass("active").addClass("has-on-hover")),
                    "all_time" == e.settings.show_cta && t("#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-tooltip").append("<span class='on-hover-text'>" + G + "</span>").addClass("active").addClass("has-on-hover");
                    var N = f;
                    ("Instagram" != N.channel_type || "#ffffff" != N.icon_color && "#fff" != N.icon_color) && (h += "#chaty-widget-" + e.id + " ." + N.channel_type + "-channel .color-element{ fill: " + N.icon_color + "; color: " + N.icon_color + ";}",
                    h += "#chaty-widget-" + e.id + " .channel-icon-" + N.channel_type + " .color-element{ fill: " + N.icon_color + "; color: " + N.icon_color + ";}"),
                    h += "#chaty-widget-" + e.id + " ." + N.channel_type + "-channel .chaty-custom-icon { background-color: " + N.icon_color + "; }",
                    h += "#chaty-widget-" + e.id + " ." + N.channel_type + "-channel .chaty-svg { background-color: " + N.icon_color + ";}",
                    h += "#chaty-widget-" + e.id + " .channel-icon-" + N.channel_type + " .chaty-svg { background-color: " + N.icon_color + ";}",
                    "Contact_Us" == N.channel_type && (h += ".chaty-contact-form-box #chaty-submit-button-" + e.id + " {background-color: " + N.contact_form_settings.button_bg_color + "; color: " + N.contact_form_settings.button_text_color + ";} ")
                } else {
                    t.each(e.channels, function(a, c) {
                        if (_(c)) {
                            if (B(c.channel_type) && (c.channel_type = c.channel),
                            "chat-view" == e.settings.cta_type) {
                                var i = j(c, e.id, "top");
                                t(".chaty-chat-view-" + e.id + " .chaty-view-channels").append(i)
                            } else {
                                var i = j(c, e.id, w);
                                t("#chaty-widget-" + e.id + " .chaty-channel-list").append(i)
                            }
                            ("Instagram" != c.channel_type || "#ffffff" != c.icon_color && "#fff" != c.icon_color) && (h += "#chaty-widget-" + e.id + " ." + c.channel_type + "-channel .color-element{ fill: " + c.icon_color + "; color: " + c.icon_color + ";}",
                            h += "#chaty-widget-" + e.id + " .channel-icon-" + c.channel_type + " .color-element{ fill: " + c.icon_color + "; color: " + c.icon_color + ";}"),
                            h += "#chaty-widget-" + e.id + " ." + c.channel_type + "-channel .chaty-custom-icon { background-color: " + c.icon_color + "; }",
                            h += "#chaty-widget-" + e.id + " ." + c.channel_type + "-channel .chaty-svg { background-color: " + c.icon_color + ";}",
                            h += "#chaty-widget-" + e.id + " .channel-icon-" + c.channel_type + " .chaty-svg { background-color: " + c.icon_color + ";}",
                            h += ".chaty-chat-view-" + e.id + " ." + c.channel_type + "-channel .chaty-custom-icon { background-color: " + c.icon_color + "; }",
                            h += ".chaty-chat-view-" + e.id + " ." + c.channel_type + "-channel .chaty-svg { background-color: " + c.icon_color + ";}",
                            h += ".chaty-chat-view-" + e.id + " .channel-icon-" + c.channel_type + " .chaty-svg { background-color: " + c.icon_color + ";}",
                            "Contact_Us" == c.channel_type && (h += ".chaty-contact-form-box #chaty-submit-button-" + e.id + " {background-color: " + c.contact_form_settings.button_bg_color + "; color: " + c.contact_form_settings.button_text_color + ";} ")
                        }
                    });
                    var V, Y, R = (V = e.settings,
                    Y = e.id,
                    ("" == V.widget_icon ? V.widget_icon = "chat-base" : "chat-image" == V.widget_icon && A(V.widget_icon_url) && (V.widget_icon = "chat-base"),
                    "chat-image" == V.widget_icon) ? "<span class='chaty-svg' style='background-color: " + V.widget_color + "'><img src='" + V.widget_icon_url + "' alt='Chaty Widget' /></span>" : '<span class="chaty-svg">' + function t(a, e) {
                        switch (a) {
                        case "chat-smile":
                            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496.8 507.1 54 54" style="enable-background-color:new -496.8 507.1 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill:#FFFFFF;} .chaty-sts2{fill:none;stroke:#808080;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}</style><g><circle cx="-469.8" cy="534.1" r="27" fill="' + e + '"/></g><path class="chaty-sts1" d="M-459.5,523.5H-482c-2.1,0-3.7,1.7-3.7,3.7v13.1c0,2.1,1.7,3.7,3.7,3.7h19.3l5.4,5.4c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.2,0,0.4,0c0.4-0.2,0.6-0.6,0.6-0.9v-21.5C-455.8,525.2-457.5,523.5-459.5,523.5z"/><path class="chaty-sts2" d="M-476.5,537.3c2.5,1.1,8.5,2.1,13-2.7"/><path class="chaty-sts2" d="M-460.8,534.5c-0.1-1.2-0.8-3.4-3.3-2.8"/></svg>';
                        case "chat-bubble":
                            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496.9 507.1 54 54" style="enable-background-color:new -496.9 507.1 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill:#FFFFFF;}</style><g><circle  cx="-469.9" cy="534.1" r="27" fill="' + e + '"/></g><path class="chaty-sts1" d="M-472.6,522.1h5.3c3,0,6,1.2,8.1,3.4c2.1,2.1,3.4,5.1,3.4,8.1c0,6-4.6,11-10.6,11.5v4.4c0,0.4-0.2,0.7-0.5,0.9   c-0.2,0-0.2,0-0.4,0c-0.2,0-0.5-0.2-0.7-0.4l-4.6-5c-3,0-6-1.2-8.1-3.4s-3.4-5.1-3.4-8.1C-484.1,527.2-478.9,522.1-472.6,522.1z   M-462.9,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-464.6,534.6-463.9,535.3-462.9,535.3z   M-469.9,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-471.7,534.6-471,535.3-469.9,535.3z   M-477,535.3c1.1,0,1.8-0.7,1.8-1.8c0-1.1-0.7-1.8-1.8-1.8c-1.1,0-1.8,0.7-1.8,1.8C-478.8,534.6-478.1,535.3-477,535.3z"/></svg>';
                        case "chat-db":
                            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496 507.1 54 54" style="enable-background-color:new -496 507.1 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill:#FFFFFF;}</style><g><circle  cx="-469" cy="534.1" r="27" fill="' + e + '"/></g><path class="chaty-sts1" d="M-464.6,527.7h-15.6c-1.9,0-3.5,1.6-3.5,3.5v10.4c0,1.9,1.6,3.5,3.5,3.5h12.6l5,5c0.2,0.2,0.3,0.2,0.7,0.2c0.2,0,0.2,0,0.3,0c0.3-0.2,0.5-0.5,0.5-0.9v-18.2C-461.1,529.3-462.7,527.7-464.6,527.7z"/><path class="chaty-sts1" d="M-459.4,522.5H-475c-1.9,0-3.5,1.6-3.5,3.5h13.9c2.9,0,5.2,2.3,5.2,5.2v11.6l1.9,1.9c0.2,0.2,0.3,0.2,0.7,0.2c0.2,0,0.2,0,0.3,0c0.3-0.2,0.5-0.5,0.5-0.9v-18C-455.9,524.1-457.5,522.5-459.4,522.5z"/></svg>';
                        default:
                            return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-496 507.7 54 54" style="enable-background-color:new -496 507.7 54 54;" xml:space="preserve"><style type="text/css">.chaty-sts1{fill: #FFFFFF;}.chaty-st0{fill: #808080;}</style><g><circle cx="-469" cy="534.7" r="27" fill="' + e + '"/></g><path class="chaty-sts1" d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"/><path class="chaty-st0" d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"/><path class="chaty-st0" d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"/></svg>'
                        }
                    }(V.widget_icon, V.widget_color) + "</span>"), G = e.settings.cta_text;
                    "first_click" != e.settings.show_cta || L || (G = "");
                    var X = w;
                    "horizontal" == e.settings.icon_view && (X = "left" == u ? "right" : "left"),
                    A(G) || (G = b(G));
                    var J = '<div class="chaty-channel chaty-cta-main chaty-tooltip has-on-hover pos-' + X + ' active" data-widget="' + e.id + '" ><span class="on-hover-text">' + G + '</span><div class="chaty-cta-button"><button type="button" class="open-chaty">' + R + '<span class="sr-only">Open chaty</span></button><button type="button" class="open-chaty-channel"></button></div></div>';
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger").html(J);
                    var Z = '<div class="chaty-channel chaty-cta-close chaty-tooltip pos-' + w + '" data-hover="' + e.settings.close_text + '"><div class="chaty-cta-button"><button type="button"><span class="chaty-svg"><svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26" rx="26" ry="26" fill="' + e.settings.widget_color + '"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="white"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="white"></rect></svg></span><span class="sr-only">Hide chaty</span></button></div></div>';
                    t("#chaty-widget-" + e.id + " .chaty-i-trigger").append(Z)
                }
                var Q, K, tt, ta, L = H(e.id, "c-widget");
                L && ("open" != e.settings.default_state || 1 == p) && (Q = e.settings,
                H(K = e.id, "c-widget") && E(Q.is_pending_mesg_enabled) && parseInt(Q.pending_mesg_count) > 0 && (t("#chaty-widget-" + K + " .chaty-widget").hasClass("has-single") ? "sheen" == Q.attention_effect || "spin" == Q.attention_effect || "pulse" == Q.attention_effect ? t("#chaty-widget-" + K + " .chaty-i-trigger .chaty-channel").append("<span class='ch-pending-msg'>" + Q.pending_mesg_count + "</span>") : t("#chaty-widget-" + K + " .chaty-i-trigger .chaty-channel .chaty-svg").append("<span class='ch-pending-msg'>" + Q.pending_mesg_count + "</span>") : "jump" == Q.attention_effect || "waggle" == Q.attention_effect || "blink" == Q.attention_effect || "pulse-icon" == Q.attention_effect ? t("#chaty-widget-" + K + " .chaty-i-trigger .chaty-cta-main .chaty-cta-button").append("<span class='ch-pending-msg'>" + Q.pending_mesg_count + "</span>") : t("#chaty-widget-" + K + " .chaty-i-trigger .chaty-cta-main").append("<span class='ch-pending-msg'>" + Q.pending_mesg_count + "</span>")),
                tt = e.settings,
                H(ta = e.id, "c-widget") && "none" != tt.attention_effect && "" != tt.attention_effect && (t("#chaty-widget-" + ta).attr("data-animation", tt.attention_effect),
                t("#chaty-widget-" + ta + " .chaty-widget").hasClass("has-single") ? t("#chaty-widget-" + ta + " .chaty-i-trigger .chaty-channel .chaty-svg").addClass("chaty-animation-" + tt.attention_effect) : t("#chaty-widget-" + ta + " .chaty-i-trigger .chaty-cta-main .chaty-cta-button").addClass("chaty-animation-" + tt.attention_effect)));
                var te, tc, ti = 0;
                "open" != e.settings.default_state || E(e.settings.show_close_button) || (t("#chaty-widget-" + e.id + " .chaty-widget").addClass("chaty-no-close-button").addClass("chaty-open"),
                ti = 1),
                E(e.settings.is_google_analytics_enabled) && (t("#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel").addClass("has-gae"),
                t("#chaty-widget-" + e.id + " .chaty-i-trigger.single-channel .chaty-channel").addClass("has-gae"),
                t(".chaty-outer-forms.chaty-whatsapp-form.chaty-form-" + e.id + " form.add-analytics").addClass("form-google-analytics")),
                E(e.settings.has_custom_css) && !A(e.settings.custom_css) && (g += e.settings.custom_css),
                "hover" == e.settings.default_state ? t("#chaty-widget-" + e.id).addClass("open-on-hover") : "open" == e.settings.default_state && (t("#chaty-widget-" + e.id + " .chaty-widget").addClass("default-open"),
                (L || !E(e.settings.show_close_button)) && t("#chaty-widget-" + e.id + " .chaty-widget").addClass("chaty-open"));
                var tn = (te = e.settings.widget_size,
                tc = e.settings.custom_widget_size,
                te);
                if (tn = parseInt(tn),
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel > a {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel > a .chaty-custom-icon {display:block; width: " + tn + "px; height: " + tn + "px; line-height: " + tn + "px; font-size: " + parseInt(tn / 2) + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel button {width: " + tn + "px; height: " + tn + "px; margin: 0; padding:0; outline: none; border-radius: 50%;}",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel .chaty-svg {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel .chaty-svg img {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel span.chaty-icon {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel a {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-channel-list .chaty-channel .chaty-svg .chaty-custom-channel-icon {width: " + tn + "px; height: " + tn + "px; line-height: " + tn + "px; display: block; font-size:" + parseInt(tn / 2) + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-cta-button {background-color: " + e.settings.widget_color + "; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-cta-button button {background-color: " + e.settings.widget_color + "; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel > a {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel > a .chaty-custom-icon {display:block; width: " + tn + "px; height: " + tn + "px; line-height: " + tn + "px; font-size: " + parseInt(tn / 2) + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel button {width: " + tn + "px; height: " + tn + "px; margin: 0; padding:0; outline: none; border-radius: 50%;}",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel .chaty-svg {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel .chaty-svg img {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel span.chaty-icon {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel a {width: " + tn + "px; height: " + tn + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .chaty-channel .chaty-svg .chaty-custom-channel-icon {width: " + tn + "px; height: " + tn + "px; line-height: " + tn + "px; display: block; font-size:" + parseInt(tn / 2) + "px; }",
                h += "#chaty-widget-" + e.id + " .chaty-i-trigger .ch-pending-msg {background-color: " + e.settings.pending_mesg_count_bgcolor + "; color: " + e.settings.pending_mesg_count_color + "; }",
                "vertical" == e.settings.icon_view) {
                    h += "#chaty-widget-" + e.id + " .chaty-channel-list {height: " + p * (tn + 8) + "px; }",
                    h += "#chaty-widget-" + e.id + " .chaty-channel-list {width: " + (tn + 8) + "px; }";
                    for (var ts = 0; ts <= p; ts++)
                        h += "#chaty-widget-" + e.id + " .chaty-open .chaty-channel-list .chaty-channel:nth-child(" + (ts + 1) + ") {-webkit-transform: translateY(-" + (tn + 8) * (p - ts - ti) + "px); transform: translateY(-" + (tn + 8) * (p - ts - ti) + "px);}"
                } else {
                    t("#chaty-widget-" + e.id + " .chaty-widget").addClass("hor-mode"),
                    h += "#chaty-widget-" + e.id + " .chaty-channel-list {width: " + p * (tn + 8) + "px; }",
                    h += "#chaty-widget-" + e.id + " .chaty-channel-list {height: " + tn + "px; }";
                    for (var ts = 0; ts <= p; ts++)
                        h += "#chaty-widget-" + e.id + " .chaty-widget.left-position.hor-mode.chaty-open .chaty-channel-list .chaty-channel:nth-child(" + (ts + 1) + ") {-webkit-transform: translateX(" + (tn + 8) * (p - ts - ti) + "px); transform: translateX(" + (tn + 8) * (p - ts - ti) + "px);}",
                        h += "#chaty-widget-" + e.id + " .chaty-widget.right-position.hor-mode.chaty-open .chaty-channel-list .chaty-channel:nth-child(" + (ts + 1) + ") {-webkit-transform: translateX(-" + (tn + 8) * (p - ts - ti) + "px); transform: translateX(-" + (tn + 8) * (p - ts - ti) + "px);}"
                }
                var to = e.settings.bottom_spacing
                  , th = e.settings.side_spacing;
                h += "#chaty-widget-" + e.id + " .chaty-widget {bottom: " + to + "px}",
                "left" == u ? (h += "#chaty-widget-" + e.id + " .chaty-widget {left: " + th + "px; right: auto;}",
                h += ".chaty-outer-forms.pos-left.chaty-form-" + e.id + " {left: " + th + "px}",
                t(".chaty-form-" + e.id).addClass("pos-left")) : (h += "#chaty-widget-" + e.id + " .chaty-widget {right: " + th + "px; left:auto;}",
                t(".chaty-form-" + e.id).addClass("pos-right"),
                h += ".chaty-outer-forms.pos-right.chaty-form-" + e.id + " {right: " + th + "px; left:auto;}"),
                t(".chaty-form-" + e.id).show();
                var tl = tn + 15 + parseInt(to);
                h += ".chaty-outer-forms.active.chaty-form-" + e.id + " {-webkit-transform: translateY(-" + tl + "px); transform: translateY(-" + tl + "px)} ",
                h += "#chaty-widget-" + e.id + ".chaty:not(.form-open) .chaty-widget.chaty-open + .chaty-chat-view {-webkit-transform: translateY(-" + tl + "px); transform: translateY(-" + tl + "px)} ",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip:after {background-color: " + e.settings.cta_bg_color + "; color: " + e.settings.cta_text_color + "}",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip.pos-top:before {border-top-color: " + e.settings.cta_bg_color + "; }",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip.pos-left:before {border-left-color: " + e.settings.cta_bg_color + "; }",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip.pos-right:before {border-right-color: " + e.settings.cta_bg_color + ";}",
                h += "#chaty-widget-" + e.id + " .on-hover-text {background-color: " + e.settings.cta_bg_color + "; color: " + e.settings.cta_text_color + "}",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip.pos-top .on-hover-text:before {border-top-color: " + e.settings.cta_bg_color + "; }",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip.pos-left .on-hover-text:before {border-left-color: " + e.settings.cta_bg_color + "; }",
                h += "#chaty-widget-" + e.id + " .chaty-tooltip.pos-right .on-hover-text:before {border-right-color: " + e.settings.cta_bg_color + ";}";
                var tr = tl + 72 + tn;
                tr > 0 && (h += ".chaty-outer-forms.chaty-form-" + e.id + " .chaty-agent-body {max-height: calc(100vh - " + tr + "px); overflow-y: auto; } "),
                h += "#chaty-form-" + e.id + "-chaty-chat-view .chaty-view-header {background-color: " + e.settings.cta_head_bg_color + ";}",
                h += "#chaty-form-" + e.id + "-chaty-chat-view .chaty-view-header {color: " + e.settings.cta_head_text_color + ";}",
                h += "#chaty-form-" + e.id + "-chaty-chat-view .chaty-view-header svg {fill : " + e.settings.cta_head_text_color + ";}";
                var td = tl + 72 + tn;
                td > 0 && (h += ".chaty-outer-forms.chaty-whatsapp-form.chaty-form-" + e.id + " .chaty-whatsapp-content {max-height: calc(100vh - " + td + "px); overflow-y: auto; } ");
                var ty = tl + 82 + tn;
                if (ty > 0 && (h += ".chaty-outer-forms.chaty-contact-form-box.chaty-form-" + e.id + " .chaty-contact-inputs {max-height: calc(100vh - " + ty + "px); overflow-y: auto; } "),
                (25 != to || 25 != th) && (t(".chaty-outer-forms.chaty-form-" + e.id).addClass("custom-cht-pos"),
                t("#chaty-widget-" + e.id).addClass("has-custom-pos")),
                H(e.id, "v-widget") && (E(e.triggers.exit_intent) || E(e.triggers.has_time_delay) || E(e.triggers.has_display_after_page_scroll) > 0) ? (E(e.triggers.has_time_delay) && 0 == parseInt(e.triggers.time_delay) ? (x(e.id),
                t("#chaty-widget-" + e.id).addClass("active")) : E(e.triggers.has_time_delay) && parseInt(e.triggers.time_delay) > 0 && (l = !0,
                parseInt(e.triggers.time_delay) > r && (r = e.triggers.time_delay),
                t("#chaty-widget-" + e.id).addClass("on-chaty-delay"),
                t("#chaty-widget-" + e.id).addClass("delay-time-" + parseInt(e.triggers.time_delay)),
                t("#chaty-widget-" + e.id).attr("data-time", parseInt(e.triggers.time_delay))),
                E(e.triggers.has_display_after_page_scroll) && 0 == parseInt(e.triggers.display_after_page_scroll) ? (x(e.id),
                t("#chaty-widget-" + e.id).addClass("active")) : E(e.triggers.has_display_after_page_scroll) && parseInt(e.triggers.display_after_page_scroll) > 0 && (d = !0,
                t("#chaty-widget-" + e.id).addClass("on-chaty-scroll"),
                t("#chaty-widget-" + e.id).addClass("page-scroll-" + parseInt(e.triggers.display_after_page_scroll)),
                t("#chaty-widget-" + e.id).attr("data-scroll", parseInt(e.triggers.display_after_page_scroll))),
                E(e.triggers.exit_intent) && (y = !0,
                t("#chaty-widget-" + e.id).addClass("on-chaty-exit-intent"))) : (x(e.id),
                t("#chaty-widget-" + e.id).addClass("active")),
                !A(e.settings.font_family) && "none" != e.settings.font_family) {
                    var tg = e.settings.font_family;
                    -1 != t.inArray(tg, o) ? "System Stack" == tg && (tg = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif") : (t("head").append('<link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=' + tg + '&display=swap">'),
                    t("head").append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=' + tg + '&display=swap">')),
                    h += "#chaty-widget-" + e.id + ", #chaty-widget-" + e.id + " .chaty-tooltip:after {font-family: " + tg + "}"
                }
            }
            y && void (s ? function a() {
                if (window.history && window.history.pushState && y) {
                    function e() {
                        y && "" !== location.hash.split("#!/")[1] && "" === window.location.hash && U()
                    }
                    var c = 100;
                    window.history.state && window.history.state.page && (c = window.history.state.page),
                    window.history.pushState({
                        page: c + 1
                    }, ""),
                    window.history.pushState({
                        page: c + 2
                    }, ""),
                    window.onpopstate = function() {
                        e()
                    }
                    ,
                    window.history.onpopstate = function() {
                        e()
                    }
                    ,
                    window.addEventListener("popstate", function() {
                        e()
                    }),
                    document.addEventListener("backbutton", function() {
                        e()
                    }),
                    window.addEventListener("backbutton", function() {
                        e()
                    }),
                    t(window).on("popstate", function() {
                        e()
                    })
                }
            }() : t(document).mouseleave(function(t) {
                var a, e, c = "mouseout";
                a = document,
                e = function(t) {
                    null == t.toElement && null == t.relatedTarget && U()
                }
                ,
                a.addEventListener ? (a.addEventListener(c, e, !1),
                U()) : a.attachEvent && a.attachEvent("on" + c, e)
            })),
            "" != h && (t("#custom-chaty-css").length || t("head").append("<style id='custom-chaty-css'></style>"),
            t("#custom-chaty-css").append(h)),
            "" != g && (t("#custom-advance-chaty-css").length || t("head").append("<style id='custom-advance-chaty-css'></style>"),
            t("#custom-advance-chaty-css").append(g)),
            i.length
        }),
        t("#custom-advance-chaty-css").length || t("head").append("<style id='custom-advance-chaty-css'></style>"),
        t("#custom-advance-chaty-css").append(v)),
        t(".chaty-tooltip").each(function() {
            "" == t(this).data("hover") && t(this).removeClass("left").removeClass("right").removeClass("top").removeClass("chaty-tooltip")
        }),
        t(".chaty.auto-hide-chaty").length && (c = setInterval(function() {
            var a = ++m;
            if (t(".chaty.auto-hide-chaty.hide-after-" + m).length) {
                var e = t(".chaty.auto-hide-chaty.hide-after-" + a).data("id");
                t(".chaty-form-" + e).removeClass("active"),
                t(".chaty.auto-hide-chaty.hide-after-" + a).removeClass("active"),
                t("#chaty-widget-0" + e).removeClass("auto-hide-chaty")
            }
            0 == t(".chaty.auto-hide-chaty").length && clearInterval(c)
        }, 1e3)),
        l && (e = setInterval(function() {
            if (t(".chaty.delay-time-" + ++p).length) {
                var a = t(".chaty.delay-time-" + p).data("id");
                L(a)
            }
        }, 1e3)),
        d && (t(window).on("scroll", function() {
            if (d) {
                var a = t(document).height() - t(window).height()
                  , e = t(window).scrollTop();
                if (0 != a) {
                    var c = parseInt(e / a * 100);
                    if (f <= c) {
                        var i = f;
                        f = c;
                        for (var n = i; n <= c; n++)
                            -1 == t.inArray(n, g) && t(".chaty.on-chaty-scroll.page-scroll-" + n).length && t(".chaty.on-chaty-scroll.page-scroll-" + n).each(function() {
                                var a = t(this).data("id");
                                t(this).removeClass("on-chaty-scroll"),
                                L(a)
                            });
                        f = c
                    }
                }
            }
        }),
        window.innerWidth,
        document.documentElement.clientWidth)
    }
    function b(t) {
        return new DOMParser().parseFromString(t, "text/html").documentElement.textContent
    }
    function _(t) {
        if (E(t.is_agent)) {
            if (t.agent_data.length && (!s && E(t.is_agent_desktop) || s && E(t.is_agent_mobile)))
                return !0
        } else if ((!s && E(t.is_desktop) || s && E(t.is_mobile)) && ("" != t.value || "Contact_Us" == t.channel))
            return !0;
        return !1
    }
    function x(a) {
        if (t("#chaty-widget-" + a + " .chaty-channel.chaty-default-open").length) {
            var e = t("#chaty-widget-" + a + " .chaty-channel.chaty-default-open a.chaty-whatsapp-form").data("form");
            if (!A(e) && H(a, "c-" + t("#chaty-widget-" + a + " .chaty-channel.chaty-default-open").data("channel")) && (t("#" + e).addClass("is-active"),
            t("#" + e).length)) {
                var c = t("#chaty-widget-" + a + " .chaty-channel.chaty-default-open a.chaty-whatsapp-form").html();
                if (w(a),
                t("#chaty-widget-" + a).find(".ch-pending-msg").remove(),
                t("#chaty-widget-" + a + " .chaty-widget").removeClass("chaty-open"),
                t("#chaty-widget-" + a).addClass("form-open"),
                t("#" + e).addClass("active"),
                t("#chaty-widget-" + a + " .open-chaty-channel").html(c),
                t("#chaty-widget-" + a).addClass("active"),
                t("#chaty-widget-" + a).addClass("active"),
                t("#chaty-widget-" + a).hasClass("auto-hide-chaty")) {
                    var n = parseInt(t("#chaty-widget-" + a).data("time"));
                    n > 0 && (n += m,
                    t("#chaty-widget-" + a).addClass("hide-after-" + n))
                }
                if ("on" == chaty_settings.data_analytics_settings) {
                    var o = []
                      , l = t("#chaty-widget-" + a + " .chaty-channel.chaty-default-open").data("channel")
                      , r = H(a, "v-" + l);
                    if (r && void 0 !== l && (D(a, "v-" + l),
                    o.push(l)),
                    !h && o.length) {
                        var d = t("#chaty-widget-" + a).data("nonce");
                        t.ajax({
                            url: chaty_settings.ajax_url,
                            data: {
                                widgetId: a,
                                channels: o,
                                userId: a,
                                isMobile: s,
                                widgetNonce: d,
                                action: "update_chaty_channel_views"
                            },
                            dataType: "json",
                            type: "post",
                            success: function(t) {},
                            error: function(t, a, e) {
                                monitorErrorLog(t, a, e)
                            }
                        })
                    }
                }
                return
            }
        }
        if (t("#chaty-widget-" + a).addClass("active"),
        t("#chaty-widget-" + a).hasClass("auto-hide-chaty")) {
            var n = parseInt(t("#chaty-widget-" + a).data("time"));
            n > 0 && (n += m,
            t("#chaty-widget-" + a).addClass("hide-after-" + n))
        }
        var y = H(a, "v-widget");
        if (y) {
            D(a, "v-widget"),
            t("#chaty-widget-" + a).data("user");
            var l, o = [], g = 0, p = 0;
            i[t("#chaty-widget-" + a).data("key")];
            var f = N("activechatyWidgets");
            if (null != f ? (f = f.split(","),
            -1 == t.inArray(a, f) && (f.push(a),
            G("activechatyWidgets", f = f.join(","), 1))) : (f = a,
            G("activechatyWidgets", f, 1)),
            t("#chaty-widget-" + a + " .chaty-widget").hasClass("has-single")) {
                g = 1,
                l = t("#chaty-widget-" + a + " .chaty-channel").data("channel");
                var r = H(a, "v-" + l);
                r && void 0 !== l && (D(a, "v-" + l),
                o.push(l))
            } else
                t("#chaty-widget-" + a + " .chaty-widget").hasClass("chaty-open") && (p = 1,
                t("#chaty-widget-" + a + " .chaty-channel-list .chaty-channel").each(function() {
                    l = t(this).data("channel"),
                    H(a, "v-" + l) && void 0 !== l && (D(a, "v-" + l),
                    o.push(l))
                }));
            if (y && !h) {
                var d = t("#chaty-widget-" + a).data("nonce");
                h || t.ajax({
                    url: chaty_settings.ajax_url,
                    data: {
                        widgetId: a,
                        channels: o,
                        userId: a,
                        isMobile: s,
                        isOpen: p,
                        isSingle: g,
                        widgetNonce: d,
                        action: "update_chaty_widget_views"
                    },
                    dataType: "json",
                    type: "post",
                    success: function(t) {},
                    error: function(t, a, e) {
                        monitorErrorLog(t, a, e)
                    }
                })
            }
        }
    }
    function C(a) {
        var e = t("#chaty-widget-" + a).data("user");
        chatySaasCheckCookie("triggeredFor" + e) || G("triggeredFor" + e, a, 2)
    }
    function k(t, a) {
        return t
    }
    function j(a, e, c) {
        var i = "";
        if (E(a.is_agent)) {
            if (a.agent_data.length) {
                var n = 0
                  , o = [];
                if (t.each(a.agent_data, function(t, a) {
                    "" != a.value && (n++,
                    o = a)
                }),
                n > 0) {
                    var h, l, r, d, y, g, p = F(e);
                    return null == p && (p = -1),
                    r = a,
                    d = e,
                    y = "",
                    null == (g = F(d)) && (g = -1),
                    y += "<div style='display:none;' class='chaty-outer-forms chaty-agent-data chaty-agent-data-" + d + " chaty-form-" + d + "' data-channel='" + r.channel_type + "' id='chaty-form-" + d + "-" + r.channel_type + "' data-widget='" + d + "' data-index='" + g + "'>",
                    y += "<div class='chaty-form'>",
                    y += "<div class='chaty-form-body'>",
                    y += "<div role='button' class='chaty-close-agent-list'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330' xmlns:v='https://vecta.io/nano'><path d='M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001s-5.858 15.355 0 21.213l150.004 150a15 15 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z'/></svg></div>",
                    y += "<div class='chaty-agent-header agent-info-" + d + "-" + r.channel + "'>",
                    A(r.header_text) || (y += "<div class='agent-main-header'>" + r.header_text + "</div>"),
                    A(r.header_sub_text) || (y += "<div class='agent-sub-header'>" + r.header_sub_text + "</div>"),
                    y += "</div>",
                    y += "<div class='chaty-agent-body agents-body-" + d + " agent-body-" + d + "-" + r.channel + "'>",
                    t.each(r.agent_data, function(a, e) {
                        if ("" != e.value) {
                            var c = e.svg_icon;
                            A(e.agent_image) || (c = "<img class='chaty-agent-img' src='" + e.agent_image + "' alt='" + e.agent_title + "' />");
                            var i = function a(e, c, i, n, o, h) {
                                var l = e.value
                                  , r = "_blank";
                                if ("Whatsapp" == c.channel_type) {
                                    var d = T(e.value);
                                    s ? (r = "",
                                    l = "https://wa.me/" + d) : (r = "_blank",
                                    l = "https://web.whatsapp.com/send/?phone=" + d)
                                } else
                                    "WeChat" == c.channel_type ? (r = "",
                                    l = "javascript:;") : "Email" == c.channel_type ? (r = "",
                                    l = "mailto:" + e.value) : "Facebook_Messenger" == c.channel_type ? r = s ? "" : "_blank" : "SMS" == c.channel_type ? (r = "",
                                    l = "sms:" + e.value) : "Telegram" == c.channel_type ? (l = "https://telegram.me/" + (l = M(e.value, "@")),
                                    r = "_blank") : "Twitter" == c.channel_type ? l = "https://twitter.com/" + t.trim(e.value) : "Instagram" == c.channel_type ? l = "https://www.instagram.com/" + t.trim(e.value) : "Phone" == c.channel_type ? (r = "",
                                    l = "tel:" + t.trim(e.value)) : "Skype" == c.channel_type ? (r = "",
                                    l = "skype:" + t.trim(e.value) + "?chat") : "Snapchat" == c.channel_type ? l = "https://www.snapchat.com/add/" + t.trim(e.value) : "Vkontakte" == c.channel_type ? l = "https://vk.me/" + t.trim(e.value) : "Linkedin" == c.channel_type ? l = "personal" == e.link_type ? "https://www.linkedin.com/in/" + t.trim(e.value) : "https://www.linkedin.com/company/" + t.trim(e.value) : "Viber" == c.channel_type ? (isNaN(l = M(e.value, "+")) || (l = l.replace("+", ""),
                                    navigator.userAgent.match(/(iPod|iPhone|iPad)/) && (l = "+" + l),
                                    l = "viber://chat?number=" + l),
                                    r = "") : "TikTok" == c.channel_type && (l = "https://www.tiktok.com/@" + (l = M(t.trim(e.value), "@")),
                                    r = "");
                                return "<a href='" + l + "' target='" + r + "'><span class='chaty-agent-icon'>" + o + "</span><span class='chaty-agent-title'>" + h + "</span></a>"
                            }(e, r, d, a, c, e.agent_title);
                            y += "<div class='chaty-agent agent-info-" + d + "-" + r.channel + " agent-info-" + a + "'>" + i + "</div>"
                        }
                        v += ".agent-info-" + d + "-" + r.channel + ".agent-info-" + a + " .chaty-agent-icon img { background-color: " + e.agent_bg_color + "; } ",
                        ("Instagram" != r.channel || "#ffffff" != e.agent_bg_color && "#fff" != e.agent_bg_color) && (v += ".agent-info-" + d + "-" + r.channel + ".agent-info-" + a + " .chaty-agent-icon .color-element { fill: " + e.agent_bg_color + "; } "),
                        v += ".agent-info-" + d + "-" + r.channel + ".agent-info-" + a + " .chaty-custom-icon { background-color: " + e.agent_bg_color + "; } "
                    }),
                    y += "</div>",
                    y += "</div>",
                    y += "</div>",
                    y += "</div>",
                    v += ".chaty-agent-header.agent-info-" + d + "-" + r.channel + " { background-color: " + r.header_bg_color + "; color: " + r.header_text_color + " } ",
                    v += ".agent-info-" + d + "-" + r.channel + " .chaty-close-agent-list svg { fill: " + r.header_text_color + " } ",
                    t("body").append(y),
                    h = I(a, e),
                    l = z(a, h, c, e),
                    ("Instagram" != a.channel || "#ffffff" != a.icon_color && "#fff" != a.icon_color) && (v += ".chaty-agent-" + e + "-" + a.channel + " .color-element {fill: " + a.icon_color + "; color: " + a.icon_color + ";}"),
                    v += ".chaty-agent-" + e + "-" + a.channel + " .chaty-custom-icon { background-color: " + a.icon_color + ";}",
                    v += ".chaty-agent-" + e + "-" + a.channel + " .chaty-svg-img { background-color: " + a.icon_color + ";}",
                    "<div data-form='chaty-form-" + e + "-" + a.channel_type + "' class='chaty-channel chaty-agent-button chaty-agent-" + e + "-" + a.channel + " " + a.channel + "-channel" + i + "' id='" + a.channel + "-" + e + "-channel' data-id='" + a.channel_type + "-" + e + "' data-widget='" + e + "' data-channel='" + a.channel + "'>" + l + "</div>"
                }
            }
        } else {
            B(a.channel_type) && (a.channel_type = a.channel);
            var h = I(a, e)
              , l = z(a, h, c, e);
            return "Contact_Us" == a.channel_type ? i += " has-chaty-box chaty-contact-form" : "Whatsapp" == a.channel_type && E(a.has_welcome_message) && !A(a.chat_welcome_message) && E(a.is_default_open) && H(e, "c-" + a.channel_type) && (i += " chaty-default-open"),
            "<div class='chaty-channel " + a.channel + "-channel" + i + "' id='" + a.channel + "-" + e + "-channel' data-id='" + a.channel_type + "-" + e + "' data-widget='" + e + "' data-channel='" + a.channel + "'>" + l + "</div>"
        }
    }
    function S(a, e, c, i, n) {
        var o = e.value
          , h = "_blank";
        if ("Whatsapp" == a.channel_type) {
            var l = T(e.value);
            s ? (h = "",
            o = "https://wa.me/" + l) : (h = "_blank",
            o = "https://web.whatsapp.com/send?phone=" + l)
        } else
            "WeChat" == a.channel_type ? (h = "",
            o = "javascript:;") : "Email" == a.channel_type ? (h = "",
            o = "mailto:" + e.value) : "Facebook_Messenger" == a.channel_type ? h = s ? "" : "_blank" : "SMS" == a.channel_type ? (h = "",
            o = "sms:" + e.value) : "Telegram" == a.channel_type ? (o = "https://telegram.me/" + (o = M(e.value, "@")),
            h = "_blank") : "Twitter" == a.channel_type ? o = "https://twitter.com/" + t.trim(e.value) : "Phone" == a.channel_type ? (h = "",
            o = "tel:" + t.trim(e.value)) : "Skype" == a.channel_type ? (h = "",
            o = "skype:" + t.trim(e.value) + "?chat") : "Snapchat" == a.channel_type ? o = "https://www.snapchat.com/add/" + t.trim(e.value) : "Vkontakte" == a.channel_type ? o = "https://vk.me/" + t.trim(e.value) : "Linkedin" == a.channel_type ? o = "personal" == e.link_type ? "https://www.linkedin.com/in/" + t.trim(e.value) : "https://www.linkedin.com/company/" + t.trim(e.value) : "Viber" == a.channel_type ? (isNaN(o = M(e.value, "+")) || (o = o.replace("+", ""),
            navigator.userAgent.match(/(iPod|iPhone|iPad)/) && (o = "+" + o),
            o = "viber://chat?number=" + o),
            h = "") : "TikTok" == a.channel_type && (o = "https://www.tiktok.com/@" + (o = M(t.trim(e.value), "@")),
            h = "");
        return "<a href='" + o + "' target='" + h + "'  class='chaty-tooltip pos-" + n + "' data-form='chaty-form-" + c + "-" + a.channel_type + "' data-hover='" + a.hover_text + "'>" + i + "</a>"
    }
    function T(t) {
        return t = (t = (t = (t = M(t, "+")).replace(/ /g, "")).replace(/-/g, "")).replace(/_/g, "")
    }
    function M(a, e) {
        for (a = t.trim(a); a.charAt(0) == e; )
            a = a.substring(1);
        for (; a.charAt(a.length - 1) == e; )
            a = a.substring(0, a.length - 1);
        return a
    }
    function z(a, e, c, i) {
        var n, o, h, l, r, d, y, g, p = "";
        if (E(a.is_agent))
            a.url = "javascript:;",
            a.target = "";
        else if ("Whatsapp" == a.channel_type) {
            if (E(a.has_welcome_message) && !A(a.chat_welcome_message))
                a.url = "javascript:;",
                a.target = "",
                p += " has-chaty-box chaty-whatsapp-form",
                function a(e, c) {
                    var i = ""
                      , n = F(c);
                    null == n && (n = -1);
                    var o = "https://web.whatsapp.com/send"
                      , h = "";
                    if (s ? o = "https://wa.me/" + e.value : (o = E(e.is_use_web_version) ? "https://web.whatsapp.com/send" : "https://wa.me/" + e.value,
                    h = "_blank"),
                    i += "<div style='display:none;' class='chaty-outer-forms chaty-whatsapp-form chaty-form-" + c + "' data-channel='" + e.channel_type + "' id='chaty-form-" + c + "-" + e.channel_type + "' data-widget='" + c + "' data-index='" + n + "'>",
                    i += "<div class='chaty-whatsapp-form'>",
                    i += "<div class='chaty-whatsapp-body'>",
                    i += "<div role='button' class='close-chaty-form is-whatsapp-btn'><div class='chaty-close-button'></div></div>",
                    i += "<div class='chaty-whatsapp-content'>",
                    i += "<div class='chaty-whatsapp-message'></div>",
                    i += "</div>",
                    i += "</div>",
                    i += "<div class='chaty-whatsapp-footer'>",
                    i += "<form action='" + o + "' target='" + h + "' class='whatsapp-chaty-form " + (E(e.is_default_open) ? "add-analytics" : "") + "' data-widget='" + c + "' data-channel='" + e.channel_type + "'>",
                    i += "<div class='chaty-whatsapp-data'>",
                    i += "<div class='chaty-whatsapp-field'>",
                    i += "<input name='text' type='text' class='csass-whatsapp-input' />",
                    i += "</div>",
                    i += "<div class='chaty-whatsapp-button'>",
                    i += "<button type='submit' >",
                    i += "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='#ffffff' d='M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z'></path></svg>",
                    i += "</button>",
                    i += "</div>",
                    i += "</div>",
                    !s && E(e.is_use_web_version) && (i += "<input type='hidden' name='phone' value='" + e.value + "' />"),
                    i += "</form>",
                    i += "</div>",
                    i += "</div>",
                    i += "</div>",
                    t("body").append(i),
                    t("#chaty-form-" + c + "-" + e.channel_type + " .chaty-whatsapp-message").html(e.chat_welcome_message),
                    !A(e.pre_set_message)) {
                        var l = e.pre_set_message
                          , r = t("title").text();
                        l = (l = A(r) ? l.replace(/{title}/g, "") : l.replace(/{title}/g, r)).replace(/{url}/g, window.location),
                        t("#chaty-form-" + c + "-" + e.channel_type + " .csass-whatsapp-input").val(l)
                    }
                    t("#chaty-form-" + c + "-" + e.channel_type).show()
                }(a, i);
            else {
                var f = "";
                if (!A(a.pre_set_message)) {
                    f = decodeURI(a.pre_set_message);
                    var v = t("title").text();
                    f = (f = A(v) ? f.replace(/{title}/g, "") : f.replace(/{title}/g, v)).replace(/{url}/g, window.location),
                    f = encodeURIComponent(f)
                }
                s ? (a.target = "",
                a.url = "https://wa.me/" + a.value + "?text=" + f) : (a.target = "_blank",
                E(a.is_use_web_version) ? a.url = "https://wa.me/" + a.value + "?text=" + f : a.url = "https://web.whatsapp.com/?phone=" + a.value + "&text=" + f)
            }
        } else if ("WeChat" == a.channel_type) {
            A(a.qr_code_image_url) || (n = a,
            h = "",
            null == (l = F(o = i)) && (l = -1),
            h += "<div style='display:none;' class='chaty-outer-forms chaty-wechat-form chaty-form-" + o + "' data-channel='" + n.channel_type + "' id='chaty-form-" + o + "-" + n.channel_type + "' data-widget='" + o + "' data-index='" + l + "'>",
            h += "<div class='chaty-form'>",
            h += "<div class='chaty-form-body'>",
            h += "<div role='button' class='close-chaty-form is-whatsapp-btn'><div class='chaty-close-button'></div></div>",
            h += "<div class='qr-code-image'><img src='" + n.qr_code_image_url + "' alt='" + n.title + "' /></div>",
            h += "</div>",
            h += "</div>",
            h += "</div>",
            t("body").append(h),
            a.url = "javascript:;",
            a.target = "",
            p += " has-chaty-box chaty-qr-code-form")
        } else if ("Contact_Us" == a.channel_type) {
            r = a,
            y = "",
            null == (g = F(d = i)) && (g = -1),
            y += "<div style='display:none;' class='chaty-outer-forms chaty-contact-form-box chaty-form-" + d + "' data-channel='" + r.channel_type + "' id='chaty-form-" + d + "-" + r.channel_type + "' data-widget='" + d + "' data-index='" + g + "'>",
            y += "<div class='chaty-form'>",
            y += "<div class='chaty-form-body'>",
            y += "<div role='button' class='close-chaty-form'><div class='chaty-close-button'></div></div>",
            y += "<form class='chaty-ajax-contact-form' id='chaty-ajax-contact-form-" + g + "' method='post' data-channel='" + r.channel_type + "' data-widget='" + d + "' data-token='" + r.widget_token + "' data-index='" + r.widget_index + "'>",
            y += "<div class='chaty-contact-form-body'>",
            y += "<div class='chaty-contact-form-title'>" + r.contact_form_settings.contact_form_title + "</div>",
            y += "<div class='chaty-contact-inputs'>",
            t.each(r.contact_fields, function(t, a) {
                y += "<div class='chaty-contact-input'>";
                var e = E(a.is_required) ? "is-required" : "";
                "textarea" == a.type ? y += "<textarea type='" + a.type + "' class='chaty-textarea-field " + e + " field-" + a.field + "' placeholder='" + a.placeholder + "' name='" + a.field + "' id='" + a.field + "-" + d + "' ></textarea>" : y += "<input type='" + a.type + "' class='chaty-input-field " + e + " field-" + a.field + "' placeholder='" + a.placeholder + "' name='" + a.field + "' id='" + a.field + "-" + d + "' />",
                y += "</div>"
            }),
            y += "</div>",
            y += "<div class='chaty-contact-form-button'><button type='submit' id='chaty-submit-button-" + d + "' class='chaty-submit-button'>" + r.contact_form_settings.button_text + "</button></div>",
            y += "</div>",
            y += "</form>",
            y += "</div>",
            y += "</div>",
            y += "</div>",
            t("body").append(y),
            a.url = "javascript:;",
            a.target = "",
            p += " has-chaty-box chaty-contact-us-form"
        } else if ("Email" == a.channel_type) {
            if (!A(a.mail_subject)) {
                var m = decodeURI(a.mail_subject)
                  , v = t("title").text();
                m = (m = A(v) ? m.replace(/{title}/g, "") : m.replace(/{title}/g, v)).replace(/{url}/g, window.location),
                m = encodeURIComponent(m),
                a.url += "?subject=" + m
            }
        } else
            "Viber" == a.channel_type ? (a.value = M(a.value, "+"),
            s && !isNaN(a.value) && navigator.userAgent.match(/(iPod|iPhone|iPad)/) && (a.value = "+" + a.value),
            a.url = "viber://chat?number=" + a.value,
            a.target = "") : "Vkontakte" == a.channel_type && (a.url = "https://vk.me/" + t.trim(a.value));
        u = "Link" == a.channel || "Custom_Link" == a.channel || "Custom_Link_3" == a.channel || "Custom_Link_4" == a.channel || "Custom_Link_5" == a.channel ? A(a.hover_text) ? a.channel : a.hover_text : a.channel;
        var w = "";
        return A(a.click_event) || (w = 'onclick="' + a.click_event + '"',
        a.target = "",
        a.url = "javascript:;"),
        "<a href='" + a.url + "' " + w + " target='" + a.target + "' rel='nofollow noopener' aria-label='" + u + "' class='chaty-tooltip pos-" + c + p + "' data-form='chaty-form-" + i + "-" + a.channel_type + "' data-hover='" + a.hover_text + "'>" + e + "</a>"
    }
    function b(t) {
        return new DOMParser().parseFromString(t, "text/html").documentElement.textContent
    }
    function F(a) {
        var e = null;
        return i.length && t.each(i, function(t, c) {
            c.id == a && (e = t)
        }),
        e
    }
    function A(a) {
        return null == a || "" == a || "" == t.trim(a)
    }
    function I(t) {
        return "" != t.custom_image_url && "null" != t.custom_image_url ? "<span class='chaty-icon channel-icon-" + t.channel_type + "'><span class='chaty-svg chaty-svg-img'><img src='" + t.custom_image_url + "' alt='" + t.hover_text + "' /></span></span>" : "<span class='chaty-icon channel-icon-" + t.channel_type + "'><span class='chaty-svg'>" + t.svg_icon + "</span></span>"
    }
    function B(a) {
        return "" == a || "" == t.trim(a) || null == a || "null" == a
    }
    function P(t) {
        return "custom" == t.position ? t.custom_position : t.position
    }
    function U() {
        y && t(".on-chaty-exit-intent").length && t(".on-chaty-exit-intent").each(function() {
            var a = t(this).data("id");
            t(this).removeClass("on-chaty-exit-intent"),
            L(a),
            t("#chaty-widget-" + a + " .chaty-widget").append("<div class='chaty-exit-intent'></div>"),
            setTimeout(function() {
                t(".chaty-exit-intent").addClass("animate"),
                setTimeout(function() {
                    t(".chaty-exit-intent").removeClass("animate")
                }, 2500)
            }, 500)
        })
    }
    function L(a) {
        x(a),
        t(".chaty-widget-" + a).removeClass("on-chaty-delay"),
        t(".chaty-widget-" + a).removeClass("on-chaty-exit-intent"),
        t(".chaty-widget-" + a).removeClass("on-chaty-scroll"),
        t(".chaty.on-chaty-delay").length || (clearInterval(e),
        l = !1),
        t(".chaty.on-chaty-exit-intent").length || (y = !1),
        t(".chaty.on-chaty-scroll").length || (d = !1)
    }
    function W(t) {
        for (t = t.toString(); t.length < 2; )
            t = "0" + t;
        return t
    }
    function E(t) {
        return "1" == t || 1 == t || !0 == t || "true" == t || "yes" == t || "on" == t
    }
    function q(t, a) {
        if (isNaN(a)) {
            var e = new Date(t.toLocaleString("en-US", {
                timeZone: a
            }))
              , c = t.getTime() - e.getTime();
            return new Date(t.getTime() - c)
        }
        var i = new Date;
        if (i = i.toLocaleString("en-US", {
            timeZone: "UTC"
        }),
        i = new Date(i),
        -1 != a.indexOf("+")) {
            var n = a.replace("+", "")
              , s = parseInt(n)
              , o = 60 * parseFloat(n % s);
            (o = i.getUTCMinutes() + o) > 59 && (s += parseInt(o / 60),
            o %= 60),
            i.setUTCHours(i.getUTCHours() + s, o)
        } else if (-1 != a.indexOf("-")) {
            var n = a.replace("-", "")
              , s = parseInt(n)
              , o = 60 * parseFloat(n % s);
            (o = i.getUTCMinutes() - o) < 0 && (s -= parseInt(o / 60),
            o %= 60),
            i.setUTCHours(i.getUTCHours() - s, -o)
        }
        var c = t.getTime() - i.getTime();
        return new Date(t.getTime() - c)
    }
    function O() {
        return n = "",
        "undefined" != typeof Storage && null != window.sessionStorage.getItem("chaty_user_country_code") ? n = window.sessionStorage.getItem("chaty_user_country_code") : V("chaty_user_country_code") && (n = N("chaty_user_country_code")),
        n
    }
    function D(t, a) {
        var e = N("chatyWidget_" + t)
          , c = [];
        null != e && "" != e && (c = JSON.parse(e));
        var i = !1;
        if (c.length > 0)
            for (var n = 0; n < c.length; n++)
                c[n].k == a && (i = !0,
                c[n].v = new Date);
        i || c.push({
            k: a,
            v: new Date
        }),
        G("chatyWidget_" + t, e = JSON.stringify(c), "7")
    }
    function H(t, a) {
        var e, c = function t(a, e) {
            var c = N("chatyWidget_" + a)
              , i = [];
            if (null != c && "" != c && (i = JSON.parse(c)),
            i.length > 0) {
                for (var n = 0; n < i.length; n++)
                    if (i[n].k == e)
                        return i[n].v
            }
            return null
        }(t, a);
        if (null != c && "" != c) {
            if (c = new Date(c),
            !(Math.floor(Math.abs(new Date - c) / 864e5) >= 2))
                return !1
        }
        return !0
    }
    function G(t, a, e) {
        var c = new Date;
        c.setTime(c.getTime() + 864e5 * e);
        var i = "expires=" + c.toUTCString();
        document.cookie = t + "=" + a + "; " + i + "; path=/; SameSite=Lax"
    }
    function N(t) {
        for (var t = t + "=", a = document.cookie.split(";"), e = 0; e < a.length; e++) {
            for (var c = a[e]; " " == c.charAt(0); )
                c = c.substring(1);
            if (0 == c.indexOf(t))
                return c.substring(t.length, c.length)
        }
        return null
    }
    function V(t) {
        var a = N(t);
        return "" != a && null !== a
    }
    function Y(t) {
        document.cookie = t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }
    function R() {
        return dd = (today = new Date).getDate(),
        mm = today.getMonth() + 1,
        yyyy = today.getFullYear(),
        dd < 10 && (dd = "0" + dd),
        mm < 10 && (mm = "0" + mm),
        yyyy + "-" + mm + "-" + dd
    }
    function X(t) {
        console.log(t)
    }
    t(document).ready(function() {
        var e, c = RegExp("(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)", "i"), o = navigator.userAgent;
        c.test(o) && (h = !0),
        s ? t("body").addClass("cht-in-mobile") : t("body").addClass("cht-in-desktop"),
        ("on" != chaty_settings.data_analytics_settings || "off" == chaty_settings.data_analytics_settings) && (h = !0),
        "undefined" == typeof chaty_settings || 0 == chaty_settings.chaty_widgets.length ? console.log("Chaty settings doesn't exists") : (i = chaty_settings.chaty_widgets,
        e = !1,
        i.length && t.each(i, function(t, a) {
            E(a.triggers.has_countries) && !A(a.triggers.countries) && a.triggers.countries.length && (e = !0)
        }),
        e ? "" != (n = O()) ? $() : t.get("https://www.cloudflare.com/cdn-cgi/trace", function(t) {
            var a, e = t.match("loc=(.*)");
            e.length > 1 && (e = e[1]) && ("" == (e = e.toUpperCase()) && (e = "-"),
            a = e,
            "undefined" != typeof Storage ? null == window.sessionStorage.getItem("chaty_user_country_code") && window.sessionStorage.setItem("chaty_user_country_code", a) : V("chaty_user_country_code") || G("chaty_user_country_code", a, 365),
            $())
        }) : $()),
        t(window).height() > t(window).width() ? t("body").addClass("cht-portrait").removeClass("cht-landscape") : t("body").addClass("cht-landscape").removeClass("cht-portrait"),
        t(document).on("click", "html, body", function(a) {
            t(".form-open").removeClass("form-open"),
            t(".chaty-outer-forms").removeClass("active"),
            t(".chaty .chaty-widget.chaty-no-close-button").addClass("chaty-open")
        }),
        t(document).on("click", ".chaty, .chaty-outer-forms", function(t) {
            t.stopPropagation()
        }),
        t(document).on("click", ".chaty-close-view-list", function() {
            t(this).closest(".chaty").find(".chaty-widget").removeClass("chaty-open")
        }),
        t(document).on("submit", ".whatsapp-chaty-form", function() {
            if (t(this).hasClass("form-google-analytics")) {
                var a = "Whatsapp";
                if (window.hasOwnProperty("gtag") && gtag("event", "chaty_" + a, {
                    eventCategory: "chaty_" + a,
                    event_action: "chaty_" + a,
                    method: "chaty_" + a
                }),
                window.hasOwnProperty("ga")) {
                    var e = window.ga.getAll()[0];
                    e && e.send("event", "click", {
                        eventCategory: "chaty_" + a,
                        eventAction: "chaty_" + a,
                        method: "chaty_" + a
                    })
                }
            }
            var c = t(this).data("widget")
              , i = t(this).data("channel")
              , n = H(c, "c-" + i);
            if ((!A(c) || 0 == c) && n) {
                D(c, "c-" + i);
                var o = t("#chaty-widget-" + c).data("nonce");
                h || t.ajax({
                    url: chaty_settings.ajax_url,
                    data: {
                        widgetId: c,
                        userId: c,
                        isMobile: s,
                        channel: i,
                        nonce: o,
                        action: "update_chaty_channel_click"
                    },
                    dataType: "json",
                    method: "post"
                })
            }
            t("#chaty-widget-" + c).length && (t("#chaty-widget-" + c).removeClass("form-open"),
            t(this).closest(".chaty-outer-forms").removeClass("active"),
            t("#chaty-widget-" + c).find(".chaty-widget").hasClass("cssas-no-close-button") && t("#chaty-widget-" + c).find(".chaty-widget").addClass("chaty-open"))
        }),
        t(document).on("click", ".chaty-close-button, .chaty-close-agent-list", function(a) {
            a.preventDefault(),
            a.stopPropagation();
            var e = t(this).closest(".chaty-outer-forms").data("widget");
            if ((!A(e) || 0 == e) && (t("#chaty-widget-" + e).length && (t("#chaty-widget-" + e).removeClass("form-open"),
            t(this).closest(".chaty-outer-forms").removeClass("active"),
            t("#chaty-widget-" + e).find(".chaty-widget").hasClass("chaty-no-close-button") && t("#chaty-widget-" + e).find(".chaty-widget").addClass("chaty-open")),
            t(this).closest(".chaty-whatsapp-form").length)) {
                var c = t(this).closest(".chaty-outer-forms").data("channel");
                !A(c) && H(e, "c-" + c) && D(e, "c-" + c),
                H(e, "v-widget") && x(e)
            }
        }),
        t(document).on("click", "a.chaty-qr-code-form", function(a) {
            a.preventDefault();
            var e = t(this).data("form");
            if (!A(e) && t("#" + e).length) {
                var c = t(this).html();
                t("#" + e).hasClass("active") ? (t(this).closest(".chaty").find(".chaty-widget").addClass("chaty-open"),
                t(this).closest(".chaty").removeClass("form-open"),
                t("#" + e).removeClass("active")) : (t(this).closest(".chaty").find(".chaty-widget").removeClass("chaty-open"),
                t(this).closest(".chaty").addClass("form-open"),
                t("#" + e).addClass("active"),
                t(this).closest(".chaty").find(".open-chaty-channel").html(c))
            }
        }),
        t(document).on("click", "a.chaty-contact-us-form", function(a) {
            a.preventDefault();
            var e = t(this).data("form");
            if (!A(e) && t("#" + e).length) {
                var c = t(this).html();
                t("#" + e).hasClass("active") ? (t(this).closest(".chaty").find(".chaty-widget").addClass("chaty-open"),
                t(this).closest(".chaty").removeClass("form-open"),
                t("#" + e).removeClass("active")) : (t(this).closest(".chaty").find(".chaty-widget").removeClass("chaty-open"),
                t(this).closest(".chaty").addClass("form-open"),
                t("#" + e).addClass("active"),
                t("#" + e).find(".chaty-ajax-success-message").remove(),
                t("#" + e).find(".chaty-ajax-error-message").remove(),
                t("#" + e).find(".has-chaty-error").removeClass("has-chaty-error"),
                t(this).closest(".chaty").find(".open-chaty-channel").html(c))
            }
        }),
        t(document).on("click", "a.chaty-whatsapp-form", function(a) {
            a.preventDefault();
            var e = t(this).data("form");
            if (!A(e) && t("#" + e).length) {
                var c = t(this).html();
                t("#" + e).addClass("is-active"),
                t("#" + e).hasClass("active") ? (t(this).closest(".chaty").find(".chaty-widget").addClass("chaty-open"),
                t(this).closest(".chaty").removeClass("form-open"),
                t("#" + e).removeClass("active")) : (t(this).closest(".chaty").find(".chaty-widget").removeClass("chaty-open"),
                t(this).closest(".chaty").addClass("form-open"),
                t("#" + e).addClass("active"),
                t(this).closest(".chaty").find(".chaty-widget").find(".open-chaty-channel").html(c))
            }
        }),
        t(document).on("click", ".chaty-channel.chaty-agent-button", function(a) {
            a.preventDefault();
            var e = t(this).data("form");
            if (!A(e) && t("#" + e).length) {
                if (t(this).closest(".chaty").find(".chaty-widget").hasClass("has-single")) {
                    if (t(this).closest(".chaty").hasClass("form-open"))
                        t(this).closest(".chaty").find(".chaty-widget").addClass("chaty-open"),
                        t(this).closest(".chaty").removeClass("form-open"),
                        t("#" + e).removeClass("active");
                    else {
                        var c = t(this).html();
                        t("#" + e).addClass("is-active"),
                        t(this).closest(".chaty").find(".chaty-widget").removeClass("chaty-open"),
                        t(this).closest(".chaty").addClass("form-open"),
                        t("#" + e).addClass("active"),
                        t(this).closest(".chaty").find(".open-chaty-channel").html(c)
                    }
                } else {
                    var c = t(this).html();
                    t("#" + e).addClass("is-active"),
                    t(this).closest(".chaty").find(".chaty-widget").removeClass("chaty-open"),
                    t(this).closest(".chaty").addClass("form-open"),
                    t("#" + e).addClass("active"),
                    t(this).closest(".chaty").find(".open-chaty-channel").html(c)
                }
            }
        }),
        t(document).on("click", ".chaty-channel.has-gae", function(e) {
            e.stopPropagation();
            var c = t(this).data("channel");
            if (c !== a && "" != c && null != c && (window.hasOwnProperty("gtag") && gtag("event", "chaty_" + c, {
                eventCategory: "chaty_" + c,
                event_action: "chaty_" + c,
                method: "chaty_" + c
            }),
            window.hasOwnProperty("ga"))) {
                var i = window.ga.getAll()[0];
                i && i.send("event", "click", {
                    eventCategory: "chaty_" + c,
                    eventAction: "chaty_" + c,
                    method: "chaty_" + c
                })
            }
        }),
        t(document).on("click", ".chaty-i-trigger:not(.single-channel)", function() {
            t(this).closest(".chaty").hasClass("form-open") ? (t(this).closest(".chaty").removeClass("form-open"),
            t(this).closest(".chaty-widget").addClass("chaty-open")) : t(this).closest(".chaty-widget").toggleClass("chaty-open"),
            t(".chaty-outer-forms.active").each(function() {
                t(this).removeClass("active");
                var a = t(this).data("widget");
                t("#chaty-widget-" + a).removeClass("form-open")
            }),
            t(this).closest(".chaty").find(".chaty-widget").hasClass("chaty-no-close-button") && t(this).closest(".chaty").find(".chaty-widget").addClass("chaty-open")
        }),
        s || t(document).on("mouseover", "body:not(.chaty-in-mobile) .chaty.open-on-hover .chaty-i-trigger:not(.single-channel)", function() {
            t(this).closest(".chaty-widget").hasClass("chaty-open") || t(this).closest(".chaty-widget").hasClass("on-chaty-widget") || (t(this).closest(".chaty-widget").addClass("on-chaty-widget"),
            t(this).find(".chaty-cta-main").trigger("click"))
        }).on("mouseleave", "body:not(.chaty-in-mobile) .chaty.open-on-hover .chaty-i-trigger:not(.single-channel)", function() {
            t(this).closest(".chaty-widget").hasClass("chaty-open") || t(this).closest(".chaty-widget").removeClass("on-chaty-widget")
        }),
        t(document).on("click", ".chaty-channel.single a", function() {
            if (t(this).closest(".chaty").hasClass("first_click")) {
                var a = t(this).closest(".chaty").data("id");
                D(a, "c-widget"),
                t(this).closest(".chaty-channel").removeClass("active")
            }
        }),
        t(document).on("click", ".chaty-channel", function(a) {
            var e, c, i, n = [], o = 0, l = t(this).closest(".chaty").data("id");
            if (void 0 !== l && void 0 !== (i = t("#chaty-widget-" + l).data("identifier"))) {
                var r = t("#chaty-widget-" + l).data("user");
                if (w(l),
                t(this).hasClass("chaty-cta-main") || t(this).hasClass("chaty-cta-close")) {
                    if (e = H(l, "c-widget"),
                    t("#chaty-widget-" + l).find(".ch-pending-msg").remove(),
                    e && (D(l, "c-widget"),
                    t(this).hasClass("chaty-cta-main"))) {
                        n = [],
                        t("#chaty-widget-" + l + " .chaty-channel-list").find(".chaty-channel").each(function() {
                            c = t(this).data("channel"),
                            (e = H(l, "v-" + c)) && void 0 !== c && (D(l, "v-" + c),
                            n.push(c))
                        });
                        var d = t("#chaty-widget-" + l).data("nonce");
                        h || t.ajax({
                            url: chaty_settings.ajax_url,
                            data: {
                                widgetId: l,
                                userId: r,
                                isMobile: s,
                                channels: n,
                                isSingle: 0,
                                nonce: d,
                                action: "update_chaty_widget_click"
                            },
                            dataType: "json",
                            method: "post"
                        })
                    }
                    t("#chaty-widget-" + l).hasClass("first_click") && (t("#chaty-widget-" + l + " .chaty-cta-main").removeClass("active"),
                    t("#chaty-widget-" + l + " .chaty-cta-main").removeClass("chaty-tooltip"))
                } else if (t(this).hasClass("single")) {
                    t("#chaty-widget-" + l).find(".ch-pending-msg").remove(),
                    e = H(l, "c-widget");
                    var d = t("#chaty-widget-" + l).data("nonce");
                    e && (D(l, "c-widget"),
                    o = 0,
                    n = [],
                    c = t(this).data("channel"),
                    (e = H(l, "c-" + c)) && (n.push(c),
                    o = 1),
                    h || t.ajax({
                        url: chaty_settings.ajax_url,
                        data: {
                            widgetId: l,
                            userId: r,
                            isMobile: s,
                            channels: n,
                            isSingle: o,
                            nonce: d,
                            action: "update_chaty_widget_click"
                        },
                        dataType: "json",
                        method: "post"
                    })),
                    t("#chaty-widget-" + l).hasClass("first_click") && (t("#chaty-widget-" + l + " .chaty-tooltip").removeClass("chaty-tooltip"),
                    t("#chaty-widget-" + l + " .single-channel a").addClass("chaty-tooltip"))
                } else if (t(this).hasClass("chaty-channel") && (c = t(this).data("channel"),
                e = H(l, "c-" + c))) {
                    D(l, "c-" + c);
                    var d = t("#chaty-widget-" + l).data("nonce");
                    h || t.ajax({
                        url: chaty_settings.ajax_url,
                        data: {
                            widgetId: l,
                            userId: r,
                            isMobile: s,
                            channel: c,
                            nonce: d,
                            action: "update_chaty_channel_click"
                        },
                        dataType: "json",
                        method: "post"
                    })
                }
            }
        }),
        t(document).on("submit", ".chaty-ajax-contact-form", function(a) {
            a.preventDefault();
            var e = 0;
            if (t(this).find(".has-chaty-error").each(function() {
                t(this).removeClass("has-chaty-error")
            }),
            t(this).find(".chaty-error-msg").remove(),
            t(this).find(".chaty-ajax-error-message").remove(),
            t(this).find(".chaty-ajax-success-message").remove(),
            t(this).find(".is-required").each(function() {
                "" == jQuery.trim(t(this).val()) && (e++,
                t(this).addClass("has-chaty-error"))
            }),
            0 == e) {
                var c = t(this);
                t(".chaty-contact-submit-btn").attr("disabled", !0),
                jQuery.ajax({
                    url: chaty_settings.ajax_url,
                    data: {
                        action: "chaty_front_form_save_data",
                        name: c.find(".field-name").length ? c.find(".field-name").val() : "",
                        email: c.find(".field-email").length ? c.find(".field-email").val() : "",
                        phone: c.find(".field-phone").length ? c.find(".field-phone").val() : "",
                        message: c.find(".field-message").length ? c.find(".field-message").val() : "",
                        nonce: c.data("token"),
                        channel: c.data("channel"),
                        widget: c.data("index"),
                        ref_url: window.location.href
                    },
                    type: "post",
                    async: !0,
                    defer: !0,
                    dataType: "json",
                    success: function(a) {
                        if (t(".chaty-ajax-error-message").remove(),
                        t(".chaty-ajax-success-message").remove(),
                        t(".chaty-contact-submit-btn").attr("disabled", !1),
                        1 == a.status)
                            t(".chaty-contact-inputs").append("<div class='chaty-ajax-success-message'>" + a.message + "</div>"),
                            t(".field-name, .field-email, .field-message, .field-phone").val(""),
                            "yes" == a.redirect_action && ("yes" == a.link_in_new_tab ? window.open(a.redirect_link, "_blank") : window.location = a.redirect_link),
                            "yes" == a.close_form_after && setTimeout(function() {
                                if (t(".chaty-outer-forms.active").length) {
                                    var a = t(".chaty-outer-forms.active").data("widget");
                                    (!A(a) || 0 == a) && t("#chaty-widget-" + a).length && (t("#chaty-widget-" + a).removeClass("form-open"),
                                    t(".chaty-outer-forms.active").removeClass("active"),
                                    t("#chaty-widget-" + a).find(".chaty-widget").hasClass("chaty-no-close-button") && t("#chaty-widget-" + a).find(".chaty-widget").addClass("chaty-open"))
                                }
                            }, 1e3 * parseInt(a.close_form_after_seconds));
                        else if (1 == a.error) {
                            if (a.errors.length)
                                for (var e = 0; e < a.errors.length; e++)
                                    t("." + a.errors[e].field).addClass("has-chaty-error"),
                                    t("." + a.errors[e].field).after("<span class='chaty-error-msg'>" + a.errors[e].message + "</span>")
                        } else
                            t(".chaty-contact-inputs").append("<div class='chaty-ajax-error-message'>" + a.message + "</div>")
                    }
                })
            } else
                t(".has-chaty-error:first").focus();
            return !1
        }),
        t(document).on("click", ".chaty-widget.has-single .chaty-i-trigger .chaty-channel:not(.chaty-agent-button).Phone-channel", function() {
            window.location = t(this).find("a").prop("href")
        }),
        t(document).on("click", ".chaty-widget.has-single .chaty-i-trigger .chaty-channel:not(.chaty-agent-button).Phone-channel a", function(t) {
            t.stopPropagation(),
            t.stopImmediatePropagation()
        })
    }),
    t(window).resize(function() {
        t(window).height() > t(window).width() ? t("body").addClass("cht-portrait").removeClass("cht-landscape") : t("body").addClass("cht-landscape").removeClass("cht-portrait")
    })
});
